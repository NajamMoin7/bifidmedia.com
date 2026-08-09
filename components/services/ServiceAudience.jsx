import Image from "next/image";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * "Tailored for every type of seller" — the reference's `.step-sec`: audience
 * segments on the left, an image with a floating label chip on the right.
 */
export function ServiceAudience({
  heading,
  text,
  audiences,
  image,
  imageAlt,
  chip,
  ctaHref = "/get-started",
  ctaLabel = "Get started",
}) {
  if (!audiences?.length) return null;

  return (
    <section className="section-pad bg-canvas">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6" data-aos="fade-right">
            <h2 className="text-[clamp(1.45rem,2.8vw,2.15rem)]">{heading}</h2>
            {text ? (
              <p className="mt-4 text-[1rem] leading-relaxed text-muted">{text}</p>
            ) : null}

            <dl className="mt-7 space-y-6">
              {audiences.map((audience) => (
                <div key={audience.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky text-brand">
                    <Users size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-[1.03rem] font-bold text-ink">
                      {audience.title}
                    </dt>
                    <dd className="mt-1 text-[0.93rem] leading-relaxed text-muted">
                      {audience.text}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <Button href={ctaHref} withArrow className="mt-8">
              {ctaLabel}
            </Button>
          </div>

          {image ? (
            <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
              <div className="relative">
                <div className="overflow-hidden rounded-[var(--radius-card)] border border-line shadow-soft">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={1400}
                    height={933}
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                {chip ? (
                  <p className="mx-5 -mt-7 rounded-[var(--radius-pill)] border border-line bg-white px-5 py-3 text-center text-[0.85rem] font-semibold text-ink shadow-lift">
                    {chip}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default ServiceAudience;
