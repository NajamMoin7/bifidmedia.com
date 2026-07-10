export const landingPages = [
  ["amazon-store-management", "Amazon Store Management", "Amazon store management services"],
  ["amazon-account-reinstatement", "Amazon Account Reinstatement", "Amazon account reinstatement service"],
  ["amazon-ppc-management", "Amazon PPC Management", "Amazon PPC management agency"],
  ["shopify-store-development", "Shopify Store Development", "Shopify store development agency"],
  ["walmart-marketplace-management", "Walmart Marketplace Management", "Walmart marketplace management"],
  ["tiktok-shop-management", "TikTok Shop Management", "TikTok Shop management agency"],
  ["ecommerce-business-consultation", "E-commerce Business Consultation", "ecommerce business consultation"],
].map(([slug, title, keyword]) => ({
  slug,
  title,
  keyword,
  path: `/lp/${slug}`,
  h1: `${title} Consultation`,
  description: `Talk with BifidMedia about ${title.toLowerCase()} and receive a practical next-step plan aligned with your budget, stage, and goals.`,
  benefits: ["Focused campaign-fit consultation", "Clear deliverables", "Fast response path", "Privacy-aware lead handling"],
}));

export const getLandingPage = (slug) => landingPages.find((page) => page.slug === slug);
