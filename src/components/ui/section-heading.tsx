import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  children: ReactNode;
  lead?: ReactNode;
  tone?: "ink" | "light";
  className?: string;
};

export function SectionHeading({ eyebrow, children, lead, tone = "ink", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className={cn("eyebrow", tone === "light" && "text-butter")}>{eyebrow}</p>
      <h2 className="mt-5 text-[clamp(2.25rem,5.4vw,4.5rem)] leading-[1.02]">{children}</h2>
      {lead && (
        <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed", tone === "light" ? "text-paper/70" : "text-ink-soft")}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
