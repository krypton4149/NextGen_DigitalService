"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";

type GlowCardProps = {
  href: string;
  num: string;
  title: string;
  body: string;
  icon: ReactNode;
};

export function GlowCard({ href, num, title, body, icon }: GlowCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  function moveGlow(event: React.MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--y", `${event.clientY - bounds.top}px`);
  }

  return (
    <div className="glow-wrap relative h-full">
      <span className="glow-card-bloom" aria-hidden />
      <Link
        ref={cardRef}
        href={href}
        prefetch
        onMouseMove={moveGlow}
        style={{ ["--x" as string]: "50%", ["--y" as string]: "100%" }}
        className="glow-card group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#140910] p-6 sm:p-7"
      >
      <span className="glow-card-curve" aria-hidden />
      <span className="glow-card-spot" aria-hidden />

      <div className="relative flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-2xl border border-coral/25 bg-coral/10 text-coral">
          {icon}
        </span>
        <span className="glow-card-num font-display text-[4.5rem] font-extrabold leading-none tracking-[-0.06em] text-white/15 transition-[color,text-shadow] duration-400 group-hover:text-[#ff4d78] group-hover:[text-shadow:0_0_14px_rgba(255,61,110,0.95),0_0_32px_rgba(255,61,110,0.7)]">
          {num}
        </span>
      </div>

      <h3 className="relative mt-8 text-[1.15rem] font-semibold tracking-[-0.02em] text-white">
        {title}
      </h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/55">
        {body}
      </p>
      <span className="glow-card-line relative mt-8" aria-hidden />
      </Link>
    </div>
  );
}
