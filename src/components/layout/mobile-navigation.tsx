"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { primaryNavigation } from "@/lib/constants";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationId = useId();
  const navigationRootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = navigationRootRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href]:not([tabindex="-1"])',
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={navigationRootRef} className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="relative z-20 grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.025] text-foreground"
        aria-controls={navigationId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span
            className={`absolute top-1 left-0 h-px w-5 bg-current transition-transform duration-200 ${isOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`absolute bottom-1 left-0 h-px w-5 bg-current transition-transform duration-200 ${isOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        id={navigationId}
        className={`fixed inset-0 z-10 bg-background-deep/98 px-(--page-gutter) pt-[calc(var(--header-height-scrolled)+3rem)] pb-8 backdrop-blur-2xl transition-[opacity,visibility] duration-200 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(166,179,191,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(166,179,191,0.035)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <nav className="relative flex h-full flex-col" aria-label="Mobile navigation">
          <span className="mb-8 font-mono text-[0.6875rem] tracking-[0.16em] text-text-muted uppercase">
            Navigation / 01—06
          </span>
          <ul className="flex flex-col border-t border-white/[0.08]">
            {primaryNavigation.map((item, index) => (
              <li key={item.href} className="border-b border-white/[0.08]">
                <Link
                  href={item.href}
                  className={`flex items-center justify-between py-4 text-[clamp(1.5rem,7vw,2.25rem)] font-semibold tracking-[-0.035em] transition-colors hover:text-accent-cyan ${
                    isOpen ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="font-mono text-[0.625rem] tracking-wider text-text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <PrimaryButton
            href="/contact"
            className={`mt-auto w-full ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s Talk
          </PrimaryButton>
        </nav>
      </div>
    </div>
  );
}
