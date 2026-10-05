import { site } from "@/lib/site";

type Json = Record<string, unknown>;

export function JsonLd({ data }: { data: Json | Json[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD has to be emitted as raw text; "<" is escaped so content can never close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const organizationJsonLd: Json = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  logo: `${site.url}/icon-512.png`,
  image: `${site.url}/opengraph-image.jpg`,
  telephone: site.phone.e164,
  email: site.email,
  foundingDate: String(site.founded),
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.country },
  areaServed: site.city,
  sameAs: [site.social.facebook, site.social.twitter, site.social.youtube],
};

export const websiteJsonLd: Json = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { "@id": `${site.url}/#organization` },
};

export function breadcrumbJsonLd(trail: Array<{ name: string; path: string }>): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}
