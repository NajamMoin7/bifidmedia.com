import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * Image-left / image-right feature block with an overlaid highlight card —
 * the reference's `.legal-help-sec` pattern.
 */
export function FeatureSplit({ feature, tone = "white" }) {
  const toneClass = tone === "canvas" ? "bg-canvas" : "bg-white";

  return (
    <section className={`section-pad ${toneClass}`}>
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div
            className={`lg:col-span-6 ${feature.imageFirst ? "" : "lg:order-2"}`}
            data-aos={feature.imageFirst ? "fade-right" : "fade-left"}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-[var(--radius-card)] border border-line shadow-soft">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              {feature.overlay ? (
                <div className="mx-4 -mt-10 rounded-2xl border border-line bg-white p-5 shadow-lift sm:mx-6">
                  <span className="gradient-brand mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-white">
                    <Sparkles size={15} aria-hidden="true" />
                  </span>
                  <p className="text-[0.95rem] font-semibold text-ink">
                    {feature.overlay.title}
                  </p>
                  <p className="mt-1 text-[0.86rem] leading-relaxed text-muted">
                    {feature.overlay.text}
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          <div
            className={`lg:col-span-6 ${feature.imageFirst ? "" : "lg:order-1"}`}
            data-aos={feature.imageFirst ? "fade-left" : "fade-right"}
          >
            <h2 className="text-[clamp(1.45rem,2.8vw,2.15rem)]">
              {feature.heading}
            </h2>
            {feature.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 text-[1rem] leading-relaxed text-muted"
              >
                {paragraph}
              </p>
            ))}
            {feature.ctaHref ? (
              <Button href={feature.ctaHref} size="lg" withArrow className="mt-7">
                {feature.ctaLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSplit;
