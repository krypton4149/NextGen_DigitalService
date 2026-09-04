"use client";

import { useEffect, useState } from "react";

const HINDI = "शिको";
const LATIN = "HABAD";
const CREATIVE = "CREATIVE";
const CO = "CO.";

function graphemes(value: string) {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    return [...new Intl.Segmenter("hi", { granularity: "grapheme" }).segment(value)].map(
      (part) => part.segment,
    );
  }
  return Array.from(value);
}

const HINDI_UNITS = graphemes(HINDI);

export function TypewriterHeadline() {
  const [hindi, setHindi] = useState("");
  const [habad, setHabad] = useState("");
  const [creative, setCreative] = useState("");
  const [co, setCo] = useState("");
  const [phase, setPhase] = useState<"hindi" | "habad" | "creative" | "co" | "done">(
    "hindi",
  );
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true);
      setHindi(HINDI);
      setHabad(LATIN);
      setCreative(CREATIVE);
      setCo(CO);
      setPhase("done");
    }
  }, []);

  useEffect(() => {
    if (reduce) return;

    if (phase === "hindi") {
      const next = graphemes(hindi).length;
      if (next >= HINDI_UNITS.length) {
        const id = window.setTimeout(() => setPhase("habad"), 160);
        return () => window.clearTimeout(id);
      }
      const id = window.setTimeout(() => {
        setHindi(HINDI_UNITS.slice(0, next + 1).join(""));
      }, next === 0 ? 320 : 140);
      return () => window.clearTimeout(id);
    }

    if (phase === "habad") {
      if (habad.length >= LATIN.length) {
        const id = window.setTimeout(() => setPhase("creative"), 220);
        return () => window.clearTimeout(id);
      }
      const id = window.setTimeout(() => {
        setHabad(LATIN.slice(0, habad.length + 1));
      }, 85);
      return () => window.clearTimeout(id);
    }

    if (phase === "creative") {
      if (creative.length >= CREATIVE.length) {
        const id = window.setTimeout(() => setPhase("co"), 220);
        return () => window.clearTimeout(id);
      }
      const id = window.setTimeout(() => {
        setCreative(CREATIVE.slice(0, creative.length + 1));
      }, 80);
      return () => window.clearTimeout(id);
    }

    if (phase === "co") {
      if (co.length >= CO.length) {
        setPhase("done");
        return;
      }
      const id = window.setTimeout(() => {
        setCo(CO.slice(0, co.length + 1));
      }, 110);
      return () => window.clearTimeout(id);
    }
  }, [phase, hindi, habad, creative, co, reduce]);

  return (
    <h1 className="font-display text-[clamp(2.35rem,6.4vw,4.35rem)] font-bold leading-[0.88] tracking-[-0.045em]">
      <span className="sr-only">शिकोHABAD CREATIVE CO.</span>
      <span className="relative block" aria-hidden>
        <span className="invisible block">
          <span className="[font-family:var(--font-hindi)]">{HINDI}</span>
          {LATIN}
        </span>
        <span className="absolute inset-0 text-foreground">
          <span className="[font-family:var(--font-hindi)]">{hindi}</span>
          {habad}
        </span>
      </span>
      <span className="relative block" aria-hidden>
        <span className="invisible block">{CREATIVE}</span>
        <span className="absolute inset-0 text-accent">
          {creative}
        </span>
      </span>
      <span className="relative block" aria-hidden>
        <span className="invisible block">{CO}</span>
        <span className="absolute inset-0 text-foreground">
          {co}
        </span>
      </span>
    </h1>
  );
}
