import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { amazonServices, getAmazonService } from "@/data/amazonServices";

export function generateStaticParams() {
  return amazonServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getAmazonService(slug);
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
  const service = getAmazonService(slug);
  if (!service) notFound();
  return <ServicePage service={service} base="Amazon Services" />;
}
