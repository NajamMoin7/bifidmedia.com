import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { StatsBand } from "@/components/ui/StatsBand";
import { IconCardGrid } from "@/components/ui/IconCardGrid";
import { QuoteSlider } from "@/components/ui/QuoteSlider";
import { CommitmentMarquee } from "@/components/ui/CommitmentMarquee";
import { FaqSection } from "@/components/ui/FaqSection";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { Button } from "@/components/ui/Button";
import { Slider } from "@/components/ui/Slider";
import { ServiceHero } from "./ServiceHero";
import { ServiceCardGrid, ServiceCard } from "./ServiceCardGrid";
import { ServiceCTA } from "./ServiceCTA";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { Newsletter } from "@/components/home/Newsletter";
import { whyChoose } from "@/data/homepage";
import { siteConfig } from "@/data/siteConfig";
import { pickImage } from "@/lib/images";

/**
 * One reusable page for all seven service categories.
 *
 *   Breadcrumb → hero → introduction → all services → featured → benefits →
 *   process → why BifidMedia → other channels → testimonials → FAQ →
 *   consultation CTA → newsletter
 */
export function ServiceCategoryPage({
  category,
  services,
  groups,
  featured,
  context,
  siblings,
}) {
  const heroImage = pickImage(`${category.id}-hero`);
  const grouped = services.length > 12;

  const faqs = services
    .filter((service) => service.faqs?.length)
    .slice(0, 10)
    .map((service) => service.faqs[0]);

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.label} services`,
    description: category.metaDescription,
    url: `${siteConfig.url}${category.href}`,
    isPartOf: { "@id": `${siteConfig.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: services.length,
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${siteConfig.url}${service.href}`,
      })),
    },
  };

  return (
    <>
      <ServiceHero
        eyebrow={category.tagline}
        heading={category.heading}
        intro={category.intro}
        valueLine={category.valueLine}
        image={heroImage.src}
        imageAlt={heroImage.alt}
        platform={category.icon}
        accentColor={category.color}
        badges={[
          `${services.length} ${category.shortLabel} services`,
          "Named account manager",
          "Buy one track or the whole account",
        ]}
        primaryCta={{ label: "Get a free consultation", href: "/book-consultation" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: category.shortLabel },
        ]}
      />

      {/* Category introduction */}
      <Section tone="canvas">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5" data-aos="fade-up">
            <h2 className="text-[clamp(1.45rem,2.8vw,2.1rem)]">
              {category.introHeading}
            </h2>
          </div>
          <div className="lg:col-span-7" data-aos="fade-up" data-aos-delay="100">
            {category.introBody.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mb-4 text-[1rem] leading-relaxed text-muted last:mb-0"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/get-started" withArrow>
                Get started
              </Button>
              {category.id !== "business" ? (
                <Button href={category.hubHref} variant="outline">
                  {category.hubLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      {/* All services */}
      <Section tone="white" id="all-services">
        <SectionHeading
          eyebrow="Full catalogue"
          title={`All ${category.shortLabel} services`}
          text={`Every ${category.shortLabel} capability BifidMedia offers. Each one is available on its own or as part of a managed engagement.`}
        />

        {grouped ? (
          <div className="mt-12 space-y-12">
            {groups.map((group) => (
              <div key={group.id}>
                <div className="mb-5 flex flex-col gap-1 border-b border-line pb-3 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="flex items-center gap-3 text-[1.15rem]">
                    <span
                      aria-hidden="true"
                      className="h-5 w-1 rounded-full"
                      style={{ background: category.color }}
                    />
                    {group.title}
                  </h3>
                  <p className="max-w-xl text-[0.86rem] text-muted">
                    {group.description}
                  </p>
                </div>
                <ServiceCardGrid
                  services={group.services}
                  accentColor={category.color}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12">
            <ServiceCardGrid services={services} accentColor={category.color} />
          </div>
        )}
      </Section>

      {/* Featured services — a slider here, never for the full catalogue above */}
      <Section tone="canvas">
        <SectionHeading
          title={`Where most ${category.shortLabel} engagements start`}
          text="These are the tracks clients most often begin with, and the ones that tend to move the numbers first."
        />
        <div className="mt-12" data-aos="fade-up">
          <Slider
            slidesPerView={1}
            spaceBetween={20}
            autoplayDelay={6000}
            ariaLabel={`Featured ${category.shortLabel} services`}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {featured.map((service) => (
              <div key={service.href} className="h-full pb-1">
                <ServiceCard service={service} accentColor={category.color} />
              </div>
            ))}
          </Slider>
        </div>
      </Section>

      {/* Benefits */}
      <IconCardGrid
        tone="white"
        heading={`Why sellers choose BifidMedia for ${category.shortLabel}`}
        text="Three commitments we put in writing before any work begins."
        cards={context.trust}
      />

      {/* Process */}
      <IconCardGrid
        tone="canvas"
        numbered
        aos="alternate"
        heading={`How a ${category.shortLabel} engagement runs`}
        text="A repeatable sequence with a checkpoint you sign off at each stage."
        cards={context.process.map((step) => ({
          title: step.title,
          text: step.text,
        }))}
      />

      <StatsBand stats={context.stats} tone="white" />

      {/* Why BifidMedia */}
      <Section tone="canvas">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5" data-aos="fade-right">
            <h2 className="text-[clamp(1.45rem,2.8vw,2.1rem)]">
              {whyChoose.heading}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
              The same standard applies whichever channel you start with.
            </p>
          </div>
          <dl className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {whyChoose.points.map((point, index) => (
              <div
                key={point.title}
                className="card-surface p-6"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <dt className="text-[1.02rem] font-bold text-ink">
                  {point.title}
                </dt>
                <dd className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                  {point.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* Other channels */}
      <Section tone="white">
        <SectionHeading
          title="Explore our other service categories"
          text="Most clients run two or three channels. The same team handles all of them, so pricing, stock and creative stay consistent."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siblings.map((sibling, index) => (
            <li key={sibling.id} data-aos="fade-up" data-aos-delay={(index % 3) * 70}>
              <Link
                href={sibling.href}
                className="group relative flex h-full items-center gap-4 overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-5 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                  style={{ background: sibling.color }}
                />
                <PlatformIcon platform={sibling.icon} size={38} />
                <span className="min-w-0 flex-1">
                  <span className="block text-[1rem] font-semibold text-ink transition-colors duration-200 group-hover:text-brand">
                    {sibling.label}
                  </span>
                  <span className="block text-[0.83rem] text-muted">
                    {sibling.tagline}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <QuoteSlider tone="sky" />
      <CommitmentMarquee />

      <FaqSection
        heading={`${category.shortLabel} questions we are asked most`}
        items={faqs}
        tone="canvas"
      />

      <ServiceCTA
        zoomIn
        heading={`Not sure which ${category.shortLabel} service you need?`}
        paragraphs={[
          category.valueLine,
          "Book a free call and we will tell you what we would prioritise, what it would cost and what we would leave alone for now.",
        ]}
        image={heroImage.src}
        imageAlt={heroImage.alt}
        primaryCta={{ label: "Book a free consultation", href: "/book-consultation" }}
      />

      <AskStrategist />
      <Newsletter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collection).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

export default ServiceCategoryPage;
