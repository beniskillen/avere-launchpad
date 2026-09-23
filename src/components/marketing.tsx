import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { principles } from "@/lib/site";

const buttonClass =
  "inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3.5 text-center text-[10px] font-semibold leading-none text-primary-foreground transition-colors hover:bg-link";
const buttonStyle = { letterSpacing: ".18em" } as const;

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-4 text-link">{children}</p>;
}

export function ApplyLink({
  children = "Apply for a Wealth Strategy Session",
  className = "",
  light = false,
}: {
  children?: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      to="/apply"
      className={`${buttonClass} ${light ? "bg-primary-foreground text-primary hover:bg-sky" : ""} ${className}`}
      style={buttonStyle}
    >
      {children}
    </Link>
  );
}

export function TextLink({
  to,
  children,
}: {
  to: "/apply" | "/the-avere-method" | "/services/mortgage-destroyer" | "/tools/wealth-potential-quiz" | "/learn" | "/about";
  children: ReactNode;
}) {
  return (
    <Link to={to} className="font-medium text-link underline decoration-link/30 underline-offset-4">
      {children}
    </Link>
  );
}

export function Hero({
  eyebrow,
  title,
  lede,
  children,
  dark = true,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-primary px-6 pb-20 pt-16 md:px-10 md:pt-24" : "bg-background px-6 pb-12 pt-16 md:px-10"}>
      <div className="mx-auto max-w-[1180px]">
        <p
          className={`mb-6 text-[10px] font-semibold leading-none ${dark ? "text-sky" : "text-link"}`}
          style={{ letterSpacing: ".28em" }}
        >
          {eyebrow}
        </p>
        <h1
          className={`max-w-[920px] text-pretty font-display text-[clamp(34px,6vw,58px)] font-medium leading-[1.12] ${dark ? "text-primary-foreground" : "text-primary"}`}
        >
          {title}
        </h1>
        {lede ? (
          <p
            className={`mt-6 max-w-[680px] text-pretty text-lg leading-[1.7] ${dark ? "text-primary-foreground/80" : "text-muted-foreground"}`}
          >
            {lede}
          </p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div> : null}
      </div>
    </section>
  );
}

export function Band({
  eyebrow,
  title,
  children,
  tone = "paper",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  tone?: "paper" | "card" | "mist";
}) {
  const bg = tone === "card" ? "bg-card" : tone === "mist" ? "bg-secondary" : "bg-background";
  return (
    <section className={`${bg} px-6 py-16 md:px-10 md:py-20`}>
      <div className="mx-auto grid max-w-[1180px] items-start gap-8 md:grid-cols-[240px_1fr] md:gap-16">
        <div>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          {title ? (
            <h2 className="text-pretty font-display text-[32px] font-medium leading-[1.2] text-primary">{title}</h2>
          ) : null}
        </div>
        <div className="max-w-[720px] space-y-4 text-pretty text-base leading-[1.75] text-muted-foreground">{children}</div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-[720px] space-y-4 text-pretty text-base leading-[1.75] text-muted-foreground">{children}</div>;
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <article key={item.q} className="py-6">
          <h3 className="mb-2 font-display text-[22px] font-medium leading-snug text-primary">{item.q}</h3>
          <p className="text-pretty text-[15px] leading-[1.75] text-muted-foreground">{item.a}</p>
        </article>
      ))}
    </div>
  );
}

export function PrincipleGrid() {
  return (
    <div className="grid overflow-hidden rounded-md border border-border bg-card md:grid-cols-3">
      {principles.map((item, index) => (
        <div
          key={item.title}
          className={`p-8 ${index < 2 ? "border-b border-border md:border-b-0 md:border-r" : ""}`}
        >
          <h3 className="mb-3 font-display text-xl font-medium leading-snug text-primary">{item.title}</h3>
          <p className="text-pretty text-sm leading-[1.75] text-muted-foreground">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export function FinalCta({
  title = "Apply if the numbers are real.",
  body = "Households over $200k, business owners, and people with equity in the house. If that is not you yet, the form sends you to the Blueprint instead of a session.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-primary px-6 py-16 md:px-10">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="mb-3 max-w-[640px] text-pretty font-display text-[32px] font-medium leading-[1.25] text-primary-foreground">
            {title}
          </h2>
          <p className="max-w-[540px] text-pretty text-base leading-[1.7] text-primary-foreground/80">{body}</p>
        </div>
        <ApplyLink light className="self-start" />
      </div>
    </section>
  );
}

export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-[12px] text-subtle">
      <ol className="flex flex-wrap gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.to ? (
              <Link to={item.to as "/"} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function GeneralInfoLine() {
  return (
    <p className="text-pretty text-sm leading-[1.7] text-subtle">
      General information only. It does not consider your objectives, financial situation or needs. Read the{" "}
      <Link to="/advice-disclaimer" className="underline decoration-border underline-offset-4">
        advice disclaimer
      </Link>{" "}
      before you act on any of it.
    </p>
  );
}
