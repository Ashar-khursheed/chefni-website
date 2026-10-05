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
  aryaEmail: "info@aryaandmom.com",
  social: {
    facebook: "https://www.facebook.com/chefni/",
    twitter: "https://www.twitter.com/chefni",
    youtube: "https://www.youtube.com/chefni",
    aryaYoutube: "https://www.youtube.com/channel/UCOReSs-7hnAt6c1IZkh9GVA",
  },
  // Paste the store listing URLs into .env once the app is live; until then
  // the badges render as "coming soon" and are not links.
  apps: {
    ios: process.env.NEXT_PUBLIC_APP_STORE_URL || null,
    android: process.env.NEXT_PUBLIC_PLAY_STORE_URL || null,
  },
} as const;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/where-to-buy", label: "Where to buy" },
  { href: "/about", label: "Our chef" },
  { href: "/arya-and-mom", label: "Arya & Mom" },
  { href: "/contact", label: "Contact" },
] as const;

export const highlights = [
  "Plain Egg Noodles",
  "Fine. Fast. Fab.",
  "Beef Burger Patty",
  "Solely premium for you",
  "Fully cooked",
  "Frozen for convenience",
] as const;
