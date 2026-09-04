import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Code2,
  Layers,
  Megaphone,
  Palette,
  PenLine,
  Search,
  Share2,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { HOME_SERVICES, type HomeService } from "@/lib/homeServices";
import { Reveal } from "@/components/Reveal";

const icons: Record<HomeService["icon"], LucideIcon> = {
  palette: Palette,
  code: Code2,
  phone: Smartphone,
  video: Video,
  zap: Zap,
  share: Share2,
  search: Search,
  users: Users,
  pen: PenLine,
  layers: Layers,
  megaphone: Megaphone,
  sparkles: Sparkles,
  target: Target,
  calendar: CalendarDays,
};

export function ServicesPageView() {
  return (
    <div>
      <section className="border-b border-border bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[90rem]">
          <Reveal className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-white px-3.5 py-1.5">
              <Sparkles className="size-3 text-coral" strokeWidth={2.2} aria-hidden />
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
                Our Expertise
              </span>
            </p>
            <h1 className="mt-6 font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-navy">
              Scaling Your
              <br />
              <span className="text-accent">Digital Impact</span>
            </h1>
            <span className="mx-auto mt-5 block h-1 w-14 bg-navy" aria-hidden />
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              We provide end-to-end digital solutions designed to help modern
              brands grow. From initial identity to full-scale performance
              marketing, we build the systems that drive success.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {HOME_SERVICES.map((service, index) => {
              const Icon = icons[service.icon];
              return (
                <Reveal key={service.num} as="li" delayMs={Math.min(index * 40, 200)}>
                  <Link
                    href="/contact"
                    className="group flex h-full items-start gap-4 rounded-[1.35rem] bg-[#F4F5F8] p-5 ring-1 ring-black/[0.04] outline-none transition duration-300 hover:-translate-y-0.5 hover:bg-navy hover:shadow-[0_20px_40px_-22px_rgba(11,19,43,0.5)] hover:ring-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:gap-5 sm:p-6"
                  >
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded-[0.8rem] sm:size-12 ${service.iconClass}`}
                    >
                      <Icon className="size-5 sm:size-[1.35rem]" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-base font-bold uppercase tracking-tight text-navy transition duration-300 group-hover:text-white sm:text-lg">
                        {service.title}
                      </h2>
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted transition duration-300 group-hover:text-white/75">
                        {service.summary}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-black/10 pt-3 transition duration-300 group-hover:border-white/20">
                        <span className="inline-flex items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-coral">
                          <BadgeCheck className="size-3.5" strokeWidth={2.2} aria-hidden />
                          Premium service
                        </span>
                        <span className="flex size-7 items-center justify-center rounded-full bg-white/15 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                          <ArrowRight className="size-3.5" strokeWidth={2.25} aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delayMs={80}>
            <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-coral px-7 py-8 shadow-[0_20px_50px_-24px_rgba(255,90,60,0.65)] sm:mt-12 sm:flex-row sm:items-center sm:px-10 sm:py-9">
              <div>
                <p className="font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-navy sm:text-2xl">
                  Ready to scale your brand?
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-navy/75">
                  Let&apos;s build a strategy that works for you.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-navy px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-soft-navy"
              >
                Start a project
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
