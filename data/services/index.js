import { amazonServices, amazonServiceIndex, amazonCategories } from "./amazon";
import { walmartServices, walmartServiceIndex, walmartCategories } from "./walmart";
import { shopifyServices, shopifyServiceIndex, shopifyCategories } from "./shopify";
import { tiktokServices, tiktokServiceIndex, tiktokCategories } from "./tiktokShop";
import { etsyServices, etsyServiceIndex, etsyCategories } from "./etsy";
import { ebayServices, ebayServiceIndex, ebayCategories } from "./ebay";
import { businessServices, businessServiceIndex, businessCategories } from "./business";
import { serviceCategories, categoryById } from "../serviceCategories";

/**
 * Every service, keyed by category id. This object is the single source the
 * services landing page, category pages, related-service blocks and the
 * sitemap all read from.
 */
export const servicesByCategory = {
  amazon: amazonServices,
  walmart: walmartServices,
  shopify: shopifyServices,
  "tiktok-shop": tiktokServices,
  etsy: etsyServices,
  ebay: ebayServices,
  business: businessServices,
};

/** Services grouped by capability group within each category. */
export const groupIndexByCategory = {
  amazon: amazonServiceIndex,
  walmart: walmartServiceIndex,
  shopify: shopifyServiceIndex,
  "tiktok-shop": tiktokServiceIndex,
  etsy: etsyServiceIndex,
  ebay: ebayServiceIndex,
  business: businessServiceIndex,
};

export const capabilityGroupsByCategory = {
  amazon: amazonCategories,
  walmart: walmartCategories,
  shopify: shopifyCategories,
  "tiktok-shop": tiktokCategories,
  etsy: etsyCategories,
  ebay: ebayCategories,
  business: businessCategories,
};

export const allServices = Object.values(servicesByCategory).flat();

export const allMarketplaceServices = serviceCategories
  .filter((category) => category.id !== "business")
  .flatMap((category) => servicesByCategory[category.id] || []);

export function getCategoryServices(categoryId) {
  return servicesByCategory[categoryId] || [];
}

export function getService(categoryId, serviceSlug) {
  return getCategoryServices(categoryId).find((s) => s.slug === serviceSlug);
}

export function getServiceGroups(categoryId) {
  return groupIndexByCategory[categoryId] || [];
}

/** Services flagged as featured, falling back to the first few in order. */
export function getFeaturedServices(categoryId, limit = 6) {
  const services = getCategoryServices(categoryId);
  const featured = services.filter((service) => service.featured);
  if (featured.length >= 3) return featured.slice(0, limit);
  const rest = services.filter((service) => !service.featured);
  return [...featured, ...rest].slice(0, limit);
}

/** Same capability group first, then the rest of the category. */
export function relatedServices(service, limit = 6) {
  const pool = getCategoryServices(service.categoryId);
  const sameGroup = pool.filter(
    (s) => s.group === service.group && s.slug !== service.slug
  );
  const rest = pool.filter(
    (s) => s.group !== service.group && s.slug !== service.slug
  );
  return [...sameGroup, ...rest].slice(0, limit);
}

export function getCategory(categoryId) {
  return categoryById[categoryId];
}

/** Categories other than the one supplied — used by "explore other channels". */
export function otherCategories(categoryId) {
  return serviceCategories.filter((category) => category.id !== categoryId);
}

// ── Backwards-compatible aliases ────────────────────────────────────────────
export const servicesByMarketplace = servicesByCategory;
export const serviceIndexByMarketplace = groupIndexByCategory;
export const categoriesByMarketplace = capabilityGroupsByCategory;
export const getMarketplaceServices = getCategoryServices;
export const getBusinessService = (slug) => getService("business", slug);
export { businessServices, businessServiceIndex, businessCategories };
