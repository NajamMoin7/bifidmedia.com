"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const numeric = Number(String(value).replace(/\D/g, "")) || 0;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (inView && numeric) {
      return animate(count, numeric, { duration: 1.4, ease: "easeOut" }).stop;
    }
  }, [count, inView, numeric]);

  if (!numeric) return <span ref={ref}>{value}</span>;
  return <motion.span ref={ref}>{rounded}</motion.span>;
}
