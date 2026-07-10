import { Accordion } from "@/components/ui/Accordion";
import { homeFaqs, serviceFaqs } from "@/data/faqs";

export const metadata = { title: "FAQs", description: "Answers to common questions about BifidMedia services, consultations, outcomes, forms, and marketplace support." };

export default function Page() {
  return (
    <section className="simple-page">
      <p className="eyebrow">FAQs</p>
      <h1>Answers before you book.</h1>
      <Accordion items={[...homeFaqs, ...serviceFaqs]} />
    </section>
  );
}
