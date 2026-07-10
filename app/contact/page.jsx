import { LeadForm } from "@/components/forms/LeadForm";
import { siteConfig } from "@/data/siteConfig";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = { title: "Contact Us", description: "Contact BifidMedia for e-commerce, marketplace, branding, advertising, and automation support." };

export default function Page() {
  return (
    <section className="simple-page form-page contact-page">
      <div className="contact-methods">
        <InfoCard icon={<Mail />} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
        <InfoCard icon={<Phone />} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone}`} />
        <InfoCard icon={<MapPin />} label="Address" value={siteConfig.address} />
      </div>
      <div className="form-intro">
        <p className="eyebrow">Contact</p>
        <h1>Tell us what you are building.</h1>
        <p>Send a message and BifidMedia will help you choose the right service path for your marketplace, store, brand, or digital business.</p>
        <Image className="page-image" src="/images/mockups/consultation-illustration.svg" alt="BifidMedia consultation dashboard for marketplace and store growth" width={760} height={680} sizes="(max-width: 768px) 100vw, 44vw" />
        <div className="map-panel">
          <MapPin size={24} />
          <div>
            <strong>Map and office details</strong>
            <span>Replace this placeholder with the client’s verified business address or embedded map before launch.</span>
          </div>
        </div>
      </div>
      <LeadForm type="contact" />
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
