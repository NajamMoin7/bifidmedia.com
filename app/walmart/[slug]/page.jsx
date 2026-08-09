import { ServicePage } from "@/components/services/ServicePage";
import { serviceData, serviceMetadata, serviceParams } from "@/lib/servicePage";

const CATEGORY = "walmart";

export function generateStaticParams() {
  return serviceParams(CATEGORY);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return serviceMetadata(CATEGORY, slug);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const { service, context, related, breadcrumbs } = serviceData(CATEGORY, slug);

  return (
    <ServicePage
      service={service}
      marketplace={context}
      related={related}
      breadcrumbs={breadcrumbs}
    />
  );
}
