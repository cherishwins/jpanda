import { cn } from "@/lib/utils";

type Variant = "paper" | "rose" | "gold" | "ink";

const fills: Record<Variant, string> = {
  paper: "var(--color-paper)",
  rose: "var(--color-rose-hot)",
  gold: "var(--color-gold)",
  ink: "var(--color-ink)",
};

function petal(
  cx: number,
  cy: number,
  angle: number,
  length: number,
  spread: number,
) {
  const a = (angle * Math.PI) / 180;
  const r = (n: number) => Number(n.toFixed(3));
  const tipX = r(cx + Math.cos(a) * length);
  const tipY = r(cy + Math.sin(a) * length);
  const mid = length * 0.58;
  const c1x = r(cx + Math.cos(a - spread) * mid);
  const c1y = r(cy + Math.sin(a - spread) * mid);
  const c2x = r(cx + Math.cos(a + spread) * mid);
  const c2y = r(cy + Math.sin(a + spread) * mid);
  const bx = r(cx + Math.cos(a) * length * 0.16);
  const by = r(cy + Math.sin(a) * length * 0.16);
  return `M ${bx} ${by} Q ${c1x} ${c1y} ${tipX} ${tipY} Q ${c2x} ${c2y} ${bx} ${by} Z`;
}

export function OpenRose({ cx, cy, r, fill }: { cx: number; cy: number; r: number; fill: string }) {
  const outer = [-90, -30, 30, 90, 150, 210].map((ang) =>
    petal(cx, cy, ang, r, 0.42),
  );
  const inner = [-60, 0, 60, 120, 180, 240].map((ang) =>
    petal(cx, cy, ang, r * 0.58, 0.5),
  );
  return (
    <g>
      {outer.map((d) => (
        <path key={d} d={d} fill={fill} />
      ))}
      {inner.map((d) => (
        <path key={d} d={d} fill={fill} opacity="0.78" />
      ))}
      {[-90, -18, 54, 126, 198].map((ang) => {
        const a = (ang * Math.PI) / 180;
        const r3 = (n: number) => Number(n.toFixed(3));
        return (
          <circle
            key={ang}
            cx={r3(cx + Math.cos(a) * r * 0.14)}
            cy={r3(cy + Math.sin(a) * r * 0.14)}
            r={r3(r * 0.045)}
            fill={fill}
            opacity="0.95"
          />
        );
      })}
    </g>
  );
}

export function Bud({ cx, cy, fill }: { cx: number; cy: number; fill: string }) {
  return (
    <g>
      <path
        d={`M ${cx} ${cy - 34}
            C ${cx - 12} ${cy - 22} ${cx - 16} ${cy - 6} ${cx - 14} ${cy + 10}
            C ${cx - 12} ${cy + 22} ${cx - 6} ${cy + 28} ${cx} ${cy + 30}
            C ${cx + 6} ${cy + 28} ${cx + 12} ${cy + 22} ${cx + 14} ${cy + 10}
            C ${cx + 16} ${cy - 6} ${cx + 12} ${cy - 22} ${cx} ${cy - 34} Z`}
        fill={fill}
      />
      <path
        d={`M ${cx} ${cy - 34}
            C ${cx - 4} ${cy - 18} ${cx - 5} ${cy - 4} ${cx} ${cy + 8}
            C ${cx + 5} ${cy - 4} ${cx + 4} ${cy - 18} ${cx} ${cy - 34} Z`}
        fill={fill}
        opacity="0.55"
      />
      <path
        d={`M ${cx - 8} ${cy + 22}
            C ${cx - 22} ${cy + 18} ${cx - 24} ${cy + 32} ${cx - 10} ${cy + 36}
            L ${cx} ${cy + 28} Z`}
        fill={fill}
      />
      <path
        d={`M ${cx + 8} ${cy + 22}
            C ${cx + 22} ${cy + 18} ${cx + 24} ${cy + 32} ${cx + 10} ${cy + 36}
            L ${cx} ${cy + 28} Z`}
        fill={fill}
      />
      <path
        d={`M ${cx} ${cy + 28}
            C ${cx - 4} ${cy + 38} ${cx + 4} ${cy + 38} ${cx} ${cy + 28} Z`}
        fill={fill}
      />
    </g>
  );
}

function Leaf({
  x,
  y,
  dir,
  fill,
}: {
  x: number;
  y: number;
  dir: 1 | -1;
  fill: string;
}) {
  const s = dir;
  return (
    <path
      d={`M ${x} ${y}
          C ${x + 18 * s} ${y - 8} ${x + 34 * s} ${y + 2} ${x + 38 * s} ${y + 16}
          C ${x + 22 * s} ${y + 14} ${x + 10 * s} ${y + 8} ${x} ${y} Z`}
      fill={fill}
      opacity="0.9"
    />
  );
}

export function TwinRose({
  className,
  variant = "paper",
  cipher = false,
  label = "Twin Rose mark",
}: {
  className?: string;
  variant?: Variant;
  cipher?: boolean;
  label?: string;
}) {
  const fill = fills[variant];
  const y = 96;
  const left = 78;
  const right = 202;

  return (
    <svg
      viewBox="0 0 280 320"
      className={cn("block h-auto w-full max-h-full", className)}
      role="img"
      aria-label={label}
    >
      <title>{label}</title>

      {cipher && (
        <line
          x1="48"
          y1={y}
          x2="232"
          y2={y}
          stroke="var(--color-gold)"
          strokeOpacity="0.55"
          strokeWidth="1.1"
        />
      )}

      <path
        d={`M ${left} 128 C ${left - 2} 176 ${left - 4} 230 ${left} 292`}
        fill="none"
        stroke={fill}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d={`M ${right} 138 C ${right + 2} 184 ${right + 3} 236 ${right} 292`}
        fill="none"
        stroke={fill}
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d={`M ${left - 3} 168 L ${left - 8} 174`}
        stroke={fill}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d={`M ${right + 3} 198 L ${right + 9} 204`}
        stroke={fill}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <Leaf x={left} y={188} dir={-1} fill={fill} />
      <Leaf x={right} y={158} dir={1} fill={fill} />
      <Leaf x={left} y={236} dir={1} fill={fill} />

      <path
        d={`M ${left - 10} 126
            C ${left - 28} 118 ${left - 30} 98 ${left - 16} 90`}
        fill="none"
        stroke={cipher ? "var(--color-gold)" : fill}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <Bud cx={left} cy={y} fill={fill} />
      <OpenRose cx={right} cy={y + 4} r={42} fill={fill} />

      {cipher && (
        <g
          fill="var(--color-gold)"
          fontFamily="var(--font-cipher)"
          fontSize="18"
          textAnchor="middle"
          opacity="0.8"
        >
          <text x={left} y="48">习</text>
          <text x="140" y="48">平</text>
          <text x="140" y="314">近</text>
        </g>
      )}
    </svg>
  );
}

export function WitnessMark({ className }: { className?: string }) {
  return (
    <img
      src="/brand/panda-gold.jpg"
      alt="The Witness — gold panda covering one eye"
      className={cn("h-auto w-full object-cover object-center", className)}
    />
  );
}
