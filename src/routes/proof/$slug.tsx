import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { FinalCta } from "@/components/marketing";
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
    const note = notes[params.slug as keyof typeof notes];
    if (!note) throw notFound();
    return { slug: params.slug, ...note };
  },
  head: ({ loaderData }) =>
    pageHead({
      title: `${loaderData.title} | Avere`,
      description: loaderData.description,
      path: `/proof/${loaderData.slug}`,
    }),
  component: ProofNote,
});

function ProofNote() {
  const note = Route.useLoaderData();
  return (
    <main>
      <article className="mx-auto max-w-[740px] px-6 py-14 md:px-10">
        <p className="mb-4 text-sm">
          <Link to="/proof" className="text-link underline decoration-link/30 underline-offset-4">
            Proof
          </Link>
        </p>
        <p className="mb-4 rounded-sm border border-accent/40 bg-secondary px-4 py-3 text-sm leading-[1.6] text-primary">
          Teaching example. Round numbers chosen for the shape of the work. Not a client result, not a testimonial, not a forecast.
        </p>
        <h1 className="font-display text-4xl font-medium leading-tight text-primary">{note.title}</h1>
        <div className="mt-6 space-y-4 text-base leading-[1.8] text-muted-foreground">
          {note.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <FinalCta title="Bring your statements instead." body="The session replaces these round numbers with yours. If you are under the line, you get the Blueprint." />
    </main>
  );
}
