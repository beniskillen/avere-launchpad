import { Link, useRouterState } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-6 px-6 py-5 md:px-10">
        <Link to="/" className="flex items-baseline gap-4">
          <span
            className="font-display text-[26px] font-medium leading-none text-primary"
            style={{ letterSpacing: ".1em", paddingLeft: ".1em" }}
          >
            <span className="text-accent">A</span>VERE
          </span>
          <span
            className="text-[8px] font-semibold leading-none text-primary"
            style={{ letterSpacing: ".3em", paddingLeft: ".3em" }}
          >
            PRIVATE WEALTH
          </span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className="flex flex-col items-center gap-1.5"
              >
                <span
                  className="text-[10px] font-semibold leading-none text-primary"
                  style={{ letterSpacing: ".22em" }}
                >
                  {n.label}
                </span>
                <span
                  className={`h-1 w-1 rounded-full ${active ? "bg-accent" : "bg-transparent"}`}
                />
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="hidden rounded-sm bg-primary px-5 py-3.5 text-[10px] font-semibold leading-none text-primary-foreground transition-colors hover:bg-link md:inline-block"
            style={{ letterSpacing: ".22em" }}
          >
            BOOK A CONSULTATION
          </Link>
        </nav>
      </div>
    </header>
  );
}
