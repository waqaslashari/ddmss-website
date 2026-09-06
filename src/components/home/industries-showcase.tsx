"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { industries } from "@/content/industries";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { IndustryEnvironment } from "./industry-environment";
import styles from "./industries-section.module.css";

export function IndustriesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectorRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndustry = industries[activeIndex];

  function moveSelection(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % industries.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + industries.length) % industries.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = industries.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
    selectorRefs.current[nextIndex]?.focus();
  }

  return (
    <div className={styles.desktopShowcase}>
      <div
        className={styles.activeStage}
        id="industry-active-panel"
        role="tabpanel"
        aria-labelledby={`industry-tab-${activeIndustry.key}`}
      >
        <IndustryEnvironment
          key={activeIndustry.key}
          industry={activeIndustry.key}
          label={activeIndustry.environmentLabel}
        />

        <div className={styles.stageShade} aria-hidden="true" />
        <div className={styles.activeContent}>
          <span className={styles.activeNumber}>{activeIndustry.number} / Operating Environment</span>
          <h3>{activeIndustry.title}</h3>
          <p>{activeIndustry.statement}</p>
          <ul className={styles.technologyLayer} aria-label={`${activeIndustry.title} technologies`}>
            {activeIndustry.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <Link href={activeIndustry.href} className={styles.industryLink}>
            Explore Industry <ArrowIcon className={styles.linkArrow} />
          </Link>
        </div>

        <span className={styles.stageIndex} aria-hidden="true">{activeIndustry.number} / 06</span>
      </div>

      <div className={styles.selectorPanel}>
        <div className={styles.selectorHeader}>
          <span>Industry Matrix</span>
          <small>Environment / Select</small>
        </div>
        <div className={styles.selectorList} role="tablist" aria-label="Select an industry" aria-orientation="vertical">
          {industries.map((industry, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={industry.key}
                ref={(element) => { selectorRefs.current[index] = element; }}
                id={`industry-tab-${industry.key}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="industry-active-panel"
                tabIndex={isActive ? 0 : -1}
                className={styles.selectorButton}
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse" && !event.currentTarget.closest('[role="tablist"]')?.contains(document.activeElement)) setActiveIndex(index);
                }}
                onKeyDown={(event) => moveSelection(event, index)}
              >
                <span>{industry.number}</span>
                <strong>{industry.title}</strong>
                <i aria-hidden="true" />
              </button>
            );
          })}
        </div>
        <div className={styles.selectorStatus} aria-hidden="true">
          <span>One Foundation</span>
          <i />
          <span>Different Environments</span>
        </div>
      </div>
    </div>
  );
}
