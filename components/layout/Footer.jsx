import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { footerNav, legalNav } from "@/data/navigation";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CookiePreferencesLink } from "@/components/privacy/CookiePreferencesLink";

export function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="inline-flex rounded-2xl bg-white px-4 py-3">
              <Image
                src="/logo/Logo.png"
                alt="BifidMedia"
                width={200}
                height={55}
                className="h-9 w-auto"
              />
            </div>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
              BifidMedia builds, manages and scales e-commerce stores across
              Amazon, Walmart, Shopify, TikTok Shop, Etsy and eBay — so you own
              the business without running its day-to-day operations.
            </p>

            <ul className="mt-7 space-y-3 text-[0.92rem]">
              <li className="flex items-start gap-3">
                <MapPin size={17} aria-hidden="true" className="mt-0.5 shrink-0 text-accent" />
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.addressLine}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} aria-hidden="true" className="shrink-0 text-accent" />
                <a
                  href={siteConfig.phoneHref}
                  className="text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} aria-hidden="true" className="shrink-0 text-accent" />
                <a
                  href={siteConfig.emailHref}
                  className="text-white/80 transition-colors duration-200 hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/50">
                Newsletter
              </h2>
              <p className="mt-3 max-w-sm text-[0.88rem] leading-relaxed text-white/70">
                One practical e-commerce email a month. Policy changes,
                benchmarks and playbooks — nothing else.
              </p>
              <NewsletterForm tone="dark" className="mt-4 max-w-sm" />
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-white/20 px-3.5 py-1.5 text-[0.8rem] font-medium text-white/80 transition-all duration-200 hover:border-white/50 hover:text-white"
                  >
                    {social.label}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerNav.map((group) => (
              <div key={group.title} className="min-w-0">
                <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-white/50">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 text-[0.9rem] text-white/80 transition-colors duration-200 hover:text-white"
                      >
                        {link.label}
                        {link.badge ? (
                          <span className="rounded-[var(--radius-pill)] bg-accent/25 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-white">
                            {link.badge}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <p className="text-[0.82rem] leading-relaxed text-white/55">
            BifidMedia is an e-commerce services company. We are not a law firm
            or a financial advisory firm and do not provide legal, tax or
            investment advice. Information on this website is general and
            educational. Results depend on your product, market, capital and
            execution, and are not guaranteed. By using this website you accept
            our{" "}
            <Link href="/terms-and-conditions" className="underline underline-offset-2 hover:text-white">
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.82rem] text-white/55">
              © {siteConfig.copyrightYear} {siteConfig.legalName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.82rem] text-white/60">
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <CookiePreferencesLink />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
