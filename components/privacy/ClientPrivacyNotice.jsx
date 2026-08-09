"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Footer privacy notice. Collapsed to a single paragraph with a "Read more"
 * toggle so the disclosure never dominates the footer.
 */
export function ClientPrivacyNotice() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[var(--radius-card)] border border-white/15 px-6 py-5 sm:px-8 sm:py-6">
      <p className="text-[0.82rem] leading-relaxed text-white/70">
        <span className="font-semibold text-white underline underline-offset-4">
          CLIENT&apos;S PRIVACY NOTICE:
        </span>{" "}
        At BifidMedia, we prioritise the confidentiality and privacy of our
        clients. Under our contractual agreements we uphold a strict
        non-disclosure policy, which prevents us from openly promoting or
        advertising the business details, revenue or statistics of our clientele
        on this site{" "}
        {!open ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={false}
            className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 transition-colors duration-200 hover:text-accent"
          >
            Read more
            <ChevronDown size={14} aria-hidden="true" />
          </button>
        ) : null}
      </p>

      {open ? (
        <>
          <p className="mt-4 text-[0.82rem] leading-relaxed text-white/70">
            Any figures, screenshots or case details shared with you during a
            consultation are provided with client consent and are illustrative
            only. They are not a projection, guarantee or promise of the results
            your own store will achieve. Marketplace performance depends on your
            product, category, capital, pricing and how consistently the account
            is operated.
          </p>
          <p className="mt-3 text-[0.82rem] leading-relaxed text-white/70">
            Store data we access in the course of a service engagement is used
            solely to deliver that engagement and is handled in line with our{" "}
            <a
              href="/privacy-policy"
              className="font-semibold text-white underline underline-offset-4 hover:text-accent"
            >
              Privacy Policy
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-expanded
            className="mt-4 inline-flex items-center gap-1 text-[0.82rem] font-semibold text-white underline underline-offset-4 transition-colors duration-200 hover:text-accent"
          >
            Read less
            <ChevronDown size={14} aria-hidden="true" className="rotate-180" />
          </button>
        </>
      ) : null}
    </div>
  );
}

export default ClientPrivacyNotice;
