import { Link } from "@tanstack/react-router";
import { ApplyForm } from "@/components/ApplyForm";
import { DebtRecyclingTeaser } from "@/components/DebtRecyclingIllustration";

const stats = [
  ["$2.5T", "Australian mortgage debt"],
  ["$12.3T", "Residential property value"],
  ["$10T+", "Housing equity, mostly idle"],
];

const steps = [
  {
    title: "Restructure the debt",
    body: "Where the interest is not deductible, the Marginal Tax Bridge asks whether any of it should be. Same bank. Same rate. A different after-tax cost, only if the debt is actually used to produce income.",
  },
  {
    title: "Deploy the equity",
    body: "Equity that can be touched without cornering the house can go into an income-producing asset, through Futurealty. Depreciation and rent then feed the next tax position. If the structure cannot hold the asset, this step waits.",
  },
  {
    title: "One team. Four disciplines.",
    body: "Debt, tax, legal, and property. They share the written page. You are not the person forwarding the emails between them.",
  },
];

const loop = ["Tax saving", "Borrowing power", "Next acquisition", "Depreciation and yield"];

const disciplines = [
  ["Debt", "The loan, the rate, and whether the loan should change at all."],
  ["Accounting and tax", "The return that sees the mortgage, not a once-a-year tidy-up."],
  ["Legal and structures", "The deed and the estate plan, set before the purchase."],
  ["Property, via Futurealty", "Off-market and on-market assets, bought into the structure that can hold them."],
];

const points = [
  "Debt, tax and legal on one page. Property through Futurealty, the affiliated buyers agency.",
  "Your numbers, not a generic calculator. The session starts from the balance, the rate, the income and the structure.",
  "An 80-plus lender panel, and the Marginal Tax Bridge when a restructure is actually the move.",
  "Futurealty’s acquisitions have been 71% off-market. Access is not a reason to buy the wrong asset.",
  "The Integrated Alpha Loop: tax, then borrowing power, then an acquisition only if the first two can hold it.",
];

const results = [
  {
    slug: "client-a-b-idle-equity",
    change: "+41.4%",
    title: "From idle equity to $1.6m of net-worth growth",
    path: "$4.0m → $5.6m",
    who: "Couple, 60 and 56 · income $286k · with the practice since 2018 · six years to 2024",
    tags: ["Platform switch", "Family trust", "Fractional property"],
  },
  {
    slug: "client-c-d-debt-restructure",
    change: "+43.3%",
    title: "$1.6m of net-worth growth in 12 months",
    path: "$3.7m → $5.3m",
    who: "Couple, 51 and 49 · income $881k · with the practice since 2023 · one year to 2024",
    tags: ["SMSF", "Non-concessional contribution", "Family trust"],
  },
  {
    slug: "client-e-f-retirement-growth",
    change: "+303%",
    title: "Net worth into retirement",
    path: "$522k → $2.1m",
    who: "Couple, both 71 · retired · with the practice since 2018 · six years to 2024",
    tags: ["In-specie transfer", "Term deposit", "Fractional property"],
  },
  {
    slug: "client-g-h-decade-compounding",
    change: "+340%",
    title: "Net worth over 10 years",
    path: "$708k → $3.1m",
    who: "Couple, both 52 · income $127k · with the practice since 2014 · ten years to 2024",
    tags: ["SMSF", "Estate planning", "Portfolio change"],
  },
];

const models = [
  {
    title: "Debt recycling",
    body: "Surplus pays the home loan down. The same dollars are drawn on a separate split and used to buy assets that produce income. Interest on that split may be deductible when the purpose, the records and the structure match. What is left after interest and tax goes back to the home loan. The illustration is one invented household at 10% income, then the same household at 6.2% and at 4%. Ten per cent is an assumption for the drawing. It is not a yield Avere expects.",
  },
  {
    title: "The Marginal Tax Bridge",
    body: "A question, not a product. Is this interest still private if the debt is being used to produce income? If the debt is not producing income, the bridge is not built. The same bank and the same rate can be a different after-tax cost. They can also be the wrong move.",
  },
  {
    title: "The Integrated Alpha Loop",
    body: "Tax position first. Borrowing power second. An asset third, and only if the first two can hold a vacant month. Income and depreciation come back to the tax position. If a step is not real, the loop stops at paying the loan. That is a finished page.",
  },
];

