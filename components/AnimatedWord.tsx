"use client";

import { useEffect, useState } from "react";

type AnimatedWordProps = {
  words: string[];
  className?: string;
};

export function AnimatedWord({ words, className = "" }: AnimatedWordProps) {
  const [index, setIndex] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true);
    }
  }, []);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [reduce, words.length]);

  const word = words[index] ?? words[0] ?? "";

  return (
    <span className={`inline-block text-coral ${className}`}>
      <span key={word} className="word-fade inline-block">
        {word}
      </span>
    </span>
  );
}
