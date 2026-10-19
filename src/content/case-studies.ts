export type CaseWork = {
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  lede: string;
  profile: string;
  since: string;
  timeframe: string;
  quote: string;
  quoteBy: string;
  income: string;
  expenses?: string;
  netWorthBefore: number;
  netWorthAfter: number;
  growthPercent: number;
  growthDollar: number;
  assetsBefore: number;
  assetsAfter: number;
  assetsChangePercent: number;
  liabilitiesBefore: number;
  liabilitiesAfter: number;
  liabilitiesChangePercent: number;
  positionNotes: string[];
  goals: string[];
  work: CaseWork[];
  outcomes: string[];
  changes: string[];
  pills: string[];
  portfolio: string;
  reconciliation?: string;
};

export const caseStudySource =
  "These files were delivered by this practice while it traded as Your Corner 360. Avere is that practice. Households are anonymised. Figures are the start and end positions published for each file, for the period named. They are not a forecast, and they are not a typical client.";

export const caseStudyThemes = [
  "Tax through a family trust",
  "Control of the investments",
  "Property, including fractional property",
  "Asset protection",
  "Lower super administration costs",
  "Debt restructured so the interest had a different tax character",
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "client-a-b-idle-equity",
    title: "From idle equity to $1.6 million of net-worth growth",
    lede: "A couple aged 60 and 56, earning $286,000, had the assets and no family trust. Over six years the recorded net worth moved from $3.96 million to $5.60 million.",
    profile: "Couple, ages 60 and 56",
    since: "Client since 2018",
    timeframe: "Six years, 2018 to 2024",
    quote:
      "We didn't realise how much opportunity was sitting idle in our existing assets. The team showed us a clear path — and the numbers speak for themselves.",
    quoteBy: "Clients A and B, advised since 2018",
    income: "$286,000",
    netWorthBefore: 3959081,
    netWorthAfter: 5597624,
    growthPercent: 41.39,
    growthDollar: 1638543,
    assetsBefore: 4365160,
    assetsAfter: 6003703,
    assetsChangePercent: 37.54,
    liabilitiesBefore: 406079,
    liabilitiesAfter: 406079,
    liabilitiesChangePercent: 0,
    positionNotes: [
      "SMSF misaligned to the risk profile, and overpaying on platform fees.",
      "No family trust, and no diversified portfolio outside the existing holdings.",
    ],
    goals: [
      "Build wealth in a tax-effective way.",
      "Align the SMSF portfolio to the preferred risk profile.",
      "Reduce ongoing costs on the investment platform.",
      "Retire at 65 and keep the lifestyle they already had.",
    ],
    work: [
      {
        title: "Family trust",
        body: "A new discretionary family trust was set up to hold investments in Allan Gray and Betashares, so investment income was not all taxed at individual rates.",
      },
      {
        title: "Platform change",
        body: "The SMSF moved from a high-fee IAS platform to SelfWealth. The published platform-cost reduction was $4,548 a year.",
      },
      {
        title: "SMSF rebalance",
        body: "The SMSF portfolio was rebalanced toward the risk profile they had said they wanted.",
      },
      {
        title: "Fractional property",
        body: "Fractional property was added as an asset class, without the capital required for a whole property.",
      },
      {
        title: "Retirement projection",
        body: "A retirement projection was prepared against retiring at 65 on the lifestyle they already had. A projection is not the retirement.",
      },
    ],
    outcomes: [
      "$1.64 million increase in recorded net worth.",
      "$4,548 a year saved in platform fees.",
      "About $1.2 million in a diversified portfolio across shares, property and managed funds.",
      "The file showed a path to retire at 65 with the lifestyle funded. That was a projection at the time, not a result that had already happened.",
    ],
    changes: [
      "Investment income held in a family trust rather than only in personal names.",
      "SMSF investments held on SelfWealth.",
      "Fractional property added.",
      "Trust used for asset protection.",
      "Super administration costs down by $4,548 a year.",
    ],
    pills: ["Platform switch", "Family trust", "Fractional property", "SMSF rebalance", "Retirement analysis"],
    portfolio: "About $1.2 million, diversified",
  },
  {
    slug: "client-c-d-debt-restructure",
    title: "$1.6 million of net-worth growth in 12 months",
    lede: "A couple aged 51 and 49 were earning $881,360 and spending $1,176,832. In one year the published net worth moved from $3.70 million to $5.30 million.",
    profile: "Couple, ages 51 and 49",
    since: "Client since 2023",
    timeframe: "One year, 2023 to 2024",
    quote:
      "We were earning nearly $900K a year but our money wasn't working for us. The team restructured everything — our debt, our super, our investments — and in 12 months our net worth jumped by $1.6 million.",
    quoteBy: "Clients C and D, advised since 2023",
    income: "$881,360",
    expenses: "$1,176,832, above income",
    netWorthBefore: 3695725,
    netWorthAfter: 5295108,
    growthPercent: 43.28,
    growthDollar: 1599383,
    assetsBefore: 6409725,
    assetsAfter: 8473013,
    assetsChangePercent: 32.19,
    liabilitiesBefore: 2714000,
    liabilitiesAfter: 3181381,
    liabilitiesChangePercent: 17.22,
    positionNotes: ["No SMSF, no family trust, and the home loan had not been looked at as part of the tax position."],
    goals: [
      "A tax plan that kept more of what they earned.",
      "A review of the existing superannuation.",
      "A property portfolio aimed at $150,000 a year of net income.",
      "Own the home without debt as soon as that was realistic.",
    ],
    work: [
      {
        title: "SMSF",
        body: "A self-managed super fund was established so the super could be invested directly, including the ability to borrow inside the fund where the rules and the lender allowed it.",
      },
      {
        title: "Non-concessional contribution",
        body: "A $110,000 non-concessional contribution was made to AustralianSuper, then rolled into the new SMSF.",
      },
      {
        title: "Debt restructure",
        body: "The home loan was split so that non-deductible debt was replaced, over time, with tax-deductible investment debt. Same bank. Same property. Different tax character of the interest.",
      },
      {
        title: "Investment property",
        body: "A $750,000 investment property in Halls Head, Western Australia, was bought with restructured equity and held in a tax-optimised structure.",
      },
      {
        title: "Family trust for shares",
        body: "A discretionary family trust was set up to hold a direct share portfolio, so investment income could be distributed across the family.",
      },
    ],
    outcomes: [
      "Published net worth up $1.60 million in 12 months.",
      "Investment property acquired in Halls Head, WA.",
      "About $1 million in direct shares inside the family trust.",
      "Home loan reduced to $320,000.",
      "$1.5 million of the debt position described as tax-deductible investment debt, in place of non-deductible home-loan debt.",
    ],
    changes: [
      "Home-loan interest replaced, in part, by tax-deductible investment debt.",
      "SMSF in place, including the ability to hold property where the fund and the lender allowed it.",
      "Family trust distributing investment income.",
      "Asset protection across the trust and the SMSF.",
      "Super administration compared with the previous retail arrangement.",
    ],
    pills: ["SMSF", "$110k non-concessional", "Family trust", "Debt restructure", "$750k property"],
    portfolio: "About $1 million in direct shares",
    reconciliation:
      "Assets minus liabilities at the end of this file is $5,291,632. The published net worth is $5,295,108. The difference is $3,476. Both numbers are left as published until the working papers are rechecked.",
  },
  {
    slug: "client-e-f-retirement-growth",
    title: "Net worth up 303% through retirement",
    lede: "A retired couple, both 71, had no employment income and $54,000 a year of living costs. Over six years recorded net worth moved from $521,753 to $2.10 million, and liabilities from $476,000 to $2,700.",
    profile: "Couple, ages 71 and 71, retired",
    since: "Client since 2018",
    timeframe: "Six years, 2018 to 2024",
    quote:
      "It has always been a pleasure dealing with the advisory team. We have also been very pleased with the investment returns (both in the past and coming). We cannot recommend YC highly enough for their thoroughness and professionalism.",
    quoteBy: "Clients E and F, advised since 2018. Quoted as given. YC was the practice name at the time.",
    income: "$0",
    expenses: "$54,000 a year",
    netWorthBefore: 521753,
    netWorthAfter: 2104708,
    growthPercent: 303.39,
    growthDollar: 1582955,
    assetsBefore: 997753,
    assetsAfter: 2107408,
    assetsChangePercent: 111.21,
    liabilitiesBefore: 476000,
    liabilitiesAfter: 2700,
    liabilitiesChangePercent: -99.43,
    positionNotes: ["SMSF misaligned to the risk profile, with high platform costs."],
    goals: [
      "Align the SMSF portfolio to the preferred risk profile.",
      "See what the super could do with the investments they were actually prepared to hold.",
      "A self-managed fund that could carry them through retirement.",
    ],
    work: [
      {
        title: "In-specie transfer",
        body: "Investments were transferred in-specie from a high-fee IAS platform to SelfWealth. The published platform-fee saving was $4,229 a year.",
      },
      {
        title: "Fixed income for living costs",
        body: "Part of the portfolio went to La Trobe Financial 12-month rolling term deposits, held to fund living expenses with a known term.",
      },
      {
        title: "Rebalance",
        body: "The SMSF was moved from an allocation that was too aggressive for retirement toward growth with income.",
      },
      {
        title: "Fractional property",
        body: "Fractional property gave exposure to property without a full purchase or the management of a whole building.",
      },
      {
        title: "Term investments",
        body: "Off-platform fixed-rate term investments were used where the rate and the capital stability mattered more than daily liquidity.",
      },
    ],
    outcomes: [
      "Recorded net worth from $521,753 to $2.10 million.",
      "$4,229 a year saved in platform fees.",
      "About $1.4 million across shares, property and fixed income.",
      "Liabilities from $476,000 to $2,700.",
      "Living costs being met from the portfolio while the capital position was higher at the end of the period than at the start.",
    ],
    changes: [
      "Family trust used where it changed the tax on investment income.",
      "SMSF investments on SelfWealth.",
      "Fractional property without managing a building.",
      "Structures used for asset protection.",
      "Super administration costs down by $4,229 a year.",
    ],
    pills: ["In-specie transfer", "La Trobe term deposit", "Fractional property", "Portfolio rebalance"],
    portfolio: "About $1.4 million, diversified",
  },
  {
    slug: "client-g-h-decade-compounding",
    title: "Net worth up 340% over ten years",
    lede: "A couple aged 52 and 52, earning $126,920, started with $707,953 of net worth. Ten years later the recorded net worth was $3.12 million.",
    profile: "Couple, ages 52 and 52",
    since: "Client since 2014",
    timeframe: "Ten years, 2014 to 2024",
    quote:
      "We came to the team with a modest income and big aspirations. Ten years later, our net worth has grown 340% and we have a diversified portfolio we never thought possible. Having accounting, SMSF, estate planning, and investment management under one roof made all the difference.",
    quoteBy: "Clients G and H, advised since 2014",
    income: "$126,920",
    expenses: "$52,608",
    netWorthBefore: 707953,
    netWorthAfter: 3115524,
    growthPercent: 340.07,
    growthDollar: 2407571,
    assetsBefore: 1415953,
    assetsAfter: 3630520,
    assetsChangePercent: 156.4,
    liabilitiesBefore: 708000,
    liabilitiesAfter: 514996,
    liabilitiesChangePercent: -27.26,
    positionNotes: ["No SMSF, no trust, and no single investment plan that the accountant and the adviser were both using."],
    goals: [
      "Tax-effective accumulation for retirement.",
      "Capital growth across the assets they held.",
      "Diversification beyond the existing holdings.",
      "Investment management they were prepared to leave in place.",
    ],
    work: [
      {
        title: "SMSF",
        body: "A self-managed super fund was established so retirement money could be invested in property, direct shares and other assets the fund was allowed to hold.",
      },
      {
        title: "Estate plan",
        body: "An estate plan was put in place so the assets had a documented path to the people they were meant for.",
      },
      {
        title: "Asset allocation",
        body: "An allocation was written and implemented: property and equities for growth, fixed income and cash for the defensive share, set against the risk profile and the retirement date.",
      },
      {
        title: "Product replacement",
        body: "Products that were not earning their fees were replaced. The point was the fee drag, not a new logo.",
      },
      {
        title: "Term investments",
        body: "Off-platform fixed-rate term investments were used where the rate was better than the retail deposit they would otherwise have held.",
      },
    ],
    outcomes: [
      "Recorded net worth from $707,953 to $3.12 million.",
      "Liabilities down 27% while assets more than doubled.",
      "About $915,000 in a diversified portfolio.",
      "Net worth up $2.41 million over the decade.",
      "An estate plan on the file.",
    ],
    changes: [
      "Family trust used for investment income.",
      "SMSF able to hold property, shares and other permitted assets.",
      "Structures used for asset protection.",
      "Estate plan documented.",
      "Super administration compared with retail super.",
    ],
    pills: ["SMSF", "Estate planning", "Product replacement", "Fixed-rate terms", "Asset allocation"],
    portfolio: "About $915,000",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function aud(value: number) {
  return value.toLocaleString("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  });
}

export function signedPct(value: number) {
  const formatted = Math.abs(value).toLocaleString("en-AU", {
    maximumFractionDigits: 2,
  });
  if (value > 0) return `+${formatted}%`;
  if (value < 0) return `−${formatted}%`;
  return "0%";
}

const combinedGrowth = caseStudies.reduce((sum, study) => sum + study.growthDollar, 0);
const averageGrowth = caseStudies.reduce((sum, study) => sum + study.growthPercent, 0) / caseStudies.length;

export const caseStudyStats = [
  {
    value: aud(combinedGrowth),
    label: "Combined net-worth increase",
    note: "The sum of the four published increases. Not an average household.",
  },
  {
    value: `${Math.round(averageGrowth)}%`,
    label: "Average of the four growth rates",
    note: "Pulled up by the two files that started under $1 million. Not a typical result.",
  },
  {
    value: "4 files",
    label: "Published here",
    note: "The set we are prepared to show. Not a count of every client.",
  },
  {
    value: "$4,388 a year",
    label: "Average platform-fee cut",
    note: "The average of the two files that named one: $4,548 and $4,229.",
  },
] as const;
