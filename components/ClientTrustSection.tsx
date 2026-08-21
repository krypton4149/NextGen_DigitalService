import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export function ClientTrustSection() {
  return (
    <section className="border-b border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Trusted by
            <br />
            <span className="text-accent">local brands.</span>
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((client, index) => (
            <Reveal key={client.id} as="li" delayMs={index * 40}>
              <Link href={`/work/${client.slug}`} className="group block">
                <div className="img-frame aspect-[16/10]">
                  <Image
                    src={client.image}
                    alt={`${client.name} project`}
                    fill
                    className="img-zoom object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  <p className="absolute inset-x-0 bottom-0 z-[3] p-4 font-display text-lg font-bold text-white">
                    {client.name}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
