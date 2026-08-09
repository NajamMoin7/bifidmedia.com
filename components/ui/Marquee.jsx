/**
 * Continuous CSS marquee — the reference site's `.slick.marquee` rows, without
 * shipping a slider library for something that never needs interaction.
 * Content is duplicated once so the -50% translation loops seamlessly.
 */
export function Marquee({
  children,
  direction = "forward",
  duration = 46,
  className = "",
  ariaLabel,
}) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div
      className={`marquee-viewport relative w-full overflow-hidden ${className}`}
      role="group"
      aria-label={ariaLabel}
    >
      <div
        className="marquee-track gap-4 sm:gap-5"
        data-direction={direction === "reverse" ? "reverse" : undefined}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {items.map((child, i) => (
          <div key={`a-${i}`} className="shrink-0">
            {child}
          </div>
        ))}
        {items.map((child, i) => (
          <div key={`b-${i}`} className="shrink-0" aria-hidden="true">
            {child}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
    </div>
  );
}

export default Marquee;
