"use client";

import { useState, useId } from "react";
import { Plus } from "lucide-react";

export function Accordion({ items, defaultOpen = -1, className = "" }) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();

  if (!items?.length) return null;

  return (
    <div className={`divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white ${className}`}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${uid}-panel-${index}`;
        const buttonId = `${uid}-button-${index}`;

        return (
          <div key={item.question || index}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left text-[1.02rem] font-semibold text-ink transition-colors duration-200 hover:text-brand sm:px-7"
              >
                <span>{item.question}</span>
                <Plus
                  size={20}
                  strokeWidth={2.2}
                  aria-hidden="true"
                  className={`mt-0.5 shrink-0 text-brand transition-transform duration-300 ease-[var(--ease-out-soft)] ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-[0.97rem] leading-relaxed text-muted sm:px-7"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
