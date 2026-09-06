import Link from "next/link";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import type { InternalIndexContent } from "@/types/internal-pages";
import { InternalPageShell } from "./internal-page-shell";
import styles from "./internal-pages.module.css";

/**
 * Shared index-page architecture. Route-specific index pages can supply local,
 * typed content without introducing a client-side filtering dependency.
 */
export function InternalIndex({ content }: { content: InternalIndexContent }) {
  return (
    <InternalPageShell
      family={content.family}
      hero={content.hero}
      finalCta={content.finalCta}
    >
      <section className={styles.indexSection} aria-label={`${content.family} directory`}>
        <div className="content-container">
          <ol className={styles.indexList}>
            {content.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} prefetch={false}>
                  <span className={styles.indexNumber}>{item.number}</span>
                  <span className={styles.indexCopy}>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                    {item.tags?.length ? (
                      <span className={styles.indexTags}>{item.tags.join(" · ")}</span>
                    ) : null}
                  </span>
                  <ArrowIcon className={styles.indexArrow} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </InternalPageShell>
  );
}
