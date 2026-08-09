import { Section, SectionHeading } from "./Section";

/**
 * Icon / numbered card grid — the reference's `.important-sec` and
 * `.box-section` patterns.
 */
export function IconCardGrid({
  heading,
  text,
  cards,
  tone = "white",
  columns = 3,
  numbered = false,
  eyebrow,
  /** "alternate" animates cards in from alternating sides. */
  aos = "fade-up",
}) {
  if (!cards?.length) return null;

  const gridClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Section tone={tone}>
      {heading ? (
        <SectionHeading eyebrow={eyebrow} title={heading} text={text} />
      ) : null}

      <ul className={`mt-12 grid gap-5 ${gridClass}`}>
        {cards.map((card, index) => (
          <li
            key={card.title}
            className="card-surface group h-full p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift"
            data-aos={
              aos === "alternate"
                ? index % 2 === 0
                  ? "fade-right"
                  : "fade-left"
                : aos
            }
            data-aos-delay={(index % 4) * 100}
          >
            <span
              className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-[0.9rem] font-bold ${
                numbered ? "gradient-brand text-white" : "bg-sky"
              }`}
              aria-hidden="true"
            >
              {numbered ? (
                index + 1
              ) : (
                <span className="gradient-brand block h-3.5 w-3.5 rotate-45 rounded-[3px] transition-transform duration-300 group-hover:rotate-[135deg]" />
              )}
            </span>
            <h3 className="text-[1.05rem] transition-colors duration-200 group-hover:text-brand">
              {card.title}
            </h3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
              {card.text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default IconCardGrid;
