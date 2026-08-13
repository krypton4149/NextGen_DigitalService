import Image from "next/image";
import Link from "next/link";
import { CORE_SERVICES } from "@/lib/services";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function ServicesPageView() {
  return (
    <div>
      {/* Intro */}
      <section className="border-b border-border px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
              What we do · Services / 01—04
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              We build brands
              <br />
              people <span className="text-accent">notice.</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Strategy, design, digital presence and real-world experiences —
              focused on the four things we do best.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service list */}
      <section className="border-b border-border">
        <ul className="mx-auto max-w-6xl divide-y divide-border px-4 sm:px-6 lg:px-8">
          {CORE_SERVICES.map((service, index) => (
            <Reveal key={service.num} as="li" delayMs={index * 50}>
              <article className="grid gap-8 py-12 sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-16">
                <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface lg:col-span-5">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="lg:col-span-7">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tracking-[0.18em] text-accent">
                      {service.num}
                    </span>
                    <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted">
                      Service
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-[2.15rem] lg:leading-snug">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {service.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-border px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="group mt-7 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent transition hover:text-foreground"
                  >
                    Explore service
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Process strip */}
      <section className="border-b border-border bg-surface px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
          <span>Strategy</span>
          <span className="text-accent" aria-hidden>
            →
          </span>
          <span>Creative</span>
          <span className="text-accent" aria-hidden>
            →
          </span>
          <span>Digital</span>
          <span className="text-accent" aria-hidden>
            →
          </span>
          <span>Experience</span>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="max-w-xl font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Have a brand that deserves
              <br />
              <span className="text-accent">more attention?</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted sm:text-base">
              Let&apos;s turn your idea into something people remember.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
    </div>
  );
}
