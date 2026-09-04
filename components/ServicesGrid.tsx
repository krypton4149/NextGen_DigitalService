import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
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
import { Button } from "@/components/Button";

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

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-border bg-white"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 md:grid-cols-12 md:gap-10 md:px-8 lg:gap-16 lg:pt-24">
        <div className="md:sticky md:top-[calc(var(--site-header-height)+1.25rem)] md:col-span-5 md:self-start">
          <p className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-coral" aria-hidden />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Our Services
            </span>
          </p>

          <h2 className="mt-6 max-w-md font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-navy">
            Scaling Your
            <br />
            <span className="text-accent">Digital Impact</span>
          </h2>

          <span className="mt-5 block h-1 w-14 bg-navy" aria-hidden />

          <p className="mt-8 max-w-sm text-[0.95rem] leading-[1.75] text-muted sm:text-base">
            Scroll the collection. Each service stacks as you go — when every
            card is in place, the page continues.
          </p>

          <div className="mt-8">
            <Button href="/services" className="shadow-[0_12px_28px_-12px_rgba(11,19,43,0.45)]">
              Full service list
            </Button>
          </div>
        </div>

        <ul className="flex flex-col gap-3 md:col-span-7">
          {HOME_SERVICES.map((service, index) => {
            const Icon = icons[service.icon];

            return (
              <li
                key={service.num}
                className="service-stack-card"
                style={{
                  zIndex: index + 1,
                  ["--stack-i" as string]: index,
                }}
              >
                <Link
                  href={service.href}
                  className="group relative flex min-h-[7.25rem] items-center gap-4 rounded-[1.75rem] border border-black/[0.04] bg-[#F6F6F6] px-4 py-5 shadow-[0_10px_30px_-18px_rgba(11,19,43,0.35)] outline-none transition duration-300 hover:bg-[#efefef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral sm:min-h-[8rem] sm:gap-5 sm:px-6 sm:py-6"
                >
                  <span
                    className="pointer-events-none absolute right-16 top-2 font-display text-5xl font-extrabold text-navy/[0.08] sm:right-[4.5rem] sm:text-6xl"
                    aria-hidden
                  >
                    {service.num}
                  </span>

                  <span
                    className={`relative z-[1] flex size-12 shrink-0 items-center justify-center rounded-xl sm:size-[3.35rem] ${service.iconClass}`}
                  >
                    <Icon className="size-5 sm:size-6" strokeWidth={1.75} aria-hidden />
                  </span>

                  <div className="relative z-[1] min-w-0 flex-1 pr-2">
                    <h3 className="font-display text-sm font-bold uppercase tracking-tight text-navy sm:text-[1.05rem]">
                      {service.title}
                    </h3>
                    <p className="mt-1 max-w-md text-[0.8rem] leading-relaxed text-muted sm:text-[0.9rem]">
                      {service.summary}
                    </p>
                  </div>

                  <span className="relative z-[1] flex size-10 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-[0_8px_18px_-10px_rgba(11,19,43,0.55)] transition duration-300 group-hover:bg-coral sm:size-11">
                    <ArrowUpRight className="size-4" strokeWidth={2.25} aria-hidden />
                    <span className="sr-only">Open {service.title}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
