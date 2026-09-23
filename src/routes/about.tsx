import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Avere Private Wealth — One View of the Whole Picture" },
      {
        name: "description",
        content:
          "Avere Private Wealth brings strategic advice, wealth management, tax and business strategies into a single roadmap. AFSL 525361.",
      },
      {
        property: "og:title",
        content: "About Avere Private Wealth — One View of the Whole Picture",
      },
      {
        property: "og:description",
        content:
          "One relationship, one view of the whole picture, one set of people accountable to you for it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const meanings = [
  {
    eyebrow: "AVERE · ITALIAN",
    title: "The verb, to have.",
    body: "Ordinary, everyday, unglamorous. It describes the thing itself rather than the aspiration attached to it.",
  },
  {
    eyebrow: "AVERE · ROMANIAN",
    title: "Wealth, counted.",
    body: "The assets a person owns. Not income, not appearance. The measured total of what is actually held.",
  },
];

const values = [
  {
    title: "Wealth.",
    body: "The assets you own, counted honestly. We talk about what is actually there, not what it could be under a favourable assumption.",
  },
  {
    title: "To have.",
    body: "Keeping matters more than getting. Tax, structure, timing and protection decide what survives, and that is where the work is.",
  },
  {
    title: "Trust.",
    body: "Built in small increments and lost all at once. We say what something costs, what it will not do, and what we do not know.",
  },
  {
    title: "Success.",
    body: "Defined by you, not by us. A paid-off home matters as much as a portfolio if that is what your family was working towards.",
  },
  {
    title: "Teamwork.",
    body: "We do the advice and deal directly with your accountant and your broker. You should never be the messenger between your own advisers.",
  },
];

const credentials = [
  ["AFSL", "525361"],
  ["FSG", "Available before we meet"],
  ["COMPLAINTS", "Internal, then AFCA"],
];

