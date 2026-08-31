import { sites, house, tagline } from "@/lib/brand";
import { PandaMark } from "@/components/brand/marks";
import { AssayMark } from "@/components/valorem/assay-mark";

export function Lattice() {
  return (
    <section id="lattice" className="border-t border-paper/10 bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="font-display text-xs tracking-[0.32em] text-gold uppercase">
          Lattice
        </p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">
          Same blood. Different rooms.
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-paper/70">
          The maisons in this book are two. The house is larger. If a door is
          missing, it is not lost. It is not public yet.
        </p>
        <ul className="mt-14 divide-y divide-paper/10 border-y border-paper/10">
          {sites.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="group flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8"
                target="_blank"
                rel="noreferrer"
              >
                <span className="min-w-0">
                  <span className="font-display text-2xl text-paper group-hover:text-gold md:text-3xl">
                    {s.name}
                  </span>
                  <span className="mt-2 block max-w-xl text-sm leading-relaxed text-paper/55">
                    {s.line}
                  </span>
                </span>
                <span className="flex shrink-0 flex-col md:items-end">
                  <span className="text-[11px] tracking-[0.22em] text-gold uppercase">
                    {s.role}
                  </span>
                  <span className="mt-1 font-mono text-[11px] tracking-wide text-muted">
                    {s.host}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-display text-sm text-muted italic">
          Outlier. The Uniting. Cherish. Rooms that do not need a street yet.
        </p>
      </div>
    </section>
  );
}

export function MaisonFooter() {
  return (
    <footer className="border-t border-paper/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="flex items-end gap-6">
          <div className="w-12">
            <PandaMark className="w-12" />
          </div>
          <div className="w-12 text-gold">
            <AssayMark className="text-gold" />
          </div>
        </div>
        <div className="text-sm">
          <p className="font-display tracking-[0.18em] text-muted uppercase">
            {house} · Victoria BC
          </p>
          <p className="mt-2 font-display text-paper/70 italic">{tagline}</p>
        </div>
      </div>
    </footer>
  );
}
