import { Link, createFileRoute } from "@tanstack/react-router";
import { FinalCta } from "@/components/marketing";
import { aud, caseStudies, caseStudySource, caseStudyStats, caseStudyThemes, signedPct } from "@/content/case-studies";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/proof/")({
  component: ProofIndex,
  head: () =>
    pageHead({
      title: "Past work | Avere Wealth",
      description:
        "Four anonymised client files from this practice, delivered while it traded as Your Corner 360. Periods, start and end positions, and what was actually done.",
      path: "/proof",
    }),
});

function ProofIndex() {
  return (
    <main>
      <section className="bg-primary px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-6 text-[10px] font-semibold tracking-[0.28em] text-sky">PAST WORK</p>
          <h1 className="max-w-[860px] font-display text-[clamp(36px,6vw,58px)] font-medium leading-[1.12] text-primary-foreground">
            Four files. The periods are on the page.
          </h1>
          <p className="mt-6 max-w-[720px] text-pretty text-lg leading-[1.7] text-primary-foreground/80">
            Avere is Your Corner 360 under the current name. These are client files from that work, anonymised, with the start position, the end position, and what was done in between.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card px-6 py-10 md:px-10">
        <dl className="mx-auto grid max-w-[1180px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudyStats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-[28px] font-medium leading-none text-primary">{stat.value}</dt>
              <dd className="mt-3 text-sm font-medium text-primary">{stat.label}</dd>
              <dd className="mt-1 text-[13px] leading-[1.55] text-muted-foreground">{stat.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-background px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              to="/proof/$slug"
              params={{ slug: study.slug }}
              className="flex flex-col rounded-md border border-border bg-card p-7 hover:border-accent"
            >
              <p className="text-[11px] font-semibold tracking-[0.16em] text-link">{study.timeframe.toUpperCase()}</p>
              <h2 className="mt-3 font-display text-[26px] font-medium leading-snug text-primary">{study.title}</h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground">{study.profile}</p>
              <p className="mt-6 font-display text-[22px] font-medium text-primary">
                {aud(study.netWorthBefore)} → {aud(study.netWorthAfter)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {aud(study.growthDollar)} · {signedPct(study.growthPercent)}
              </p>
              <p className="mt-6 text-sm font-medium text-link underline decoration-link/30 underline-offset-4">Read the file</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[240px_1fr] md:gap-16">
          <h2 className="font-display text-[32px] font-medium leading-[1.2] text-primary">What the four files share</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {caseStudyThemes.map((theme) => (
              <li key={theme} className="rounded-sm border border-border bg-background px-4 py-3 text-[15px] text-primary">
                {theme}
              </li>
            ))}
          </ul>
        </div>
        <p className="mx-auto mt-10 max-w-[1180px] text-pretty text-sm leading-[1.7] text-muted-foreground">{caseStudySource}</p>
      </section>

      <section className="bg-background px-6 py-14 md:px-10">
        <div className="mx-auto max-w-[760px]">
          <p className="eyebrow mb-4 text-link">ILLUSTRATIONS</p>
          <h2 className="font-display text-3xl font-medium text-primary">Round numbers, for the shape of the work.</h2>
          <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
            These two pages are not clients. They use invented figures so the sequence is visible before you bring statements.
          </p>
          <ul className="mt-6 space-y-3">
            <li>
              <Link to="/proof/$slug" params={{ slug: "mortgage-walkthrough" }} className="text-link underline decoration-link/30 underline-offset-4">
                Mortgage walkthrough
              </Link>
            </li>
            <li>
              <Link to="/proof/$slug" params={{ slug: "structure-walkthrough" }} className="text-link underline decoration-link/30 underline-offset-4">
                Structure and tax walkthrough
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <FinalCta
        title="Your file starts with your statements."
        body="These four households are not a template. The session uses your loan, your tax and your structure."
      />
    </main>
  );
}
