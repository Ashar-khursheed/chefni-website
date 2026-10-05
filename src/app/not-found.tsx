import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="container-page grid min-h-[80dvh] place-items-center pb-24 pt-40 text-center">
      <div>
        <p className="font-display text-[clamp(6rem,22vw,14rem)] italic leading-none text-berry">404</p>
        <h1 className="mt-4 text-4xl md:text-5xl">This page is not on the menu</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-ink-soft">
          The link may be old or mistyped. The products are still where we left them.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/products" variant="outline" arrow={false}>
            See the products
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
