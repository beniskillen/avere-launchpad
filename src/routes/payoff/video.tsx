import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { pageHead } from "@/lib/site";
import { loadPayoffLead, type PayoffLead } from "@/lib/payoff";

export const Route = createFileRoute("/payoff/video")({
  component: VideoPage,
  head: () =>
    pageHead({
      title: "The case study | Avere",
      description: "The mechanism behind paying a home loan down sooner. General information, not a client result.",
      path: "/payoff/video",
      noindex: true,
    }),
});

function VideoPage() {
  const [lead, setLead] = useState<PayoffLead | null | undefined>(undefined);

  useEffect(() => {
    setLead(loadPayoffLead());
  }, []);

  if (lead === undefined) return null;

  if (!lead) {
    return (
      <main className="bg-background px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[720px]">
          <h1 className="font-display text-4xl font-medium text-primary">The case study sits behind the email.</h1>
          <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
            Add your email and tick consent on the previous page. Nothing is sent from this preview.
          </p>
          <Link to="/payoff" className="mt-6 inline-block text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
            Back to the start
          </Link>
        </div>
      </main>
    );
  }

  const first = lead.name.split(" ")[0];

  return (
    <main className="bg-background px-6 py-16 md:px-10">
      <article className="mx-auto max-w-[760px] space-y-6 text-base leading-[1.8] text-muted-foreground">
        <p className="eyebrow text-link">CASE STUDY · GENERAL INFORMATION</p>
        <h1 className="font-display text-4xl font-medium leading-tight text-primary">
          {first}, this is the mechanism. It is not a result we are promising you.
        </h1>
        <div className="rounded-md border border-dashed border-border bg-muted px-6 py-10">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-accent">MATT'S VIDEO</p>
          <p className="mt-3 text-primary">
            The case-study video goes in this space once Matt records it. Until that file is here, the same walkthrough is written below. Do not treat the empty space as a published claim.
          </p>
        </div>
        <p>
          An invented household has a home loan on a long contract and a monthly surplus. The surplus is paid onto the loan. The same dollars are drawn, the same month, on a separate split, and used to buy assets held to produce income. After interest and tax, what is left goes back to the home loan. The house secures both splits.
        </p>
        <p>
          That is the whole fragment. It is not "we got the best rate", and it is not a net-worth percentage from a decade of advice. Those longer files exist on the past-work page. They are a different claim, and they are not this video.
        </p>
        <p>
          The drawing on the site uses a 10% income assumption, then shows the same household at a lower income. Ten per cent is an assumption for the picture. It is not a yield Avere expects. If the income does not cover the interest, or the household needs that surplus as a buffer, the page can say pay the loan and do not borrow to invest.
        </p>
        <p>Personal advice starts later, after a Financial Services Guide and after someone knows the household. AFSL 525361.</p>
        <Link
          to="/payoff/survey"
          className="inline-block rounded-sm bg-primary px-5 py-4 text-[10px] font-semibold leading-none text-primary-foreground"
          style={{ letterSpacing: ".16em" }}
        >
          ANSWER THE QUESTIONS
        </Link>
      </article>
    </main>
  );
}
