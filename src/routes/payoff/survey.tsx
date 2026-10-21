import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { pageHead } from "@/lib/site";
import {
  loadPayoffLead,
  purposeLabel,
  savePayoffSurvey,
  type Employment,
  type LoanBand,
  type LoanPurpose,
  type PayoffLead,
  type Timeframe,
  type YesNo,
} from "@/lib/payoff";

export const Route = createFileRoute("/payoff/survey")({
  component: SurveyPage,
  head: () =>
    pageHead({
      title: "A few questions | Avere",
      description: "So a mortgage enquiry can be pointed at the right person. General information.",
      path: "/payoff/survey",
      noindex: true,
    }),
});

const inputClass =
  "w-full rounded-sm border border-input bg-background px-3.5 py-3 text-[15px] text-foreground outline-none focus:border-link focus:ring-2 focus:ring-ring/20";
const labelClass = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary";

function SurveyPage() {
  const navigate = useNavigate();
  const [lead, setLead] = useState<PayoffLead | null | undefined>(undefined);
  const [purpose, setPurpose] = useState<LoanPurpose>("paydown");
  const [loanBand, setLoanBand] = useState<LoanBand>("500-1m");
  const [timeframe, setTimeframe] = useState<Timeframe>("now");
  const [employment, setEmployment] = useState<Employment>("payg");
  const [wantsAdvice, setWantsAdvice] = useState<YesNo>("no");

  useEffect(() => {
    const stored = loadPayoffLead();
    setLead(stored);
    if (stored) setPurpose(stored.purpose);
  }, []);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    savePayoffSurvey({ purpose, loanBand, timeframe, employment, wantsAdvice });
    navigate({ to: "/payoff/next" });
  }

  if (lead === undefined) return null;
  if (!lead) {
    return (
      <main className="bg-background px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[720px]">
          <h1 className="font-display text-4xl font-medium text-primary">Start with the email.</h1>
          <Link to="/payoff" className="mt-6 inline-block text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
            Back to the start
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background px-6 py-16 md:px-10">
      <form onSubmit={onSubmit} className="mx-auto max-w-[640px] space-y-5">
        <p className="eyebrow text-link">SO WE POINT YOU AT THE RIGHT PERSON</p>
        <h1 className="font-display text-4xl font-medium leading-tight text-primary">Five questions. No documents.</h1>
        <p className="text-base leading-[1.7] text-muted-foreground">
          Bands, not balances. A yes on investing is noted for an adviser. It does not start an advice email.
        </p>
        <label className="block">
          <span className={labelClass}>Loan purpose</span>
          <select className={inputClass} value={purpose} onChange={(event) => setPurpose(event.target.value as LoanPurpose)}>
            {(Object.keys(purposeLabel) as LoanPurpose[]).map((key) => (
              <option key={key} value={key}>
                {purposeLabel[key]}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Rough loan size</span>
          <select className={inputClass} value={loanBand} onChange={(event) => setLoanBand(event.target.value as LoanBand)}>
            <option value="under-500">Under $500k</option>
            <option value="500-1m">$500k to $1m</option>
            <option value="1m-plus">Over $1m</option>
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Timeframe</span>
          <select className={inputClass} value={timeframe} onChange={(event) => setTimeframe(event.target.value as Timeframe)}>
            <option value="now">I want to look at it now</option>
            <option value="this-year">This year</option>
            <option value="later">Not sure</option>
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Employment</span>
          <select className={inputClass} value={employment} onChange={(event) => setEmployment(event.target.value as Employment)}>
            <option value="payg">PAYG</option>
            <option value="self-employed">Self-employed</option>
            <option value="retired">Retired</option>
            <option value="other">Something else</option>
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Would you also like to talk about investing or debt recycling?</span>
          <select className={inputClass} value={wantsAdvice} onChange={(event) => setWantsAdvice(event.target.value as YesNo)}>
            <option value="no">No. The loan is the question.</option>
            <option value="yes">Yes. Have an adviser look at that separately.</option>
          </select>
        </label>
        <button
          type="submit"
          className="rounded-sm bg-primary px-5 py-4 text-[10px] font-semibold leading-none text-primary-foreground hover:bg-link"
          style={{ letterSpacing: ".18em" }}
        >
          SHOW ME THE NEXT STEP
        </button>
      </form>
    </main>
  );
}
