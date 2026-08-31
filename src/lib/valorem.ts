export const valorem = {
  name: "VALOREM",
  tagline: "WORTH, MEASURED.",
  latin: "Ad valorem. According to worth. Not according to mood.",
  place: "Victoria, British Columbia.",
  brief: "Independent valuation. Physical assets. Going concerns.",
  version: "Identity system 1.0 · 30 August 2026",
} as const;

export const valoremColors = [
  { name: "Ink", hex: "#121614", token: "ink", use: "Primary field on dark. Text on vellum." },
  { name: "Vellum", hex: "#F3EEE4", token: "vellum", use: "Paper. Default ground for print and web." },
  { name: "Verdigris", hex: "#1F4A40", token: "verdigris", use: "Institutional green. Mark, heads, plates." },
  { name: "Assay", hex: "#A6842E", token: "assay", use: "Accent only. Rules, ticks, tagline." },
  { name: "Graphite", hex: "#3D4441", token: "graphite", use: "Secondary text. Captions." },
  { name: "Rule", hex: "#D4CCBC", token: "rule", use: "Hairlines. Table rules. Quiet structure." },
  { name: "Proof", hex: "#FAF8F3", token: "proof", use: "Hot-white paper when vellum is too warm." },
  { name: "Seal", hex: "#7A2E24", token: "seal", use: "Certified mark only. Never a fill field." },
] as const;

export const valoremType = [
  {
    name: "Cinzel",
    use: "Wordmark and cover titles only.",
    sample: "The worth of a thing is the price it will bear.",
    role: "inscription",
  },
  {
    name: "Cormorant Garamond",
    use: "Article titles. Pull quotes. Latin.",
    sample: "The worth of a thing is the price it will bear.",
    role: "display",
  },
  {
    name: "Source Sans 3",
    use: "Body, UI, correspondence.",
    sample: "The worth of a thing is the price it will bear.",
    role: "sans",
  },
  {
    name: "IBM Plex Mono",
    use: "Figures, folio, tagline, dates, hex.",
    sample: "The worth of a thing is the price it will bear.",
    role: "mono",
  },
] as const;

export const valoremDo = [
  "Set the wordmark in Cinzel only.",
  "Use assay as a hairline, never a field.",
  "Keep 7:1 contrast on body text.",
  "Place the seal on vellum or ink.",
  "Name the asset before praising it.",
];

export const valoremDont = [
  "Do not set VALOREM in sans.",
  "Do not use rainbow gradients.",
  "Do not drop-shadow the mark.",
  "Do not lock the seal to stock photos.",
  "Do not write unlock, empower, reimagine.",
];

export const valoremMarkCopy =
  "The mark is a V that is also a balance. Two arms meet at a vertex. A beam crosses the opening. A diamond sits on the point: the punch. The double ring is a hallmark. Twelve ticks stand for a full assay, not a clock.";
