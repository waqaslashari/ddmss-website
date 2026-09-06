import type { ReactNode } from "react";
import type { SolutionPageContent } from "@/types/internal-pages";
import { DetailGrid, InternalPageSection, ProcessRail } from "../internal-page-section";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import styles from "../internal-pages.module.css";

type SolutionPageTemplateProps = {
  content: SolutionPageContent;
  heroVisual?: ReactNode;
  architectureVisual?: ReactNode;
  operationalDemo?: ReactNode;
};

export function SolutionPageTemplate({
  content,
  heroVisual,
  architectureVisual,
  operationalDemo,
}: SolutionPageTemplateProps) {
  const relatedContent = (
    <div className={styles.relationshipFlow}>
      <RelatedContent id="solution-industries" marker="RELEVANT / INDUSTRIES" title="Operating environments for this system." items={content.relatedIndustries} />
      <RelatedContent id="solution-work" marker="RELATED / WORK" title="Related systems and implementation work." items={content.relatedWork} />
    </div>
  );

  return (
    <InternalPageShell family={content.family} hero={content.hero} heroVisual={heroVisual} relatedContent={relatedContent} finalCta={content.finalCta}>
      <InternalPageSection id="operational-challenge" marker="01 / OPERATIONAL CHALLENGE" title="The operating need behind the system.">
        <p className={styles.narrativeText}>{content.challenge}</p>
      </InternalPageSection>
      <InternalPageSection id="solution-architecture" marker="02 / SOLUTION ARCHITECTURE" title="A connected system architecture." introduction={content.architecture} tone="quiet">
        {architectureVisual ? <div className={styles.visualStage}>{architectureVisual}</div> : null}
      </InternalPageSection>
      <InternalPageSection id="core-components" marker="03 / CORE COMPONENTS" title="The technology layers working together.">
        <DetailGrid items={content.coreComponents} ariaLabel="Solution components" />
      </InternalPageSection>
      <InternalPageSection id="how-it-works" marker="04 / OPERATING FLOW" title="How the system works in operation." tone="quiet">
        <ProcessRail items={content.operatingFlow} ariaLabel="Solution operating flow" />
        {operationalDemo ? <div className={styles.visualStage}>{operationalDemo}</div> : null}
      </InternalPageSection>
      <InternalPageSection id="operational-benefits" marker="05 / OPERATIONAL BENEFITS" title="Designed around useful operational outcomes.">
        <DetailGrid items={content.benefits} ariaLabel="Operational benefits" />
      </InternalPageSection>
    </InternalPageShell>
  );
}
