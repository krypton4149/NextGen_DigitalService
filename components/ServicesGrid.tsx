import Link from "next/link";
import { HOME_SERVICES } from "@/lib/homeServices";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface">
      <div className="site-wrap py-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="display-title mt-5 max-w-xl text-[clamp(2rem,4.2vw,3.3rem)] text-navy">
              Full-service growth
              for modern brands.
            </h2>
          </div>
          <Button href="/services" variant="outline">
            All services
          </Button>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.slice(0, 6).map((service, index) => (
            <Reveal key={service.num} as="li" delayMs={Math.min(index * 70, 280)}>
              <Link
                href="/services"
                className="group flex h-full flex-col rounded-[1.4rem] border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_22px_50px_-28px_rgba(255,90,60,0.55)]"
              >
                <span className="text-xs font-bold tracking-[0.16em] text-coral">
                  {service.num}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-navy">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
                <span className="mt-6 text-sm font-semibold text-coral transition group-hover:translate-x-0.5">
                  Explore →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
