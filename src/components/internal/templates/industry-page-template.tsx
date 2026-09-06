import type { ReactNode } from "react";
import type { IndustryPageContent } from "@/types/internal-pages";
import { DetailGrid, InternalPageSection } from "../internal-page-section";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import styles from "../internal-pages.module.css";

export function IndustryPageTemplate({ content, heroVisual, architectureVisual }: { content: IndustryPageContent; heroVisual?: ReactNode; architectureVisual?: ReactNode }) {
  const relatedContent = (
    <div className={styles.relationshipFlow}>
      <RelatedContent id="industry-capabilities" marker="RELEVANT / CAPABILITIES" title="Capabilities shaped for this environment." items={content.capabilities} />
      <RelatedContent id="industry-solutions" marker="RELEVANT / SOLUTIONS" title="Systems that address the operating context." items={content.solutions} />
    </div>
  );

  return (
    <InternalPageShell family={content.family} hero={content.hero} heroVisual={heroVisual} relatedContent={relatedContent} finalCta={content.finalCta}>
      <InternalPageSection id="operational-context" marker="01 / OPERATING ENVIRONMENT" title="Technology begins with the environment.">
        <p className={styles.narrativeText}>{content.operationalContext}</p>
      </InternalPageSection>
      <InternalPageSection id="industry-challenges" marker="02 / KEY CHALLENGES" title="The conditions the system must account for." tone="quiet">
        <DetailGrid items={content.challenges} ariaLabel="Industry challenges" />
      </InternalPageSection>
      {content.architecture || architectureVisual ? (
        <InternalPageSection id="industry-architecture" marker="03 / EXAMPLE ARCHITECTURE" title="A system designed around real operations." introduction={content.architecture}>
          {architectureVisual ? <div className={styles.visualStage}>{architectureVisual}</div> : null}
        </InternalPageSection>
      ) : null}
    </InternalPageShell>
  );
}
