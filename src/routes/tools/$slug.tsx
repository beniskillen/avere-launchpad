import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { pageHead } from "@/lib/site";
import { routeApplication, type Application, type AssetBand, type IncomeBand, type YesNo } from "@/lib/qualify";

const titles: Record<string, { title: string; description: string }> = {
  "mortgage-destroyer-calculator": {
    title: "Mortgage calculator | Avere",
    description: "See the interest on a principal-and-interest loan if the balance, rate and term you type stayed still. Arithmetic, not a quote.",
  },
  "debt-to-wealth-blueprint": {
    title: "Debt to Wealth Blueprint | Avere",
    description: "The earlier path for Australians who are not yet at a Wealth Strategy Session. General information.",
  },
  "wealth-potential-quiz": {
    title: "Wealth Potential Quiz | Avere",
    description: "Six questions. We tell you whether the next step is a Wealth Strategy Session or the Blueprint.",
  },
  "rate-audit": {
    title: "What your rate costs | Avere",
    description: "The interest on your current loan if nothing changes. Not a marketed comparison rate.",
  },
  "property-wealth-report": {
    title: "Three scenarios for your equity | Avere",
    description: "Leave it, pay the loan down, or deploy some of it. The application decides whether we write that for you.",
  },
};

export const Route = createFileRoute("/tools/$slug")({
  loader: ({ params }) => {
    const meta = titles[params.slug];
    if (!meta) throw notFound();
    return { slug: params.slug, ...meta };
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData.title,
      description: loaderData.description,
      path: `/tools/${loaderData.slug}`,
    }),
  component: ToolPage,
});

function money(value: number) {
  return value.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });
}

function amortise(principal: number, annualRate: number, years: number, extraMonthly: number) {
  const r = annualRate / 100 / 12;
  const n = Math.round(years * 12);
  const basePayment = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
  let balance = principal;
  let interest = 0;
  let months = 0;
  const payment = basePayment + extraMonthly;
  while (balance > 1 && months < 600) {
    const interestMonth = balance * r;
    const principalPaid = Math.min(balance, payment - interestMonth);
    if (principalPaid <= 0) return null;
    interest += interestMonth;
    balance -= principalPaid;
    months += 1;
  }
  return { basePayment, interest, months, paidOff: balance <= 1 };
}

function LoanTool({ heading, intro }: { heading: string; intro: string }) {
  const [balance, setBalance] = useState("800000");
  const [rate, setRate] = useState("6.2");
  const [years, setYears] = useState("27");
  const [extra, setExtra] = useState("0");

  const result = useMemo(() => {
    const principal = Number(balance);
    const annual = Number(rate);
    const term = Number(years);
    const extraMonthly = Number(extra);
    if (![principal, annual, term, extraMonthly].every((n) => Number.isFinite(n)) || principal <= 0 || term <= 0 || annual < 0) {
      return null;
    }
    const plain = amortise(principal, annual, term, 0);
    const faster = amortise(principal, annual, term, Math.max(0, extraMonthly));
    if (!plain || !faster) return { error: "At that rate, the repayment does not reduce the balance. Check the inputs." };
    return { plain, faster };
  }, [balance, rate, years, extra]);

  return (
    <div>
      <h1 className="font-display text-4xl font-medium leading-tight text-primary">{heading}</h1>
      <p className="mt-4 text-base leading-[1.75] text-muted-foreground">{intro}</p>
      <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
        {[
          ["Loan balance", balance, setBalance],
          ["Interest rate %", rate, setRate],
          ["Years remaining", years, setYears],
          ["Extra per month", extra, setExtra],
        ].map(([label, value, setter]) => (
          <label key={label as string} className="block text-sm">
            <span className="mb-1 block font-semibold text-primary">{label as string}</span>
            <input
              className="w-full rounded-sm border border-input bg-card px-3 py-3"
              inputMode="decimal"
              value={value as string}
              onChange={(event) => (setter as (v: string) => void)(event.target.value)}
            />
          </label>
        ))}
      </form>
      {result && "error" in result ? <p className="mt-6 text-sm text-destructive">{result.error}</p> : null}
      {result && "plain" in result ? (
        <div className="mt-8 space-y-3 rounded-md border border-border bg-card p-6 text-[15px] leading-[1.7] text-muted-foreground">
          <p>
            If these inputs never changed, interest on the minimum repayment would be about {money(result.plain.interest)} over {Math.round(result.plain.months / 12)} years.
            The minimum monthly repayment would be about {money(result.plain.basePayment)}.
          </p>
          {Number(extra) > 0 ? (
            <p>
              With {money(Number(extra))} extra each month, interest would be about {money(result.faster.interest)} and the loan would finish in about {Math.round(result.faster.months / 12)} years
              {result.faster.paidOff ? "" : ", or it would still be running at the 50-year cap on this calculator"}.
            </p>
          ) : null}
          <p>
            Lenders do not freeze your rate, and this ignores fees, offset balances and redraw. It is not a quote and not a recommendation to pay a particular amount.
          </p>
        </div>
      ) : null}
      <Link to="/apply" className="mt-8 inline-block rounded-sm bg-primary px-5 py-3.5 text-[10px] font-semibold tracking-[0.16em] text-primary-foreground">
        APPLY FOR A SESSION
      </Link>
    </div>
  );
}

