export type Campaign = {
  slug: string;
  eyebrow: string;
  h1: string;
  lede: string;
  description: string;
  problem: string[];
  mechanism: string;
  offer: string[];
  mode: "apply" | "register";
};

export const campaigns: Campaign[] = [
  {
    slug: "mortgage-destroyer",
    eyebrow: "For homeowners with household income over $200k",
    h1: "Your 30-year mortgage is optional.",
    lede: "The term on the contract is a default. The session puts your balance, your rate and your structure on one page, and says what to do first.",
    description: "Apply for a Wealth Strategy Session. The Mortgage Destroyer is the $995 refundable entry for equity-rich Australian homeowners.",
    problem: [
      "You can name the rate. You probably cannot name the interest you will pay if the loan runs to term, or whether the trust should exist before anyone refinances.",
      "Friends who 'just bought an investment' are not a plan. Neither is a broker who has not spoken to the accountant.",
    ],
    mechanism:
      "The Mortgage Destroyer writes the sequence: tax, structure, debt, then an asset only if the first three can hold it. Sometimes the honest page says leave the loan alone.",
    offer: [
      "$995, refundable, for the written strategy",
      "If we cannot identify at least $50,000 of opportunities over a 10-year view, the strategy fee comes back",
      "That is an identification promise, not a return",
      "Personal advice only after the Financial Services Guide, and only if we are the right fit",
    ],
    mode: "apply",
  },
  {
    slug: "lazy-equity",
    eyebrow: "Same households. The equity is the part nobody has given a job.",
    h1: "The equity in the house is not a plan.",
    lede: "It sits in the walls, rising and falling with the street, and it does not pay tax, reduce the loan, or buy anything until someone writes down what it is for.",
    description: "A Wealth Strategy Session for Australian homeowners whose equity has never been put into a written sequence.",
    problem: [
      "Redraw and offset are useful. They are not a strategy. A balance in the offset reduces interest. It does not decide whether you should recycle debt, pay the loan down, or buy.",
      "The expensive version is releasing equity into a purchase the structure cannot hold.",
    ],
    mechanism:
      "We start with the equity you can actually touch without putting the house in a corner, then the tax and the entity, then the loan. The asset is last.",
    offer: [
      "Same application, same $995 refundable package if you proceed",
      "Below $100k of investable assets, or no home and no business, you get the Blueprint instead of a session",
      "No return is promised on this page",
    ],
    mode: "apply",
  },
  {
    slug: "masterclass",
    eyebrow: "60 minutes. The Mortgage Destroyer, walked through.",
    h1: "How the home loan gets rewritten, in one sitting.",
    lede: "A working session on the sequence we use with clients: the loan, the tax, the structure, and the point where buying is a bad idea.",
    description: "Register for the next Mortgage Destroyer session. General information. The application comes after, not during.",
    problem: [
      "Most mortgage content is a rate table. The decision that costs money is the order: refinance before the trust, or the trust before the refinance.",
    ],
    mechanism:
      "Matt walks the sequence with round numbers and says where a real file would stop. It is general information. Your file starts with the application afterwards.",
    offer: [
      "Registration is free",
      "We send the time when the next session is actually scheduled",
      "The application, not the webinar, is what books a Wealth Strategy Session",
    ],
    mode: "register",
  },
  {
    slug: "business-owner-wealth",
    eyebrow: "For owners with profit to structure",
    h1: "Your business makes the money. Structure decides what you keep.",
    lede: "The company, the trust, the wage you pay yourself and the house you live in are one cash-flow problem. They are usually four different advisers.",
    description: "A Wealth Strategy Session for Australian business owners. Entity, tax, and the home loan, on one page.",
    problem: [
      "Profit parks in the company because that was easy in year three. The house is in a personal name because the bank preferred it. The wage is whatever was left in March.",
    ],
    mechanism:
      "The session reads how money leaves the business, what the deed allows, and whether the home loan belongs in the same plan. Growth Labs does the operating work of the business when that is a separate job, and we say so before anyone invoices it.",
    offer: [
      "Same application bar as the rest of the site",
      "Entity work priced in writing before a deed is touched",
      "The $995 package if the mortgage is part of the file",
    ],
    mode: "apply",
  },
  {
    slug: "property-report",
    eyebrow: "For people who already have equity and want it written down",
    h1: "Three scenarios for the equity. Then a decision.",
    lede: "Leave it in the house. Pay the loan down faster. Or deploy some of it, through a structure that can hold the asset. You should see all three before you see a suburb.",
    description: "Apply and we will tell you whether the next step is a Wealth Strategy Session or the Blueprint. Property comes after the page is written.",
    problem: [
      "A property report that starts with listings is a brochure. The useful version starts with the loan balance, the rate, and the name that would be on the contract.",
    ],
    mechanism:
      "If you clear the same bar as every other application, the three scenarios are prepared for the session. If you do not, you get the Blueprint, which teaches the same fork without pretending we have modelled your file.",
    offer: [
      "No search fee until a brief exists",
      "Futurealty buys only when the roadmap says buy",
      "Past suburb growth is not a promise",
    ],
    mode: "apply",
  },
];

export function getCampaign(slug: string) {
  return campaigns.find((campaign) => campaign.slug === slug);
}
