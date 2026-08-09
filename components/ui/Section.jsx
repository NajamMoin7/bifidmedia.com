export function Section({
  children,
  id,
  tone = "white",
  className = "",
  wide = false,
  ...rest
}) {
  const tones = {
    white: "bg-white",
    canvas: "bg-canvas",
    sky: "bg-sky",
    deep: "bg-deep text-white",
    gradient: "gradient-brand text-white",
  };

  return (
    <section
      id={id}
      className={`section-pad ${tones[tone] || tones.white} ${className}`}
      {...rest}
    >
      <div className={wide ? "shell-wide" : "shell"}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "dark",
  className = "",
  as: Tag = "h2",
}) {
  const alignment =
    align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl";
  const titleColor = tone === "light" ? "text-white" : "text-ink";
  const textColor = tone === "light" ? "text-white/80" : "text-muted";

  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow ? (
        <span
          className={`mb-3 inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
            tone === "light"
              ? "bg-white/15 text-white"
              : "bg-sky text-brand"
          }`}
          data-aos="fade-up"
        >
          {eyebrow}
        </span>
      ) : null}
      <Tag
        className={`text-[clamp(1.65rem,3.2vw,2.6rem)] ${titleColor}`}
        data-aos="fade-up"
        data-aos-delay="60"
      >
        {title}
      </Tag>
      {text ? (
        <p
          className={`mt-4 text-[1.02rem] leading-relaxed ${textColor}`}
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default Section;
