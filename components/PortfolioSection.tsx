import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "School & learning campus",
    subtitle: "Brand refresh, site rebuild & SEO for admissions and parent engagement",
    image: "/images/portfolio-school.jpg",
    alt: "Child reading and learning at a desk with school supplies",
  },
  {
    title: "Boutique hotel group",
    subtitle: "Hospitality brand systems & local SEO for bookings and events",
    image: "/images/portfolio-hotel.jpg",
    alt: "Luxury hotel pool and lounge at sunset",
  },
  {
    title: "Growing business hub",
    subtitle: "Corporate brand identity & SEO services for B2B lead generation",
    image: "/images/portfolio-business.jpg",
    alt: "Modern open-plan office with desks and natural light",
  },
] as const;

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 border-t border-slate-200/80 bg-slate-100/70 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Portfolio
            </h2>
            <p className="mt-2 text-lg text-muted">
              Selected digital transformations
            </p>
          </div>
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-blue-800"
          >
            View All Projects
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <li key={p.title}>
              <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/50 transition hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.subtitle}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
