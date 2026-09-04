import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Tool = {
  name: string;
  Icon: () => ReactNode;
};

function FirebaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <path fill="#FFA000" d="M5.2 17.8 12.8 2.6c.2-.4.8-.4 1 0l2.4 4.8z" />
      <path fill="#F57C00" d="m5.2 17.8 4.2-13.6 6.8 3.2z" />
      <path fill="#FFCA28" d="M5.2 17.8 12 21.6l8.6-3.8-1.4-10.4z" />
    </svg>
  );
}

function SupabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <path fill="#3ECF8E" d="M13.2 3.2c.5-.7 1.6-.3 1.6.6v8.4h5c.9 0 1.4 1.1.8 1.8l-8.6 10.8c-.5.7-1.6.3-1.6-.6v-8.4H6c-.9 0-1.4-1.1-.8-1.8z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#0B132B" />
      <path fill="#fff" d="M8.2 7.5h2.1l5.5 8.2V7.5h2v9h-2.1L10.2 8.3V16.5h-2z" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.3">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path fill="#fff" d="M12.9 12.2H8.6V10.8h11.1v1.4h-4.3V19h-2.5z" />
      <path fill="#fff" d="M17.4 14.2c.5.3 1.2.6 2.1.6.7 0 1.1-.2 1.1-.6s-.3-.5-1.3-.8c-1.5-.4-2.5-1-2.5-2.3 0-1.4 1.2-2.4 3.1-2.4.9 0 1.8.2 2.6.6l-.7 1.4c-.6-.3-1.3-.5-2-.5-.6 0-1 .2-1 .6 0 .4.4.5 1.4.8 1.6.5 2.5 1.1 2.5 2.4 0 1.5-1.2 2.5-3.3 2.5-1.1 0-2.1-.3-2.9-.7z" />
    </svg>
  );
}

function PremiereIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#9999FF" />
      <text x="5" y="16.5" fill="#1A1230" fontSize="9" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
        Pr
      </text>
    </svg>
  );
}

function AfterEffectsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#9999FF" />
      <text x="4.5" y="16.5" fill="#1A1230" fontSize="9" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
        Ae
      </text>
    </svg>
  );
}

function IllustratorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <rect width="24" height="24" rx="5" fill="#FF9A00" />
      <text x="6.2" y="16.5" fill="#3B1A00" fontSize="9" fontWeight="800" fontFamily="ui-sans-serif, system-ui">
        Ai
      </text>
    </svg>
  );
}

function WordPressIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#21759B" />
      <path fill="#fff" d="M12 4.4A7.6 7.6 0 0 0 6.2 7.3l3.5 9.6c.8-1.5.8-2.8.8-2.8S10 12.4 10 11.4c0-1.1.4-1.8.9-1.8s.7.6.7 1.5c0 .9-.6 2.3-.9 3.6l-.4 1.3 2.9 8 .1-.1.1.1 2.1-6.3c.4-1 .7-1.9.7-2.6 0-.8-.3-1.4-.8-1.4-.6 0-.9.6-.9 1.4 0 .3 0 .6.1.9l-1.4 4.1-2.5-7.4A7.6 7.6 0 0 0 12 4.4Z" />
    </svg>
  );
}

function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <path fill="#47A248" d="M12.4 2s3.8 3.2 3.8 9.2c0 5.2-2.7 8-3.8 10.8-1.1-2.8-3.8-5.6-3.8-10.8C8.6 5.2 12.4 2 12.4 2Z" />
      <path fill="#B8C4C2" d="M12.1 20.2v-8" stroke="#3F3E42" strokeWidth="1.2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <path fill="#0B132B" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.4-3.5-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 4-2.4 4.8-4.7 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function CanvaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#00C4CC" />
      <path fill="#fff" d="M8.4 9.6c0-1.8 1.6-3.2 4-3.2 1.6 0 2.7.6 3.4 1.4l-1.5 1.4c-.5-.5-1.1-.8-1.9-.8-1.1 0-1.8.6-1.8 1.2s.6 1 1.8 1.3c2 .5 3.6 1.1 3.6 3.1 0 2-1.7 3.4-4.2 3.4-1.8 0-3.1-.7-3.9-1.7l1.6-1.3c.6.7 1.4 1.1 2.3 1.1 1.2 0 2-.6 2-1.4s-.7-1.1-2.1-1.4c-1.9-.5-3.3-1.2-3.3-3.1Z" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <path fill="#2496ED" d="M3.4 11.3h2.3V9.1H3.4zm2.7 0h2.3V9.1H6.1zm2.7 0h2.3V9.1H8.8zm2.6 0h2.4V9.1h-2.4zM6.1 8.7h2.3V6.5H6.1zm2.7 0h2.3V6.5H8.8zm2.6 0h2.4V6.5h-2.4zM8.8 6.1h2.3V3.9H8.8zm11 6.6c-.3-1.3-1.2-1.8-1.2-1.8s.2.9.1 1.8H3s.2 4.8 5.8 4.8c4.9 0 6.9-2.2 7.6-3.3 1.3.1 2.6-.4 3.2-1.5Z" />
    </svg>
  );
}

function MySqlIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <path fill="#00758F" d="M16.6 6.2c-1.6 0-2.8.8-3.6 2.3-.7-1.5-1.8-2.3-3.3-2.3-1.3 0-2.4.6-3.2 1.8V6.5H4.4v11h2.2v-6.2c.5-1.3 1.3-2 2.4-2s1.8.6 1.8 2.2v6h2.2v-6.3c.5-1.2 1.4-1.9 2.5-1.9s1.8.6 1.8 2.2v6h2.2v-6.6c0-2.6-1.5-4.2-3.9-4.2Z" />
    </svg>
  );
}

function SassIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <path fill="#CF649A" d="M12.4 3.2c-4.6 0-8.6 1.8-8.6 4.7 0 2.3 2.1 3.8 5.3 4.2l.8.1c1.3.2 2.4.5 2.4 1.2 0 .8-1 1.2-2.5 1.2-1.8 0-3.4-.5-4.5-1.1l-.8 2.4c1.2.7 3.3 1.2 5.4 1.2 4.8 0 8-2 8-4.8 0-2.4-2.3-3.8-5.7-4.3l-.8-.1c-1.1-.2-2-.5-2-1.1 0-.7.9-1.1 2.3-1.1 1.5 0 2.9.4 3.8.8l.8-2.3c-1.1-.6-2.8-1-4.7-1Z" />
    </svg>
  );
}

function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-9 sm:size-10" aria-hidden>
      <path fill="#E44D26" d="M4.1 2.4h15.8l-1.4 16.1L12 21.6 5.5 18.5z" />
      <path fill="#F16529" d="M12 20.2 17.3 18l1.2-14H12z" />
      <path fill="#EBEBEB" d="M12 9.3H8.6l.2 2.2H12v2.2H9l.3 3.1 2.7.8v2.3l-4.7-1.3-.3-3.6z" />
      <path fill="#fff" d="m12 9.3.1 2.2h3.1l-.3 3.1-2.9.8v2.3l4.6-1.3.6-6.9z" />
    </svg>
  );
}

const TOOLS: Tool[] = [
  { name: "Firebase", Icon: FirebaseIcon },
  { name: "Supabase", Icon: SupabaseIcon },
  { name: "Next.js", Icon: NextIcon },
  { name: "React", Icon: ReactIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "Premiere Pro", Icon: PremiereIcon },
  { name: "After Effects", Icon: AfterEffectsIcon },
  { name: "Illustrator", Icon: IllustratorIcon },
  { name: "WordPress", Icon: WordPressIcon },
  { name: "MongoDB", Icon: MongoIcon },
  { name: "GitHub", Icon: GitHubIcon },
  { name: "Canva", Icon: CanvaIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "MySQL", Icon: MySqlIcon },
  { name: "Sass", Icon: SassIcon },
  { name: "HTML5", Icon: HtmlIcon },
];

function ToolRow({
  reverse = false,
  tools,
}: {
  reverse?: boolean;
  tools: Tool[];
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center ${reverse ? "marquee-track-reverse" : "marquee-track"}`}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex items-center gap-12 px-6 sm:gap-16"
            aria-hidden={copy === 1}
          >
            {tools.map((tool) => (
              <li key={`${copy}-${tool.name}`} className="flex shrink-0 items-center gap-3.5">
                <span className="flex size-10 shrink-0 items-center justify-center sm:size-11">
                  <tool.Icon />
                </span>
                <span className="whitespace-nowrap font-display text-sm font-bold uppercase tracking-tight text-navy sm:text-base">
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function ToolkitSection() {
  return (
    <section className="toolkit-strips border-b border-border bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-white px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-coral" aria-hidden />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Our Toolkit
            </span>
          </p>
          <h2 className="mt-6 font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-navy">
            Powering Your
            <br />
            <span className="text-accent">Digital Vision</span>
          </h2>
          <span className="mt-5 block h-1 w-14 bg-navy" aria-hidden />
        </Reveal>
      </div>

      <p className="sr-only">{TOOLS.map((tool) => tool.name).join(", ")}</p>

      <div className="mt-12 flex flex-col gap-7 sm:mt-14 sm:gap-9">
        <ToolRow tools={TOOLS} />
        <ToolRow reverse tools={[...TOOLS].reverse()} />
        <ToolRow tools={[...TOOLS.slice(8), ...TOOLS.slice(0, 8)]} />
      </div>
    </section>
  );
}
