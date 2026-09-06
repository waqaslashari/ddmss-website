"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { primaryNavigation } from "@/lib/constants";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigationId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();

    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  function openNavigation() {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // The native top layer escapes the scrolled header's backdrop-filter.
    // It also makes the page inert, traps focus and restores it on dismissal.
    dialog.showModal();
    dialog.scrollTop = 0;
    dialog.scrollLeft = 0;
    setIsOpen(true);
  }

  function closeNavigation() {
    dialogRef.current?.close();
  }

  function containTabFocus(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]");
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.025] text-foreground"
        aria-controls={navigationId}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Open navigation"
        onClick={openNavigation}
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span className="absolute top-1 left-0 h-px w-5 bg-current" />
          <span className="absolute bottom-1 left-0 h-px w-5 bg-current" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        id={navigationId}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain border-0 bg-background-deep/98 px-(--page-gutter) pt-[calc(var(--header-height-scrolled)+3rem)] pb-8 text-foreground backdrop:bg-background-deep/90"
        aria-label="Site navigation"
        onClose={() => setIsOpen(false)}
        onKeyDown={containTabFocus}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(166,179,191,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(166,179,191,0.035)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <button
          type="button"
          autoFocus
          aria-label="Close navigation"
          onClick={closeNavigation}
          className="absolute top-4 right-(--page-gutter) grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.025] text-foreground"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className="absolute top-2 left-0 h-px w-5 rotate-45 bg-current" />
            <span className="absolute top-2 left-0 h-px w-5 -rotate-45 bg-current" />
          </span>
        </button>
        <nav className="relative flex min-h-full flex-col" aria-label="Mobile navigation">
          <span className="mb-8 font-mono text-[0.6875rem] tracking-[0.16em] text-text-muted uppercase">
            Navigation / 01—06
          </span>
          <ul className="mb-8 flex flex-col border-t border-white/[0.08]">
            {primaryNavigation.map((item, index) => (
              <li key={item.href} className="border-b border-white/[0.08]">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-4 text-[clamp(1.5rem,7vw,2.25rem)] font-semibold tracking-[-0.035em] transition-colors hover:text-accent-cyan"
                  onClick={closeNavigation}
                >
                  {item.label}
                  <span className="font-mono text-[0.625rem] tracking-wider text-text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <PrimaryButton href="/contact" className="mt-auto w-full shrink-0" onClick={closeNavigation}>
            Let&apos;s Talk
          </PrimaryButton>
        </nav>
      </dialog>
    </div>
  );
}
