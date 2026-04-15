import { Check, CloudCog, Code2, Mail, Paintbrush, Play, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BrandIconGoogle, BrandIconGoogleSeo } from "@/components/icons/BrandMarks";

function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-brand">
      {children}
    </span>
  );
}

export function ServicesDetailBento() {
  return (
    <section className="border-t border-slate-200/80 bg-[#f4f4f9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <article className="flex h-full min-h-[300px] flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm lg:col-span-7">
            <BrandIconGoogle />
            <h2 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
              Google Business Profile Setup
            </h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
              Dominate local search results. We optimize your profile to ensure you
              appear in the &quot;Local 3-Pack,&quot; driving immediate foot traffic and
              phone calls from customers ready to buy.
            </p>
            <p className="mt-auto pt-8 text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Local dominance
            </p>
          </article>

          <article className="flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm lg:col-span-5">
            <div className="relative aspect-[16/10] w-full bg-slate-200">
              <Image
                src="/images/portfolio-business.jpg"
                alt="Laptop showing a modern business website layout"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Web Development
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                Custom, high-performance websites that convert visitors into loyal
                clients using the latest frameworks.
              </p>
            </div>
          </article>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <article className="flex h-full min-h-[280px] flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm lg:col-span-7">
            <IconTile>
              <CloudCog className="size-6" strokeWidth={2} aria-hidden />
            </IconTile>
            <h2 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
              SaaS platforms &amp; product delivery
            </h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
              We design and build subscription-ready software: secure multi-tenant
              architecture, payments and entitlements, admin dashboards, and DevOps
              pipelines so you can grow recurring revenue without reinventing the
              stack.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand transition hover:text-blue-700"
            >
              Discuss your SaaS
              <span aria-hidden>→</span>
            </Link>
          </article>
          <article className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-[#0f172a] to-brand-navy p-8 text-white shadow-lg shadow-slate-900/25 lg:col-span-5">
            <div
              className="pointer-events-none absolute -right-8 top-1/2 size-48 -translate-y-1/2 rounded-full bg-white/5 blur-2xl"
              aria-hidden
            />
            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/90">
              Ship faster
            </p>
            <p className="relative mt-4 text-lg font-semibold leading-snug">
              From MVP to scale-ready SaaS — one partner for product, cloud, and
              growth.
            </p>
            <CloudCog
              className="relative mt-8 size-16 text-white/25 sm:size-20"
              strokeWidth={1.25}
              aria-hidden
            />
          </article>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <article className="flex h-full min-h-[280px] flex-col rounded-2xl border border-slate-200/80 bg-slate-50/90 p-8 shadow-sm lg:col-span-5">
            <BrandIconGoogleSeo />
            <h2 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">
              Search Engine Optimization
            </h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
              Data-driven keyword strategies and technical audits to climb the
              rankings and maintain long-term organic visibility.
            </p>
          </article>

          <article className="flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm sm:flex-row lg:col-span-7">
            <div className="flex flex-1 flex-col p-8">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Logo &amp; Banner Design
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Establish a premium brand identity. We craft visual assets that
                communicate professionalism, trust, and your unique value proposition.
              </p>
            </div>
            <div className="flex min-h-[10rem] shrink-0 items-center justify-center bg-brand px-10 py-8 sm:w-[42%] sm:min-h-0 lg:w-[38%]">
              <Paintbrush
                className="size-14 text-white/95 sm:size-16"
                strokeWidth={1.5}
                aria-hidden
              />
            </div>
          </article>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          <article className="flex h-full min-h-[260px] flex-col rounded-2xl border border-slate-200/80 bg-slate-50/90 p-8 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">App Development</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Custom iOS and Android solutions that put your business directly into
              your customers&apos; pockets.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-800">
              <li className="flex items-center gap-2">
                <Check className="size-5 shrink-0 text-brand" aria-hidden />
                React Native &amp; Flutter
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-5 shrink-0 text-brand" aria-hidden />
                Seamless UX design
              </li>
            </ul>
          </article>

          <article className="flex h-full min-h-[260px] flex-col rounded-2xl border border-slate-200/80 bg-slate-50/90 p-8 shadow-sm">
            <IconTile>
              <Share2 className="size-6" strokeWidth={2} aria-hidden />
            </IconTile>
            <h2 className="mt-6 text-lg font-bold text-slate-900">Social Media Setup</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Complete brand synchronization across Instagram, LinkedIn, and Facebook
              to build a cohesive community presence.
            </p>
          </article>

          <article className="flex h-full min-h-[260px] flex-col rounded-2xl border border-slate-200/80 bg-slate-50/90 p-8 shadow-sm">
            <IconTile>
              <Play className="size-6 fill-current" strokeWidth={0} aria-hidden />
            </IconTile>
            <h2 className="mt-6 text-lg font-bold text-slate-900">
              YouTube Channel Setup
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Technical channel optimization and professional visual design to turn
              video content into a lead generation machine.
            </p>
          </article>
        </div>

        <article className="flex flex-col gap-6 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:p-10">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
            <Mail className="size-7" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Professional Work Email Setup
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              Transition from @gmail to @yourbusiness.com to instantly boost client
              trust.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center self-start rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-brand transition hover:border-brand/40 hover:bg-slate-50 sm:self-center"
          >
            Learn more
          </Link>
        </article>

        <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-[#1e3a8a] p-8 text-white shadow-lg shadow-blue-950/15 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-blue-100">
                <Code2 className="size-5 shrink-0" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Content &amp; growth
                </span>
              </div>
              <h2 className="mt-3 text-xl font-bold sm:text-2xl">
                Content &amp; Social Scaling
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
                YouTube channel setup, content strategy, and social media management
                that drives engagement and brand loyalty.
              </p>
            </div>
            <div className="flex gap-3 lg:shrink-0">
              <span
                className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur transition hover:bg-white/20"
                aria-hidden
              >
                <Play className="size-5 fill-current text-white" />
              </span>
              <span
                className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur transition hover:bg-white/20"
                aria-hidden
              >
                <Share2 className="size-5 text-white" />
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
