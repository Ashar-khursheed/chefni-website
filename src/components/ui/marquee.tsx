import { cn } from "@/lib/utils";

function Sprinkle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5 shrink-0 text-berry" fill="currentColor">
      <path d="M12 2c.8 5.2 4.8 9.2 10 10-5.2.8-9.2 4.8-10 10-.8-5.2-4.8-9.2-10-10 5.2-.8 9.2-4.8 10-10Z" />
    </svg>
  );
}

/** Endless horizontal ticker. The list is rendered twice so the loop is seamless. */
export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 pr-8 md:gap-12 md:pr-12">
          <span className="font-display text-3xl italic md:text-5xl">{item}</span>
          <Sprinkle />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
