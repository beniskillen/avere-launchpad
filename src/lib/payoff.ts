export type LoanPurpose = "paydown" | "refinance" | "buy";
export type LoanBand = "under-500" | "500-1m" | "1m-plus";
export type Timeframe = "now" | "this-year" | "later";
export type Employment = "payg" | "self-employed" | "retired" | "other";
export type YesNo = "yes" | "no";

export type PayoffLead = {
  name: string;
  email: string;
  mobile: string;
  purpose: LoanPurpose;
  consent: true;
  consentedAt: string;
};

export type PayoffSurvey = {
  purpose: LoanPurpose;
  loanBand: LoanBand;
  timeframe: Timeframe;
  employment: Employment;
  wantsAdvice: YesNo;
};

const LEAD_KEY = "avere.payoff.lead.v1";
const SURVEY_KEY = "avere.payoff.survey.v1";

export const purposeLabel: Record<LoanPurpose, string> = {
  paydown: "Paying the current loan down faster",
  refinance: "A refinance",
  buy: "A new home loan",
};

export function savePayoffLead(lead: PayoffLead) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(LEAD_KEY, JSON.stringify(lead));
}

export function loadPayoffLead(): PayoffLead | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(LEAD_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as PayoffLead;
    if (!parsed.consent || !parsed.email) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function savePayoffSurvey(survey: PayoffSurvey) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(SURVEY_KEY, JSON.stringify(survey));
}

export function loadPayoffSurvey(): PayoffSurvey | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(SURVEY_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PayoffSurvey;
  } catch {
    return null;
  }
}

export const followUps = [
  {
    when: "Straight away",
    channel: "Email",
    what: "The case-study video, and one line on what happens next. The footer names Avere, how to reach us, and how to unsubscribe.",
  },
  {
    when: "Day 2",
    channel: "Email",
    what: "Three questions, so the enquiry can be pointed at a broker rather than a generic inbox. The link is the survey on this site.",
  },
  {
    when: "Day 3, only if the survey is still open",
    channel: "SMS",
    what: "A short text with the survey link. It includes reply STOP. No text goes to someone who did not tick consent.",
  },
  {
    when: "Day 5",
    channel: "Email",
    what: "An invitation to a session with Matt. Mortgage enquiries only. A yes to investing or debt recycling does not start its own email sequence. That answer is handed to an adviser.",
  },
] as const;

export const blogEmails = [
  {
    slug: "pay-off-mortgage-faster",
    title: "How to pay a mortgage down faster, with Australian inputs",
    job: "The first regular email. The fragment, in Matt's voice, once he replaces the scaffold.",
  },
  {
    slug: "mortgage-interest-cost",
    title: "Banks quote a rate. The cost is the years.",
    job: "The second email. The cost of leaving the loan on the original term.",
  },
  {
    slug: "offset-vs-redraw",
    title: "Offset or redraw: which one saves more",
    job: "The third email. A useful distinction, still general information.",
  },
  {
    slug: "debt-recycling",
    title: "Debt recycling, without the costume",
    job: "Later, and only for people who asked about investing. Not the first email, and not an advice sequence.",
  },
] as const;
