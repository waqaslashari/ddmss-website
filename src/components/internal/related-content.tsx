import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import type { ContentReference } from "@/types/internal-pages";
import styles from "./internal-pages.module.css";

const familyPaths: Record<ContentReference["family"], string> = {
  capability: "capabilities",
  solution: "solutions",
  industry: "industries",
  work: "work",
  insight: "insights",
};

type RelatedContentProps = {
  id: string;
  marker?: string;
  title: string;
  items: readonly ContentReference[];
};

export function RelatedContent({
  id,
  marker = "RELATED / SYSTEMS",
  title,
  items,
}: RelatedContentProps) {
  return (
    <section className={styles.relatedSection} aria-labelledby={`${id}-heading`}>
      <div className={`content-container ${styles.relatedInner}`}>
        <header>
          <p>{marker}</p>
          <h2 id={`${id}-heading`}>{title}</h2>
        </header>
        <ul>
          {items.map((item, index) => (
            <li key={`${item.family}-${item.slug}`}>
              <Link
                href={`/${familyPaths[item.family]}/${item.slug}`}
                prefetch={false}
                aria-label={`Explore ${item.title}`}
              >
                <span className={styles.relatedIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.relatedCopy}>
                  <strong>{item.title}</strong>
                  {item.description ? <small>{item.description}</small> : null}
                </span>
                <ArrowIcon className={styles.relatedArrow} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
