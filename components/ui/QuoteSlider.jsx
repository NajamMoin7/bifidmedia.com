"use client";

import { Quote } from "lucide-react";
import { Slider } from "./Slider";
import { clientTestimonials, principles } from "@/data/testimonials";

/**
 * Rotating quote panel. Falls back to BifidMedia's written operating
 * principles while `clientTestimonials` is empty, so no invented review is
 * ever published.
 */
export function QuoteSlider({ tone = "sky" }) {
  const items = clientTestimonials.length
    ? clientTestimonials.map((t) => ({
        quote: t.quote,
        name: t.name,
        role: t.channel ? `${t.role} · ${t.channel}` : t.role,
      }))
    : principles;

  const toneClass =
    tone === "white" ? "bg-white" : tone === "canvas" ? "bg-canvas" : "bg-sky";

  return (
    <section className={`section-pad ${toneClass}`}>
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="gradient-brand mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
            data-aos="zoom-in"
          >
            <Quote size={24} aria-hidden="true" />
          </span>

          <Slider
            autoplayDelay={7000}
            ariaLabel="BifidMedia operating principles"
            className="text-center"
          >
            {items.map((item) => (
              <blockquote key={item.name} className="px-2">
                <p className="text-[clamp(1.05rem,2.1vw,1.4rem)] font-medium leading-relaxed text-ink">
                  “{item.quote}”
                </p>
                <footer className="mt-6">
                  <span className="block text-[0.95rem] font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="mt-0.5 block text-[0.85rem] text-muted">
                    {item.role}
                  </span>
                </footer>
              </blockquote>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default QuoteSlider;
