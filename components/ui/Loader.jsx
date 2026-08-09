import Image from "next/image";

export function Loader({ label = "Loading", inline = false }) {
  const body = (
    <span className="flex items-center gap-3">
      <Image
        src="/logo/FAVICON.png"
        alt=""
        width={26}
        height={26}
        className="h-6 w-6 animate-pulse"
      />
      <span className="text-sm font-medium text-muted">{label}…</span>
    </span>
  );

  if (inline) return body;

  return (
    <div role="status" aria-live="polite" className="flex justify-center py-24">
      {body}
    </div>
  );
}

export default Loader;
