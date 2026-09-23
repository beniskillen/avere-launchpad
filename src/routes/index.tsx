import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AvereMark } from "@/components/AvereMark";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Avere Private Wealth — Launching September 2026" },
      {
        name: "description",
        content:
          "Strategic private wealth management for Australian businesses and professional families. Opening September 2026 — taking enquiries now.",
      },
      {
        property: "og:title",
        content: "Avere Private Wealth — Launching September 2026",
      },
      {
        property: "og:description",
        content:
          "One roadmap, and one set of people accountable for it. Strategic private wealth for Australian businesses and professional families. AFSL 525361.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  {
    n: "01",
    title: "Strategic Private Wealth",
    body: "A written roadmap you can act on, then the ongoing management that keeps it on track. You define the destination. We define what to do, in what order, what it costs, and what it will not do.",
    tags: [
      "Cash flow & structure",
      "Superannuation",
      "Taxation",
      "Portfolio construction",
      "Risk protection",
      "Wealth transfer",
      "Reporting",
      "Timely reviews",
    ],
  },
];

const expect = [
  {
    title: "Counted honestly",
    body: "We talk about what is actually there, not what it could be under a favourable assumption. Every number sourced, every assumption stated.",
  },
  {
    title: "Priced in writing",
    body: "What it costs, what it will not do, and what we do not know — before you commit to anything.",
  },
  {
    title: "Defined by you",
    body: "A paid-off home matters as much as a portfolio if that is what your family was working towards. Success is yours to define.",
  },
];

