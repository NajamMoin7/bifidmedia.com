import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { whyChoose } from "@/data/homepage";
import { Section } from "@/components/ui/Section";

export function WhyChoose() {
  return (
    <Section tone="canvas">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5" data-aos="fade-right">
          <h2 className="text-[clamp(1.55rem,3vw,2.3rem)]">
            {whyChoose.heading}
          </h2>
          <dl className="mt-7 space-y-6">
            {whyChoose.points.map((point) => (
              <div key={point.title}>
                <dt className="text-[1.05rem] font-bold text-ink">
                  {point.title}
                </dt>
                <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
                  {point.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="100">
          <div className="overflow-hidden rounded-[var(--radius-card)] border border-line shadow-soft">
            <Image
              src="/images/contact/business-consultation-workspace.webp"
              alt="BifidMedia specialists reviewing multi-channel store performance"
              width={1400}
              height={933}
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {whyChoose.badges.map((badge, index) => (
          <li
            key={badge}
            className="card-surface flex items-center gap-3 p-5"
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            <span className="gradient-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white">
              <BadgeCheck size={17} aria-hidden="true" />
            </span>
            <span className="text-[0.92rem] font-semibold text-ink">{badge}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default WhyChoose;
