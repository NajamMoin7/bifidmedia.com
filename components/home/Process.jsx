import { process } from "@/data/homepage";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Process() {
  return (
    <Section tone="white">
      <SectionHeading title={process.heading} text={process.text} />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {process.steps.map((step, index) => (
          <li
            key={step.title}
            className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift"
            data-aos="fade-right"
            data-aos-delay={index * 80}
          >
            <span className="gradient-brand flex h-10 w-10 items-center justify-center rounded-xl text-[0.95rem] font-bold text-white">
              {index + 1}
            </span>
            <h3 className="mt-4 text-[1.02rem]">{step.title}</h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
              {step.text}
            </p>
            <span
              aria-hidden="true"
              className="absolute inset-x-6 bottom-0 h-[3px] origin-left scale-x-0 rounded-full bg-[image:var(--gradient-brand)] transition-transform duration-300 group-hover:scale-x-100"
            />
          </li>
        ))}

        <li
          className="gradient-brand flex h-full flex-col justify-between rounded-[var(--radius-card)] p-6 text-white"
          data-aos="fade-right"
          data-aos-delay={process.steps.length * 80}
        >
          <h3 className="text-white text-[1.02rem]">{process.cta.title}</h3>
          <Button
            href={process.cta.ctaHref}
            variant="light"
            size="sm"
            withArrow
            className="mt-5 self-start"
          >
            {process.cta.ctaLabel}
          </Button>
        </li>
      </ol>
    </Section>
  );
}

export default Process;
