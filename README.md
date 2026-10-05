# Chefni website

Information site for Chefni, premium frozen foods from Karachi. It presents the
products and says where to buy them; nothing is sold on the site.
Next.js (App Router), TypeScript, Tailwind CSS v4 and Motion.

## Run it

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Configuration

Environment variables, documented in `.env.example`:

- `NEXT_PUBLIC_SITE_URL`: public address, used for canonical URLs, the sitemap and social cards.
- `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL`: store listings. While empty, the badges read "Coming soon".

## Where things live

- `src/lib/products.ts`: the products, their facts, price and stockists. Adding a
  product or a new shop here updates the home page, `/products`, `/where-to-buy`,
  the footer and the sitemap.
- `src/lib/site.ts`: phone, email, social links, navigation.
- `src/lib/experience.ts`: career timeline and the Arya & Mom video list.
- `next.config.ts`: redirects from the old WordPress URLs and security headers.
