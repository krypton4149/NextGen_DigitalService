import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function AboutTeaserSection() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8">
        <Reveal className="lg:col-span-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
            About the studio
          </p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Not just another
            <br />
            digital agency.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Shikohabad Creative Co. helps businesses turn attention into
            connection — through social media, branding, websites and events
            made to be noticed.
          </p>
          <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            Based in Shikohabad, Uttar Pradesh.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent transition hover:text-foreground"
          >
            More about us →
          </Link>
        </Reveal>

        <Reveal delayMs={90} className="lg:col-span-6">
          <div className="relative mx-auto aspect-[3/2] w-full max-w-lg lg:ml-auto lg:max-w-none">
            <Image
              src="/images/Studio.png"
              alt="Shikohabad Creative Co. studio — design, content and digital craft"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 90vw, 48vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
