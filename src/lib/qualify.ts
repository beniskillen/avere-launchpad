export type IncomeBand = "under-200" | "200-250" | "250-plus";
export type AssetBand = "under-100" | "100-200" | "200-plus";
export type YesNo = "yes" | "no";
export type TrustAnswer = "yes" | "no" | "unsure";
export type GoalIntent = "mortgage" | "protect" | "grow" | "tax" | "other";
export type RoutePath = "session" | "blueprint";

export type Application = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postcode: string;
  income: IncomeBand;
  homeowner: YesNo;
  propertyValue: string;
  loanBalance: string;
  rate: string;
  businessOwner: YesNo;
  entity: string;
  profit: string;
  assets: AssetBand;
  trust: TrustAnswer;
  propertyInterest: YesNo;
  taxAdvice: string;
  goal: string;
  goalIntent: GoalIntent;
  whyNow: string;
  campaign: string;
};

export type ScoredApplication = Application & {
  score: number;
  priority: boolean;
  path: RoutePath;
};

const STORAGE_KEY = "avere.application.v1";

export function scoreApplication(application: Application) {
  let score = 0;
  if (application.businessOwner === "yes") score += 3;
  if (application.trust === "no" && application.propertyInterest === "yes") score += 4;
  if (application.propertyInterest === "yes") score += 5;
  if (application.goalIntent === "protect" || application.goalIntent === "grow") score += 3;
  return score;
}

export function routeApplication(application: Application): RoutePath {
  if (application.assets === "under-100") return "blueprint";
  if (application.homeowner === "no" && application.businessOwner === "no") return "blueprint";
  if (
    application.businessOwner === "yes" ||
    application.income !== "under-200" ||
    application.assets === "200-plus"
  ) {
    return "session";
  }
  return "blueprint";
}

export function scoreAndRoute(application: Application): ScoredApplication {
  const score = scoreApplication(application);
  return {
    ...application,
    score,
    priority: score >= 8,
    path: routeApplication(application),
  };
}

export function saveApplication(application: ScoredApplication) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(application));
}

export function loadApplication(): ScoredApplication | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ScoredApplication;
  } catch {
    return null;
  }
}
