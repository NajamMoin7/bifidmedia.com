import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { CommitmentMarquee } from "@/components/ui/CommitmentMarquee";
import { QuoteSlider } from "@/components/ui/QuoteSlider";
import { StatsBand } from "@/components/ui/StatsBand";
import { FaqSection } from "@/components/ui/FaqSection";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { Newsletter } from "@/components/home/Newsletter";
import { serviceCategories } from "@/data/serviceCategories";
import { getCategoryServices, allServices } from "@/data/services";
import { stats, process as homeProcess } from "@/data/homepage";
import { faqGroups } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "E-Commerce & Digital Business Services",
  description:
    "Explore BifidMedia's marketplace, e-commerce, marketing, automation and digital business services designed to help brands launch, manage and grow.",
  path: "/services",
});

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "E-commerce & Digital Business Services",
    url: `${siteConfig.url}/services`,
    isPartOf: { "@id": `${siteConfig.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: serviceCategories.length,
      itemListElement: serviceCategories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${category.label} services`,
        url: `${siteConfig.url}${category.href}`,
      })),
    },
  };

  return (
    <>
      <ServiceHero
        eyebrow="Services"
        heading="E-commerce & Digital Business Services"
        intro="Explore BifidMedia's marketplace, e-commerce, marketing, automation and digital business services designed to help brands launch, manage and grow."
        valueLine={`${allServices.length} documented service tracks across seven categories — buy one, or hand over the whole operation.`}
        image="/images/home/hero-ecommerce-growth.png"
        imageAlt="E-commerce operator reviewing marketplace sales and advertising performance"
        primaryCta={{
          label: "Get a free consultation",
          href: "/book-consultation",
        }}
        secondaryCta={{ label: "Explore our services", href: "#explore" }}
        badges={[
          "Marketplace management",
          "Storefront development",
          "Advertising & SEO",
          "Business formation",
        ]}
      />

      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* Category grid — 3 / 2 / 1 columns */}
      <Section tone="canvas" id="explore">
        <SectionHeading
          eyebrow="Service categories"
          title="Explore Our Services"
          text="Pick the channel you want to launch, fix or scale. Each category page lists every service we run on it."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category, index) => (
            <li
              key={category.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <Link
                href={category.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-soft transition-[transform,border-color,box-shadow] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-brand/45 hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(22,93,255,0.07),rgba(104,64,255,0.05))] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <span className="relative flex items-center justify-between gap-3">
                  <span className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:-rotate-6 group-hover:scale-105">
                    <PlatformIcon platform={category.icon} size={48} />
                  </span>
                  <span
                    className="rounded-[var(--radius-pill)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-white"
                    style={{ background: category.color }}
                  >
                    {getCategoryServices(category.id).length} services
                  </span>
                </span>

                <h3 className="relative mt-5 text-[1.25rem] transition-colors duration-200 group-hover:text-brand">
                  {category.label}
                </h3>

                <p className="relative mt-2.5 text-[0.94rem] leading-relaxed text-muted">
                  {category.cardDescription}
                </p>

                <span className="relative mt-auto inline-flex items-center gap-2 pt-6 text-[0.9rem] font-semibold text-brand">
                  Explore {category.shortLabel} services
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <StatsBand stats={stats} tone="white" />

      <IconCardGrid
        tone="canvas"
        numbered
        heading="How an engagement runs, whichever service you start with"
        text="The sequence is the same across every category, so you always know which step you are on."
        cards={homeProcess.steps.map((step) => ({
          title: step.title,
          text: step.text,
        }))}
      />

      <QuoteSlider tone="sky" />
      <CommitmentMarquee />

      <FaqSection
        heading="Questions about scope and engagement"
        items={faqGroups[1].items}
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
