const SERVICES = [
  "Branding",
  "Websites",
  "App Development",
  "Video Editing",
  "Digital Marketing",
  "Social Media",
  "SEO",
  "Meta Ads",
  "UI/UX",
  "Events",
] as const;

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden py-3.5">
      <div className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="flex items-center gap-7 px-4 font-display text-xl font-bold uppercase tracking-[0.04em] text-navy sm:gap-9 sm:text-2xl"
            aria-hidden={copy === 1}
          >
            {SERVICES.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center gap-7 sm:gap-9">
                <span className="whitespace-nowrap">{item}</span>
                <span className="size-2 shrink-0 rounded-full bg-coral" aria-hidden />
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ServicesTicker() {
  return (
    <section className="ticker-strips border-y border-border bg-surface" aria-label="Services">
      <p className="sr-only">{SERVICES.join(", ")}</p>
      <TickerRow />
      <div className="border-t border-border">
        <TickerRow reverse />
      </div>
    </section>
  );
}
