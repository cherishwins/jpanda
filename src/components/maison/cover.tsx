export function Cover() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <img
        src="/brand/moon-wide.jpg"
        alt="Moon and beam. The die is already in the air."
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink from-0% via-ink/55 via-[38%] to-transparent" />
      <p className="absolute top-24 right-5 font-display text-xl text-paper/85 italic md:top-28 md:right-10 md:text-2xl">
        alea iacta est.
      </p>
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 md:px-8 md:pb-24">
        <p className="stagger-item font-display text-sm tracking-[0.42em] text-gold uppercase">
          The house
        </p>
        <h1 className="stagger-item mt-3 font-display text-[18vw] leading-[0.8] font-medium tracking-[0.06em] text-paper md:text-8xl">
          JPANDA
        </h1>
        <p className="stagger-item mt-8 max-w-md text-[1.05rem] leading-relaxed text-paper/75">
          A private lookbook. Two maisons. A lattice of rooms. You do not
          need it. It functions like the expensive dream it is.
        </p>
        <a
          href="#houses"
          className="stagger-item mt-12 inline-flex size-11 items-center justify-center self-start text-gold"
          aria-label="Enter the houses"
        >
          <span className="block size-2 rotate-45 bg-gold" />
        </a>
      </div>
    </section>
  );
}
