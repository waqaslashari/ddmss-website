"use client";

import { useEffect, useState, type ReactNode } from "react";

type HeaderFrameProps = {
  children: ReactNode;
};

export function HeaderFrame({ children }: HeaderFrameProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[height,background-color,border-color,backdrop-filter] duration-300 ${
        isScrolled
          ? "h-(--header-height-scrolled) border-white/[0.08] bg-background-deep/80 backdrop-blur-xl"
          : "h-(--header-height) border-transparent bg-transparent"
      }`}
    >
      {children}
    </header>
  );
}
