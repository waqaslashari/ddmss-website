import type { ReactNode } from "react";
import type { InsightPageContent } from "@/types/internal-pages";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import styles from "../internal-pages.module.css";

type InsightPageTemplateProps = {
  content: InsightPageContent;
  diagrams?: Readonly<Record<string, ReactNode>>;
};

export function InsightPageTemplate({ content, diagrams = {} }: InsightPageTemplateProps) {
  const relatedContent = content.relatedInsights.length ? (
    <div className={styles.relationshipFlow}>
      <RelatedContent id="related-insights" marker="RELATED / INSIGHTS" title="Continue exploring the subject." items={content.relatedInsights} />
    </div>
  ) : undefined;

  return (
    <InternalPageShell family={content.family} hero={content.hero} relatedContent={relatedContent} finalCta={content.finalCta}>
      <div className={`content-container ${styles.article}`}>
        {content.sections.map((section) => (
          <section key={section.id} id={section.id} className={styles.articleSection} aria-labelledby={`${section.id}-heading`}>
            <h2 id={`${section.id}-heading`}>{section.title}</h2>
            {section.body.map((paragraph, index) => <p key={`${section.id}-${index}`}>{paragraph}</p>)}
            {section.callout ? <aside className={styles.articleCallout}>{section.callout}</aside> : null}
            {section.diagramKey && diagrams[section.diagramKey] ? <div className={styles.articleDiagram}>{diagrams[section.diagramKey]}</div> : null}
          </section>
        ))}
      </div>
    </InternalPageShell>
  );
}
