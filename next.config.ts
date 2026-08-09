import type { NextConfig } from "next";

/**
 * Business services moved from /services/<slug> to /business/<slug> when
 * /services/<category> became the category-page namespace. These keep the old
 * paths resolving instead of 404ing.
 */
const businessServiceSlugs = [
  "business-formation",
  "personal-branding",
  "social-media-marketing",
  "youtube-automation",
  "start-marketing-agency",
  "ecommerce-brand-launch",
  "ultimate-business-model",
  "kickstarter-campaign",
  "mobile-application",
];

const nextConfig: NextConfig = {
  // The HTTrack mirror in /reference is a development-only layout reference.
  // It must never be traced, bundled or deployed.
  outputFileTracingExcludes: {
    "*": ["./reference/**", "./docs/**"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async redirects() {
    return businessServiceSlugs.map((slug) => ({
      source: `/services/${slug}`,
      destination: `/business/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
