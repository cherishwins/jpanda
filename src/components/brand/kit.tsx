import { useState } from "react";
import {
  cipher,
  colors,
  house,
  manifesto,
  samples,
  strata,
  system,
  tagline,
  voiceDo,
  voiceDont,
} from "@/lib/brand";
import { PandaMark, RosesMark } from "./marks";
import { PipeCipher } from "./pipe-cipher";
import { cn } from "@/lib/utils";

function Hex({ hex }: { hex: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      className="font-mono text-xs tracking-wider text-muted tabular-nums hover:text-paper"
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

export function Kit() {
  return (
    <div id="plain-sight">
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src="/brand/machine-hero.jpg"
          alt="Two red roses growing from a world-engine of pipes"
          className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 md:px-8 md:pb-24">
          <p className="stagger-item font-display text-sm tracking-[0.42em] text-gold uppercase">
            01 / {system}
          </p>
          <h1 className="stagger-item mt-3 font-display text-[14vw] leading-[0.85] font-medium tracking-[0.04em] text-paper md:text-8xl">
            {system}
          </h1>
          <p className="stagger-item mt-6 max-w-md font-display text-xl text-paper/80 italic md:text-2xl">
            {tagline}
          </p>
          <p className="stagger-item mt-8 max-w-lg text-[1.05rem] leading-relaxed text-paper/70">
            Two roses. Behind them, the machine that powers the rooms —
            compute, claim, kinetic, name. The pipes are not decoration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 md:px-8 md:py-32">
        <p className="font-display text-xs tracking-[0.32em] text-rose uppercase">
          Manifesto
        </p>
        <div className="mt-10 space-y-8">
          {manifesto.map((p) => (
            <p
              key={p.slice(0, 24)}
              className="text-[1.15rem] leading-[1.65] text-paper/88 md:text-[1.25rem]"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <section id="mark" className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-display text-xs tracking-[0.32em] text-gold uppercase">
            The mark
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Two roses. The Witness.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-paper/75">
            The public mark is the photograph. Tight bud, open bloom, one
            plane. The Witness is the gold panda, one eye covered. Nothing
            is drawn. The pipes live in the engine, not in the lockup.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-20 md:grid-cols-2 md:px-8">
          <figure className="overflow-hidden rounded-xl bg-paper p-8 md:p-12">
            <RosesMark className="mx-auto max-h-80" />
            <figcaption className="mt-6 text-center font-display text-sm tracking-[0.18em] text-ink/50 uppercase">
              The roses
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl bg-ink-2 p-8 md:p-12">
            <PandaMark className="mx-auto max-h-80" />
            <figcaption className="mt-6 text-center font-display text-sm tracking-[0.18em] text-muted uppercase">
              The witness
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="cipher" className="border-t border-paper/10 bg-ink-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-display text-xs tracking-[0.32em] text-gold uppercase">
            Construction
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            The name is the plumbing.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-paper/75">
            Three load-bearing runs live in the plant. They are not printed on
            the merch. They are not a password. They are the skeleton of the
            engine. Anyone can see two roses on a header. The astute see why
            the header is level, why a crook sits on the left, why a floor-run
            walks in from below.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl bg-ink px-3 py-8 md:px-8">
            <PipeCipher cipher />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {cipher.map((c) => (
              <article
                key={c.glyph}
                className="rounded-xl bg-ink p-6 pt-8 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_10%,transparent)]"
              >
                <p
                  className="font-cipher text-5xl text-rose"
                  lang="zh-Hans"
                >
                  {c.glyph}
                </p>
                <p className="mt-4 font-display text-sm tracking-[0.2em] text-gold uppercase">
                  {c.reading} · {c.meaning}
                </p>
                <p className="mt-3 leading-relaxed text-paper/70">{c.place}</p>
              </article>
            ))}
          </div>
          <h3 className="mt-16 font-display text-2xl">The six rooms of the engine</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strata.map((s) => (
              <article
                key={s.name}
                className="rounded-lg bg-ink px-5 py-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_10%,transparent)]"
              >
                <p className="font-display text-sm tracking-[0.2em] text-gold uppercase">
                  {s.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  {s.note}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            Public rooms get the roses. The machine stays background. Private
            rooms may show construction. If a stranger can read the skeleton
            without looking for it, the drawing got greedy. Pull it back.
          </p>
        </div>
      </section>

      <section id="color" className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-display text-xs tracking-[0.32em] text-gold uppercase">
            Color
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Four rooms and a rumor.
          </h2>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {colors.map((c) => (
              <article key={c.hex} className="overflow-hidden rounded-xl">
                <div
                  className={cn(
                    "h-36",
                    c.token === "ink" && "bg-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-paper)_12%,transparent)]",
                    c.token === "paper" && "bg-paper",
                    c.token === "rose" && "bg-rose",
                    c.token === "gold" && "bg-gold",
                    c.token === "moon" && "bg-moon",
                  )}
                  aria-hidden
                />
                <div className="bg-ink-2 px-4 py-4">
                  <p className="font-display text-lg">{c.name}</p>
                  <Hex hex={c.hex} />
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.use}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="type" className="border-t border-paper/10 bg-ink-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-display text-xs tracking-[0.32em] text-gold uppercase">
            Type
          </p>
          <div className="mt-8 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.2em] text-muted uppercase">
                Display · Cormorant Garamond
              </p>
              <p className="mt-4 font-display text-6xl leading-[0.9]">
                Two heads.
                <br />
                One plane.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-muted uppercase">
                Body · Source Serif 4
              </p>
              <p className="mt-4 text-lg leading-relaxed text-paper/80">
                Body copy is a serif because this house writes letters, not
                splash screens. Track the display. Do not track the body. Never
                set manifesto in all caps. Small caps are for the system name
                and for dates.
              </p>
              <p className="mt-6 font-cipher text-3xl text-rose" lang="zh-Hans">
                习 近 平
              </p>
              <p className="mt-2 text-sm text-muted">
                Cipher · Noto Serif SC — construction only.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="voice" className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-display text-xs tracking-[0.32em] text-gold uppercase">
            Voice
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Direct. Finished. A little dangerous. Never cute.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-display text-sm tracking-[0.18em] text-paper uppercase">
                Do
              </p>
              <ul className="mt-4 space-y-3 text-paper/75">
                {voiceDo.map((d) => (
                  <li key={d} className="border-l border-rose pl-4">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-sm tracking-[0.18em] text-paper uppercase">
                Do not
              </p>
              <ul className="mt-4 space-y-3 text-paper/75">
                {voiceDont.map((d) => (
                  <li key={d} className="border-l border-paper/20 pl-4">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {samples.map((s) => (
              <blockquote
                key={s.label}
                className="rounded-xl bg-ink-2 p-6 md:p-8"
              >
                <p className="font-display text-xs tracking-[0.22em] text-gold uppercase">
                  {s.label}
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-paper/85">
                  {s.text}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="use" className="border-t border-paper/10 bg-ink-2">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-display text-xs tracking-[0.32em] text-gold uppercase">
            Use
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Photography, seal, engine, witness.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <figure className="md:col-span-2 overflow-hidden rounded-xl">
              <img
                src="/brand/machine-hero.jpg"
                alt="Roses growing from the world-engine"
                className="h-full max-h-[520px] w-full object-cover object-[50%_22%]"
              />
            </figure>
            <figure className="overflow-hidden rounded-xl">
              <img
                src="/brand/seal-wax.jpg"
                alt="Oxblood wax seal of two roses"
                className="h-full max-h-[520px] w-full object-cover"
              />
            </figure>
            <figure className="md:col-span-2 overflow-hidden rounded-xl">
              <img
                src="/brand/machine-wide.jpg"
                alt="World-engine with roses on a header pipe"
                className="max-h-[420px] w-full object-cover"
              />
            </figure>
            <figure className="overflow-hidden rounded-xl bg-ink">
              <PandaMark className="max-h-[420px]" label="The Witness" />
            </figure>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <p className="text-sm leading-relaxed text-muted">
              Photography is always these two roses. Tight bud, open bloom.
              Heads on one plane. Never a vase. Never a drawing of them.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              The engine is background: racks, pistons, gold tickers, cable
              looms. It should look like the room that runs the world. It
              should not look like a logo.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              The Witness is the gold panda. One eye covered. Geometric.
              Secondary to the roses. It does not get drawn in lines.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-xl bg-paper p-8 text-ink md:p-12">
            <div className="flex items-start justify-between gap-6">
          <div className="w-16 shrink-0">
                <RosesMark className="w-16" />
              </div>
              <p className="font-display text-xs tracking-[0.28em] uppercase">
                {house}
              </p>
            </div>
            <p className="mt-16 font-display text-3xl leading-tight md:text-4xl">
              {tagline}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">
              Letterhead. Paper field, ink mark, rose used once in the rule
              beneath the close. Date in small caps.
            </p>
            <div className="mt-12 h-px bg-rose" />
            <p className="mt-4 font-display text-sm tracking-[0.2em] uppercase">
              {system}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
