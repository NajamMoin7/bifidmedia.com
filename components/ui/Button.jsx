import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] font-semibold transition-all duration-300 ease-[var(--ease-out-soft)] focus-visible:outline-2 focus-visible:outline-offset-3";

const variants = {
  primary:
    "gradient-brand text-white shadow-[0_10px_28px_rgba(22,93,255,0.28)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(22,93,255,0.36)]",
  outline:
    "border border-line bg-white text-ink hover:border-brand hover:text-brand hover:-translate-y-0.5 hover:shadow-soft",
  ghost: "text-brand hover:text-deep hover:gap-3",
  light:
    "bg-white text-brand shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
  onDark:
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  type = "button",
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${
    sizes[size] || sizes.md
  } ${className}`;

  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowUpRight
          size={17}
          strokeWidth={2.4}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (href) {
    const external = /^(https?:|tel:|mailto:)/.test(href);
    if (external) {
      return (
        <a href={href} className={`group ${classes}`} {...rest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${classes}`} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={`group ${classes}`} {...rest}>
      {content}
    </button>
  );
}

export default Button;
