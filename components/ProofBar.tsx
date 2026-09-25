import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

const stats = [
  { end: 5, suffix: "+", label: "Years" },
  { end: 150, suffix: "+", label: "Brands" },
  { end: PORTFOLIO_PROJECTS.length, suffix: "", label: "Selected clients" },
  { end: 3, suffix: "", label: "Pillars" },
] as const;

export function ProofBar() {
  return (
    <section className="border-b border-border">
      <div className="site-wrap">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} as="li" delayMs={index * 40}>
              <div className="border-border py-10 pr-6 sm:py-12 lg:border-r lg:pr-8 lg:last:border-r-0 [&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r">
                <p className="display-title text-[clamp(2.2rem,4vw,3rem)] text-navy">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="eyebrow mt-3">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
