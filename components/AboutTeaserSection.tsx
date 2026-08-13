import Link from "next/link";
import { Reveal } from "./Reveal";

export function AboutTeaserSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
            About the studio
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Not just another
            <br />
            digital agency.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Shikohabad Creative Co. helps businesses turn attention into
            connection — through social media, branding, websites and events
            made to be noticed.
          </p>
          <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground">
            Based in Shikohabad, Uttar Pradesh.
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent transition hover:text-foreground"
          >
            More about us →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
