import { Link, useRouterState } from "@tanstack/react-router";

const nav = [
  { to: "/the-avere-method", label: "METHOD" },
  { to: "/services", label: "SERVICES" },
  { to: "/learn", label: "LEARN" },
  { to: "/about", label: "ABOUT" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

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
              const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
              return (
                <Link key={item.to} to={item.to} className="flex flex-col items-center gap-1.5">
                  <span className="text-[10px] font-semibold leading-none text-primary" style={{ letterSpacing: ".18em" }}>
                    {item.label}
                  </span>
                  <span className={`h-1 w-1 rounded-full ${active ? "bg-accent" : "bg-transparent"}`} />
                </Link>
              );
            })}
          </div>
          <Link
            to="/apply"
            className="rounded-sm bg-primary px-4 py-3 text-[10px] font-semibold leading-none text-primary-foreground transition-colors hover:bg-link md:px-5 md:py-3.5"
            style={{ letterSpacing: ".16em" }}
          >
            APPLY
          </Link>
          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none text-[10px] font-semibold tracking-[0.16em] text-primary">
              MENU
            </summary>
            <div className="absolute right-0 z-40 mt-3 flex w-48 flex-col gap-3 rounded-sm border border-border bg-card p-4 shadow-sm">
              {nav.map((item) => (
                <Link key={item.to} to={item.to} className="text-[12px] font-semibold tracking-[0.14em] text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
