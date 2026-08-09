import Image from "next/image";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * "What this service covers" — the reference's tabbed sub-service list,
 * rendered as a two-column checklist beside a supporting image so every item is
 * visible without interaction (better for SEO and for scanning).
 */
export function ServiceOfferings({
  heading,
  text,
  offerings,
  image,
  imageAlt,
  accentColor,
}) {
  if (!offerings?.length) return null;

  return (
    <Section tone="white">
      <SectionHeading title={heading} text={text} />

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
        <ul className={`grid gap-4 sm:grid-cols-2 ${image ? "lg:col-span-7" : "lg:col-span-12 lg:grid-cols-3"}`}>
          {offerings.map((offering, index) => (
            <li
              key={offering.title}
              className="group rounded-[var(--radius-card)] border border-line bg-white p-5 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 70}
            >
              <span
                className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-white"
                style={{
                  background: accentColor
                    ? accentColor
                    : "var(--gradient-brand)",
                }}
                aria-hidden="true"
              >
                <Check size={15} strokeWidth={3} />
              </span>
              <h3 className="text-[1rem] transition-colors duration-200 group-hover:text-brand">
                {offering.title}
              </h3>
              <p className="mt-1.5 text-[0.89rem] leading-relaxed text-muted">
                {offering.text}
              </p>
            </li>
          ))}
        </ul>

        {image ? (
          <div className="lg:col-span-5 lg:sticky lg:top-28" data-aos="fade-left">
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-line shadow-soft">
              <Image
                src={image}
                alt={imageAlt}
                width={1400}
                height={933}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
}

export default ServiceOfferings;
