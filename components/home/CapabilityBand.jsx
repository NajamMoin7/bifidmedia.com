import { Check } from "lucide-react";
import { capabilityBand } from "@/data/homepage";
import { Button } from "@/components/ui/Button";

export function CapabilityBand() {
  return (
    <section id="approach" className="gradient-brand relative overflow-hidden text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.25),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.18),transparent_45%)]"
      />
      <div className="shell relative py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2
              className="text-white text-[clamp(1.6rem,3vw,2.4rem)]"
              data-aos="fade-up"
            >
              {capabilityBand.heading}
            </h2>
            <p
              className="mt-4 max-w-2xl text-[1rem] leading-relaxed text-white/85"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              {capabilityBand.text}
            </p>
          </div>

          <div className="lg:col-span-5">
            <ul className="space-y-3" data-aos="fade-up" data-aos-delay="140">
              {capabilityBand.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[0.95rem] text-white/90">{point}</span>
                </li>
              ))}
            </ul>
            <Button
              href={capabilityBand.ctaHref}
              variant="light"
              size="lg"
              withArrow
              className="mt-7"
            >
              {capabilityBand.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CapabilityBand;
