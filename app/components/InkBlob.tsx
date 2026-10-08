"use client";

import { useEffect, useRef } from "react";

// Hero stand-in: an ink blob whose eyes and lean follow the pointer.
// This is the static-asset fallback for the hero motion slot — the generated
// pointer-driven animation replaces the <svg> and keeps the same stage.
export default function InkBlob() {
  const stage = useRef<HTMLDivElement>(null);
  const body = useRef<SVGGElement>(null);
  const eyes = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      const rect = stage.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      // Normalise against the viewport so the blob reacts anywhere on the page.
      target.x = Math.max(-1, Math.min(1, dx / (window.innerWidth / 2)));
      target.y = Math.max(-1, Math.min(1, dy / (window.innerHeight / 2)));
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const tick = () => {
      // Damped follow: quick reversals ease instead of snapping.
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      eyes.current?.setAttribute(
        "transform",
        `translate(${current.x * 9} ${current.y * 6})`,
      );
      body.current?.setAttribute(
        "transform",
        `rotate(${current.x * 4} 160 250)`,
      );
      const settled =
        Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;
      frame = settled ? 0 : requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={stage} className="relative mx-auto aspect-square w-full max-w-[340px]">
      <svg viewBox="0 0 320 320" className="h-full w-full" aria-hidden="true">
        {/* ground line */}
        <path
          d="M40 268 C 90 263, 150 271, 205 266 S 270 269, 286 265"
          fill="none"
          stroke="#141414"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <g ref={body}>
          {/* legs */}
          <path d="M140 232 C 139 245, 141 256, 138 267" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" />
          <path d="M180 232 C 182 246, 179 257, 183 267" fill="none" stroke="#141414" strokeWidth="2" strokeLinecap="round" />
          {/* body */}
          <path
            d="M160 96 C 214 92, 238 132, 233 178 C 229 222, 199 240, 158 239 C 116 238, 88 216, 87 174 C 86 130, 110 99, 160 96 Z"
            fill="#141414"
          />
          <g ref={eyes}>
            <circle cx="140" cy="158" r="5.5" fill="#fff" />
            <circle cx="180" cy="158" r="5.5" fill="#fff" />
          </g>
        </g>
      </svg>
      <span className="note note-blue pointer-only absolute right-0 top-6 rotate-6">
        follows your cursor
      </span>
    </div>
  );
}