export function MortgageDestroyerPage({ brand = false, home = false }: { brand?: boolean; home?: boolean }) {
  return (
    <div>
      <section className="bg-primary px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-[980px]">
          {brand ? (
            <p className="font-display text-2xl tracking-[0.12em] text-primary-foreground">
              <span className="text-gold-light">A</span>VERE
            </p>
          ) : null}
          <p className="mb-5 mt-8 text-[11px] font-semibold tracking-[0.22em] text-sky">
            {home
              ? "AVERE PRIVATE WEALTH · DEBT RECYCLING · AFSL 525361"
              : "THE MORTGAGE DESTROYER · AVERE PRIVATE WEALTH · AFSL 525361"}
          </p>
          <h1 className="max-w-[18ch] font-display text-[clamp(36px,6vw,64px)] font-medium leading-[1.08] text-primary-foreground">
            {home
              ? "Debt recycling, so everyday Australians can pay the home loan down sooner."
              : "Australia has over $10 trillion in housing equity. Most of it is never given a job."}
          </h1>
          {home ? (
            <div className="mt-6 max-w-[640px] space-y-4 text-lg leading-[1.7] text-primary-foreground/80">
              <p>
                Avere Private Wealth is committed to helping people pay their home loans down sooner, with as little risk as the household can actually bear, so economic security can arrive before a 30-year contract ends.
              </p>
              <p>
                The model gives surplus two jobs. It reduces the home loan, then the same dollars are borrowed back to buy income-producing assets. After interest and tax, what is left returns to the home loan. The debt does not vanish on day one.
              </p>
            </div>
          ) : (
            <p className="mt-6 max-w-[560px] text-lg leading-[1.7] text-primary-foreground/80">
              How much of yours is sitting in the walls, doing nothing but waiting for the 30-year term to finish?
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#apply"
              className="inline-block rounded-sm bg-primary-foreground px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-primary"
            >
              APPLY FOR A WEALTH STRATEGY SESSION
            </a>
            <Link
              to="/payoff"
              className="inline-block rounded-sm border border-primary-foreground/40 px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-primary-foreground"
            >
              SEE THE CASE STUDY
            </Link>
          </div>
          <p className="mt-4 max-w-[560px] text-sm leading-relaxed text-primary-foreground/60">
            {home
              ? "General information, not personal advice. “As little risk as possible” is a limit: if the household cannot hold a bad year, the page says pay the loan and stop. Borrowing to invest can lose money. This is not a promise the loan finishes early."
              : "The session is the application. Matt runs a capped number each fortnight. For homeowners with household income over $200k, and business owners."}
          </p>
        </div>
      </section>

      {home ? (
        <section className="bg-background px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-[980px]">
            <h2 className="max-w-[22ch] font-display text-3xl font-medium leading-tight text-primary md:text-4xl">
              The ordinary loan often costs more because the interest is private, and the term is long.
            </h2>
            <div className="mt-6 max-w-[720px] space-y-4 text-base leading-[1.75] text-muted-foreground">
              <p>
                A principal-and-interest contract of 25 or 30 years front-loads interest. Pay only the minimum and you keep paying that interest for the length of the contract. A cheaper rate on a longer term can cost more interest, not less.
              </p>
              <p>
                Interest on the home you live in is generally not deductible. An offset, or an extra repayment left in the loan, cuts that interest. For many households that is the right choice, and the smaller risk, because the cash stays available and nothing has been bought. It does not change the character of the interest that is left.
              </p>
              <p>
                The costly version of being careful is a mixed redraw: surplus goes in, then comes out later for a car, a holiday and an investment in one transfer. The record of what the money bought is gone, and so is the chance of a clean deduction. Another costly version is equity sitting in the walls for a decade while the original term never moves.
              </p>
              <p>
                Debt recycling is not automatically cheaper than paying the loan down. It costs more when the investment income does not cover the interest, when the asset falls, or when that surplus was the buffer the household needed. The house still secures the debt.
              </p>
            </div>
            <h3 className="mt-14 font-display text-2xl font-medium text-primary md:text-3xl">The models, and where each one stops.</h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {models.map((model) => (
                <li key={model.title} className="rounded-2xl border border-border bg-card p-6">
                  <p className="font-display text-xl font-medium text-primary">{model.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{model.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[720px] text-sm leading-relaxed text-muted-foreground">
              After a session, if there is work to do, the written strategy is $995. If it cannot identify at least $50,000 of savings and wealth-acceleration opportunities over a 10-year view, the strategy fee comes back. Identifying an opportunity is not a return, a tax saving, or a date the loan will end.
            </p>
          </div>
        </section>
      ) : null}

      <section className="border-t border-border bg-background px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <h2 className="mb-10 text-center font-display text-3xl font-medium text-primary md:text-4xl">
            The equity is the asset. The mortgage is the part nobody has organised.
          </h2>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            {stats.map(([figure, label]) => (
              <div key={label} className="rounded-2xl bg-muted px-6 py-8 text-center">
                <p className="font-display text-4xl font-medium text-accent md:text-5xl">{figure}</p>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-[720px] space-y-5 text-lg leading-[1.75] text-muted-foreground">
            <p>
              A 30-year principal-and-interest loan is the contract the bank prints. It is not a measurement of how long your household needs. The house can rise in value for a decade while the loan sits on the original term, and the equity never pays tax, shortens the debt, or buys anything.
            </p>
            <p>
              Your accountant has not sat with your broker. Your broker has not met the person who would buy the next property. The solicitor appears at settlement. The strategy dies in the gaps. You do not need a fifth opinion. You need those four on one page.
            </p>
            <p className="text-sm">
              The market figures above are the frame used on the working Mortgage Destroyer page. They are not a valuation of your house, and they are not a forecast.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <h2 className="mx-auto mb-4 max-w-[18ch] text-center font-display text-3xl font-medium leading-tight text-primary-foreground md:text-4xl">
            What if the mortgage finished years before the contract says it will?
          </h2>
          <p className="mx-auto mb-12 max-w-[680px] text-center text-lg leading-relaxed text-primary-foreground/75">
            The Integrated Alpha Loop is the order the team works in. A tax saving can become borrowing power. Borrowing power can fund the next asset. The asset’s depreciation comes back to tax. It only loops if each step is real.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
                <h3 className="font-display text-xl font-medium text-primary-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{step.body}</p>
              </div>
            ))}
          </div>
          <ol className="mx-auto mt-10 flex max-w-3xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {loop.map((item, index) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold text-sky">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sky/40 text-[11px]">{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm font-semibold text-primary-foreground">
            <span>80+ lenders</span>
            <span>71% off-market, via Futurealty</span>
            <span>4 disciplines, one page</span>
          </div>
        </div>
      </section>

      <DebtRecyclingTeaser />

      <section className="bg-background px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[760px]">
          <p className="mb-10 text-center font-display text-2xl font-medium leading-snug text-primary md:text-3xl">
            Most firms sell a product. This is one roadmap: property, tax and debt, written around the life you named.
          </p>
          <ul className="space-y-3">
            {disciplines.map(([title, body]) => (
              <li key={title} className="rounded-xl border border-border bg-muted px-5 py-4">
                <p className="text-sm font-semibold text-primary">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-8 space-y-3 text-[15px] leading-[1.7] text-muted-foreground">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Avere Private Wealth Pty Ltd holds AFSL 525361. Personal advice starts after the Financial Services Guide, and after we know your situation. This page is general information.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-background px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.22em] text-link">A MORTGAGE ENQUIRY</p>
          <h2 className="font-display text-3xl font-medium text-primary md:text-4xl">Refinance, a new loan, or paying this one down faster.</h2>
          <div className="mt-5 space-y-4 text-base leading-[1.75] text-muted-foreground">
            <p>
              That enquiry starts with the years on the current loan, not with a rate card. This page does not say we will secure the best terms, and it does not quote a competitive rate. Those lines were on the old site. They are not carried across.
            </p>
            <p>
              The first step is the case study, then a few questions, then a session if the mortgage is the problem. Credit assistance, if it is offered later, sits under a separate authorisation. The Your Corner credit-representative line is not on this site. Compliance confirms that wording before any of this is treated as published.
            </p>
          </div>
          <Link
            to="/payoff"
            className="mt-8 inline-block rounded-sm bg-primary px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-primary-foreground"
          >
            START WITH THE CASE STUDY
          </Link>
        </div>
      </section>

      <section className="bg-secondary px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-display text-3xl font-medium text-primary md:text-4xl">The session, then the written strategy.</h2>
          <ul className="mx-auto mt-6 max-w-[520px] space-y-2 text-left text-[15px] leading-relaxed text-muted-foreground">
            <li>How much equity you can actually touch, without putting the house in a corner.</li>
            <li>What that equity could do, modelled on your balance, your rate and your structure.</li>
            <li>A next step with a price, before you commit. Or a no, if we are the wrong people.</li>
          </ul>
          <a href="#apply" className="mt-8 inline-block rounded-sm bg-primary px-6 py-4 text-[11px] font-semibold tracking-[0.16em] text-primary-foreground">
            APPLY FOR THE SESSION
          </a>
          <p className="mx-auto mt-4 max-w-[520px] text-sm leading-relaxed text-muted-foreground">
            You are not billed for the session. If there is work after it, the Mortgage Destroyer is $995 and refundable: if the written strategy cannot identify at least $50,000 of savings and wealth-acceleration opportunities over a 10-year view, the strategy fee comes back. Identifying an opportunity is not a promise that it happens.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-3 text-center font-display text-3xl font-medium text-primary md:text-4xl">Results from the practice. Not a forecast.</h2>
          <p className="mx-auto mb-10 max-w-[640px] text-center text-sm leading-relaxed text-muted-foreground">
            Anonymised client work from when this practice traded as Your Corner 360. Names withheld. The years are the years they were with the practice. Past results are not a guide to what your file will do.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {results.map((result) => (
              <Link
                key={result.slug}
                to="/proof/$slug"
                params={{ slug: result.slug }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent"
              >
                <p className="font-display text-3xl font-medium text-accent">{result.change}</p>
                <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-primary">{result.title}</h3>
                <p className="mt-2 text-sm font-semibold text-primary">{result.path}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{result.who}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {result.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-primary">
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-[720px] text-center text-xs leading-relaxed text-subtle">
            The +303% and +340% cards are long-horizon outcomes from coordinated advice in the Your Corner years. They are not the result of a mortgage enquiry, and they are not cleared for a public campaign until Matt confirms consent, the source figures and the wording. Results vary. Past outcomes are not guarantees of future performance.
          </p>
        </div>
      </section>

      <section id="apply" className="bg-secondary px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-medium leading-tight text-primary">Apply for a Wealth Strategy Session.</h2>
            <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
              Five minutes. Your income, the loan, the rate, and what you want the equity to do. If you are under the line, the same form sends you to the Blueprint. It does not pretend you booked a session.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              On this staging site the answers stay in this browser. They are not emailed. General information until we know your situation. AFSL 525361.
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-6 md:p-8">
            <ApplyForm campaign="mortgage-destroyer" />
          </div>
        </div>
      </section>
    </div>
  );
}
