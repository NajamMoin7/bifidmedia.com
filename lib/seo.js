import { siteConfig } from "@/data/siteConfig";

/**
 * Builds a complete Metadata object with canonical URL and Open Graph.
 */
export function pageMetadata({ title, description, path = "/", type = "website" }) {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
