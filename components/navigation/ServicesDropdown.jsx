"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { servicesDropdown } from "@/data/navigation";
import { PlatformIcon } from "@/components/ui/PlatformIcon";

const CLOSE_DELAY = 150;

/**
 * Compact Services dropdown.
 *
 * Lists the marketplace categories only and links straight to each category
 * page — individual services stay on those pages, never in the header. Opens on
 * hover and on click, closes on outside click, Escape, or 150ms after the
 * pointer leaves. Fully keyboard operable via arrow keys.
 */
export function ServicesDropdown({ active }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);
  const menuId = useId();

  const cancelClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
  }, []);

  const openNow = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const closeNow = useCallback(() => {
    cancelClose();
    setOpen(false);
  }, [cancelClose]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY);
  }, [cancelClose]);

  const focusItem = useCallback((index) => {
    const items = itemRefs.current.filter(Boolean);
    if (!items.length) return;
    const next = (index + items.length) % items.length;
    items[next]?.focus();
  }, []);

  // Outside click closes.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Escape closes and returns focus to the trigger.
  useEffect(() => {
    if (!open) return;
    function onKey(event) {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  function onTriggerKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openNow();
      window.requestAnimationFrame(() => focusItem(0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      openNow();
      window.requestAnimationFrame(() => focusItem(-1));
    }
  }

  function onItemKeyDown(event, index) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusItem(index + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      focusItem(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusItem(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusItem(-1);
    } else if (event.key === "Tab" && !event.shiftKey && index === servicesDropdown.length - 1) {
      closeNow();
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onFocus={openNow}
        onKeyDown={onTriggerKeyDown}
        className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[var(--radius-pill)] px-2.5 py-2 text-[0.88rem] font-semibold transition-colors duration-200 xl:px-3.5 xl:text-[0.92rem] ${
          active || open ? "bg-sky text-brand" : "text-ink hover:text-brand"
        }`}
      >
        Services
        <ChevronDown
          size={15}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            aria-label="Service categories"
            initial={{ opacity: 0, y: -5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformOrigin: "top left",
              boxShadow: "0 20px 50px rgba(30, 74, 233, 0.15)",
            }}
            className="absolute left-0 top-[calc(100%+10px)] z-50 w-[330px] overflow-hidden rounded-[16px] border border-line bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fc_100%)] p-2"
          >
            {servicesDropdown.map((category, index) => (
              <Link
                key={category.id}
                href={category.href}
                role="menuitem"
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                onClick={closeNow}
                onKeyDown={(event) => onItemKeyDown(event, index)}
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-all duration-200 hover:border-brand/25 hover:bg-sky focus-visible:border-brand/25 focus-visible:bg-sky"
              >
                <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <PlatformIcon platform={category.icon} size={30} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[0.9rem] font-semibold text-ink transition-colors duration-200 group-hover:text-brand">
                    {category.label}
                  </span>
                  <span className="block text-[0.76rem] text-muted">
                    {category.description}
                  </span>
                </span>

                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-line transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand"
                />
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default ServicesDropdown;
