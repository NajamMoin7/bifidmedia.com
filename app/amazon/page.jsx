import { MarketplaceHub } from "@/components/services/MarketplaceHub";
import { hubData, hubMetadata } from "@/lib/servicePage";

const SLUG = "amazon";

export const metadata = hubMetadata(SLUG);

export default function Page() {
  const { marketplace, serviceIndex, services } = hubData(SLUG);
  return (
    <MarketplaceHub
      marketplace={marketplace}
      serviceIndex={serviceIndex}
      services={services}
    />
  );
}
