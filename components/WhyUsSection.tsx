import { Reveal } from "./Reveal";

const points = [
  {
    title: "Local understanding",
    body: "We understand the people, businesses and culture around us.",
  },
  {
    title: "Creative thinking",
    body: "We don't believe in copy-paste marketing.",
  },
  {
    title: "Full-service",
    body: "From idea to execution, we handle the creative journey.",
  },
  {
    title: "Real-world execution",
    body: "Digital campaigns, content, promotions and physical events.",
  },
] as const;

export function WhyUsSection() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Why us
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Why Shikohabad
            <br />
            Creative Co.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <Reveal key={point.title} as="li" delayMs={index * 70}>
              <article className="flex h-full flex-col bg-background p-8 transition hover:bg-surface">
                <span className="font-display text-sm text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {point.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
