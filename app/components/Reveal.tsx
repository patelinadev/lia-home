"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Fades children in the first time they scroll into view. Content is visible by
// default and only hidden once the effect has run, so it still shows without JS.
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Observers do not fire in a background tab; leave the content showing there.
    if (document.hidden) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setShown(false);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-shown={shown} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
