import Image from "next/image";
import { ArrowRight, BarChart3, Boxes, CheckCircle2, ClipboardCheck, Layers3, LineChart, Quote, Rocket, SearchCheck, Settings2, ShieldCheck, Sparkles, Star, Target, Workflow } from "lucide-react";
import { FaAmazon } from "react-icons/fa";
import { SiEbay, SiEtsy, SiGoogleads, SiMeta, SiShopify, SiTiktok, SiWoocommerce, SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AutoSlider } from "@/components/ui/AutoSlider";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { services } from "@/data/services";
import { homeFaqs } from "@/data/faqs";
import { platforms, siteConfig } from "@/data/siteConfig";
import { caseStudies, testimonials } from "@/data/testimonials";

const painPoints = ["Unsure how to start", "Store traffic is not converting", "Marketplace management is overwhelming", "Advertising costs are rising", "Product listings are not ranking", "Daily operations consume too much time"];
const capabilities = ["Business setup guidance", "Marketplace onboarding", "Store design and development", "Product research", "Product sourcing support", "Listing creation", "Marketplace SEO", "Paid advertising", "Inventory coordination", "Email and SMS marketing", "Funnel development", "Reputation management", "Analytics and reporting"];
const platformIcons = {
  Amazon: FaAmazon,
  Walmart: WalmartIcon,
  Shopify: SiShopify,
  "TikTok Shop": SiTiktok,
  Etsy: SiEtsy,
  eBay: SiEbay,
  YouTube: SiYoutube,
  Meta: SiMeta,
  "Google Ads": SiGoogleads,
  WooCommerce: SiWoocommerce,
};
const processSteps = [
  ["01", SearchCheck, "Discovery and Business Audit", "We review your current business stage, marketplace readiness, channel risks, assets, and growth priorities."],
  ["02", ClipboardCheck, "Strategy and Action Plan", "BifidMedia translates the audit into a practical roadmap with responsibilities, timelines, and measurable next steps."],
  ["03", Settings2, "Setup and Implementation", "Our team supports storefront, listing, advertising, workflow, and reporting setup based on the approved plan."],
  ["04", LineChart, "Management and Optimization", "We monitor performance signals, improve execution quality, and refine campaigns, listings, and operations."],
  ["05", Rocket, "Reporting and Growth", "You receive clear reporting, practical recommendations, and the next set of growth priorities."],
];

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy" data-aos="fade-right">
          <p className="eyebrow">Premium e-commerce growth systems</p>
          <h1>Launch, Manage and Scale Your E-commerce Business</h1>
          <p>BifidMedia helps entrepreneurs and growing brands build, manage and optimize stores across Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay through strategy, automation, advertising and marketplace expertise.</p>
          <div className="cta-row">
            <Button href="/book-consultation">Get a Free Consultation <ArrowRight size={17} /></Button>
            <Button href="/services/amazon-store" variant="secondary">Explore Services</Button>
          </div>
          <div className="market-badges">{platforms.slice(0, 6).map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="hero-art" aria-label="BifidMedia marketplace growth dashboard" data-aos="fade-left">
          <div className="orb orb-a" />
          <Image
            src="/images/home/hero-ecommerce-growth.png"
            alt="BifidMedia e-commerce management and marketplace growth services"
            width={1200}
            height={1200}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="hero-main-image"
          />
          <div className="dashboard-card main-card">
            <span>Growth Command Center</span>
            <strong>Marketplace systems, ads and operations in one plan</strong>
            <div className="bars"><i /><i /><i /><i /></div>
          </div>
          {["Amazon SEO", "Shopify UX", "PPC Testing", "Walmart Catalog"].map((item, index) => <div className={`float-card f${index}`} key={item}>{item}</div>)}
        </div>
      </section>

      <section className="strip" data-aos="fade-up">
        <strong>Not sure which service fits your goals?</strong>
        <span>Get a practical recommendation before choosing a package.</span>
        <Button href="/book-consultation" variant="secondary">Schedule consultation</Button>
      </section>

      <section className="marquee-section">
        <div className="section-title" data-aos="fade-up">
          <p className="eyebrow">Platforms We Work With</p>
          <h2>Marketplace and growth channels we support.</h2>
        </div>
        <AutoSlider delay={2200} className="platform-slider">
          {platforms.map((platform) => {
            const PlatformIcon = platformIcons[platform];
            return (
              <div className="platform-card" key={platform}>
                <div className="platform-icon">{PlatformIcon ? <PlatformIcon aria-hidden="true" /> : <Boxes aria-hidden="true" />}</div>
                <h3>{platform}</h3>
              </div>
            );
          })}
        </AutoSlider>
      </section>

      <section className="split-section" data-aos="fade-up">
        <div>
          <p className="eyebrow">Agency for operators</p>
          <h2>E-commerce growth needs more than scattered tasks.</h2>
        </div>
        <div className="media-copy">
          <Image src="/images/mockups/marketplace-dashboard.svg" alt="Marketplace management dashboard with sales, listings, and advertising metrics" width={960} height={720} sizes="(max-width: 768px) 100vw, 44vw" />
          <p>BifidMedia turns setup, branding, listings, paid media, marketplace operations, and reporting into a coordinated system. The goal is not hype; it is clearer execution, fewer blind spots, and better decisions as your online business matures.</p>
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Core solutions" title="Choose the channel, then build the system around it." />
        <div className="card-grid">
          {services.slice(0, 8).map((service, index) => (
            <a className="service-card" href={service.path} key={service.slug} data-aos="fade-up" data-aos-delay={Math.min(index * 80, 400)}>
              <Sparkles size={22} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span>Learn more <ArrowRight size={14} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="stats-section">
        {siteConfig.stats.map((stat, index) => (
          <div className="stat-card" key={stat.label} data-aos="zoom-in" data-aos-delay={Math.min(index * 100, 400)}>
            <strong><AnimatedCounter value={stat.value} /></strong>
            <span>{stat.label}</span>
            <small>{stat.note}</small>
          </div>
        ))}
      </section>

      <section className="section" data-aos="fade-up">
        <SectionTitle eyebrow="Pain points" title="Common growth friction BifidMedia helps organize." />
        <div className="pill-grid">{painPoints.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      <section className="solution-band" data-aos="fade-up">
        <div>
          <p className="eyebrow">The BifidMedia solution</p>
          <h2>Strategy, setup, branding, listings, advertising, operations, optimization and reporting.</h2>
          <p>We connect the work that usually lives in separate silos, then create a path your team can understand and improve over time.</p>
        </div>
        <div className="capability-list">
          {capabilities.map((item) => <span key={item}><CheckCircle2 size={16} />{item}</span>)}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Marketplace services" title="Service paths aligned to channel intent." />
        <AutoSlider>
          {services.slice(0, 6).map((service) => (
            <article className="market-card marketplace-card" key={service.slug}>
              <Boxes size={26} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.path}>Learn more</a>
            </article>
          ))}
        </AutoSlider>
      </section>

      <section className="timeline-section">
        <SectionTitle eyebrow="Process" title="A practical operating rhythm from audit to scale." />
        <div className="process-journey">
          {processSteps.map(([number, Icon, title, description], index) => (
            <div className={`process-step ${index % 2 ? "right" : "left"}`} key={title} data-aos={index % 2 ? "fade-left" : "fade-right"} data-aos-delay={Math.min(index * 100, 400)}>
              <div className="process-marker">{number}</div>
              <article>
                <div className="process-icon"><Icon size={22} /></div>
                <span>Step {number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <SectionTitle eyebrow="Full-service capabilities" title="A broad stack for online business execution." />
        <div className="capability-tabs">
          {capabilities.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
        </div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Why choose BifidMedia" title="Built for clarity, compliance, and execution." />
        <div className="card-grid compact">
          {[
            ["Tailored strategy", Target],
            ["Dedicated project support", Layers3],
            ["Transparent reporting", BarChart3],
            ["Multi-platform expertise", Boxes],
            ["Conversion-focused execution", Sparkles],
            ["Scalable systems", Workflow],
            ["Trust-conscious process", ShieldCheck],
          ].map(([label, Icon]) => <div className="mini-card" key={label}><Icon size={22} /><h3>{label}</h3></div>)}
        </div>
      </section>

      <section className="section" data-aos="fade-up">
        <SectionTitle eyebrow="Case studies" title="Placeholder stories ready for verified results." />
        <div className="card-grid two">{caseStudies.map((item) => <article className="case-card" key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><strong>{item.result}</strong><p>{item.summary}</p></article>)}</div>
      </section>

      <section className="section">
        <SectionTitle eyebrow="Testimonials" title="Sample testimonials for layout only." />
        <p className="warning">Replace all sample testimonials before production launch.</p>
        <AutoSlider
          className="testimonial-slider"
          delay={4500}
          speed={750}
          pagination
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 14 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {testimonials.map((item) => (
            <blockquote className="testimonial" key={item.name}>
              <Quote className="quote-icon" size={24} />
              <div className="testimonial-head">
                <div className="testimonial-avatar">{item.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
                <div>
                  <strong>{item.name}</strong>
                  <cite>{item.role}</cite>
                </div>
              </div>
              <div className="rating" aria-label={`${item.rating} star sample rating`}>
                {Array.from({ length: item.rating }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}
              </div>
              <span className="testimonial-platform">{item.platform}</span>
              <p>{item.quote}</p>
              <small>{item.result}</small>
            </blockquote>
          ))}
        </AutoSlider>
      </section>

      <section className="cta-banner" data-aos="fade-up">
        <h2>Ready to build a cleaner marketplace growth plan?</h2>
        <p>Book a consultation or contact BifidMedia to discuss your current stage.</p>
        <div className="cta-row"><Button href="/book-consultation">Get a Free Consultation</Button><Button href="/contact" variant="secondary">Contact BifidMedia</Button></div>
      </section>

      <section className="newsletter-section" data-aos="fade-up">
        <h2>Get Marketplace Growth Insights in Your Inbox</h2>
        <NewsletterForm />
      </section>

      <section className="section faq-home" data-aos="fade-up">
        <SectionTitle eyebrow="FAQs" title="Straight answers before you book." />
        <Accordion items={homeFaqs} />
      </section>
    </>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title" data-aos="fade-up">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function WalmartIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      {[0, 60, 120, 180, 240, 300].map((rotate) => (
        <rect key={rotate} x="22" y="5" width="4" height="12" rx="2" fill="currentColor" transform={`rotate(${rotate} 24 24)`} />
      ))}
    </svg>
  );
}
