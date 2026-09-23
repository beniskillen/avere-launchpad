import type { ReactNode } from "react";

export function LegalArticle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-background px-6 py-14 md:px-10">
      <article className="mx-auto max-w-[740px] space-y-4 text-base leading-[1.8] text-muted-foreground">
        <p className="eyebrow text-link">{eyebrow}</p>
        <h1 className="font-display text-4xl font-medium leading-tight text-primary">{title}</h1>
        {children}
        <p className="text-sm text-subtle">Reviewed 23 September 2026. Matt Brown signs off the wording before it is treated as published advice material.</p>
      </article>
    </main>
  );
}
