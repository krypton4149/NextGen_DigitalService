import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const steps = [
  { num: "01", title: "Listen", body: "Brand, audience, offer — we map what needs to move." },
  { num: "02", title: "Shape", body: "Strategy for marketing, ads and events before we produce." },
  { num: "03", title: "Make", body: "Creatives, content and experience design with polish." },
  { num: "04", title: "Release", body: "Launch online and on-ground where people actually show up." },
  { num: "05", title: "Refine", body: "Measure, tighten and keep the work performing." },
] as const;

export function ProcessSection() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="site-wrap py-20 lg:py-24">
        <Reveal>
          <SectionLabel>Method</SectionLabel>
          <h2 className="display-title mt-5 max-w-xl text-[clamp(2.2rem,4.5vw,3.6rem)] text-navy">
            How we
            <span className="text-coral"> work.</span>
          </h2>
        </Reveal>

        <ol className="mt-14">
          {steps.map((step, index) => (
            <Reveal key={step.num} as="li" delayMs={index * 60}>
              <div className="group grid gap-2 border-t border-border py-8 transition last:border-b hover:bg-coral/5 sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-9">
                <span className="eyebrow sm:col-span-1">{step.num}</span>
                <h3 className="display-title text-2xl text-navy transition group-hover:text-coral sm:col-span-3 sm:text-3xl">
                  {step.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-muted sm:col-span-8">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
