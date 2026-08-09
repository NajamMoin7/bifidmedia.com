"use client";

import { useState } from "react";
import Image from "next/image";
import { capabilities } from "@/data/homepage";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

/**
 * Tabbed capability panel — the reference's `.tabs-wrp` section. The tab strip
 * scrolls horizontally instead of using a slider, which keeps every tab
 * reachable by keyboard and avoids a library for a list of buttons.
 */
export function Capabilities() {
  const [active, setActive] = useState(capabilities.tabs[0].id);
  const panel = capabilities.tabs.find((tab) => tab.id === active);

  return (
    <Section tone="canvas">
      <SectionHeading title={capabilities.heading} text={capabilities.text} />

      <div
        className="mt-10 -mx-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        data-aos="fade-up"
      >
        <div role="tablist" aria-label="Capabilities" className="flex w-max gap-2">
          {capabilities.tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                id={`cap-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`cap-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                className={`whitespace-nowrap rounded-[var(--radius-pill)] border px-4 py-2.5 text-[0.86rem] font-semibold transition-all duration-300 ${
                  selected
                    ? "gradient-brand border-transparent text-white shadow-[0_8px_20px_rgba(22,93,255,0.26)]"
                    : "border-line bg-white text-muted hover:border-brand hover:text-brand"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={panel.id}
        role="tabpanel"
        id={`cap-panel-${panel.id}`}
        aria-labelledby={`cap-tab-${panel.id}`}
        className="mt-8 grid items-center gap-8 rounded-[var(--radius-card)] border border-line bg-white p-6 lg:grid-cols-12 lg:p-9"
      >
        <div className="lg:col-span-6">
          <h3 className="text-[clamp(1.25rem,2.2vw,1.7rem)]">{panel.title}</h3>
          {panel.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="mt-4 text-[0.97rem] leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
          <Button href={panel.href} variant="outline" withArrow className="mt-6">
            Learn more
          </Button>
        </div>
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-[var(--radius-card)] border border-line">
            <Image
              src={panel.image}
              alt={panel.imageAlt}
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3" data-aos="fade-up">
        <Button href="/get-started" size="lg" withArrow>
          Get started
        </Button>
        <Button href={siteConfig.phoneHref} variant="outline" size="lg">
          Talk to a specialist
        </Button>
      </div>
    </Section>
  );
}

export default Capabilities;
