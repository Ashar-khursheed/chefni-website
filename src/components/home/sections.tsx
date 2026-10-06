import Image from "next/image";

import brandLogo from "@/assets/brand/chefni-logo.png";
import appArt from "@/assets/food/noodle-bowl.webp";
import aryaPhoto from "@/assets/story/arya.png";
import chefAtCothm from "@/assets/story/chef-at-cothm.jpg";
import { CountUp } from "@/components/motion/count-up";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { AvailabilityList } from "@/components/products/availability";
import { ButtonLink, TextLink } from "@/components/ui/button";
import { FacebookIcon, YouTubeIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { StoreBadges } from "@/components/ui/store-badges";
import { tvShows } from "@/lib/experience";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export function WhereToBuy() {
  return (
    <section className="bg-maroon text-paper">
      <div className="scallop text-cream" aria-hidden />
      <div className="container-page py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Where to buy"
            tone="light"
            lead="Chefni is not sold on this website. Here is where each product is available right now."
          >
            Find it in <em className="text-petal">Karachi</em>
          </SectionHeading>
          <Reveal delay={0.1}>
            <ButtonLink href="/where-to-buy" variant="light">
              All the details
            </ButtonLink>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <RevealItem key={product.slug} className="rounded-[2rem] bg-paper/[0.06] p-7 md:p-9">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="text-3xl">{product.name}</h3>
                {product.price && <p className="font-display text-2xl italic text-petal">{product.price.display}</p>}
              </div>
              <AvailabilityList items={product.availability} tone="light" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
      <div className="scallop scallop-up text-cream" aria-hidden />
    </section>
  );
}

export function ChefStory() {
  const years = new Date().getFullYear() - site.founded;

  return (
    <section className="py-24 md:py-36">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-blush">
            <Image
              src={chefAtCothm}
              alt={`${site.chef} in chef whites in a teaching kitchen`}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-[38%_30%]"
            />
          </div>
          <div className="absolute -bottom-6 right-4 rounded-2xl bg-rose px-6 py-4 text-paper shadow-[0_24px_50px_-24px_rgb(112_41_61/0.8)] md:right-8">
            <p className="font-display text-xl italic">As seen on Masala TV</p>
            <p className="mt-1 text-sm text-paper/75">{tvShows.join(" · ")}</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="The chef behind Chefni">
            A chef&rsquo;s kitchen, <em className="text-rose">now in your freezer</em>
          </SectionHeading>

          <Reveal delay={0.1}>
            <blockquote className="mt-8 border-l-2 border-berry pl-6 font-display text-2xl italic leading-snug text-ink-soft">
              &ldquo;Over the years, I was fortunate enough to be exposed to unique work environments and work
              cultures.&rdquo;
            </blockquote>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              Restaurant kitchens, live television and a culinary school classroom all sit behind the Chefni name.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            <RevealItem>
              <p className="font-display text-5xl leading-none md:text-6xl">
                <CountUp value={years} />
              </p>
              <p className="mt-2 text-sm text-ink-soft">years of Chefni</p>
            </RevealItem>
            <RevealItem>
              <p className="font-display text-5xl leading-none md:text-6xl">
                <CountUp value={tvShows.length} />
              </p>
              <p className="mt-2 text-sm text-ink-soft">cooking shows on Masala TV</p>
            </RevealItem>
            <RevealItem>
              <p className="font-display text-5xl leading-none md:text-6xl">
                <CountUp value={2} />
              </p>
              <p className="mt-2 text-sm text-ink-soft">years training chefs at COTHM</p>
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.1} className="mt-10">
            <TextLink href="/about">Read the full story</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FacebookBand() {
  return (
    <section className="container-page pb-24 md:pb-32">
      <Reveal>
        <a
          href={site.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col gap-8 overflow-hidden rounded-[2.5rem] bg-ink px-6 py-12 text-paper md:flex-row md:items-center md:justify-between md:px-16 md:py-16"
        >
          <div aria-hidden className="absolute -right-20 -top-24 size-72 rounded-full bg-berry/25 transition-transform duration-700 ease-out-expo group-hover:scale-125" />
          <div className="relative">
            <p className="eyebrow text-petal">facebook.com/chefni</p>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
              Keep up with Chefni <em className="text-berry">on Facebook</em>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-paper/70">
              Follow the Chefni page for new products and new places to find them.
            </p>
          </div>
          <span className="relative inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-paper px-7 py-4 font-semibold text-ink transition-colors duration-300 group-hover:bg-petal md:self-auto">
            <FacebookIcon className="size-5" />
            Follow Chefni
          </span>
        </a>
      </Reveal>
    </section>
  );
}

export function AryaAndMom() {
  return (
    <section className="container-page">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-blush px-6 py-14 md:px-16 md:py-20">
        <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-berry/15" />
        <div aria-hidden className="absolute -bottom-44 left-[8%] size-72 rounded-full bg-petal/35" />

        <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="mx-auto w-44 -rotate-3 transition-transform duration-700 ease-out-expo hover:rotate-0 md:w-56">
            <Image
              src={aryaPhoto}
              alt="Arya, the young cook from the Arya & Mom videos"
              sizes="224px"
              className="h-auto w-full drop-shadow-[0_24px_30px_rgb(46_26_34/0.25)]"
            />
          </div>

          <div>
            <p className="eyebrow">For little cooks</p>
            <h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
              Join <em className="text-rose">Arya &amp; Mom</em> in the kitchen
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Pancakes, brownies, chocolate chip cookies and cupcakes, made by Arya with a little help from Mom.
              Watch along and make them at home.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/arya-and-mom">Watch the videos</ButtonLink>
              <a
                href={site.social.aryaYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-semibold text-ink transition-colors hover:text-rose"
              >
                <YouTubeIcon className="size-5" />
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function AppComingSoon() {
  return (
    <section id="app" className="container-page py-24 md:py-36">
      <Reveal className="relative grid overflow-hidden rounded-[2.5rem] bg-maroon text-paper lg:grid-cols-[1.15fr_0.85fr]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle,white_1.5px,transparent_1.5px)] [background-size:22px_22px]"
        />

        <div className="relative px-6 py-14 md:px-16 md:py-24">
          <p className="eyebrow text-petal">Coming soon</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.02]">
            Chefni is getting <em className="text-petal">an app</em>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/75">
            We are building the Chefni app for iPhone and Android. It will be on the App Store and Google Play
            soon.
          </p>
          <StoreBadges className="mt-9" />
        </div>

        <div className="relative flex items-end justify-center px-6 lg:pt-16">
          {/* Phone drawn in CSS so there is no mock screenshot to keep in sync. */}
          <div className="relative w-64 translate-y-10 rounded-t-[2.75rem] border-[10px] border-b-0 border-ink bg-cream pb-10 shadow-[0_-30px_80px_-20px_rgb(0_0_0/0.5)] transition-transform duration-700 ease-out-expo hover:translate-y-4">
            <div className="mx-auto mt-2.5 h-5 w-20 rounded-full bg-ink" />
            <div className="px-5 pt-6 text-center text-ink">
              <Image src={brandLogo} alt="" sizes="120px" className="mx-auto h-auto w-28" />
              <div className="mt-5 grid aspect-square place-items-center rounded-3xl bg-blush p-4">
                <Image src={appArt} alt="" sizes="220px" className="h-auto w-full" />
              </div>
              <p className="mt-4 font-display text-lg italic">{site.tagline}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
