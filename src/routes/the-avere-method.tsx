import { createFileRoute } from "@tanstack/react-router";
import { FinalCta } from "@/components/marketing";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/the-avere-method")({
  component: Method,
  head: () =>
    pageHead({
      title: "The Avere Method | Debt, Tax, Structure, Assets",
      description:
        "The Integrated Alpha Loop and the written objectives behind it. Session, roadmap, pod. How Avere sequences tax, structure, debt and assets.",
      path: "/the-avere-method",
    }),
});

function Method() {
  return (
    <main>
      <section className="bg-primary px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-6 text-[10px] font-semibold tracking-[0.28em] text-sky">THE AVERE METHOD</p>
          <h1 className="max-w-[900px] font-display text-[clamp(34px,5.5vw,56px)] font-medium leading-[1.12] text-primary-foreground">
            One roadmap for debt, tax, structure and assets.
          </h1>
          <p className="mt-6 max-w-[680px] text-pretty text-lg leading-[1.7] text-primary-foreground/80">
            The mechanism has a name because the order matters. Tax, structure, debt, then an asset. Skip a step and you buy the right thing in the wrong name, or refinance a loan that should have been left alone.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[800px] space-y-4 text-pretty text-base leading-[1.8] text-muted-foreground">
          <h2 className="font-display text-3xl font-medium text-primary">The loop, with round numbers</h2>
          <p>
            This is a teaching example. It is not a client and it is not your result. Assume a household that could release about $300,000 of equity while staying inside a conservative loan-to-value ratio, and that does not yet have a trust fit to hold a purchase.
          </p>
          <p>
            First the session writes the position: income, the loan, the rate, the tax, the name on the title. Then the structure, if a structure is actually required, before anyone shops for a rate. Then the debt is reshaped to match that page. Only then does an acquisition get a brief. The $300,000 is not "money to spend". It is borrowing capacity with a job, or it stays in the house.
          </p>
          <p>
            If the cash flow cannot hold a vacant month, the loop stops at "pay the loan". That is a successful page.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-3">
          {[
            ["1. Session", "Your numbers, the date you care about, and the gap in your own words. Matt says whether there is work to do."],
            ["2. Roadmap", "The order, the cost, and what it will not do. Written. You can hand it to the accountant you already have."],
            ["3. Pod", "Accounting, broking, legal and property work off that page. You are not the switchboard."],
          ].map(([title, body]) => (
            <article key={title}>
              <h2 className="mb-3 font-display text-2xl font-medium text-primary">{title}</h2>
              <p className="text-[15px] leading-[1.7] text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-background px-6 py-16 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-6 font-display text-3xl font-medium text-primary">Pod, or the usual arrangement</h2>
          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-secondary text-primary">
                <tr>
                  <th className="px-4 py-3 font-semibold"> </th>
                  <th className="px-4 py-3 font-semibold">Separate advisers</th>
                  <th className="px-4 py-3 font-semibold">Avere</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                {[
                  ["Who holds the order", "You, in your inbox", "A written roadmap"],
                  ["When the trust is read", "After the contract, if at all", "Before anyone refinances"],
                  ["What the broker sees", "The loan application", "The loan and the tax page"],
                  ["Review", "When something breaks", "90 days, then each year"],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 align-top">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-8 text-pretty text-base leading-[1.75] text-muted-foreground">
            Every client who proceeds gets written objectives, a 90-day check-in, and an annual review. That is the retention story. If we cannot say what "done" looks like in 90 days, we should not have taken the work.
          </p>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
