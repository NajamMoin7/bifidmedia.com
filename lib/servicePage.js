import { notFound } from "next/navigation";
import { marketplaceBySlug } from "@/data/marketplaces";
import { categoryById } from "@/data/serviceCategories";
import { businessContext } from "@/data/businessContext";
import {
  getCategoryServices,
  getService,
  getServiceGroups,
  relatedServices,
} from "@/data/services";
import { pageMetadata } from "./seo";

/**
 * Shared plumbing for the seven `[slug]` service routes.
 *
 * Breadcrumb hierarchy follows the Services IA:
 *   Home → Services → <Category> → <Service>
 */

/** Section scaffolding a service page renders around its own copy. */
function contextFor(categoryId) {
  return categoryId === "business"
    ? businessContext
    : marketplaceBySlug[categoryId];
}

export function serviceParams(categoryId) {
  return getCategoryServices(categoryId).map((service) => ({
    slug: service.slug,
  }));
}

export function serviceData(categoryId, serviceSlug) {
  const category = categoryById[categoryId];
  const service = getService(categoryId, serviceSlug);
  if (!category || !service) notFound();

  return {
    category,
    service,
    context: contextFor(categoryId),
    related: relatedServices(service, 6),
    breadcrumbs: [
      { label: "Services", href: "/services" },
      { label: category.shortLabel, href: category.href },
      { label: service.title },
    ],
  };
}

export function serviceMetadata(categoryId, serviceSlug) {
  const service = getService(categoryId, serviceSlug);
  if (!service) return {};

  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: service.href,
  });
}

// ── Marketplace hub routes (/amazon, /walmart, …) ───────────────────────────

export function hubData(slug) {
  const marketplace = marketplaceBySlug[slug];
  if (!marketplace) notFound();

  return {
    marketplace,
    services: getCategoryServices(slug),
    serviceIndex: getServiceGroups(slug),
  };
}

export function hubMetadata(slug) {
  const marketplace = marketplaceBySlug[slug];
  if (!marketplace) return {};

  return pageMetadata({
    title: marketplace.metaTitle,
    description: marketplace.metaDescription,
    path: marketplace.href,
  });
}
