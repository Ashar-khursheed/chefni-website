import type { Metadata } from "next";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { breadcrumbJsonLd, JsonLd } from "@/components/seo/json-ld";
import { Arrow, ButtonLink } from "@/components/ui/button";
import { FacebookIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { site } from "@/lib/site";

const description = `Contact Chefni in Karachi. Call ${site.phone.display}, email ${site.email}, or message the Chefni page on Facebook.`;

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Chefni", description, url: "/contact" },
};

const channels = [
  {
    label: "Call",
    value: site.phone.display,
    note: "Product and stockist questions",
    href: site.phone.href,
    Icon: PhoneIcon,
    external: false,
  },
  {
    label: "Facebook",
    value: "facebook.com/chefni",
    note: "Message us or follow for new launches",
    href: site.social.facebook,
    Icon: FacebookIcon,
    external: true,
  },
  {
    label: "Email",
    value: site.email,
    note: "Trade and retail enquiries",
    href: `mailto:${site.email}`,
    Icon: MailIcon,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to"
        accent="Chefni."
        lead="Want to know where a product is in stock, or stock Chefni in your store? Pick whichever way is easiest."
      >
        <ButtonLink href="/where-to-buy" variant="outline">
          See where to buy
        </ButtonLink>
      </PageHero>

      <section className="container-page pb-24 md:pb-36">
        <RevealGroup className="grid gap-6 md:grid-cols-3">
          {channels.map(({ label, value, note, href, Icon, external }) => (
            <RevealItem key={label}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex h-full flex-col rounded-[2rem] bg-paper p-7 shadow-[0_30px_80px_-50px_rgb(42_17_40/0.35)] transition-colors duration-500 hover:bg-plum hover:text-paper md:p-9"
              >
                <span className="grid size-14 place-items-center rounded-full bg-blush text-plum transition-colors duration-500 group-hover:bg-paper">
                  <Icon className="size-6" />
                </span>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-plum transition-colors duration-500 group-hover:text-butter">
                  {label}
                </p>
                <p className="mt-2 break-words font-display text-[1.7rem] leading-tight">{value}</p>
                <p className="mt-2 text-ink-soft transition-colors duration-500 group-hover:text-paper/75">{note}</p>
                <span className="mt-auto pt-8">
                  <Arrow className="size-5" />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
    </>
  );
}
