import { Check, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Two-column comparison — the reference's `.add-sec` block.
 */
export function ComparisonTable({ heading, text, columns }) {
  return (
    <Section tone="white">
      <SectionHeading title={heading} text={text} />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {columns.map((column, index) => (
          <div
            key={column.title}
            className={`rounded-[var(--radius-card)] border p-7 ${
              column.positive
                ? "border-brand/25 bg-sky/60"
                : "border-line bg-canvas"
            }`}
            data-aos={index === 0 ? "fade-right" : "fade-left"}
          >
            <h3 className="flex items-center gap-2.5 text-[1.2rem]">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  column.positive
                    ? "gradient-brand text-white"
                    : "bg-white text-muted ring-1 ring-line"
                }`}
              >
                {column.positive ? (
                  <Check size={15} strokeWidth={3} aria-hidden="true" />
                ) : (
                  <X size={15} strokeWidth={3} aria-hidden="true" />
                )}
              </span>
              {column.title}
            </h3>

            <dl className="mt-6 space-y-4">
              {column.rows.map(([label, value]) => (
                <div key={label} className="border-b border-line/70 pb-4 last:border-0 last:pb-0">
                  <dt className="text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-muted">
                    {label}
                  </dt>
                  <dd className="mt-1 text-[0.95rem] leading-relaxed text-ink">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default ComparisonTable;
