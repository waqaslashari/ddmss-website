import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Section<T extends ElementType = "section">({
  as,
  children,
  className = "",
  containerClassName = "",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={`relative py-[clamp(4.5rem,10vw,10rem)] ${className}`}
      {...props}
    >
      <div className={`content-container ${containerClassName}`}>{children}</div>
    </Component>
  );
}
