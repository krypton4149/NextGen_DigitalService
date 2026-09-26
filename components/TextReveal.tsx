"use client";

import { useEffect, useRef } from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delayMs?: number;
  staggerMs?: number;
};

export function TextReveal({
  text,
  className = "",
  as: Tag = "span",
  delayMs = 0,
  staggerMs = 45,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`text-reveal ${className}`}
      style={{ ["--reveal-delay" as string]: `${delayMs}ms` }}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="text-reveal-word-wrap">
          <span
            className="text-reveal-word"
            style={{ transitionDelay: `calc(var(--reveal-delay) + ${i * staggerMs}ms)` }}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
