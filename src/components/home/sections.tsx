import Image from "next/image";
import Link from "next/link";

import chefAtCothm from "@/assets/story/chef-at-cothm.jpg";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ButtonLink, TextLink } from "@/components/ui/button";
import {
  CartIcon,
  ChefHatIcon,
  FacebookIcon,
  PanIcon,
  PlateIcon,
  QuoteIcon,
  SparkleIcon,
  TimerIcon,
  TruckIcon,
} from "@/components/ui/icons";
import { KarachiMap } from "@/components/ui/karachi-map";
import { StoreBadges } from "@/components/ui/store-badges";
import { products } from "@/lib/products";
import { site, testimonials } from "@/lib/site";
import { stockists } from "@/lib/stockists";
import { cn } from "@/lib/utils";

const card = "rounded-[1.75rem] bg-paper shadow-[0_24px_60px_-36px_rgb(61_38_48/0.4)]";

/* Featured products beside "The Chefni Difference", on the pink wash. */
export function FeaturedAndDifference() {
  const differences = [
    {
      title: "Convenience",
      body: "Fully cooked and frozen, so dinner is minutes away, not hours.",
      Icon: TimerIcon,
    },
    {
      title: "Chef-crafted",
      body: `Developed by ${site.chef}, with two decades in professional kitchens.`,
      Icon: ChefHatIcon,
    },
    {
      title: "Easy retail",
      body: `On the shelf in ${site.city}, or a phone call away.`,
      Icon: TruckIcon,
    },
  ];

  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-page grid gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <div>
          <Reveal>
            <h2 className="section-title">Featured products</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {products.map((product) => {
              const inStore = product.availability.some((item) => item.kind === "store");
              return (
                <RevealItem key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className={cn(card, "group flex h-full flex-col items-center p-4 pb-6 text-center transition-transform duration-500 ease-out-expo hover:-translate-y-1.5")}
                  >
                    <span className="self-start rounded-full bg-petal px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-paper">
                      {inStore ? "In stores" : "New"}
                    </span>
                    <span className="relative mt-2 grid aspect-square w-full place-items-center rounded-2xl bg-blush/70">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        sizes="(min-width: 1024px) 14vw, (min-width: 640px) 28vw, 80vw"
                        className="h-auto w-[86%] transition-transform duration-700 ease-out-expo group-hover:scale-105"
                      />
                    </span>
                    <span className="mt-4 font-display text-xl leading-tight">{product.name}</span>
                    {product.price && <span className="mt-1 text-sm text-ink-soft">{product.price.display}</span>}
                    <span className="mt-auto pt-4">
                      <span className="inline-block rounded-full bg-maroon px-4 py-1.5 text-xs font-semibold text-paper transition-colors group-hover:bg-rose">
                        Shop now
                      </span>
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
            <RevealItem>
              <div className="flex h-full min-h-56 flex-col items-center justify-center rounded-[1.75rem] border-2 border-dashed border-petal/70 p-6 text-center">
                <SparkleIcon className="size-8 text-petal" />
                <p className="mt-4 font-display text-xl leading-tight">More on the way</p>
                <p className="mt-2 text-sm text-ink-soft">New Chefni products are being prepared.</p>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>

        <div>
          <Reveal>
            <h2 className="section-title">The Chefni difference</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-3 lg:gap-5">
            {differences.map(({ title, body, Icon }) => (
              <RevealItem key={title} className="text-center">
                <span className="mx-auto grid size-20 place-items-center rounded-full border-2 border-petal/60 bg-paper text-rose">
                  <Icon className="size-9" />
                </span>
                <h3 className="mt-5 font-sans text-lg font-semibold tracking-normal">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

/* "How to order & enjoy" steps beside "Find Chefni near you". */
export function OrderAndFind() {
  const steps = [
    { title: "Pick your meal", body: "Choose noodles, patties or both from the Chefni range.", Icon: CartIcon },
    { title: "Cook with ease", body: "Straight from the freezer to the pan, in minutes.", Icon: PanIcon },
    { title: "Serve & enjoy", body: "Plate it up and bring gourmet quality to every home.", Icon: PlateIcon },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        <div>
          <Reveal>
            <h2 className="section-title">How to order &amp; enjoy</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-6">
            {steps.map(({ title, body, Icon }, index) => (
              <RevealItem key={title} className="text-center">
                <span className="relative mx-auto grid size-24 place-items-center rounded-full bg-blush text-rose">
                  <Icon className="size-10" />
                  <span className="absolute -left-1 -top-1 grid size-8 place-items-center rounded-full bg-berry text-sm font-bold text-paper">
                    {index + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-sans text-lg font-semibold tracking-normal">{title}</h3>
                <p className="mx-auto mt-2 max-w-56 text-sm leading-relaxed text-ink-soft">{body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div id="find" className="scroll-mt-28">
          <Reveal>
            <h2 className="section-title">Find Chefni near you</h2>
          </Reveal>
          <Reveal delay={0.1} className={cn(card, "mt-10 overflow-hidden p-2")}>
            <KarachiMap pins={stockists} className="rounded-[1.4rem]" />
          </Reveal>
          <Reveal delay={0.2} className="mt-6 text-center">
            <p className="flex flex-wrap justify-center gap-x-6 gap-y-1 font-display text-2xl text-maroon">
              {stockists.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </p>
            <p className="mt-1 text-sm text-ink-soft">or call {site.phone.display} to find the nearest stock</p>
            <TextLink href="/where-to-buy" className="mt-5">
              Visit store
            </TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Teaser row for the upcoming Chefni AI. */
export function ChefniAi() {
  return (
    <section className="px-4 py-6 md:px-6">
      <Reveal className="relative mx-auto max-w-[80rem] overflow-hidden rounded-[2.25rem] bg-sky px-6 py-14 text-center md:px-12 md:py-20">
        <SparkleIcon aria-hidden className="absolute left-[8%] top-[18%] size-10 text-paper/70" />
        <SparkleIcon aria-hidden className="absolute bottom-[14%] right-[9%] size-14 text-petal/80" />
        <SparkleIcon aria-hidden className="absolute right-[22%] top-[12%] size-6 text-paper/60" />
        <p className="stitch inline-block rounded-md bg-rose px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-paper">
          Soon to come
        </p>
        <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-ink">
          Chefni <em className="text-paper [text-shadow:0_2px_0_var(--color-rose)]">AI</em>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/80">
          A smart kitchen companion from Chefni is on its way: meal ideas for what is in your freezer,
          cooking help for every pack and the nearest place to buy, all in one app.
        </p>
        <StoreBadges tone="light" className="mt-9 justify-center" />
      </Reveal>
    </section>
  );
}

/* Simple line drawing of a Karachi skyline, used as a quiet accent. */
function Skyline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 90" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M0 88h260" />
      <path d="M14 88V52h18v36M40 88V30h14v58M60 88V44h20v44" />
      {/* domed mausoleum */}
      <path d="M96 88V62h52v26M100 62c0-16 10-26 22-26s22 10 22 26M122 36v-8M106 62h32" />
      <path d="M160 88V20l8-8 8 8v68M168 12V4M186 88V40h16v48M210 88V54h14v34M232 88V34l10-6v60" />
    </svg>
  );
}

export function OurStory() {
  return (
    <section className="relative overflow-hidden bg-sand py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="section-title">
            Our story: rooted in {site.city}, <em className="text-rose">crafted for every home</em>
          </h2>
        </Reveal>
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <Reveal className="relative aspect-[5/3] overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-36px_rgb(61_38_48/0.5)]">
            <Image
              src={chefAtCothm}
              alt={`${site.chef} in chef whites in a teaching kitchen`}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <p className="font-display text-2xl italic text-maroon">
              Founded by {site.chef} in {site.city}.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Chef Rabia has been cooking under the Chefni name since {site.founded}. Restaurant pastry sections,
              live cooking on Masala TV and years training future chefs at COTHM all lead here: bringing gourmet
              quality to every home, one freezer-ready pack at a time.
            </p>
            <ButtonLink href="/about" variant="outline" className="mt-7">
              Read our story
            </ButtonLink>
            <Skyline className="mt-8 ml-auto w-56 text-petal md:absolute md:-bottom-24 md:right-0 md:mt-0" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="section-title">Voices of our customers</h2>
        </Reveal>

        {testimonials.length > 0 ? (
          <RevealGroup className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {testimonials.map((review) => (
              <RevealItem key={review.name}>
                <figure className={cn(card, "relative h-full p-7")}>
                  <QuoteIcon className="absolute bottom-5 right-6 size-7 text-petal/60" />
                  <figcaption className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-blush font-display text-lg text-rose">
                      {review.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-semibold">{review.name}</span>
                      {review.detail && <span className="text-sm text-ink-soft">{review.detail}</span>}
                    </span>
                  </figcaption>
                  <blockquote className="mt-4 leading-relaxed text-ink/85">&ldquo;{review.quote}&rdquo;</blockquote>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <Reveal delay={0.1} className={cn(card, "mx-auto mt-12 flex max-w-2xl flex-col items-center p-8 text-center md:p-10")}>
            <QuoteIcon className="size-9 text-petal" />
            <p className="mt-4 font-display text-2xl">Tried Chefni? We would love to hear from you.</p>
            <p className="mt-2 text-ink-soft">Share your review on our Facebook page and it may appear here.</p>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-rose px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-maroon"
            >
              <FacebookIcon className="size-5" />
              Leave a review
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
