import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = { title: "About Us", description: "Learn how BifidMedia supports e-commerce operators, marketplace sellers, and digital business builders." };

export default function Page() {
  return (
    <section className="simple-page">
      <p className="eyebrow">About BifidMedia</p>
      <h1>Marketplace strategy with practical execution support.</h1>
      <p>BifidMedia is built for entrepreneurs and teams who need more than task completion. We help clarify business goals, organize channel priorities, and create repeatable workflows across marketplaces, advertising, branding, and operations.</p>
      <Image className="page-image" src="/images/mockups/marketplace-dashboard.svg" alt="BifidMedia marketplace strategy and operations dashboard" width={960} height={720} sizes="(max-width: 768px) 100vw, 70vw" />
      <p>Our approach is intentionally compliance-aware. We do not promise guaranteed rankings, passive income, account reinstatement, or ad results. Instead, we focus on better planning, cleaner assets, stronger documentation, and measurable improvement routines.</p>
      <Button href="/book-consultation">Work with BifidMedia</Button>
    </section>
  );
}
