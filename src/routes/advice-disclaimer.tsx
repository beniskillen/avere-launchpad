import { createFileRoute } from "@tanstack/react-router";
import { LegalArticle } from "@/components/LegalArticle";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/advice-disclaimer")({
  component: DisclaimerPage,
  head: () =>
    pageHead({
      title: "Advice disclaimer | Avere Wealth",
      description: "General information only under RG 244. No return promises. AFSL 525361.",
      path: "/advice-disclaimer",
    }),
});

function DisclaimerPage() {
  return (
    <LegalArticle eyebrow="GENERAL INFORMATION" title="Advice disclaimer">
      <p>
        The information on this website is general information only. It has been prepared without taking into account your objectives, financial situation or needs. Before acting on it, consider whether it is appropriate for you, and consider the Financial Services Guide and any relevant product disclosure document.
      </p>
      <p>
        Avere Private Wealth Pty Ltd (AFSL 525361) does not promise a rate of return, a tax outcome, or a property result on any page. The only guarantees named on the site are service guarantees, with terms on the page that offers them. Identifying a possible saving is not the same thing as the saving occurring.
      </p>
      <p>
        Tax and superannuation rules change. A blog post dated 23 September 2026 can be wrong a quarter later. The reviewed date is on the page so you can see how old the words are.
      </p>
      <p>
        Lending is subject to the lender’s credit assessment. Nothing here is an approval. Property commentary is not a recommendation to buy a specific asset.
      </p>
    </LegalArticle>
  );
}
