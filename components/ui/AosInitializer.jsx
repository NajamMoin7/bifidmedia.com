"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    AOS.init({
      duration: reducedMotion ? 0 : 700,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
      disable: () => reducedMotion,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return null;
}
