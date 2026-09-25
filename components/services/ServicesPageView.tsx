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
            Marketing.
            <br />
            Advertising.
            <br />
            Events.
          </>
        }
        body="Everything we build sits under those three — social, branding, campaigns, websites and live experiences from one brief."
        cta={{ href: "/contact", label: "Start a project" }}
      />

      <section className="border-b border-border py-16 sm:py-20">
        <div className="site-wrap">
          <ul className="grid gap-0 sm:grid-cols-2">
            {HOME_SERVICES.map((service, index) => (
              <Reveal key={service.num} as="li" delayMs={Math.min(index * 35, 180)}>
                <Link
                  href="/contact"
                  className="group flex h-full flex-col border border-border bg-background p-7 transition duration-300 hover:border-coral/50 hover:bg-white sm:p-8"
                >
                  <span className="eyebrow">{service.num}</span>
                  <h2 className="display-title mt-5 text-[clamp(1.5rem,2.4vw,1.9rem)] text-navy transition group-hover:text-coral">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <span className="mt-6 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-navy transition group-hover:text-coral">
                    Start a brief →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
