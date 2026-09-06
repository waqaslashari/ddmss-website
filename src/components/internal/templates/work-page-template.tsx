import type { ReactNode } from "react";
import type { WorkPageContent } from "@/types/internal-pages";
import { DetailGrid, InternalPageSection, ProcessRail } from "../internal-page-section";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import styles from "../internal-pages.module.css";

export function WorkPageTemplate({ content, heroVisual, architectureVisual }: { content: WorkPageContent; heroVisual?: ReactNode; architectureVisual?: ReactNode }) {
  const relatedContent = content.relatedWork.length ? (
    <div className={styles.relationshipFlow}>
      <RelatedContent id="related-work" marker="RELATED / WORK" title="Related systems and engineering work." items={content.relatedWork} />
    </div>
  ) : undefined;

  return (
    <InternalPageShell family={content.family} hero={content.hero} heroVisual={heroVisual} relatedContent={relatedContent} finalCta={content.finalCta}>
      <InternalPageSection id="project-context" marker="01 / CONTEXT" title="The operating context."><p className={styles.narrativeText}>{content.context}</p></InternalPageSection>
      <InternalPageSection id="project-challenge" marker="02 / CHALLENGE" title="The system challenge." tone="quiet"><p className={styles.narrativeText}>{content.challenge}</p></InternalPageSection>
      <InternalPageSection id="system-architecture" marker="03 / SYSTEM ARCHITECTURE" title="How the system is structured." introduction={content.architecture}>
        {architectureVisual ? <div className={styles.visualStage}>{architectureVisual}</div> : null}
      </InternalPageSection>
      <InternalPageSection id="project-components" marker="04 / COMPONENTS" title="Technology and system components." tone="quiet"><DetailGrid items={content.components} ariaLabel="Project components and technologies" /></InternalPageSection>
      <InternalPageSection id="implementation-approach" marker="05 / IMPLEMENTATION" title="The implementation approach."><ProcessRail items={content.approach} ariaLabel="Implementation approach" /></InternalPageSection>
      {content.outcomes?.length ? <InternalPageSection id="project-outcomes" marker="06 / OUTCOMES" title="Documented outcomes." tone="quiet"><DetailGrid items={content.outcomes} ariaLabel="Project outcomes" /></InternalPageSection> : null}
    </InternalPageShell>
  );
}
