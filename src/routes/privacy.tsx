import { createFileRoute } from "@tanstack/react-router";
import { LegalArticle } from "@/components/LegalArticle";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () =>
    pageHead({
      title: "Privacy | Avere Wealth",
      description: "What this Avere site stores, and what the staging application form does with your answers.",
      path: "/privacy",
    }),
});

function PrivacyPage() {
  return (
    <LegalArticle eyebrow="PRIVACY" title="Privacy">
      <p>
        On this preview the application form writes your answers into this browser’s session storage. They are not emailed, not posted to a server, and not written to a client database. Closing the tab can clear them. Do not use the form for information you would not want left in the browser.
      </p>
      <p>
        When the live site at avere.au is connected to a lead pipeline, the form will say so on the page, name who receives the answers, and link an updated version of this notice. Until that sentence appears on the form, assume nothing left the device.
      </p>
      <p>
        We do not ask for tax file numbers, identity documents or bank login details. If a page ever does, treat it as the wrong site.
      </p>
      <p>
        Calculators run in the browser. The numbers you type are used to draw the result on that page. They are not added to the application unless you also submit the application.
      </p>
      <p>
        If analytics are added later, the privacy notice will name the tool before the tag is loaded. This version of the site does not load a Meta pixel or Google Analytics.
      </p>
    </LegalArticle>
  );
}
