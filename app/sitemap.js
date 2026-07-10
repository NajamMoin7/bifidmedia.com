import { services } from "@/data/services";
import { amazonServices } from "@/data/amazonServices";
import { landingPages } from "@/data/landingPages";
import { posts } from "@/data/blog";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap() {
  const base = siteConfig.url;
  const paths = ["/", "/about", "/contact", "/faq", "/book-consultation", "/become-a-partner", "/blog", "/privacy-policy", "/terms-and-conditions", "/cookie-policy", "/disclaimer", "/sitemap", ...services.map((s) => s.path), ...amazonServices.map((s) => s.path), ...landingPages.map((p) => p.path), ...posts.map((p) => `/blog/${p.slug}`)];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-07-10"), changeFrequency: "weekly", priority: path === "/" ? 1 : 0.7 }));
}
