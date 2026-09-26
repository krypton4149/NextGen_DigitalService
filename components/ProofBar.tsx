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
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="agency-orb agency-orb-a absolute -left-10 top-0 size-[16rem] opacity-40" />
        <div className="agency-orb agency-orb-b absolute -right-8 bottom-0 size-[14rem] opacity-50" />
      </div>
      <div className="site-wrap relative">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              as="li"
              delayMs={index * 80}
              variant="scale"
              className="stat-pop"
            >
              <div className="border-white/10 py-10 pr-6 sm:py-12 lg:border-r lg:pr-8 lg:last:border-r-0 [&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r">
                <p className="display-title text-[clamp(2.2rem,4vw,3rem)] text-white">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-coral">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
