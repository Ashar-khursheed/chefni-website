import Image from "next/image";

import logo from "@/assets/brand/chefni-logo.png";
import { cn } from "@/lib/utils";

export function Logo({ className, preload = false }: { className?: string; preload?: boolean }) {
  return (
    <Image
      src={logo}
      alt="Chefni"
      preload={preload}
      sizes="160px"
      className={cn("h-14 w-auto", className)}
    />
  );
}
