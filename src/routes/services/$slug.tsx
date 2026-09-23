import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { getService } from "@/content/services";
import { FaqList, FinalCta } from "@/components/marketing";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, pageHead } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: `${loaderData.h1} | Avere Wealth`,
      description: loaderData.description,
      path: `/services/${loaderData.slug}`,
    }),
  component: ServiceRoute,
});

function ServiceRoute() {
  const service = Route.useLoaderData();
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.label, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <section className="bg-primary px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[900px]">
          <p className="mb-4 text-[12px] text-sky">
            <Link to="/services" className="underline decoration-sky/40 underline-offset-4">
              Services
            </Link>
          </p>
          <h1 className="font-display text-[clamp(34px,5vw,52px)] font-medium leading-[1.15] text-primary-foreground">{service.h1}</h1>
          <p className="mt-5 text-lg leading-[1.7] text-primary-foreground/80">{service.hook}</p>
        </div>
      </section>
      <article className="mx-auto max-w-[760px] space-y-10 px-6 py-14 text-pretty text-base leading-[1.8] text-muted-foreground md:px-10">
        <section>
          <h2 className="mb-3 font-display text-2xl font-medium text-primary">Who it is for</h2>
          <p>{service.who}</p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-2xl font-medium text-primary">The problem in their week</h2>
          {service.problem.map((paragraph) => (
            <p key={paragraph} className="mb-3">
              {paragraph}
            </p>
          ))}
        </section>
        <section>
          <h2 className="mb-3 font-display text-2xl font-medium text-primary">How it works</h2>
          {service.mechanism.map((paragraph) => (
            <p key={paragraph} className="mb-3">
              {paragraph}
            </p>
          ))}
        </section>
        <section>
          <h2 className="mb-3 font-display text-2xl font-medium text-primary">What you get</h2>
          <ul className="list-disc space-y-2 pl-5">
            {service.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-3 font-display text-2xl font-medium text-primary">Priced in writing, before you commit</h2>
          <p>{service.price}</p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-2xl font-medium text-primary">Questions</h2>
          <FaqList items={service.faqs} />
        </section>
      </article>
      <FinalCta />
    </main>
  );
}
