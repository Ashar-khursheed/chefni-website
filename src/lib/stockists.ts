import { products } from "@/lib/products";

/** Every shop that stocks at least one product, listed once. */
export const stockists = [
  ...new Set(
    products.flatMap((product) =>
      product.availability.flatMap((item) => (item.kind === "store" ? [item.name] : [])),
    ),
  ),
];
