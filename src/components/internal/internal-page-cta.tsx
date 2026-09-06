import { PrimaryButton } from "@/components/ui/primary-button";
import { TechnicalLabel } from "@/components/ui/technical-label";
import type { FinalCtaContent } from "@/types/internal-pages";
import styles from "./internal-pages.module.css";

export function InternalPageCta({ content }: { content: FinalCtaContent }) {
  return (
    <section className={styles.finalCta} aria-labelledby="internal-final-cta-heading">
      <div className={`content-container ${styles.finalCtaInner}`}>
        <div>
          <TechnicalLabel className={styles.finalCtaMarker}>
            {content.marker ?? "DDMSS / NEXT STEP"}
          </TechnicalLabel>
          <h2 id="internal-final-cta-heading">{content.title}</h2>
        </div>
        <div className={styles.finalCtaAction}>
          <p>{content.description}</p>
          <PrimaryButton href={content.action.href}>
            {content.action.label}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
