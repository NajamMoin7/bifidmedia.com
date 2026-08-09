import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceIcon } from "@/lib/serviceIcons";

/**
 * Service card grid used on the category pages.
 *
 * Hover raises the card, tints the border blue, animates the icon and slides
 * the arrow. The gradient wash is an inset overlay on the card itself, so no
 * stray top or bottom rule ever appears.
 */
export function ServiceCard({ service, accentColor }) {
  return (
    <Link
      href={service.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-soft transition-[transform,border-color,box-shadow] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-brand/45 hover:shadow-lift"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(22,93,255,0.07),rgba(104,64,255,0.05))] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span className="relative flex items-start justify-between gap-3">
        <span className="gradient-brand inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_8px_18px_rgba(22,93,255,0.24)] transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:-rotate-6 group-hover:scale-105">
          {serviceIcon(service.group)}
        </span>
        {service.featured ? (
          <span
            className="rounded-[var(--radius-pill)] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wide text-white"
            style={{ background: accentColor || "var(--color-brand)" }}
          >
            {service.badge || "Popular"}
          </span>
        ) : null}
      </span>

      <span className="relative mt-4 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted">
        {service.groupTitle}
      </span>

      <h3 className="relative mt-1.5 text-[1.05rem] transition-colors duration-200 group-hover:text-brand">
        {service.title}
      </h3>

      <p className="relative mt-2 text-[0.9rem] leading-relaxed text-muted">
        {service.shortDescription}
      </p>

      <span className="relative mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.87rem] font-semibold text-brand">
        Learn more
        <ArrowRight
          size={15}
          aria-hidden="true"
          className="transition-transform duration-300 ease-[var(--ease-out-soft)] group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}

export function ServiceCardGrid({ services, accentColor, columns = 3 }) {
  if (!services?.length) return null;

  const gridClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={`grid gap-5 ${gridClass}`}>
      {services.map((service, index) => (
        <li
          key={service.href}
          data-aos="fade-up"
          data-aos-delay={(index % 4) * 100}
        >
          <ServiceCard service={service} accentColor={accentColor} />
        </li>
      ))}
    </ul>
  );
}

export default ServiceCardGrid;
