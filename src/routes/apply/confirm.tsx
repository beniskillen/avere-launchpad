import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { loadApplication, type ScoredApplication } from "@/lib/qualify";
import { pageHead } from "@/lib/site";

const searchSchema = z.object({
  path: z.enum(["session", "blueprint", "register"]).catch("session"),
});

export const Route = createFileRoute("/apply/confirm")({
  validateSearch: searchSchema,
  component: ConfirmPage,
  head: () =>
    pageHead({
      title: "Application received | Avere Wealth",
      description: "What happens after you apply for a Wealth Strategy Session, and what to bring if you are booked.",
      path: "/apply/confirm",
      noindex: true,
    }),
});

function ConfirmPage() {
  const { path } = Route.useSearch();
  const [application, setApplication] = useState<ScoredApplication | null>(null);
  const [registration, setRegistration] = useState<{ name?: string } | null>(null);

  useEffect(() => {
    setApplication(loadApplication());
    const raw = window.sessionStorage.getItem("avere.register.v1");
    if (raw) {
      try {
        setRegistration(JSON.parse(raw) as { name?: string });
      } catch {
        setRegistration(null);
      }
    }
  }, []);

  const name = application?.firstName || registration?.name;

  return (
    <main className="bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[720px]">
        {path === "register" ? <RegisterCopy name={name} /> : null}
        {path === "blueprint" ? <BlueprintCopy name={name} /> : null}
        {path === "session" ? <SessionCopy name={name} priority={application?.priority} /> : null}
        <p className="mt-10 text-sm leading-[1.7] text-subtle">
          On this staging site your answers stay in this browser. They are not emailed. When the calendar is connected, a qualified application will book from this page.
        </p>
        <Link to="/" className="mt-6 inline-block text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}

function SessionCopy({ name, priority }: { name?: string; priority?: boolean }) {
  return (
    <>
      <p className="eyebrow mb-4 text-link">WEALTH STRATEGY SESSION</p>
      <h1 className="font-display text-4xl font-medium leading-tight text-primary">
        {name ? `${name}, you are in the session path.` : "You are in the session path."}
      </h1>
      <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
        {priority
          ? "Your answers score as a priority file. Matt looks at those first."
          : "Your answers clear the line for a session."}{" "}
        Bring four numbers: household income, the loan balance, the interest rate, and a rough monthly spend. Grey answers waste the half hour.
      </p>
      <ol className="mt-8 space-y-4 text-[15px] leading-[1.7] text-muted-foreground">
        <li>1. We confirm the fit. If the file is not one we should take, we say so before anyone invoices.</li>
        <li>2. On the call: where you are, the date you want, the gap, then whether the $995 written strategy is the next step.</li>
        <li>3. The $995 is refundable on the terms on the Mortgage Destroyer page. You see those terms before you pay.</li>
      </ol>
    </>
  );
}

function BlueprintCopy({ name }: { name?: string }) {
  return (
    <>
      <p className="eyebrow mb-4 text-link">DEBT TO WEALTH BLUEPRINT</p>
      <h1 className="font-display text-4xl font-medium leading-tight text-primary">
        {name ? `${name}, the session is the wrong room.` : "The session is the wrong room."}
      </h1>
      <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
        That is not a verdict on your future. The session is for households over $200k, business owners, or people with more than $200k to invest. Under $100k of investable assets, or with no home and no business, the useful thing is the sequence below.
      </p>
      <ol className="mt-8 list-decimal space-y-4 pl-5 text-[15px] leading-[1.7] text-muted-foreground">
        <li>Write the balance, the rate, the remaining term, and the offset balance you actually keep. The interest on that loan, if nothing changes, is the number that should bother you. Use the calculator. It is arithmetic, not a quote.</li>
        <li>Separate the home you live in from any money you might invest. Do not redraw "for an investment" into the same account you use for groceries.</li>
        <li>If there is a company, stop treating drawings as a personality. Wage, dividend, or a real loan. Ask the accountant which one this year already is.</li>
        <li>Do not set up a trust because a friend did. Read who the appointor is on any deed you already have. If you have none, wait until there is an asset or profit that needs one.</li>
        <li>Apply again when income, the business, or investable assets cross the line. The same form. A different result.</li>
      </ol>
      <Link to="/tools/$slug" params={{ slug: "mortgage-destroyer-calculator" }} className="mt-8 inline-block text-sm font-medium text-link underline decoration-link/30 underline-offset-4">
        Open the calculator
      </Link>
    </>
  );
}

function RegisterCopy({ name }: { name?: string }) {
  return (
    <>
      <p className="eyebrow mb-4 text-link">MASTERCLASS</p>
      <h1 className="font-display text-4xl font-medium leading-tight text-primary">
        {name ? `${name}, you are registered.` : "You are registered."}
      </h1>
      <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
        We send the time when the next 60-minute session is actually on the calendar. We do not invent a date to make this page feel finished. After you watch it, the application is the next step, same bar as everyone else.
      </p>
      <Link to="/apply" className="mt-8 inline-block rounded-sm bg-primary px-5 py-3.5 text-[10px] font-semibold tracking-[0.16em] text-primary-foreground">
        APPLY ANYWAY
      </Link>
    </>
  );
}
