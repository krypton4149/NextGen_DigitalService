import { Reveal } from "./Reveal";

const steps = [
  { num: "01", title: "Discover", body: "Understand the brand." },
  { num: "02", title: "Think", body: "Build the creative direction." },
  { num: "03", title: "Create", body: "Design, content and campaigns." },
  { num: "04", title: "Launch", body: "Put the work in front of people." },
  { num: "05", title: "Grow", body: "Measure, improve and scale." },
] as const;

export function ProcessSection() {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Process
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How we make
            <br />
            brands matter.
          </h2>
        </Reveal>

        <ol className="mt-14 flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {steps.map((step, index) => (
            <Reveal
              key={step.num}
              as="li"
              delayMs={index * 60}
              className="min-w-[14rem] shrink-0 rounded-3xl border border-border bg-surface p-6 lg:min-w-0"
            >
              <span className="font-display text-sm text-accent">{step.num}</span>
              <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
