import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { FinalCta } from "@/components/marketing";
import { aud, caseStudies, caseStudySource, getCaseStudy, signedPct, type CaseStudy } from "@/content/case-studies";
import { pageHead } from "@/lib/site";

const notes = {
  "mortgage-walkthrough": {
    title: "A mortgage walkthrough, with invented round numbers",
    description: "An illustration of how the Mortgage Destroyer page is built. Not a client. Not a forecast.",
    body: [
      "Picture a household that owes $800,000 on a home, at 6.2%, with 27 years left, and $40,000 that actually stays in an offset. Those figures are made up so the shape is visible. They are not someone we advise.",
      "The first output is the interest if nothing changes. You can reproduce a version of that on the calculator with your own inputs. The second output is what changes if an extra repayment is real, not a New Year plan. The third is whether any of the debt should become deductible. That question waits until there is an asset and a purpose, not before.",
      "The page would then say what not to do. In this illustration, that line is: do not refinance into a new 30-year term just to feel a lower repayment, if the goal you wrote down was to be done sooner. A lower repayment can lengthen the interest you pay.",
      "A real file would replace every number with a statement, name the lender's assessment rate, and stop if the household has no buffer. This one stops here on purpose.",
    ],
  },
  "structure-walkthrough": {
    title: "A structure and tax walkthrough, also not a client",
    description: "How a company, a trust and a home loan get put on one page. Illustration only.",
    body: [
      "Picture an owner who takes money from a company as drawings, lives in a house with a personal-name mortgage, and has been told to 'get a trust' before buying a second property. Again, a sketch. Not a file.",
      "The page starts by naming what the drawings already are for tax, because that decides the next year more than a new deed does. Then it asks whether a trust can hold the next asset in that state, and whether the bank will lend to it. Then, and only then, the purchase.",
      "If the trust's only adult beneficiary is already on the top rate, the page says the distribution story is thin. Setting up an entity to feel organised is a cost. The illustration ends with a written 'wait' if the asset does not exist yet.",
    ],
  },
} as const;

export const Route = createFileRoute("/proof/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (study) return { kind: "case" as const, study };
    const note = notes[params.slug as keyof typeof notes];
    if (note) return { kind: "note" as const, slug: params.slug, ...note };
    throw notFound();
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    if (loaderData.kind === "case") {
      return pageHead({
        title: `${loaderData.study.title} | Avere`,
        description: loaderData.study.lede,
        path: `/proof/${loaderData.study.slug}`,
      });
    }
    return pageHead({
      title: `${loaderData.title} | Avere`,
      description: loaderData.description,
      path: `/proof/${loaderData.slug}`,
    });
  },
  component: ProofNote,
});

