export const site = {
  name: "Chefni",
  legalName: "Chefni",
  tagline: "Fine. Fast. Fab.",
  promise: "Solely premium for you",
  description:
    "Chefni makes premium frozen foods in Karachi: fully cooked Plain Egg Noodles and juicy Beef Burger Patties. See what is in the range and where to find it.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://chefni.com").replace(/\/$/, ""),
  founded: 2005,
  chef: "Chef Rabia",
  city: "Karachi",
  country: "PK",
  phone: { display: "0332-3533083", href: "tel:+923323533083", e164: "+923323533083" },
  email: "info@chefni.com",
  social: {
    facebook: "https://www.facebook.com/chefni/",
    twitter: "https://www.twitter.com/chefni",
    youtube: "https://www.youtube.com/chefni",
  },
  // Paste the store listing URLs into .env once the app is live; until then
  // the badges render as "coming soon" and are not links.
  apps: {
    ios: process.env.NEXT_PUBLIC_APP_STORE_URL || null,
    android: process.env.NEXT_PUBLIC_PLAY_STORE_URL || null,
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/products", label: "Shop" },
  { href: "/recipes", label: "Recipes" },
  { href: "/where-to-buy", label: "Locations" },
] as const;

export type Testimonial = { quote: string; name: string; detail?: string };

/**
 * Customer reviews shown under "Voices of our customers" on the home page.
 * Only add real reviews, quoted with the customer's permission. While the list
 * is empty the section invites visitors to leave the first one instead.
 */
export const testimonials: Testimonial[] = [];
