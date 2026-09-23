import { Link, createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () =>
    pageHead({
      title: "Contact | Avere Wealth",
      description: "The Wealth Strategy Session application is how you reach Avere. This preview does not send email.",
      path: "/contact",
    }),
});

function Contact() {
  return (
    <main>
      <section className="bg-primary px-6 pb-16 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[760px]">
          <p className="mb-6 text-[10px] font-semibold tracking-[0.32em] text-sky">CONTACT</p>
          <h1 className="font-display text-[clamp(34px,6vw,52px)] font-medium leading-[1.15] text-primary-foreground">
            The application is the way in.
          </h1>
          <p className="mt-5 text-lg leading-[1.7] text-primary-foreground/80">
            A separate “book a chat” form would only duplicate it, with less of the information Matt needs. If you are over the line, apply. If you are not, the form sends you to the Blueprint.
          </p>
          <Link
            to="/apply"
            className="mt-8 inline-block rounded-sm bg-primary-foreground px-5 py-3.5 text-[10px] font-semibold tracking-[0.16em] text-primary"
          >
            APPLY FOR A SESSION
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-[760px] space-y-4 px-6 py-12 text-base leading-[1.8] text-muted-foreground">
        <p>Avere Private Wealth Pty Ltd · AFSL 525361. Matt Brown runs the sessions.</p>
        <p>
          This preview does not email anyone. Answers on the application stay in your browser until a lead pipeline is connected. The privacy page says the same thing, on purpose.
        </p>
        <p>
          Press, a wrong figure, or a licence question: say so in the “why now” box. We will not pretend a message arrived if the pipeline is not on.
        </p>
      </section>
    </main>
  );
}
