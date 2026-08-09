import { Section } from "./Section";

export function StatsBand({ stats, tone = "canvas", heading }) {
  if (!stats?.length) return null;

  return (
    <Section tone={tone}>
      {heading ? (
        <p
          className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand"
          data-aos="fade-up"
        >
          {heading}
        </p>
      ) : null}
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="card-surface p-7 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-lift"
            data-aos="fade-up"
            data-aos-delay={index * 90}
          >
            <span className="gradient-text block text-[clamp(2.1rem,4vw,2.9rem)] font-bold leading-none">
              {stat.value}
            </span>
            <h3 className="mt-3 text-lg">{stat.label}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default StatsBand;
