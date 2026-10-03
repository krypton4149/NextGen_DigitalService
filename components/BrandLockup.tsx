"use client";

import { useLayoutEffect, useRef, useState } from "react";

type BrandLockupProps = {
  compact?: boolean;
  large?: boolean;
};

export function BrandLockup({ compact = false, large = false }: BrandLockupProps) {
  const topRef = useRef<HTMLSpanElement>(null);
  const secondRef = useRef<HTMLSpanElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const [spacing, setSpacing] = useState({ top: "0px", second: "0px" });

  const name = large
    ? "text-[1.35rem] sm:text-[1.7rem]"
    : compact
      ? "text-[0.78rem] sm:text-[0.92rem]"
      : "text-[0.95rem] sm:text-[1.15rem]";
  const tag = large
    ? "text-[0.58rem] sm:text-[0.68rem]"
    : compact
      ? "text-[0.38rem] sm:text-[0.44rem]"
      : "text-[0.46rem] sm:text-[0.52rem]";
  const mark = large ? "4.25rem" : compact ? "2.15rem" : "2.65rem";

  useLayoutEffect(() => {
    const top = topRef.current;
    const second = secondRef.current;
    const tagLine = tagRef.current;
    if (!top || !second || !tagLine) return;

    const fit = () => {
      const measure = (el: HTMLSpanElement) => {
        const previous = el.style.letterSpacing;
        el.style.letterSpacing = "0px";
        const width = el.scrollWidth;
        el.style.letterSpacing = previous;
        return width;
      };
      const topWidth = measure(top);
      const secondWidth = measure(second);
      const tagWidth = [...tagLine.children].reduce(
        (sum, child) => sum + (child as HTMLElement).scrollWidth,
        0,
      ) + 18;
      const target = Math.max(topWidth, secondWidth, tagWidth);
      const spaceFor = (natural: number, text: string) => {
        const extra = target - natural;
        const gaps = Math.max(text.length - 1, 1);
        return extra > 0.5 ? `${extra / gaps}px` : "0px";
      };
      const next = {
        top: spaceFor(topWidth, "SHIKOHABAD"),
        second: spaceFor(secondWidth, "CREATIVE CO."),
      };
      setSpacing((current) =>
        current.top === next.top && current.second === next.second ? current : next,
      );
    };

    fit();
    document.fonts?.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [compact, large, name]);

  return (
    <span className="inline-flex max-w-full items-center gap-2 sm:gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Logo1.png"
        alt=""
        width={1562}
        height={1007}
        className="w-auto shrink-0"
        style={{ height: mark }}
      />
      <span
        className={`w-px shrink-0 self-stretch bg-white/80 ${
          large ? "my-1" : "my-0.5"
        }`}
        aria-hidden
      />
      <span className="inline-grid justify-items-stretch leading-[0.92]">
        <span
          ref={topRef}
          className={`whitespace-nowrap font-display font-extrabold tracking-[-0.03em] text-white ${name}`}
          style={{ letterSpacing: spacing.top }}
        >
          SHIKOHABAD
        </span>
        <span
          ref={secondRef}
          className={`whitespace-nowrap font-display font-extrabold tracking-[-0.03em] ${name}`}
          style={{ letterSpacing: spacing.second }}
        >
          <span className="text-[#fb290e]">CREATIVE</span>
          <span className="text-white"> CO.</span>
        </span>
        <span className="mt-[0.28em] h-px bg-white" aria-hidden />
        <span
          ref={tagRef}
          className={`mt-[0.28em] flex min-w-max items-center justify-between gap-1 whitespace-nowrap font-semibold uppercase text-white/90 ${tag}`}
        >
          <span className="shrink-0">Digital</span>
          <span className="shrink-0 text-[#fb290e]">|</span>
          <span className="shrink-0">Events</span>
          <span className="shrink-0 text-[#fb290e]">|</span>
          <span className="shrink-0">Growth Agency</span>
        </span>
      </span>
    </span>
  );
}
