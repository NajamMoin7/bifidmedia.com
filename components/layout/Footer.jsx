import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { footerNav, legalNav } from "@/data/navigation";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CookiePreferencesLink } from "@/components/privacy/CookiePreferencesLink";
import { ClientPrivacyNotice } from "@/components/privacy/ClientPrivacyNotice";

/**
 * Brand glyphs for the social row. lucide-react no longer ships brand icons,
 * so the four we use are inlined here.
 */
const socialIcons = {
  Facebook: (
    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3-.04-1.3-.13-2.46-.13-2.44 0-4.1 1.49-4.1 4.22v2.21H7.4V14h2.74v8h3.36z" />
  ),
  LinkedIn: (
    <path d="M6.94 8.5H3.9V21h3.04V8.5zM5.42 3a1.76 1.76 0 100 3.52A1.76 1.76 0 005.42 3zM21 21h-3.03v-6.1c0-1.45-.52-2.44-1.82-2.44-1 0-1.59.67-1.85 1.31-.1.23-.12.55-.12.87V21h-3.03V8.5h3.03v1.77c.4-.62 1.12-1.5 2.73-1.5 2 0 3.49 1.3 3.49 4.1V21z" />
  ),
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" strokeWidth="1.9" stroke="currentColor" />
      <circle cx="12" cy="12" r="3.9" fill="none" strokeWidth="1.9" stroke="currentColor" />
      <circle cx="17.2" cy="6.9" r="1.15" />
    </>
  ),
  YouTube: (
    <path d="M21.58 7.19a2.76 2.76 0 00-1.94-1.96C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.64.48A2.76 2.76 0 002.42 7.2 29 29 0 002 12a29 29 0 00.42 4.81 2.76 2.76 0 001.94 1.96c1.74.48 7.64.48 7.64.48s5.9 0 7.64-.48a2.76 2.76 0 001.94-1.96A29 29 0 0022 12a29 29 0 00-.42-4.81zM10.1 15.06V8.94L15.2 12l-5.1 3.06z" />
  ),
};

const [servicesGroup, popularGroup, companyGroup] = footerNav;

function LinkList({ links }) {
  return (
    <ul className="mt-5 space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="inline-flex items-center gap-2 text-[0.95rem] text-white/85 transition-colors duration-200 hover:text-white"
          >
            {link.label}
            {link.badge ? (
              <span className="rounded-[var(--radius-pill)] bg-white/12 px-2.5 py-1 text-[0.65rem] font-semibold text-white">
                {link.badge}
              </span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
          {/* Brand + contact */}
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

            <p className="mt-6 max-w-sm text-[0.95rem] font-semibold leading-relaxed text-white">
              BifidMedia builds, manages and scales your e-commerce store —
              turning it into a hands-off income stream while your revenue keeps
              growing.
            </p>

            <h2 className="mt-8 text-[0.85rem] font-semibold text-accent">
              Find Us
            </h2>

            <a
              href={siteConfig.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-[0.95rem] text-white/85 transition-colors duration-200 hover:text-white"
            >
              {siteConfig.addressLine}
            </a>

            <a
              href={siteConfig.phoneHref}
              className="mt-4 block text-[1.6rem] font-semibold tracking-tight text-accent transition-colors duration-200 hover:text-white"
            >
              {siteConfig.phoneDisplay}
            </a>

            <a
              href={siteConfig.emailHref}
              className="mt-4 inline-flex items-center gap-2 text-[0.95rem] text-white/85 transition-colors duration-200 hover:text-white"
            >
              {siteConfig.email}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <ul className="mt-7 flex flex-wrap items-center gap-3">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-deep transition-colors duration-200 hover:bg-accent hover:text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {socialIcons[social.label]}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <h2 className="text-[0.85rem] font-semibold text-accent">
                Newsletter
              </h2>
              <p className="mt-3 max-w-sm text-[0.88rem] leading-relaxed text-white/70">
                One practical e-commerce email a month. Policy changes,
                benchmarks and playbooks — nothing else.
              </p>
              <NewsletterForm tone="dark" className="mt-4 max-w-sm" />
            </div>
          </div>

          {/* Services — two columns, mirroring the reference layout */}
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-5">
            <div className="min-w-0">
              <h2 className="text-[0.85rem] font-semibold text-accent">
                {servicesGroup.title}
              </h2>
              <LinkList links={servicesGroup.links} />
            </div>
            <div className="min-w-0">
              <h2 className="text-[0.85rem] font-semibold text-accent">
                {popularGroup.title}
              </h2>
              <LinkList links={popularGroup.links} />
            </div>
          </div>

          {/* Company */}
          <div className="min-w-0 lg:col-span-3">
            <h2 className="text-[0.85rem] font-semibold text-accent">
              {companyGroup.title}
            </h2>
            <LinkList links={companyGroup.links} />
          </div>
        </div>

        <div className="mt-14">
          <ClientPrivacyNotice />
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="text-[0.85rem] text-white/70">
            © {siteConfig.copyrightYear} {siteConfig.legalName}. All rights
            reserved.
          </p>

          <p className="mt-5 max-w-4xl text-[0.78rem] leading-relaxed text-white/55">
            BifidMedia is an e-commerce services company. We are not a law firm
            or a financial advisory firm, nor can we offer official legal or
            financial advice. What you see on our website, and any of our
            communication over email, WhatsApp, Slack, SMS, Zoom call, social
            media and any other form of communication, is purely for general and
            educational matters and should not be taken as official legal or
            financial advice. By using our website and services you are
            explicitly accepting our{" "}
            <Link
              href="/terms-and-conditions"
              className="font-semibold text-white/80 underline underline-offset-2 hover:text-white"
            >
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-white/80 underline underline-offset-2 hover:text-white"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CookiePreferencesLink
              label="Your privacy choices"
              className="text-[0.82rem] text-white/70 underline underline-offset-4"
            />
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.82rem] text-white/60">
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
