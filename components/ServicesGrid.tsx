import Image from "next/image";
import Link from "next/link";
import { CORE_SERVICES } from "@/lib/services";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
                What we do
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
                We build brands
                <br />
                people <span className="text-accent">notice.</span>
              </h2>
            </div>
            <p className="max-w-xs font-display text-lg leading-snug text-muted sm:text-right">
              Social, branding, websites and events — four things, done with
              intent.
            </p>
          </div>
        </Reveal>

        <ul className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2">
          {CORE_SERVICES.map((service, index) => (
            <Reveal key={service.num} as="li" delayMs={index * 60} className="h-full">
              <Link
                href={service.href}
                data-cursor="hover"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface outline-none transition duration-300 hover:border-accent"
              >
                <div className="relative aspect-[16/10] w-full bg-[#0a0a0a]">
                  <Image
                    src={service.image}
                    alt={`${service.title} — Shikohabad Creative Co.`}
                    fill
                    className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-accent-ink">
                      {service.num}
                    </span>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted transition group-hover:text-accent">
                      Explore ↗
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold uppercase leading-tight tracking-tight sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border py-8">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
            Services / 01—04
          </p>
          <Link
            href="/services"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent transition hover:text-foreground"
          >
            View all services →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Have a brand that deserves
            <br />
            <span className="text-accent">more attention?</span>
          </h3>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact" className="px-6 py-3 text-[0.65rem]">
              Start a project
            </Button>
            <Button
              href="/work"
              variant="secondary"
              arrow={false}
              className="px-6 py-3 text-[0.65rem]"
            >
              View our work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
