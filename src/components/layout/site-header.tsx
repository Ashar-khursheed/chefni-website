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

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // The bar stays pinned and powder blue; it only tightens and gains a shadow once the page has moved.
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
            "bg-sky/95 backdrop-blur-md transition-shadow duration-500",
            scrolled && !open && "shadow-[0_10px_30px_-18px_rgb(61_38_48/0.45)]",
          )}
        >
          <div
            className={cn(
              "container-page flex items-center justify-between gap-6 transition-[height] duration-500",
              scrolled ? "h-16" : "h-20",
            )}
          >
            <Link href="/" aria-label="Chefni home" className="relative z-10 shrink-0" onClick={() => setOpen(false)}>
              <Logo preload className={cn("transition-[height] duration-500", scrolled ? "h-11" : "h-14")} />
            </Link>

            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative block px-3.5 py-2 text-[0.95rem] font-semibold transition-colors",
                          active ? "text-rose" : "text-ink/80 hover:text-ink",
                        )}
                      >
                        {item.label}
                        {active && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-rose"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <ButtonLink href="/where-to-buy" arrow={false} className="px-6 py-3 uppercase tracking-[0.08em]">
                  Order now
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
                  open ? "bg-paper/15 text-paper" : "bg-paper/45 text-ink",
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
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-maroon px-5 pb-10 pt-28 text-paper lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {[...nav, { href: "/contact", label: "Contact" }].map((item, index) => (
                  <li key={item.href} className="overflow-hidden border-b border-paper/15">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, delay: 0.12 + index * 0.05, ease: EASE }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(pathname, item.href) ? "page" : undefined}
                        className={cn(
                          "block py-4 font-display text-4xl",
                          isActive(pathname, item.href) && "italic text-blush",
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
                Order now
              </ButtonLink>
              <a href={site.phone.href} className="text-center text-paper/80">
                or call {site.phone.display}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
