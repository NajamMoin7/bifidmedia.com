"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }) {
  return (
    <section className="section-pad bg-white">
      <div className="shell">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-[clamp(1.6rem,3vw,2.3rem)]">
            Something went wrong on our side
          </h1>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
            The page failed to load. Try again — if it keeps happening, let us
            know and we will look into it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={reset} size="lg">
              Try again
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
