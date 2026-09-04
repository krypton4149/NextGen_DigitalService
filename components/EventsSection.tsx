import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

const pillars = [
  "Event planning",
  "Promotional creatives",
  "Event branding",
  "Social media promotion",
  "On-ground execution",
  "Photography / video",
] as const;

export function EventsSection() {
  return (
    <section id="events" className="scroll-mt-24 border-b border-border bg-surface py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
              Events & experiences
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[0.92] tracking-tight sm:text-5xl">
              WE DON&apos;T JUST
              <br />
              PROMOTE EVENTS.
              <br />
              <span className="text-accent">WE CREATE EXPERIENCES.</span>
            </h2>
          </Reveal>
          <Reveal delayMs={100} className="md:col-span-5">
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              From first teaser to final cut — we shape the energy around your
              event so people show up, feel something, and share it.
            </p>
            <Link
              href="/events"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent transition hover:text-primary"
            >
              Explore events
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-7 lg:col-span-8">
            <div className="img-frame min-h-[14rem] md:min-h-[16rem] lg:min-h-[18rem]">
              <Image
                src="/images/work-events.jpg"
                alt="Event atmosphere created and promoted by Shikohabad Creative Co."
                fill
                className="img-zoom object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <p className="img-stamp">Show up.</p>
            </div>
          </Reveal>
          <Reveal delayMs={100} className="rounded-2xl border border-border bg-background p-5 md:col-span-5 lg:col-span-4">
            <ul className="space-y-3">
              {pillars.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-border pb-2.5 last:border-0 last:pb-0"
                >
                  <span className="font-display text-xs text-accent">0{i + 1}</span>
                  <span className="font-display text-base font-semibold tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
