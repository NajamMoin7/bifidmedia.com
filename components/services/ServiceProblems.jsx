import { CircleAlert, CircleCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Problem → solution card grid — the reference's four "why sellers struggle"
 * cards, each with a "Our solution" response.
 */
export function ServiceProblems({ heading, text, problems, accentColor }) {
  if (!problems?.length) return null;

  return (
    <Section tone="canvas">
      <SectionHeading title={heading} text={text} />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2">
        {problems.map((item, index) => (
          <li
            key={item.problem}
            className="card-surface h-full p-6 transition-all duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-lift"
            data-aos="fade-up"
            data-aos-delay={(index % 2) * 90}
          >
            <h3 className="flex items-start gap-3 text-[1.05rem]">
              <CircleAlert
                size={19}
                aria-hidden="true"
                className="mt-0.5 shrink-0"
                style={{ color: accentColor || "var(--color-brand)" }}
              />
              {item.problem}
            </h3>
            <div className="mt-4 rounded-xl bg-sky/70 p-4">
              <p className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-ink">
                <CircleCheck
                  size={17}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-brand"
                />
                <span>
                  <strong className="font-semibold">What BifidMedia does: </strong>
                  {item.solution}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ServiceProblems;
