import styles from "./operating-model-section.module.css";

export type OperatingPillarKey =
  | "transform"
  | "build"
  | "connect"
  | "optimize";

export function OperatingModelVisual({
  pillar,
}: {
  pillar: OperatingPillarKey;
}) {
  if (pillar === "transform") {
    return (
      <svg className={styles.pillarVisual} viewBox="0 0 240 150" aria-hidden="true">
        <path className={styles.visualGrid} d="M8 24H232M8 75H232M8 126H232M42 8V142M120 8V142M198 8V142" />
        <g className={styles.visualMuted}>
          <rect x="17" y="38" width="31" height="20" />
          <rect x="20" y="91" width="25" height="18" />
          <path d="M49 48h24l13 18M45 100h31l10-16" />
          <circle cx="86" cy="66" r="3" />
          <circle cx="86" cy="84" r="3" />
        </g>
        <path className={styles.visualActive} d="M92 75h42" />
        <path className={styles.visualAccent} d="m126 68 8 7-8 7" />
        <g className={styles.visualBase}>
          <rect x="151" y="28" width="68" height="24" />
          <rect x="151" y="63" width="68" height="24" />
          <rect x="151" y="98" width="68" height="24" />
          <path d="M162 40h33M162 75h43M162 110h28" />
        </g>
        <circle className={styles.visualStatus} cx="211" cy="40" r="3" />
        <circle className={styles.visualStatus} cx="211" cy="75" r="3" />
        <circle className={styles.visualStatus} cx="211" cy="110" r="3" />
      </svg>
    );
  }

  if (pillar === "build") {
    return (
      <svg className={styles.pillarVisual} viewBox="0 0 240 150" aria-hidden="true">
        <path className={styles.visualGrid} d="M12 30H228M12 120H228M38 12V138M120 12V138M202 12V138" />
        <g className={styles.visualBase}>
          <rect x="22" y="30" width="56" height="38" />
          <rect x="92" y="21" width="56" height="47" />
          <rect x="162" y="36" width="56" height="32" />
          <rect x="52" y="92" width="58" height="30" />
          <rect x="132" y="92" width="58" height="30" />
        </g>
        <g className={styles.visualMuted}>
          <path d="M32 42h35M32 52h23M102 34h35M102 45h27M172 48h34M62 104h37M142 104h37" />
        </g>
        <path className={styles.visualActive} d="M78 49h14M148 49h14M120 68v13M81 81v11M161 81v11M81 81h80" />
        <circle className={styles.visualStatus} cx="120" cy="81" r="3" />
        <path className={styles.visualAccent} d="M106 132h28" />
      </svg>
    );
  }

  if (pillar === "connect") {
    return (
      <svg className={styles.pillarVisual} viewBox="0 0 240 150" aria-hidden="true">
        <path className={styles.visualGrid} d="M12 75H228M120 10V140" />
        <g className={styles.visualBase}>
          <path d="M25 43h43v31H25zM172 30h43v35h-43zM24 103l23-14 23 14v25H24zM174 96h42v31h-42z" />
          <path d="M35 53h23M182 41h23M182 51h15M34 109h26M184 106h22M184 116h15" />
        </g>
        <g className={styles.visualActive}>
          <path d="M68 58c25 2 31 7 43 23M172 48c-25 4-34 12-44 32M70 111c24-5 32-11 42-28M174 111c-25-5-35-12-46-29" />
          <circle cx="120" cy="81" r="18" />
        </g>
        <path className={styles.visualAccent} d="m120 69 11 6v12l-11 6-11-6V75Z" />
        <circle className={styles.visualStatus} cx="120" cy="81" r="3" />
        <circle className={styles.visualStatus} cx="68" cy="58" r="2.5" />
        <circle className={styles.visualStatus} cx="172" cy="48" r="2.5" />
        <circle className={styles.visualStatus} cx="70" cy="111" r="2.5" />
        <circle className={styles.visualStatus} cx="174" cy="111" r="2.5" />
      </svg>
    );
  }

  return (
    <svg className={styles.pillarVisual} viewBox="0 0 240 150" aria-hidden="true">
      <path className={styles.visualGrid} d="M16 25H224M16 75H224M16 125H224M46 10V140M120 10V140M194 10V140" />
      <path className={styles.visualMuted} d="M24 114 65 93l35 8 39-42 32 12 43-42" />
      <path className={styles.visualActive} d="M24 114 65 93l35 8 39-42 32 12 43-42" />
      <path className={styles.visualBase} d="M25 124h190M44 124V96M82 124V84M120 124V91M158 124V61M196 124V43" />
      <circle className={styles.visualStatus} cx="139" cy="59" r="3" />
      <circle className={styles.visualStatus} cx="214" cy="29" r="3" />
      <g className={styles.feedbackLoop}>
        <path d="M77 53a31 31 0 1 1-3 32" />
        <path d="m69 88 5-3 3 6" />
      </g>
      <text x="108" y="57" className={styles.aiLabel}>AI</text>
    </svg>
  );
}
