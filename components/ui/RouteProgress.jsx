"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function RouteProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setLoading(false);
      document.body.classList.remove("route-loading");
    });
  }, [pathname]);

  useEffect(() => {
    const start = (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest?.("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      setLoading(true);
      document.body.classList.add("route-loading");
    };
    document.addEventListener("click", start, true);
    return () => {
      document.removeEventListener("click", start, true);
    };
  }, []);

  return (
    <>
      {loading && <div className="route-progress" aria-hidden="true" />}
      {loading && (
        <div className="route-spinner" role="status" aria-live="polite">
          <span className="sr-only">Loading page</span>
          <div className="bifid-loader" aria-hidden="true"><span /><span /><span /><span /></div>
        </div>
      )}
    </>
  );
}
