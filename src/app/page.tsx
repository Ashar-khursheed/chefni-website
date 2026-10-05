import { FallScene } from "@/components/food/fall-scene";
import { Hero } from "@/components/home/hero";
import { AppComingSoon, AryaAndMom, ChefStory, FacebookBand, WhereToBuy } from "@/components/home/sections";
import { ProductFeature } from "@/components/products/product-feature";
import { Marquee } from "@/components/ui/marquee";
import { products } from "@/lib/products";
import { highlights } from "@/lib/site";

export default function HomePage() {
  const [first, ...rest] = products;

  return (
    <>
      <Hero />
      <Marquee items={highlights} className="border-y border-ink/10 py-6 md:py-8" />

      <div className="py-16 md:py-28">
        <ProductFeature product={first} />
      </div>

      <FallScene />

      <div className="space-y-16 py-16 md:space-y-28 md:py-28">
        {rest.map((product, index) => (
          <ProductFeature key={product.slug} product={product} flip={index % 2 === 0} />
        ))}
      </div>

      <WhereToBuy />
      <ChefStory />
      <FacebookBand />
      <AryaAndMom />
      <AppComingSoon />
    </>
  );
}
