import { notFound } from "next/navigation";
import { ServiceCategoryPage } from "@/components/services/ServiceCategoryPage";
import { serviceCategories, categoryById } from "@/data/serviceCategories";
import { marketplaceBySlug } from "@/data/marketplaces";
import { businessContext } from "@/data/businessContext";
import {
  getCategoryServices,
  getServiceGroups,
  getFeaturedServices,
  otherCategories,
} from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }) {
  const { category: categoryId } = await params;
  const category = categoryById[categoryId];
  if (!category) return {};

  return pageMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    path: category.href,
  });
}

export default async function Page({ params }) {
  const { category: categoryId } = await params;
  const category = categoryById[categoryId];
  if (!category) notFound();

  // Section scaffolding (trust points, process, statistics) comes from the
  // marketplace registry, or the business context for /services/business.
  const context =
    categoryId === "business" ? businessContext : marketplaceBySlug[categoryId];

  return (
    <ServiceCategoryPage
      category={category}
      context={context}
      services={getCategoryServices(categoryId)}
      groups={getServiceGroups(categoryId)}
      featured={getFeaturedServices(categoryId, 6)}
      siblings={otherCategories(categoryId)}
    />
  );
}
