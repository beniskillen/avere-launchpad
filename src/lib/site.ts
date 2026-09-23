export const SITE_ORIGIN = "https://beniskillen.github.io";
export const SITE_BASE = "/avere-launchpad";
export const AFSL = "525361";
export const LEGAL_NAME = "Avere Private Wealth Pty Ltd";
export const REVIEWED = "2026-09-23";

export function sitePath(path: string) {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (path === "/") return base === "" ? "/" : `${base}/`;
  return `${base}${path}`;
}

export function absoluteUrl(path: string) {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  if (normalised === "/") return `${SITE_ORIGIN}${SITE_BASE}/`;
  return `${SITE_ORIGIN}${SITE_BASE}${normalised}`;
}

export function pageHead({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const principles = [
  {
    title: "Counted honestly",
    body: "We talk about what is actually there, not what it could be under a favourable assumption. Every number sourced, every assumption stated.",
  },
  {
    title: "Priced in writing",
    body: "What it costs, what it will not do, and what we do not know — before you commit to anything.",
  },
  {
    title: "Defined by you",
    body: "A paid-off home matters as much as a portfolio if that is what your family was working towards. Success is yours to define.",
  },
] as const;

export const homeFaqs = [
  {
    q: "What does the Wealth Strategy Session cost?",
    a: "The session is the application and the conversation. You are not billed for it. If there is work to do after that, the entry package is $995 and it is refundable. Anything beyond that package is priced in writing before you commit.",
  },
  {
    q: "Who holds the licence?",
    a: "Avere Private Wealth Pty Ltd, AFSL 525361. Personal advice is only given after we know your situation and after you have the Financial Services Guide. This website is general information.",
  },
  {
    q: "Who do I actually deal with?",
    a: "Matt Brown runs the session, the advice and the broking. Accounting, legal and property work sit with the people who do that work, on the same written page. You are not the person forwarding emails between them.",
  },
  {
    q: "What happens in the session?",
    a: "We start from your numbers: income, the loan, the rate, the structure, the tax. Then the date and the dollar figure you actually want. Then the gap, in your words. If we are the right people, Matt names the next piece of work. If we are not, he says so.",
  },
  {
    q: "What if I am not at $200k yet?",
    a: "Apply anyway if you want, and the form will send you to the Debt to Wealth Blueprint rather than a session. That is the earlier version of the same thinking. A session is for households over $200k, business owners, or people with more than $200k to invest.",
  },
  {
    q: "How is this different from my broker?",
    a: "A broker prices a loan. The session asks whether the loan should change at all, and what has to be true in the tax and the structure before anyone refinances. If your broker already does that with your accountant in the room, you may not need us.",
  },
] as const;

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Avere Private Wealth",
  legalName: LEGAL_NAME,
  url: absoluteUrl("/"),
  areaServed: "AU",
  identifier: `AFSL ${AFSL}`,
  description:
    "Strategic private wealth for Australian households and business owners. Advice, tax, lending and property on one written roadmap.",
};
