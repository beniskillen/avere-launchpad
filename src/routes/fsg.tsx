import { createFileRoute } from "@tanstack/react-router";
import { LegalArticle } from "@/components/LegalArticle";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/fsg")({
  component: FsgPage,
  head: () =>
    pageHead({
      title: "Financial Services Guide | Avere Wealth",
      description:
        "How Avere Private Wealth Pty Ltd (AFSL 525361) gives general information on this site, and when a Financial Services Guide is provided.",
      path: "/fsg",
    }),
});

function FsgPage() {
  return (
    <LegalArticle eyebrow="FSG" title="Financial Services Guide">
      <p>
        Avere Private Wealth Pty Ltd holds Australian Financial Services Licence 525361. This page explains how the website works. It is not the Financial Services Guide we give you before personal advice.
      </p>
      <h2 className="pt-4 font-display text-2xl font-medium text-primary">What this website is</h2>
      <p>
        Pages, calculators and articles are general information. They do not consider your objectives, financial situation or needs. They are not a recommendation to buy, sell, hold, refinance or set up an entity.
      </p>
      <h2 className="pt-4 font-display text-2xl font-medium text-primary">When personal advice starts</h2>
      <p>
        Personal advice starts only after we know your situation and after you have the Financial Services Guide for that advice. Applying for a Wealth Strategy Session is not, by itself, a request for personal advice, and submitting the form does not appoint us.
      </p>
      <h2 className="pt-4 font-display text-2xl font-medium text-primary">What you can be charged</h2>
      <p>
        The published entry for the written Mortgage Destroyer strategy is $995, refundable on the terms stated on that service page. Those terms are an identification of opportunities, not a promise of a return. Other work — accounting, broking execution, legal documents, a property search — is priced in writing before you commit. This page does not set those fees. We do not publish a commission schedule here.
      </p>
      <h2 className="pt-4 font-display text-2xl font-medium text-primary">Who else is in the room</h2>
      <p>
        Futurealty is the property arm. Growth Labs is the work with business owners on how the company grows. They are related practices. They are not a substitute for the licence, and a property or growth engagement is separate from personal financial advice.
      </p>
      <h2 className="pt-4 font-display text-2xl font-medium text-primary">If something goes wrong</h2>
      <p>
        Tell us first, through the contact page. If we cannot resolve it, you can go to the Australian Financial Complaints Authority at afca.org.au. We have not printed a member number on this staging site because that number belongs on the FSG you receive, not on a summary page.
      </p>
      <p>
        You can check the licence on the ASIC professional registers. We have not printed an adviser number here. The register is the source.
      </p>
    </LegalArticle>
  );
}
