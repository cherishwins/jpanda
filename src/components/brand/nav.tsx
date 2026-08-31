import { sections, house } from "@/lib/brand";
import { PandaMark } from "./marks";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 overflow-hidden border-b border-paper/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3 text-paper">
          <PandaMark className="size-10 shrink-0" label="JPanda mark" />
          <span className="font-display text-lg tracking-[0.18em] uppercase">
            {house}
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs tracking-[0.16em] text-muted uppercase hover:text-paper"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <button
          className="relative size-11 md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "absolute top-4 left-3 h-px w-5 bg-paper transition-transform duration-150",
              open && "translate-y-1.5 rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute top-6 left-3 h-px w-5 bg-paper transition-transform duration-150",
              open && "-translate-y-1.5 -rotate-45",
            )}
          />
        </button>
      </div>
      {open && (
        <div className="border-t border-paper/10 px-5 py-4 md:hidden">
          <p className="mb-3 font-display text-sm tracking-[0.2em] text-gold uppercase">
            {house}
          </p>
          <div className="flex flex-col">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-sm tracking-[0.12em] text-paper/80 uppercase"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
