import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowIcon } from "./arrow-icon";

type PrimaryButtonProps = LinkProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps> & {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  };

export function PrimaryButton({
  children,
  className = "",
  showArrow = true,
  ...props
}: PrimaryButtonProps) {
  return (
    <Link
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-accent-cyan px-5 py-3 text-sm font-bold tracking-[-0.01em] text-background-deep transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#6ce5ff] hover:shadow-[0_0_28px_rgba(39,215,255,0.18)] active:translate-y-px ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
      ) : null}
    </Link>
  );
}
