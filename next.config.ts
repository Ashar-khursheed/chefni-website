import type { NextConfig } from "next";

// Old WordPress URLs that still have links and search rankings pointing at them.
const legacyRedirects: Array<[from: string, to: string]> = [
  ["/features-2", "/products"],
  ["/portfolio", "/products"],
  ["/chefni", "/products"],
  ["/our-store", "/where-to-buy"],
  ["/education", "/about#teaching"],
  ["/cothm", "/about#teaching"],
  ["/masala-tv", "/about#masala-tv"],
  ["/fika", "/about#fika"],
  ["/timeline-2", "/about"],
  ["/aryas-hour", "/arya-and-mom"],
  ["/product/aryas-and-mom", "/arya-and-mom"],
];

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
