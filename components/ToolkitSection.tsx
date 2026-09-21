import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const TOOLS = [
  "Firebase",
  "Supabase",
  "Next.js",
  "React",
  "TypeScript",
  "Premiere Pro",
  "After Effects",
  "Illustrator",
  "WordPress",
  "MongoDB",
  "GitHub",
  "Canva",
  "Docker",
  "MySQL",
  "Sass",
  "HTML5",
] as const;

export function ToolkitSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="agency-orb agency-orb-a absolute -right-10 top-0 size-48 opacity-40" />
      </div>
      <div className="site-wrap relative">
        <Reveal>
          <SectionLabel className="text-coral">Toolkit</SectionLabel>
          <h2 className="display-title mt-5 text-[clamp(2rem,4.2vw,3.3rem)]">
            Built on tools
            that actually ship.
          </h2>
        </Reveal>
        <ul className="mt-10 flex flex-wrap gap-3">
          {TOOLS.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:border-coral hover:text-white"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
