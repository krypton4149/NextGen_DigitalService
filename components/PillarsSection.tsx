import { Megaphone, PenLine, Rocket } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { TextReveal } from "./TextReveal";

const pillars = [
  {
    num: "1",
    title: "Marketing",
    body: "Strategy, social, content and brand systems that help businesses get discovered and stay consistent.",
    href: "/services",
    icon: Megaphone,
  },
  {
    num: "2",
    title: "Advertising",
    body: "Campaign creatives, promotions and paid presence built to turn attention into real business.",
    href: "/services",
    icon: PenLine,
  },
  {
    num: "3",
    title: "Events",
    body: "Planning, branding, promotion and on-ground execution — moments people show up for and share.",
    href: "/events",
    icon: Rocket,
  },
] as const;

export function PillarsSection() {
  return (
    <section className="relative overflow-x-clip border-b border-border bg-background">
      <div
        className="pointer-events-none absolute -right-20 top-10 size-64 rounded-full bg-coral/10 blur-3xl"
        aria-hidden
      />
      <div className="site-wrap py-20 lg:py-24">
        <Reveal variant="blur">
          <SectionLabel>What we are</SectionLabel>
          <h2 className="display-title mt-5 max-w-2xl text-[clamp(2.2rem,4.5vw,3.6rem)] text-foreground">
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

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal
                key={pillar.num}
                as="li"
                delayMs={index * 100}
                variant={index === 1 ? "scale" : index === 2 ? "right" : "left"}
              >
                <GlowCard
                  href={pillar.href}
                  num={pillar.num}
                  title={pillar.title}
                  body={pillar.body}
                  icon={<Icon className="size-5" strokeWidth={1.75} aria-hidden />}
                />
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
