import type { ReactNode } from "react";

type TechnicalLabelProps = {
  children: ReactNode;
  className?: string;
  status?: boolean;
};

export function TechnicalLabel({
  children,
  className = "",
  status = false,
}: TechnicalLabelProps) {
  return (
    <span
      className={`technical-label inline-flex items-center gap-2 font-mono uppercase ${className}`}
    >
      {status ? (
        <span
          className="size-1.5 bg-status-green shadow-[0_0_8px_rgba(68,226,138,0.55)]"
          aria-hidden="true"
        />
      ) : null}
      {children}
    </span>
  );
}
