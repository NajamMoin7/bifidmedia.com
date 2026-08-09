import Image from "next/image";
import { CircleAlert } from "lucide-react";
import { problemSolution } from "@/data/homepage";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function ProblemSolution() {
  return (
    <Section tone="white">
      <SectionHeading
        title={problemSolution.heading}
        text={problemSolution.text}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        <ul className="space-y-4 lg:col-span-7">
          {problemSolution.problems.map((problem, index) => (
            <li
              key={problem.title}
              className="card-surface flex gap-4 p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift"
              data-aos="fade-right"
              data-aos-delay={index * 90}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky text-brand">
                <CircleAlert size={19} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[1.08rem]">{problem.title}</h3>
                <p className="mt-1.5 text-[0.94rem] leading-relaxed text-muted">
                  {problem.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="120">
          <div className="gradient-brand h-full overflow-hidden rounded-[var(--radius-card)] text-white">
            <div className="p-7">
              <h3 className="text-white text-[1.35rem]">
                {problemSolution.solution.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/85">
                {problemSolution.solution.text}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-white/85">
                {problemSolution.solution.subText}
              </p>
              <Button
                href={problemSolution.solution.ctaHref}
                variant="light"
                withArrow
                className="mt-6"
              >
                {problemSolution.solution.ctaLabel}
              </Button>
            </div>
            <div className="relative mt-2 h-52 w-full overflow-hidden sm:h-64">
              <Image
                src="/images/business/ecommerce-consultation-team.webp"
                alt="BifidMedia specialists planning an e-commerce build"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProblemSolution;
