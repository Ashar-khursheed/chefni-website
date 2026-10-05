"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

import { usePointer } from "@/components/food/floating-food";
import { cn } from "@/lib/utils";

type ProductArtProps = {
  image: StaticImageData;
  alt: string;
  tone: "blush" | "butter";
  /** Load ahead of everything else. For art that is visible without scrolling. */
  preload?: boolean;
  className?: string;
};

/**
 * Cut-out food photo on a coloured plate. It swings upright as it scrolls into
 * view, bobs gently, and tilts towards the mouse.
 */
export function ProductArt({ image, alt, tone, preload = false, className }: ProductArtProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const rotate = useTransform(progress, [0, 1], [tone === "blush" ? -14 : 14, 0]);
  const scale = useTransform(progress, [0, 1], [0.78, 1]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const pointer = usePointer();
  const x = useTransform(pointer.x, (value) => value * 22);
  const y = useTransform(pointer.y, (value) => value * 14);
  const plateX = useTransform(pointer.x, (value) => value * -10);

  return (
    <div ref={ref} className={cn("relative mx-auto aspect-square w-full max-w-lg", className)}>
      <motion.div
        aria-hidden
        className={cn("absolute inset-[7%] rounded-full", tone === "blush" ? "bg-blush" : "bg-butter/55")}
        style={{ x: plateX, scale }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-full border-2 border-dashed border-plum/25"
        style={{ rotate: ringRotate }}
      />
      <motion.div className="absolute inset-0 grid place-items-center" style={{ x, y, rotate, scale }}>
        <motion.div
          className="w-[88%]"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={image}
            alt={alt}
            preload={preload}
            sizes="(min-width: 1024px) 460px, 80vw"
            className="h-auto w-full drop-shadow-[0_40px_35px_rgb(42_17_40/0.35)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
