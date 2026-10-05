import type { Metadata } from "next";
import Image from "next/image";

import chefAtCothm from "@/assets/story/chef-at-cothm.jpg";
import chefPortrait from "@/assets/story/chef-portrait.png";
import classMarket from "@/assets/story/cothm-class-market-visit.jpg";
import classPlating from "@/assets/story/cothm-class-plating.jpg";
import classProduce from "@/assets/story/cothm-class-produce.jpg";
import masalaTv from "@/assets/story/masala-tv-food-fantasy.jpg";
import { Timeline } from "@/components/about/timeline";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { breadcrumbJsonLd, JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { tvShows } from "@/lib/experience";
import { site } from "@/lib/site";

const description =
  "Meet the chef behind Chefni: running Chefni since 2005, chef on Masala TV, culinary trainer at COTHM, and pastry chef at Fika and Upper Crust.";

export const metadata: Metadata = {
  title: "Our Chef: Two Decades in Professional Kitchens",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title: "The chef behind Chefni", description, url: "/about" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.chef,
  jobTitle: "Pastry Chef",
  worksFor: { "@id": `${site.url}/#organization` },
  url: `${site.url}/about`,
};

const classPhotos = [
  { src: classMarket, alt: "The chef leading culinary students through a food market" },
  { src: classPlating, alt: "Rows of plated salads prepared by a culinary class" },
  { src: classProduce, alt: "Culinary students choosing fresh produce with their trainer" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our chef"
        title="Restaurants, television,"
        accent="then your freezer."
        lead={`${site.chef} has been cooking under the Chefni name since ${site.founded}. Along the way came restaurant pastry sections, live national television and a classroom of future chefs.`}
      />

      <section className="container-page grid items-start gap-12 pb-24 md:pb-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal className="relative aspect-[5/3] overflow-hidden rounded-[2rem] bg-blush">
          <Image
            src={chefAtCothm}
            alt={`${site.chef} in chef whites in a teaching kitchen`}
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 1024px) 52vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1} className="lg:pt-6">
          <div className="flex items-center gap-4">
            <Image
              src={chefPortrait}
              alt={`Portrait of ${site.chef}`}
              sizes="64px"
              className="size-16 rounded-full object-cover object-top"
            />
            <div>
              <p className="font-display text-2xl">{site.chef}</p>
              <p className="text-sm text-ink-soft">Pastry Chef, Chefni</p>
            </div>
          </div>
          <blockquote className="mt-8 font-display text-[clamp(1.75rem,3.2vw,2.5rem)] italic leading-[1.15]">
            &ldquo;Over the years, I was fortunate enough to be exposed to unique work environments and work
            cultures.&rdquo;
          </blockquote>
          <p className="mt-6 leading-relaxed text-ink-soft">
            That range is the point. What goes into a Chefni pack is decided by someone who has run a restaurant pass,
            cooked to a live broadcast clock and taught the method to a classroom.
          </p>
        </Reveal>
      </section>

      <section className="bg-sand">
        <div className="scallop text-cream" aria-hidden />
        <div className="container-page py-24 md:py-32">
          <SectionHeading eyebrow="Experience">
            The road to <em className="text-plum">this kitchen</em>
          </SectionHeading>
          <div className="mt-14 md:mt-20">
            <Timeline />
          </div>
        </div>
        <div className="scallop scallop-up text-cream" aria-hidden />
      </section>

      <section id="masala-tv" className="container-page grid scroll-mt-28 items-center gap-12 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative aspect-video overflow-hidden rounded-[2rem] bg-ink">
          <Image
            src={masalaTv}
            alt={`${site.chef} presenting Food Fantasy on Masala TV`}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 46vw, 90vw"
            className="object-cover"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="On television"
            lead="Between 2013 and 2014 Chef Rabia cooked on Masala TV in Karachi, on both live and pre-recorded culinary shows."
          >
            Live on <em className="text-plum">Masala TV</em>
          </SectionHeading>
          <RevealGroup className="mt-8 flex flex-wrap gap-2.5">
            {tvShows.map((show) => (
              <RevealItem key={show}>
                <span className="block rounded-full border border-ink/15 px-5 py-2.5 font-display text-lg italic">
                  {show}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="teaching" className="scroll-mt-28 bg-plum-deep text-paper">
        <div className="scallop text-cream" aria-hidden />
        <div className="container-page py-24 md:py-32">
          <SectionHeading
            eyebrow="In the classroom"
            tone="light"
            lead="At COTHM, the College of Tourism & Hotel Management in Karachi, Chef Rabia trained students on the Advanced Culinary Program and developed its curriculum. Class did not always stay in the classroom."
          >
            Teaching the <em className="text-butter">next class of chefs</em>
          </SectionHeading>

          <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-3">
            {classPhotos.map((photo, index) => (
              <RevealItem key={photo.alt} className={index === 1 ? "sm:translate-y-10" : undefined}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 640px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        <div className="scallop scallop-up mt-10 text-cream" aria-hidden />
      </section>

      <section id="fika" className="container-page scroll-mt-28 py-24 text-center md:py-32">
        <Reveal className="mx-auto max-w-3xl">
          <p className="eyebrow">Fika · Upper Crust · P.F. Chang&rsquo;s</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5.4vw,4.5rem)] leading-[1.02]">
            Restaurant standards, <em className="text-plum">home kitchens</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Chef and pastry chef at Fika, pastry chef and operations manager at Upper Crust, kitchen manager for
            research and development at P.F. Chang&rsquo;s Pakistan. What those kitchens taught now goes into
            every Chefni product.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/products">See the products</ButtonLink>
            <ButtonLink href="/where-to-buy" variant="outline" arrow={false}>
              Where to buy
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <JsonLd data={[personJsonLd, breadcrumbJsonLd([{ name: "Our chef", path: "/about" }])]} />
    </>
  );
}
