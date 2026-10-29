import Link from "next/link";

import { FacebookIcon, MailIcon, PhoneIcon, PinIcon, XIcon, YouTubeIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { products } from "@/lib/products";
import { nav, site } from "@/lib/site";

const socials = [
  { href: site.social.facebook, label: "Chefni on Facebook", Icon: FacebookIcon },
  { href: site.social.twitter, label: "Chefni on X", Icon: XIcon },
  { href: site.social.youtube, label: "Chefni on YouTube", Icon: YouTubeIcon },
];

const heading = "mb-4 font-sans text-base font-bold tracking-normal text-ink";
const link = "text-ink/75 transition-colors hover:text-rose";

export function SiteFooter() {
  return (
    <footer className="bg-sky text-ink">
      <div className="container-page pb-8 pt-16 md:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_1fr_1fr] lg:gap-10">
          <div>
            <Logo className="h-24" />
            <p className="mt-5 max-w-xs text-ink/75">
              Premium frozen foods from a chef&rsquo;s kitchen in {site.city}. {site.promise}.
            </p>
            <h2 className={`${heading} mt-7`}>Connect with us</h2>
            <ul className="flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full bg-paper/60 text-ink transition-colors duration-300 hover:bg-rose hover:text-paper"
                  >
                    <Icon className="size-[1.15rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={heading}>Contact us</h2>
            <address className="space-y-3 not-italic">
              <p className="flex gap-3 text-ink/75">
                <PinIcon className="mt-0.5 size-5 shrink-0 text-rose" />
                {site.city}, Pakistan
              </p>
              <a href={site.phone.href} className={`flex gap-3 ${link}`}>
                <PhoneIcon className="mt-0.5 size-5 shrink-0 text-rose" />
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className={`flex gap-3 ${link}`}>
                <MailIcon className="mt-0.5 size-5 shrink-0 text-rose" />
                {site.email}
              </a>
            </address>
          </div>

          <nav aria-label="Footer">
            <h2 className={heading}>Quick links</h2>
            <ul className="space-y-2.5">
              {[...nav, { href: "/contact", label: "Contact" }].map((item) => (
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
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`} className={link}>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ink/15 pt-6 text-sm text-ink/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.2em]">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
