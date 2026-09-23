import { useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  saveApplication,
  scoreAndRoute,
  type Application,
  type AssetBand,
  type GoalIntent,
  type IncomeBand,
  type TrustAnswer,
  type YesNo,
} from "@/lib/qualify";

const inputClass =
  "w-full rounded-sm border border-input bg-background px-3.5 py-3 text-[15px] text-foreground outline-none focus:border-link focus:ring-2 focus:ring-ring/20";
const labelClass = "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary";

type Errors = Partial<Record<keyof Application | "form", string>>;

const empty: Application = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  postcode: "",
  income: "200-250",
  homeowner: "yes",
  propertyValue: "",
  loanBalance: "",
  rate: "",
  businessOwner: "no",
  entity: "",
  profit: "",
  assets: "100-200",
  trust: "unsure",
  propertyInterest: "yes",
  taxAdvice: "A local accountant",
  goal: "",
  goalIntent: "mortgage",
  whyNow: "",
  campaign: "site",
};

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      {children}
      {error ? <span className="mt-1 block text-sm text-destructive">{error}</span> : null}
    </label>
  );
}

export function ApplyForm({ campaign = "site" }: { campaign?: string }) {
  const navigate = useNavigate();
  const [values, setValues] = useState<Application>({ ...empty, campaign });
  const [errors, setErrors] = useState<Errors>({});
  const [honeypot, setHoneypot] = useState("");

  function set<K extends keyof Application>(key: K, value: Application[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function validate(next: Application) {
    const nextErrors: Errors = {};
    if (next.firstName.trim().length < 2) nextErrors.firstName = "Add your first name.";
    if (next.lastName.trim().length < 2) nextErrors.lastName = "Add your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) nextErrors.email = "Use a real email address.";
    if (next.phone.replace(/\D/g, "").length < 8) nextErrors.phone = "Add a phone number we can call.";
    if (!/^\d{4}$/.test(next.postcode.trim())) nextErrors.postcode = "Use a 4-digit Australian postcode.";
    if (next.goal.trim().length < 8) nextErrors.goal = "One sentence on the goal is enough.";
    if (next.whyNow.trim().length < 8) nextErrors.whyNow = "Tell us why this is the year, not next year.";
    return nextErrors;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (honeypot) return;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const scored = scoreAndRoute(values);
    saveApplication(scored);
    navigate({ to: "/apply/confirm", search: { path: scored.path } });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <input
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
      />

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="eyebrow mb-4 text-link">You</legend>
        <Field label="First name" error={errors.firstName}>
          <input className={inputClass} value={values.firstName} autoComplete="given-name" onChange={(e) => set("firstName", e.target.value)} />
        </Field>
        <Field label="Last name" error={errors.lastName}>
          <input className={inputClass} value={values.lastName} autoComplete="family-name" onChange={(e) => set("lastName", e.target.value)} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input className={inputClass} type="email" value={values.email} autoComplete="email" onChange={(e) => set("email", e.target.value)} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input className={inputClass} type="tel" value={values.phone} autoComplete="tel" onChange={(e) => set("phone", e.target.value)} />
        </Field>
        <Field label="Postcode" error={errors.postcode}>
          <input className={inputClass} inputMode="numeric" value={values.postcode} autoComplete="postal-code" onChange={(e) => set("postcode", e.target.value)} />
        </Field>
      </fieldset>

      <fieldset className="grid gap-4">
        <legend className="eyebrow mb-4 text-link">The household</legend>
        <Field label="Household income">
          <select className={inputClass} value={values.income} onChange={(e) => set("income", e.target.value as IncomeBand)}>
            <option value="under-200">Under $200k</option>
            <option value="200-250">$200k to $250k</option>
            <option value="250-plus">$250k or more</option>
          </select>
        </Field>
        <Field label="Investable assets, outside the family home">
          <select className={inputClass} value={values.assets} onChange={(e) => set("assets", e.target.value as AssetBand)}>
            <option value="under-100">Under $100k</option>
            <option value="100-200">$100k to $200k</option>
            <option value="200-plus">$200k or more</option>
          </select>
        </Field>
        <Field label="Do you own a home?">
          <select className={inputClass} value={values.homeowner} onChange={(e) => set("homeowner", e.target.value as YesNo)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </Field>
        {values.homeowner === "yes" ? (
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Property value, rough">
              <input className={inputClass} inputMode="decimal" value={values.propertyValue} onChange={(e) => set("propertyValue", e.target.value)} />
            </Field>
            <Field label="Loan balance">
              <input className={inputClass} inputMode="decimal" value={values.loanBalance} onChange={(e) => set("loanBalance", e.target.value)} />
            </Field>
            <Field label="Current rate %">
              <input className={inputClass} inputMode="decimal" value={values.rate} onChange={(e) => set("rate", e.target.value)} />
            </Field>
          </div>
        ) : null}
      </fieldset>

      <fieldset className="grid gap-4">
        <legend className="eyebrow mb-4 text-link">The business and the structure</legend>
        <Field label="Do you own a business?">
          <select className={inputClass} value={values.businessOwner} onChange={(e) => set("businessOwner", e.target.value as YesNo)}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </Field>
        {values.businessOwner === "yes" ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Current structure">
              <input className={inputClass} placeholder="Company, trust, sole trader" value={values.entity} onChange={(e) => set("entity", e.target.value)} />
            </Field>
            <Field label="Rough annual profit">
              <input className={inputClass} value={values.profit} onChange={(e) => set("profit", e.target.value)} />
            </Field>
          </div>
        ) : null}
        <Field label="Is there a trust in the picture?">
          <select className={inputClass} value={values.trust} onChange={(e) => set("trust", e.target.value as TrustAnswer)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Not sure</option>
          </select>
        </Field>
        <Field label="Interested in an investment property?">
          <select className={inputClass} value={values.propertyInterest} onChange={(e) => set("propertyInterest", e.target.value as YesNo)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </Field>
        <Field label="Who does the tax today?">
          <select className={inputClass} value={values.taxAdvice} onChange={(e) => set("taxAdvice", e.target.value)}>
            <option>I do it</option>
            <option>A local accountant</option>
            <option>The company's accountant</option>
            <option>Not sure</option>
          </select>
        </Field>
      </fieldset>

      <fieldset className="grid gap-4">
        <legend className="eyebrow mb-4 text-link">The aim</legend>
        <Field label="What should the money do?">
          <select className={inputClass} value={values.goalIntent} onChange={(e) => set("goalIntent", e.target.value as GoalIntent)}>
            <option value="mortgage">Get the home loan term down</option>
            <option value="protect">Protect what the business has made</option>
            <option value="grow">Build the asset base</option>
            <option value="tax">Pay less tax, legally</option>
            <option value="other">Something else</option>
          </select>
        </Field>
        <Field label="The goal, in one sentence" error={errors.goal}>
          <textarea className={inputClass} rows={3} value={values.goal} onChange={(e) => set("goal", e.target.value)} />
        </Field>
        <Field label="Why now?" error={errors.whyNow}>
          <textarea className={inputClass} rows={3} value={values.whyNow} onChange={(e) => set("whyNow", e.target.value)} />
        </Field>
      </fieldset>

      <div className="space-y-3">
        <button type="submit" className="rounded-sm bg-primary px-5 py-4 text-[10px] font-semibold leading-none text-primary-foreground hover:bg-link" style={{ letterSpacing: ".18em" }}>
          SUBMIT THE APPLICATION
        </button>
        <p className="text-sm leading-[1.7] text-subtle">
          Matt runs a capped number of sessions each week. This form decides whether you get a session or the Blueprint. It is general information until we know your situation. On this staging site the answers stay in this browser. They are not sent to a server.
        </p>
      </div>
    </form>
  );
}

export function RegisterForm({ campaign }: { campaign: string }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (name.trim().length < 2 || !email.includes("@") || phone.replace(/\D/g, "").length < 8) {
      setError("Name, email and a phone number.");
      return;
    }
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(
        "avere.register.v1",
        JSON.stringify({ name, email, phone, campaign }),
      );
    }
    navigate({ to: "/apply/confirm", search: { path: "register" } });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <label className="block">
        <span className={labelClass}>Name</span>
        <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="block">
        <span className={labelClass}>Email</span>
        <input className={inputClass} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="block">
        <span className={labelClass}>Phone</span>
        <input className={inputClass} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      <button type="submit" className="rounded-sm bg-primary px-5 py-4 text-[10px] font-semibold leading-none text-primary-foreground hover:bg-link" style={{ letterSpacing: ".18em" }}>
        REGISTER
      </button>
    </form>
  );
}
