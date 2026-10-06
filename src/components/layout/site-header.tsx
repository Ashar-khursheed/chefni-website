"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // The bar stays pinned; it only gains a backdrop once the page has moved.
  useMotionValueEvent(scrollY, "change", (current) => setScrolled(current > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "transition-[background-color,box-shadow,backdrop-filter] duration-500",
            scrolled && !open
              ? "bg-cream/85 shadow-[0_1px_0_0_rgb(46_26_34/0.08)] backdrop-blur-md"
              : "bg-transparent",
          )}
        >
          <div className="container-page flex h-20 items-center justify-between gap-6">
            <Link href="/" aria-label="Chefni home" className="relative z-10 shrink-0" onClick={() => setOpen(false)}>
              <Logo preload className={cn("transition-[height] duration-500", scrolled ? "h-12" : "h-14")} />
            </Link>

            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {nav.map((item) => {
                  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative block rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors",
                          active ? "text-maroon" : "text-ink/75 hover:text-ink",
                        )}
                      >
                        {active && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-blush"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className="relative">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <ButtonLink href="/where-to-buy" className="px-5 py-3">
                  Where to buy
                </ButtonLink>
              </div>
              <button
                type="button"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
                className={cn(
                  "relative z-10 grid size-12 place-items-center rounded-full transition-colors lg:hidden",
                  open ? "bg-paper/10 text-paper" : "bg-ink/5 text-ink",
                )}
              >
                <span className="relative block h-3 w-5">
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300",
                      open && "translate-y-[5.25px] rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-300",
                      open && "-translate-y-[5.25px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-5 pb-10 pt-28 text-paper lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {[{ href: "/", label: "Home" }, ...nav].map((item, index) => (
                  <li key={item.href} className="overflow-hidden border-b border-paper/10">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, delay: 0.12 + index * 0.05, ease: EASE }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={cn(
                          "block py-4 font-display text-4xl",
                          pathname === item.href && "italic text-petal",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="mt-auto flex flex-col gap-4 pt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <ButtonLink href="/where-to-buy" variant="light" onClick={() => setOpen(false)}>
                Where to buy
              </ButtonLink>
              <a href={site.phone.href} className="text-center text-paper/70">
                or call {site.phone.display}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
