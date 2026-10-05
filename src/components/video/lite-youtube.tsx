"use client";

import Image from "next/image";
import { useState } from "react";

import { PlayIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type LiteYouTubeProps = {
  id: string;
  title: string;
  /** Set for a poster that is visible without scrolling. */
  eager?: boolean;
  className?: string;
};

/**
 * Shows only the video poster until it is clicked, so the page does not pay
 * for a YouTube player (and its cookies) for videos nobody watches.
 */
export function LiteYouTube({ id, title, eager = false, className }: LiteYouTubeProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-[1.5rem] bg-ink", className)}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 size-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            fill
            unoptimized
            loading={eager ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-plum shadow-xl transition-transform duration-500 ease-out-expo group-hover:scale-110 md:size-20">
            <PlayIcon className="size-7 translate-x-0.5 md:size-8" />
          </span>
        </button>
      )}
    </div>
  );
}
