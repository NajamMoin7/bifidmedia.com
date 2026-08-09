"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

/**
 * Thin blue gradient progress bar for route transitions.
 * If navigation takes longer than ~250ms a small BifidMedia-branded loader
 * appears; a full-screen blocking loader is deliberately never shown.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const loaderTimer = useRef(null);
  const activeRef = useRef(false);

  // Start on any same-origin link click that will actually navigate.
  useEffect(() => {
    function onClick(event) {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target?.closest?.("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (/^(mailto:|tel:|https?:)/.test(href)) {
        try {
          if (new URL(href, window.location.href).origin !== window.location.origin) {
            return;
          }
        } catch {
          return;
        }
      }

      const destination = new URL(anchor.href, window.location.href);
      if (
        destination.pathname === window.location.pathname &&
        destination.search === window.location.search
      ) {
        return;
      }

      activeRef.current = true;
      setActive(true);
      loaderTimer.current = window.setTimeout(() => setShowLoader(true), 250);
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  // Complete once the new route has rendered.
  useEffect(() => {
    window.clearTimeout(loaderTimer.current);
    if (!activeRef.current) return;
    const id = window.setTimeout(() => {
      activeRef.current = false;
      setActive(false);
      setShowLoader(false);
    }, 260);
    return () => window.clearTimeout(id);
  }, [pathname, searchParams]);

  useEffect(() => () => window.clearTimeout(loaderTimer.current), []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px]"
      >
        <div
          className="gradient-brand h-full origin-left transition-[transform,opacity] duration-300 ease-[var(--ease-out-soft)]"
          style={{
            transform: `scaleX(${active ? 0.85 : 0})`,
            opacity: active ? 1 : 0,
          }}
        />
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-5 left-1/2 z-[120] -translate-x-1/2 transition-all duration-200 ${
          showLoader
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {showLoader ? (
          <span className="flex items-center gap-2.5 rounded-[var(--radius-pill)] border border-line bg-white/95 px-4 py-2.5 shadow-lift backdrop-blur">
            <Image
              src="/logo/FAVICON.png"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 animate-pulse"
            />
            <span className="text-[0.82rem] font-medium text-muted">Loading…</span>
          </span>
        ) : null}
      </div>
    </>
  );
}

export default RouteProgress;
