"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import styles from "./hero-ecosystem.module.css";

export function EcosystemFrame({ children }: { children: ReactNode }) {
  const visualRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || !visualRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 47.999rem)").matches) return;
    const bounds = visualRef.current.getBoundingClientRect();
    visualRef.current.style.setProperty("--pointer-x", ((event.clientX - bounds.left) / bounds.width - 0.5).toFixed(3));
    visualRef.current.style.setProperty("--pointer-y", ((event.clientY - bounds.top) / bounds.height - 0.5).toFixed(3));
  }

  function resetPointer() {
    visualRef.current?.style.setProperty("--pointer-x", "0");
    visualRef.current?.style.setProperty("--pointer-y", "0");
  }

  return (
    <figure ref={visualRef} className={styles.ecosystem} role="img" aria-label="Illustration of physical infrastructure, smart mobility, connected data, software and an AI intelligence core working as one digital ecosystem." onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      {children}
    </figure>
  );
}
