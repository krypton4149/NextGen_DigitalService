const items = [
  "We create.",
  "We design.",
  "We promote.",
  "We make brands matter.",
] as const;

export function CreativeMarquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <section
      className="overflow-hidden border-y border-navy bg-navy py-5 text-white"
      aria-label="Creative statement"
    >
      <div
        className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="flex items-center gap-8 px-4 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl md:text-4xl"
          >
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center gap-8">
                <span>{item}</span>
                <span className="text-coral" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
