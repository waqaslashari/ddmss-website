import type { AboutPageContent } from "@/types/internal-pages";
import { DetailGrid, InternalPageSection, ProcessRail } from "../internal-page-section";
import { InternalPageShell } from "../internal-page-shell";
import styles from "../internal-pages.module.css";

export function AboutPageTemplate({ content }: { content: AboutPageContent }) {
  return (
    <InternalPageShell family={content.family} hero={content.hero} finalCta={content.finalCta}>
      <InternalPageSection id="what-we-believe" marker="01 / WHAT WE BELIEVE" title="Principles for useful technology.">
        <DetailGrid items={content.beliefs} ariaLabel="DDMSS beliefs" />
      </InternalPageSection>
      <InternalPageSection id="our-approach" marker="02 / OUR APPROACH" title="From understanding to operational value." tone="quiet">
        <ProcessRail items={content.approach} ariaLabel="DDMSS approach" />
      </InternalPageSection>
      <InternalPageSection id="regional-positioning" marker="03 / REGIONAL POSITIONING" title="Built in Oman. Engineered for the Region.">
        <p className={styles.narrativeText}>{content.regionalPositioning}</p>
      </InternalPageSection>
    </InternalPageShell>
  );
}