function Quiz() {
  const [income, setIncome] = useState<IncomeBand>("200-250");
  const [assets, setAssets] = useState<AssetBand>("100-200");
  const [homeowner, setHomeowner] = useState<YesNo>("yes");
  const [businessOwner, setBusinessOwner] = useState<YesNo>("no");
  const [propertyInterest, setPropertyInterest] = useState<YesNo>("yes");
  const [result, setResult] = useState<"session" | "blueprint" | null>(null);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const fake: Application = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      postcode: "",
      income,
      homeowner,
      propertyValue: "",
      loanBalance: "",
      rate: "",
      businessOwner,
      entity: "",
      profit: "",
      assets,
      trust: "unsure",
      propertyInterest,
      taxAdvice: "",
      goal: "",
      goalIntent: "mortgage",
      whyNow: "",
      campaign: "quiz",
    };
    setResult(routeApplication(fake));
  }

  return (
    <div>
      <h1 className="font-display text-4xl font-medium leading-tight text-primary">Wealth Potential Quiz</h1>
      <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
        Six questions. The point is the door, not a personality type. Session, or Blueprint.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <Select label="Household income" value={income} onChange={setIncome} options={[["under-200", "Under $200k"], ["200-250", "$200k to $250k"], ["250-plus", "$250k or more"]]} />
        <Select label="Investable assets, outside the home" value={assets} onChange={setAssets} options={[["under-100", "Under $100k"], ["100-200", "$100k to $200k"], ["200-plus", "$200k or more"]]} />
        <Select label="Do you own a home?" value={homeowner} onChange={setHomeowner} options={[["yes", "Yes"], ["no", "No"]]} />
        <Select label="Do you own a business?" value={businessOwner} onChange={setBusinessOwner} options={[["no", "No"], ["yes", "Yes"]]} />
        <Select label="Interested in an investment property?" value={propertyInterest} onChange={setPropertyInterest} options={[["yes", "Yes"], ["no", "No"]]} />
        <button type="submit" className="rounded-sm bg-primary px-5 py-3.5 text-[10px] font-semibold tracking-[0.16em] text-primary-foreground">
          SEE THE NEXT STEP
        </button>
      </form>
      {result === "session" ? (
        <p className="mt-6 text-base leading-[1.7] text-primary">
          The session is the right room. The application asks for the numbers this quiz skipped.
        </p>
      ) : null}
      {result === "blueprint" ? (
        <p className="mt-6 text-base leading-[1.7] text-primary">
          The Blueprint is the right room. You can still read it, and apply later when the income, the business or the assets cross the line.
        </p>
      ) : null}
      {result === "session" ? (
        <Link to="/apply" className="mt-4 inline-block text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
          Go to the application
        </Link>
      ) : null}
      {result === "blueprint" ? (
        <Link to="/tools/$slug" params={{ slug: "debt-to-wealth-blueprint" }} className="mt-4 inline-block text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
          Read the Blueprint
        </Link>
      ) : null}
    </div>
  );
}

function Select<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: [T, string][];
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-semibold text-primary">{label}</span>
      <select className="w-full rounded-sm border border-input bg-card px-3 py-3" value={value} onChange={(event) => onChange(event.target.value as T)}>
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

function ToolPage() {
  const { slug } = Route.useLoaderData();
  return (
    <main className="bg-background px-6 py-14 md:px-10">
      <div className="mx-auto max-w-[760px]">
        {slug === "mortgage-destroyer-calculator" ? (
          <LoanTool
            heading="What the loan costs if nothing changes"
            intro="Type the balance, the rate and the years left. Add an extra monthly amount if you would actually pay it. The result assumes those inputs never move."
          />
        ) : null}
        {slug === "rate-audit" ? (
          <LoanTool
            heading="The cost of the rate you have"
            intro="Leave the extra repayment at zero. This is the interest bill of staying, not a shopped rate from another lender. We will not invent a 'market rate' on a page that has not seen your file."
          />
        ) : null}
        {slug === "wealth-potential-quiz" ? <Quiz /> : null}
        {slug === "debt-to-wealth-blueprint" ? (
          <div className="space-y-4 text-base leading-[1.8] text-muted-foreground">
            <h1 className="font-display text-4xl font-medium leading-tight text-primary">Debt to Wealth Blueprint</h1>
            <p>This is the path for households under the session line. Read it once. Do the first two steps before you consume any more content about property.</p>
            <ol className="list-decimal space-y-3 pl-5">
              <li>Write the loan balance, the rate, the remaining years, and the offset balance that survives a normal month.</li>
              <li>Put the calculator on those numbers with extra repayment at zero. That interest figure is the cost of leaving it.</li>
              <li>If you have a company, ask what last year's drawings were for tax. Wage, dividend, or loan.</li>
              <li>Do not open a trust as a hobby. Wait until there is profit or a purchase that needs one.</li>
              <li>Come back to the application when income is over $200k, you own a business, or investable assets pass $200k.</li>
            </ol>
            <Link to="/tools/$slug" params={{ slug: "mortgage-destroyer-calculator" }} className="inline-block text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
              Open the calculator
            </Link>
          </div>
        ) : null}
        {slug === "property-wealth-report" ? (
          <div className="space-y-4 text-base leading-[1.8] text-muted-foreground">
            <h1 className="font-display text-4xl font-medium leading-tight text-primary">Three scenarios. Not a suburb list.</h1>
            <p>Leave the equity in the house. Use surplus cash to shorten the loan. Or deploy some of it into an asset the structure can hold. A report that skips the first two and starts with listings is a brochure.</p>
            <p>If your application clears the session line, those three scenarios are part of the preparation. If it does not, the Blueprint is the honest version of the same fork, without us pretending we modelled your deed.</p>
            <Link to="/apply" className="inline-block rounded-sm bg-primary px-5 py-3.5 text-[10px] font-semibold tracking-[0.16em] text-primary-foreground">
              APPLY
            </Link>
          </div>
        ) : null}
      </div>
    </main>
  );
}
