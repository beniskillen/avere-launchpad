import { Link } from "@tanstack/react-router";

const siteLinks = [
  { to: "/", label: "Home" },
  { to: "/the-avere-method", label: "The Avere Method" },
  { to: "/services", label: "Services" },
  { to: "/learn", label: "Learn" },
  { to: "/tools", label: "Tools" },
  { to: "/proof", label: "Proof" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const work = [
  ["strategic-private-wealth", "Strategic Private Wealth"],
  ["mortgage-destroyer", "Mortgage Destroyer"],
  ["accounting-tax", "Accounting and tax"],
  ["trust-structures", "Trusts and structures"],
  ["property", "Property"],
  ["business-owners", "Business owners"],
] as const;

const legalLinks = [
  { to: "/fsg", label: "Financial Services Guide" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/advice-disclaimer", label: "Advice disclaimer" },
  { to: "/corrections", label: "Corrections" },
] as const;

export function SiteFooter({ bare = false }: { bare?: boolean }) {
  return (
    <footer className="bg-primary px-6 pb-24 pt-14 md:px-10 md:pb-8">
      <div className="mx-auto max-w-[1180px]">
        {bare ? null : (
          <div className="mb-10 flex flex-col justify-between gap-10 md:flex-row md:items-start">
            <div className="flex flex-col gap-3.5">
              <span
                className="font-display text-[34px] font-medium leading-none text-primary-foreground"
                style={{ letterSpacing: ".1em", paddingLeft: ".1em" }}
              >
                <span className="text-gold-light">A</span>VERE
              </span>
              <span className="font-display text-base font-medium leading-snug text-gold-light">
                Wealth, well lived.
              </span>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              <div>
                <p className="mb-4 text-[9px] font-semibold leading-none text-sky" style={{ letterSpacing: ".26em" }}>
                  SITE
                </p>
                <ul className="flex flex-col gap-2.5">
                  {siteLinks.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-[13px] text-primary-foreground/80 hover:text-primary-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 text-[9px] font-semibold leading-none text-sky" style={{ letterSpacing: ".26em" }}>
                  WORK
                </p>
                <ul className="flex flex-col gap-2.5">
                  {work.map(([slug, label]) => (
                    <li key={slug}>
                      <Link
                        to="/services/$slug"
                        params={{ slug }}
                        className="text-[13px] text-primary-foreground/80 hover:text-primary-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 text-[9px] font-semibold leading-none text-sky" style={{ letterSpacing: ".26em" }}>
                  LEGAL
                </p>
                <ul className="flex flex-col gap-2.5">
                  {legalLinks.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-[13px] text-primary-foreground/80 hover:text-primary-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="mb-4 h-[1.5px] w-full bg-accent" />
        <p className="text-[11px] font-light leading-[1.7] text-sky/80">
          Avere Private Wealth Pty Ltd · AFSL 525361 · www.avere.au
          <br />
          General information only. This website does not consider your objectives, financial situation or needs.
          Read the{" "}
          <Link to="/fsg" className="underline decoration-sky/40 underline-offset-2">
            Financial Services Guide
          </Link>{" "}
          and the{" "}
          <Link to="/advice-disclaimer" className="underline decoration-sky/40 underline-offset-2">
            advice disclaimer
          </Link>{" "}
          before acting. Past performance is not a guide to future performance. No page on this site promises a return.
        </p>
      </div>
    </footer>
  );
}

export function StickyApply() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Link
        to="/apply"
        className="block rounded-sm bg-primary py-3.5 text-center text-[10px] font-semibold leading-none text-primary-foreground"
        style={{ letterSpacing: ".16em" }}
      >
        APPLY FOR A SESSION
      </Link>
    </div>
  );
}
