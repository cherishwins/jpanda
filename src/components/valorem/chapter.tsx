import { useState } from "react";
import { AssayMark } from "./assay-mark";
import {
  valorem,
  valoremColors,
  valoremDo,
  valoremDont,
  valoremMarkCopy,
  valoremType,
} from "@/lib/valorem";
import { cn } from "@/lib/utils";

function Hex({ hex }: { hex: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="font-mono text-xs tracking-wider text-graphite tabular-nums hover:text-ink"
      onClick={async () => {
        await navigator.clipboard.writeText(hex);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
      }}
    >
      {copied ? "Copied" : hex}
    </button>
  );
}

export function ValoremChapter() {
  return (
    <div id="valorem" className="theme-valorem bg-vellum text-ink">
      <section className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-2 bg-verdigris md:w-3" />
        <div className="absolute inset-x-0 top-0 h-px bg-assay" />
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <p className="font-mono text-[11px] tracking-[0.28em] text-assay uppercase">
            02 / Valorem
          </p>
          <div className="mx-auto mt-16 max-w-xs text-verdigris">
            <AssayMark />
          </div>
          <h2 className="mt-12 text-center font-cinzel text-5xl tracking-[0.28em] md:text-6xl">
            {valorem.name}
          </h2>
          <p className="mt-4 text-center font-mono text-[11px] tracking-[0.28em] text-assay uppercase">
            {valorem.tagline}
          </p>
          <p className="mx-auto mt-10 max-w-md text-center font-sans text-sm leading-relaxed text-graphite">
            {valorem.brief} {valorem.place}
          </p>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-[11px] tracking-[0.28em] text-assay uppercase">
            01 / Mark
          </p>
          <h3 className="mt-4 font-display text-4xl">The assay mark</h3>
          <p className="mt-6 max-w-2xl font-sans text-[1.05rem] leading-relaxed text-graphite">
            {valoremMarkCopy}
          </p>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <figure className="flex flex-col items-center rounded-sm bg-vellum p-8 shadow-[0_0_0_1px_var(--color-rule)]">
              <AssayMark className="max-h-40 text-ink" />
              <figcaption className="mt-6 font-mono text-[10px] tracking-[0.2em] text-graphite uppercase">
                Ink on vellum
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center rounded-sm bg-ink p-8">
              <AssayMark className="max-h-40 text-vellum" />
              <figcaption className="mt-6 font-mono text-[10px] tracking-[0.2em] text-rule uppercase">
                Vellum on ink
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center rounded-sm bg-verdigris p-8">
              <AssayMark className="max-h-40 text-vellum" />
              <figcaption className="mt-6 font-mono text-[10px] tracking-[0.2em] text-vellum/70 uppercase">
                Vellum on verdigris
              </figcaption>
            </figure>
          </div>
          <p className="mt-10 max-w-2xl font-sans text-sm leading-relaxed text-graphite">
            Clearspace is the height of the V. Do not lock the seal to a
            photograph without a vellum or ink plate. Do not outline, bevel,
            drop-shadow, or recolor the diamond independently of the arms.
          </p>
        </div>
      </section>

      <section className="border-t border-rule bg-proof">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-[11px] tracking-[0.28em] text-assay uppercase">
            02 / Wordmark
          </p>
          <h3 className="mt-4 font-display text-4xl">Valorem is set in Cinzel</h3>
          <p className="mt-6 max-w-2xl font-sans leading-relaxed text-graphite">
            Cinzel is an inscriptional face. It is the only face permitted for
            the wordmark. Tracking is open. Never set Valorem in title case
            inside the lockup. Never italicize it. The tagline sits in IBM Plex
            Mono, small caps by setting the phrase in uppercase.
          </p>
          <div className="mt-12 space-y-4">
            <div className="flex flex-col items-start gap-4 rounded-sm bg-vellum px-6 py-8 shadow-[0_0_0_1px_var(--color-rule)] sm:flex-row sm:items-center">
              <AssayMark className="w-16 shrink-0 text-ink" />
              <div>
                <p className="font-cinzel text-3xl tracking-[0.22em] md:text-4xl">
                  VALOREM
                </p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.28em] text-assay uppercase">
                  Worth, measured.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-sm bg-ink px-6 py-8 text-vellum sm:flex-row sm:items-center">
              <AssayMark className="w-16 shrink-0 text-vellum" />
              <div>
                <p className="font-cinzel text-3xl tracking-[0.22em] md:text-4xl">
                  VALOREM
                </p>
                <p className="mt-2 font-mono text-[10px] tracking-[0.28em] text-assay uppercase">
                  Worth, measured.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 font-sans text-sm text-graphite">
            Stacked lockup is for square crops and print covers. Horizontal is
            default.
          </p>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-[11px] tracking-[0.28em] text-assay uppercase">
            03 / Color
          </p>
          <h3 className="mt-4 font-display text-4xl">Assay palette</h3>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {valoremColors.map((c) => (
              <article key={c.hex} className="overflow-hidden rounded-sm">
                <div
                  className={cn(
                    "h-28",
                    c.token === "ink" && "bg-ink",
                    c.token === "vellum" &&
                      "bg-vellum shadow-[0_0_0_1px_var(--color-rule)]",
                    c.token === "verdigris" && "bg-verdigris",
                    c.token === "assay" && "bg-assay",
                    c.token === "graphite" && "bg-graphite",
                    c.token === "rule" && "bg-rule",
                    c.token === "proof" &&
                      "bg-proof shadow-[0_0_0_1px_var(--color-rule)]",
                    c.token === "seal" && "bg-seal",
                  )}
                />
                <div className="bg-proof px-3 py-3">
                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase">
                    {c.name}
                  </p>
                  <Hex hex={c.hex} />
                  <p className="mt-2 text-xs leading-relaxed text-graphite">
                    {c.use}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-proof">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-[11px] tracking-[0.28em] text-assay uppercase">
            04 / Type
          </p>
          <h3 className="mt-4 font-display text-4xl">Four faces. No substitutes.</h3>
          <div className="mt-12 space-y-10">
            {valoremType.map((t) => (
              <article key={t.name} className="border-t border-rule pt-8">
                <p className="font-mono text-[10px] tracking-[0.22em] text-graphite uppercase">
                  {t.name}
                </p>
                <p
                  className={cn(
                    "mt-3 text-2xl leading-snug md:text-3xl",
                    t.role === "inscription" && "font-cinzel tracking-[0.12em] uppercase",
                    t.role === "display" && "font-display italic",
                    t.role === "sans" && "font-sans",
                    t.role === "mono" && "font-mono text-xl tracking-wide",
                  )}
                >
                  {t.sample}
                </p>
                <p className="mt-3 font-sans text-sm text-graphite">{t.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-[11px] tracking-[0.28em] text-assay uppercase">
            05 / Voice
          </p>
          <h3 className="mt-4 font-display text-4xl">The number is the product</h3>
          <p className="mt-6 max-w-2xl font-sans leading-relaxed text-graphite">
            Valorem writes like an assay certificate. Short sentences. Named
            sources. No motivational verbs. Latin is permitted when it is the
            word itself: ad valorem. Do not decorate a valuation with a slogan
            that the number does not support.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] tracking-[0.22em] text-verdigris uppercase">
                Do
              </p>
              <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed">
                {valoremDo.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.22em] text-seal uppercase">
                Do not
              </p>
              <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed">
                {valoremDont.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-16 text-center font-display text-2xl text-verdigris italic">
            {valorem.latin}
          </p>
        </div>
      </section>

      <section className="border-t border-rule bg-proof">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-[11px] tracking-[0.28em] text-assay uppercase">
            06 / Stationery
          </p>
          <h3 className="mt-4 font-display text-4xl">Letterhead and card</h3>
          <p className="mt-6 max-w-2xl font-sans leading-relaxed text-graphite">
            Letterhead is vellum with a verdigris spine and an assay hairline at
            the head. The mark sits top right. The card is ink, with the seal
            in vellum and the name in Cinzel.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="relative min-h-80 overflow-hidden rounded-sm bg-vellum shadow-[0_0_0_1px_var(--color-rule)]">
              <div className="absolute inset-y-0 left-0 w-2 bg-verdigris" />
              <div className="absolute inset-x-0 top-0 h-1 bg-assay" />
              <div className="flex items-start justify-between px-8 pt-8">
                <div>
                  <p className="font-cinzel text-lg tracking-[0.22em]">VALOREM</p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.22em] text-assay uppercase">
                    Worth, measured.
                  </p>
                </div>
                <AssayMark className="w-12 text-verdigris" />
              </div>
              <div className="mt-16 space-y-6 px-8 pb-10">
                <div className="h-px bg-rule" />
                <div className="h-px bg-rule" />
                <div className="h-px bg-rule" />
                <div className="h-px bg-rule" />
              </div>
            </article>
            <div className="grid gap-6">
              <article className="flex items-center gap-5 rounded-sm bg-ink px-6 py-8 text-vellum">
                <AssayMark className="w-16 shrink-0 text-vellum" />
                <div>
                  <p className="font-cinzel text-2xl tracking-[0.22em]">VALOREM</p>
                  <p className="mt-2 font-mono text-[9px] tracking-[0.22em] text-assay uppercase">
                    Worth, measured.
                  </p>
                  <p className="mt-8 font-mono text-[9px] tracking-[0.2em] text-rule uppercase">
                    Victoria BC
                  </p>
                </div>
              </article>
              <article className="flex flex-col items-center justify-center rounded-sm bg-verdigris px-6 py-10 text-vellum">
                <AssayMark className="w-24 text-vellum" />
                <p className="mt-6 font-mono text-[9px] tracking-[0.28em] uppercase">
                  Seal face
                </p>
              </article>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <img
              src="/brand/valorem-scale.jpg"
              alt="Assay balance on vellum"
              className="h-64 w-full rounded-sm object-cover"
            />
            <img
              src="/brand/valorem-punch.jpg"
              alt="Hallmark punch on laid paper"
              className="h-64 w-full rounded-sm object-cover"
            />
          </div>
          <p className="mt-10 font-sans text-sm text-graphite">
            <a
              href="/brand/valorem-brand-book.pdf"
              className="tracking-wide text-ink underline decoration-assay underline-offset-4 hover:text-verdigris"
            >
              Brand book, version 1.0
            </a>
            {" · "}
            {valorem.version}
          </p>
        </div>
      </section>
    </div>
  );
}
