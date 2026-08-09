import { MapPin, Phone, Mail, Clock, Handshake, LifeBuoy } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FaqSection } from "@/components/ui/FaqSection";
import { LeadForm } from "@/components/forms/LeadForm";
import { Newsletter } from "@/components/home/Newsletter";
import { siteConfig } from "@/data/siteConfig";
import { contactFaqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact BifidMedia",
  description:
    "Talk to BifidMedia about your e-commerce store. Call +1 (512) 410-5874, email info@bifidmedia.com, or send us your details and we will respond within one business day.",
  path: "/contact",
});

const desks = [
  {
    icon: Handshake,
    title: "New enquiries",
    text: "Launching, replatforming or adding a channel — start here for a free, no-obligation call.",
    action: { label: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
  },
  {
    icon: LifeBuoy,
    title: "Existing clients",
    text: "Your account manager is your fastest route. For anything urgent, use the main line and ask for the account desk.",
    action: { label: siteConfig.email, href: siteConfig.emailHref },
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(22,93,255,0.14),transparent_65%)] blur-2xl" />
        </div>
        <div className="shell pt-12 pb-10 lg:pt-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-[var(--radius-pill)] border border-line bg-sky px-3.5 py-1.5 text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-brand">
              Contact
            </span>
            <h1 className="mt-5 text-[clamp(2rem,4vw,3rem)]">Talk to BifidMedia</h1>
            <p className="mt-4 text-[1.03rem] leading-relaxed text-muted">
              Tell us what you are selling and where it is stuck. You will get a
              straight answer about what we would prioritise — and whether we are
              the right people for it.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Contact" }]} />

      <Section tone="canvas">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ul className="grid gap-4">
              {desks.map((desk, index) => (
                <li
                  key={desk.title}
                  className="card-surface p-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <span className="gradient-brand mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white">
                    <desk.icon size={18} aria-hidden="true" />
                  </span>
                  <h2 className="text-[1.1rem]">{desk.title}</h2>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">
                    {desk.text}
                  </p>
                  <a
                    href={desk.action.href}
                    className="mt-3 inline-block text-[0.92rem] font-semibold text-brand hover:text-deep"
                  >
                    {desk.action.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="card-surface mt-4 p-6" data-aos="fade-up" data-aos-delay="160">
              <h2 className="text-[1.1rem]">Office</h2>
              <ul className="mt-4 space-y-3 text-[0.92rem]">
                <li className="flex items-start gap-3">
                  <MapPin size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                  <a
                    href={siteConfig.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors duration-200 hover:text-brand"
                  >
                    {siteConfig.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={17} aria-hidden="true" className="shrink-0 text-brand" />
                  <a href={siteConfig.phoneHref} className="text-muted hover:text-brand">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={17} aria-hidden="true" className="shrink-0 text-brand" />
                  <a href={siteConfig.emailHref} className="text-muted hover:text-brand">
                    {siteConfig.email}
                  </a>
                </li>
                {siteConfig.hours.map((entry) => (
                  <li key={entry.days} className="flex items-start gap-3">
                    <Clock size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-muted">
                      <span className="font-medium text-ink">{entry.days}</span>
                      <br />
                      {entry.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7" data-aos="fade-left">
            <LeadForm
              intent="contact"
              heading="Send us your details"
              text="A BifidMedia specialist will respond within one business day — usually the same day during business hours."
              submitLabel="Send enquiry"
            />
          </div>
        </div>
      </Section>

      <FaqSection
        heading="Before you get in touch"
        items={contactFaqs}
        tone="white"
      />

      <Newsletter />
    </>
  );
}
