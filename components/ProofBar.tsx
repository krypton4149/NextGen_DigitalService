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
            <li
              key={stat.label}
              className="flex border-white/10 max-lg:[&:nth-child(-n+2)]:border-b max-lg:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
            >
              <Reveal
                delayMs={index * 80}
                variant="scale"
                className="stat-pop flex w-full flex-col items-center justify-center px-4 py-12 text-center sm:py-16"
              >
                <p className="display-title text-[clamp(2.4rem,4vw,3.25rem)] text-white">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="mt-2 max-w-[9rem] text-balance text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.14em] text-coral sm:max-w-none sm:text-[0.68rem] sm:tracking-[0.22em]">
                  {stat.label}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
