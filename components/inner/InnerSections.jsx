import Image from "next/image";
import { ArrowRight, CheckCircle2, ClipboardCheck, Layers3, LineChart, Quote, Rocket, SearchCheck, Settings2, ShieldCheck, Star, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AutoSlider } from "@/components/ui/AutoSlider";
import { Accordion } from "@/components/ui/Accordion";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { caseStudies, testimonials } from "@/data/testimonials";
import { serviceFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";

const imageMap = {
  shopify: "/images/shopify/shopify-store-development.webp",
  walmart: "/images/walmart/marketplace-management-team.webp",
  tiktok: "/images/contact/business-consultation-workspace.webp",
  business: "/images/business/ecommerce-consultation-team.webp",
  amazon: "/images/amazon/amazon-analytics-dashboard.webp",
  default: "/images/business/ecommerce-consultation-team.webp",
};

export function getServiceImage(service) {
  const text = `${service.slug} ${service.title}`.toLowerCase();
  if (text.includes("shopify")) return imageMap.shopify;
  if (text.includes("walmart")) return imageMap.walmart;
  if (text.includes("tiktok")) return imageMap.tiktok;
  if (text.includes("youtube") || text.includes("branding") || text.includes("marketing") || text.includes("mobile") || text.includes("business") || text.includes("launch")) return imageMap.business;
  if (text.includes("amazon")) return imageMap.amazon;
  return imageMap.default;
}

export function ServiceIntroduction({ service }) {
  return (
    <section className="inner-section inner-intro" data-aos="fade-up">
      <div>
        <p className="eyebrow">Service overview</p>
        <h2>Built for operators who need clarity before scale.</h2>
      </div>
      <div>
        <p>{service.title} is designed for business owners, marketplace sellers, and growth teams who need a practical path from planning to execution. The work begins with current-state context, then moves into clearer priorities, better assets, stronger workflows, and reporting that supports decision making.</p>
        <p>{siteConfig.brandName} helps connect strategy, channel requirements, creative assets, advertising decisions, and daily operations so the service feels like one coordinated growth system instead of scattered tasks.</p>
      </div>
    </section>
  );
}

export function ChallengesSection({ service }) {
  const challenges = [
    "Unclear launch priorities",
    "Listings or pages are not converting",
    "Advertising decisions lack structure",
    "Operations rely on manual handoffs",
    "Reporting does not show the next action",
    "Growth ideas are not connected to execution",
  ];
  return (
    <section className="inner-section challenge-section" data-aos="fade-up">
      <div className="section-title">
        <p className="eyebrow">Common challenges</p>
        <h2>What {service.title} helps organize.</h2>
      </div>
      <div className="challenge-grid">
        {challenges.map((item, index) => (
          <article className="inner-card" key={item} data-aos="fade-up" data-aos-delay={Math.min(index * 70, 400)}>
            <CheckCircle2 />
            <h3>{item}</h3>
            <p>We turn this issue into a practical action area with clear ownership, supporting assets, and a measurable next step.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DetailedOverview({ service }) {
  return (
    <section className="inner-section detailed-overview" data-aos="fade-up">
      <div className="image-panel">
        <Image src={getServiceImage(service)} alt={`${service.title} planning and dashboard visual for ${siteConfig.brandName}`} width={900} height={620} sizes="(max-width: 1024px) 100vw, 45vw" />
      </div>
      <div>
        <p className="eyebrow">Detailed approach</p>
        <h2>A complete service path, not a one-off task.</h2>
        <p>{service.description} The page strategy, channel execution, operational workflow, and reporting cadence are shaped around the stage of the business. That means the work can support a new launch, a messy account, a brand refresh, a paid media push, or an internal team that needs a better system.</p>
        <p>Every recommendation is framed around what can be improved, tested, documented, or monitored. {siteConfig.brandName} avoids unsupported promises and focuses on practical levers that help the business make better decisions.</p>
      </div>
    </section>
  );
}

export function DeliverablesGrid({ service }) {
  const deliverables = [...(service.deliverables || []), ...(service.includes || [])].slice(0, 6);

  return (
    <section className="inner-section" data-aos="fade-up">
      <div className="section-title">
        <p className="eyebrow">What is included</p>
        <h2>Deliverables shaped around {service.title}.</h2>
      </div>
      <div className="three-columns">
        {deliverables.map((item, index) => (
          <article className="inner-card" key={item} data-aos="fade-up" data-aos-delay={Math.min(index * 70, 400)}>
            <Layers3 />
            <h3>{item}</h3>
            <p>Documented, prioritized, and connected to the wider service roadmap so your team understands the purpose of the work.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BenefitsSection({ service }) {
  return (
    <section className="inner-section benefits-section" data-aos="fade-up">
      <div>
        <p className="eyebrow">Business benefits</p>
        <h2>Focused on execution quality and growth readiness.</h2>
        <p>Benefits vary by account stage, budget, product category, and channel maturity. These outcomes are not guarantees, but they are the practical improvement areas this service is designed to support.</p>
      </div>
      <div className="benefit-list">
        {service.benefits.map((item) => <span key={item}><Target size={18} />{item}</span>)}
      </div>
    </section>
  );
}

export function ServiceProcess({ service }) {
  const steps = [
    ["01", SearchCheck, "Discovery and audit", "Review goals, assets, current performance, channel fit, and operational constraints."],
    ["02", ClipboardCheck, "Strategy and plan", "Define priorities, deliverables, responsibilities, and a practical implementation sequence."],
    ["03", Settings2, "Setup and execution", "Create, update, configure, or optimize the service assets and workflows."],
    ["04", LineChart, "Management and improvement", "Monitor performance signals and refine the work based on evidence."],
    ["05", Rocket, "Reporting and next actions", "Share reporting, learning, and the next growth priorities."],
  ];
  return (
    <section className="timeline-section" data-aos="fade-up">
      <div className="section-title"><p className="eyebrow">How it works</p><h2>How {siteConfig.brandName} approaches {service.title}.</h2></div>
      <div className="process-journey">
        {steps.map(([number, Icon, title, description], index) => (
          <div className={`process-step ${index % 2 ? "right" : "left"}`} key={title} data-aos={index % 2 ? "fade-left" : "fade-right"} data-aos-delay={Math.min(index * 90, 400)}>
            <div className="process-marker">{number}</div>
            <article><div className="process-icon"><Icon size={22} /></div><span>Step {number}</span><h3>{title}</h3><p>{description}</p></article>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServiceShowcase({ service }) {
  return (
    <section className="inner-section showcase-section" data-aos="zoom-in">
      <div>
        <p className="eyebrow">Visual showcase</p>
        <h2>Dashboards, assets, and workflows made easier to manage.</h2>
        <p>Use this section to replace sample visuals with approved screenshots, campaign dashboards, product pages, store mockups, or reporting views when client assets are available.</p>
      </div>
      <Image src={getServiceImage(service)} alt={`${service.title} dashboard showcase for ${siteConfig.brandName}`} width={960} height={720} sizes="(max-width: 1024px) 100vw, 48vw" />
    </section>
  );
}

export function ServiceStats() {
  return (
    <section className="stats-section inner-stats">
      {siteConfig.stats.map((stat, index) => (
        <div className="stat-card" key={stat.label} data-aos="zoom-in" data-aos-delay={Math.min(index * 100, 400)}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
          <small>{stat.note}</small>
        </div>
      ))}
    </section>
  );
}

export function WhyBifidMedia({ service }) {
  const reasons = ["Tailored strategy", "Transparent reporting", "Channel-aware execution", "Dedicated project support", "Conversion-focused thinking", "Scalable systems"];
  return (
    <section className="inner-section why-section" data-aos="fade-up">
      <div className="section-title"><p className="eyebrow">Why {siteConfig.brandName}</p><h2>Support designed for practical growth decisions.</h2></div>
      <div className="challenge-grid">
        {reasons.map((reason, index) => (
          <article className="inner-card" key={reason} data-aos="fade-up" data-aos-delay={Math.min(index * 70, 400)}>
            <ShieldCheck />
            <h3>{reason}</h3>
            <p>{siteConfig.brandName} applies this principle to {service.title} so the work stays focused, documented, and commercially useful.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RelatedServicesSlider({ related }) {
  return (
    <section className="inner-section" data-aos="fade-up">
      <div className="section-title"><p className="eyebrow">Related services</p><h2>Build a connected growth stack.</h2></div>
      <AutoSlider delay={3200} pagination>
        {related.map((item) => (
          <a className="service-card" href={item.path} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p><span>Learn more <ArrowRight size={14} /></span></a>
        ))}
      </AutoSlider>
    </section>
  );
}

export function CaseStudySlider() {
  return (
    <section className="inner-section" data-aos="fade-up">
      <div className="section-title"><p className="eyebrow">Case studies</p><h2>Placeholder stories ready for verified proof.</h2></div>
      <AutoSlider delay={3600} pagination>
        {caseStudies.map((item) => <article className="case-card" key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><strong>{item.result}</strong><p>{item.summary}</p></article>)}
      </AutoSlider>
    </section>
  );
}

export function ServiceTestimonials() {
  return (
    <section className="inner-section" data-aos="fade-up">
      <div className="section-title"><p className="eyebrow">Testimonials</p><h2>Sample testimonial layout.</h2></div>
      <p className="warning">Replace all sample testimonials before production launch.</p>
      <AutoSlider delay={4500} speed={750} pagination breakpoints={{ 320: { slidesPerView: 1, spaceBetween: 14 }, 768: { slidesPerView: 2, spaceBetween: 20 }, 1200: { slidesPerView: 3, spaceBetween: 24 } }}>
        {testimonials.map((item) => (
          <blockquote className="testimonial" key={item.name}><Quote className="quote-icon" size={24} /><div className="testimonial-head"><div className="testimonial-avatar">{item.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div><div><strong>{item.name}</strong><cite>{item.role}</cite></div></div><div className="rating">{Array.from({ length: item.rating }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}</div><span className="testimonial-platform">{item.platform}</span><p>{item.quote}</p><small>{item.result}</small></blockquote>
        ))}
      </AutoSlider>
    </section>
  );
}

export function ServiceFAQ({ service }) {
  const faqs = [
    [`How does ${service.title} begin?`, "It begins with discovery, access review where needed, and a practical audit of current priorities."],
    [`Is ${service.title} suitable for a new business?`, "Yes, if the business has a clear goal and is ready to organize the assets, budget, and decisions needed for launch."],
    [`Does ${siteConfig.brandName} guarantee results?`, "No. The service is designed to improve execution quality, decision making, and growth readiness without unsupported promises."],
    ...serviceFaqs,
  ];
  return <section className="inner-section" data-aos="fade-up"><div className="section-title"><p className="eyebrow">FAQs</p><h2>Questions about {service.title}.</h2></div><Accordion items={faqs} /></section>;
}

export function InnerCTA({ service }) {
  return (
    <section className="cta-banner inner-cta" data-aos="zoom-in">
      <div><h2>Ready to plan {service.title} with {siteConfig.brandName}?</h2><p>Book a consultation, call, or use WhatsApp to share your goals and current stage.</p></div>
      <div className="cta-row"><Button href="/book-consultation">Book a Consultation</Button><Button href="/contact" variant="secondary">Contact Us</Button></div>
    </section>
  );
}

export function InnerNewsletter() {
  return <section className="newsletter-section" data-aos="fade-up"><h2>Get Marketplace Growth Insights in Your Inbox</h2><NewsletterForm /></section>;
}
