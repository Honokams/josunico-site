"use client";
import { useEffect, useRef } from "react";
import "./josunico-motion.css";

export default function useJosunicoMotion() {
  const root = useRef(null);
  useEffect(() => {
    const node = root.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seen = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.dataset.josState = "visible";
        observer.unobserve(entry.target);
      }
    }, { threshold: 0 });
    const scan = () => {
      node.querySelectorAll("[data-jos-reveal]").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (media.matches) return;
        // Keep above-the-fold content visible until its animation begins.
        const rect = el.getBoundingClientRect();
        if (rect.top >= window.innerHeight) el.dataset.josState = "pending";
        observer.observe(el);
      });
    };
    scan();
    const mutation = new MutationObserver(scan);
    mutation.observe(node, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutation.disconnect();
      node.querySelectorAll("[data-jos-state]").forEach(el => delete el.dataset.josState);
    };
  }, []);
  return root;
}
