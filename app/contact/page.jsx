import { LeadForm } from "@/components/forms/LeadForm";
import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = { title: "Contact Us", description: "Contact BifidMedia for e-commerce, marketplace, branding, advertising, and automation support." };

export default function Page() {
  return (
    <section className="simple-page form-page contact-page">
      <div className="contact-methods">
        <InfoCard icon={<Phone />} label="Call Us" value={siteConfig.phoneDisplay} href={siteConfig.phoneHref} ariaLabel={siteConfig.callAriaLabel} />
        <InfoCard icon={<Mail />} label="Email Us" value={siteConfig.email} href={siteConfig.emailHref} />
        <InfoCard icon={<MapPin />} label="Visit Us" value={siteConfig.addressLines} href={siteConfig.mapUrl} external />
      </div>
      <div className="form-intro">
        <p className="eyebrow">Contact</p>
        <h1>Tell us what you are building.</h1>
        <p>Send a message and BifidMedia will help you choose the right service path for your marketplace, store, brand, or digital business.</p>
        <Image className="page-image" src="/images/mockups/consultation-illustration.svg" alt="BifidMedia consultation dashboard for marketplace and store growth" width={760} height={680} sizes="(max-width: 768px) 100vw, 44vw" />
        <div className="map-panel">
          <MapPin size={24} />
          <div>
            <strong>Office location</strong>
            <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer">{siteConfig.address}</a>
          </div>
        </div>
      </div>
      <LeadForm type="contact" />
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
