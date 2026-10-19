import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { GeneralInfoLine } from "@/components/marketing";
import {
  SKETCH,
  YIELD_CASES,
  aud,
  compactAud,
  duration,
  illustrate,
  sketchRepayment,
  type SketchResult,
  type YieldCaseId,
} from "@/lib/debt-recycling";

const rateLabel = `${(SKETCH.annualRate * 100).toFixed(2)}%`;
const taxLabel = `${Math.round(SKETCH.taxRate * 100)}%`;

const flow = [
  {
    n: "01",
    title: "Surplus",
    body: `${aud(SKETCH.surplusMonthly)} a month, after a buffer that stays in offset. The buffer is not recycled, and it is not drawn here.`,
  },
  {
    n: "02",
    title: "Home loan",
    body: `The surplus is paid onto the owner-occupier split. The contractual repayment stays at ${aud(sketchRepayment)}. The bank does not recast the term.`,
  },
  {
    n: "03",
    title: "Redraw",
    body: `The same dollars are drawn that month on a separate interest-only split, at the same ${rateLabel}. The house secures both splits.`,
  },
  {
    n: "04",
    title: "Income assets",
    body: "The redraw buys a mix of assets held to produce income. The drawing does not name the assets. Their price does not change.",
  },
  {
    n: "05",
    title: "The margin",
    body: "Income, minus the investment interest, minus tax, goes back to the home loan. That cash is not redrawn.",
  },
  {
    n: "06",
    title: "Then the rest",
    body: "When the home loan reaches zero, recycling stops. The surplus and the after-tax income pay the investment debt. The assets stay.",
  },
];

const order = [
  {
    title: "The split comes first",
    body: "The Marginal Tax Bridge is the loan split, opened before the redraw. The purpose of the new debt is the investment, and the records say so. A mixed purpose is how a deduction fails.",
  },
  {
    title: "The buffer stays put",
    body: "Only surplus recycles. A plan that needs the offset to buy the assets does not have a buffer.",
  },
  {
    title: "The structure, then the assets",
    body: "A mix of income assets, sized to the cash flow, and only once the entity that will hold them can do so. A property search starts when that page exists.",
  },
  {
    title: "Income returns to the home loan",
    body: "After interest and tax, the margin reduces the non-deductible balance. It is not spent, and it is not borrowed again.",
  },
  {
    title: "Recycling has an end",
    body: "When the non-deductible debt is gone, the same surplus turns to the debt that remains. The investment split does not sit interest-only forever by default.",
  },
  {
    title: "A stop, written down",
    body: "If the income will not cover the interest, the page can say pay the home loan and do not borrow to invest. The 4% income switch is that picture.",
  },
];

function reading(result: SketchResult) {
  const year10 = result.years.find((year) => year.year === 10);
  if (!year10) return [];
  const gap = year10.extraHome - year10.home;
  const lines = [
    `In this sketch the home loan reaches zero in ${duration(result.homeClearedMonth)}. Paying the same surplus onto the loan and leaving it there takes ${duration(result.extraClearedMonth)}. The contract, with no surplus, takes ${duration(result.contractClearedMonth)}.`,
    `At year 10 the home loan is ${aud(year10.home)}. The investment debt is ${aud(year10.investment)}. The portfolio, at what was paid for it, is ${aud(year10.assets)}. Gross debt is ${aud(year10.home + year10.investment)}.`,
  ];
  if (gap > 1000) {
    lines.push(
      `The home loan is ${aud(gap)} lower at year 10 than the path that leaves the surplus on the loan. By then the portfolio has contributed ${aud(year10.marginToHome)} of after-tax cash to that loan. Paying the cash earlier also reduces later interest, so the two balances move further apart than the cash figure alone.`,
    );
  } else if (result.shortfall > 1000) {
    lines.push(
      `The home loan follows the extra-repayment date. The income does not cover the interest, so the portfolio adds no repayment of its own. Over the life of this drawing the household funds ${aud(result.shortfall)} of that gap from other cash. The investment debt is paid later, once the surplus turns from the home loan to the investment split.`,
    );
  } else {
    lines.push(
      "The income covers the interest and returns nothing extra to the home loan. The home-loan date matches the extra-repayment path. The surplus then pays the investment debt, and the assets stay.",
    );
  }
  lines.push(
    result.debtClearedMonth
      ? `Both debts reach zero in ${duration(result.debtClearedMonth)}. The portfolio is still there, at cost. This drawing does not sell it, and it does not invest any further surplus once the debts are gone.`
      : "At year 25 the investment debt is still outstanding in this drawing.",
  );
  return lines;
}

