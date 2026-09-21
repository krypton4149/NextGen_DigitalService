import Link from "next/link";
import { HOME_SERVICES } from "@/lib/homeServices";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";

export function ServicesPageView() {
  return (
    <div>
      <PageHero
        label="Services"
        title={
          <>
            Capabilities for brands that want to be seen.
          </>
        }
        body="End-to-end digital work — from identity to performance. One studio, fourteen practices, a single brief."
        cta={{ href: "/contact", label: "Start a project" }}
      />

      <section className="py-16 sm:py-20">
        <div className="site-wrap">
          <ul className="grid gap-4 sm:grid-cols-2">
            {HOME_SERVICES.map((service, index) => (
              <Reveal key={service.num} as="li" delayMs={Math.min(index * 35, 180)}>
                <Link
                  href="/contact"
                  className="group flex h-full flex-col rounded-[1.4rem] border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_22px_50px_-28px_rgba(255,90,60,0.5)]"
                >
                  <span className="text-xs font-bold tracking-[0.16em] text-coral">
                    {service.num}
                  </span>
                  <h2 className="mt-4 font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <span className="mt-6 font-semibold text-coral">Start a brief →</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
