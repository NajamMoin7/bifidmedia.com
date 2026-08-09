import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AskStrategist } from "@/components/inner/AskStrategist";
import { siteConfig } from "@/data/siteConfig";

export function LegalPage({ title, updated, intro, sections }) {
  return (
    <>
      <section className="bg-white">
        <div className="shell pt-12 pb-8 lg:pt-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-[var(--radius-pill)] border border-line bg-sky px-3.5 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-brand">
              Legal
            </span>
            <h1 className="mt-5 text-[clamp(1.9rem,3.8vw,2.8rem)]">{title}</h1>
            <p className="mt-3 text-[0.85rem] text-muted">
              Last updated: {updated}
            </p>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">
              {intro}
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: title }]} />

      <section className="section-pad bg-white">
        <div className="shell">
          <div className="prose-bifid max-w-3xl">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section>
              <h2>Contact us</h2>
              <p>
                Questions about this document can be sent to{" "}
                <a href={siteConfig.emailHref}>{siteConfig.email}</a>, by phone
                on <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>,
                or by post to {siteConfig.legalName}, {siteConfig.addressLine}.
              </p>
            </section>
          </div>
        </div>
      </section>

      <AskStrategist />
    </>
  );
}

export default LegalPage;
