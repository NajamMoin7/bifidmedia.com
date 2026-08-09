"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { platformShowcase } from "@/data/homepage";
import { marketplaces } from "@/data/marketplaces";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlatformIcon } from "@/components/ui/PlatformIcon";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

/**
 * Expanding platform panels — the reference's `.testimonial-inner expand/shrink`
 * accordion, rebuilt as a keyboard-accessible horizontal accordion that stacks
 * into cards on small screens.
 */
export function PlatformShowcase() {
  const [active, setActive] = useState(0);

  return (
    <Section tone="canvas">
      <SectionHeading
        title={platformShowcase.heading}
        text={platformShowcase.text}
      />

      {/* Horizontal accordion (lg and up) */}
      <div className="mt-12 hidden gap-3 lg:flex" data-aos="fade-up">
        {marketplaces.map((marketplace, index) => {
          const open = active === index;
          return (
            <button
              key={marketplace.slug}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-expanded={open}
              className={`relative h-[420px] overflow-hidden rounded-[var(--radius-card)] border text-left transition-all duration-500 ease-[var(--ease-out-soft)] ${
                open
                  ? "flex-[3.4] border-brand/30 bg-white shadow-lift"
                  : "flex-[0.8] border-line bg-white/70 hover:bg-white"
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 transition-opacity duration-300"
                style={{
                  background: marketplace.color,
                  opacity: open ? 1 : 0.35,
                }}
              />

              {open ? (
                <span className="flex h-full flex-col p-7">
                  <PlatformIcon platform={marketplace.key} size={44} />
                  <span className="mt-4 block text-[1.3rem] font-bold text-ink">
                    {marketplace.name}
                  </span>
                  <span className="mt-3 block text-[0.94rem] leading-relaxed text-muted">
                    {marketplace.intro}
                  </span>
                  <span className="mt-auto inline-flex items-center gap-2 text-[0.9rem] font-semibold text-brand">
                    Explore {marketplace.shortName} services
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </span>
              ) : (
                <span className="flex h-full flex-col items-center justify-between py-7">
                  <PlatformIcon platform={marketplace.key} size={34} />
                  <span className="text-[0.95rem] font-semibold text-ink [writing-mode:vertical-rl] [text-orientation:mixed]">
                    {marketplace.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full"
                    style={{ background: marketplace.color }}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Card grid (below lg) */}
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden">
        {marketplaces.map((marketplace, index) => (
          <li key={marketplace.slug} data-aos="fade-up" data-aos-delay={index * 60}>
            <Link
              href={marketplace.href}
              className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className="mb-4 block h-1 w-10 rounded-full"
                style={{ background: marketplace.color }}
              />
              <PlatformIcon platform={marketplace.key} size={38} />
              <span className="mt-3 text-[1.1rem] font-bold text-ink">
                {marketplace.name}
              </span>
              <span className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                {marketplace.intro}
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-[0.87rem] font-semibold text-brand">
                Explore services
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Deep link for the expanded desktop panel */}
      <div className="mt-8 hidden justify-center lg:flex" data-aos="fade-up">
        <Button href={marketplaces[active].href} withArrow>
          Explore {marketplaces[active].shortName} services
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3" data-aos="fade-up">
        <Button href="/get-started" size="lg" withArrow>
          Get started
        </Button>
        <Button href={siteConfig.phoneHref} variant="outline" size="lg">
          Still deciding? Call {siteConfig.phoneDisplay}
        </Button>
      </div>
    </Section>
  );
}

export default PlatformShowcase;
