"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import noodleBowl from "@/assets/food/noodle-bowl.webp";
import pattyStack from "@/assets/food/patty-stack.webp";
import { FloatingFood, usePointer, type FoodItem } from "@/components/food/floating-food";
import { RisingWords } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { FacebookIcon, PinIcon } from "@/components/ui/icons";
import { Stamp } from "@/components/ui/stamp";
import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

// Loose ingredients around the hero that drop away as the page scrolls.
const crumbs: FoodItem[] = [
  { kind: "nest", left: "44%", top: "10%", size: "clamp(48px, 6vw, 96px)", fall: [0, 620], rotate: [-18, 150], depth: 30, className: "max-lg:hidden" },
  { kind: "patty", left: "93%", top: "64%", size: "clamp(56px, 7vw, 110px)", fall: [0, 520], rotate: [20, -120], depth: 36, className: "max-lg:hidden" },
  { kind: "sesame", left: "52%", top: "30%", size: "14px", fall: [0, 760], rotate: [20, 320], depth: 14 },
  { kind: "sesame", left: "90%", top: "14%", size: "12px", fall: [0, 900], rotate: [-30, 260], depth: 10 },
  { kind: "onion", left: "47%", top: "74%", size: "clamp(22px, 2.4vw, 36px)", fall: [0, 480], rotate: [0, 200], depth: 20 },
  { kind: "chilli", left: "97%", top: "38%", size: "clamp(20px, 2.2vw, 32px)", fall: [0, 680], rotate: [0, -240], depth: 18, className: "max-md:hidden" },
  { kind: "carrot", left: "56%", top: "90%", size: "clamp(44px, 5vw, 76px)", fall: [0, 360], rotate: [-24, 120], depth: 16, className: "max-md:hidden" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bowlY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const stackY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const stackRotate = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const stampY = useTransform(scrollYProgress, [0, 1], [0, -110]);

  const pointer = usePointer();
  const bowlX = useTransform(pointer.x, (value) => value * 18);
  const bowlTilt = useTransform(pointer.x, (value) => value * 3);
  const stackX = useTransform(pointer.x, (value) => value * -30);
  const stackShift = useTransform(pointer.y, (value) => value * -18);
  const plateX = useTransform(pointer.x, (value) => value * -8);

  return (
    <section ref={ref} className="relative overflow-x-clip pb-20 pt-32 md:pb-28 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 size-[44rem] rounded-full bg-blush/70 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="relative z-10">
          <motion.p className="eyebrow" {...fadeUp(0.05)}>
            Chefni · Fine. Fast. Fab.
          </motion.p>

          <h1 className="mt-6 text-[clamp(2.5rem,5.5vw,5rem)] leading-[1]">
            <RisingWords text="Frozen favourites," delay={0.1} className="block" />
            <RisingWords text="solely premium for you." delay={0.28} className="block italic text-rose" />
          </h1>

          <motion.p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl" {...fadeUp(0.55)}>
            Fully cooked Plain Egg Noodles and juicy Beef Burger Patties from the Chefni kitchen, frozen so they
            are ready whenever you are.
          </motion.p>

          <motion.div className="mt-9 flex flex-wrap items-center gap-3" {...fadeUp(0.68)}>
            <ButtonLink href="/where-to-buy">Where to buy</ButtonLink>
            <ButtonLink href="/products" variant="outline" arrow={false}>
              See the products
            </ButtonLink>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink/10 pt-6 text-sm font-medium"
            {...fadeUp(0.8)}
          >
            <span className="inline-flex items-center gap-2">
              <PinIcon className="size-4 text-rose" />
              Now at Fresh Basket, Karachi
            </span>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-rose"
            >
              <FacebookIcon className="size-4 text-rose" />
              Follow on Facebook
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          <motion.div
            aria-hidden
            className="absolute inset-[4%] rounded-full bg-gradient-to-br from-blush via-blush to-petal/70"
            style={{ x: plateX }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
          />
          <div aria-hidden className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-rose/20" />

          <motion.div className="absolute left-[-2%] top-[2%] w-[84%]" style={{ y: bowlY, x: bowlX, rotate: bowlTilt }}>
            <motion.div
              initial={{ y: -260, opacity: 0, rotate: -18 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 11, delay: 0.35 }}
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
                <Image
                  src={noodleBowl}
                  alt="A bowl of stir-fried egg noodles with vegetables, chopsticks lifting a twirl of noodles"
                  preload
                  sizes="(min-width: 1024px) 40vw, 80vw"
                  className="h-auto w-full drop-shadow-[0_40px_35px_rgb(46_26_34/0.35)]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-[-6%] right-[-4%] w-[46%]"
            style={{ y: stackY, x: stackX, rotate: stackRotate }}
          >
            <motion.div style={{ y: stackShift }}>
              <motion.div
                initial={{ y: -320, opacity: 0, rotate: 24 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.6 }}
              >
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                  <Image
                    src={pattyStack}
                    alt="A stack of three grilled beef burger patties on lettuce"
                    preload
                    sizes="(min-width: 1024px) 22vw, 44vw"
                    className="h-auto w-full drop-shadow-[0_30px_28px_rgb(46_26_34/0.4)]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -left-2 bottom-[2%] sm:left-[-4%]"
            style={{ y: stampY }}
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1.05, ease: EASE }}
          >
            <Stamp className="size-24 sm:size-32" />
          </motion.div>
        </div>
      </div>

      {/* On one column these would sit on top of the copy, so they are desktop only. */}
      <FloatingFood items={crumbs} offset={["start start", "end start"]} className="max-lg:hidden" />
    </section>
  );
}
