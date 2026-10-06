import Link from "next/link";

import { Arrow } from "@/components/ui/button";
import { FacebookIcon, XIcon, YouTubeIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { StoreBadges } from "@/components/ui/store-badges";
import { products } from "@/lib/products";
import { nav, site } from "@/lib/site";

const socials = [
  { href: site.social.facebook, label: "Chefni on Facebook", Icon: FacebookIcon },
  { href: site.social.twitter, label: "Chefni on X", Icon: XIcon },
  { href: site.social.youtube, label: "Chefni on YouTube", Icon: YouTubeIcon },
];

const heading = "mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-paper/50";
const link = "text-paper/80 transition-colors hover:text-petal";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="scallop text-cream" aria-hidden />

      <div className="container-page pb-10 pt-20 md:pt-28">
        <Link href="/where-to-buy" className="group block border-b border-paper/15 pb-14 md:pb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-petal">Looking for Chefni?</p>
          <p className="flex flex-wrap items-end gap-x-6 gap-y-2 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
            See where <em className="text-berry">to buy</em>
            <span className="mb-[0.12em] grid size-[0.7em] place-items-center rounded-full border border-paper/30 transition-colors duration-500 group-hover:border-berry group-hover:bg-berry">
              <Arrow className="size-[0.3em]" />
            </span>
          </p>
        </Link>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <Logo className="h-20" />
            <p className="mt-6 max-w-xs text-paper/65">
              Premium frozen foods from a chef&rsquo;s kitchen in {site.city}. {site.tagline}
            </p>
            <ul className="mt-6 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-paper/20 transition-colors duration-300 hover:border-berry hover:bg-berry"
                  >
                    <Icon className="size-[1.15rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className={heading}>Explore</h2>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={heading}>Products</h2>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`} className={link}>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>Say hello</h2>
            <address className="space-y-3 not-italic text-paper/85">
              <a href={site.phone.href} className="block font-display text-3xl transition-colors hover:text-petal">
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className="block transition-colors hover:text-petal">
                {site.email}
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-paper/65 transition-colors hover:text-petal"
              >
                facebook.com/chefni
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl bg-paper/[0.04] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="font-display text-2xl">The Chefni app is on its way</p>
            <p className="mt-1 text-paper/60">Coming soon to iPhone and Android.</p>
          </div>
          <StoreBadges />
        </div>

        <div className="mt-10 flex flex-col gap-3 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.promise}</p>
        </div>
      </div>
    </footer>
  );
}
