import Link from "next/link";
import type { ReactNode } from "react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { TechnicalLabel } from "@/components/ui/technical-label";
import type { InternalHeroContent, PageFamily } from "@/types/internal-pages";
import styles from "./internal-pages.module.css";

type InternalPageHeroProps = {
  content: InternalHeroContent;
  family: PageFamily;
  visual?: ReactNode;
};

export function InternalPageHero({
  content,
  family,
  visual,
}: InternalPageHeroProps) {
  return (
    <header className={styles.hero} data-family={family}>
      <div
        className={`content-container ${styles.heroInner} ${visual ? "" : styles.heroInnerWithoutVisual}`}
      >
        <div className={styles.heroNarrative}>
          {content.breadcrumbs?.length ? (
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <ol>
                {content.breadcrumbs.map((item, index) => (
                  <li key={`${item.label}-${index}`}>
                    {item.href ? (
                      <Link href={item.href} prefetch={false}>
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current="page">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <TechnicalLabel className={styles.heroMarker}>
            {content.marker}
          </TechnicalLabel>
          <h1>{content.title}</h1>
          <p className={styles.heroIntroduction}>{content.introduction}</p>

          {content.technicalLine ? (
            <p className={styles.heroTechnicalLine}>{content.technicalLine}</p>
          ) : null}

          {content.tags?.length ? (
            <ul className={styles.heroTags} aria-label={`${content.title} focus areas`}>
              {content.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}

          {content.action ? (
            <PrimaryButton href={content.action.href} className={styles.heroAction}>
              {content.action.label}
            </PrimaryButton>
          ) : null}
        </div>

        {visual ? <div className={styles.heroVisual}>{visual}</div> : null}
      </div>
    </header>
  );
}
