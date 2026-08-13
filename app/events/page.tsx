import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CreativeMarquee } from "@/components/CreativeMarquee";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Event management, promotion and creative experiences by Shikohabad Creative Co. — planning, branding, social and on-ground execution in Shikohabad.",
};

const pillars = [
  {
    title: "Event planning",
    body: "Structure, flow and creative direction before the first guest arrives.",
  },
  {
    title: "Promotional creatives",
    body: "Teasers, posters and motion that make people want to be there.",
  },
  {
    title: "Event branding",
    body: "Stage, signage and visual systems that feel cohesive and premium.",
  },
  {
    title: "Social promotion",
    body: "Reels, stories and campaigns that build anticipation in the feed.",
  },
  {
    title: "On-ground execution",
    body: "Real-world presence — not just posts. We help moments land.",
  },
  {
    title: "Photo & video",
    body: "Coverage that extends the event long after the lights go down.",
  },
] as const;

export default function EventsPage() {
  return (
    <main>
      <section className="grain relative border-b border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
              Events & experiences
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              WE DON&apos;T JUST
              <br />
              PROMOTE EVENTS.
              <br />
              <span className="text-accent">WE CREATE EXPERIENCES.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted">
              Event management and promotion for brands that want energy people
              remember — and share.
            </p>
            <div className="mt-10">
              <Button href="/contact">Plan an event</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CreativeMarquee reverse />

      <section className="border-b border-border py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="relative min-h-[22rem] overflow-hidden border border-border lg:col-span-7 lg:min-h-[32rem]">
            <Image
              src="/images/work-events.jpg"
              alt="Experiential event atmosphere by Shikohabad Creative Co."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
          </Reveal>
          <div className="lg:col-span-5">
            <ul className="space-y-0 divide-y divide-border border-y border-border">
              {pillars.map((item, index) => (
                <Reveal key={item.title} as="li" delayMs={index * 50}>
                  <article className="py-6">
                    <h2 className="font-display text-xl font-bold uppercase tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Ready to put your
              <br />
              <span className="text-accent">event on the map?</span>
            </h2>
            <div className="mt-8">
              <Button href="/contact">Start a project</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
