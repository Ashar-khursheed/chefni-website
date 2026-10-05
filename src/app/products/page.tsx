import type { Metadata } from "next";

import { ProductFeature } from "@/components/products/product-feature";
import { breadcrumbJsonLd, JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const description =
  "The Chefni range: fully cooked Plain Egg Noodles (450 g) and juicy Beef Burger Patties. Premium frozen foods made in Karachi.";

export const metadata: Metadata = {
  title: "Products: Plain Egg Noodles & Beef Burger Patty",
  description,
  alternates: { canonical: "/products" },
  openGraph: { title: "Chefni products", description, url: "/products" },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Chefni products",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    url: `${site.url}/products/${product.slug}`,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="The range"
        title="Two products,"
        accent="done properly."
        lead="Chefni makes premium frozen foods for busy kitchens. Here is what is in the range today and where you can pick each one up."
      >
        <ButtonLink href="/where-to-buy">Where to buy</ButtonLink>
      </PageHero>

      <section aria-label="Products" className="space-y-16 pb-24 md:space-y-28 md:pb-36">
        {products.map((product, index) => (
          <ProductFeature key={product.slug} product={product} flip={index % 2 === 1} />
        ))}
      </section>

      <JsonLd data={[itemListJsonLd, breadcrumbJsonLd([{ name: "Products", path: "/products" }])]} />
    </>
  );
}
