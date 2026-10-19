import { createFileRoute } from "@tanstack/react-router";
import { DebtRecyclingIllustration } from "@/components/DebtRecyclingIllustration";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/tools/debt-recycling")({
  head: () =>
    pageHead({
      title: "Debt recycling illustration | Avere",
      description:
        "An illustration of debt recycling for one invented household, using a 10% income assumption and lower comparisons. General information. Not a forecast. AFSL 525361.",
      path: "/tools/debt-recycling",
    }),
  component: DebtRecyclingPage,
});

function DebtRecyclingPage() {
  return (
    <main>
      <DebtRecyclingIllustration />
    </main>
  );
}
