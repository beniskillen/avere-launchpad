import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "SITE",
    links: [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { to: "/", label: "Strategic Private Wealth" },
      { to: "/about", label: "About the practice" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-primary px-6 pb-8 pt-14 md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="flex flex-col gap-3.5">
            <span
              className="font-display text-[34px] font-medium leading-none text-primary-foreground"
              style={{ letterSpacing: ".1em", paddingLeft: ".1em" }}
            >
              <span className="text-gold-light">A</span>VERE
            </span>
            <span
              className="text-[9px] font-semibold leading-none text-sky"
              style={{ letterSpacing: ".3em", paddingLeft: ".3em" }}
            >
              PRIVATE WEALTH
            </span>
            <span className="mt-2.5 font-display text-base font-medium leading-snug text-gold-light">
              Wealth, well lived.
            </span>
          </div>

          <div className="flex gap-16">
            {columns.map((c) => (
              <div key={c.title}>
                <p
                  className="mb-4 text-[9px] font-semibold leading-none text-sky"
                  style={{ letterSpacing: ".26em" }}
                >
                  {c.title}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {c.links.map((l, i) => (
                    <li key={i}>
                      <Link
                        to={l.to}
                        className="text-[13px] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 h-[1.5px] w-full bg-accent" />
        <p
          className="text-[9px] font-light uppercase leading-[1.9] text-sky/60"
          style={{ letterSpacing: ".05em" }}
        >
          Avere Private Wealth Pty Ltd · AFSL 525361 · www.avere.au
          <br />
          General advice only. This website does not consider your objectives,
          financial situation or needs. Consider whether it is appropriate for
          you and read our Financial Services Guide before acting. Past
          performance is not a guide to future performance.
        </p>
      </div>
    </footer>
  );
}
