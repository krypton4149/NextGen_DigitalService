import {
  Banknote,
  Clock3,
  ShieldCheck,
  User,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    body: "Optimized workflows for quick go-to-market execution.",
  },
  {
    icon: Banknote,
    title: "Affordable",
    body: "Premium digital quality tailored for growing budgets.",
  },
  {
    icon: Clock3,
    title: "3+ Years",
    body: "Experienced developers and designers at your service.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfaction",
    body: "Dedicated support until you're 100% happy with the result.",
  },
] as const;

function FeatureIcon({ icon: Icon }: { icon: (typeof features)[number]["icon"] }) {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-brand sm:size-12">
      <Icon className="size-5 sm:size-6" strokeWidth={2} aria-hidden />
    </span>
  );
}

export function EdgePhilosophySection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-200/80 bg-gradient-to-b from-slate-50/90 via-[#f7f8fb] to-slate-50/80 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="min-w-0">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
            The Edge Your
            <br />
            <span className="text-brand">Business Deserves</span>
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
            {features.map(({ icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <FeatureIcon icon={icon} />
                <div>
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-0">
          <div className="rounded-3xl border border-slate-200/80 bg-slate-100/95 p-8 shadow-sm shadow-slate-200/40 sm:p-10 lg:p-11">
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-md shadow-brand/25">
                <User className="size-7" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
                  NextGen Philosophy
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Digital first, always
                </p>
              </div>
            </div>
            <blockquote className="mt-8 text-base font-medium italic leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
              We don&apos;t just build websites; we build digital ecosystems that
              act as the silent salesperson for your brand, 24/7.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
