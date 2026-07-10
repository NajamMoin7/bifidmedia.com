import { LeadForm } from "@/components/forms/LeadForm";
import Image from "next/image";

export const metadata = { title: "Become a Partner", description: "Apply to discuss partnership opportunities with BifidMedia." };

export default function Page() {
  return (
    <section className="simple-page form-page">
      <div>
        <p className="eyebrow">Partner program</p>
        <h1>Explore a BifidMedia partnership.</h1>
        <p>Use this form for referral, strategic partner, creator, vendor, or agency collaboration conversations.</p>
        <Image className="page-image" src="/images/mockups/service-process.svg" alt="Partnership workflow and digital business collaboration process" width={960} height={720} sizes="(max-width: 768px) 100vw, 44vw" />
      </div>
      <LeadForm type="partner" service="Partner application" />
    </section>
  );
}
