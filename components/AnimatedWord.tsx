"use client";

import { useEffect, useState } from "react";

type AnimatedWordProps = {
  words: string[];
  className?: string;
};

export function AnimatedWord({ words, className = "" }: AnimatedWordProps) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true);
    }
  }, []);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const id = window.setInterval(() => {
      setPhase("out");
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setPhase("in");
      }, 280);
    }, 2400);
    return () => window.clearInterval(id);
  }, [reduce, words.length]);

  const word = words[index] ?? words[0] ?? "";

  return (
    <span className={`relative inline-block text-coral ${className}`}>
      <span
        key={word}
        className={`kinetic-word inline-block ${phase === "in" ? "kinetic-in" : "kinetic-out"}`}
      >
        {word}
      </span>
      <span className="text-shimmer absolute inset-x-0 -bottom-1 h-[3px] rounded-full" aria-hidden />
    </span>
  );
}
