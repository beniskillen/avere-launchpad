import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Avere Private Wealth — Book a Consultation" },
      {
        name: "description",
        content:
          "Tell us what you're trying to sort out. A first conversation with Avere Private Wealth costs nothing and commits you to nothing. Reply within one business day.",
      },
      {
        property: "og:title",
        content: "Contact Avere Private Wealth — Book a Consultation",
      },
      {
        property: "og:description",
        content:
          "A first conversation costs nothing and commits you to nothing. If we're not the right people for it, we'll say so.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

const topics = [
  { id: "wealth", label: "Strategic private wealth" },
  { id: "notsure", label: "Not sure yet" },
];

const steps = [
  "We read it and reply within one business day.",
  "A 30-minute call, no charge, to work out whether there is something worth doing.",
  "If there is, you get the scope and the fee in writing before anything starts.",
];

const direct = [
  ["Enquiries", "Via the form"],
  ["Hours", "Mon–Fri, 9–5 AEST"],
  ["Response", "Within one business day"],
];

const fieldClass =
  "rounded-sm border border-input bg-background px-4 py-3.5 text-[15px] text-foreground outline-none focus:border-link focus:ring-2 focus:ring-ring/20";
const labelClass = "text-[10px] font-semibold leading-none text-muted-foreground";

function Contact() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });
  const [topic, setTopic] = useState("");
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const reset = () => {
    setForm({ first: "", last: "", email: "", phone: "", message: "" });
    setTopic("");
    setSent(false);
  };

  return (
    <main className="flex-1">
      <section className="bg-primary px-6 pb-[74px] pt-[86px] md:px-10">
        <div className="mx-auto max-w-[1180px]">
          <p
            className="mb-7 text-[10px] font-semibold leading-none text-sky"
            style={{ letterSpacing: ".32em" }}
          >
            CONTACT
          </p>
          <h1 className="mb-6 max-w-[740px] text-pretty font-display text-[clamp(34px,6.5vw,58px)] font-medium leading-[1.15] text-primary-foreground">
            Tell us what you're trying to sort out.
          </h1>
          <p className="max-w-[600px] text-pretty text-lg leading-[1.75] text-primary-foreground/80">
            A first conversation costs nothing and commits you to nothing. If
            we're not the right people for it, we'll say so.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 py-[74px] md:px-10">
        <div className="mx-auto grid max-w-[1180px] items-start gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-[70px]">
          <div className="rounded-md border border-border bg-card p-8 md:p-10">
            {sent ? (
              <div className="flex flex-col items-start pb-8 pt-10">
                <p
                  className="mb-5.5 text-[10px] font-semibold leading-none text-link"
                  style={{ letterSpacing: ".26em" }}
                >
                  RECEIVED
                </p>
                <h2 className="mb-4 font-display text-[34px] font-medium leading-[1.2] text-primary">
                  Thank you — that's with us.
                </h2>
                <div className="mb-5.5 h-[1.5px] w-[110px] bg-accent" />
                <p className="max-w-[460px] text-pretty text-base leading-[1.8] text-muted-foreground">
                  We'll come back to you within one business day. If it's
                  urgent, call the number on the right and we'll pick up.
                </p>
                <button
                  onClick={reset}
                  className="mt-7 rounded-sm border border-input px-5 py-3.5 text-[10px] font-semibold leading-none text-primary transition-colors hover:bg-secondary"
                  style={{ letterSpacing: ".22em" }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  window.scrollTo(0, 0);
                }}
              >
                <p
                  className="mb-6.5 text-[10px] font-semibold leading-none text-primary"
                  style={{ letterSpacing: ".26em" }}
                >
                  ENQUIRY
                </p>

                <div className="mb-4.5 grid gap-4.5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className={labelClass} style={{ letterSpacing: ".16em" }}>
                      FIRST NAME
                    </span>
                    <input
                      required
                      value={form.first}
                      onChange={set("first")}
                      className={fieldClass}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className={labelClass} style={{ letterSpacing: ".16em" }}>
                      LAST NAME
                    </span>
                    <input
                      required
                      value={form.last}
                      onChange={set("last")}
                      className={fieldClass}
                    />
                  </label>
                </div>

                <div className="mb-4.5 grid gap-4.5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className={labelClass} style={{ letterSpacing: ".16em" }}>
                      EMAIL
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      className={fieldClass}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className={labelClass} style={{ letterSpacing: ".16em" }}>
                      PHONE
                    </span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      className={fieldClass}
                    />
                  </label>
                </div>

                <fieldset className="mb-4.5 flex flex-col gap-2.5">
                  <legend className={labelClass} style={{ letterSpacing: ".16em" }}>
                    WHAT'S THIS ABOUT
                  </legend>
                  <div className="flex flex-col gap-2.5 sm:flex-row">
                    {topics.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTopic(t.id)}
                        aria-pressed={topic === t.id}
                        className={`flex-1 rounded-sm border px-4 py-3.5 text-left text-[13px] font-medium leading-snug text-primary transition-colors ${
                          topic === t.id
                            ? "border-link bg-secondary"
                            : "border-input bg-background"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="mb-6 flex flex-col gap-2">
                  <span className={labelClass} style={{ letterSpacing: ".16em" }}>
                    WHAT WOULD YOU LIKE TO SORT OUT?
                  </span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="A sentence or two is plenty."
                    className={`${fieldClass} resize-y leading-[1.6]`}
                  />
                </label>

                <div className="mb-5.5 h-px bg-border" />
                <button
                  type="submit"
                  className="w-full rounded-sm bg-primary p-4.5 text-[10px] font-semibold leading-none text-primary-foreground transition-colors hover:bg-link"
                  style={{ letterSpacing: ".22em" }}
                >
                  SEND ENQUIRY
                </button>
                <p className="mt-4 text-pretty text-[11.5px] font-light leading-[1.7] text-subtle">
                  We'll reply within one business day. Your details go to us and
                  nobody else — see our privacy policy.
                </p>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6.5">
            <div>
              <p className="eyebrow mb-4 text-link">DIRECT</p>
              <dl className="flex flex-col">
                {direct.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`flex justify-between gap-4 py-3.5 text-sm leading-normal ${i < direct.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <dt className="text-subtle">{k}</dt>
                    <dd className="text-right font-medium text-primary">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-md bg-primary p-8">
              <p
                className="mb-4 text-[10px] font-semibold leading-none text-sky"
                style={{ letterSpacing: ".26em" }}
              >
                WHAT HAPPENS NEXT
              </p>
              <ol className="flex flex-col gap-4.5">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-5 flex-none font-display text-sm font-medium leading-normal text-sky">
                      0{i + 1}
                    </span>
                    <span className="text-pretty text-sm leading-[1.7] text-primary-foreground/85">
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mb-4 mt-6.5 h-[1.5px] bg-accent" />
              <p className="text-pretty text-xs font-light leading-[1.75] text-sky/85">
                No obligation at any of those three steps. We would rather tell
                you early that we are not the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
