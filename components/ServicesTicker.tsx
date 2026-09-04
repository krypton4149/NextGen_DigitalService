const SERVICES = [
  "Video Editing",
  "UI/UX Design",
  "Website Development",
  "App Development",
  "Performance Marketing",
  "Social Media Marketing",
  "Meta Ads",
  "SEO",
] as const;

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden bg-[#F4F4F4] py-3.5 sm:py-4">
      <div
        className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="flex items-center gap-8 px-4 font-display text-xl font-bold uppercase tracking-[0.06em] text-black sm:gap-10 sm:text-2xl md:text-[1.65rem]"
            aria-hidden={copy === 1}
          >
            {SERVICES.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-8 sm:gap-10"
              >
                <span className="whitespace-nowrap">{item}</span>
                <span
                  className="size-2 shrink-0 rounded-full bg-[#FFC107] sm:size-2.5"
                  aria-hidden
                />
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
    <section className="ticker-strips bg-white" aria-label="Services">
      <p className="sr-only">{SERVICES.join(", ")}</p>
      <div className="flex flex-col gap-2">
        <TickerRow />
        <TickerRow reverse />
      </div>
    </section>
  );
}
