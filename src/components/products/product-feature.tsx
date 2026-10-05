import { FloatingFood } from "@/components/food/floating-food";
import { ProductArt } from "@/components/food/product-art";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { AvailabilityList } from "@/components/products/availability";
import { TextLink } from "@/components/ui/button";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductFeatureProps = {
  product: Product;
  /** Put the artwork on the right instead of the left. */
  flip?: boolean;
  /** Link through to the product page. Off on the product page itself. */
  link?: boolean;
  headingLevel?: "h1" | "h2";
};

export function ProductFeature({ product, flip = false, link = true, headingLevel = "h2" }: ProductFeatureProps) {
  const Heading = headingLevel;

  return (
    <article id={product.slug} className="relative scroll-mt-28 overflow-x-clip py-10">
      <FloatingFood items={product.garnish} />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={cn(flip && "lg:order-2")}>
          <ProductArt
            image={product.image}
            alt={product.imageAlt}
            tone={product.tone}
            preload={headingLevel === "h1"}
          />
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">{product.strapline}</p>
            <Heading className="mt-5 text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[0.98]">{product.name}</Heading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{product.description}</p>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-2 gap-x-6 border-t border-ink/10">
            {product.facts.map((fact) => (
              <RevealItem key={fact.label} className="border-b border-ink/10 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-plum">{fact.label}</p>
                <p className="mt-1 font-display text-xl">{fact.value}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-8">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h3 className="text-2xl">Where to find it</h3>
              {product.price && <p className="font-display text-3xl italic text-berry">{product.price.display}</p>}
            </div>
            <AvailabilityList items={product.availability} />
            {link && (
              <TextLink href={`/products/${product.slug}`} className="mt-7">
                More about {product.name}
              </TextLink>
            )}
          </Reveal>
        </div>
      </div>
    </article>
  );
}
