import Image from "next/image";
import { Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { siteConfig } from "@/data/siteConfig";

/**
 * Inner-page hero — the reference's `.banner-main-sec`: a full-bleed background
 * treatment with a left text column, value line, dual CTAs and a trust strip.
 */
export function ServiceHero({
  eyebrow,
  heading,
  intro,
  valueLine,
  image,
  imageAlt,
  platform,
  accentColor,
  badges = [],
  primaryCta = { label: "Get started", href: "/get-started" },
  secondaryCta,
}) {
  const secondary = secondaryCta || {
    label: `Talk to an expert · ${siteConfig.phoneDisplay}`,
    href: siteConfig.phoneHref,
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-48 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(22,93,255,0.15),transparent_65%)] blur-2xl" />
        <div className="absolute -left-44 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(104,64,255,0.1),transparent_65%)] blur-2xl" />
      </div>

      <div className="shell pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className={image ? "lg:col-span-7" : "lg:col-span-9"}>
            {eyebrow ? (
              <span
                className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-line bg-sky px-3.5 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-brand"
                data-aos="fade-right"
              >
                {platform ? (
                  <PlatformIcon platform={platform} size={16} />
                ) : (
                  <Sparkles size={13} aria-hidden="true" />
                )}
                {eyebrow}
              </span>
            ) : null}

            <h1
              className="mt-5 text-[clamp(1.9rem,4vw,3rem)]"
              data-aos="fade-right"
              data-aos-delay="60"
            >
              {heading}
            </h1>

            <p
              className="mt-5 max-w-2xl text-[1.03rem] leading-relaxed text-muted"
              data-aos="fade-right"
              data-aos-delay="120"
            >
              {intro}
            </p>

            {valueLine ? (
              <p
                className="mt-5 max-w-2xl border-l-[3px] pl-4 text-[0.98rem] font-medium text-ink"
                style={{ borderColor: accentColor || "var(--color-brand)" }}
                data-aos="fade-right"
                data-aos-delay="160"
              >
                {valueLine}
              </p>
            ) : null}

            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Button href={primaryCta.href} size="lg" withArrow>
                {primaryCta.label}
              </Button>
              <Button href={secondary.href} variant="outline" size="lg">
                {secondary.href.startsWith("tel:") ? (
                  <Phone size={15} aria-hidden="true" className="text-brand" />
                ) : null}
                {secondary.label}
              </Button>
            </div>

            {badges.length ? (
              <ul
                className="mt-8 flex flex-wrap gap-2"
                data-aos="fade-right"
                data-aos-delay="240"
              >
                {badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-[var(--radius-pill)] border border-line bg-canvas px-3.5 py-1.5 text-[0.78rem] font-medium text-muted"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {image ? (
            <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="120">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="gradient-brand absolute -inset-3 -z-10 rounded-[26px] opacity-[0.12] blur-xl"
                />
                <div className="overflow-hidden rounded-[22px] border border-line shadow-lift">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={1400}
                    height={933}
                    preload
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
