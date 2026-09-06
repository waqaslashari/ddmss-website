import type { ReactNode } from "react";
import { Section } from "@/components/layout/section";
import { SectionIntro } from "@/components/layout/section-intro";
import type { DetailItem, ProcessItem } from "@/types/internal-pages";
import styles from "./internal-pages.module.css";

type InternalPageSectionProps = {
  id: string;
  marker: string;
  title: string;
  introduction?: string;
  children: ReactNode;
  tone?: "default" | "quiet";
};

export function InternalPageSection({
  id,
  marker,
  title,
  introduction,
  children,
  tone = "default",
}: InternalPageSectionProps) {
  return (
    <Section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${styles.section} ${tone === "quiet" ? styles.quietSection : ""}`}
    >
      <SectionIntro
        eyebrow={marker}
        title={title}
        description={introduction}
        className={styles.sectionIntro}
        headingId={`${id}-heading`}
      />
      <div className={styles.sectionBody}>{children}</div>
    </Section>
  );
}

export function DetailGrid({
  items,
  ariaLabel,
  compact = false,
  columns,
}: {
  items: readonly DetailItem[];
  ariaLabel: string;
  compact?: boolean;
  columns?: 3 | 4;
}) {
  return (
    <ul
      className={`${styles.detailGrid} ${compact ? styles.compactDetailGrid : ""} ${columns === 3 ? styles.threeColumnDetailGrid : ""}`}
      aria-label={ariaLabel}
    >
      {items.map((item, index) => (
        <li key={item.title}>
          <span className={styles.detailNumber} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          {item.technicalLabel ? (
            <p className={styles.detailTechnicalLabel}>{item.technicalLabel}</p>
          ) : null}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export function ProcessRail({
  items,
  ariaLabel,
  columns,
}: {
  items: readonly ProcessItem[];
  ariaLabel: string;
  columns?: 4 | 5;
}) {
  return (
    <ol
      className={`${styles.processRail} ${columns === 5 ? styles.fiveColumnProcessRail : ""}`}
      aria-label={ariaLabel}
    >
      {items.map((item) => (
        <li key={item.number}>
          <div className={styles.processHeader}>
            <span>{item.number}</span>
            <i aria-hidden="true" />
          </div>
          {item.technicalLabel ? (
            <p className={styles.processLabel}>{item.technicalLabel}</p>
          ) : null}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
