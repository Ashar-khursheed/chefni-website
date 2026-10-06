"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type UseScrollOptions,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

import noodleNest from "@/assets/food/noodle-nest.webp";
import pattyTop from "@/assets/food/patty-top.webp";
import { cn } from "@/lib/utils";

export type FoodKind = "patty" | "nest" | "sesame" | "onion" | "chilli" | "carrot";

export type FoodItem = {
  kind: FoodKind;
  /** Horizontal position inside the layer, any CSS length. */
  left: string;
  /** Resting vertical position inside the layer, any CSS length. */
  top: string;
  /** Width, any CSS length. */
  size: string;
  /** Vertical travel across the scroll range, e.g. [-120, 260] px or ["-30vh", "130vh"]. */
  fall: [number, number] | [string, string];
  /** Start angle and how far it turns while falling, in degrees. */
  rotate?: [number, number];
  /** Slice of the scroll progress this item falls during. Defaults to all of it. */
  range?: [number, number];
  /** How many px the item shifts with the mouse. Bigger feels closer. */
  depth?: number;
  className?: string;
};

/**
 * Progress through one slice of a scroll range, clamped to 0..1. Computed in
 * JavaScript on purpose: handing sub-ranges to the browser's native scroll
 * timeline gave wrong in-between values inside pinned sections.
 */
export function useSlice(progress: MotionValue<number>, [start, end]: [number, number]) {
  return useTransform(progress, (value) => Math.min(1, Math.max(0, (value - start) / (end - start))));
}

/** Pointer position as springs in the range -1..1, centred on the viewport. */
export function usePointer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    // Touch screens have no hover position worth following.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      x.set((event.clientX / window.innerWidth) * 2 - 1);
      y.set((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return {
    x: useSpring(x, { stiffness: 50, damping: 16, mass: 0.6 }),
    y: useSpring(y, { stiffness: 50, damping: 16, mass: 0.6 }),
  };
}

function Garnish({ kind }: { kind: Exclude<FoodKind, "patty" | "nest"> }) {
  switch (kind) {
    case "sesame":
      return (
        <svg viewBox="0 0 20 30" className="h-auto w-full" aria-hidden>
          <path d="M10 1c5 5 8 12 8 18a8 8 0 0 1-16 0C2 13 5 6 10 1Z" fill="#f6e3b4" stroke="#d9b86c" strokeWidth="1.5" />
        </svg>
      );
    case "onion":
      return (
        <svg viewBox="0 0 40 40" className="h-auto w-full" aria-hidden>
          <circle cx="20" cy="20" r="14" fill="none" stroke="#6fae4b" strokeWidth="8" />
          <circle cx="20" cy="20" r="14" fill="none" stroke="#b8dc8a" strokeWidth="3" />
        </svg>
      );
    case "chilli":
      return (
        <svg viewBox="0 0 40 40" className="h-auto w-full" aria-hidden>
          <circle cx="20" cy="20" r="15" fill="#f6c9b8" stroke="#d6362b" strokeWidth="7" />
          <g fill="#f3dc9b">
            <ellipse cx="15" cy="17" rx="2" ry="3" />
            <ellipse cx="25" cy="17" rx="2" ry="3" />
            <ellipse cx="20" cy="26" rx="2" ry="3" />
          </g>
        </svg>
      );
    case "carrot":
      return (
        <svg viewBox="0 0 80 18" className="h-auto w-full" aria-hidden>
          <rect x="1" y="1" width="78" height="16" rx="8" fill="#f08a2c" />
          <rect x="8" y="5" width="46" height="3" rx="1.5" fill="#f7b36a" />
        </svg>
      );
  }
}

function Item({
  item,
  progress,
  pointer,
}: {
  item: FoodItem;
  progress: MotionValue<number>;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
}) {
  const [from, turn] = item.rotate ?? [0, 0];
  const depth = item.depth ?? 12;

  const local = useSlice(progress, item.range ?? [0, 1]);
  const y = useTransform(local, [0, 1], item.fall as [string, string]);
  const rotate = useTransform(local, [0, 1], [from, from + turn]);
  const shiftX = useTransform(pointer.x, (value) => value * depth);
  const shiftY = useTransform(pointer.y, (value) => value * depth * 0.6);

  return (
    <motion.div
      className={cn("absolute will-change-transform", item.className)}
      style={{ left: item.left, top: item.top, width: item.size, y, rotate }}
    >
      <motion.div style={{ x: shiftX, y: shiftY }}>
        {item.kind === "patty" || item.kind === "nest" ? (
          <Image
            src={item.kind === "patty" ? pattyTop : noodleNest}
            alt=""
            sizes="160px"
            className="h-auto w-full drop-shadow-[0_18px_18px_rgb(46_26_34/0.28)]"
          />
        ) : (
          <Garnish kind={item.kind} />
        )}
      </motion.div>
    </motion.div>
  );
}

type FloatingFoodProps = {
  items: FoodItem[];
  /** Which part of the page scroll drives the fall. Defaults to the layer crossing the viewport. */
  offset?: UseScrollOptions["offset"];
  /** Drive the fall from someone else's scroll progress, e.g. a pinned parent section. */
  progress?: MotionValue<number>;
  className?: string;
};

/**
 * Decorative layer of food that falls as the page scrolls and leans towards
 * the mouse. It fills its nearest positioned ancestor and ignores clicks.
 */
export function FloatingFood({ items, offset = ["start end", "end start"], progress, className }: FloatingFoodProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const pointer = usePointer();

  return (
    <div ref={ref} aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      {items.map((item, index) => (
        <Item key={index} item={item} progress={progress ?? scrollYProgress} pointer={pointer} />
      ))}
    </div>
  );
}
