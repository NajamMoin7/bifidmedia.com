import Image from "next/image";
import { Check } from "lucide-react";
import { newsletter } from "@/data/homepage";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Newsletter() {
  return (
    <section className="section-pad bg-canvas">
      <div className="shell">
        <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[240px] lg:min-h-full" data-aos="fade-right">
              <Image
                src={newsletter.image}
                alt={newsletter.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-deep/55 to-transparent"
              />
            </div>

            <div className="p-7 sm:p-10" data-aos="fade-left">
              <h2 className="text-[clamp(1.4rem,2.6vw,2rem)]">
                {newsletter.heading}
              </h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                {newsletter.text}
              </p>

              <ul className="mt-5 space-y-2">
                {newsletter.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-[0.9rem] text-muted">
                    <Check size={15} aria-hidden="true" className="shrink-0 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>

              <NewsletterForm className="mt-7 max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
