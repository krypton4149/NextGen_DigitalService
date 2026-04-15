import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Google Business setup was a game-changer. Within weeks, we saw a 40% increase in store visits. NextGen truly understands local search.",
    name: "Rahul Sharma",
    role: "Retail store owner",
  },
  {
    quote:
      "Extremely happy with my new website. It's fast, looks premium, and most importantly, it converts visitors into clients.",
    name: "Anita Desai",
    role: "Consultant",
  },
  {
    quote:
      "The logo and social media banners they designed helped us rebrand our agency to look modern and trustworthy.",
    name: "Karan Patel",
    role: "Start-up founder",
  },
  {
    quote:
      "Our new hotel website and local SEO doubled direct bookings in one season. Pages load fast on mobile, and guests find us before the OTAs. NextGen nailed hospitality search.",
    name: "Priya Nambiar",
    role: "Hotel operations director",
  },
  {
    quote:
      "Their app and growth stack helped us capture leads in the field and doubled repeat orders. Dashboards are clear, and the team treated our business like their own.",
    name: "Arjun Mehta",
    role: "Business owner",
  },
  {
    quote:
      "Parents love our school app—fees, notices, and timetables in one place. Rollout cut front-desk calls and keeps our community informed instantly.",
    name: "Sneha Iyer",
    role: "School principal",
  },
] as const;

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
                <footer className="relative mt-8 border-t border-slate-200/60 pt-5">
                  <p className="font-bold text-brand-navy">{t.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    {t.role}
                  </p>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
