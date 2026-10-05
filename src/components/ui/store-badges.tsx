import type { ReactNode } from "react";

import { AppleIcon, GooglePlayIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type BadgeProps = {
  url: string | null;
  store: string;
  icon: ReactNode;
  tone: "dark" | "light";
};

function Badge({ url, store, icon, tone }: BadgeProps) {
  const className = cn(
    "flex h-14 min-w-44 items-center gap-3 rounded-2xl border px-4 text-left transition-colors duration-300",
    tone === "dark" ? "border-paper/20 bg-paper/5 text-paper" : "border-ink/15 bg-ink text-paper",
    url && (tone === "dark" ? "hover:bg-paper hover:text-ink" : "hover:bg-plum-deep"),
  );

  const content = (
    <>
      {icon}
      <span className="flex flex-col leading-none">
        <span className="text-[0.65rem] uppercase tracking-[0.12em] opacity-70">
          {url ? (store === "App Store" ? "Download on the" : "Get it on") : "Coming soon to"}
        </span>
        <span className="mt-1 text-[1.05rem] font-semibold">{store}</span>
      </span>
    </>
  );

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <span className={className}>{content}</span>
  );
}

/**
 * App Store and Google Play badges. They become real links as soon as
 * NEXT_PUBLIC_APP_STORE_URL / NEXT_PUBLIC_PLAY_STORE_URL are set.
 */
export function StoreBadges({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Badge url={site.apps.ios} store="App Store" tone={tone} icon={<AppleIcon className="size-7 shrink-0" />} />
      <Badge
        url={site.apps.android}
        store="Google Play"
        tone={tone}
        icon={<GooglePlayIcon className="size-6 shrink-0" />}
      />
    </div>
  );
}
