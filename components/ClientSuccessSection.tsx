import { Quote, Star, UtensilsCrossed, HeartPulse } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
  icon?: LucideIcon;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "NextGen built our WhatsApp bot and online presence. Table bookings and delivery inquiries are handled automatically—we answer faster and serve more guests every day.",
    name: "Maa Jaanki Restaurant",
    role: "Restaurant",
    initials: "MJ",
    gradient: "from-orange-400 to-red-500",
    icon: UtensilsCrossed,
  },
  {
    quote:
      "Our website and WhatsApp updates help patients book appointments and find us easily. NextGen made us visible locally and cut repetitive calls at the front desk.",
    name: "Lord Krishna Hospital",
    role: "Hospital & healthcare",
    initials: "LK",
    gradient: "from-emerald-400 to-teal-600",
    icon: HeartPulse,
  },
  {
    quote:
      "The logo and social media banners they designed helped us rebrand our agency to look modern and trustworthy.",
    name: "Karan Patel",
    role: "Start-up founder",
    initials: "KP",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    quote:
      "Our new hotel website and local SEO doubled direct bookings in one season. Pages load fast on mobile, and guests find us before the OTAs. NextGen nailed hospitality search.",
    name: "Priya Nambiar",
    role: "Hotel operations director",
    initials: "PN",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    quote:
      "Their app and growth stack helped us capture leads in the field and doubled repeat orders. Dashboards are clear, and the team treated our business like their own.",
    name: "Arjun Mehta",
    role: "Business owner",
    initials: "AM",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    quote:
      "Parents love our school app—fees, notices, and timetables in one place. Rollout cut front-desk calls and keeps our community informed instantly.",
    name: "Sneha Iyer",
    role: "School principal",
    initials: "SI",
    gradient: "from-pink-400 to-rose-500",
  },
];

export function ClientSuccessSection() {
  return (
    <section className="border-t border-slate-200/80 bg-[#f5f6fb] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Client Success
        </h2>
        <div
          className="mt-4 flex justify-center gap-1 text-brand"
          aria-label="5 out of 5 stars"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-6 fill-current" strokeWidth={0} />
          ))}
        </div>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <article className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-[#eef1f9]/90 p-8 shadow-sm sm:min-h-[300px]">
                <Quote
                  className="pointer-events-none absolute right-4 top-4 size-16 text-blue-200/90"
                  strokeWidth={1.25}
                  aria-hidden
                />
                <blockquote className="relative flex-1 text-sm italic leading-relaxed text-slate-700">
                  {t.quote}
                </blockquote>
                <footer className="relative mt-8 flex items-center gap-4 border-t border-slate-200/60 pt-5">
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white shadow-md ring-2 ring-white`}
                  >
                    {t.icon ? (
                      <t.icon className="size-5" strokeWidth={2} aria-hidden />
                    ) : (
                      t.initials
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-brand-navy">{t.name}</p>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                      {t.role}
                    </p>
                  </div>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
