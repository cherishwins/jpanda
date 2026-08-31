export function Plates() {
  return (
    <section id="houses" className="grid min-h-[100svh] md:grid-cols-2">
      <a
        href="#plain-sight"
        className="group relative flex min-h-[70svh] flex-col justify-end overflow-hidden bg-ink md:min-h-[100svh]"
      >
        <img
          src="/brand/roses-ink.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_18%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative px-6 py-12 md:px-10 md:py-16">
          <p className="font-display text-xs tracking-[0.32em] text-gold uppercase">
            01
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.04em] text-paper md:text-5xl">
            PLAIN SIGHT
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            Two roses. The engine behind them. For people who look twice.
          </p>
        </div>
      </a>

      <a
        href="#valorem"
        className="group relative flex min-h-[70svh] flex-col justify-end overflow-hidden bg-verdigris md:min-h-[100svh]"
      >
        <img
          src="/brand/valorem-scale.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="relative px-6 py-12 md:px-10 md:py-16">
          <p className="font-display text-xs tracking-[0.32em] text-assay uppercase">
            02
          </p>
          <h2 className="mt-3 font-cinzel text-4xl tracking-[0.18em] text-vellum md:text-5xl">
            VALOREM
          </h2>
          <p className="mt-4 max-w-sm font-mono text-[11px] tracking-[0.22em] text-assay uppercase">
            Worth, measured.
          </p>
        </div>
      </a>
    </section>
  );
}
