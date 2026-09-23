import { Link, createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/proof/")({
  component: ProofIndex,
  head: () =>
    pageHead({
      title: "Proof | Avere Wealth",
      description:
        "Teaching walkthroughs for the Mortgage Destroyer and for structure and tax. Not client results. Client numbers are published only with consent.",
      path: "/proof",
    }),
});

function ProofIndex() {
  return (
    <main className="bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[760px]">
        <p className="eyebrow mb-4 text-link">PROOF</p>
        <h1 className="font-display text-4xl font-medium leading-tight text-primary">Numbers, when we are allowed to show them.</h1>
        <p className="mt-5 text-base leading-[1.75] text-muted-foreground">
          A client result needs the client's consent, a date, and a source for every figure. We do not have those cleared for this version of the site. The two pages below are teaching examples with round numbers. If they read like a testimonial, that is a failure of the writing. They are not one.
        </p>
        <ul className="mt-8 space-y-3">
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
    </main>
  );
}
