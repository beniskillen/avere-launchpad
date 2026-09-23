import { createFileRoute, Link } from "@tanstack/react-router";
import { ApplyLink, FaqList, PrincipleGrid } from "@/components/marketing";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema, homeFaqs, organisationSchema, pageHead } from "@/lib/site";
import { learnHubs } from "@/content/learn";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead({
      title: "Avere Wealth | Strategic Private Wealth for Australians",
      description:
        "Advice, tax, lending and property in one written roadmap for Australian families and business owners. AFSL 525361. Apply for a Wealth Strategy Session.",
      path: "/",
    }),
});

const roadmap = [
  "Cash flow and structure",
  "Superannuation",
  "Taxation",
  "Portfolio construction",
  "Risk protection",
  "Wealth transfer",
  "Reporting",
  "Timely reviews",
];

function Home() {
  return (
    <main>
      <JsonLd data={organisationSchema} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="bg-primary px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-8 text-[10px] font-semibold leading-none text-sky" style={{ letterSpacing: ".28em" }}>
            AVERE PRIVATE WEALTH · AFSL 525361
          </p>
          <h1 className="max-w-[860px] font-display text-[clamp(40px,7vw,72px)] font-medium leading-[1.08] text-primary-foreground">
            Wealth, <span className="text-gold-light">well lived.</span>
          </h1>
          <p className="mt-6 max-w-[640px] text-pretty text-lg leading-[1.7] text-primary-foreground/80">
            We help Australian businesses and professional families hold on to what they have created and build on it sensibly.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ApplyLink light>Apply for a Wealth Strategy Session</ApplyLink>
            <Link
              to="/tools/$slug"
              params={{ slug: "wealth-potential-quiz" }}
              className="text-[13px] font-medium text-sky underline decoration-sky/40 underline-offset-4"
            >
              Take the 2-minute Wealth Potential Quiz
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[240px_1fr] md:gap-16">
          <p className="eyebrow text-link">THE GAP</p>
          <div className="max-w-[700px] space-y-4 text-pretty text-base leading-[1.75] text-muted-foreground">
            <h2 className="font-display text-[32px] font-medium leading-[1.2] text-primary">
              Your accountant, your broker and your agent do not sit in the same room.
            </h2>
            <p>
              The accountant knows the tax. The broker knows the loan. The property person knows a listing. The strategy dies in the emails you forward between them.
            </p>
            <p>
              Most people building real wealth end up managing their own advisers. The client fills the gap, usually by forwarding emails.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-4 text-link">ONE ROADMAP</p>
            <h2 className="mb-6 max-w-[640px] text-pretty font-display text-[32px] font-medium leading-[1.25] text-primary">
              One roadmap, and one set of people accountable for it.
            </h2>
            <p className="mb-6 max-w-[620px] text-pretty text-base leading-[1.8] text-muted-foreground">
              We bring strategic advice, wealth management, tax and business strategies into a single roadmap, so you stop carrying the workload yourself. We collaborate closely with your accounting and mortgage advisory team so implementation actually happens.
            </p>
            <ul className="flex flex-wrap gap-2">
              {roadmap.map((item) => (
                <li key={item} className="rounded-sm bg-secondary px-3.5 py-2.5 text-[12px] font-medium text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-md border border-border bg-background p-8">
            <p className="eyebrow mb-3 text-link">THE WEDGE</p>
            <h3 className="mb-3 font-display text-[28px] font-medium leading-snug text-primary">The Mortgage Destroyer</h3>
            <p className="mb-4 text-pretty text-[15px] leading-[1.7] text-muted-foreground">
              A written page for the home loan, the tax and the structure. $995, refundable. If we cannot identify at least $50,000 of opportunities over a 10-year view, the strategy fee comes back. Identifying an opportunity is not a promise it will happen.
            </p>
            <Link to="/services/$slug" params={{ slug: "mortgage-destroyer" }} className="text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
              Read the offer
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-4 text-link">THE METHOD</p>
            <h2 className="mb-4 font-display text-[32px] font-medium leading-snug text-primary">Tax, then structure, then debt, then the asset.</h2>
            <p className="text-pretty text-base leading-[1.75] text-muted-foreground">
              That order is the Integrated Alpha Loop. The operating layer is simpler: written objectives, a 90-day check-in, an annual review. Management by objectives, not a yearly chat.
            </p>
            <Link to="/the-avere-method" className="mt-5 inline-block text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
              The Avere Method
            </Link>
          </div>
          <div className="rounded-md border border-border bg-card p-8">
            <p className="eyebrow mb-4 text-link">WHO THIS IS FOR</p>
            <ul className="space-y-3 text-[15px] leading-[1.6] text-muted-foreground">
              <li>Household income over $200k.</li>
              <li>Business owners with profit to structure.</li>
              <li>Homeowners with a mortgage worth looking at properly.</li>
              <li>People heading toward the sophisticated-investor tests, who would rather arrive with clean entities.</li>
            </ul>
            <p className="mt-5 text-pretty text-[15px] leading-[1.7] text-primary">
              If you have under $100k to invest, start with the Blueprint, not a session. If you have no home and no business, the same path applies. The form does this sorting. You do not get a polite rejection email.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow mb-4 text-link">PROOF</p>
          <h2 className="mb-4 max-w-[720px] font-display text-[32px] font-medium leading-snug text-primary">
            We will publish client numbers when the client has agreed, with the date and the source.
          </h2>
          <p className="mb-6 max-w-[680px] text-pretty text-base leading-[1.75] text-muted-foreground">
            Until those notes are cleared, the site carries two teaching examples. Round figures. Not a client. Not a forecast. If you want the real file, that is the session.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/proof/$slug" params={{ slug: "mortgage-walkthrough" }} className="text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
              A mortgage walkthrough
            </Link>
            <Link to="/proof/$slug" params={{ slug: "structure-walkthrough" }} className="text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
              A structure and tax walkthrough
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow mb-6 text-link">FROM LEARN</p>
          <div className="grid gap-4 md:grid-cols-3">
            {learnHubs.slice(0, 3).map((hub) => (
              <Link key={hub.slug} to="/learn/$slug" params={{ slug: hub.slug }} className="rounded-md border border-border bg-card p-6 hover:border-accent">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-link">HUB</p>
                <h3 className="font-display text-xl font-medium text-primary">{hub.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-muted-foreground">{hub.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow mb-6 text-link">WHAT YOU CAN EXPECT FROM US</p>
          <PrincipleGrid />
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[800px]">
          <p className="eyebrow mb-4 text-link">QUESTIONS</p>
          <FaqList items={homeFaqs} />
        </div>
      </section>

      <section className="bg-primary px-6 py-16 md:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="mb-3 font-display text-[32px] font-medium leading-snug text-primary-foreground">
              Apply for a Wealth Strategy Session.
            </h2>
            <p className="max-w-[540px] text-pretty text-base leading-[1.7] text-primary-foreground/80">
              Matt runs a capped number each week. The form is the filter. If you are not the fit, you get the Blueprint on the next page.
            </p>
          </div>
          <ApplyLink light className="self-start" />
        </div>
      </section>
    </main>
  );
}
