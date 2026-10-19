import { createFileRoute } from "@tanstack/react-router";
import { MortgageDestroyerPage } from "@/components/MortgageDestroyerPage";
import { JsonLd } from "@/components/JsonLd";
import { organisationSchema, pageHead } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead({
      title: "Avere Private Wealth | Pay the home loan down sooner",
      description:
        "Debt recycling for everyday Australians who want the home loan paid down sooner, with the risk kept as small as the household can bear. General information. AFSL 525361.",
      path: "/",
    }),
});

function Home() {
  return (
    <main>
      <JsonLd data={organisationSchema} />
      <MortgageDestroyerPage home />
    </main>
  );
}
