export const posts = [
  {
    slug: "marketplace-management-checklist",
    title: "Marketplace Management Checklist for Growing Sellers",
    excerpt: "A practical checklist for catalog quality, advertising hygiene, reporting, and account operations.",
    date: "2026-07-10",
    category: "Marketplace Operations",
  },
  {
    slug: "shopify-launch-foundations",
    title: "Shopify Launch Foundations That Support Paid Traffic",
    excerpt: "What to prepare before sending ads to a new Shopify store.",
    date: "2026-07-10",
    category: "Shopify",
  },
  {
    slug: "amazon-ppc-readiness",
    title: "Amazon PPC Readiness: What to Fix Before Scaling Campaigns",
    excerpt: "Listing, keyword, margin, and reporting basics that should be clear before increasing spend.",
    date: "2026-07-10",
    category: "Amazon",
  },
];

export const getPost = (slug) => posts.find((post) => post.slug === slug);
