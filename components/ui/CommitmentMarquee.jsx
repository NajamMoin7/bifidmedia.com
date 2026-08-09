import { BadgeCheck } from "lucide-react";
import { Marquee } from "./Marquee";
import { commitments, clientTestimonials } from "@/data/testimonials";

function Card({ title, text }) {
  return (
    <article className="flex h-full w-[290px] flex-col rounded-[var(--radius-card)] border border-line bg-white p-5 sm:w-[330px]">
      <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky text-brand">
        <BadgeCheck size={16} aria-hidden="true" />
      </span>
      <h3 className="text-[0.98rem]">{title}</h3>
      <p className="mt-1.5 text-[0.86rem] leading-relaxed text-muted">{text}</p>
    </article>
  );
}

/**
 * Two opposite-direction marquee rows — the reference's `.service-review`
 * section. Renders real client testimonials when they exist, and BifidMedia's
 * written commitments until then.
 */
export function CommitmentMarquee({
  heading = "What working with BifidMedia actually looks like",
  text = "We would rather publish the commitments we can be held to than reviews you have no way of verifying.",
}) {
  const items = clientTestimonials.length
    ? clientTestimonials.map((t) => ({ title: t.name, text: t.quote }))
    : commitments;

  const half = Math.ceil(items.length / 2);
  const rowOne = items.slice(0, half);
  const rowTwo = items.slice(half);

  return (
    <section className="section-pad bg-white">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)]" data-aos="fade-up">
            {heading}
          </h2>
          <p
            className="mt-4 text-[1rem] leading-relaxed text-muted"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            {text}
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <Marquee duration={58} ariaLabel="BifidMedia service commitments">
          {rowOne.map((item) => (
            <Card key={item.title} title={item.title} text={item.text} />
          ))}
        </Marquee>
        {rowTwo.length ? (
          <Marquee
            duration={64}
            direction="reverse"
            ariaLabel="More BifidMedia service commitments"
          >
            {rowTwo.map((item) => (
              <Card key={item.title} title={item.title} text={item.text} />
            ))}
          </Marquee>
        ) : null}
      </div>
    </section>
  );
}

export default CommitmentMarquee;
