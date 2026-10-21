import { useNavigate, createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { pageHead } from "@/lib/site";
import { purposeLabel, savePayoffLead, type LoanPurpose } from "@/lib/payoff";

export const Route = createFileRoute("/payoff/")({
  component: PayoffPage,
  head: () =>
    pageHead({
      title: "Pay the home loan down the slow way | Avere",
      description:
        "A short case study on what changes the years on a home loan. Email and consent first. General information. AFSL 525361.",
      path: "/payoff",
    }),
});

const inputClass =
  "w-full rounded-sm border border-input bg-background px-3.5 py-3 text-[15px] text-foreground outline-none focus:border-link focus:ring-2 focus:ring-ring/20";
const labelClass = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary";

function PayoffPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [purpose, setPurpose] = useState<LoanPurpose>("paydown");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (name.trim().length < 2) {
      setError("Add your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Use a real email address.");
      return;
    }
    if (mobile.replace(/\D/g, "").length < 8) {
      setError("Add a mobile number.");
      return;
    }
    if (!consent) {
      setError("The consent box has to be ticked. It starts unticked on purpose.");
      return;
    }
    savePayoffLead({
      name: name.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      purpose,
      consent: true,
      consentedAt: new Date().toISOString(),
    });
    navigate({ to: "/payoff/video" });
  }

  return (
    <main>
      <section className="bg-primary px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="mb-5 text-[11px] font-semibold tracking-[0.22em] text-sky">THE HOME LOAN · NOT THE WHOLE PLAN</p>
          <h1 className="font-display text-[clamp(36px,6vw,60px)] font-medium leading-[1.08] text-primary-foreground">
            You're paying the home loan down the slow way.
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-[1.7] text-primary-foreground/80">
            Most households know the repayment. Fewer know the years, or what would have to change before anyone talks about a cheaper rate. This page is that fragment. It is not a wealth plan, and it is not a promise the loan finishes early.
          </p>
        </div>
      </section>
      <section className="bg-background px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 text-base leading-[1.75] text-muted-foreground">
            <p>If a message from Matt sent you here, this is the next step he meant. A case study of the mechanism, then a few questions, then a session if the mortgage is actually the problem.</p>
            <p>The first conversation is a look at the current path. It is free. It is not personal advice, and it is not a credit quote. Borrowing to invest can lose money. If the household cannot hold a bad year, the right page is to pay the loan and stop.</p>
            <p>
              The case study is general information. AFSL 525361. Read the{" "}
              <Link to="/advice-disclaimer" className="text-link underline decoration-link/30 underline-offset-4">
                advice disclaimer
              </Link>{" "}
              before you treat any of it as a plan for your loan.
            </p>
          </div>
          <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-md border border-border bg-card p-6 md:p-8">
            <p className="font-display text-2xl font-medium text-primary">See the case study.</p>
            <label className="block">
              <span className={labelClass}>Name</span>
              <input className={inputClass} value={name} autoComplete="name" onChange={(event) => setName(event.target.value)} />
            </label>
            <label className="block">
              <span className={labelClass}>Email</span>
              <input className={inputClass} type="email" value={email} autoComplete="email" onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label className="block">
              <span className={labelClass}>Mobile</span>
              <input className={inputClass} type="tel" value={mobile} autoComplete="tel" onChange={(event) => setMobile(event.target.value)} />
            </label>
            <label className="block">
              <span className={labelClass}>What are you looking at?</span>
              <select className={inputClass} value={purpose} onChange={(event) => setPurpose(event.target.value as LoanPurpose)}>
                {(Object.keys(purposeLabel) as LoanPurpose[]).map((key) => (
                  <option key={key} value={key}>
                    {purposeLabel[key]}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                className="mt-1"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span>
                I agree to Avere sending me emails and SMS about home loans and related services. I can unsubscribe at any time. This box starts unticked.
              </span>
            </label>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <button
              type="submit"
              className="rounded-sm bg-primary px-5 py-4 text-[10px] font-semibold leading-none text-primary-foreground hover:bg-link"
              style={{ letterSpacing: ".18em" }}
            >
              SEND ME THE CASE STUDY
            </button>
            <p className="text-sm leading-[1.7] text-subtle">
              On this preview the details stay in this browser. They are not emailed yet, and they are not written into Mercury. When sending is switched on, the page will say so. AFSL 525361.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
