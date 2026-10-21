import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { pageHead } from "@/lib/site";
import { blogEmails, followUps, loadPayoffLead, loadPayoffSurvey, type PayoffLead, type PayoffSurvey } from "@/lib/payoff";

export const Route = createFileRoute("/payoff/next")({
  component: NextPage,
  head: () =>
    pageHead({
      title: "What happens next | Avere",
      description: "The session, and the emails that follow a mortgage enquiry. Nothing is sent from this preview.",
      path: "/payoff/next",
      noindex: true,
    }),
});

function NextPage() {
  const [lead, setLead] = useState<PayoffLead | null | undefined>(undefined);
  const [survey, setSurvey] = useState<PayoffSurvey | null>(null);

  useEffect(() => {
    setLead(loadPayoffLead());
    setSurvey(loadPayoffSurvey());
  }, []);

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

  const first = lead.name.split(" ")[0];

  return (
    <main className="bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[760px]">
        <p className="eyebrow text-link">THE NEXT CONVERSATION</p>
        <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-primary">
          {first}, the mortgage question goes to a session with Matt.
        </h1>
        <div className="mt-6 space-y-4 text-base leading-[1.8] text-muted-foreground">
          {survey?.wantsAdvice === "yes" ? (
            <p>
              You also asked about investing or debt recycling. That answer is handed to an adviser. It does not start a second set of emails, and it is not decided on this page.
            </p>
          ) : (
            <p>You kept the question on the loan. That is the session. Investing is not added unless you ask for it.</p>
          )}
          {!survey ? (
            <p>
              The survey is still open.{" "}
              <Link to="/payoff/survey" className="text-link underline decoration-link/30 underline-offset-4">
                Five questions
              </Link>{" "}
              decide whether this stays a mortgage enquiry.
            </p>
          ) : null}
          <p>
            The application is the way into the session. On this preview it stays in the browser. A calendar is not connected yet, so the page will not pretend you are booked.
          </p>
        </div>
        <Link
          to="/apply"
          className="mt-8 inline-block rounded-sm bg-primary px-5 py-4 text-[10px] font-semibold leading-none text-primary-foreground"
          style={{ letterSpacing: ".16em" }}
        >
          APPLY FOR THE SESSION
        </Link>

        <h2 className="mt-14 font-display text-2xl font-medium text-primary">What the follow-up is, once sending is on</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          These notes are the sequence. They are not in Mercury yet, and this preview does not send them. Every email needs an unsubscribe. Every text needs reply STOP. Consent was the box you ticked.
        </p>
        <ol className="mt-6 space-y-4">
          {followUps.map((step) => (
            <li key={step.when} className="rounded-md border border-border bg-card px-5 py-4">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-accent">
                {step.when} · {step.channel}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.what}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 font-display text-2xl font-medium text-primary">Then Matt's writing takes over</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          After the first few days, the emails are the blog. Matt writes them. A new piece in Learn becomes the next email. These four are the starter set already on the site. They are scaffolds until his version replaces them.
        </p>
        <ul className="mt-6 space-y-3">
          {blogEmails.map((post) => (
            <li key={post.slug}>
              <Link
                to="/learn/$slug"
                params={{ slug: post.slug }}
                className="font-medium text-link underline decoration-link/30 underline-offset-4"
              >
                {post.title}
              </Link>
              <p className="text-sm leading-relaxed text-muted-foreground">{post.job}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
