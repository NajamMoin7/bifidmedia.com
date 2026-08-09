import { Check } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { CommitmentMarquee } from "@/components/ui/CommitmentMarquee";
import { FaqSection } from "@/components/ui/FaqSection";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { LeadForm } from "@/components/forms/LeadForm";
import { siteConfig } from "@/data/siteConfig";

/**
 * Shared layout for the three conversion pages (get started, book a
 * consultation, free audit) — the reference's `.banner-main-sec.fast` +
 * `.get-started-sec` pattern.
 */
export function FormPage({
  eyebrow,
  heading,
  intro,
  points,
  breadcrumb,
  formHeading,
  formText,
  submitLabel,
  intent,
  faqs,
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(22,93,255,0.15),transparent_65%)] blur-2xl" />
          <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(104,64,255,0.1),transparent_65%)] blur-2xl" />
        </div>

        <div className="shell pt-12 pb-14 lg:pt-16 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5" data-aos="fade-right">
              <span className="inline-flex items-center rounded-[var(--radius-pill)] border border-line bg-sky px-3.5 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-brand">
                {eyebrow}
              </span>
              <h1 className="mt-5 text-[clamp(1.9rem,3.8vw,2.9rem)]">{heading}</h1>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
                {intro}
              </p>

              <ul className="mt-7 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="gradient-brand mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white">
                      <Check size={11} strokeWidth={3.4} aria-hidden="true" />
                    </span>
                    <span className="text-[0.94rem] leading-relaxed text-ink">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-canvas p-5">
                <p className="text-[0.88rem] text-muted">
                  Prefer to talk? Call{" "}
                  <a
                    href={siteConfig.phoneHref}
                    className="font-semibold text-brand hover:text-deep"
                  >
                    {siteConfig.phoneDisplay}
                  </a>{" "}
                  or email{" "}
                  <a
                    href={siteConfig.emailHref}
                    className="font-semibold text-brand hover:text-deep"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="80">
              <LeadForm
                intent={intent}
                heading={formHeading}
                text={formText}
                submitLabel={submitLabel}
              />
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: breadcrumb }]} />

      <TrustMarquee />

      <CommitmentMarquee />

      {faqs?.length ? (
        <FaqSection heading="Before you send this" items={faqs} tone="canvas" />
      ) : null}

      <AskStrategist />
    </>
  );
}

export default FormPage;
