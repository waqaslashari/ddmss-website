import { PrimaryButton } from "@/components/ui/primary-button";
import { TechnicalLabel } from "@/components/ui/technical-label";
import styles from "./final-cta-section.module.css";

export function FinalCTASection() {
  return (
    <section
      id="start-a-conversation"
      className={styles.section}
      aria-labelledby="final-cta-heading"
    >
      <div className={styles.handoff} aria-hidden="true">
        <span>Ideas</span>
        <i />
        <span>Action</span>
      </div>

      <svg
        className={styles.network}
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g className={styles.referenceLines}>
          <path d="M0 118h314M1126 118h314M0 642h354M1086 642h354" />
          <path d="M96 0v206M1344 0v206M156 554v206M1284 554v206" />
        </g>
        <g className={styles.meshLines}>
          <path d="M0 282 94 224l108 42 102-96 124 38" />
          <path d="M0 470 112 406l96 48 116-86 98 42" />
          <path d="m1440 264-102-54-98 52-116-88-110 48" />
          <path d="m1440 486-112-62-96 42-118-82-104 46" />
          <path d="M304 170 438 306M324 368l120 112M1136 174l-138 132M1114 384l-120 102" />
        </g>
        <g className={styles.nodes}>
          <circle cx="94" cy="224" r="4" />
          <circle cx="202" cy="266" r="3" />
          <circle cx="304" cy="170" r="5" />
          <circle cx="112" cy="406" r="4" />
          <circle cx="324" cy="368" r="5" />
          <circle cx="1338" cy="210" r="4" />
          <circle cx="1240" cy="262" r="3" />
          <circle cx="1124" cy="174" r="5" />
          <circle cx="1328" cy="424" r="4" />
          <circle cx="1114" cy="384" r="5" />
        </g>
        <g className={styles.activeTraces}>
          <path d="M0 282 94 224l108 42 102-96" />
          <path d="m1440 486-112-62-96 42-118-82" />
        </g>
      </svg>

      <div className={`content-container ${styles.inner}`}>
        <TechnicalLabel className={styles.marker}>
          14 / Start a Conversation
        </TechnicalLabel>
        <h2 id="final-cta-heading">
          <span>What Could Your</span>
          <span className={styles.gradientLine}>Business Become?</span>
        </h2>
        <p>
          Let&apos;s build intelligent digital systems that create real operational
          impact.
        </p>
        <PrimaryButton href="/contact" className={styles.cta}>
          Let&apos;s Build It
        </PrimaryButton>
      </div>

      <div className={styles.systemLine} aria-hidden="true">
        <span>Intent / Defined</span>
        <i />
        <span>System / Ready</span>
      </div>
    </section>
  );
}
