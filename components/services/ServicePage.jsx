import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import {
  BenefitsSection,
  CaseStudySlider,
  ChallengesSection,
  DeliverablesGrid,
  DetailedOverview,
  getServiceImage,
  InnerCTA,
  InnerNewsletter,
  RelatedServicesSlider,
  ServiceFAQ,
  ServiceIntroduction,
  ServiceProcess,
  ServiceShowcase,
  ServiceStats,
  ServiceTestimonials,
  WhyBifidMedia,
} from "@/components/inner/InnerSections";

export function ServicePage({ service, base = "Services" }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 6);
  const image = getServiceImage(service);

  return (
    <>
      <section className="service-hero inner-hero">
        <Breadcrumbs items={[{ label: base }, { label: service.title }]} />
        <div className="service-hero-grid">
          <div data-aos="fade-right">
            <p className="eyebrow">{service.keyword}</p>
            <h1>{service.h1}</h1>
            <p>{service.description}</p>
            <div className="cta-row">
              <Button href="/book-consultation">Get a Free Consultation <ArrowRight size={17} /></Button>
              <Button href="/contact" variant="secondary">Contact {siteConfig.brandName}</Button>
            </div>
            <div className="trust-badges">
              <span>Strategy first</span>
              <span>Clear reporting</span>
              <span>No unsupported guarantees</span>
            </div>
          </div>
          <div className="lead-panel service-visual-panel inner-hero-visual" data-aos="fade-left">
            <Image src={image} alt={`${service.title} visual for ${siteConfig.brandName}`} width={900} height={620} priority sizes="(max-width: 768px) 100vw, 44vw" />
            <div className="floating-dashboard-card">
              <strong>{service.title}</strong>
              <span>Audit, strategy, execution, reporting</span>
            </div>
            <h2>Request a service plan</h2>
            <LeadForm compact service={service.title} />
          </div>
        </div>
      </section>

      <ServiceIntroduction service={service} />
      <ChallengesSection service={service} />
      <DetailedOverview service={service} />
      <DeliverablesGrid service={service} />
      <BenefitsSection service={service} />
      <ServiceProcess service={service} />
      <WhyBifidMedia service={service} />
      <ServiceShowcase service={service} />
      <ServiceStats />
      <RelatedServicesSlider related={related} />
      <CaseStudySlider />
      <ServiceTestimonials />
      <ServiceFAQ service={service} />
      <InnerCTA service={service} />
      <InnerNewsletter />
    </>
  );
}
