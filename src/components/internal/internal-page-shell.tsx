import type { ReactNode } from "react";
import type {
  FinalCtaContent,
  InternalHeroContent,
  PageFamily,
} from "@/types/internal-pages";
import { InternalPageCta } from "./internal-page-cta";
import { InternalPageHero } from "./internal-page-hero";
import styles from "./internal-pages.module.css";

type InternalPageShellProps = {
  family: PageFamily;
  hero: InternalHeroContent;
  heroVisual?: ReactNode;
  children: ReactNode;
  relatedContent?: ReactNode;
  finalCta?: FinalCtaContent;
};

export function InternalPageShell({
  family,
  hero,
  heroVisual,
  children,
  relatedContent,
  finalCta,
}: InternalPageShellProps) {
  return (
    <article className={styles.page} data-family={family}>
      <InternalPageHero content={hero} family={family} visual={heroVisual} />
      <div className={styles.contentFlow}>{children}</div>
      {relatedContent}
      {finalCta ? <InternalPageCta content={finalCta} /> : null}
    </article>
  );
}
