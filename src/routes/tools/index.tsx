import { Link, createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";

const tools = [
  ["mortgage-destroyer-calculator", "Mortgage calculator", "Balance, rate, term, extra repayment. The interest if those inputs held still."],
  ["debt-to-wealth-blueprint", "Debt to Wealth Blueprint", "The earlier path, for people the session is not for yet."],
  ["wealth-potential-quiz", "Wealth Potential Quiz", "Six questions. Session or Blueprint. No score theatre."],
  ["rate-audit", "Rate audit", "What your current rate costs over the remaining term. Not a comparison rate from a billboard."],
  ["property-wealth-report", "Property scenarios", "Three forks for equity. The application decides whether we write them for you."],
] as const;

export const Route = createFileRoute("/tools/")({
  component: ToolsIndex,
  head: () =>
    pageHead({
      title: "Tools | Avere Wealth",
      description: "Calculators and the Wealth Potential Quiz. They explain the next step. They do not replace the application.",
      path: "/tools",
    }),
});

function ToolsIndex() {
  return (
    <main className="bg-background px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[800px]">
        <p className="eyebrow mb-4 text-link">TOOLS</p>
        <h1 className="font-display text-4xl font-medium text-primary">A number, then a next step.</h1>
        <p className="mt-4 text-base leading-[1.75] text-muted-foreground">
          These do not book Matt. The application does. If the quiz says Blueprint, that is the product you should use.
        </p>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {tools.map(([slug, title, body]) => (
            <li key={slug} className="py-5">
              <Link to="/tools/$slug" params={{ slug }} className="font-display text-2xl font-medium text-primary hover:text-link">
                {title}
              </Link>
              <p className="mt-1 text-sm leading-[1.6] text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
