import { ServiceHero } from "@/components/services/ServiceHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { Newsletter } from "@/components/home/Newsletter";
import { faqGroups, homeFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about how BifidMedia works — services, scope, access, reporting cadence, pricing structure and commercial terms for e-commerce store management.",
  path: "/faq",
});

export default function FaqPage() {
  const allItems = [...homeFaqs, ...faqGroups.flatMap((group) => group.items)];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <ServiceHero
        eyebrow="Frequently asked questions"
        heading="Everything People Ask Before Working With Us"
        intro="How we work, what we charge for, what access we need, how often you hear from us and what happens if things do not work out. If your question is not here, ask us directly."
        valueLine="No question is too basic. Most of these came from first calls."
        badges={["No obligation", "Straight answers", "Response within one business day"]}
      />

      <Breadcrumbs items={[{ label: "FAQs" }]} />

      <Section tone="white">
        <SectionHeading
          title="Top questions"
          text="The eleven questions that come up on almost every first call."
        />
        <div className="mx-auto mt-10 max-w-4xl" data-aos="fade-up">
          <Accordion items={homeFaqs} defaultOpen={0} />
        </div>
      </Section>

      {faqGroups.map((group, index) => (
        <Section key={group.title} tone={index % 2 === 0 ? "canvas" : "white"}>
          <SectionHeading title={group.title} />
          <div className="mx-auto mt-10 max-w-4xl" data-aos="fade-up">
            <Accordion items={group.items} />
          </div>
        </Section>
      ))}

      <AskStrategist />
      <Newsletter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
