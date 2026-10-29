import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { breadcrumbJsonLd, JsonLd } from "@/components/seo/json-ld";
import { ClockIcon } from "@/components/ui/icons";
import { PageHero } from "@/components/ui/page-hero";
import { getProduct } from "@/lib/products";
import { recipes } from "@/lib/recipes";

const description =
  "Quick recipes with Chefni: veg stir-fry and chilli garlic noodles with Plain Egg Noodles, and a classic burger with Beef Burger Patties.";

export const metadata: Metadata = {
  title: "Recipes",
  description,
  alternates: { canonical: "/recipes" },
  openGraph: { title: "Recipes with Chefni", description, url: "/recipes" },
};

export default function RecipesPage() {
  return (
    <>
      <PageHero
        eyebrow="Recipes"
        title="Easy ideas,"
        accent="ready in minutes."
        lead="Chefni does the slow part. These are a few simple ways to turn a pack from the freezer into dinner."
      />

      <section className="container-page space-y-8 pb-24 md:space-y-10 md:pb-32">
        {recipes.map((recipe) => {
          const product = getProduct(recipe.product);
          return (
            <Reveal key={recipe.slug}>
              <article
                id={recipe.slug}
                className="grid scroll-mt-28 gap-8 rounded-[2rem] bg-paper p-6 shadow-[0_30px_80px_-50px_rgb(61_38_48/0.35)] md:grid-cols-[16rem_1fr] md:p-10"
              >
                {product && (
                  <div className="flex flex-col items-center text-center md:items-start md:text-left">
                    <span className="grid aspect-square w-48 place-items-center rounded-full bg-blush md:w-full">
                      <Image src={product.image} alt="" sizes="256px" className="h-auto w-[84%]" />
                    </span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-4 text-sm font-semibold text-rose transition-colors hover:text-maroon"
                    >
                      Made with {product.name}
                    </Link>
                  </div>
                )}
                <div>
                  <h2 className="text-3xl leading-tight md:text-4xl">{recipe.title}</h2>
                  <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink-soft">
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon className="size-4 text-rose" />
                      {recipe.time}
                    </span>
                    <span>Serves {recipe.serves}</span>
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-soft">{recipe.intro}</p>
                  <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <h3 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-maroon">
                        You need
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {recipe.ingredients.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-petal" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-maroon">Method</h3>
                      <ol className="mt-3 space-y-3">
                        {recipe.steps.map((step, index) => (
                          <li key={step} className="flex gap-3">
                            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sky text-sm font-bold text-ink">
                              {index + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Recipes", path: "/recipes" }])} />
    </>
  );
}
