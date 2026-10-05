"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

/** Counts from zero to `value` the first time it scrolls into view. */
export function CountUp({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = String(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  // The real number is in the markup, so it is correct without JavaScript too.
  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
