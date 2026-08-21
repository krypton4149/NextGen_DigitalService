import Image from "next/image";
import { Rocket, Users } from "lucide-react";

export function AboutJourneyGrid() {
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 sm:gap-6 sm:px-6 md:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-border bg-white p-8 shadow-sm shadow-slate-200/40 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Our Journey
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Founded over five years ago, Shikohabad Creative Co. emerged from
              a simple observation: small businesses were being left behind in the
              rapid shift to digital-first commerce. We saw high-quality digital
              solutions were often priced out of reach or over-engineered for the
              needs of local entrepreneurs.
            </p>
            <p>
              Since then, we&apos;ve helped over 150 local businesses find their
              voice online, focusing on measurable results, human-centric design,
              and technical reliability.
            </p>
          </div>
        </article>
        <article className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-brand p-8 text-white shadow-lg shadow-brand/25 sm:min-h-[240px] sm:p-10">
          <Rocket
            className="size-10 shrink-0 opacity-95 sm:size-12"
            strokeWidth={1.5}
            aria-hidden
          />
          <div className="mt-8">
            <p className="text-4xl font-bold tracking-tight sm:text-5xl">150+</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Projects delivered
            </p>
          </div>
        </article>
        <article className="flex min-h-[220px] flex-col justify-between rounded-2xl bg-accent p-8 text-white shadow-lg shadow-accent/25 sm:min-h-[240px] sm:p-10">
          <Users
            className="size-10 shrink-0 opacity-95 sm:size-12"
            strokeWidth={1.5}
            aria-hidden
          />
          <div className="mt-8">
            <p className="text-4xl font-bold tracking-tight sm:text-5xl">98%</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Client retention
            </p>
          </div>
        </article>
        <div className="relative min-h-[240px] overflow-hidden rounded-2xl shadow-lg shadow-slate-900/15 ring-1 ring-slate-900/10 sm:min-h-[280px]">
          <Image
            src="/images/about-cityscape.jpg"
            alt="Office interior with city skyline through large windows at dusk"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
