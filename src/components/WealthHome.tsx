import { Link } from "@tanstack/react-router";

const wealthItems = [
  "Cash flow and structure",
  "Superannuation",
  "Tax implications of your strategy",
  "Portfolio construction",
  "Risk protection",
  "Wealth transfer",
  "Reporting",
  "Scheduled reviews",
];

const financeItems = [
  "Home loans and refinancing",
  "Investment property lending",
  "SMSF lending",
  "Business and commercial lending",
];

const steps = [
  {
    n: "01",
    title: "Plan first",
    body: "We look at what you own, what you owe and what you want. The roadmap sets the goal and the structure.",
  },
  {
    n: "02",
    title: "Then the loan",
    body: "Lending is arranged to match that structure, so the plan isn't bent around whatever a lender happens to offer.",
  },
  {
    n: "03",
    title: "Reviewed together",
    body: "When rates, income or rules change, we look at both at once. We deal directly with your accountant, so you are never the messenger.",
  },
];

const principles = [
  {
    title: "Counted honestly",
    body: "Every figure is sourced and every assumption is stated. If we don't know something, we say so.",
  },
  {
    title: "Priced in writing",
    body: "Advice fees and any lender commission are set out in writing before you commit, along with what we will not do.",
  },
  {
    title: "Defined by you",
    body: "Success is your measure, not ours. A paid-off home counts as much as a portfolio.",
  },
];

const nextSteps = [
  {
    n: "01",
    title: "The case study",
    body: "One problem: paying the home loan down the slow way. You leave an email and tick consent. Matt's video goes in this step when he records it. Until then, the mechanism is written on the page.",
    to: "/payoff",
    label: "See the case study",
  },
  {
    n: "02",
    title: "Five questions",
    body: "Purpose, a loan-size band, timeframe, employment, and whether investing should be looked at separately. A yes there goes to an adviser. It does not start an advice email.",
    to: "/payoff",
    label: "Questions follow the case study",
  },
  {
    n: "03",
    title: "The session",
    body: "Then you apply to sit with Matt. There is no calendar on this preview, so the form does not book a time. If we are the wrong fit, that is the answer.",
    to: "/apply",
    label: "Apply for the session",
  },
] as const;

function Roadmark() {
  return (
    <span
      aria-hidden="true"
      className="mx-[0.08em] inline-block h-[0.72em] w-[1.55em] overflow-hidden rounded-sm bg-primary align-[-0.06em]"
    >
      <svg viewBox="0 0 240 116" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <path d="M-4 30 C 60 30, 92 58, 138 58" fill="none" stroke="#9cd8f0" strokeWidth="3" />
        <path d="M-4 86 C 60 86, 92 58, 138 58" fill="none" stroke="#43addf" strokeWidth="3" />
        <path d="M138 58 L 244 58" fill="none" stroke="#ffffff" strokeWidth="3" />
        <circle cx="138" cy="58" r="5" fill="#ffffff" />
      </svg>
    </span>
  );
}

