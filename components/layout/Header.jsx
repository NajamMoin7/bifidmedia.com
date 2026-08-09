"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ArrowUpRight, Menu } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { primaryNav } from "@/data/navigation";
import { ServicesDropdown } from "@/components/navigation/ServicesDropdown";
import { MobileMenu } from "@/components/navigation/MobileMenu";

/**
 * Single-row header.
 *
 * "Services" opens a compact dropdown of the six marketplace categories, each
 * linking straight to its category page. Individual services are never listed
 * in the header. The row is held on one line with `flex-nowrap`, `shrink-0`
 * and breakpoint-scaled gaps and padding rather than by shrinking the type.
 */
export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the overlay on navigation. Adjusting state during render is the
  // documented React pattern for reacting to a changed value.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href, isServices) => {
    if (isServices) {
      return (
        pathname.startsWith("/services") ||
        /^\/(amazon|walmart|shopify|tiktok-shop|etsy|ebay|business)\//.test(
          pathname
        )
      );
    }
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_1px_0_var(--color-line),0_6px_24px_rgba(18,58,156,0.07)]"
          : "border-b border-line"
      }`}
    >
      <div className="shell-wide">
        {/* One row. Never wraps. */}
        <div className="flex h-[74px] flex-nowrap items-center gap-2 xl:gap-3">
          <Link href="/" aria-label="BifidMedia home" className="min-w-0 shrink">
            <Image
              src="/logo/Logo.png"
              alt="BifidMedia"
              width={200}
              height={55}
              preload
              className="h-8 w-auto max-w-[152px] object-contain lg:h-9 lg:max-w-none"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="ml-1 hidden flex-nowrap items-center gap-1 lg:flex xl:ml-3"
          >
            {primaryNav.map((link) => {
              const active = isActive(link.href, link.isServices);

              if (link.isServices) {
                return <ServicesDropdown key={link.href} active={active} />;
              }

              if (link.variant === "outline") {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`shrink-0 whitespace-nowrap rounded-[var(--radius-pill)] border px-2.5 py-2 text-[0.88rem] font-semibold transition-all duration-200 xl:px-3.5 xl:text-[0.92rem] ${
                      active
                        ? "border-brand bg-sky text-brand"
                        : "border-line text-ink hover:border-brand hover:text-brand"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[var(--radius-pill)] px-2.5 py-2 text-[0.88rem] font-semibold transition-colors duration-200 xl:px-3.5 xl:text-[0.92rem] ${
                    active ? "bg-sky text-brand" : "text-ink hover:text-brand"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 flex-nowrap items-center gap-2">
            <Link
              href="/become-a-partner"
              className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[var(--radius-pill)] px-2.5 py-2 text-[0.85rem] font-semibold text-ink transition-colors duration-200 hover:text-brand xl:inline-flex xl:px-3 xl:text-[0.88rem]"
            >
              Become a Partner
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>

            <a
              href={siteConfig.phoneHref}
              className="hidden shrink-0 items-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] border border-line px-3 py-2 text-[0.85rem] font-semibold text-ink transition-all duration-200 hover:border-brand hover:text-brand md:inline-flex xl:px-3.5 xl:text-[0.88rem]"
            >
              <Phone size={14} aria-hidden="true" className="text-brand" />
              {siteConfig.phoneDisplay}
            </a>

            <Link
              href="/get-started"
              className="gradient-brand inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[var(--radius-pill)] px-3.5 py-2.5 text-[0.85rem] font-semibold text-white shadow-[0_8px_22px_rgba(22,93,255,0.28)] transition-transform duration-300 hover:-translate-y-0.5 xl:px-5 xl:text-[0.88rem]"
            >
              Get Started
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="shrink-0 rounded-[var(--radius-pill)] border border-line p-2.5 text-ink transition-all duration-200 hover:border-brand hover:text-brand"
            >
              <Menu size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

export default Header;
