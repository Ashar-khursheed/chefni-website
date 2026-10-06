import type { Metadata } from "next";
import Image from "next/image";

import aryaPhoto from "@/assets/story/arya.png";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { breadcrumbJsonLd, JsonLd } from "@/components/seo/json-ld";
import { YouTubeIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { LiteYouTube } from "@/components/video/lite-youtube";
import { aryaVideos } from "@/lib/experience";
import { site } from "@/lib/site";

const description =
  "Arya & Mom: easy cooking and baking videos for kids and parents. Pancakes, brownies, chocolate chip cookies and cupcakes, made by Arya with a little help from Mom.";

export const metadata: Metadata = {
  title: "Arya & Mom: Cooking Videos for Kids",
  description,
  alternates: { canonical: "/arya-and-mom" },
  openGraph: { title: "Arya & Mom", description, url: "/arya-and-mom" },
};

const [featured, ...rest] = aryaVideos;

const subscribe =
  "inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition-colors duration-300 hover:bg-berry";

export default function AryaAndMomPage() {
  return (
    <>
      <PageHero
        eyebrow="Arya & Mom"
        title="Small hands,"
        accent="big mixing bowls."
        lead="Arya bakes, Mom helps, and the camera keeps rolling. Pick a recipe, press play and bake along at home."
      >
        <a href={site.social.aryaYoutube} target="_blank" rel="noopener noreferrer" className={subscribe}>
          <YouTubeIcon className="size-5" />
          Subscribe for more
        </a>
      </PageHero>

      <section className="container-page pb-24 md:pb-32">
        <h2 className="sr-only">Check out my videos</h2>

        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            <LiteYouTube id={featured.id} title={featured.title} eager className="rounded-[2rem]" />
          </Reveal>
          <Reveal delay={0.1} className="flex items-center gap-6 lg:flex-col lg:items-start">
            <Image
              src={aryaPhoto}
              alt="Arya, dressed up with a painted moustache and a hat"
              sizes="160px"
              className="h-auto w-28 shrink-0 -rotate-3 lg:w-40"
            />
            <div>
              <p className="eyebrow">Start here</p>
              <h3 className="mt-3 text-3xl leading-tight md:text-4xl">{featured.title}</h3>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-x-7 gap-y-12 sm:grid-cols-2 md:mt-24">
          {rest.map((video) => (
            <RevealItem key={video.id}>
              <LiteYouTube id={video.id} title={video.title} />
              <h3 className="mt-4 text-2xl">{video.title}</h3>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-blush p-8 md:mt-28 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="text-3xl md:text-4xl">
              New videos land on <em className="text-rose">YouTube first</em>
            </h2>
            <p className="mt-3 text-ink-soft">
              Say hello to Arya at{" "}
              <a href={`mailto:${site.aryaEmail}`} className="font-semibold text-rose underline underline-offset-4">
                {site.aryaEmail}
              </a>
              .
            </p>
          </div>
          <a href={site.social.aryaYoutube} target="_blank" rel="noopener noreferrer" className={`${subscribe} shrink-0`}>
            <YouTubeIcon className="size-5" />
            Subscribe on YouTube
          </a>
        </Reveal>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Arya & Mom", path: "/arya-and-mom" }])} />
    </>
  );
}
