import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const INDUSTRIES = [
  "Retail",
  "Real Estate",
  "Travel",
  "Healthcare",
  "Education",
  "E-commerce",
  "Startups",
  "Media",
  "Hospitality",
  "Beauty",
  "Food",
  "Finance",
] as const;

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="site-wrap">
        <Reveal>
          <SectionLabel>Industries</SectionLabel>
          <h2 className="display-title mt-5 max-w-xl text-[clamp(2rem,4.2vw,3.3rem)] text-navy">
            Strategy that holds
            across sectors.
          </h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((name, index) => (
            <Reveal key={name} as="li" delayMs={Math.min(index * 40, 200)}>
              <article className="rounded-[1.2rem] border border-border bg-surface px-4 py-5 text-center transition duration-300 hover:-translate-y-0.5 hover:border-coral/40 hover:bg-white">
                <p className="font-display text-sm font-bold text-navy">{name}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
