import { useId } from "react";

import { cn } from "@/lib/utils";

/** Rotating round stamp that carries the brand lines from the packaging. */
export function Stamp({ className }: { className?: string }) {
  const id = useId();

  return (
    <div className={cn("relative grid size-32 place-items-center rounded-full bg-berry text-paper", className)} aria-hidden>
      <svg viewBox="0 0 120 120" className="absolute inset-0 size-full animate-spin-slow">
        <defs>
          <path id={id} d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
        </defs>
        <text fill="currentColor" fontSize="9.4" fontWeight="600" textLength="270">
          <textPath href={`#${id}`}>FINE · FAST · FAB · SOLELY PREMIUM FOR YOU ·</textPath>
        </text>
      </svg>
      <span className="font-display text-[1.6rem] italic leading-none">
        est.
        <br />
        2005
      </span>
    </div>
  );
}
