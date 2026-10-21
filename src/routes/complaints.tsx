import { Link, createFileRoute } from "@tanstack/react-router";
import { LegalArticle } from "@/components/LegalArticle";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/complaints")({
  component: ComplaintsPage,
  head: () =>
    pageHead({
      title: "Complaints | Avere Wealth",
      description: "How to raise a complaint about this site. Credit-representative wording is not copied across from Your Corner.",
      path: "/complaints",
    }),
});

function ComplaintsPage() {
  return (
    <LegalArticle eyebrow="COMPLAINTS" title="Complaints">
      <p>
        Tell us first, through the{" "}
        <Link to="/contact" className="text-link underline decoration-link/30 underline-offset-4">
          contact page
        </Link>
        . On this preview that page does not send email, so a complaint left in the application stays in the browser until a pipeline is connected. Say so in the "why now" box.
      </p>
      <p>
        If we cannot resolve it, you can go to the Australian Financial Complaints Authority at afca.org.au. We have not printed a member number here. That number belongs on the Financial Services Guide you receive, not on this summary.
      </p>
      <p>
        Credit assistance, if it is offered, sits under a separate authorisation from AFSL 525361. The credit-representative line on the current Your Corner site has not been copied onto Avere. Compliance confirms the entity, the number and the legal name before this page is treated as the published complaints process.
      </p>
      <p>
        This website is general information. It does not consider your objectives, financial situation or needs.
      </p>
    </LegalArticle>
  );
}
