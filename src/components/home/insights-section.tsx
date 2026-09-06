import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { insights, type Insight } from "@/content/insights";
import { InsightVisual } from "./insight-visual";
import styles from "./insights-section.module.css";

function InsightArticle({ insight, primary = false }: { insight: Insight; primary?: boolean }) {
  return (
    <article className={`${styles.article} ${primary ? styles.primaryArticle : styles.secondaryArticle}`} data-insight={insight.visual}>
      <Link
        href={insight.slug}
        prefetch={false}
        className={styles.articleLink}
        aria-label={`Read insight: ${insight.title}`}
      >
        <header className={styles.articleHeader}>
          <span className={styles.category}>{insight.category}</span>
          <h3>{insight.title}</h3>
        </header>

        <InsightVisual visual={insight.visual} />

        <div className={styles.articleBody}>
          <p>{insight.summary}</p>
          <span className={styles.readLink}>Read Insight <ArrowIcon className={styles.arrow} /></span>
        </div>
      </Link>
    </article>
  );
}

export function InsightsSection() {
  const [primary, ...secondary] = insights;

  return (
    <section id="insights" className={styles.section} aria-labelledby="insights-heading">
      <div className={styles.handoff} aria-hidden="true">
        <span>Region</span><i /><span>Ideas</span>
      </div>

      <div className="content-container">
        <header className={styles.intro}>
          <div>
            <TechnicalLabel>13 / Insights</TechnicalLabel>
            <h2 id="insights-heading">Ideas. Insights. Impact.</h2>
          </div>
          <div className={styles.introSupport}>
            <p>Perspectives on artificial intelligence, digital transformation, intelligent infrastructure and the technologies reshaping modern operations.</p>
            <Link href="/insights" prefetch={false} className={styles.sectionLink}>
              Explore All Insights <ArrowIcon className={styles.arrow} />
            </Link>
          </div>
        </header>

        <div className={styles.editorialGrid}>
          <InsightArticle insight={primary} primary />
          {secondary.map((insight) => <InsightArticle key={insight.slug} insight={insight} />)}
        </div>

        <div className={styles.sectionEnd} aria-hidden="true">
          <span>Technology Thinking</span><i /><span>Operational Perspective</span>
        </div>
      </div>
    </section>
  );
}
