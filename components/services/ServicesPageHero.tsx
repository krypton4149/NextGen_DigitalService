export function ServicesPageHero() {
  return (
    <section className="relative overflow-hidden bg-brand pb-20 pt-16 text-white sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 size-[min(90vw,28rem)] -translate-y-1/2 rounded-full border border-white/15 sm:-right-16 sm:size-[min(70vw,32rem)] lg:right-0 lg:size-[36rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-8 top-1/4 size-[min(75vw,22rem)] rounded-full border border-white/10 sm:right-[8%] sm:size-[26rem] lg:right-[12%] lg:size-[30rem]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 ring-1 ring-white/20">
          <span className="size-1.5 rounded-full bg-white/90" aria-hidden />
          Our capabilities
        </p>
        <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.08]">
          Comprehensive Digital Architecture.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100/95 sm:text-lg">
          We don&apos;t just build websites. We engineer entire digital ecosystems
          designed to accelerate growth and establish market authority for small
          businesses.
        </p>
      </div>
    </section>
  );
}
