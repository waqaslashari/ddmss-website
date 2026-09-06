import { InsightEditorialDiagram } from "../insight-editorial-visual";
import type { InsightPageContent } from "@/types/internal-pages";
import { InternalPageShell } from "../internal-page-shell";
import { RelatedContent } from "../related-content";
import styles from "../internal-pages.module.css";
import articleStyles from "../insight-article.module.css";

export function InsightPageTemplate({ content }: { content: InsightPageContent }) {
  const expertise = [
    ...content.relatedCapabilities,
    ...content.relatedSolutions,
    ...content.relatedWork,
  ];
  const relatedContent = (
    <div className={styles.relationshipFlow}>
      {content.relatedInsights.length ? (
        <RelatedContent id="related-insights" marker="RELATED / INSIGHTS" title="Continue exploring the subject." items={content.relatedInsights} />
      ) : null}
      {expertise.length ? (
        <RelatedContent id="related-expertise" marker="RELATED / DDMSS EXPERTISE" title="Explore the implementation context." items={expertise} />
      ) : null}
    </div>
  );

  return (
    <InternalPageShell family={content.family} hero={content.hero} relatedContent={relatedContent} finalCta={content.finalCta}>
      <div className={`content-container ${styles.article} ${articleStyles.articleBody}`}>
        {content.sections.map((section, sectionIndex) => (
          <section key={section.id} id={section.id} className={`${styles.articleSection} ${sectionIndex === 0 ? articleStyles.openingSection : ""}`} aria-labelledby={`${section.id}-heading`}>
            <h2 id={`${section.id}-heading`}>{section.title}</h2>
            {section.body.map((paragraph, index) => <p key={`${section.id}-${index}`}>{paragraph}</p>)}
            {section.list ? (
              section.list.style === "ordered" ? (
                <ol className={articleStyles.articleList}>
                  {section.list.items.map((item) => <li key={item}>{item}</li>)}
                </ol>
              ) : (
                <ul className={articleStyles.articleList}>
                  {section.list.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )
            ) : null}
            {section.callout ? (
              <aside className={`${styles.articleCallout} ${articleStyles.callout}`}>
                <span>{section.callout.label}</span>
                <p>{section.callout.text}</p>
              </aside>
            ) : null}
            {section.diagramKey ? (
              <div className={styles.articleDiagram}>
                <InsightEditorialDiagram diagram={section.diagramKey} />
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </InternalPageShell>
  );
}
