"use client";

import { motion } from "motion/react";
import Image from "next/image";

import noodleBowl from "@/assets/food/noodle-bowl.webp";
import pattyStack from "@/assets/food/patty-stack.webp";
import { RisingWords } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky via-[#b9d9f1] to-mist pt-28 md:pt-32">
      <div className="container-page relative grid items-center gap-10 pb-0 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <div className="relative z-10 text-center lg:pb-24 lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="stitch inline-block rounded-md bg-petal px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-paper"
          >
            {site.tagline}
          </motion.p>
          <h1 className="mt-6 text-[clamp(2.2rem,4.2vw,3.6rem)] leading-[1.08] text-ink">
            <RisingWords text="Elevate your home cooking." className="block" delay={0.05} />
            <RisingWords text="Chef-crafted, convenient, exquisite." className="block italic text-rose" delay={0.25} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink/80 lg:mx-0"
          >
            Restaurant-quality food from a chef&rsquo;s kitchen in {site.city}, ready in minutes. Experience
            premium convenience today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
            className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <ButtonLink href="/products" className="px-8 py-4 uppercase tracking-[0.08em]">
              Discover our menu
            </ButtonLink>
            <ButtonLink href="/where-to-buy" variant="light" arrow={false} className="px-8 py-4">
              Find a store
            </ButtonLink>
          </motion.div>
        </div>

        {/* The food sits on a pale "counter" that runs into the next section. */}
        <div className="relative mx-auto aspect-[6/5] w-full max-w-xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            className="absolute bottom-[6%] left-0 w-[62%] drop-shadow-[0_30px_30px_rgb(61_38_48/0.25)]"
          >
            <Image
              src={pattyStack}
              alt="Serving suggestion: a stack of grilled Chefni beef burger patties"
              preload
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="h-auto w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            className="absolute bottom-[2%] right-0 w-[66%] drop-shadow-[0_30px_30px_rgb(61_38_48/0.25)]"
          >
            <Image
              src={noodleBowl}
              alt="Serving suggestion: a bowl of stir-fried Chefni egg noodles"
              preload
              sizes="(min-width: 1024px) 32vw, 64vw"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
