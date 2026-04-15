import {
  Code2,
  Paintbrush,
  Play,
  Share2,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BrandIconGoogle, BrandIconGoogleSeo } from "@/components/icons/BrandMarks";

type BrandIcon = "google" | "google-seo" | null;

type ServiceItem = {
  id: string;
  wide: boolean;
  title: string;
  body: string;
  featured: boolean;
  icon?: LucideIcon;
  brandIcon?: BrandIcon;
  cta?: string;
};

const services: ServiceItem[] = [
  {
    id: "gmb",
    wide: true,
    brandIcon: "google",
    title: "Google Business Setup",
    body: "Put your business on the map. We optimize your local SEO and GMB presence for maximum visibility.",
    cta: "Maximize visibility",
    featured: false,
  },
  {
    id: "web",
    wide: false,
    icon: Code2,
    title: "Web Dev",
    body: "Modern, responsive websites built with high performance.",
    featured: false,
  },
  {
    id: "app",
    wide: false,
    icon: Smartphone,
    title: "App Dev",
    body: "Native & cross-platform mobile experiences.",
    featured: false,
  },
  {
    id: "seo",
    wide: false,
    brandIcon: "google-seo",
    title: "SEO",
    body: "Data-driven strategies to rank higher on search engines.",
    featured: false,
  },
  {
    id: "content",
    wide: true,
    title: "Content & Social Scaling",
    body: "YouTube channel setup, content strategy, and Social Media Management that drives engagement and brand loyalty.",
    featured: true,
  },
  {
    id: "logo",
    wide: false,
    icon: Paintbrush,
    title: "Logo Design",
    body: "Visual identity and banner designs.",
    featured: false,
  },
];

function ServiceIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-brand">
      <Icon className="size-6" strokeWidth={2} aria-hidden />
    </span>
  );
}

function ServiceBrandIcon({ variant }: { variant: Exclude<BrandIcon, null> }) {
  if (variant === "google") return <BrandIconGoogle />;
  return <BrandIconGoogleSeo />;
}

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="border-t border-slate-200/80 bg-[#f8f9fb] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Core Digital Ecosystem
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
          Strategic services designed to accelerate your digital growth.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2 md:items-stretch md:auto-rows-fr">
          {services.map((item) => {
            if (item.featured) {
              return (
                <div
                  key={item.id}
                  className="relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/60 bg-[#1e3a8a] p-7 text-white shadow-lg shadow-blue-950/20 sm:p-8 md:col-span-2"
                >
                  <div
                    className="pointer-events-none absolute -right-6 bottom-0 opacity-25"
                    aria-hidden
                  >
                    <svg
                      width="200"
                      height="100"
                      viewBox="0 0 200 100"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M0 80 L30 60 L55 75 L85 40 L110 65 L140 35 L170 55 L200 25"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="relative max-w-xl">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-blue-100">
                      {item.body}
                    </p>
                  </div>
                  <div className="relative mt-8 flex gap-3 md:mt-auto md:pt-8">
                    <button
                      type="button"
                      className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                      aria-label="Play reel"
                    >
                      <Play className="size-5 fill-current" aria-hidden />
                    </button>
                    <button
                      type="button"
                      className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                      aria-label="Share"
                    >
                      <Share2 className="size-5" aria-hidden />
                    </button>
                  </div>
                </div>
              );
            }

            const colClass = item.wide ? "md:col-span-2" : "md:col-span-1";

            return (
              <div
                key={item.id}
                className={`flex h-full min-h-[280px] flex-col rounded-2xl border border-slate-200/80 bg-white p-7 shadow-md shadow-slate-200/40 sm:p-8 ${colClass}`}
              >
                {item.brandIcon ? (
                  <ServiceBrandIcon variant={item.brandIcon} />
                ) : item.icon ? (
                  <ServiceIcon icon={item.icon} />
                ) : null}
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                {item.cta ? (
                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-1 pt-6 text-xs font-bold uppercase tracking-wide text-brand hover:text-blue-700"
                  >
                    {item.cta}
                    <span aria-hidden>→</span>
                  </Link>
                ) : (
                  <div className="mt-auto pt-6" aria-hidden />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
