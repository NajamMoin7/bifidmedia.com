import Link from "next/link";

export function Button({ href, children, variant = "primary", className = "", ...props }) {
  const classes = `btn btn-${variant} ${className}`;
  if (href) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
