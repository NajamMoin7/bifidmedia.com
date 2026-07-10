import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="simple-page">
      <p className="eyebrow">404</p>
      <h1>This page is not available.</h1>
      <p>Use the navigation or return home to continue exploring BifidMedia services.</p>
      <Button href="/">Return home</Button>
    </section>
  );
}
