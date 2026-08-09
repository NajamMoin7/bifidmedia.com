import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Capability index — the reference's `.register-sec`: grouped service
 * categories, each listing every child service page. This is the hub's main
 * internal-linking surface.
 */
export function ServiceIndex({ heading, text, groups, accentColor, footerCta }) {
  if (!groups?.length) return null;

  return (
    <Section tone="white" id="services">
      <SectionHeading title={heading} text={text} />

      <div className="mt-12 space-y-10">
        {groups.map((group) => (
          <div key={group.id} data-aos="fade-up">
            <div className="flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="flex items-center gap-3 text-[1.2rem]">
                <span
                  aria-hidden="true"
                  className="h-5 w-1 rounded-full"
                  style={{ background: accentColor || "var(--color-brand)" }}
                />
                {group.title}
              </h3>
              <p className="max-w-xl text-[0.88rem] text-muted">
                {group.description}
              </p>
            </div>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-xl border border-line bg-white px-4 py-3.5 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-brand/40 hover:bg-sky/40"
                  >
                    <span className="flex items-start justify-between gap-3 text-[0.94rem] font-semibold text-ink transition-colors duration-200 group-hover:text-brand">
                      {service.name}
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                      />
                    </span>
                    <span className="mt-1 text-[0.82rem] leading-snug text-muted">
                      {service.navDescription}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {footerCta ? (
        <div className="mt-10 flex justify-center" data-aos="fade-up">
          <Link
            href={footerCta.href}
            className="gradient-brand inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-6 py-3.5 text-[0.92rem] font-semibold text-white shadow-[0_10px_28px_rgba(22,93,255,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {footerCta.label}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      ) : null}
    </Section>
  );
}

export default ServiceIndex;
