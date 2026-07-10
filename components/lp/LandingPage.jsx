import { Phone, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { Accordion } from "@/components/ui/Accordion";
import { serviceFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/siteConfig";

export function LandingPage({ page }) {
  return (
    <main className="lp">
      <Header simple />
      <section className="lp-hero">
        <div>
          <p className="eyebrow">{page.keyword}</p>
          <h1>{page.h1}</h1>
          <p>{page.description} No fake urgency, no guaranteed outcomes, and no hidden keyword stuffing.</p>
          <div className="lp-actions">
            <a href={`tel:${siteConfig.phone}`}><Phone size={17} /> Call {siteConfig.phone}</a>
            <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}>WhatsApp</a>
          </div>
          <div className="trust-row"><span><ShieldCheck size={16} /> Privacy-aware</span><span><Zap size={16} /> Fast campaign fit</span></div>
        </div>
        <div className="lead-panel lp-form">
          <Image src="/images/mockups/marketplace-dashboard.svg" alt={`${page.title} PPC landing page consultation dashboard`} width={960} height={720} sizes="(max-width: 768px) 100vw, 36vw" />
          <h2>Get a focused proposal</h2>
          <LeadForm type="ppc_lead" compact service={page.title} />
        </div>
      </section>
      <section className="lp-section">
        <h2>What you get</h2>
        <div className="card-grid compact">{page.benefits.map((item) => <div className="mini-card" key={item}>{item}</div>)}</div>
      </section>
      <section className="lp-section">
        <h2>Relevant deliverables</h2>
        <div className="pill-grid">{["Audit", "Roadmap", "Implementation plan", "Tracking guidance", "Reporting rhythm", "Consent-aware lead handling"].map((item) => <span key={item}>{item}</span>)}</div>
      </section>
      <section className="lp-section"><Accordion items={serviceFaqs} /></section>
      <section className="cta-banner"><h2>Talk to BifidMedia about {page.title}</h2><Button href="/book-consultation">Request Consultation</Button></section>
    </main>
  );
}
