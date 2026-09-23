import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { getLearnPiece, learnHubs, piecesForHub } from "@/content/learn";
import { GeneralInfoLine } from "@/components/marketing";
import { JsonLd } from "@/components/JsonLd";
import { REVIEWED, absoluteUrl, breadcrumbSchema, pageHead, sitePath } from "@/lib/site";

export const Route = createFileRoute("/learn/$slug")({
  loader: ({ params }) => {
    const piece = getLearnPiece(params.slug);
    if (!piece) throw notFound();
    return piece;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: `${loaderData.title} | Avere`,
      description: loaderData.description,
      path: `/learn/${loaderData.slug}`,
    }),
  component: LearnPiecePage,
});

function LearnPiecePage() {
  const piece = Route.useLoaderData();
  const hub = learnHubs.find((item) => item.slug === piece.hub);
  const siblings = piecesForHub(piece.hub)
    .filter((item) => item.slug !== piece.slug)
    .slice(0, 2);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: piece.title,
    description: piece.description,
    datePublished: REVIEWED,
    dateModified: REVIEWED,
    author: { "@type": "Person", name: "Matt Brown" },
    publisher: { "@type": "Organization", name: "Avere Private Wealth", url: absoluteUrl("/") },
    mainEntityOfPage: absoluteUrl(`/learn/${piece.slug}`),
  };

  return (
    <main className="bg-background px-6 py-14 md:px-10">
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Learn", path: "/learn" },
          ...(hub && hub.slug !== piece.slug ? [{ name: hub.title, path: `/learn/${hub.slug}` }] : []),
          { name: piece.title, path: `/learn/${piece.slug}` },
        ])}
      />
      <article className="mx-auto max-w-[740px]">
        <p className="mb-4 text-[12px] text-subtle">
          <Link to="/learn" className="text-link underline decoration-link/30 underline-offset-4">
            Learn
          </Link>
          {hub && hub.slug !== piece.slug ? (
            <>
              {" / "}
              <Link to="/learn/$slug" params={{ slug: hub.slug }} className="text-link underline decoration-link/30 underline-offset-4">
                {hub.title}
              </Link>
            </>
          ) : null}
        </p>
        <h1 className="font-display text-[clamp(32px,5vw,46px)] font-medium leading-tight text-primary">{piece.title}</h1>
        <p className="mt-4 text-sm text-subtle">
          Matt Brown · reviewed 23 September 2026 · general information · AFSL 525361
        </p>
        <div className="mt-8 space-y-8">
          {piece.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 font-display text-2xl font-medium text-primary">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-3 text-pretty text-base leading-[1.8] text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
        {piece.kind === "hub" ? (
          <ul className="mt-10 space-y-2 border-t border-border pt-6">
            {piecesForHub(piece.slug).map((article) => (
              <li key={article.slug}>
                <Link to="/learn/$slug" params={{ slug: article.slug }} className="text-link underline decoration-link/30 underline-offset-4">
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-10 space-y-2 border-t border-border pt-6">
            {hub ? (
              <li>
                <Link to="/learn/$slug" params={{ slug: hub.slug }} className="text-link underline decoration-link/30 underline-offset-4">
                  {hub.title}
                </Link>
              </li>
            ) : null}
            {siblings.map((article) => (
              <li key={article.slug}>
                <Link to="/learn/$slug" params={{ slug: article.slug }} className="text-link underline decoration-link/30 underline-offset-4">
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8 space-y-4">
          <GeneralInfoLine />
          <div className="flex flex-wrap gap-3">
            <a href={sitePath(piece.cta.href)} className="inline-block rounded-sm bg-primary px-5 py-3.5 text-[10px] font-semibold tracking-[0.16em] text-primary-foreground">
              {piece.cta.label}
            </a>
            {piece.cta.href !== "/apply" ? (
              <Link to="/apply" className="inline-block rounded-sm border border-border px-5 py-3.5 text-[10px] font-semibold tracking-[0.16em] text-primary">
                APPLY FOR A SESSION
              </Link>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