export function DebtChart({ result }: { result: SketchResult }) {
  const scale = SKETCH.homeLoan;
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[640px]">
        <div className="flex gap-3">
          <div className="flex h-72 w-12 shrink-0 flex-col justify-between pb-px text-right text-[11px] text-subtle">
            <span>{compactAud(scale)}</span>
            <span>{compactAud(scale / 2)}</span>
            <span>$0</span>
          </div>
          <div className="grid flex-1 grid-cols-6 gap-2 sm:gap-3">
            {result.years.map((year) => {
              const homePct = (year.home / scale) * 100;
              const investmentPct = (year.investment / scale) * 100;
              const assetPct = (year.assets / scale) * 100;
              return (
                <div key={year.year} className="flex min-w-0 flex-col">
                  <div className="relative h-72">
                    <div className="absolute inset-x-0 top-0 border-t border-primary/10" />
                    <div className="absolute inset-x-0 top-1/2 border-t border-primary/10" />
                    <div className="absolute inset-x-0 bottom-0 border-b border-primary/30" />
                    <div
                      className="absolute inset-x-2 bottom-0 flex flex-col justify-end"
                      style={{ height: `${homePct + investmentPct}%` }}
                    >
                      {investmentPct > 0 ? (
                        <div className="bg-accent" style={{ height: `${(investmentPct / (homePct + investmentPct)) * 100}%` }} />
                      ) : null}
                      {homePct > 0 ? (
                        <div className="bg-primary" style={{ height: `${(homePct / (homePct + investmentPct)) * 100}%` }} />
                      ) : null}
                    </div>
                    {year.assets > 0 ? (
                      <div
                        className="absolute inset-x-0 z-10 flex items-center"
                        style={{ bottom: `calc(${assetPct}% - 4px)` }}
                        title={`Portfolio at cost ${aud(year.assets)}`}
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-link ring-2 ring-card" />
                        <span className="h-0.5 flex-1 bg-link" />
                      </div>
                    ) : null}
                  </div>
                  <p className="mt-3 text-center text-[11px] font-semibold text-primary">Year {year.year}</p>
                  <p className="text-center text-[10px] leading-4 text-subtle">Home {compactAud(year.home)}</p>
                  <p className="text-center text-[10px] leading-4 text-subtle">Borrowed {compactAud(year.investment)}</p>
                  <p className="text-center text-[10px] leading-4 text-link">Assets {compactAud(year.assets)}</p>
                </div>
              );
            })}
          </div>
        </div>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="h-3 w-3 bg-primary" />
            Home loan, non-deductible
          </li>
          <li className="flex items-center gap-2">
            <span className="h-3 w-3 bg-accent" />
            Investment debt
          </li>
          <li className="flex items-center gap-2">
            <span className="h-0.5 w-5 bg-link" />
            Portfolio, at cost
          </li>
        </ul>
      </div>
    </div>
  );
}

