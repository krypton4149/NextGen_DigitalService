import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const steps = [
  { num: "01", title: "Discover", body: "Understand the brand, the audience, and the gap." },
  { num: "02", title: "Think", body: "Set the creative direction before a pixel is made." },
  { num: "03", title: "Create", body: "Design, content, campaigns and systems that hold." },
  { num: "04", title: "Launch", body: "Put the work in front of the right people." },
  { num: "05", title: "Grow", body: "Measure, refine, and scale what is already working." },
] as const;

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="site-wrap">
        <Reveal>
          <SectionLabel>Method</SectionLabel>
          <h2 className="display-title mt-5 text-[clamp(2rem,4.2vw,3.3rem)] text-navy">
            How the work gets made.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.num} as="li" delayMs={index * 80}>
              <article className="h-full rounded-[1.4rem] border border-border bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-coral/40 hover:bg-white">
                <span className="font-display text-sm font-bold text-coral">{step.num}</span>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
