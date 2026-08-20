import Link from "next/link";

import { featuredWork, type FeaturedWork } from "@/content/featured-work";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { FeaturedWorkVisual } from "./featured-work-visual";
import styles from "./featured-work-section.module.css";

function ProjectArchitecture({ work }: { work: FeaturedWork }) {
  return (
    <ol className={styles.architecture} aria-label={`${work.title} system architecture`}>
      {work.architecture.map((item) => <li key={item}>{item}</li>)}
    </ol>
  );
}

function WorkProject({ work, featured = false }: { work: FeaturedWork; featured?: boolean }) {
  return (
    <article className={`${styles.project} ${featured ? styles.featuredProject : styles.secondaryProject}`} data-work={work.key}>
      <Link
        href={`/work/${work.slug}`}
        prefetch={false}
        className={styles.projectLink}
        aria-label={`View project: ${work.title}`}
      >
        <FeaturedWorkVisual work={work} />

        <div className={styles.projectContent}>
          <span className={styles.projectIndex}>{work.number} / {work.indexLabel}</span>
          <h3>{work.title}</h3>
          <ProjectArchitecture work={work} />
          <p>{work.description}</p>
          <ul className={styles.technologies} aria-label={`${work.title} technologies`}>
            {work.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <span className={styles.viewProject}>View Project <ArrowIcon className={styles.arrow} /></span>
        </div>

        <span className={styles.cornerTop} aria-hidden="true" />
        <span className={styles.cornerBottom} aria-hidden="true" />
      </Link>
    </article>
  );
}

export function FeaturedWorkSection() {
  const [featured, ...secondary] = featuredWork;

  return (
    <section className={styles.section} aria-labelledby="featured-work-heading">
      <div className={styles.handoff} aria-hidden="true">
        <span>Method</span><i /><span>System</span>
      </div>

      <div className="content-container">
        <header className={styles.intro}>
          <div>
            <TechnicalLabel>11 / Featured Work</TechnicalLabel>
            <h2 id="featured-work-heading">Systems Built Around Real Operations.</h2>
          </div>
          <div className={styles.introSupport}>
            <p>Selected platforms and technology systems demonstrating how software, data, connected infrastructure and intelligence come together.</p>
            <Link href="/work" prefetch={false} className={styles.sectionLink}>
              Explore All Work <ArrowIcon className={styles.arrow} />
            </Link>
          </div>
        </header>

        <div className={styles.workComposition}>
          <WorkProject work={featured} featured />
          {secondary.map((work) => <WorkProject key={work.key} work={work} />)}
        </div>

        <div className={styles.sectionEnd} aria-hidden="true">
          <span>Selected Systems</span><i /><span>Operating Context</span>
        </div>
      </div>
    </section>
  );
}
