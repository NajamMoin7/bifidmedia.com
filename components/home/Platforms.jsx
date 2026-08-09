import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/data/homepage";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlatformIcon } from "@/components/ui/PlatformIcon";

export function Platforms() {
  return (
    <Section tone="canvas" id="platforms">
      <SectionHeading title={solutions.heading} text={solutions.text} />

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {solutions.tiles.map((tile, index) => (
          <li key={tile.key} data-aos="fade-up" data-aos-delay={index * 60}>
            <Link
              href={tile.href}
              className="group relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-[var(--radius-card)] border border-line bg-white px-3 py-6 text-center transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: tile.color }}
              />
              <PlatformIcon platform={tile.key} size={44} />
              <span className="text-[0.88rem] font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-brand">
                {tile.label}
              </span>
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="mt-auto text-line transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Platforms;
