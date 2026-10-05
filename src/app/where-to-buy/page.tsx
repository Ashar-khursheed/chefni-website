import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { AvailabilityList } from "@/components/products/availability";
import { breadcrumbJsonLd, JsonLd } from "@/components/seo/json-ld";
import { FacebookIcon, PhoneIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const description = `Where to buy Chefni in Karachi. Plain Egg Noodles are at Fresh Basket for Rs. 450. For Beef Burger Patties, call ${site.phone.display}.`;

export const metadata: Metadata = {
  title: "Where to Buy Chefni in Karachi",
  description,
  alternates: { canonical: "/where-to-buy" },
  openGraph: { title: "Where to buy Chefni", description, url: "/where-to-buy" },
};

export default function WhereToBuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Where to buy"
        title="Find Chefni"
        accent="in Karachi."
        lead="Chefni is not sold through this website. This page lists where each product is available, and it is updated as new stockists come on board."
      />

      <section className="container-page pb-24 md:pb-32">
        <RevealGroup className="grid gap-7 lg:grid-cols-2">
          {products.map((product) => (
            <RevealItem key={product.slug} className="flex flex-col rounded-[2rem] bg-paper p-6 shadow-[0_30px_80px_-50px_rgb(42_17_40/0.35)] md:p-9">
              <div className="flex items-center gap-5">
                <Image
                  src={product.image}
                  alt=""
                  sizes="112px"
                  className="h-auto w-24 shrink-0 rounded-full bg-blush p-2.5 md:w-28"
                />
                <div>
                  <h2 className="text-3xl leading-tight md:text-4xl">{product.name}</h2>
                  {product.price && (
                    <p className="mt-1 font-display text-2xl italic text-berry">{product.price.display}</p>
                  )}
                </div>
              </div>
              <p className="mt-5 text-ink-soft">{product.summary}</p>
              <AvailabilityList items={product.availability} className="mt-6" />
              <Link
                href={`/products/${product.slug}`}
                className="mt-6 self-start border-b border-current pb-0.5 font-semibold text-plum transition-colors hover:text-plum-deep"
              >
                About this product
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 grid gap-8 rounded-[2rem] bg-ink p-8 text-paper md:grid-cols-[1.2fr_1fr] md:items-center md:p-12">
          <div>
            <h2 className="text-3xl md:text-4xl">
              Can&rsquo;t find it <em className="text-butter">on the shelf?</em>
            </h2>
            <p className="mt-3 max-w-lg text-paper/70">
              Call us and we will tell you where it is in stock, or follow our Facebook page for updates.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-2.5 rounded-full bg-paper px-6 py-3.5 font-semibold text-ink transition-colors duration-300 hover:bg-butter"
            >
              <PhoneIcon className="size-5" />
              {site.phone.display}
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-paper/30 px-6 py-3.5 font-semibold transition-colors duration-300 hover:bg-paper hover:text-ink"
            >
              <FacebookIcon className="size-5" />
              Chefni on Facebook
            </a>
          </div>
        </Reveal>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Where to buy", path: "/where-to-buy" }])} />
    </>
  );
}
