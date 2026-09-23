import { createFileRoute } from "@tanstack/react-router";
import { LegalArticle } from "@/components/LegalArticle";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () =>
    pageHead({
      title: "Terms | Avere Wealth",
      description: "Terms for using the Avere website. General information, no engagement until it is agreed in writing.",
      path: "/terms",
    }),
});

function TermsPage() {
  return (
    <LegalArticle eyebrow="TERMS" title="Terms of use">
      <p>
        This site is published by Avere Private Wealth Pty Ltd (AFSL 525361) for people in Australia. Using it does not create a client relationship. An engagement starts when the scope and the fee are agreed in writing.
      </p>
      <p>
        Calculators are arithmetic on the inputs you type. They ignore fees, offset behaviour, assessment rates and tax unless the page says otherwise. They are not a quote and not a credit offer.
      </p>
      <p>
        Teaching examples use round numbers. They are labelled as such. They are not client results. Do not treat them as a forecast of what your file will do.
      </p>
      <p>
        You may link to public pages. You may not copy the site and present it as your own advice. Campaign pages under /lp are for the person who was sent there. They are not an invitation to the general public to rely on them.
      </p>
    </LegalArticle>
  );
}
