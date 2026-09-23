import { createFileRoute } from "@tanstack/react-router";
import { ApplyForm } from "@/components/ApplyForm";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/apply/")({
  component: ApplyPage,
  head: () =>
    pageHead({
      title: "Apply for a Wealth Strategy Session | Avere",
      description:
        "For households earning $200k+ and business owners. Apply for a Wealth Strategy Session with Matt Brown. AFSL 525361.",
      path: "/apply",
    }),
});

function ApplyPage() {
  return (
    <main className="bg-background px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow mb-4 text-link">FOR HOUSEHOLDS EARNING $200K+ AND BUSINESS OWNERS</p>
          <h1 className="font-display text-[clamp(34px,5vw,48px)] font-medium leading-[1.15] text-primary">
            Apply for a Wealth Strategy Session
          </h1>
          <ul className="mt-6 space-y-3 text-[15px] leading-[1.6] text-muted-foreground">
            <li>We use your numbers, not a persona.</li>
            <li>You leave with a yes, a no, or a Blueprint. Not a newsletter.</li>
            <li>If there is paid work, you see the price before you agree. The entry package is $995 and it is refundable.</li>
          </ul>
          <div className="mt-8 space-y-3 text-sm leading-[1.7] text-muted-foreground">
            <p className="font-medium text-primary">A session if:</p>
            <p>You own a business, household income is over $200k, or you have more than $200k to invest.</p>
            <p className="font-medium text-primary">The Blueprint if:</p>
            <p>Investable assets are under $100k, or you have neither a home nor a business. Same ideas, earlier stage. Not a brush-off.</p>
          </div>
          <p className="mt-8 text-sm leading-[1.7] text-subtle">
            Matt runs a capped number of sessions each week. General information only until we know your situation. AFSL 525361.
          </p>
        </div>
        <div className="rounded-md border border-border bg-card p-6 md:p-8">
          <ApplyForm campaign="apply" />
        </div>
      </div>
    </main>
  );
}
