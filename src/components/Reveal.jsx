
"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 900,
  distance = 35,
  once = true,
  className = "",
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.12,
      }
    );

    setReady(true);
    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={elementRef}
      className={`
        josunico-reveal
        ${ready ? "josunico-reveal-ready" : ""}
        ${visible ? "josunico-reveal-visible" : ""}
        ${className}
      `}
      data-direction={direction}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-duration": `${duration}ms`,
        "--reveal-distance": `${distance}px`,
      }}
    >
      {children}
    </div>
  );
}
