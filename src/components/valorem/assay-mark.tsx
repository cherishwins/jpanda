import { cn } from "@/lib/utils";

export function AssayMark({
  className,
  label = "Valorem assay mark",
}: {
  className?: string;
  label?: string;
}) {
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r = (n: number) => Number(n.toFixed(3));
    return {
      x1: r(100 + Math.cos(a) * 81),
      y1: r(100 + Math.sin(a) * 81),
      x2: r(100 + Math.cos(a) * 87),
      y2: r(100 + Math.sin(a) * 87),
    };
  });

  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("block h-auto w-full", className)}
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      >
        <circle cx="100" cy="100" r="88" />
        <circle cx="100" cy="100" r="78" />
        {ticks.map((t) => (
          <line
            key={`${t.x1}-${t.y1}`}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            strokeWidth="2"
          />
        ))}
        <path d="M64 60 L100 138 L136 60" />
        <line x1="64" y1="60" x2="136" y2="60" />
      </g>
      <path d="M100 130 L108 142 L100 154 L92 142 Z" fill="currentColor" />
    </svg>
  );
}
