const ITEMS = [
  "Marketing",
  "Advertising",
  "Event Management",
  "Social Media",
  "Branding",
  "Campaigns",
  "Websites",
  "Promotions",
  "On-ground Events",
] as const;

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden py-3.5">
      <div
        className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="flex items-center gap-7 px-4 font-display text-2xl tracking-tight text-navy sm:gap-9 sm:text-3xl"
            aria-hidden={copy === 1}
          >
            {ITEMS.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-7 sm:gap-9"
              >
                <span className="whitespace-nowrap">{item}</span>
                <span className="size-1.5 shrink-0 rounded-full bg-coral" aria-hidden />
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
    <section
      className="ticker-strips border-y border-border bg-surface"
      aria-label="What we do"
    >
      <p className="sr-only">{ITEMS.join(", ")}</p>
      <TickerRow />
      <div className="border-t border-border">
        <TickerRow reverse />
      </div>
    </section>
  );
}
