"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

import { FloatingFood, useSlice, type FoodItem } from "@/components/food/floating-food";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const FALL: [string, string] = ["-30vh", "125vh"];

// Everything rains through the pinned screen at its own moment and speed.
const rain: FoodItem[] = [
  { kind: "nest", left: "6%", top: "0", size: "clamp(70px, 11vw, 170px)", fall: FALL, range: [0, 0.55], rotate: [-20, 160], depth: 34 },
  { kind: "patty", left: "80%", top: "0", size: "clamp(80px, 12vw, 190px)", fall: FALL, range: [0.05, 0.6], rotate: [15, -140], depth: 40 },
  { kind: "sesame", left: "30%", top: "0", size: "clamp(10px, 1.3vw, 18px)", fall: FALL, range: [0.02, 0.4], rotate: [0, 300], depth: 10 },
  { kind: "onion", left: "64%", top: "0", size: "clamp(22px, 3vw, 44px)", fall: FALL, range: [0.1, 0.5], rotate: [0, 220], depth: 16 },
  { kind: "patty", left: "20%", top: "0", size: "clamp(60px, 8vw, 130px)", fall: FALL, range: [0.3, 0.85], rotate: [-30, 130], depth: 24, className: "max-md:hidden" },
  { kind: "carrot", left: "48%", top: "0", size: "clamp(40px, 6vw, 90px)", fall: FALL, range: [0.22, 0.62], rotate: [30, 250], depth: 14 },
  { kind: "nest", left: "66%", top: "0", size: "clamp(60px, 9vw, 140px)", fall: FALL, range: [0.4, 0.95], rotate: [40, -150], depth: 28 },
  { kind: "chilli", left: "12%", top: "0", size: "clamp(20px, 2.6vw, 38px)", fall: FALL, range: [0.35, 0.75], rotate: [0, -260], depth: 12 },
  { kind: "sesame", left: "88%", top: "0", size: "clamp(10px, 1.3vw, 18px)", fall: FALL, range: [0.45, 0.85], rotate: [40, 380], depth: 10 },
  { kind: "patty", left: "40%", top: "0", size: "clamp(70px, 10vw, 160px)", fall: FALL, range: [0.5, 1], rotate: [10, 190], depth: 36 },
  { kind: "onion", left: "28%", top: "0", size: "clamp(22px, 3vw, 44px)", fall: FALL, range: [0.6, 1], rotate: [0, -200], depth: 16, className: "max-md:hidden" },
  { kind: "nest", left: "86%", top: "0", size: "clamp(50px, 7vw, 110px)", fall: FALL, range: [0.62, 1], rotate: [-10, 170], depth: 22, className: "max-md:hidden" },
  { kind: "carrot", left: "4%", top: "0", size: "clamp(40px, 6vw, 90px)", fall: FALL, range: [0.65, 1], rotate: [-40, 160], depth: 14 },
];

function Word({
  children,
  progress,
  at,
  className,
}: {
  children: string;
  progress: MotionValue<number>;
  /** Scroll progress at which the word drops in. */
  at: number;
  className?: string;
}) {
  const drop = useSlice(progress, [at, at + 0.1]);
  const opacity = useTransform(drop, [0, 0.7], [0, 1]);
  const y = useTransform(drop, [0, 1], ["-0.6em", "0em"]);
  const rotate = useTransform(drop, [0, 1], [-8, 0]);

  return (
    <motion.span className={cn("inline-block max-md:block", className)} style={{ opacity, y, rotate }}>
      {children}
    </motion.span>
  );
}

/**
 * Pinned full-screen scene: while the visitor scrolls, the brand line drops in
 * one word at a time and noodles and patties rain past it.
 */
export function FallScene() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const subline = useSlice(scrollYProgress, [0.72, 0.85]);
  const glow = useTransform(useSlice(scrollYProgress, [0, 1]), [0, 1], [0.6, 1.25]);

  return (
    <section ref={ref} aria-label={`${site.tagline} ${site.promise}.`} className="relative h-[280vh] bg-plum-deep text-paper">
      <div className="scallop absolute inset-x-0 top-0 z-30 text-cream" aria-hidden />
      <div className="scallop scallop-up absolute inset-x-0 bottom-0 z-30 text-cream" aria-hidden />
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute size-[70vmin] rounded-full bg-berry/30 blur-3xl"
          style={{ scale: glow }}
        />

        <div aria-hidden className="relative z-10 px-5 text-center">
          <p className="font-display text-[clamp(4.5rem,15vw,13rem)] leading-[0.92] tracking-tight [font-variation-settings:'SOFT'_100]">
            <Word progress={scrollYProgress} at={0.06}>
              Fine.
            </Word>{" "}
            <Word progress={scrollYProgress} at={0.28} className="italic text-butter">
              Fast.
            </Word>{" "}
            <Word progress={scrollYProgress} at={0.5} className="text-berry">
              Fab.
            </Word>
          </p>
          <motion.p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-paper/80 md:text-base" style={{ opacity: subline }}>
            {site.promise}
          </motion.p>
        </div>

        <FloatingFood items={rain} progress={scrollYProgress} className="z-20" />
      </div>
    </section>
  );
}
