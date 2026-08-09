import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

/**
 * Large CTA band — the reference's `.leader-sec`: headline + supporting
 * paragraphs + dual CTAs on the left, image on the right.
 */
export function ServiceCTA({
  heading,
  paragraphs = [],
  image = "/images/home/hero-ecommerce-growth.png",
  imageAlt = "Reviewing e-commerce growth performance",
  primaryCta = { label: "Get started", href: "/get-started" },
  zoomIn = false,
}) {
  return (
    <section className="section-pad bg-white">
      <div className="shell">
        <div
          className="gradient-brand relative overflow-hidden rounded-[var(--radius-card)] text-white"
          data-aos={zoomIn ? "zoom-in" : undefined}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.3),transparent_45%)]"
          />
          <div className="relative grid gap-8 p-8 lg:grid-cols-12 lg:items-center lg:p-12">
            <div className="lg:col-span-7">
              <h2 className="text-white text-[clamp(1.45rem,2.8vw,2.15rem)]">
                {heading}
              </h2>
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mt-4 text-[0.98rem] leading-relaxed text-white/85"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={primaryCta.href} variant="light" size="lg" withArrow>
                  {primaryCta.label}
                </Button>
                <Button href={siteConfig.phoneHref} variant="onDark" size="lg">
                  {siteConfig.phoneDisplay}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[var(--radius-card)] border border-white/20">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={1400}
                  height={933}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCTA;
