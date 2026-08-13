import Image from "next/image";
import { Button } from "./Button";

export function Hero() {
  return (
    <section
      id="home"
      className="grain relative isolate overflow-hidden border-b border-border"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -left-24 top-10 size-[28rem] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute -right-20 bottom-0 size-[22rem] rounded-full bg-accent/5 blur-[90px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="relative z-10 lg:col-span-7">
          <p className="mb-6 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
            Local Roots. Creative Reach.
          </p>
          <h1 className="font-display text-[clamp(2.75rem,12vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.04em]">
            <span className="block text-foreground">
              <span className="[font-family:var(--font-hindi)]">शिको</span>
              HABAD
            </span>
            <span className="block text-accent">CREATIVE CO.</span>
          </h1>
          <p className="mt-8 max-w-xl font-display text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
            We make local brands{" "}
            <span className="text-accent">impossible to ignore.</span>
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Social media, branding, digital presence &amp; experiences designed
            to make your business stand out.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact">Start a project</Button>
            <Button href="/#work" variant="secondary" arrow={false}>
              View our work
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:ml-auto lg:mr-0">
            <div className="absolute -left-4 top-8 z-20 border border-border bg-surface px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted animate-float sm:-left-8">
              Based in Shikohabad
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
              <Image
                src="/images/hero-studio.jpg"
                alt="Creative studio workspace at Shikohabad Creative Co."
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
            </div>
            <p className="mt-6 font-display text-sm uppercase tracking-[0.22em] text-muted">
              Creative people who happen to do digital.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border overflow-hidden py-3">
        <div className="flex w-max marquee-track">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="flex items-center gap-6 px-4 font-display text-sm font-semibold uppercase tracking-[0.28em] text-muted"
            >
              {[
                "Social Media",
                "Branding",
                "Websites",
                "Events",
              ].map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-6">
                  <span>{item}</span>
                  <span className="text-accent" aria-hidden>
                    ✦
                  </span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
