import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: service.path },
    openGraph: { title: `${service.title} | BifidMedia`, description: service.description, url: service.path },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
