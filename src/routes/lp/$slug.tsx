import { createFileRoute, notFound } from "@tanstack/react-router";
import { ApplyForm, RegisterForm } from "@/components/ApplyForm";
import { getCampaign } from "@/content/campaigns";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/lp/$slug")({
  loader: ({ params }) => {
    const campaign = getCampaign(params.slug);
    if (!campaign) throw notFound();
    return campaign;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: `${loaderData.h1} | Avere`,
      description: loaderData.description,
      path: `/lp/${loaderData.slug}`,
      noindex: true,
    }),
  component: Landing,
});

function Landing() {
  const campaign = Route.useLoaderData();
  return (
    <main>
      <section className="bg-primary px-6 pb-14 pt-10 md:px-10">
        <div className="mx-auto max-w-[800px]">
          <p className="font-display text-2xl tracking-[0.12em] text-primary-foreground">
            <span className="text-gold-light">A</span>VERE
          </p>
          <p className="mb-6 mt-8 text-[10px] font-semibold tracking-[0.22em] text-sky">{campaign.eyebrow}</p>
          <h1 className="font-display text-[clamp(34px,6vw,56px)] font-medium leading-[1.12] text-primary-foreground">{campaign.h1}</h1>
          <p className="mt-5 text-lg leading-[1.7] text-primary-foreground/80">{campaign.lede}</p>
          <a href="#apply" className="mt-8 inline-block rounded-sm bg-primary-foreground px-5 py-3.5 text-[10px] font-semibold tracking-[0.16em] text-primary">
            {campaign.mode === "register" ? "REGISTER" : "APPLY"}
          </a>
        </div>
      </section>
      <article className="mx-auto max-w-[760px] space-y-8 px-6 py-12 text-base leading-[1.8] text-muted-foreground">
        {campaign.problem.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <h2 className="font-display text-3xl font-medium text-primary">The mechanism</h2>
        <p>{campaign.mechanism}</p>
        <h2 className="font-display text-3xl font-medium text-primary">What is on offer</h2>
        <ul className="list-disc space-y-2 pl-5">
          {campaign.offer.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <section id="apply" className="bg-secondary px-6 py-12 md:px-10">
        <div className="mx-auto max-w-[720px] rounded-md border border-border bg-card p-6 md:p-8">
          <h2 className="mb-6 font-display text-3xl font-medium text-primary">
            {campaign.mode === "register" ? "Register" : "Apply"}
          </h2>
          {campaign.mode === "register" ? <RegisterForm campaign={campaign.slug} /> : <ApplyForm campaign={campaign.slug} />}
        </div>
      </section>
    </main>
  );
}
