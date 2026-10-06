"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { experience } from "@/lib/experience";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Career timeline whose spine fills in as the reader scrolls through it. */
export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-ink/12 md:left-[calc(11rem+5px)]" />
      <motion.span
        aria-hidden
        className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-berry md:left-[calc(11rem+5px)]"
        style={{ scaleY: progress }}
      />

      {experience.map((role, index) => (
        <motion.li
          key={`${role.place}-${role.period}`}
          className="relative grid gap-x-10 pb-12 pl-9 last:pb-0 md:grid-cols-[11rem_1fr] md:pl-0"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.8, delay: index === 0 ? 0 : 0.05, ease: EASE }}
        >
          <span
            aria-hidden
            className="absolute left-0 top-2 size-[11px] rounded-full border-2 border-berry bg-cream md:left-[11rem]"
          />
          <p className="font-display text-lg italic text-rose md:pr-6 md:text-right">{role.period}</p>
          <div className="md:pl-10">
            <h3 className="text-2xl leading-snug md:text-3xl">{role.place}</h3>
            <p className="mt-1.5 font-medium">{role.title}</p>
            <p className="text-sm text-ink-soft">{role.location}</p>
            {role.detail && <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{role.detail}</p>}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
