import type { MetadataRoute } from "next";

import { products } from "@/lib/products";
import { site } from "@/lib/site";

type Route = { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" };

const routes: Route[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  ...products.map((product): Route => ({ path: `/products/${product.slug}`, priority: 0.9, changeFrequency: "weekly" })),
  { path: "/where-to-buy", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/arya-and-mom", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