function Assumption({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-2xl bg-muted px-5 py-5">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-accent">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

export function DebtRecyclingTeaser() {
  const sketch = illustrate(0.1);
  const year10 = sketch.years.find((year) => year.year === 10);
  if (!year10) return null;

  return (
    <section className="bg-background px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[980px]">
        <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-link">ILLUSTRATION ONLY · NOT A FORECAST</p>
        <h2 className="max-w-[20ch] font-display text-3xl font-medium leading-tight text-primary md:text-4xl">
          One surplus, two jobs, on a 10% income assumption.
        </h2>
        <p className="mt-4 max-w-[680px] text-base leading-[1.75] text-muted-foreground">
          An invented household pays {aud(SKETCH.surplusMonthly)} a month onto a {aud(SKETCH.homeLoan)} home loan, redraws those dollars into a mix of income assets, and sends whatever is left after interest and tax back to the home loan. Illustrative purposes only.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-card p-5 md:p-7">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-accent">IF THESE INPUTS STAYED STILL · 10% INCOME · NO GROWTH</p>
          <DebtChart result={sketch} />
          <p className="mt-4 text-xs leading-relaxed text-subtle">
            Navy is the home loan. Gold is the debt that bought the portfolio. The blue mark is the portfolio at cost. At year 10 the home loan is {aud(year10.home)} and {aud(year10.investment)} is still borrowed.
          </p>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            [aud(year10.home), "Home loan left at year 10"],
            [aud(year10.investment), "Still borrowed against the portfolio"],
            [aud(year10.contractHome), "Home loan if the surplus is never paid"],
          ].map(([figure, label]) => (
            <div key={label} className="rounded-2xl bg-muted px-5 py-6">
              <p className="font-display text-3xl font-medium text-primary">{figure}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[720px] text-sm leading-relaxed text-muted-foreground">
          Paying the surplus onto the loan and leaving it there would leave {aud(year10.extraHome)} on the home loan at year 10, and no portfolio. The 10% figure is an income assumption for this drawing. It is not a yield Avere expects, and the full page shows what happens when the income is lower.
        </p>
        <Link
          to="/tools/debt-recycling"
          className="mt-6 inline-block text-sm font-medium text-link underline decoration-link/30 underline-offset-4"
        >
          See the assumptions, the 6.2% and 4% cases, and the sequence
        </Link>
      </div>
    </section>
  );
}

export function DebtRecyclingIllustration() {
  const [yieldId, setYieldId] = useState<YieldCaseId>("10");
  const selected = YIELD_CASES.find((item) => item.id === yieldId) ?? YIELD_CASES[0];
  const result = useMemo(() => illustrate(selected.rate), [selected.rate]);
  const lines = reading(result);
  const year10 = result.years.find((year) => year.year === 10);

  return (
    <div>
      <section className="bg-primary px-6 pb-16 pt-14 md:px-10 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-[980px]">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-sky">
            ILLUSTRATION ONLY · GENERAL INFORMATION · AFSL 525361
          </p>
          <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(36px,6vw,60px)] font-medium leading-[1.08] text-primary-foreground">
            Debt recycling, drawn as one household.
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-[1.7] text-primary-foreground/80">
            Pay surplus onto the home loan. Borrow the same dollars back on a clean split. Buy a mix of income assets. Send whatever is left, after interest and tax, back to the non-deductible debt.
          </p>
          <div className="mt-8 max-w-[720px] rounded-sm border border-sky/40 bg-primary-foreground/5 px-5 py-4 text-sm leading-relaxed text-primary-foreground/85">
            Illustrative purposes only. One invented household, round numbers, and a 10% income assumption chosen for this drawing. It is not a client, not personal advice, and not a forecast. Avere does not describe 10% income as a conservative, likely, or expected yield.
          </div>
        </div>
      </section>

      <section id="assumptions" className="bg-background px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <h2 className="font-display text-3xl font-medium text-primary md:text-4xl">The inputs that have to stay still.</h2>
          <p className="mt-4 max-w-[680px] text-base leading-[1.75] text-muted-foreground">
            Every figure on this page is what these inputs produce if none of them move. Rates, tax, income and asset prices do move. The drawing has no second scenario hiding in a footnote.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <Assumption
              label="THE LOAN"
              body={`${aud(SKETCH.homeLoan)} owner-occupier, ${rateLabel} principal and interest, ${SKETCH.termYears} years left. The contractual repayment is ${aud(sketchRepayment)} a month and stays at that amount.`}
            />
            <Assumption
              label="THE SURPLUS"
              body={`${aud(SKETCH.surplusMonthly)} a month is paid onto the home loan and redrawn the same month. A buffer is assumed to remain in offset. It is outside the drawing.`}
            />
            <Assumption
              label="THE NEW SPLIT"
              body={`Interest-only at the same ${rateLabel}, while the home loan remains. Investment rates are often higher, and interest-only periods usually end on the lender's clock, often within five years. Neither is in this drawing. The house secures both splits.`}
            />
            <Assumption
              label="THE ASSETS"
              body="A mix of income-producing assets. Cost equals the amount drawn. The price does not rise or fall. Income is paid monthly. No franking credits, depreciation, fees, vacancy or credit losses."
            />
            <Assumption
              label="THE 10% FIGURE"
              body="Gross income of 10% a year is the assumption the drawing opens on. It is a high income hurdle. Cash, franked shares and residential rent do not start there. A portfolio built to pay 10% income takes credit risk, liquidity risk, or both. The switches below replace 10% with 6.2% and with 4%."
            />
            <Assumption
              label="THE TAX"
              body={`Tax is ${taxLabel} of income minus investment interest: the top marginal rate plus the Medicare levy. The interest is treated as deductible because the purpose of the split is the investment. Deductibility follows purpose, records and structure. A loss does not create a tax refund in this drawing. The Medicare levy surcharge is not included.`}
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <h2 className="font-display text-3xl font-medium text-primary md:text-4xl">How one dollar moves.</h2>
          <ol className="mt-8 grid gap-3 md:grid-cols-3">
            {flow.map((step) => (
              <li key={step.n} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-accent">{step.n}</p>
                <h3 className="mt-3 font-display text-2xl font-medium text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-link">ILLUSTRATIVE PURPOSES ONLY</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-primary md:text-4xl">The debt, if nothing else changes.</h2>
          <p className="mt-4 max-w-[680px] text-base leading-[1.75] text-muted-foreground">
            The home loan can fall quickly because the surplus hits that split first. Gross debt stays larger, because that surplus is borrowed back. The portfolio pulls the home loan further ahead only when its income clears the interest rate.
          </p>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Income assumption">
            {YIELD_CASES.map((item) => {
              const active = item.id === selected.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setYieldId(item.id)}
                  className={`rounded-sm px-4 py-3 text-[11px] font-semibold tracking-[0.14em] ${active ? "bg-primary text-primary-foreground" : "border border-border bg-card text-primary"}`}
                >
                  {item.label.toUpperCase()}
                </button>
              );
            })}
          </div>
          <p className="mt-4 max-w-[680px] text-sm leading-relaxed text-muted-foreground">{selected.detail}</p>
          <div className="mt-8 rounded-2xl border border-border bg-card p-5 md:p-7">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-accent">
              ILLUSTRATION ONLY · {selected.label.toUpperCase()} · PRICE OF THE ASSETS UNCHANGED
            </p>
            <div className="mt-6">
              <DebtChart result={result} />
            </div>
          </div>

          {year10 ? (
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                [aud(year10.home), "Home loan at year 10, on this path"],
                [aud(year10.extraHome), "Home loan at year 10, if the surplus stays on it"],
                [aud(year10.contractHome), "Home loan at year 10, if no surplus is paid"],
              ].map(([figure, label]) => (
                <div key={label} className="rounded-2xl bg-muted px-5 py-6">
                  <p className="font-display text-3xl font-medium text-accent">{figure}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-8 space-y-4 text-base leading-[1.8] text-muted-foreground">
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-xs leading-relaxed text-subtle">
                The same sketch, in dollars. Portfolio values are cost. Nothing in this table is a projection of what a client will experience.
              </caption>
              <thead>
                <tr className="border-b border-border text-[11px] font-semibold tracking-[0.12em] text-primary">
                  <th className="py-3 pr-4 font-semibold">Year</th>
                  <th className="py-3 pr-4 font-semibold">Home loan</th>
                  <th className="py-3 pr-4 font-semibold">Investment debt</th>
                  <th className="py-3 pr-4 font-semibold">Portfolio at cost</th>
                  <th className="py-3 pr-4 font-semibold">Gross debt</th>
                  <th className="py-3 pr-4 font-semibold">Surplus left on the loan</th>
                  <th className="py-3 font-semibold">Contract only</th>
                </tr>
              </thead>
              <tbody>
                {result.years.map((year) => (
                  <tr key={year.year} className="border-b border-border text-muted-foreground">
                    <th className="py-3 pr-4 font-semibold text-primary">{year.year}</th>
                    <td className="py-3 pr-4">{aud(year.home)}</td>
                    <td className="py-3 pr-4">{aud(year.investment)}</td>
                    <td className="py-3 pr-4">{aud(year.assets)}</td>
                    <td className="py-3 pr-4">{aud(year.home + year.investment)}</td>
                    <td className="py-3 pr-4">{aud(year.extraHome)}</td>
                    <td className="py-3">{aud(year.contractHome)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <h2 className="max-w-[18ch] font-display text-3xl font-medium leading-tight text-primary-foreground md:text-4xl">
            The arithmetic is the drawing. The work is the order.
          </h2>
          <p className="mt-4 max-w-[680px] text-base leading-relaxed text-primary-foreground/75">
            Avere's page for this is the Mortgage Destroyer sequence: tax and structure, then the debt, then an asset only if the first two can hold it. The drawing shows why the order matters. It does not replace the page written for a real file.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {order.map((step) => (
              <div key={step.title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                <h3 className="font-display text-xl font-medium text-primary-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[760px]">
          <h2 className="font-display text-3xl font-medium text-primary md:text-4xl">What this drawing leaves out.</h2>
          <ul className="mt-6 space-y-3 text-[15px] leading-[1.7] text-muted-foreground">
            <li>A change in the interest rate, the tax rate, or the household surplus.</li>
            <li>The end of an interest-only period, package fees, and a lender's credit assessment. Nothing here is an approval.</li>
            <li>Franking credits, depreciation, capital gains tax, land tax, and a trust or company as the borrower. Any of those can move the tax result.</li>
            <li>A fall or a rise in the asset price. The debt remains if the price falls. This drawing cannot show that, because the price is fixed.</li>
            <li>The sophisticated-investor test. Net assets of $2.5 million, or gross income of $250,000 for two years, certified by an accountant, is a legal threshold for some offers. Passing it does not make 10% income likely, and it does not make this sketch suitable.</li>
            <li>The $995 Mortgage Destroyer promise. That promise is about identifying opportunities in a written strategy. This page is not that identification, and identifying a figure here is not a promise that the figure occurs.</li>
          </ul>
          <div className="mt-8 space-y-4 rounded-sm border border-accent/40 bg-secondary px-5 py-5">
            <p className="text-sm font-semibold text-primary">Illustrative purposes only.</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Prepared as general information in October 2026 by Avere Private Wealth Pty Ltd, AFSL 525361. It does not take into account your objectives, financial situation or needs. Before you act, consider whether it is appropriate for you, and read the Financial Services Guide and the advice disclaimer. Tax outcomes depend on your circumstances and on law that changes. Lending depends on the lender.
            </p>
            <GeneralInfoLine />
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/advice-disclaimer" className="font-medium text-link underline decoration-link/30 underline-offset-4">
              Advice disclaimer
            </Link>
            <Link to="/fsg" className="font-medium text-link underline decoration-link/30 underline-offset-4">
              Financial Services Guide
            </Link>
            <Link to="/learn/$slug" params={{ slug: "debt-recycling" }} className="font-medium text-link underline decoration-link/30 underline-offset-4">
              Debt recycling, in words
            </Link>
            <Link to="/services/$slug" params={{ slug: "mortgage-destroyer" }} className="font-medium text-link underline decoration-link/30 underline-offset-4">
              The Mortgage Destroyer
            </Link>
          </div>
          <Link
            to="/apply"
            className="mt-8 inline-block rounded-sm bg-primary px-5 py-3.5 text-[10px] font-semibold tracking-[0.16em] text-primary-foreground"
          >
            APPLY FOR A SESSION
          </Link>
        </div>
      </section>
    </div>
  );
}
