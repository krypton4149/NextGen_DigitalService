import Image from "next/image";
import { AnimatedWord } from "./AnimatedWord";
import { Button } from "./Button";
import { HeroCursor } from "./HeroCursor";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-white lg:min-h-[min(92vh,56rem)]"
    >
      <HeroCursor />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="agency-orb agency-orb-a absolute -left-24 top-10 size-[28rem] opacity-80 sm:size-[36rem]" />
        <div className="agency-orb agency-orb-b absolute -right-20 bottom-0 size-[22rem] opacity-70 sm:size-[28rem]" />
      </div>

      <div className="site-wrap relative grid items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:min-h-[min(92vh,56rem)] lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-6">
          <p
            className="hero-enter inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-coral/35 bg-coral/10 px-3.5 py-1.5 text-[0.75rem] font-medium text-coral"
            style={{ animationDelay: "80ms" }}
          >
            <span aria-hidden>✦</span>
            Build campaigns in one studio — no handoffs
          </p>
          <h1
            className="hero-enter mt-6 font-display text-[2.45rem] font-extrabold leading-[1.08] tracking-[-0.045em] sm:mt-7 sm:text-[clamp(3.1rem,6.4vw,5.5rem)] sm:leading-[1.36] sm:tracking-[-0.05em]"
            style={{ animationDelay: "180ms" }}
          >
            A studio that
            <br />
            performs
            <br />
            for{" "}
            <span
              className="inline-block bg-coral text-white shadow-[0_16px_40px_-18px_rgba(255,61,110,0.9)]"
              style={{
                borderRadius: "0.16em",
                lineHeight: 1,
                padding: "0.26em 0.18em",
              }}
            >
              <AnimatedWord
                words={["brands.", "people.", "events.", "growth."]}
              />
            </span>
          </h1>
          <p
            className="hero-enter mt-7 max-w-md text-[1.02rem] leading-[1.7] text-white/62"
            style={{ animationDelay: "320ms" }}
          >
            Pick a direction, fill in the brief, and publish work you&apos;ll be
            proud to share. Marketing, advertising and events — beautiful, fast,
            and entirely yours.
          </p>
          <div
            className="hero-enter mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "440ms" }}
          >
            <Button href="/contact">Start building</Button>
            <Button href="/work" variant="secondary" arrow={false}>
              See the work
            </Button>
          </div>
        </div>

        <div
          className="hero-enter-scale lg:col-span-6"
          style={{ animationDelay: "280ms" }}
        >
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-coral/20 blur-3xl"
              aria-hidden
            />
            <div className="float-slow relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#160910]/80 shadow-[0_40px_90px_-36px_rgba(0,0,0,0.85)]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-1.5" aria-hidden>
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                </div>
                <p className="text-[0.68rem] font-medium tracking-wide text-white/55">
                  shikohabad.studio
                </p>
                <span className="rounded-full border border-coral/40 bg-coral/15 px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-coral">
                  Live
                </span>
              </div>
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/Hero.png"
                  alt="Shikohabad Creative Co. — marketing, advertising and events"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 46vw"
                  className="object-contain object-center p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
