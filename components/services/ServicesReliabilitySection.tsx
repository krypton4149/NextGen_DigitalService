import { Gauge, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function ServicesReliabilitySection() {
  return (
    <section className="border-t border-slate-200/80 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
            <Image
              src="/images/about-team.jpg"
              alt="Team members collaborating over plans in a modern office"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 right-4 z-10 max-w-[14rem] rounded-2xl border border-slate-200/90 bg-white p-5 shadow-lg shadow-slate-900/10 sm:right-6 sm:p-6">
            <p className="text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              98%
            </p>
            <p className="mt-2 text-xs font-medium leading-snug text-muted sm:text-sm">
              Client satisfaction rate for digital infrastructure deployments.
            </p>
          </div>
        </div>
        <div className="min-w-0">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Engineering Digital{" "}
            <span className="text-brand">Reliability.</span>
          </h2>
          <ul className="mt-10 space-y-10">
            <li className="flex gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand">
                <Gauge className="size-6" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  High-Velocity Delivery
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  We understand that small businesses need to move fast. Our
                  streamlined setup process gets your digital presence live in weeks,
                  not months.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-brand">
                <ShieldCheck className="size-6" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Enterprise-Grade Standards
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  Regardless of your company size, we apply the same security and
                  performance standards used by global tech giants to your
                  infrastructure.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
