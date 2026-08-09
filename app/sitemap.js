import { siteConfig } from "@/data/siteConfig";
import { marketplaces } from "@/data/marketplaces";
import { serviceCategories } from "@/data/serviceCategories";
import { allServices } from "@/data/services";
import { posts } from "@/data/blog";

const staticRoutes = [
  ["/", 1, "weekly"],
  ["/services", 0.9, "weekly"],
  ["/about", 0.7, "monthly"],
  ["/contact", 0.7, "monthly"],
  ["/faq", 0.6, "monthly"],
  ["/blog", 0.7, "weekly"],
  ["/become-a-partner", 0.6, "monthly"],
  ["/get-started", 0.8, "monthly"],
  ["/book-consultation", 0.8, "monthly"],
  ["/free-audit", 0.8, "monthly"],
  ["/privacy-policy", 0.3, "yearly"],
  ["/terms-and-conditions", 0.3, "yearly"],
  ["/cookie-policy", 0.3, "yearly"],
  ["/disclaimer", 0.3, "yearly"],
];

export default function sitemap() {
  const now = new Date();

  return [
    ...staticRoutes.map(([path, priority, changeFrequency]) => ({
      url: `${siteConfig.url}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    // Service category pages — the hubs of the Services information architecture.
    ...serviceCategories.map((category) => ({
      url: `${siteConfig.url}${category.href}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })),
    // Marketplace store-launch pages.
    ...marketplaces.map((marketplace) => ({
      url: `${siteConfig.url}${marketplace.href}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    // Individual service pages.
    ...allServices.map((service) => ({
      url: `${siteConfig.url}${service.href}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
