import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const pillars = [
  {
    num: "01",
    title: "Marketing",
    body: "Strategy, social, content and brand systems that help businesses get discovered and stay consistent.",
    href: "/services",
  },
  {
    num: "02",
    title: "Advertising",
    body: "Campaign creatives, promotions and paid presence built to turn attention into real business.",
    href: "/services",
  },
  {
    num: "03",
    title: "Events",
    body: "Planning, branding, promotion and on-ground execution — moments people show up for and share.",
    href: "/events",
  },
] as const;

export function PillarsSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="site-wrap py-20 lg:py-24">
        <Reveal>
          <SectionLabel>What we are</SectionLabel>
          <h2 className="display-title mt-5 max-w-2xl text-[clamp(2.2rem,4.5vw,3.6rem)] text-navy">
            Three crafts.
            <br />
            One studio.
          </h2>
          <p className="mt-5 max-w-xl text-[1rem] leading-[1.7] text-muted">
            Marketing agency. Advertising studio. Event management company —
            connected so your brand sounds the same online and on the ground.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.num} as="li" delayMs={index * 80}>
              <Link
                href={pillar.href}
                className="pillar-card group flex h-full flex-col border border-border bg-surface p-7 sm:p-8"
              >
                <span className="eyebrow">{pillar.num}</span>
                <h3 className="display-title mt-8 text-[clamp(1.9rem,3vw,2.4rem)] text-navy transition group-hover:text-coral">
                  {pillar.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.95rem] leading-[1.7] text-muted">
                  {pillar.body}
                </p>
                <span className="mt-8 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-navy transition group-hover:text-coral">
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
