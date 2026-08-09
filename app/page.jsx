import { Hero } from "@/components/home/Hero";
import { CapabilityBand } from "@/components/home/CapabilityBand";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { Platforms } from "@/components/home/Platforms";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { Process } from "@/components/home/Process";
import { Capabilities } from "@/components/home/Capabilities";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Newsletter } from "@/components/home/Newsletter";
import { StatsBand } from "@/components/ui/StatsBand";
import { QuoteSlider } from "@/components/ui/QuoteSlider";
import { CommitmentMarquee } from "@/components/ui/CommitmentMarquee";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { FaqSection } from "@/components/ui/FaqSection";
import { FeatureSplit } from "@/components/inner/FeatureSplit";
import { ComparisonTable } from "@/components/inner/ComparisonTable";
import { stats, featureSplits, comparison, revenueStreams } from "@/data/homepage";
import { homeFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "BifidMedia | Start, Automate and Scale Your E-Commerce Store",
  description:
    "BifidMedia is a multi-channel e-commerce agency. We build, manage and grow stores on Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay — setup, listings, advertising, inventory and reporting.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "BifidMedia | Start, Automate and Scale Your E-Commerce Store",
    description:
      "Marketplace setup, listing optimization, advertising, inventory and compliance handled by one specialist team.",
    url: siteConfig.url,
  },
};

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <>
      <Hero />
      <CapabilityBand />
      <TrustMarquee />
      <Platforms />
      <StatsBand stats={stats} tone="white" />
      <ProblemSolution />
      <PlatformShowcase />
      <Process />
      <Capabilities />
      <FeatureSplit feature={featureSplits[0]} tone="white" />
      <FeatureSplit feature={featureSplits[1]} tone="canvas" />
      <QuoteSlider tone="sky" />
      <WhyChoose />
      <ComparisonTable
        heading={comparison.heading}
        text="The same catalogue, the same budget, two very different operating models."
        columns={comparison.columns}
      />
      <IconCardGrid
        tone="canvas"
        heading={revenueStreams.heading}
        text={revenueStreams.text}
        cards={revenueStreams.cards}
      />
      <CommitmentMarquee />
      <Newsletter />
      <FaqSection items={homeFaqs} tone="white" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
