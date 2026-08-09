import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceHero } from "./ServiceHero";
import { ServiceProblems } from "./ServiceProblems";
import { ServiceOfferings } from "./ServiceOfferings";
import { ServiceAudience } from "./ServiceAudience";
import { ServiceCTA } from "./ServiceCTA";
import { RelatedServices } from "./RelatedServices";
import { StatsBand } from "@/components/ui/StatsBand";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { QuoteSlider } from "@/components/ui/QuoteSlider";
import { CommitmentMarquee } from "@/components/ui/CommitmentMarquee";
import { FaqSection } from "@/components/ui/FaqSection";
import { Newsletter } from "@/components/home/Newsletter";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { siteConfig } from "@/data/siteConfig";
import { pickImage } from "@/lib/images";

/**
 * The canonical inner service page. Section order mirrors the reference site's
 * leaf service template (see docs/starterx-reference-analysis.md §7.2):
 *
 * hero → breadcrumb → problems → what's included → who it's for → why us →
 * quote → process → tools → commitments → stats → CTA → FAQ → related →
 * ask a strategist → newsletter
 */
export function ServicePage({ service, marketplace, breadcrumbs, related }) {
  const accent = marketplace?.color;
  // Avoid repeating the hero photograph further down the same page.
  const offeringsImage = pickImage(service.slug, marketplace?.image);
  const audienceImage = pickImage(`${service.slug}-audience`, offeringsImage.src);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.categoryTitle,
    description: service.metaDescription,
    url: `${siteConfig.url}${service.href}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "US",
  };

  return (
    <>
      <ServiceHero
        eyebrow={marketplace ? marketplace.tagline : service.categoryTitle}
        heading={service.heading}
        intro={service.intro}
        valueLine={service.valueLine}
        image={marketplace?.image}
        imageAlt={marketplace?.imageAlt}
        platform={marketplace?.key}
        accentColor={accent}
        badges={[
          "Written strategy first",
          "Named account manager",
          "You own the account",
        ]}
      />

      <Breadcrumbs items={breadcrumbs} />

      <ServiceProblems
        heading={service.problemsHeading}
        text="Every engagement starts by removing the things quietly holding the account back."
        problems={service.problems}
        accentColor={accent}
      />

      <ServiceOfferings
        heading={service.offeringsHeading}
        text="A defined scope with a named owner for each part — so you know exactly what is being done, and by whom."
        offerings={service.offerings}
        image={offeringsImage.src}
        imageAlt={offeringsImage.alt}
      />

      {marketplace ? (
        <ServiceAudience
          heading={`${service.name} at every stage of growth`}
          text="The work changes depending on where you are. These are the three situations we most often take on."
          audiences={marketplace.audiences}
          image={audienceImage.src}
          imageAlt={audienceImage.alt}
          chip="Not sure which describes you? A free call settles it in 20 minutes."
        />
      ) : null}

      {marketplace ? (
        <IconCardGrid
          tone="white"
          heading={`Why sellers trust BifidMedia with ${marketplace.shortName}`}
          text="Three things we commit to in writing before any work begins."
          cards={marketplace.trust}
        />
      ) : null}

      <QuoteSlider tone="sky" />

      {marketplace ? (
        <IconCardGrid
          tone="white"
          numbered
          heading={`How we deliver ${service.name}`}
          text="A repeatable sequence, with a checkpoint you sign off at each stage."
          cards={marketplace.process.map((step) => ({
            title: step.title,
            text: step.text,
          }))}
        />
      ) : null}

      {marketplace ? (
        <IconCardGrid
          tone="canvas"
          heading={`The platforms and tools behind your ${marketplace.shortName} account`}
          text="We use each platform's own console plus the research and reporting tools that earn their place."
          cards={marketplace.tools.map((tool) => ({
            title: tool.name,
            text: tool.text,
          }))}
        />
      ) : null}

      <CommitmentMarquee />

      {marketplace ? <StatsBand stats={marketplace.stats} tone="canvas" /> : null}

      <ServiceCTA
        heading={`Ready to move forward with ${service.name}?`}
        paragraphs={[
          service.valueLine,
          "Book a free call and we will tell you what we would prioritise, what it would cost and whether it is worth doing at all.",
        ]}
        image={audienceImage.src}
        imageAlt={audienceImage.alt}
      />

      <FaqSection
        heading={`${service.name} — frequently asked questions`}
        items={service.faqs}
        tone="white"
      />

      <RelatedServices
        heading={
          marketplace
            ? `More ${marketplace.shortName} services`
            : "More BifidMedia services"
        }
        text="Most engagements combine two or three of these. We will tell you which ones actually apply to you."
        services={related}
        accentColor={accent}
        categoryCta={{
          label: `View all ${marketplace?.shortName || "BifidMedia"} services`,
          href: `/services/${service.categoryId}`,
        }}
      />

      <AskStrategist />
      <Newsletter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

export default ServicePage;
