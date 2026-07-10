import { LeadForm } from "@/components/forms/LeadForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = { title: "Book a Free Consultation", description: "Book a free BifidMedia consultation for marketplace management, e-commerce automation, branding, and advertising." };

export default function Page() {
  return (
    <section className="simple-page form-page consult-page">
      <div className="contact-methods">
        <InfoCard icon={<Mail />} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
        <InfoCard icon={<Phone />} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone}`} />
        <InfoCard icon={<MapPin />} label="Address" value={siteConfig.address} />
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

function InfoCard({ icon, label, value, href }) {
  const content = (
    <>
      <span>{icon}</span>
      <div>
        <strong>{label}</strong>
        <p>{value}</p>
      </div>
    </>
  );
  return href ? <a className="contact-card" href={href}>{content}</a> : <div className="contact-card">{content}</div>;
}
