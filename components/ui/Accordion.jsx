"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map(([question, answer], index) => (
        <div className="accordion-item" key={question}>
          <button
            className="accordion-trigger"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            <span>{question}</span>
            <ChevronDown aria-hidden="true" className={open === index ? "rotate" : ""} size={18} />
          </button>
          {open === index && <div className="accordion-panel">{answer}</div>}
        </div>
      ))}
    </div>
  );
}
