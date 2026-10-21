import { Link, useRouterState } from "@tanstack/react-router";

const nav = [
  { href: "/#private-wealth", label: "Private Wealth" },
  { href: "/#finance", label: "Finance" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
] as const;

const legal = [
  { to: "/fsg", label: "Financial Services Guide" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/advice-disclaimer", label: "Advice disclaimer" },
  { to: "/complaints", label: "Complaints" },
  { to: "/corrections", label: "Corrections" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const legalActive = legal.some((item) => pathname === item.to);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link to="/" className="flex items-baseline gap-3">
          <span
            className="font-display text-[22px] font-medium leading-none text-primary md:text-[26px]"
            style={{ letterSpacing: ".1em", paddingLeft: ".1em" }}
          >
            <span className="text-accent">A</span>VERE
          </span>
          <span
            className="hidden text-[8px] font-semibold leading-none text-primary sm:inline"
            style={{ letterSpacing: ".28em", paddingLeft: ".28em" }}
          >
            PRIVATE WEALTH
          </span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6">
          <div className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => {
              const active = item.href === "/contact" && (pathname === "/contact" || pathname.startsWith("/contact/"));
              return (
                <a key={item.label} href={item.href} className="flex flex-col items-center gap-1.5">
                  <span className="text-[11px] font-semibold leading-none text-primary">{item.label}</span>
                  <span className={`h-1 w-1 rounded-full ${active ? "bg-accent" : "bg-transparent"}`} />
                </a>
              );
            })}
            <details className="group relative">
              <summary className="flex cursor-pointer list-none flex-col items-center gap-1.5">
                <span className="text-[11px] font-semibold leading-none text-primary">Legal</span>
                <span className={`h-1 w-1 rounded-full ${legalActive ? "bg-accent" : "bg-transparent"}`} />
              </summary>
              <div className="absolute right-0 z-40 mt-3 flex w-64 flex-col gap-3 rounded-sm border border-border bg-card p-4 shadow-sm">
                {legal.map((item) => (
                  <Link key={item.to} to={item.to} className="text-sm text-primary hover:text-link">
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none text-[11px] font-semibold text-primary">Menu</summary>
            <div className="absolute right-0 z-40 mt-3 flex w-64 flex-col gap-3 rounded-sm border border-border bg-card p-4 shadow-sm">
              {nav.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-semibold text-primary">
                  {item.label}
                </a>
              ))}
              <p className="pt-2 text-[10px] font-semibold tracking-[0.16em] text-subtle">LEGAL</p>
              {legal.map((item) => (
                <Link key={item.to} to={item.to} className="text-sm text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <Link
            to="/payoff"
            className="hidden min-h-10 items-center rounded-sm bg-primary px-4 text-[11px] font-semibold text-primary-foreground hover:bg-link sm:inline-flex"
          >
            Start with the case study
          </Link>
        </nav>
      </div>
    </header>
  );
}
