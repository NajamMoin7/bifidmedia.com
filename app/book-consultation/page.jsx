import { LeadForm } from "@/components/forms/LeadForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = { title: "Book a Free Consultation", description: "Book a free BifidMedia consultation for marketplace management, e-commerce automation, branding, and advertising." };

export default function Page() {
  return (
    <section className="simple-page form-page consult-page">
      <div className="contact-methods">
        <InfoCard icon={<Phone />} label="Call Us" value={siteConfig.phoneDisplay} href={siteConfig.phoneHref} ariaLabel={siteConfig.callAriaLabel} />
        <InfoCard icon={<Mail />} label="Email Us" value={siteConfig.email} href={siteConfig.emailHref} />
        <InfoCard icon={<MapPin />} label="Visit Us" value={siteConfig.addressLines} href={siteConfig.mapUrl} external />
      </div>
      <div className="form-intro">
        <p className="eyebrow">Free consultation</p>
        <h1>Get a practical e-commerce growth plan.</h1>
        <p>Share your platform, goals, budget range, and timeline. BifidMedia will recommend a clear next step for your marketplace, store, or digital business.</p>
        <div className="map-panel">
          <MapPin size={24} />
          <div>
            <strong>Consultation coverage</strong>
            <span>Remote strategy calls for marketplace sellers, Shopify brands, and digital business teams.</span>
          </div>
        </div>
      </div>
      <LeadForm type="consultation" />
    </section>
  );
}

function InfoCard({ icon, label, value, href, ariaLabel, external = false }) {
  const lines = Array.isArray(value) ? value : [value];
  const content = (
    <>
      <span>{icon}</span>
      <div>
        <strong>{label}</strong>
        <p>{lines.map((line) => <span key={line}>{line}</span>)}</p>
      </div>
    </>
  );
  return href ? <a className="contact-card" href={href} aria-label={ariaLabel} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>{content}</a> : <div className="contact-card">{content}</div>;
}
