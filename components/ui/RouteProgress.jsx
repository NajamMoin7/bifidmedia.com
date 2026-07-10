"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function RouteProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setLoading(false);
      setShowSpinner(false);
      document.body.classList.remove("route-loading");
    });
  }, [pathname]);

  useEffect(() => {
    let spinnerTimer;
    const start = (event) => {
      const anchor = event.target.closest?.("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return;
      setLoading(true);
      document.body.classList.add("route-loading");
      window.clearTimeout(spinnerTimer);
      spinnerTimer = window.setTimeout(() => setShowSpinner(true), 250);
    };
    document.addEventListener("click", start, true);
    return () => {
      document.removeEventListener("click", start, true);
      window.clearTimeout(spinnerTimer);
    };
  }, []);

  return (
    <>
      {loading && <div className="route-progress" aria-hidden="true" />}
      {showSpinner && (
        <div className="route-spinner" role="status" aria-live="polite">
          <span className="sr-only">Loading page</span>
          <div className="bifid-loader" aria-hidden="true"><span /><span /><span /><span /></div>
        </div>
      )}
    </>
  );
}
