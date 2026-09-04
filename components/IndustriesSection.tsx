import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Banknote,
  Building2,
  Car,
  CreditCard,
  Dumbbell,
  Factory,
  Gamepad2,
  Gavel,
  GraduationCap,
  Heart,
  KeyRound,
  Landmark,
  Megaphone,
  Plane,
  Rocket,
  ShoppingBag,
  Smartphone,
  Trophy,
  Truck,
  Tv,
  UtensilsCrossed,
} from "lucide-react";
import { Reveal } from "./Reveal";

const INDUSTRIES: { name: string; Icon: LucideIcon }[] = [
  { name: "Retail", Icon: ShoppingBag },
  { name: "Real Estate", Icon: Building2 },
  { name: "Travel & Tourism", Icon: Plane },
  { name: "Healthcare", Icon: Activity },
  { name: "Education", Icon: GraduationCap },
  { name: "E-commerce", Icon: CreditCard },
  { name: "Startups", Icon: Rocket },
  { name: "Media", Icon: Tv },
  { name: "Govt. & Public", Icon: Landmark },
  { name: "Nonprofits & NGOs", Icon: Heart },
  { name: "Logistics", Icon: Truck },
  { name: "Manufacturing", Icon: Factory },
  { name: "Finance", Icon: Banknote },
  { name: "On-demand", Icon: Smartphone },
  { name: "Automotive", Icon: Car },
  { name: "Gaming", Icon: Gamepad2 },
  { name: "Advertising", Icon: Megaphone },
  { name: "Food & Beverages", Icon: UtensilsCrossed },
  { name: "Legal Services", Icon: Gavel },
  { name: "Sports", Icon: Trophy },
  { name: "Fitness", Icon: Dumbbell },
  { name: "Rentals", Icon: KeyRound },
];

export function IndustriesSection() {
  return (
    <section className="border-b border-border bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-coral" aria-hidden />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Industries We Serve
            </span>
          </p>
          <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-navy">
            Strategic Impact
            <br />
            <span className="text-accent">Across All Sectors</span>
          </h2>
          <span className="mx-auto mt-5 block h-1 w-14 bg-navy" aria-hidden />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            We build social, branding, websites and events across industries —
            helping businesses get noticed, generate leads, and grow with work
            that stays consistent.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.name} as="li" delayMs={Math.min(index * 30, 240)}>
              <article className="group flex h-full flex-col items-center rounded-2xl border border-border bg-white px-3 py-6 text-center shadow-[0_8px_24px_-18px_rgba(11,19,43,0.28)] transition duration-300 hover:border-coral">
                <span className="flex size-12 items-center justify-center rounded-xl bg-surface text-navy transition duration-300 group-hover:bg-coral group-hover:text-white sm:size-14">
                  <industry.Icon className="size-6" strokeWidth={1.7} aria-hidden />
                </span>
                <p className="mt-4 font-display text-[0.68rem] font-bold uppercase leading-snug tracking-tight text-navy sm:text-[0.72rem]">
                  {industry.name}
                </p>
                <span
                  className="mt-3 h-0.5 w-8 rounded-full bg-coral opacity-0 transition duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
