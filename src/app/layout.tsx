import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProviders } from "@/components/motion/providers";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

import "./globals.css";

const fraunces = localFont({
  src: [
    { path: "../fonts/Fraunces.woff2", style: "normal", weight: "300 800" },
    { path: "../fonts/Fraunces-Italic.woff2", style: "italic", weight: "300 800" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = localFont({
  src: "../fonts/InstrumentSans.woff2",
  weight: "400 700",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Chefni | Premium Frozen Foods in Karachi",
    template: "%s | Chefni",
  },
  description: site.description,
  applicationName: site.name,
  category: "food",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: "Chefni | Premium Frozen Foods in Karachi",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Chefni | Premium Frozen Foods in Karachi",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf5ee",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      // Lets Next jump straight to the top on navigation despite the smooth-scroll CSS.
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${instrument.variable}`}
    >
      <head>
        {/* Entrance animations start hidden; without JavaScript nothing would ever reveal them. */}
        <noscript>
          <style>{`main [style]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-dvh flex-col overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <MotionProviders>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </MotionProviders>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
      </body>
    </html>
  );
}
