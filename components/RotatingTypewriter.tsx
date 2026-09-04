"use client";

import { useEffect, useState } from "react";

type RotatingTypewriterProps = {
  words: string[];
  className?: string;
};

export function RotatingTypewriter({ words, className }: RotatingTypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"type" | "hold" | "delete">("type");
  const [reduce, setReduce] = useState(false);

  const word = words[index] ?? "";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true);
      setText(words[0] ?? "");
    }
  }, [words]);

  useEffect(() => {
    if (reduce || !word) return;

    if (mode === "type") {
      if (text === word) {
        const id = window.setTimeout(() => setMode("hold"), 0);
        return () => window.clearTimeout(id);
      }
      const id = window.setTimeout(() => {
        setText(word.slice(0, text.length + 1));
      }, 75);
      return () => window.clearTimeout(id);
    }

    if (mode === "hold") {
      const id = window.setTimeout(() => setMode("delete"), 1700);
      return () => window.clearTimeout(id);
    }

    if (text.length === 0) {
      const id = window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setMode("type");
      }, 260);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(() => {
      setText(text.slice(0, -1));
    }, 40);
    return () => window.clearTimeout(id);
  }, [mode, text, word, words.length, reduce]);

  return <span className={className}>{text}</span>;
}
