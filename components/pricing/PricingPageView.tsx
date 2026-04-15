import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    id: "basic",
    name: "Basic",
    description: "The essentials to get your local business online today.",
    price: 3000,
    highlighted: false,
    badge: null as string | null,
    features: [
      "Google Business setup",
      "Professional email (5 seats)",
      "Local directory sync",
      "Maintenance support — Pricing soon",
    ],
    cta: "Get basic",
    ctaVariant: "outline" as const,
  },
  {
    id: "standard",
    name: "Standard",
    description: "A powerful digital ecosystem for rapidly growing brands.",
    price: 11000,
    highlighted: true,
    badge: "Most recommended",
    features: [
      "Responsive website design",
      "Advanced SEO optimization",
      "Social media management",
      "Weekly performance sync",
      "Maintenance support — Pricing soon",
    ],
    cta: "Upgrade to standard",
    ctaVariant: "solid" as const,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Market dominance through full-scale transformation.",
    price: 32999,
    highlighted: false,
    badge: null,
    features: [
      "Web + mobile app bundle",
      "Dedicated growth manager",
      "Full brand identity pack",
      "24/7 priority concierge",
      "Maintenance support — Pricing soon",
    ],
    cta: "Go premium",
    ctaVariant: "outline" as const,
  },
] as const;

const comparisonRows = [
  {
    capability: "Website development",
    basic: "Landing page",
    standard: "Full CMS website",
    premium: "Web + app sync",
  },
  {
    capability: "Custom branding",
    basic: "Logo only",
    standard: "Full visual identity",
    premium: "Full 360° brand",
  },
  {
    capability: "SEO & content",
    basic: "Basic setup",
    standard: "Advanced monthly",
    premium: "Content production",
  },
  {
    capability: "Ad budget management",
    basic: "N/A",
    standard: "₹15,000 managed",
    premium: "₹65,000 managed",
  },
  {
    capability: "Support response",
    basic: "48 hours",
    standard: "12 hours",
    premium: "Instant priority",
  },
  {
    capability: "Maintenance support",
    basic: "Pricing soon",
    standard: "Pricing soon",
    premium: "Pricing soon",
  },
] as const;

function formatInr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function PricingPageView() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Scalable solutions for India
          </p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Pricing for the{" "}
            <span className="text-brand italic">Next Generation</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Transparent one-time tiers designed to help Indian businesses launch
            fast—from local presence to a full digital stack. No monthly lock-in on
            these core packages.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm sm:p-9 ${
                plan.highlighted
                  ? "border-brand bg-brand text-white shadow-xl shadow-brand/25 lg:-mt-2 lg:scale-[1.02]"
                  : "border-slate-200/90 bg-white"
              }`}
            >
              {plan.badge ? (
                <p
                  className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider ${
                    plan.highlighted
                      ? "bg-white/15 text-white ring-1 ring-white/25"
                      : "bg-brand/10 text-brand"
                  }`}
                >
                  {plan.badge}
                </p>
              ) : null}
              <h2
                className={`text-xl font-bold sm:text-2xl ${
                  plan.highlighted ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h2>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  plan.highlighted ? "text-blue-100" : "text-muted"
                }`}
              >
                {plan.description}
              </p>
              <div className="mt-8">
                <p
                  className={`text-3xl font-bold tracking-tight sm:text-4xl ${
                    plan.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {formatInr(plan.price)}
                </p>
                <p
                  className={`mt-1 text-xs font-semibold uppercase tracking-wider ${
                    plan.highlighted ? "text-blue-200" : "text-muted"
                  }`}
                >
                  One-time
                </p>
              </div>
              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-snug">
                    <Check
                      className={`mt-0.5 size-5 shrink-0 ${
                        plan.highlighted ? "text-white" : "text-brand"
                      }`}
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className={plan.highlighted ? "text-blue-50" : "text-slate-700"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide transition ${
                  plan.ctaVariant === "solid"
                    ? "bg-white text-brand shadow-md hover:bg-blue-50"
                    : plan.highlighted
                      ? "border-2 border-white/80 text-white hover:bg-white/10"
                      : "border-2 border-slate-200 text-brand hover:border-brand/40 hover:bg-slate-50"
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Full capability comparison
        </h2>
        <div className="mx-auto mt-3 h-px max-w-xs bg-brand/30" />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200/90 shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/90">
                <th className="px-4 py-4 font-bold text-slate-900 sm:px-6">
                  Core capability
                </th>
                <th className="px-4 py-4 font-bold text-slate-900 sm:px-6">Basic</th>
                <th className="bg-sky-50/90 px-4 py-4 font-bold text-brand sm:px-6">
                  Standard
                </th>
                <th className="px-4 py-4 font-bold text-slate-900 sm:px-6">Premium</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.capability}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-4 py-4 font-medium text-slate-800 sm:px-6">
                    {row.capability}
                  </td>
                  <td className="px-4 py-4 text-muted sm:px-6">{row.basic}</td>
                  <td className="bg-sky-50/50 px-4 py-4 text-slate-800 sm:px-6">
                    {row.standard}
                  </td>
                  <td className="px-4 py-4 text-muted sm:px-6">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-slate-50/80 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Need a custom enterprise plan?
            </h2>
            <p className="mt-4 text-muted">
              Book a short discovery call—we&apos;ll map scope, timelines, and a
              proposal that fits how your team works.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-brand/30 transition hover:brightness-110"
            >
              Book discovery call
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200 shadow-lg">
            <div className="relative aspect-[4/3] w-full sm:aspect-[5/3]">
              <Image
                src="/images/about-team.jpg"
                alt="Team collaborating on digital strategy"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/95 p-5 shadow-lg backdrop-blur sm:bottom-8 sm:left-8 sm:right-8 sm:p-6">
              <p className="text-lg font-bold text-slate-900 sm:text-xl">
                Join 150+ businesses
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Scaling faster with NextGen&apos;s digital ecosystem—websites, local
                SEO, and brand systems built for growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
