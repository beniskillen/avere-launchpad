export type LearnPiece = {
  slug: string;
  kind: "hub" | "article";
  hub: string;
  title: string;
  description: string;
  keyword: string;
  cta: { href: string; label: string };
  sections: { heading: string; paragraphs: string[] }[];
};

const end =
  "This is general information for Australian readers. It is not a recommendation to refinance, contribute, buy, or set up an entity. Your rate, your deed and your tax residency change the answer.";

export const learnPieces: LearnPiece[] = [
  {
    slug: "mortgage-destroyer",
    kind: "hub",
    hub: "mortgage-destroyer",
    title: "The mortgage, written properly",
    description:
      "How Australian homeowners actually shorten a home loan: rate, offset, extra repayments, debt recycling, and the point where investing makes it worse.",
    keyword: "how to pay off mortgage faster australia",
    cta: { href: "/tools/mortgage-destroyer-calculator", label: "Run the calculator" },
    sections: [
      {
        heading: "The term is a setting",
        paragraphs: [
          "A 30-year principal-and-interest loan is the contract most banks print. It is not a measurement of how long your household needs. Extra repayments, an offset that you actually leave alone, and a rate you have checked against the rest of the market all change the interest. None of them require a new property.",
          "The expensive mistake is treating a refinance as the strategy. A lower rate on a loan that should have been left alone, or on a purchase made in the wrong name, can cost more than the discount saves.",
        ],
      },
      {
        heading: "Order",
        paragraphs: [
          "For a lot of households over $200k, the useful order is: know the balance and the rate, know what the offset is really doing, decide whether any debt should be deductible, and only then ask if an asset belongs in the plan. Debt recycling is that middle step. It is not a slogan for borrowing more.",
          end,
        ],
      },
    ],
  },
  {
    slug: "tax-and-structures",
    kind: "hub",
    hub: "tax-and-structures",
    title: "Tax and structures, before the purchase",
    description:
      "Family trusts, bucket companies, Division 7A and holding structures for Australians who earn enough that the entity matters.",
    keyword: "family trust tax benefits",
    cta: { href: "/apply", label: "Apply for a session" },
    sections: [
      {
        heading: "The entity is a set of rules",
        paragraphs: [
          "A family trust does not lower your tax by existing. It lets trustees distribute income to beneficiaries, within the deed and within tax law. If every beneficiary is already on the top rate, the flexibility is theoretical.",
          "A bucket company is one way some owners cap the tax on income they do not need to live on. It brings its own rules, including what happens when the company lends the money back to you. That is the neighbourhood Division 7A lives in.",
        ],
      },
      {
        heading: "Buy second",
        paragraphs: [
          "People get hurt in a predictable way. They exchange on a property in a personal name because the finance was ready, then ask whether a trust would have been better. Stamp duty and the loan do not enjoy that sequence.",
          end,
        ],
      },
    ],
  },
  {
    slug: "property",
    kind: "hub",
    hub: "property",
    title: "Using equity without buying the wrong thing",
    description:
      "How home equity, buyers agents and off-market property actually work for Australians who already own a home.",
    keyword: "how to use equity to buy investment property",
    cta: { href: "/services/property", label: "Read the property page" },
    sections: [
      {
        heading: "Equity is borrowing power plus a buffer",
        paragraphs: [
          "Usable equity is not the whole gap between the value and the loan. Lenders keep a buffer, and they test whether you can repay at a rate higher than the one on the brochure. A number a friend quotes at dinner is not a pre-approval.",
          "Rentvesting, buying where you do not live, is a cash-flow choice. It can be sensible. It can also leave you paying rent and a negatively geared loan with no plan for which one ends.",
        ],
      },
      {
        heading: "What a buyers agent is for",
        paragraphs: [
          "A buyers agent is paid to search and to negotiate, on a brief you should be able to read. The fee pays for itself only if the brief was right and you were going to buy anyway. It does not fix a structure that cannot hold the asset.",
          end,
        ],
      },
    ],
  },
  {
    slug: "sophisticated-investor",
    kind: "hub",
    hub: "sophisticated-investor",
    title: "The sophisticated investor test, in plain words",
    description:
      "What the sophisticated investor test is, what a certificate does, and what it does not open by itself.",
    keyword: "sophisticated investor test australia",
    cta: { href: "/apply", label: "Apply for a session" },
    sections: [
      {
        heading: "A threshold, not a strategy",
        paragraphs: [
          "The wholesale and sophisticated investor rules exist so some offers can be made without a full retail disclosure document. The common wealth test people mean is net assets of $2.5 million, or gross income of $250,000 for each of the last two financial years, certified by an accountant. Check the current Corporations Act wording before you rely on a blog, including this one.",
          "Qualifying does not make an investment suitable. It removes a disclosure step. The offshore fund, the private deal and the alternative product still have to survive the same question: what can you lose, and can you live with that year.",
        ],
      },
      {
        heading: "Get the entities ready first",
        paragraphs: [
          "Owners often cross the income test with the business still in the structure they used at $400k turnover. The certificate is a form. The messy company is the actual problem.",
          end,
        ],
      },
    ],
  },
  {
    slug: "business-owners",
    kind: "hub",
    hub: "business-owners",
    title: "What business owners keep",
    description:
      "How Australian owners pay themselves, when a restructure is worth it, and the asset-protection steps that are real.",
    keyword: "business structure for tax australia",
    cta: { href: "/services/business-owners", label: "Business owners" },
    sections: [
      {
        heading: "Wage, dividend, distribution",
        paragraphs: [
          "A company does not pay you by mood. It pays wages, dividends, or, if a trust sits above it, distributions. Each one has a tax result and a paperwork result. 'I just take what I need' is usually a director loan, and director loans have rules.",
          "Asset protection that holds up is boring: the right entity owns the right asset, the deed matches the loan, and personal guarantees are written down so you know which ones you have given. A trust does not unwind a personal guarantee you signed at the bank.",
        ],
      },
      {
        heading: "Restructure when the facts change",
        paragraphs: [
          "Moving a business into a new entity because a podcast said so is how people create a tax event for no operating benefit. The trigger is specific: a new partner, a sale, a property purchase, or profit that has nowhere sensible to sit.",
          end,
        ],
      },
    ],
  },
  {
    slug: "pay-off-mortgage-faster",
    kind: "article",
    hub: "mortgage-destroyer",
    title: "How to pay a mortgage down faster, with Australian inputs",
    description: "Extra repayments, offset, rate, and term. What changes the interest, and what is just a new logo on the same loan.",
    keyword: "how to pay off mortgage faster australia",
    cta: { href: "/tools/mortgage-destroyer-calculator", label: "Use the calculator" },
    sections: [
      {
        heading: "Four inputs, not forty",
        paragraphs: [
          "The interest on a principal-and-interest loan is mostly the balance, the rate, the remaining term, and whether extra money actually hits the loan. An offset account only helps to the extent the balance stays there. A redraw facility helps if you do not redraw it for a holiday and then forget.",
          "Fortnightly repayments help some people because they pay a little more often. They are not magic. If the lender simply splits the monthly payment in two, you have changed the calendar, not the maths, unless the split adds an extra payment across the year.",
        ],
      },
      {
        heading: "When faster is the wrong goal",
        paragraphs: [
          "Paying the home loan down is powerful because the interest is not deductible. It is the wrong sole goal if you are about to need deductible debt, or if the cash in the offset is the only buffer the household has. A paid-off house and an empty transaction account is not the win some spreadsheets claim.",
          end,
        ],
      },
    ],
  },
  {
    slug: "debt-recycling",
    kind: "article",
    hub: "mortgage-destroyer",
    title: "Debt recycling, without the costume",
    description: "What debt recycling is in Australia, who it is for, and the step people skip.",
    keyword: "debt recycling australia",
    cta: { href: "/tools/debt-to-wealth-blueprint", label: "Read the Blueprint" },
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Debt recycling is a way of replacing non-deductible home-loan debt with deductible investment debt, usually by paying down the home loan and redrawing to buy an income-producing asset. The ATO cares about the purpose of the borrowing. A redraw used to buy a car is not recycled into an investment just because you meant well.",
          "The paperwork has to match the story. Split loans, clean redraws, and records of what the money bought are the dull part that makes the deduction real.",
        ],
      },
      {
        heading: "Who should not start",
        paragraphs: [
          "If you have no buffer, no investment you actually understand, or a household that will redraw the 'investment' split for school fees, do not start. Recycling magnifies a plan. It also magnifies a mess.",
          end,
        ],
      },
    ],
  },
  {
    slug: "offset-vs-redraw",
    kind: "article",
    hub: "mortgage-destroyer",
    title: "Offset or redraw: which one saves more",
    description: "The practical difference between an offset account and redraw on an Australian home loan.",
    keyword: "offset account vs redraw",
    cta: { href: "/tools/mortgage-destroyer-calculator", label: "Price your loan" },
    sections: [
      {
        heading: "Same interest, different legal shape",
        paragraphs: [
          "A full offset balance reduces the interest in much the same way as money sitting in the loan via redraw. The difference shows up when you take the money back out. Money leaving an offset is your money. Money leaving redraw can be a new borrowing, and the purpose of that borrowing is what the tax deduction follows.",
          "That is why investors often care more about the label than owner-occupiers do. If you will only ever use the balance as a buffer for the home you live in, the cheaper of the two facilities is usually the point.",
        ],
      },
      {
        heading: "Fees",
        paragraphs: [
          "Package fees on offset loans are real. A $395 annual fee on a loan that only keeps $8,000 in offset is an expensive umbrella. Run the interest saved against the fee before you upgrade the product for the feeling of it.",
          end,
        ],
      },
    ],
  },
  {
    slug: "mortgage-interest-cost",
    kind: "article",
    hub: "mortgage-destroyer",
    title: "Banks quote a rate. The cost is the years.",
    description: "Why the comparison rate is not the bill, and how to see the interest on the term you actually have.",
    keyword: "mortgage interest cost",
    cta: { href: "/tools/rate-audit", label: "See the interest" },
    sections: [
      {
        heading: "The rate is an input",
        paragraphs: [
          "A comparison rate folds in some fees so two products can sit on one line. It still assumes a standard loan size and term. Your bill is your balance, your rate, your fees, and how long you keep them.",
          "If nothing changes, interest over a long remaining term is often larger than people expect, because the early years of a principal-and-interest loan are mostly interest. That is arithmetic. It is not a forecast that your rate stays put. Rates move. So does your income.",
        ],
      },
      {
        heading: "What to take to a human",
        paragraphs: [
          "Bring the balance, the rate, the remaining term, the offset balance you actually keep, and the package fee. Anyone who starts the conversation with a new rate, before those five, is selling a product.",
          end,
        ],
      },
    ],
  },
  {
    slug: "refinance-to-invest",
    kind: "article",
    hub: "mortgage-destroyer",
    title: "Refinancing to invest: when it works",
    description: "Releasing equity to buy an investment property. The tests that matter before the pre-approval.",
    keyword: "refinance to invest in property",
    cta: { href: "/apply", label: "Apply for a session" },
    sections: [
      {
        heading: "The lender's test and yours",
        paragraphs: [
          "A lender asks whether you can service the new debt at an assessed rate, with a buffer on the value. You should ask a second question: if rent stops for a quarter and rates are higher, does the household still function. Passing the bank and failing that question is how people become landlords who cannot sleep.",
          "The name on the contract matters as much as the suburb. Refinance into a purchase in the wrong entity and you will spend the next decade undoing a week of enthusiasm.",
        ],
      },
      {
        heading: "When not to",
        paragraphs: [
          "Do not refinance to invest if the home loan is the only savings plan, if you have not read the trust deed, or if the 'investment' is a property you want to live in later and are calling an investment for the tax story. Purpose follows the facts.",
          end,
        ],
      },
    ],
  },
  {
    slug: "interest-only-vs-principal",
    kind: "article",
    hub: "mortgage-destroyer",
    title: "Interest-only or principal and interest, for investors",
    description: "What interest-only does to cash flow and to the debt you still owe.",
    keyword: "interest only investment loan",
    cta: { href: "/tools/debt-to-wealth-blueprint", label: "Read the Blueprint" },
    sections: [
      {
        heading: "You are renting the debt",
        paragraphs: [
          "Interest-only means the balance does not fall. Cash flow looks better. The risk is that the asset does not rise enough, or the interest-only period ends and the repayment steps up while rent has not.",
          "Principal and interest is slower on cash flow and quieter on risk, because the debt shrinks. For a home you live in, that is usually the point. For an investment, it depends whether you need the cash flow to hold the asset at all.",
        ],
      },
      {
        heading: "Do not let the product choose the strategy",
        paragraphs: [
          "Lenders like interest-only for a reason, and so do some accountants. The page should say what the balance will be in five years under both, using your rate, not a sample rate from a billboard.",
          end,
        ],
      },
    ],
  },
  {
    slug: "family-trusts",
    kind: "article",
    hub: "tax-and-structures",
    title: "Family trusts: what they are actually for",
    description: "Discretionary trusts in Australia. Distribution, control, and the things they do not do.",
    keyword: "family trust tax benefits",
    cta: { href: "/tools/debt-to-wealth-blueprint", label: "Read the Blueprint" },
    sections: [
      {
        heading: "A trust is a rulebook",
        paragraphs: [
          "A discretionary trust holds assets for beneficiaries. The trustee decides, within the deed, who receives income. That can be useful when beneficiaries are on different tax rates. It is useless if you have no one to distribute to except yourself at the top marginal rate.",
          "Control sits with the trustee and, often more importantly, the appointor. People set up trusts and then forget who can hire and fire the trustee. Read that page of the deed before you read the tax brochure.",
        ],
      },
      {
        heading: "What it will not do",
        paragraphs: [
          "It will not hide income you have already earned in your own name. It will not cancel a personal guarantee. It will not make a bad property a good one. Land tax and stamp duty can also make a trust the more expensive way to hold a particular asset in a particular state.",
          end,
        ],
      },
    ],
  },
  {
    slug: "bucket-companies",
    kind: "article",
    hub: "tax-and-structures",
    title: "Bucket companies, and the tax rate they actually cap",
    description: "How a bucket company is used by Australian business owners, and the loan problem that follows.",
    keyword: "bucket company australia",
    cta: { href: "/apply", label: "Apply for a session" },
    sections: [
      {
        heading: "A place for profit you do not need yet",
        paragraphs: [
          "A bucket company is a company that receives trust distributions so the cash is taxed at the company rate rather than at a beneficiary's marginal rate. The point is profit the household does not need to spend this year.",
          "The moment you take that money back out to live on, you are in dividend or loan territory. Loans from the company to you are where Division 7A starts writing the terms you forgot to write.",
        ],
      },
      {
        heading: "Not a default",
        paragraphs: [
          "If you spend the profit, a bucket company adds a tax return and a deed interaction for little benefit. If you are accumulating, it can be the cleanest cap available. The session should be able to say which one you are, from the bank statements, not from the ambition.",
          end,
        ],
      },
    ],
  },
  {
    slug: "holding-structures",
    kind: "article",
    hub: "tax-and-structures",
    title: "Trust, company, or your own name",
    description: "A comparison of holding structures for Australian investments, without a winner declared in advance.",
    keyword: "trust vs company investment",
    cta: { href: "/apply", label: "Apply for a session" },
    sections: [
      {
        heading: "Three different tools",
        paragraphs: [
          "Your own name is simple, and the loan is often easier. You also wear the tax, the liability, and the land tax in that name. A company has a flat tax rate and poor treatment of capital gains discounts in many cases. A discretionary trust is flexible on distributions and awkward on land tax in some states.",
          "There is no universal winner. The asset, the state, the other beneficiaries, and whether you will need the bank to like the structure all move the answer.",
        ],
      },
      {
        heading: "Decide before exchange",
        paragraphs: [
          "Changing the name on an asset after you own it can mean stamp duty and capital gains tax. The cheap time to choose is before the contract.",
          end,
        ],
      },
    ],
  },
  {
    slug: "division-7a",
    kind: "article",
    hub: "tax-and-structures",
    title: "Division 7A without the headache",
    description: "What Division 7A is, in one page, for owners who have taken money from a company.",
    keyword: "division 7a explained",
    cta: { href: "/tools/debt-to-wealth-blueprint", label: "Read the Blueprint" },
    sections: [
      {
        heading: "The company is not your wallet",
        paragraphs: [
          "Division 7A is the set of rules that stops a private company from letting shareholders and associates take money out as a tax-free loan. If you draw funds and do not treat them as wages, dividends, or a complying loan, the tax outcome can look like an unfranked dividend.",
          "Complying loans have interest and repayments. People discover this when the accountant asks, in May, what the drawings were. The drawings were the school fees.",
        ],
      },
      {
        heading: "The fix is usually boring",
        paragraphs: [
          "Write down what you took, decide whether it is a wage, a dividend or a real loan, and stop using the company account as a second offset. If the balance is already large, get the accountant to map the minimum repayment before you promise the bank a tidy set of financials.",
          end,
        ],
      },
    ],
  },
  {
    slug: "tax-planning-200k",
    kind: "article",
    hub: "tax-and-structures",
    title: "Tax planning when the household is over $200k",
    description: "The levers that matter for higher-income Australian households, and the ones that are mostly theatre.",
    keyword: "tax planning high income australia",
    cta: { href: "/apply", label: "Apply for a session" },
    sections: [
      {
        heading: "Levers with a name",
        paragraphs: [
          "Superannuation contributions, within the caps. Deductible debt, if the purpose is an investment. The way profit leaves a company. The timing of a capital gain. Private health, only because the surcharge and the rebate are real, not because it is a wealth strategy.",
          "What usually does not move the number: a new app, a novelty deduction, or a trust with nobody to distribute to.",
        ],
      },
      {
        heading: "Do it while the year is open",
        paragraphs: [
          "The useful conversation is in April, with the loan statement and the company financials on the table. A strategy that arrives with the assessment notice is a post-mortem.",
          end,
        ],
      },
    ],
  },
  {
    slug: "use-home-equity",
    kind: "article",
    hub: "property",
    title: "How to use home equity to buy an investment property",
    description: "The sequence from usable equity to a contract, for Australians who already own a home.",
    keyword: "how to use equity to buy investment property",
    cta: { href: "/services/property", label: "Property at Avere" },
    sections: [
      {
        heading: "Start with what the bank will not lend",
        paragraphs: [
          "Usable equity is the gap between a conservative loan-to-value ratio and the debt you already have, after the lender's serviceability test. A desktop estimate of the house is not that number. An approval is.",
          "Then the structure. Then the asset. People reverse it because open homes are more fun than deeds.",
        ],
      },
      {
        heading: "Hold costs are the strategy",
        paragraphs: [
          "Rent, interest, rates, insurance, and weeks with no tenant. If those only work when everything goes well, you do not have a hold. You have a hope. Write the ugly quarter before you write the ten-year story.",
          end,
        ],
      },
    ],
  },
  {
    slug: "buyers-agent",
    kind: "article",
    hub: "property",
    title: "What a buyers agent does, and when the fee is worth it",
    description: "A plain description of buyers agents in Australia, including Sydney fees as a range you should hear before you sign.",
    keyword: "what does a buyers agent do",
    cta: { href: "/services/property", label: "How Futurealty works" },
    sections: [
      {
        heading: "The job",
        paragraphs: [
          "A buyers agent searches, shortlists and negotiates for a buyer, on a brief. Good ones say no to most stock. The fee is either a fixed number or a percentage, and you should see it before the first inspection, not at the offer.",
          "The fee earns its place when you would otherwise buy the wrong asset, in a market you do not know, with a deadline. It does not earn its place as a substitute for knowing what you can borrow.",
        ],
      },
      {
        heading: "Fees",
        paragraphs: [
          "Sydney buyers-agent fees vary enough that a single number on a blog would be fake precision. Ask for the dollar figure, what it includes, and what happens if you do not buy. Then compare that figure to the mistake you are trying not to make.",
          end,
        ],
      },
    ],
  },
  {
    slug: "off-market-sydney",
    kind: "article",
    hub: "property",
    title: "Off-market property in Sydney",
    description: "What off-market means, what it does not mean, and why access is not the same as a bargain.",
    keyword: "off market property sydney",
    cta: { href: "/services/property", label: "Property page" },
    sections: [
      {
        heading: "Off-market means not on a portal",
        paragraphs: [
          "It does not mean cheap, and it does not mean secret from every other buyer with a buyers agent. A lot of off-market stock is a vendor testing a price without the theatre of a campaign. Sometimes that price is optimistic.",
          "Access is a phone book and a reputation. It is worth something if your brief is specific. It is worth nothing if you will buy whatever is waved at you on a Thursday.",
        ],
      },
      {
        heading: "The economics",
        paragraphs: [
          "You still pay stamp duty, you still need a loan, and you still need a building inspection. The missing auction does not remove those. If someone tells you off-market buyers 'always' pay less, ask them for the settlement prices, not the story.",
          end,
        ],
      },
    ],
  },
  {
    slug: "rentvesting",
    kind: "article",
    hub: "property",
    title: "Rentvesting: the numbers that decide it",
    description: "Rent where you live, buy where the numbers work. When that is coherent, and when it is a way to avoid a hard choice.",
    keyword: "rentvesting strategy australia",
    cta: { href: "/tools/mortgage-destroyer-calculator", label: "Run your loan" },
    sections: [
      {
        heading: "Two rents, one life",
        paragraphs: [
          "Rentvesting means you rent the suburb you want to live in and buy an investment somewhere the yield and the entry price are kinder. It can leave you with an asset while your friends stretch for a home they cannot afford. It can also leave you paying a landlord and a lender, with no owner-occupier concessions on the asset.",
          "The decision is cash flow and time. How many years will you rent. What happens to the investment if you later need a home deposit. Those two dates should be on the same page.",
        ],
      },
      {
        heading: "Do not skip the hold cost",
        paragraphs: [
          "A yield that looks fine on a listing can disappear into interest, management, and a month vacant. Model that before you model the capital growth. Growth is the part you do not control.",
          end,
        ],
      },
    ],
  },
  {
    slug: "sophisticated-investor-test",
    kind: "article",
    hub: "sophisticated-investor",
    title: "The sophisticated investor test, plainly",
    description: "The asset and income tests Australians mean, and why the certificate is not advice.",
    keyword: "sophisticated investor test australia",
    cta: { href: "/apply", label: "Apply for a session" },
    sections: [
      {
        heading: "The tests people quote",
        paragraphs: [
          "In ordinary conversation, 'sophisticated investor' in Australia points at the wholesale client tests: net assets of at least $2.5 million, or gross income of at least $250,000 a year for the last two financial years, certified by a qualified accountant. The statute is the source. A blog should not be where you learn the edge cases, including what counts as an asset and whose income counts.",
          "There is also a separate path where a licensee is satisfied you have the experience to assess an offer. That is not the same piece of paper as the accountant's certificate.",
        ],
      },
      {
        heading: "What the paper does",
        paragraphs: [
          "It lets someone offer you a product without a retail disclosure document. It does not mean the product fits your tax, your debt, or the year you want the money back. Treat the certificate as a door, then read the room.",
          end,
        ],
      },
    ],
  },
  {
    slug: "wholesale-investor",
    kind: "article",
    hub: "sophisticated-investor",
    title: "What actually opens when you qualify",
    description: "Wholesale offers, private deals, and the mistakes that follow a new certificate.",
    keyword: "wholesale investor opportunities australia",
    cta: { href: "/apply", label: "Apply for a session" },
    sections: [
      {
        heading: "A longer menu",
        paragraphs: [
          "Wholesale clients can be offered investments that are not sold to the general public: some funds, some private companies, some property syndicates. The menu is longer. The disclosure is shorter. That is a trade, not a promotion.",
          "The first year after people qualify is when they are most likely to say yes to something a friend is in. Friendship is not due diligence.",
        ],
      },
      {
        heading: "Still do the household maths",
        paragraphs: [
          "An illiquid investment next to a home loan is a liquidity problem wearing a sophisticated hat. If you cannot describe how you get the money out, you do not understand the investment yet.",
          end,
        ],
      },
    ],
  },
  {
    slug: "investing-offshore",
    kind: "article",
    hub: "sophisticated-investor",
    title: "Investing offshore from Australia",
    description: "Structures, tax and the ordinary mistakes. No product list.",
    keyword: "investing offshore from australia",
    cta: { href: "/tools/debt-to-wealth-blueprint", label: "Read the Blueprint" },
    sections: [
      {
        heading: "The tax lives here",
        paragraphs: [
          "Australian tax residents are generally taxed on worldwide income. A fund in another country does not switch that off. Foreign income, foreign tax credits, and the reports you may not receive in English are the practical problem.",
          "Currency moves the return as much as the asset does. People forget to write that down because the brochure is in the asset's home currency.",
        ],
      },
      {
        heading: "Structures",
        paragraphs: [
          "Owning it in your own name, a company, or a trust changes control and tax. It does not change the fact that you need to understand the thing you bought. Offshore is not a personality. It is extra administration.",
          end,
        ],
      },
    ],
  },
  {
    slug: "alternative-investments",
    kind: "article",
    hub: "sophisticated-investor",
    title: "Alternative investments that exist for Australians",
    description: "What people mean by alternatives, and the questions that matter more than the category.",
    keyword: "alternative investments australia",
    cta: { href: "/apply", label: "Apply for a session" },
    sections: [
      {
        heading: "A label, not a virtue",
        paragraphs: [
          "Alternatives usually means something other than listed shares, cash and residential property: private credit, private equity, hedge-style funds, some infrastructure, commodities, and a long tail of products that borrowed the word. The category does not tell you the fee, the lock-up, or the tax.",
          "Ask how you lose money, who gets paid before you do, and what the reporting looks like in a bad year. If the answer is a vibe, it is not an allocation.",
        ],
      },
      {
        heading: "Size",
        paragraphs: [
          "A small slice you understand is different from half the investable assets in a product you cannot exit. The home loan still has to be paid in the year the alternative does not distribute.",
          end,
        ],
      },
    ],
  },
  {
    slug: "pay-yourself",
    kind: "article",
    hub: "business-owners",
    title: "Paying yourself from a company, properly",
    description: "Wages, dividends and the drawings that become a tax problem.",
    keyword: "how to pay yourself from a company australia",
    cta: { href: "/services/business-owners", label: "For business owners" },
    sections: [
      {
        heading: "Three doors",
        paragraphs: [
          "A wage is deductible to the company and taxable to you, with super and PAYG. A dividend comes out of taxed profits and may carry franking credits. A drawing that is neither is often a loan, and loans from private companies to shareholders are regulated.",
          "Owners mix them because cash flow is lumpy. The tax office does not find that charming. Pick a method for the year and let the bookkeeper see it monthly, not in June.",
        ],
      },
      {
        heading: "The household still has a mortgage",
        paragraphs: [
          "The wage you declare is also the income the bank will use. A clever tax outcome that makes you unbankable for the house is not clever. Write both numbers.",
          end,
        ],
      },
    ],
  },
  {
    slug: "entity-structure",
    kind: "article",
    hub: "business-owners",
    title: "When a growing business should restructure",
    description: "Triggers for changing entity, and the tax cost of doing it for fashion.",
    keyword: "business structure for tax australia",
    cta: { href: "/services/business-owners", label: "Business owner page" },
    sections: [
      {
        heading: "Triggers that are real",
        paragraphs: [
          "A new equity partner. A sale you can actually see. Profit that will be retained. A property the business should not own in the trading company. Risk that should not sit next to the family's savings. Those are reasons to look at the structure.",
          "A seminar is not a reason. Moving a business can crystallise tax. The saving has to be larger than the cost of the move, including your time and the bank's patience.",
        ],
      },
      {
        heading: "Trading company, holding entity",
        paragraphs: [
          "A common pattern is a trading company that makes the money and a separate entity that holds the valuable assets, licensed back if needed. It is common because it often fits. It still has to be built before the valuable asset exists, or you are transferring it later at a price.",
          end,
        ],
      },
    ],
  },
  {
    slug: "asset-protection",
    kind: "article",
    hub: "business-owners",
    title: "Asset protection that still works on a bad day",
    description: "The basic protections for Australian business owners, and the ones that fail in court or at the bank.",
    keyword: "asset protection for business owners",
    cta: { href: "/services/business-owners", label: "Talk to us about the structure" },
    sections: [
      {
        heading: "Separate the risky activity from the asset",
        paragraphs: [
          "If the trading business can be sued, the family home and the investments should not be sitting in that same company if you can avoid it. That is the basic idea. The execution is the deed, the ownership, and the guarantees.",
          "Personal guarantees punch holes in otherwise tidy diagrams. List every one you have signed. Owners are often surprised by the length of the list.",
        ],
      },
      {
        heading: "Insurance and the will",
        paragraphs: [
          "Structures do not replace insurance, and they do not replace a will and an enduring power of attorney that match the entities. A trust with no idea who steps in if you are hit by a car is not a plan. It is a file.",
          end,
        ],
      },
    ],
  },
];

export function getLearnPiece(slug: string) {
  return learnPieces.find((piece) => piece.slug === slug);
}

export function piecesForHub(hub: string) {
  return learnPieces.filter((piece) => piece.kind === "article" && piece.hub === hub);
}

export const learnHubs = learnPieces.filter((piece) => piece.kind === "hub");
