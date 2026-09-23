import { useEffect, useState } from "react";

type Letter = { ch: string; w: number; in: "both" | "adv" | "av" };

const LETTERS: Letter[] = [
  { ch: "A", w: 0.74, in: "both" },
  { ch: "D", w: 0.78, in: "adv" },
  { ch: "V", w: 0.74, in: "both" },
  { ch: "E", w: 0.66, in: "av" },
  { ch: "I", w: 0.38, in: "adv" },
  { ch: "S", w: 0.56, in: "adv" },
  { ch: "O", w: 0.8, in: "adv" },
  { ch: "R", w: 0.72, in: "both" },
  { ch: "E", w: 0.66, in: "av" },
  { ch: "Y", w: 0.72, in: "adv" },
];

/**
 * Single-pass mark: opens the ADVISORY letters on load, then resolves to
 * AVERE and stops there. Never loops.
 */
export function AvereMark({
  size = "96px",
  className = "",
  animate = true,
}: {
  size?: string;
  className?: string;
  animate?: boolean;
}) {
  const [expanded, setExpanded] = useState(animate);

  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setExpanded(false), 700);
    return () => clearTimeout(t);
  }, [animate]);

  return (
    <div
      aria-label="Avere"
      className={`font-display flex items-baseline whitespace-nowrap font-medium leading-none ${className}`}
      style={{ fontSize: size }}
    >
      {LETTERS.map((l, i) => {
        const vis = l.in === "both" || (expanded ? l.in === "adv" : l.in === "av");
        return (
          <span
            key={i}
            aria-hidden="true"
            className={i === 0 ? "text-gold-light" : undefined}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              maxWidth: vis ? `${l.w}em` : "0em",
              marginRight: vis ? ".11em" : "0em",
              opacity: vis ? 1 : 0,
              transition:
                "max-width .7s cubic-bezier(.72,0,.24,1), margin-right .7s cubic-bezier(.72,0,.24,1), opacity .4s ease",
            }}
          >
            {l.ch}
          </span>
        );
      })}
    </div>
  );
}
