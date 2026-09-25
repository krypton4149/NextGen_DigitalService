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
      <div className="site-wrap py-24 lg:py-28">
        <Reveal>
          <SectionLabel>Method</SectionLabel>
          <h2 className="display-title mt-6 max-w-xl text-[clamp(2.4rem,4.5vw,3.8rem)] text-navy">
            How we work.
          </h2>
        </Reveal>

        <ol className="mt-16">
          {steps.map((step, index) => (
            <Reveal key={step.num} as="li" delayMs={index * 50}>
              <div className="grid gap-2 border-t border-border py-8 last:border-b sm:grid-cols-12 sm:items-baseline sm:gap-8 sm:py-9">
                <span className="eyebrow sm:col-span-1">{step.num}</span>
                <h3 className="display-title text-2xl text-navy sm:col-span-3 sm:text-3xl">
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