function About() {
  return (
    <main className="flex-1">
      <section className="bg-primary px-6 pb-[78px] pt-[86px] md:px-10">
        <div className="mx-auto max-w-[1180px]">
          <p
            className="mb-7 text-[10px] font-semibold leading-none text-sky"
            style={{ letterSpacing: ".32em" }}
          >
            ABOUT AVERE
          </p>
          <h1 className="mb-6 max-w-[840px] text-pretty font-display text-[clamp(34px,6.5vw,58px)] font-medium leading-[1.15] text-primary-foreground">
            One view of the whole picture.
          </h1>
          <p className="max-w-[640px] text-pretty text-lg leading-[1.75] text-primary-foreground/80">
            Avere Private Wealth brings strategic advice, wealth management, tax
            and business strategies into a single roadmap.
          </p>
        </div>
      </section>

      {/* Why we exist */}
      <section className="bg-background px-6 py-[78px] md:px-10">
        <div className="mx-auto grid max-w-[1180px] items-start gap-12 md:grid-cols-[300px_1fr] md:gap-20">
          <p className="eyebrow text-link">WHY WE EXIST</p>
          <div className="max-w-[680px] space-y-5">
            <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
              Most people building real wealth end up managing their own
              advisers. The accountant knows the tax position, the broker knows
              the debt, the adviser knows the investments, and nobody sees all
              three. The client fills the gap, usually by forwarding emails.
            </p>
            <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
              We built Avere to close that gap. We help Australian businesses
              and professional families hold on to what they have created and
              build on it sensibly. We collaborate closely with your accountant
              and your broker so you stop carrying the coordination yourself.
              One relationship, one view of the whole picture, one set of people
              accountable to you for it.
            </p>
          </div>
        </div>
      </section>

      {/* Where the name comes from */}
      <section className="border-t border-border bg-card px-6 py-[78px] md:px-10">
        <div className="mx-auto grid max-w-[1180px] items-start gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow mb-4.5 text-link">
              WHERE THE NAME COMES FROM
            </p>
            <h2 className="mb-6 font-display text-4xl font-medium leading-[1.2] text-primary">
              Two languages, one idea.
            </h2>
            <p className="mb-4.5 text-pretty text-base leading-[1.8] text-muted-foreground">
              Avere carries its meaning in two directions at once. In Italian it
              is a verb, the plain act of having. In Romanian it is a noun, the
              wealth a person owns. Between them sits the whole business.
            </p>
            <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
              We chose a name that describes rather than promises. That was
              deliberate, and it holds for everything we write under it.
            </p>
          </div>
          <div className="flex flex-col gap-6.5">
            {meanings.map((m, i) => (
              <div key={m.eyebrow} className="flex flex-col gap-6.5">
                <div>
                  <p className="eyebrow mb-3 text-link">{m.eyebrow}</p>
                  <h3 className="mb-2.5 font-display text-[26px] font-medium leading-[1.2] text-primary">
                    {m.title}
                  </h3>
                  <p className="text-pretty text-[15px] leading-[1.7] text-muted-foreground">
                    {m.body}
                  </p>
                </div>
                {i === 0 && <div className="h-px bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="bg-background px-6 py-[78px] md:px-10">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow mb-8 text-link">WHAT WE STAND FOR</p>
          <ul className="max-w-[900px]">
            {values.map((v, i) => (
              <li
                key={v.title}
                className={`grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-10 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <h3 className="font-display text-[22px] font-medium leading-[1.25] text-primary">
                  {v.title}
                </h3>
                <p className="text-pretty text-[15px] leading-[1.8] text-muted-foreground">
                  {v.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work with your other advisers */}
      <section className="border-t border-border bg-card px-6 py-[78px] md:px-10">
        <div className="mx-auto grid max-w-[1180px] items-start gap-12 md:grid-cols-[300px_1fr] md:gap-20">
          <p className="eyebrow text-link">
            HOW WE WORK WITH YOUR OTHER ADVISERS
          </p>
          <div className="max-w-[680px] space-y-5">
            <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
              If you already have an accountant and a broker you trust, keep
              them. We will work with them.
            </p>
            <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
              What changes is who carries the coordination. We talk to them
              directly, make sure the tax position, the debt structure and the
              investment strategy line up, and we tell you what was agreed. You
              stop being the middle of that conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-background px-6 py-[78px] md:px-10">
        <div className="mx-auto grid max-w-[1180px] items-start gap-12 md:grid-cols-[300px_1fr] md:gap-20">
          <p className="eyebrow text-link">WHO WE WORK WITH</p>
          <div className="max-w-[680px] space-y-5">
            <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
              Business owners and professional families, usually in their
              thirties through their fifties. Mortgages, superannuation,
              children, and often investments already in train.
            </p>
            <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
              Our clients are capable people who are short on time rather than
              short on understanding. They want someone to bring the pieces
              together and stay accountable for the result.
            </p>
          </div>
        </div>
      </section>

      {/* Licensing and credentials */}
      <section className="bg-secondary px-6 py-[74px] md:px-10">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow mb-6 text-link">LICENSING AND CREDENTIALS</p>
          <dl className="grid overflow-hidden rounded-md border border-border bg-card sm:grid-cols-3">
            {credentials.map(([k, v], i) => (
              <div
                key={k}
                className={`px-7 py-6.5 ${i < credentials.length - 1 ? "border-b border-border sm:border-b-0 sm:border-r" : ""}`}
              >
                <dt
                  className="mb-3 text-[9.5px] font-semibold leading-none text-subtle"
                  style={{ letterSpacing: ".22em" }}
                >
                  {k}
                </dt>
                <dd className="text-[19px] font-semibold leading-[1.3] text-primary">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-0 h-[1.5px] bg-accent" />
          <p className="mt-5.5 max-w-[820px] text-pretty text-sm leading-[1.75] text-muted-foreground">
            Our Financial Services Guide sets out the services we provide, how
            we are paid, and how to make a complaint. You can read it before we
            meet.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-primary px-6 py-[74px] md:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-10 md:flex-row md:items-center md:gap-[60px]">
          <div>
            <h2 className="mb-3 text-pretty font-display text-[34px] font-medium leading-[1.25] text-primary-foreground">
              The first conversation costs nothing.
            </h2>
            <p className="max-w-[540px] text-pretty text-base leading-[1.7] text-primary-foreground/80">
              We use it to work out whether we are the right fit. Nothing more
              than that.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-none self-start rounded-sm bg-primary-foreground px-[30px] py-5 text-[10px] font-semibold leading-none text-primary transition-colors hover:bg-sky"
            style={{ letterSpacing: ".22em" }}
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </section>
    </main>
  );
}
