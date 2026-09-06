import type { ReactNode } from "react";
import { TechnicalLabel } from "@/components/ui/technical-label";

type SectionIntroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  headingId?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  headingId,
}: SectionIntroProps) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <header className={`flex max-w-4xl flex-col ${alignment} ${className}`}>
      {eyebrow ? <TechnicalLabel className="mb-5">{eyebrow}</TechnicalLabel> : null}
      <h2
        id={headingId}
        className="text-[clamp(2rem,5vw,4rem)] leading-[1.05] font-semibold tracking-[-0.045em] text-balance"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-[clamp(1rem,1.4vw,1.125rem)] leading-8 text-text-secondary text-pretty">
          {description}
        </p>
      ) : null}
    </header>
  );
}
