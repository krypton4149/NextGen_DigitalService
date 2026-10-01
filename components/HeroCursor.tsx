"use client";

import { useEffect, useRef } from "react";

export function HeroCursor() {
  const squareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const square = squareRef.current;
    const section = square?.closest("section");
    if (!square || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let active = false;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      const bounds = section.getBoundingClientRect();
      targetX = event.clientX - bounds.left;
      targetY = event.clientY - bounds.top;
      if (!active) {
        currentX = targetX;
        currentY = targetY;
        active = true;
      }
    };

    const onLeave = () => {
      active = false;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      square.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      square.style.opacity = active ? "1" : "0";
      frame = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={squareRef}
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 z-[3] hidden size-16 border border-coral/80 opacity-0 lg:block"
    />
  );
}
