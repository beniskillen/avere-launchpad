import { createFileRoute } from "@tanstack/react-router";
import { ApplyLink, FinalCta } from "@/components/marketing";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, pageHead } from "@/lib/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () =>
    pageHead({
      title: "About Avere | The Practice Behind the Roadmap",
      description:
        "Matt Brown, the pod, and AFSL 525361. Why Your Corner 360 became Avere, and how Futurealty and Growth Labs fit.",
      path: "/about",
    }),
});

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matt Brown",
  jobTitle: "Principal",
  worksFor: {
    "@type": "FinancialService",
    name: "Avere Private Wealth",
    url: absoluteUrl("/"),
  },
  description:
    "Leads advice and broking at Avere Private Wealth. More than 20 years across accounting, broking and advice.",
};

function About() {
  return (
    <main>
      <JsonLd data={person} />
      <section className="bg-primary px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-6 text-[10px] font-semibold tracking-[0.28em] text-sky">ABOUT AVERE</p>
          <h1 className="max-w-[860px] font-display text-[clamp(36px,6vw,58px)] font-medium leading-[1.12] text-primary-foreground">
            One view of the whole picture.
          </h1>
          <p className="mt-6 max-w-[640px] text-pretty text-lg leading-[1.7] text-primary-foreground/80">
            Avere Private Wealth brings strategic advice, wealth management, tax and business strategies into a single roadmap.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[280px_1fr]">
          <p className="eyebrow text-link">MATT BROWN</p>
          <div className="max-w-[680px] space-y-4 text-pretty text-base leading-[1.8] text-muted-foreground">
            <p>
              Matt leads the sessions, the advice and the broking. He has spent more than 20 years across accounting, broking and advice, which is another way of saying he has watched the same household get three different answers from three firms.
            </p>
            <p>
              Your Corner 360 was the delivery. Avere is the name on the door. The licence is AFSL 525361, held by Avere Private Wealth Pty Ltd. The work did not get less specific because the brand got quieter.
            </p>
            <p>
              You can check a financial adviser on the{" "}
              <a className="text-link underline decoration-link/30 underline-offset-4" href="https://moneysmart.gov.au/financial-advice/financial-advisers-register">
                Financial Advisers Register
              </a>
              . We do not print a register number on this page that we have not put next to the individual record.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-4 text-link">WHERE THE NAME COMES FROM</p>
            <h2 className="mb-4 font-display text-4xl font-medium leading-snug text-primary">Two languages, one idea.</h2>
            <p className="mb-4 text-pretty text-base leading-[1.8] text-muted-foreground">
              Avere carries its meaning in two directions at once. In Italian it is a verb, the plain act of having. In Romanian it is a noun, the wealth a person owns. Between them sits the whole business.
            </p>
            <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
              We chose a name that describes rather than promises. That was deliberate, and it holds for everything we write under it.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="eyebrow mb-2 text-link">AVERE · ITALIAN</p>
              <h3 className="font-display text-2xl font-medium text-primary">The verb, to have.</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">
                Ordinary, everyday, unglamorous. It describes the thing itself rather than the aspiration attached to it.
              </p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <p className="eyebrow mb-2 text-link">AVERE · ROMANIAN</p>
              <h3 className="font-display text-2xl font-medium text-primary">Wealth, counted.</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">
                The assets a person owns. Not income, not appearance. The measured total of what is actually held.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[280px_1fr]">
          <p className="eyebrow text-link">THE POD</p>
          <div className="max-w-[680px] space-y-4 text-pretty text-base leading-[1.8] text-muted-foreground">
            <p>
              Accounting, broking, legal and property do not live in one skull. They do live on one written page. Matt holds the advice and the loan conversation. The accountant sees that page. The lawyer drafts when a deed is actually required. Futurealty searches for property when, and only when, the page says the household can hold an asset.
            </p>
            <p>
              Futurealty is the property arm, with Adam and Greg. Growth Labs is the operating system for business owners who need the company run, not only the household advised. They are related to Avere. They are not hidden, and they are not the same invoice. If you already have an accountant and a broker you trust, keep them. We will work with them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow mb-6 text-link">LICENCE</p>
          <dl className="grid overflow-hidden rounded-md border border-border bg-card sm:grid-cols-3">
            {[
              ["AFSL", "525361"],
              ["FSG", "Before personal advice"],
              ["COMPLAINTS", "Us, then AFCA"],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-border px-7 py-6 sm:border-b-0 sm:border-r last:border-0">
                <dt className="mb-2 text-[10px] font-semibold tracking-[0.18em] text-subtle">{label}</dt>
                <dd className="text-lg font-semibold text-primary">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 max-w-[720px] text-sm leading-[1.7] text-muted-foreground">
            The Financial Services Guide sets out the services, how we are paid, and how to complain. Read it before we meet. Personal advice waits until we know your situation.
          </p>
          <div className="mt-6">
            <ApplyLink>Apply for a Wealth Strategy Session</ApplyLink>
          </div>
        </div>
      </section>
      <FinalCta title="The first conversation costs nothing." body="We use it to work out whether we are the right fit. Nothing more than that." />
    </main>
  );
}
