import Link from "next/link";
import { HOME_SERVICES } from "@/lib/homeServices";
import { BrandCta } from "@/components/BrandCta";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { SectionLabel } from "@/components/SectionLabel";

const groups = [
  {
    label: "Marketing",
    hint: "Be discovered. Stay consistent.",
  },
  {
    label: "Advertising",
    hint: "Creatives that convert attention.",
  },
  {
    label: "Events",
    hint: "Moments people show up for.",
  },
] as const;

export function ServicesPageView() {
  return (
    <div>
      <PageHero
        label="Services"
        tone="navy"
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

      <div className="color-band" aria-hidden>
        <span />
        <span />
        <span />
      </div>

      <section className="border-b border-border bg-surface py-12 sm:py-14">
        <div className="site-wrap grid gap-4 sm:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.label} delayMs={i * 70}>
              <div className="border-l-2 border-coral bg-white px-5 py-5">
                <p className="eyebrow">{group.label}</p>
                <p className="mt-2 font-display text-xl tracking-tight text-navy">
                  {group.hint}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-background py-16 sm:py-20">
        <div className="site-wrap">
          <Reveal>
            <SectionLabel>Full menu</SectionLabel>
            <h2 className="display-title mt-4 max-w-xl text-[clamp(1.8rem,3.4vw,2.6rem)] text-navy">
              Pick a craft. Start a brief.
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {HOME_SERVICES.map((service, index) => (
              <Reveal key={service.num} as="li" delayMs={Math.min(index * 40, 200)}>
                <Link
                  href="/contact"
                  className="hover-lift group flex h-full flex-col border border-border bg-white p-7 sm:p-8"
                >
                  <span className="eyebrow">{service.num}</span>
                  <h2 className="display-title mt-5 text-[clamp(1.45rem,2.4vw,1.85rem)] text-navy transition group-hover:text-coral">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <span className="link-arrow mt-6 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-navy group-hover:text-coral">
                    Start a brief <span aria-hidden>→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <BrandCta
        label="Ready"
        title={
          <>
            One brief.
            <br />
            Three crafts. Go.
          </>
        }
        body="Tell us what you need — marketing, ads or events — and we'll map the next step."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/work", label: "See the work" }}
        tone="coral"
      />
    </div>
  );
}
