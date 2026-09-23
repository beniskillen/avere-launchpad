export type ServicePage = {
  slug: string;
  label: string;
  h1: string;
  hook: string;
  description: string;
  who: string;
  problem: string[];
  mechanism: string[];
  included: string[];
  price: string;
  faqs: { q: string; a: string }[];
};

export const services: ServicePage[] = [
  {
    slug: "strategic-private-wealth",
    label: "Strategic Private Wealth",
    h1: "Strategic Private Wealth",
    hook: "One roadmap. One team accountable for it.",
    description:
      "Ongoing private wealth for Australian households and business owners. One written roadmap across tax, debt, structure and assets. AFSL 525361.",
    who: "Households and owners who already have a mortgage, a tax bill and more than one adviser, and who are tired of being the person who joins the dots.",
    problem: [
      "The accountant closes the return. The broker prices a loan. The property person sends a suburb report. Each document is fine on its own. None of them says what happens first.",
      "That gap is where equity sits still, where a trust gets set up after the contract, and where you pay for advice you then have to implement yourself.",
    ],
    mechanism: [
      "Strategic Private Wealth is the relationship after the Mortgage Destroyer, or instead of it if the debt is not the first problem. You get a written roadmap: cash flow and structure, superannuation, tax, portfolio construction, risk protection, wealth transfer, reporting, and a review while the year is still usable.",
      "The same page is what accounting, broking and, when it is relevant, property work from. You stop forwarding emails.",
    ],
    included: [
      "A written roadmap with the order of work, the cost, and what it will not do",
      "Objectives you can check, not a slide of intentions",
      "A 90-day check-in and an annual review",
      "Coordination with the accountant and the broker you already use, if you want to keep them",
    ],
    price:
      "The ongoing work is priced in writing before you commit. The $995 Mortgage Destroyer package is a separate entry, and it is refundable. We do not quote a retainer on this page because the number depends on the entities and the debt, and a guessed number would be the opposite of how we work.",
    faqs: [
      {
        q: "Is this a managed fund?",
        a: "No. It is advice and coordination. If an investment is part of the roadmap, it is named, and you can say no.",
      },
      {
        q: "Do I have to leave my accountant?",
        a: "No. If they will work off the same page, keep them. If the tax return never sees the loan, that is the conversation.",
      },
    ],
  },
  {
    slug: "mortgage-destroyer",
    label: "Mortgage Destroyer",
    h1: "The Mortgage Destroyer",
    hook: "Your 30-year mortgage is a contract term. It is not a fact about your cash flow.",
    description:
      "The Mortgage Destroyer is Avere's $995 refundable entry. A written plan for the home loan, the tax and the structure, before anyone refinances. AFSL 525361.",
    who: "Homeowners with household income over $200k, or business owners, who have equity in the house and a loan that has been left on the original term.",
    problem: [
      "Most of the people we sit with can tell you the rate. Fewer can tell you the interest they will pay if nothing changes, or whether the loan should be touched before the trust and the tax are sorted.",
      "A cheaper rate on the wrong structure is still the wrong structure. A refinance that happens before anyone reads the trust deed is how people buy the asset in the wrong name.",
    ],
    mechanism: [
      "The package is a written strategy, not a rate shop. We put the loan, the rate, the equity, the tax and the structure on one page, in that order only if that order is right for you. Sometimes the first move is to leave the loan alone.",
      "If there is a case to restructure, the broking work comes after the page is written. Property, if you want it, comes after the structure can hold it. That sequence is the Integrated Alpha Loop: tax, structure, debt, then the asset.",
    ],
    included: [
      "Your position in numbers: income, balance, rate, equity, structure, tax",
      "The gap between that position and the date you named",
      "A written sequence, including what not to do yet",
      "The cost of the next step, and what that step will not do",
      "90-day objectives if you go ahead",
      "The refund terms, in writing, before you pay",
    ],
    price:
      "$995, refundable. The fee is for the written strategy. It is not a broker commission and it is not an accounting retainer. If the report cannot identify at least $50,000 of savings and wealth-acceleration opportunities over a 10-year view, the strategy fee is refunded. Identifying an opportunity is not a promise that the opportunity will happen. Interest rates, tax law and property prices move. The other guarantees in the pod belong to other engagements: the accounting fee is a separate promise about the first tax return, and the buyers-agency search is a separate promise about a later purchase.",
    faqs: [
      {
        q: "Is the $995 the cost of the new loan?",
        a: "No. Lenders pay brokers. The $995 is for the written strategy. If you later refinance, that is a separate piece of work and it is priced before you sign.",
      },
      {
        q: "What does refundable mean?",
        a: "You get the terms before you pay. The identification guarantee is specific: if we cannot show at least $50,000 of opportunities over a 10-year view, the strategy fee comes back. It is not a promise of investment returns.",
      },
      {
        q: "Will you tell me to buy a property?",
        a: "Only if the cash flow, the structure and the loan can hold one. Plenty of sessions end with 'pay the loan, do not buy yet.'",
      },
      {
        q: "I already have a broker.",
        a: "Good. Bring them the page. If they can execute it with your accountant, you may not need our broking at all.",
      },
    ],
  },
  {
    slug: "accounting-tax",
    label: "Accounting and tax",
    h1: "Accounting that talks to your mortgage",
    hook: "Tax is the first lever. A return that never sees the loan is only half the job.",
    description:
      "Tax and accounting for Australian households and business owners, done on the same page as the mortgage and the structure. AFSL 525361.",
    who: "People whose tax is a once-a-year tidy-up, while the loan and the company run on a different calendar.",
    problem: [
      "A clean tax return can still be the wrong tax outcome. The accountant never saw the offset account, the Division 7A balance, or the fact that you are about to buy in your own name.",
      "High household income makes the order matter. Super, the company, the trust and the deductible debt only work if someone writes the sequence before 30 June, not after.",
    ],
    mechanism: [
      "Accounting at Avere sits inside the roadmap. The person doing the tax can see the loan and the structure. The person doing the loan can see the tax. That is the whole point of the pod.",
      "If your current accountant will work that way, we would rather keep them. If they will not, the engagement moves.",
    ],
    included: [
      "Tax position read against the loan and the entities, not against last year's return alone",
      "A written list of what to do before the next lodgement, and what to leave",
      "Coordination with the strategy page",
      "Pricing before you sign",
    ],
    price:
      "The accounting engagement is priced in writing before you commit. If we do not save you more than that annual fee in the first return we lodge, we refund the difference. That promise belongs to the accounting work, not to the $995 strategy package.",
    faqs: [
      {
        q: "Do you replace my accountant immediately?",
        a: "Only if the current accountant cannot or will not work off the same page as the loan. We ask that before we ask you to move.",
      },
      {
        q: "Can you promise a lower tax bill?",
        a: "No. We can show the legal levers that apply to your structure. The guarantee is about the fee versus the savings we actually find in that first return, and the terms are written before you sign.",
      },
    ],
  },
  {
    slug: "trust-structures",
    label: "Trusts and structures",
    h1: "Structures that protect what you are building",
    hook: "Set the structure up before the contract. After settlement, you are mostly choosing among expensive fixes.",
    description:
      "Trusts and entity structures for Australian business owners and property buyers. Protection, distribution and succession, set up before the purchase. AFSL 525361.",
    who: "Owners with profit sitting in a company, and households about to buy an asset in a personal name because that was the fastest way to exchange.",
    problem: [
      "A discretionary trust is not a tax trick and it is not automatic asset protection. The deed, the appointor, the state you buy in, and the land tax rules decide whether it was worth doing.",
      "People set one up because a friend did. Then the deed cannot hold the property, or the distribution lands on the person who already pays the top rate.",
    ],
    mechanism: [
      "We write the structure against the thing you are about to do: hold a business, buy a property, or both. Legal work is done by the lawyers. Our job is to make sure the loan, the tax and the deed describe the same asset.",
      "If you already have a trust, the first job is to read the deed, not to order a new one.",
    ],
    included: [
      "A plain-language read of what the current structure can and cannot hold",
      "The sequence: deed, then finance, then purchase",
      "What the structure will not protect you from",
      "A written fee before any legal work starts",
    ],
    price:
      "Trust work is priced in writing before anyone drafts a deed. Setup and the annual administration are separate numbers. We do not publish a flat fee here because the deed, the state and the existing entities change the job.",
    faqs: [
      {
        q: "Should every investment property be in a trust?",
        a: "No. Land tax, stamp duty and the loan can make a personal name, or a different entity, the cleaner hold. The page should say which, and why.",
      },
      {
        q: "Is this legal advice?",
        a: "The website is not. The deed is drafted by lawyers. We coordinate that work with the tax and the loan so you do not buy first and repair later.",
      },
    ],
  },
  {
    slug: "property",
    label: "Property",
    h1: "Property, bought properly",
    hook: "The asset is the last step. The structure and the debt come first.",
    description:
      "Futurealty buys property for Avere clients who are ready: data first, the right entity, and a search that starts only after the loan and the structure can hold it.",
    who: "Clients who have equity, serviceability and a structure that can actually hold the asset. Not a first conversation for someone who has not looked at the loan.",
    problem: [
      "A buyers agent who starts with suburbs, before anyone has read the trust deed or the borrowing capacity, is how people fall in love with a property they cannot hold properly.",
      "Off-market access is not a personality. It is a search brief, a fee, and a reason that particular asset fits the page you already wrote.",
    ],
    mechanism: [
      "Futurealty is the property arm. The search starts when the Mortgage Destroyer page, or the broader roadmap, says an acquisition is the next move. High-performing is a research claim we have to show you, not a slogan.",
      "You see the brief, the fee and what the search will not do before anyone spends a weekend at opens.",
    ],
    included: [
      "A search brief tied to the written roadmap",
      "The entity that will own the asset, decided before the offer",
      "A fee quoted before the search",
      "A stop, if the cash flow or the structure is not ready",
    ],
    price:
      "Buyer's agency is priced before a search starts. If the agency cannot find a property that beats the national median growth rate on the terms we write down, the next search is on us. That promise sits on the search engagement, not on the $995 strategy fee. Past growth is not a forecast.",
    faqs: [
      {
        q: "Do you only buy in Sydney?",
        a: "No. The brief follows the numbers: yield, supply, and whether you can hold it. A postcode is not a strategy.",
      },
      {
        q: "Can I get a property report without becoming a client?",
        a: "The application decides. If you are over the line, the scenarios are part of the session preparation. If you are not, you get the Blueprint, which is the earlier version of the same thinking.",
      },
    ],
  },
  {
    slug: "business-owners",
    label: "Business owners",
    h1: "Your business makes the money. Structure decides what you keep.",
    hook: "Profit in the wrong entity is a tax decision you already made, usually by accident.",
    description:
      "Entity structure and the operating system for Australian business owners heading toward sophisticated-investor status. Avere and Growth Labs.",
    who: "Owners with real profit, a company or trust that has grown up around the work, and a home loan that has nothing to do with the business on paper and everything to do with it in cash flow.",
    problem: [
      "The business pays you whatever is left. The accountant lodges. The house was bought in a personal name five years ago. None of those decisions were wrong on the day. Together they are now expensive.",
      "Owners heading toward the sophisticated-investor test often get there with messy entities. The test is a threshold. The structure is what you live with after you cross it.",
    ],
    mechanism: [
      "We separate two jobs. Avere writes the wealth page: tax, debt, protection, what the household keeps. Growth Labs is the operating system for the business itself, entity setup included, when the business needs that work.",
      "You are told which arm is doing what, and what it costs, before either one starts. They are related. They are not the same invoice.",
    ],
    included: [
      "A read of how money currently leaves the business",
      "What the entity can and cannot protect",
      "The household loan, seen next to the business cash flow",
      "A written choice: stay, restructure, or wait",
    ],
    price:
      "The business-owner session uses the same application as everyone else. Entity work and any Growth Labs engagement are priced in writing before you commit. The $995 Mortgage Destroyer package still applies if the home loan is part of the problem.",
    faqs: [
      {
        q: "What is Growth Labs doing on a wealth site?",
        a: "Some owners need the business structured and run, not only the household advised. Growth Labs does that operating work. We name it so you know who you are hiring.",
      },
      {
        q: "Do I need to be a sophisticated investor already?",
        a: "No. The test is a later door. The work before it is the entities, the tax and the debt. Crossing a threshold with a messy structure is not a win.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