export function WealthHome() {
  return (
    <div>
      <section className="px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-link">Private Wealth · Finance</p>
          <h1 className="max-w-[16ch] font-display text-[clamp(56px,9vw,120px)] font-medium leading-[1.02] text-primary">
            One <Roadmark /> roadmap.
          </h1>
          <p className="max-w-[760px] text-xl font-semibold leading-snug text-link">
            Advice on what you own and finance for what you are building, planned together for Australian businesses and professional families.
          </p>
          <p className="max-w-[640px] text-base leading-[1.7] text-foreground">
            Advice and lending are usually arranged separately, and they don't always fit. We start with your plan, then arrange lending that matches it.
          </p>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Link
              to="/payoff"
              className="inline-flex min-h-12 items-center rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground hover:bg-link"
            >
              Start with the case study
            </Link>
            <a href="#how-it-works" className="text-sm font-semibold text-link">
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section id="debt-to-wealth" className="px-6 pb-24 md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-wrap gap-12 rounded-sm border border-primary/15 bg-card px-8 py-14 md:px-12 md:py-16">
          <div className="flex min-w-[280px] flex-1 flex-col gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-link">Debt to Wealth Strategic Plan</p>
            <h2 className="text-[clamp(32px,4vw,44px)] font-extralight leading-[1.12] text-primary">
              A plan to pay off your home sooner, and build wealth alongside it
            </h2>
          </div>
          <div className="flex min-w-[280px] flex-1 flex-col items-start gap-4">
            <p className="text-base leading-[1.7]">
              For many families, owning the home outright is the first goal. The Debt to Wealth Strategic Plan looks at your mortgage, cash flow, super and tax together, and sets out in writing how to clear the debt and what to build alongside it.
            </p>
            <p className="text-base leading-[1.7]">
              It draws on both arms: the advice sets the strategy, and the loan is structured to match. You will see what it costs, and what it can't do, before you start.
            </p>
            <Link
              to="/payoff"
              className="mt-2 inline-flex min-h-11 items-center rounded-sm border border-primary px-5 text-[13px] font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Ask about the plan
            </Link>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="border-t border-primary/20 px-6 py-20 md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
          <div className="flex max-w-[720px] flex-col gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-link">01 — What we do</p>
            <h2 className="text-[clamp(32px,4vw,44px)] font-extralight leading-[1.1] text-primary">Two arms, working from the same plan</h2>
            <p className="text-base leading-[1.7]">Use one or both. Either way, the advice and the lending are built around one written roadmap.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article id="private-wealth" className="flex scroll-mt-28 flex-col gap-5 rounded-sm border border-primary/15 bg-card px-8 py-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-link">Avere Private Wealth</p>
              <h3 className="font-display text-[26px] font-medium leading-snug text-primary">A written roadmap, then the work to keep it on track.</h3>
              <p className="text-base leading-[1.7]">
                Strategic advice and ongoing wealth management. Where the licence allows it, the advice can cover the tax implications of the strategy. This page is still general information.
              </p>
              <ul className="grid list-none grid-cols-1 gap-x-6 border-t border-primary/20 sm:grid-cols-2">
                {wealthItems.map((item) => (
                  <li key={item} className="border-b border-primary/20 py-3 text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services/strategic-private-wealth" className="mt-auto text-sm font-semibold text-link">
                More on Private Wealth
              </Link>
            </article>
            <article id="finance" className="flex scroll-mt-28 flex-col gap-5 rounded-sm border border-primary/15 bg-card px-8 py-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-link">Avere Finance</p>
              <h3 className="font-display text-[26px] font-medium leading-snug text-primary">Lending that fits the plan, not the other way round.</h3>
              <p className="text-base leading-[1.7]">
                Lending is set out in writing, including what each option costs, before you choose. The credit representative details are not on this preview. Compliance confirms them before this is treated as published.
              </p>
              <ul className="grid list-none grid-cols-1 gap-x-6 border-t border-primary/20 sm:grid-cols-2">
                {financeItems.map((item) => (
                  <li key={item} className="border-b border-primary/20 py-3 text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services/mortgage-destroyer" className="mt-auto text-sm font-semibold text-link">
                More on Finance
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-28 bg-primary px-6 py-24 text-primary-foreground md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
          <div className="flex max-w-[760px] flex-col gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky">02 — How it works</p>
            <h2 className="text-[clamp(32px,4vw,44px)] font-extralight leading-[1.1]">Why the plan and the loan belong together</h2>
            <p className="text-base leading-[1.7]">
              How a loan is set up affects your tax, your cash flow and what you can do next. Getting the order right is easier when both come from the same table.
            </p>
          </div>
          <ol className="grid list-none gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n} className="flex flex-col gap-3.5 rounded-sm border border-sky/35 px-7 py-8">
                <span className="text-[11px] font-semibold tracking-[0.3em] text-sky">{step.n}</span>
                <h3 className="font-display text-[22px] font-medium leading-snug">{step.title}</h3>
                <p className="text-[15px] leading-[1.7]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="principles" className="px-6 py-24 md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-link">03 — How we work</p>
          <div className="grid gap-10 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 border-t border-primary/20 pt-6">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="text-[15px] leading-[1.7]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="whats-next" className="px-6 pb-8 md:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-link">04 — What happens next</p>
            <h2 className="mt-4 text-[clamp(32px,4vw,44px)] font-extralight leading-[1.1] text-primary">The home loan, then the session.</h2>
            <p className="mt-4 text-base leading-[1.7]">
              The first meeting is not booked from this page. You see the case study, answer a few questions, then apply. Emails and texts start only after consent, and only once sending is switched on. They are not sending from this preview.
            </p>
          </div>
          <ol className="grid list-none gap-6 md:grid-cols-3">
            {nextSteps.map((step) => (
              <li key={step.n} className="flex flex-col gap-3 rounded-sm border border-primary/15 bg-card px-7 py-8">
                <span className="text-[11px] font-semibold tracking-[0.3em] text-link">{step.n}</span>
                <h3 className="font-display text-[22px] font-medium text-primary">{step.title}</h3>
                <p className="text-[15px] leading-[1.7] text-foreground">{step.body}</p>
                <Link to={step.to} className="mt-auto text-sm font-semibold text-link">
                  {step.label}
                </Link>
              </li>
            ))}
          </ol>
          <p className="max-w-[760px] text-sm leading-[1.7] text-subtle">
            After the session invitation, the regular emails are Matt's writing. A new piece in Learn becomes the next email. The debt-recycling note is for people who asked about investing. It is not the first email, and it is not a promise the loan finishes early. AFSL 525361.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 px-6 py-16 md:px-10 md:pb-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-5 rounded-sm bg-secondary px-8 py-16 md:px-12 md:py-20">
          <h2 className="text-[clamp(32px,4vw,44px)] font-extralight leading-[1.1] text-primary">Tell us where things stand</h2>
          <p className="max-w-[640px] text-base leading-[1.7]">
            A first meeting is a conversation about your situation and whether we are the right fit. If we're not, we'll tell you. Start with the case study. The application is the way into the session.
          </p>
          <Link
            to="/payoff"
            className="inline-flex min-h-12 items-center rounded-sm bg-primary px-7 text-sm font-semibold text-primary-foreground hover:bg-link"
          >
            Start with the case study
          </Link>
        </div>
      </section>
    </div>
  );
}
