"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }) {
  return (
    <section className="simple-page">
      <p className="eyebrow">Error</p>
      <h1>Something interrupted the page.</h1>
      <p>Please try again or contact BifidMedia if the issue continues.</p>
      <Button type="button" onClick={reset}>Try again</Button>
    </section>
  );
}
