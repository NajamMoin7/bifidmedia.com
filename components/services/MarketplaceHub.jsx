import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceHero } from "./ServiceHero";
import { ServiceIndex } from "./ServiceIndex";
import { ServiceAudience } from "./ServiceAudience";
import { ServiceCTA } from "./ServiceCTA";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { StatsBand } from "@/components/ui/StatsBand";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { QuoteSlider } from "@/components/ui/QuoteSlider";
import { CommitmentMarquee } from "@/components/ui/CommitmentMarquee";
import { FaqSection } from "@/components/ui/FaqSection";
import { ComparisonTable } from "@/components/inner/ComparisonTable";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { Newsletter } from "@/components/home/Newsletter";
import { comparison } from "@/data/homepage";
import { siteConfig } from "@/data/siteConfig";

/** Hub FAQ built from the lead question of each service in the marketplace. */
function hubFaqs(services) {
  return services
    .filter((service) => service.faqs?.length)
    .slice(0, 10)
    .map((service) => service.faqs[0]);
}

export function MarketplaceHub({ marketplace, serviceIndex, services }) {
  const accent = marketplace.color;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${marketplace.name} services`,
    description: marketplace.metaDescription,
    url: `${siteConfig.url}${marketplace.href}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${marketplace.name} service catalogue`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${siteConfig.url}${service.href}`,
        },
      })),
    },
  };

  return (
    <>
      <ServiceHero
        eyebrow={marketplace.tagline}
        heading={marketplace.heading}
        intro={marketplace.intro}
        valueLine={marketplace.valueLine}
        image={marketplace.image}
        imageAlt={marketplace.imageAlt}
        platform={marketplace.key}
        accentColor={accent}
        badges={[
          `${services.length} ${marketplace.shortName} service tracks`,
          "Named account manager",
          "Transparent, traceable reporting",
        ]}
      />

      <Breadcrumbs items={[{ label: marketplace.name }]} />

      <TrustMarquee />

      <IconCardGrid
        tone="canvas"
        heading={`${marketplace.shortName} business models we manage`}
        text="Different models suit different capital, timelines and risk appetites. We will model the options before you commit."
        cards={marketplace.models}
      />

      <StatsBand stats={marketplace.stats} tone="white" />

      <ServiceIndex
        heading={`Done-for-you ${marketplace.shortName} services`}
        text={`Every ${marketplace.shortName} capability BifidMedia offers, grouped by what it actually does for your account.`}
        groups={serviceIndex}
        accentColor={accent}
        footerCta={{
          label: `View all ${marketplace.shortName} services`,
          href: `/services/${marketplace.slug}`,
        }}
      />

      <ServiceAudience
        heading={`Who we build ${marketplace.shortName} accounts for`}
        text="Three situations account for most of the work we take on. One of them probably describes you."
        audiences={marketplace.audiences}
        image="/images/business/ecommerce-consultation-team.webp"
        imageAlt="BifidMedia specialists reviewing a marketplace account"
        chip="Free 20-minute call — a straight answer, no pitch deck."
      />

      <IconCardGrid
        tone="white"
        numbered
        heading={`How we run your ${marketplace.shortName} account`}
        text="A repeatable sequence with a checkpoint you sign off at each stage."
        cards={marketplace.process.map((step) => ({
          title: step.title,
          text: step.text,
        }))}
      />

      <QuoteSlider tone="sky" />

      <IconCardGrid
        tone="white"
        heading={`Why sellers choose BifidMedia for ${marketplace.shortName}`}
        text="Three commitments we put in writing before any work begins."
        cards={marketplace.trust}
      />

      <IconCardGrid
        tone="canvas"
        heading={`The tools behind your ${marketplace.shortName} account`}
        text="Each platform's own console, plus the research and reporting tools that earn their subscription."
        cards={marketplace.tools.map((tool) => ({
          title: tool.name,
          text: tool.text,
        }))}
      />

      <ComparisonTable
        heading={`BifidMedia vs. running ${marketplace.shortName} yourself`}
        text="The same catalogue and the same budget, under two very different operating models."
        columns={comparison.columns}
      />

      <CommitmentMarquee />

      <ServiceCTA
        heading={`Get a free ${marketplace.shortName} account review`}
        paragraphs={[
          marketplace.valueLine,
          "Send us access and we will come back with what we would fix first, what it would cost, and what we would leave alone.",
        ]}
        image={marketplace.image}
        imageAlt={marketplace.imageAlt}
        primaryCta={{ label: "Request a free audit", href: "/free-audit" }}
      />

      <FaqSection
        heading={`${marketplace.shortName} questions we are asked most`}
        items={hubFaqs(services)}
        tone="white"
      />

      <AskStrategist />
      <Newsletter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

export default MarketplaceHub;
