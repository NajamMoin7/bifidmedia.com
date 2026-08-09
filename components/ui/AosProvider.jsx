"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      disable: () => window.innerWidth < 480,
    });
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    // New route, new elements: recalculate positions after paint.
    const id = window.setTimeout(() => AOS.refreshHard(), 120);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
}

export default AosProvider;
