import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { TextReveal } from "./TextReveal";

const pillars = [
  {
    num: "01",
    title: "Marketing",
    body: "Strategy, social, content and brand systems that help businesses get discovered and stay consistent.",
    href: "/services",
    accent: "from-coral/20 to-transparent",
  },
  {
    num: "02",
    title: "Advertising",
    body: "Campaign creatives, promotions and paid presence built to turn attention into real business.",
    href: "/services",
    accent: "from-navy/10 to-transparent",
  },
  {
    num: "03",
    title: "Events",
    body: "Planning, branding, promotion and on-ground execution — moments people show up for and share.",
    href: "/events",
    accent: "from-coral/15 to-transparent",
  },
] as const;

export function PillarsSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        className="pointer-events-none absolute -right-20 top-10 size-64 rounded-full bg-coral/10 blur-3xl"
        aria-hidden
      />
      <div className="site-wrap py-20 lg:py-24">
        <Reveal variant="blur">
          <SectionLabel>What we are</SectionLabel>
          <h2 className="display-title mt-5 max-w-2xl text-[clamp(2.2rem,4.5vw,3.6rem)] text-navy">
            <TextReveal text="Three crafts." as="span" className="block" />
            <span className="text-coral">
              <TextReveal text="One studio." as="span" delayMs={180} />
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-[1rem] leading-[1.7] text-muted">
            Marketing agency. Advertising studio. Event management company —
            connected so your brand sounds the same online and on the ground.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.num}
              as="li"
              delayMs={index * 100}
              variant={index === 1 ? "scale" : index === 2 ? "right" : "left"}
            >
              <Link
                href={pillar.href}
                className="pillar-card group relative flex h-full flex-col overflow-hidden border border-border bg-surface p-7 sm:p-8"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                  aria-hidden
                />
                <span className="eyebrow relative">{pillar.num}</span>
                <h3 className="display-title relative mt-8 text-[clamp(1.9rem,3vw,2.4rem)] text-navy transition group-hover:text-coral">
                  {pillar.title}
                </h3>
                <p className="relative mt-4 flex-1 text-[0.95rem] leading-[1.7] text-muted">
                  {pillar.body}
                </p>
                <span className="link-arrow relative mt-8 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-navy group-hover:text-coral">
                  Explore <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
