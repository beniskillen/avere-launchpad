import { Link, createFileRoute } from "@tanstack/react-router";
import { services } from "@/content/services";
import { FinalCta } from "@/components/marketing";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () =>
    pageHead({
      title: "Services | Avere Wealth",
      description:
        "Strategic private wealth, the Mortgage Destroyer, tax, trusts, property and business-owner work. One roadmap. AFSL 525361.",
      path: "/services",
    }),
});

function ServicesIndex() {
  return (
    <main>
      <section className="bg-primary px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[1180px]">
          <p className="mb-6 text-[10px] font-semibold tracking-[0.28em] text-sky">SERVICES</p>
          <h1 className="max-w-[800px] font-display text-[clamp(36px,6vw,56px)] font-medium leading-[1.12] text-primary-foreground">
            Six jobs. One page they have to agree on.
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-[1.7] text-primary-foreground/80">
            Start with the Mortgage Destroyer if the home loan is the mess. Start with the business page if the company is. The session tells you which, if you are not sure.
          </p>
        </div>
      </section>
      <section className="bg-background px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="rounded-md border border-border bg-card p-7 hover:border-accent"
            >
              <h2 className="font-display text-2xl font-medium text-primary">{service.h1}</h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground">{service.hook}</p>
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
