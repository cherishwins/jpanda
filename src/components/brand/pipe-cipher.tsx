import { cn } from "@/lib/utils";

function Joint({
  x,
  y,
  stroke,
}: {
  x: number;
  y: number;
  stroke: string;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={7} fill="var(--color-ink)" stroke={stroke} strokeWidth={2.4} />
      <circle cx={x} cy={y} r={2.2} fill={stroke} />
    </g>
  );
}

function Pipe({
  d,
  stroke,
  width = 9,
  opacity = 1,
}: {
  d: string;
  stroke: string;
  width?: number;
  opacity?: number;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
    />
  );
}

export function PipeCipher({
  className,
  cipher = false,
}: {
  className?: string;
  cipher?: boolean;
}) {
  const load = cipher ? "var(--color-gold)" : "var(--color-paper)";
  const camo = "var(--color-moon)";

  return (
    <svg
      viewBox="0 0 920 340"
      className={cn("block h-auto w-full max-h-full", className)}
      role="img"
      aria-label="World-engine pipe mark"
    >
      <title>World-engine pipe mark</title>

      {/* Camouflage — extra plant that is not the name */}
      <g opacity={cipher ? 0.14 : 0.22}>
        <Pipe stroke={camo} width={7} d="M20 300 H900" />
        <Pipe stroke={camo} width={6} d="M40 40 V310" />
        <Pipe stroke={camo} width={6} d="M880 30 V310" />
        <Pipe stroke={camo} width={5} d="M40 40 H200" />
        <Pipe stroke={camo} width={5} d="M720 30 H880" />
        <Pipe stroke={camo} width={4} d="M200 220 H290" />
        <Pipe stroke={camo} width={4} d="M430 48 V100" />
        <Pipe stroke={camo} width={5} d="M240 310 V250 H310" />
      </g>

      {/* 习 — practice. Crook + nipple. Control side of the plant. */}
      <g>
        <Pipe stroke={load} d="M70 92 H148" />
        <Pipe stroke={load} d="M148 92 V205" />
        <Pipe stroke={load} d="M148 205 Q148 248 92 258" />
        <Pipe stroke={load} width={7} d="M160 118 L198 142" />
        <Joint x={70} y={92} stroke={load} />
        <Joint x={148} y={92} stroke={load} />
        <Joint x={148} y={205} stroke={load} />
        <Joint x={92} y={258} stroke={load} />
        <Joint x={198} y={142} stroke={load} />
      </g>

      {/* 近 — near. Floor run that walks under an axe-valve. */}
      <g>
        <circle cx={250} cy={128} r={5} fill={load} />
        <circle cx={262} cy={158} r={5} fill={load} />
        <Pipe stroke={load} d="M248 188 V268 H430" />
        <Pipe stroke={load} d="M318 78 H412" />
        <Pipe stroke={load} d="M394 78 V230" />
        <Pipe stroke={load} width={7} d="M328 118 L412 178" />
        <Joint x={248} y={188} stroke={load} />
        <Joint x={248} y={268} stroke={load} />
        <Joint x={430} y={268} stroke={load} />
        <Joint x={318} y={78} stroke={load} />
        <Joint x={394} y={78} stroke={load} />
        <Joint x={394} y={230} stroke={load} />
      </g>

      {/* 平 — level. Header, spine, lower cross. Two roses on one plane. */}
      <g>
        <Pipe stroke={load} width={11} d="M500 100 H860" />
        <Pipe stroke={load} d="M560 100 L538 148" />
        <Pipe stroke={load} d="M800 100 L822 148" />
        <Pipe stroke={load} width={10} d="M680 100 V292" />
        <Pipe stroke={load} width={10} d="M520 198 H840" />
        <Joint x={500} y={100} stroke={load} />
        <Joint x={560} y={100} stroke={load} />
        <Joint x={680} y={100} stroke={load} />
        <Joint x={800} y={100} stroke={load} />
        <Joint x={860} y={100} stroke={load} />
        <Joint x={680} y={198} stroke={load} />
        <Joint x={680} y={292} stroke={load} />
        <Joint x={520} y={198} stroke={load} />
        <Joint x={840} y={198} stroke={load} />
      </g>

      {cipher && (
        <g
          fill="var(--color-gold)"
          fontFamily="var(--font-cipher)"
          fontSize="28"
          textAnchor="middle"
          opacity="0.8"
        >
          <text x="130" y="52">习</text>
          <text x="340" y="52">近</text>
          <text x="680" y="52">平</text>
        </g>
      )}
    </svg>
  );
}