function ProofNote() {
  const data = Route.useLoaderData();
  if (data.kind === "case") return <CaseStudyPage study={data.study} />;
  return (
    <main>
      <article className="mx-auto max-w-[740px] px-6 py-14 md:px-10">
        <p className="mb-4 text-sm">
          <Link to="/proof" className="text-link underline decoration-link/30 underline-offset-4">
            Past work
          </Link>
        </p>
        <p className="mb-4 rounded-sm border border-accent/40 bg-secondary px-4 py-3 text-sm leading-[1.6] text-primary">
          Teaching example. Round numbers chosen for the shape of the work. Not a client result, not a testimonial, not a forecast.
        </p>
        <h1 className="font-display text-4xl font-medium leading-tight text-primary">{data.title}</h1>
        <div className="mt-6 space-y-4 text-base leading-[1.8] text-muted-foreground">
          {data.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <FinalCta title="Bring your statements instead." body="The session replaces these round numbers with yours. If you are under the line, you get the Blueprint." />
    </main>
  );
}

function CaseStudyPage({ study }: { study: CaseStudy }) {
  const others = caseStudies.filter((item) => item.slug !== study.slug);
  const rows = [
    ["Net worth", study.netWorthBefore, study.netWorthAfter, signedPct(study.growthPercent)],
    ["Assets", study.assetsBefore, study.assetsAfter, signedPct(study.assetsChangePercent)],
    ["Liabilities", study.liabilitiesBefore, study.liabilitiesAfter, signedPct(study.liabilitiesChangePercent)],
  ] as const;

  return (
    <main>
      <section className="bg-primary px-6 pb-16 pt-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-[860px]">
          <p className="mb-6 text-sm">
            <Link to="/proof" className="text-sky underline decoration-sky/40 underline-offset-4">
              Past work
            </Link>
          </p>
          <p className="mb-4 text-[10px] font-semibold tracking-[0.22em] text-sky">{study.timeframe.toUpperCase()}</p>
          <h1 className="font-display text-[clamp(32px,5vw,52px)] font-medium leading-[1.15] text-primary-foreground">{study.title}</h1>
          <p className="mt-5 text-lg leading-[1.7] text-primary-foreground/80">{study.lede}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {study.pills.map((pill) => (
              <li key={pill} className="rounded-sm bg-primary-foreground/10 px-3 py-2 text-[12px] text-primary-foreground">
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-card px-6 py-8 md:px-10">
        <p className="mx-auto max-w-[860px] text-pretty text-sm leading-[1.7] text-muted-foreground">
          Past file. Not a forecast and not a promise that the same change will happen for you. General information only. Read the{" "}
          <Link to="/advice-disclaimer" className="text-link underline decoration-link/30 underline-offset-4">
            advice disclaimer
          </Link>
          .
        </p>
      </section>

      <article className="bg-background px-6 py-14 md:px-10">
        <div className="mx-auto max-w-[860px]">
          <dl className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
            {(
              [
                ["Start", aud(study.netWorthBefore)],
                ["End", aud(study.netWorthAfter)],
                ["Change", `${aud(study.growthDollar)} · ${signedPct(study.growthPercent)}`],
              ] as const
            ).map(([label, value]) => (
              <div key={label} className="bg-card px-5 py-5">
                <dt className="text-[10px] font-semibold tracking-[0.18em] text-subtle">{label.toUpperCase()}</dt>
                <dd className="mt-2 font-display text-2xl font-medium text-primary">{value}</dd>
              </div>
            ))}
          </dl>

          <blockquote className="mt-10 border-l-2 border-accent pl-5">
            <p className="text-pretty font-display text-[22px] font-medium leading-snug text-primary">“{study.quote}”</p>
            <footer className="mt-3 text-sm text-muted-foreground">{study.quoteBy}</footer>
          </blockquote>

          <dl className="mt-10 grid gap-4 text-sm sm:grid-cols-2">
            {[
              ["Who", study.profile],
              ["Engaged", study.since],
              ["Income", study.income],
              ["Portfolio at the end", study.portfolio],
              ...(study.expenses ? [["Spending", study.expenses] as const] : []),
            ].map(([label, value]) => (
              <div key={label} className="border-t border-border pt-3">
                <dt className="text-[10px] font-semibold tracking-[0.16em] text-subtle">{label.toUpperCase()}</dt>
                <dd className="mt-1 text-[15px] text-primary">{value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-14 font-display text-3xl font-medium text-primary">The position at the start</h2>
          <div className="mt-5 overflow-x-auto rounded-md border border-border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-secondary text-primary">
                <tr>
                  <th className="px-4 py-3 font-semibold"> </th>
                  <th className="px-4 py-3 font-semibold">Start</th>
                  <th className="px-4 py-3 font-semibold">End</th>
                  <th className="px-4 py-3 font-semibold">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                {rows.map(([label, before, after, change]) => (
                  <tr key={label}>
                    <th className="px-4 py-3 font-medium text-primary">{label}</th>
                    <td className="px-4 py-3">{aud(before)}</td>
                    <td className="px-4 py-3">{aud(after)}</td>
                    <td className="px-4 py-3">{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.7] text-muted-foreground">
            {study.positionNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          {study.reconciliation ? <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">{study.reconciliation}</p> : null}

          <h2 className="mt-14 font-display text-3xl font-medium text-primary">What they asked for</h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.7] text-muted-foreground">
            {study.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>

          <h2 className="mt-14 font-display text-3xl font-medium text-primary">What was done</h2>
          <ol className="mt-6 space-y-6">
            {study.work.map((item, index) => (
              <li key={item.title} className="grid gap-2 border-t border-border pt-5 sm:grid-cols-[140px_1fr]">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-link">0{index + 1}</p>
                <div>
                  <h3 className="font-display text-xl font-medium text-primary">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.75] text-muted-foreground">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 font-display text-3xl font-medium text-primary">What the file showed</h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.7] text-muted-foreground">
            {study.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>

          <h2 className="mt-14 font-display text-3xl font-medium text-primary">What changed in the structure</h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.7] text-muted-foreground">
            {study.changes.map((change) => (
              <li key={change}>{change}</li>
            ))}
          </ul>

          <p className="mt-12 text-pretty text-sm leading-[1.7] text-muted-foreground">{caseStudySource}</p>
        </div>
      </article>

      <section className="border-t border-border bg-card px-6 py-14 md:px-10">
        <div className="mx-auto max-w-[860px]">
          <h2 className="mb-6 font-display text-2xl font-medium text-primary">The other files</h2>
          <ul className="space-y-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link to="/proof/$slug" params={{ slug: item.slug }} className="text-link underline decoration-link/30 underline-offset-4">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta
        title="Your file starts with your statements."
        body="These households are not a template. The session uses your loan, your tax and your structure."
      />
    </main>
  );
}
