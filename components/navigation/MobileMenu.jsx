"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { overlayMenu, servicesDropdown } from "@/data/navigation";
import { PlatformIcon } from "@/components/ui/PlatformIcon";

/**
 * Overlay menu.
 *
 * Deliberately short. "Services" expands into the six marketplace categories
 * only; individual services stay on the category pages.
 */
export function MobileMenu({ open, onClose }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-ink/45 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-white shadow-menu transition-transform duration-300 ease-[var(--ease-out-soft)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <Link href="/" onClick={onClose} aria-label="BifidMedia home">
            <Image
              src="/logo/Logo.png"
              alt="BifidMedia"
              width={168}
              height={46}
              className="h-9 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            aria-label="Close menu"
            className="rounded-full border border-line p-2 text-muted transition-colors duration-200 hover:border-brand hover:text-brand"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
          <ul className="grid gap-1.5">
            {/* Services expands into the marketplace categories only — never
                into individual services. */}
            <li
              className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                servicesExpanded ? "border-brand/40 bg-sky/40" : "border-line"
              }`}
            >
              <div className="flex items-center">
                <Link
                  href="/services"
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className="flex-1 px-4 py-3.5 text-[1rem] font-semibold text-ink"
                >
                  Services
                </Link>
                <button
                  type="button"
                  tabIndex={open ? 0 : -1}
                  aria-expanded={servicesExpanded}
                  aria-label={`${servicesExpanded ? "Hide" : "Show"} service categories`}
                  onClick={() => setServicesExpanded((value) => !value)}
                  className="px-4 py-3.5 text-muted"
                >
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${
                      servicesExpanded ? "rotate-180 text-brand" : ""
                    }`}
                  />
                </button>
              </div>

              <AnimatePresence initial={false}>
                {servicesExpanded ? (
                  <motion.div
                    key="categories"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="border-t border-line/70 px-2 py-2">
                      {servicesDropdown.map((category) => (
                        <li key={category.id}>
                          <Link
                            href={category.href}
                            onClick={onClose}
                            className="group flex items-center gap-3 rounded-lg px-2.5 py-2.5 transition-colors duration-200 hover:bg-white"
                          >
                            <PlatformIcon platform={category.icon} size={26} />
                            <span className="flex-1 text-[0.9rem] font-medium text-ink transition-colors duration-200 group-hover:text-brand">
                              {category.label}
                            </span>
                            <ArrowRight
                              size={14}
                              aria-hidden="true"
                              className="text-line transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>

            {overlayMenu.main
              .filter((link) => link.href !== "/services")
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    tabIndex={open ? 0 : -1}
                    className="group flex items-center justify-between rounded-xl border border-line px-4 py-3.5 text-[1rem] font-semibold text-ink transition-all duration-200 hover:border-brand/40 hover:bg-sky hover:text-brand"
                  >
                    {link.label}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="text-line transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-brand"
                    />
                  </Link>
                </li>
              ))}
          </ul>

          <p className="mb-2 mt-8 px-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Company
          </p>
          <ul className="grid grid-cols-2 gap-1">
            {overlayMenu.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className="block rounded-lg px-3 py-2.5 text-[0.9rem] text-muted transition-colors duration-200 hover:bg-sky hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-line bg-canvas px-5 py-5">
          <p className="text-[0.85rem] text-muted">
            Prefer to talk? Book a free call with a BifidMedia specialist.
          </p>
          <div className="mt-3 grid gap-2">
            <Link
              href="/get-started"
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              className="gradient-brand flex items-center justify-center gap-2 rounded-[var(--radius-pill)] px-5 py-3 text-sm font-semibold text-white"
            >
              Get Started
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={siteConfig.phoneHref}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-line bg-white px-3 py-2.5 text-[0.82rem] font-semibold text-ink"
              >
                <Phone size={14} aria-hidden="true" className="text-brand" />
                Call
              </a>
              <a
                href={siteConfig.emailHref}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-line bg-white px-3 py-2.5 text-[0.82rem] font-semibold text-ink"
              >
                <Mail size={14} aria-hidden="true" className="text-brand" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
