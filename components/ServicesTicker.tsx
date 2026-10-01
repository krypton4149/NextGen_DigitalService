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
            className="flex items-center gap-7 px-4 text-[0.92rem] font-medium text-white/75 sm:gap-9"
            aria-hidden={copy === 1}
          >
            {ITEMS.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-7 sm:gap-9"
              >
                <span className="whitespace-nowrap">{item}</span>
                <span className="text-coral" aria-hidden>
                  ✦
                </span>
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
      className="ticker-strips border-y border-white/10 bg-black/25"
      aria-label="What we do"
    >
      <p className="sr-only">{ITEMS.join(", ")}</p>
      <TickerRow />
    </section>
  );
}
