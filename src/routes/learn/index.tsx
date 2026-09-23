import { Link, createFileRoute } from "@tanstack/react-router";
import { learnHubs, learnPieces, piecesForHub } from "@/content/learn";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/learn/")({
  component: LearnIndex,
  head: () =>
    pageHead({
      title: "Learn | Avere Wealth",
      description:
        "Notes on mortgages, tax, trusts, property and the sophisticated investor rules. General information for Australian households. AFSL 525361.",
      path: "/learn",
    }),
});

function LearnIndex() {
  return (
    <main className="bg-background px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-[900px]">
        <p className="eyebrow mb-4 text-link">LEARN</p>
        <h1 className="font-display text-[clamp(36px,5vw,52px)] font-medium leading-tight text-primary">
          The mechanisms, without a product attached.
        </h1>
        <p className="mt-5 max-w-[680px] text-base leading-[1.75] text-muted-foreground">
          Five hubs. The spokes under them are the questions people actually type. Every page is general information, reviewed 23 September 2026. If a line is wrong, the corrections page says what we do about it. We do not publish a statistic we cannot name.
        </p>
        <div className="mt-12 space-y-10">
          {learnHubs.map((hub) => (
            <section key={hub.slug}>
              <h2 className="font-display text-2xl font-medium text-primary">
                <Link to="/learn/$slug" params={{ slug: hub.slug }} className="hover:text-link">
                  {hub.title}
                </Link>
              </h2>
              <ul className="mt-3 space-y-2">
                {piecesForHub(hub.slug).map((article) => (
                  <li key={article.slug}>
                    <Link to="/learn/$slug" params={{ slug: article.slug }} className="text-[15px] text-link underline decoration-link/30 underline-offset-4">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm text-subtle">{learnPieces.length} pages in this library.</p>
      </div>
    </main>
  );
}
