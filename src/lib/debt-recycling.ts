/** Illustrative debt-recycling arithmetic. Not a forecast and not a client file. */

export const SKETCH = {
  homeLoan: 1_200_000,
  annualRate: 0.062,
  termYears: 25,
  surplusMonthly: 5_000,
  taxRate: 0.47,
  snapshotYears: [0, 5, 10, 15, 20, 25],
} as const;

export const YIELD_CASES = [
  {
    id: "10",
    rate: 0.1,
    label: "10% income",
    detail: "The income assumption this drawing was built to show. Income only. The asset value does not change.",
  },
  {
    id: "6.2",
    rate: 0.062,
    label: "6.2% income",
    detail: "Income level with the loan rate. Interest is covered. Nothing extra returns to the home loan.",
  },
  {
    id: "4",
    rate: 0.04,
    label: "4% income",
    detail: "A lower income figure, in the range of many dividends and residential rents before costs.",
  },
] as const;

export type YieldCaseId = (typeof YIELD_CASES)[number]["id"];

export type SketchYear = {
  year: number;
  home: number;
  investment: number;
  assets: number;
  extraHome: number;
  contractHome: number;
  /** After-tax portfolio cash applied to the home loan up to this year. */
  marginToHome: number;
  shortfall: number;
};

export type SketchResult = {
  incomeYield: number;
  repayment: number;
  homeClearedMonth: number | null;
  debtClearedMonth: number | null;
  extraClearedMonth: number | null;
  contractClearedMonth: number | null;
  /** Cash the household funds when portfolio income does not cover investment interest. */
  shortfall: number;
  /** After-tax portfolio cash applied to the home loan, after investment interest. */
  marginToHome: number;
  years: SketchYear[];
};

export function monthlyPayment(principal: number, annualRate: number, years: number) {
  const r = annualRate / 12;
  const n = Math.round(years * 12);
  if (r === 0) return principal / n;
  return (principal * r) / (1 - (1 + r) ** -n);
}

export const sketchRepayment = monthlyPayment(SKETCH.homeLoan, SKETCH.annualRate, SKETCH.termYears);

function clearedBalance(balance: number) {
  return balance <= 1 ? 0 : balance;
}

function amortiseHome(extraMonthly: number) {
  const r = SKETCH.annualRate / 12;
  const payment = sketchRepayment + extraMonthly;
  let balance = SKETCH.homeLoan;
  let cleared: number | null = null;
  const atYear = new Map<number, number>([[0, balance]]);
  const last = SKETCH.snapshotYears[SKETCH.snapshotYears.length - 1] * 12;

  for (let month = 1; month <= last; month += 1) {
    if (balance > 1) {
      balance += balance * r;
      balance = Math.max(0, balance - Math.min(balance, payment));
      if (balance <= 1 && cleared == null) cleared = month;
    }
    if (month % 12 === 0) atYear.set(month / 12, clearedBalance(balance));
  }

  return { cleared, atYear };
}

export function illustrate(incomeYield: number): SketchResult {
  const r = SKETCH.annualRate / 12;
  const y = incomeYield / 12;
  const last = SKETCH.snapshotYears[SKETCH.snapshotYears.length - 1] * 12;
  const contract = amortiseHome(0);
  const extra = amortiseHome(SKETCH.surplusMonthly);

  let home = SKETCH.homeLoan;
  let investment = 0;
  let assets = 0;
  let shortfall = 0;
  let marginToHome = 0;
  let homeClearedMonth: number | null = null;
  let debtClearedMonth: number | null = null;
  const atYear = new Map<number, { home: number; investment: number; assets: number; marginToHome: number; shortfall: number }>([
    [0, { home, investment, assets, marginToHome: 0, shortfall: 0 }],
  ]);

  for (let month = 1; month <= last; month += 1) {
    const investmentInterest = investment * r;
    const gross = assets * y;
    const tax = Math.max(0, gross - investmentInterest) * SKETCH.taxRate;
    const portfolioCash = gross - tax;

    if (home > 1) {
      home += home * r;
      home = Math.max(0, home - Math.min(home, sketchRepayment));

      let surplusLeft = SKETCH.surplusMonthly;
      if (home > 0 && surplusLeft > 0) {
        const recycled = Math.min(home, surplusLeft);
        home -= recycled;
        investment += recycled;
        assets += recycled;
        surplusLeft -= recycled;
      }

      const available = portfolioCash + surplusLeft;
      if (available < investmentInterest) {
        shortfall += investmentInterest - available;
      } else {
        let afterInterest = available - investmentInterest;
        if (home > 1 && afterInterest > 0) {
          const toHome = Math.min(home, afterInterest);
          home -= toHome;
          marginToHome += toHome;
          afterInterest -= toHome;
        }
        if (afterInterest > 0 && home <= 1) {
          investment = Math.max(0, investment - Math.min(investment, afterInterest));
        }
      }
    } else if (investment > 1) {
      const available = portfolioCash + SKETCH.surplusMonthly;
      if (available < investmentInterest) {
        shortfall += investmentInterest - available;
      } else {
        investment = Math.max(0, investment - Math.min(investment, available - investmentInterest));
      }
    }

    if (home <= 1 && homeClearedMonth == null) homeClearedMonth = month;
    if (home <= 1 && investment <= 1 && debtClearedMonth == null) debtClearedMonth = month;

    if (month % 12 === 0) {
      atYear.set(month / 12, {
        home: clearedBalance(home),
        investment: clearedBalance(investment),
        assets,
        marginToHome,
        shortfall,
      });
    }
  }

  return {
    incomeYield,
    repayment: sketchRepayment,
    homeClearedMonth,
    debtClearedMonth,
    extraClearedMonth: extra.cleared,
    contractClearedMonth: contract.cleared,
    shortfall,
    marginToHome,
    years: SKETCH.snapshotYears.map((year) => {
      const row = atYear.get(year);
      if (!row) throw new Error(`Missing year ${year}`);
      return {
        year,
        home: row.home,
        investment: row.investment,
        assets: row.assets,
        extraHome: extra.atYear.get(year) ?? 0,
        contractHome: contract.atYear.get(year) ?? 0,
        marginToHome: row.marginToHome,
        shortfall: row.shortfall,
      };
    }),
  };
}

export function aud(value: number) {
  return Math.round(value).toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  });
}

export function compactAud(value: number) {
  const rounded = Math.round(value);
  if (rounded <= 0) return "$0";
  if (rounded >= 1_000_000) {
    const millions = rounded / 1_000_000;
    const text = millions >= 10 ? millions.toFixed(0) : millions.toFixed(1).replace(/\.0$/, "");
    return `$${text}m`;
  }
  if (rounded >= 10_000) return `$${Math.round(rounded / 1000)}k`;
  return `$${(rounded / 1000).toFixed(1)}k`;
}

export function duration(months: number | null) {
  if (months == null) return "still outstanding at year 25";
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  if (remainder === 0) return years === 1 ? "1 year" : `${years} years`;
  const yearLabel = years === 1 ? "1 year" : `${years} years`;
  const monthLabel = remainder === 1 ? "1 month" : `${remainder} months`;
  if (years === 0) return monthLabel;
  return `${yearLabel} and ${monthLabel}`;
}
