import { Link, createFileRoute } from "@tanstack/react-router";
import { campaigns } from "@/content/campaigns";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/lp/")({
  component: LpIndex,
  head: () =>
    pageHead({
      title: "Campaign pages | Avere",
      description: "Unlisted landing pages. Not for search.",
      path: "/lp",
      noindex: true,
    }),
});

function LpIndex() {
  return (
    <main className="bg-background px-6 py-16">
      <div className="mx-auto max-w-[640px]">
        <h1 className="font-display text-3xl font-medium text-primary">Campaign pages</h1>
        <ul className="mt-6 space-y-3">
          {campaigns.map((campaign) => (
            <li key={campaign.slug}>
              <Link to="/lp/$slug" params={{ slug: campaign.slug }} className="text-link underline decoration-link/30 underline-offset-4">
                {campaign.h1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
