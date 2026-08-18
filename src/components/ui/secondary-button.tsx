import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowIcon } from "./arrow-icon";

type SecondaryButtonProps = LinkProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps> & {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  };

export function SecondaryButton({
  children,
  className = "",
  showArrow = true,
  ...props
}: SecondaryButtonProps) {
  return (
    <Link
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-white/[0.12] bg-white/[0.025] px-5 py-3 text-sm font-bold tracking-[-0.01em] text-foreground transition-[border-color,background-color,transform] duration-200 hover:border-[rgba(39,215,255,0.35)] hover:bg-accent-cyan/[0.06] active:translate-y-px ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowIcon className="size-4 text-accent-cyan transition-transform duration-200 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}
