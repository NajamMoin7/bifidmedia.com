import Image from "next/image";
import { Phone, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

/**
 * "Questions? Ask a strategist" contact band — the reference's `.agent-sec`,
 * used to close inner pages.
 */
export function AskStrategist() {
  return (
    <section className="bg-deep text-white">
      <div className="shell py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-accent">
              Questions?
            </p>
            <h2 className="mt-3 text-white text-[clamp(1.5rem,2.8vw,2.1rem)]">
              Ask a BifidMedia strategist
            </h2>
            <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-white/75">
              Get a straight answer about what we would prioritise for your
              store — before you commit to anything.
            </p>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <div>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2.5 text-[1.15rem] font-bold text-white transition-colors duration-200 hover:text-accent"
                >
                  <Phone size={19} aria-hidden="true" className="text-accent" />
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={siteConfig.emailHref}
                  className="mt-2 block text-[0.92rem] text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
              <ul className="space-y-1.5 text-[0.88rem] text-white/70">
                {siteConfig.hours.map((entry) => (
                  <li key={entry.days} className="flex items-start gap-2.5">
                    <Clock size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                    <span>
                      <span className="font-medium text-white/90">{entry.days}</span>
                      <br />
                      {entry.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book-consultation" variant="light" size="lg" withArrow>
                Schedule a call
              </Button>
              <Button href="/free-audit" variant="onDark" size="lg">
                Request a free audit
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-white/15">
              <Image
                src="/images/business/ecommerce-consultation-team.webp"
                alt="BifidMedia strategists on a client planning call"
                width={1400}
                height={933}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AskStrategist;
