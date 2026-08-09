import { trustBar } from "@/data/homepage";
import { Marquee } from "@/components/ui/Marquee";

export function TrustMarquee() {
  return (
    <section className="border-y border-line bg-white py-10">
      <p
        className="mb-6 text-center text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-muted"
        data-aos="fade-up"
      >
        {trustBar.heading}
      </p>
      <Marquee duration={40} ariaLabel="Platforms and tools BifidMedia works with">
        {trustBar.items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center rounded-[var(--radius-pill)] border border-line bg-canvas px-5 py-2.5 text-[0.88rem] font-semibold text-muted"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
}

export default TrustMarquee;
