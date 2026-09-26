import Image from "next/image";
import { AnimatedWord } from "./AnimatedWord";
import { Button } from "./Button";

const pillars = ["Marketing", "Advertising", "Events"] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[min(90vh,54rem)] overflow-hidden bg-navy text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="agency-orb agency-orb-a absolute -left-20 top-8 size-[24rem] sm:size-[30rem]" />
        <div className="agency-orb agency-orb-b absolute -right-16 bottom-0 size-[22rem] sm:size-[28rem]" />
        <div className="hero-grid absolute inset-0 opacity-[0.07]" />
      </div>

      <div className="site-wrap relative grid min-h-[min(90vh,54rem)] items-center gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="lg:col-span-7">
          <p className="eyebrow hero-enter text-coral" style={{ animationDelay: "80ms" }}>
            Shikohabad Creative Co.
          </p>
          <p
            className="hero-enter mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.78rem] font-medium tracking-[0.14em] uppercase text-white/55"
            style={{ animationDelay: "180ms" }}
          >
            {pillars.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-3">
                {i > 0 ? (
                  <span
                    className="pulse-dot size-1.5 rounded-full bg-coral"
                    aria-hidden
                  />
                ) : null}
                {item}
              </span>
            ))}
          </p>
          <h1
            className="hero-enter display-title mt-6 text-[clamp(2.9rem,7vw,5.6rem)]"
            style={{ animationDelay: "280ms" }}
          >
            We make brands
            <br />
            people{" "}
            <span className="text-coral">
              <AnimatedWord
                words={["notice.", "talk about.", "show up for.", "remember."]}
              />
            </span>
          </h1>
          <p
            className="hero-enter mt-7 max-w-lg text-[1.05rem] leading-[1.7] text-white/68"
            style={{ animationDelay: "420ms" }}
          >
            Marketing, advertising and event management under one studio —
            campaigns that sell, creatives that stick, and events people feel.
          </p>
          <div
            className="hero-enter mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "540ms" }}
          >
            <Button href="/contact">Start a project</Button>
            <Button href="/work" variant="secondary" arrow={false}>
              See the work
            </Button>
          </div>
        </div>

        <div
          className="hero-enter-scale lg:col-span-5"
          style={{ animationDelay: "400ms" }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:ml-auto lg:max-w-none">
            <div className="pointer-events-none absolute inset-8 rounded-full bg-coral/20 blur-3xl" aria-hidden />
            <div className="float-slow absolute inset-0">
              <Image
                src="/images/Hero.png"
                alt="Shikohabad Creative Co. — marketing, advertising and events"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-contain object-center drop-shadow-[0_36px_70px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center" aria-hidden>
        <div className="scroll-cue flex flex-col items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/40">
          <span>Scroll</span>
          <span className="scroll-cue-line" />
        </div>
      </div>
    </section>
  );
}
