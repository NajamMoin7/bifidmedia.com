import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

export function RelatedServices({
  heading,
  text,
  services,
  accentColor,
  categoryCta,
}) {
  if (!services?.length) return null;

  return (
    <Section tone="canvas">
      <SectionHeading title={heading} text={text} />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <li key={service.href} data-aos="fade-up" data-aos-delay={(index % 3) * 70}>
            <Link
              href={service.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: accentColor || "var(--color-brand)" }}
              />
              <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">
                {service.categoryTitle}
              </span>
              <h3 className="mt-2 text-[1.03rem] transition-colors duration-200 group-hover:text-brand">
                {service.name}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">
                {service.navDescription}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.85rem] font-semibold text-brand">
                View service
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {categoryCta ? (
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          data-aos="fade-up"
        >
          <Link
            href={categoryCta.href}
            className="gradient-brand inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-6 py-3.5 text-[0.92rem] font-semibold text-white shadow-[0_10px_28px_rgba(22,93,255,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {categoryCta.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-line bg-white px-6 py-3.5 text-[0.92rem] font-semibold text-ink transition-all duration-200 hover:border-brand hover:text-brand"
          >
            Browse all services
          </Link>
        </div>
      ) : null}
    </Section>
  );
}

export default RelatedServices;
