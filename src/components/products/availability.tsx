import { PhoneIcon, PinIcon } from "@/components/ui/icons";
import type { Availability } from "@/lib/products";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** "Where to find it" rows: a stockist, or the number to call when none is listed. */
export function AvailabilityList({
  items,
  tone = "ink",
  className,
}: {
  items: Availability[];
  tone?: "ink" | "light";
  className?: string;
}) {
  const light = tone === "light";
  const row = cn(
    "flex items-center gap-4 rounded-2xl border px-5 py-4",
    light ? "border-paper/15 bg-paper/5" : "border-ink/10 bg-paper",
  );
  const badge = cn(
    "grid size-11 shrink-0 place-items-center rounded-full",
    light ? "bg-petal text-ink" : "bg-rose text-paper",
  );
  const note = cn("text-sm", light ? "text-paper/65" : "text-ink-soft");

  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) =>
        item.kind === "store" ? (
          <li key={`${item.name}-${item.city}`} className={row}>
            <span className={badge}>
              <PinIcon className="size-5" />
            </span>
            <span>
              <span className="block font-display text-xl leading-tight">
                {item.name}, {item.city}
              </span>
              {item.note && <span className={note}>{item.note}</span>}
            </span>
          </li>
        ) : (
          <li key="phone">
            <a href={site.phone.href} className={cn(row, "transition-colors", light ? "hover:bg-paper/10" : "hover:border-rose")}>
              <span className={badge}>
                <PhoneIcon className="size-5" />
              </span>
              <span>
                <span className="block font-display text-xl leading-tight">{site.phone.display}</span>
                <span className={note}>{item.note}</span>
              </span>
            </a>
          </li>
        ),
      )}
    </ul>
  );
}