function Home() {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-primary px-6 pb-[92px] pt-[104px] md:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center">
          <p
            className="mb-[50px] text-center text-[10px] font-semibold leading-none text-sky"
            style={{ letterSpacing: ".32em" }}
          >
            LAUNCHING SEPTEMBER 2026 · WWW.AVERE.AU
          </p>
          <AvereMark
            size="clamp(46px, 12vw, 96px)"
            className="mb-5 text-primary-foreground"
          />
          <p
            className="mb-11 text-center text-[10px] font-semibold uppercase leading-none text-sky"
            style={{ letterSpacing: ".3em", paddingLeft: ".3em" }}
          >
            Private Wealth
          </p>
          <h1 className="mb-5 max-w-[800px] text-pretty text-center font-display text-[clamp(32px,6vw,52px)] font-medium leading-[1.2] text-primary-foreground">
            Strategic Private Wealth
          </h1>
          <p className="mb-7 max-w-[640px] text-pretty text-center text-lg leading-[1.75] text-primary-foreground/80">
            We help Australian businesses and professional families hold on to
            what they have created and build on it sensibly.
          </p>
          <p className="text-center font-display text-[clamp(22px,4vw,34px)] font-medium leading-[1.3]">
            <span className="text-primary-foreground">Wealth,</span>{" "}
            <span className="text-gold-light">well lived</span>
          </p>
        </div>
      </section>

      {/* What we do + notify */}
      <section className="bg-background px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1180px] items-start gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-4.5 text-link">WHAT WE DO</p>
            <h2 className="mb-7 text-pretty font-display text-[34px] font-medium leading-[1.25] text-primary">
              One roadmap, and one set of people accountable for it.
            </h2>
            <div className="mb-9 max-w-[560px] space-y-4">
              <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
                We bring strategic advice, wealth management, tax and business
                strategies into a single roadmap, so you stop carrying the
                workload yourself. We collaborate closely with your accounting
                and mortgage advisory team so implementation actually happens.
              </p>
              <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
                A life well earned and wealth well managed give you the tools.
                Well lived is what you do with them. The first two are about the
                numbers. The third is about you.
              </p>
              <p className="text-pretty text-base leading-[1.8] text-muted-foreground">
                That's the work we do — turning the number into clarity, options
                and quiet confidence so you can actually live the life you've
                earned.
              </p>
            </div>

            <div className="flex flex-col gap-5.5">
              {services.map((s) => (
                <article
                  key={s.n}
                  className="rounded-md border border-border bg-card p-8 md:px-9"
                >
                  <div className="mb-4 flex items-baseline gap-5">
                    <span className="flex-none font-display text-xl font-medium leading-none text-link">
                      {s.n}
                    </span>
                    <h3 className="font-display text-[27px] font-medium leading-[1.25] text-primary">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mb-5.5 text-pretty text-[15px] leading-[1.75] text-muted-foreground">
                    {s.body}
                  </p>
                  <div className="mb-4.5 h-px bg-border" />
                  <ul className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-sm bg-secondary px-3.5 py-2.5 text-[11px] font-medium leading-none text-primary"
                        style={{ letterSpacing: ".06em" }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-md border border-border bg-card p-9">
            <p className="eyebrow mb-4 text-link">BE FIRST TO KNOW</p>
            <h2 className="mb-3.5 font-display text-[26px] font-medium leading-[1.25] text-primary">
              We open in September 2026.
            </h2>
            <p className="mb-6.5 text-pretty text-sm leading-[1.7] text-muted-foreground">
              Leave your email and we'll tell you when the doors open. No
              newsletter, no drip campaign — one message.
            </p>

            {notified ? (
              <div className="pb-3 pt-1.5">
                <div className="mb-4 h-[1.5px] bg-accent" />
                <p className="mb-1.5 text-[15px] font-semibold leading-normal text-primary">
                  Noted, thank you.
                </p>
                <p className="text-sm leading-[1.7] text-muted-foreground">
                  We'll be in touch once we're live. Nothing before then.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-3"
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  setNotified(true);
                }}
              >
                <input
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  placeholder="you@example.com.au"
                  className="rounded-sm border border-input bg-background px-4 py-3.5 text-[15px] text-foreground outline-none focus:border-link focus:ring-2 focus:ring-ring/20"
                />
                <button
                  type="submit"
                  className="rounded-sm bg-primary p-4 text-[10px] font-semibold leading-none text-primary-foreground transition-colors hover:bg-link"
                  style={{ letterSpacing: ".22em" }}
                >
                  NOTIFY ME
                </button>
              </form>
            )}

            <div className="my-6 h-px bg-border" />
            <dl className="flex flex-col gap-3.5 text-[13px] leading-normal">
              {[
                ["Site live", "September 2026"],
                ["Taking enquiries", "Now"],
                ["AFSL", "525361"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3.5">
                  <dt className="text-subtle">{k}</dt>
                  <dd className="font-medium text-primary">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="my-5 h-px bg-border" />
            <p className="text-pretty text-[13px] leading-[1.75] text-subtle">
              Already know what you need?{" "}
              <Link
                to="/contact"
                className="font-medium text-link underline decoration-link/30 underline-offset-4"
              >
                Book a consultation
              </Link>{" "}
              — we're taking them now.
            </p>
          </aside>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-secondary px-6 py-[70px] md:px-10">
        <div className="mx-auto max-w-[1180px]">
          <p className="eyebrow mb-8 text-link">WHAT YOU CAN EXPECT FROM US</p>
          <div className="grid overflow-hidden rounded-md border border-border bg-card md:grid-cols-3">
            {expect.map((e, i) => (
              <div
                key={e.title}
                className={`p-8 md:px-[34px] ${i < 2 ? "border-b border-border md:border-b-0 md:border-r" : ""}`}
              >
                <h3 className="mb-3 font-display text-xl font-medium leading-[1.25] text-primary">
                  {e.title}
                </h3>
                <p className="text-pretty text-sm leading-[1.75] text-muted-foreground">
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-6 py-[70px] md:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-10 md:flex-row md:items-center md:gap-[60px]">
          <div>
            <h2 className="mb-3 text-pretty font-display text-[34px] font-medium leading-[1.25] text-primary">
              Not ready to wait for September 2026?
            </h2>
            <p className="max-w-[540px] text-pretty text-base leading-[1.7] text-muted-foreground">
              Tell us what you're trying to sort out and we'll tell you honestly
              whether we're the right people for it.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-none self-start rounded-sm bg-primary px-[30px] py-5 text-[10px] font-semibold leading-none text-primary-foreground transition-colors hover:bg-link"
            style={{ letterSpacing: ".22em" }}
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </section>
    </main>
  );
}
