import { createFileRoute } from "@tanstack/react-router";
import { LegalArticle } from "@/components/LegalArticle";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/corrections")({
  component: CorrectionsPage,
  head: () =>
    pageHead({
      title: "Corrections | Avere Wealth",
      description: "How Avere corrects a wrong figure, a stale law, or a citation on this site.",
      path: "/corrections",
    }),
});

function CorrectionsPage() {
  return (
    <LegalArticle eyebrow="CORRECTIONS" title="Corrections">
      <p>
        If a page states a law, a threshold or a licence detail incorrectly, it gets corrected on the page and the reviewed date moves. We do not leave the wrong sentence up because it was ranking.
      </p>
      <p>
        Statistics need a publisher and a date. If the source cannot be found, the sentence comes out. Client numbers are published only with consent, a date, and a source for each figure. The four files on the proof pages are anonymised households from work delivered while the practice traded as Your Corner 360. Each file names the period. The figures are the start and end positions published for that file. They are not a forecast. The two walkthroughs on the same section are still teaching examples, with invented round numbers.
      </p>
      <p>
        This preview does not have a public inbox. Use the contact page to note what is wrong. When avere.au is the live site, corrections will go to the practice, and this paragraph will name that address.
      </p>
    </LegalArticle>
  );
}
