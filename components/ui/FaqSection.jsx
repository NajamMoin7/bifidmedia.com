import { Section, SectionHeading } from "./Section";
import { Accordion } from "./Accordion";

export function FaqSection({
  heading = "Frequently Asked Questions",
  text,
  items,
  tone = "white",
  jsonLd = true,
}) {
  if (!items?.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <Section tone={tone} id="faq">
      <SectionHeading title={heading} text={text} />
      <div className="mx-auto mt-10 max-w-4xl" data-aos="fade-up">
        <Accordion items={items} />
      </div>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
    </Section>
  );
}

export default FaqSection;
