import { createFileRoute } from "@tanstack/react-router";
import { WealthHome } from "@/components/WealthHome";
import { JsonLd } from "@/components/JsonLd";
import { organisationSchema, pageHead } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead({
      title: "Avere | Private wealth and finance, on one roadmap",
      description:
        "Advice and lending planned together for Australian businesses and professional families. The first step is the home-loan case study. General information. AFSL 525361.",
      path: "/",
    }),
});

function Home() {
  return (
    <main>
      <JsonLd data={organisationSchema} />
      <WealthHome />
    </main>
  );
}
