import type { ReactNode } from "react";

import { Reveal, RisingWords } from "@/components/motion/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Second line of the title, set in italic plum. */
  accent?: string;
  lead?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, accent, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-x-clip pb-14 pt-36 md:pb-20 md:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-20 size-[36rem] rounded-full bg-blush/60 blur-3xl"
      />
      <div className="container-page relative">
        <Reveal y={12}>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.75rem,7.4vw,6.25rem)] leading-[0.96]">
          <RisingWords text={title} delay={0.05} className="block" />
          {accent && <RisingWords text={accent} delay={0.2} className="block italic text-plum" />}
        </h1>
        {lead && (
          <Reveal delay={0.35} className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {lead}
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.45} className="mt-9">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
