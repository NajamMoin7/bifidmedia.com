import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { hero } from "@/data/homepage";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* decorative blue gradient field */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(22,93,255,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(104,64,255,0.12),transparent_65%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas" />
      </div>

      <div className="shell pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <span
              className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-line bg-sky px-3.5 py-1.5 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-brand"
              data-aos="fade-up"
            >
              <Sparkles size={13} aria-hidden="true" />
              {hero.eyebrow}
            </span>

            <h1
              className="mt-5 text-[clamp(2.05rem,4.6vw,3.5rem)]"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              {hero.h1}
            </h1>

            <p
              className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              {hero.lead}
            </p>

            <ul
              className="mt-7 flex flex-wrap gap-2.5"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              {hero.platformLinks.map((platform) => (
                <li key={platform.key}>
                  <Link
                    href={platform.href}
                    className="group inline-flex items-center gap-2.5 rounded-[var(--radius-pill)] border border-line bg-white py-2 pl-2 pr-4 text-[0.88rem] font-semibold text-ink shadow-soft transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand hover:shadow-lift"
                  >
                    <PlatformIcon platform={platform.key} size={30} />
                    {platform.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 flex flex-wrap items-center gap-3"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <Button href="/get-started" size="lg" withArrow>
                Get started
              </Button>
              <Button href="/book-consultation" variant="outline" size="lg">
                Book a free consultation
              </Button>
            </div>

            <div
              className="mt-9 flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-sky/70 p-5 sm:flex-row sm:items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                <ShieldCheck size={19} aria-hidden="true" />
              </span>
              <p className="flex-1 text-[0.9rem] leading-relaxed text-ink">
                {hero.note.text}
              </p>
              <Link
                href={hero.note.ctaHref}
                className="inline-flex shrink-0 items-center gap-1.5 text-[0.88rem] font-semibold text-brand transition-all duration-200 hover:gap-2.5"
              >
                {hero.note.ctaLabel}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="120">
            <div className="relative">
              <div
                aria-hidden="true"
                className="gradient-brand absolute -inset-3 -z-10 rounded-[28px] opacity-[0.14] blur-xl"
              />
              <div className="overflow-hidden rounded-[24px] border border-line bg-white shadow-lift">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  width={1664}
                  height={936}
                  preload
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="h-auto w-full"
                />
              </div>

              <div className="absolute -bottom-5 left-4 flex gap-3 sm:left-6">
                {hero.floatingCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur"
                  >
                    <span className="gradient-text block text-xl font-bold leading-none">
                      {card.value}
                    </span>
                    <span className="mt-1 block text-[0.72rem] font-medium text-muted">
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
