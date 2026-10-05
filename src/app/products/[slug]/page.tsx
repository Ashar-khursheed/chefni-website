import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/reveal";
import { ProductFeature } from "@/components/products/product-feature";
import { breadcrumbJsonLd, JsonLd } from "@/components/seo/json-ld";
import { Arrow } from "@/components/ui/button";
import { getProduct, products } from "@/lib/products";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};

  const title = `${product.name}: Where to Buy in Karachi`;
  return {
    title,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `Chefni ${product.name}`,
      description: product.summary,
      url: `/products/${product.slug}`,
      images: [{ url: product.image.src, width: product.image.width, height: product.image.height, alt: product.imageAlt }],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const other = products.find((item) => item.slug !== product.slug);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Chefni ${product.name}`,
    description: product.summary,
    image: `${site.url}${product.image.src}`,
    category: "Frozen food",
    brand: { "@type": "Brand", name: site.name },
    url: `${site.url}/products/${product.slug}`,
    // Only products with a published price carry an offer; nothing is invented.
    ...(product.price && {
      offers: {
        "@type": "Offer",
        price: product.price.amount,
        priceCurrency: product.price.currency,
        availability: "https://schema.org/InStoreOnly",
        areaServed: site.city,
      },
    }),
  };

  return (
    <>
      <div className="pb-24 pt-36 md:pb-32 md:pt-44">
        <nav aria-label="Breadcrumb" className="container-page mb-10 text-sm text-ink-soft">
          <Link href="/products" className="transition-colors hover:text-plum">
            Products
          </Link>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <ProductFeature product={product} link={false} headingLevel="h1" />
      </div>

      {other && (
        <section className="container-page pb-24 md:pb-32">
          <Reveal>
            <Link
              href={`/products/${other.slug}`}
              className="group flex items-center gap-6 rounded-[2rem] bg-sand p-5 transition-colors duration-500 hover:bg-blush md:gap-10 md:p-8"
            >
              <Image
                src={other.image}
                alt=""
                sizes="160px"
                className="h-auto w-24 shrink-0 transition-transform duration-700 ease-out-expo group-hover:-rotate-6 group-hover:scale-110 md:w-36"
              />
              <div className="min-w-0 flex-1">
                <p className="eyebrow">Also from Chefni</p>
                <h2 className="mt-3 text-3xl md:text-5xl">{other.name}</h2>
                <p className="mt-2 hidden text-ink-soft sm:block">{other.summary}</p>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:border-plum group-hover:bg-plum group-hover:text-paper md:size-16">
                <Arrow className="size-5" />
              </span>
            </Link>
          </Reveal>
        </section>
      )}

      <JsonLd
        data={[
          productJsonLd,
          breadcrumbJsonLd([
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ]),
        ]}
      />
    </>
  );
}
