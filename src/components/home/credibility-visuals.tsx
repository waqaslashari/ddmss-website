import styles from "./credibility-section.module.css";

export type DifferentiatorKey = "business" | "physical" | "ai" | "regional";
export type ProcessKey = "understand" | "design" | "engineer" | "integrate" | "optimize";

export function DifferentiatorVisual({ type }: { type: DifferentiatorKey }) {
  if (type === "business") {
    return (
      <svg className={styles.differentiatorVisual} viewBox="0 0 240 92" aria-hidden="true">
        <g className={styles.visualMuted}>
          <circle cx="22" cy="25" r="5" /><circle cx="42" cy="46" r="5" /><circle cx="21" cy="68" r="5" />
          <path d="M27 25h28M47 46h14M26 68h29" />
        </g>
        <path className={styles.visualFlow} d="M62 46h43" />
        <path className={styles.visualArrow} d="m97 39 8 7-8 7" />
        <g className={styles.visualBase}>
          <rect x="122" y="17" width="94" height="58" />
          <path d="M136 31h48M136 45h66M136 59h38" />
        </g>
        <circle className={styles.visualStatus} cx="202" cy="31" r="3.5" />
      </svg>
    );
  }

  if (type === "physical") {
    return (
      <svg className={styles.differentiatorVisual} viewBox="0 0 240 92" aria-hidden="true">
        <g className={styles.visualBase}>
          <rect x="16" y="20" width="72" height="48" />
          <path d="M29 33h46M29 45h32M29 57h39" />
          <path d="M158 69V34l31-18 31 18v35m-62 0h62m-48 0V45h34v24" />
        </g>
        <path className={styles.visualFlow} d="M88 44h70" />
        <path className={styles.visualArrow} d="m151 37 7 7-7 7m-56 0-7-7 7-7" />
        <circle className={styles.visualStatus} cx="123" cy="44" r="4" />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg className={styles.differentiatorVisual} viewBox="0 0 240 92" aria-hidden="true">
        <g className={styles.visualMuted}>
          <circle cx="18" cy="24" r="3" /><circle cx="33" cy="45" r="3" /><circle cx="17" cy="67" r="3" />
          <path d="M21 24 70 41M36 45h34M20 67l50-20" />
        </g>
        <path className={styles.visualBase} d="m102 18 31 18v35l-31 18-31-18V36Z" />
        <text className={styles.visualText} x="92" y="58">AI</text>
        <path className={styles.visualFlow} d="M133 53h49" />
        <path className={styles.visualArrow} d="m175 46 7 7-7 7" />
        <g className={styles.visualBase}><rect x="182" y="29" width="42" height="47" /><path d="m193 53 8 8 14-19" /></g>
      </svg>
    );
  }

  return (
    <svg className={styles.differentiatorVisual} viewBox="0 0 240 92" aria-hidden="true">
      <g className={styles.visualFlow}>
        <path d="M120 46C90 20 61 19 28 26M120 46c32-25 59-24 92-13M120 46c28 19 57 24 91 18" />
      </g>
      <g className={styles.visualBase}>
        <circle cx="28" cy="26" r="8" /><circle cx="212" cy="33" r="8" /><circle cx="211" cy="64" r="8" />
      </g>
      <circle className={styles.visualStatus} cx="120" cy="46" r="10" />
      <g className={styles.regionLabels}><text x="104" y="75">OMAN</text><text x="8" y="14">REGION</text><text x="185" y="20">ME</text><text x="180" y="86">PAKISTAN</text></g>
    </svg>
  );
}

export function ProcessVisual({ type }: { type: ProcessKey }) {
  if (type === "understand") {
    return (
      <svg className={styles.processVisual} viewBox="0 0 180 104" aria-hidden="true">
        <g className={styles.visualMuted}>
          <circle cx="18" cy="22" r="4" /><circle cx="42" cy="40" r="4" /><circle cx="19" cy="67" r="4" /><circle cx="48" cy="84" r="4" />
          <path d="M22 22 89 48M46 40l43 11M23 67l66-12M52 84l37-25" />
        </g>
        <circle className={styles.visualStatus} cx="99" cy="53" r="9" />
        <path className={styles.visualFlow} d="M108 53h52" />
        <path className={styles.visualArrow} d="m153 46 7 7-7 7" />
      </svg>
    );
  }

  if (type === "design") {
    return (
      <svg className={styles.processVisual} viewBox="0 0 180 104" aria-hidden="true">
        <g className={styles.visualBase}>
          <rect x="14" y="18" width="152" height="68" />
          <path d="M14 40h152M56 18v68M112 40v46" />
          <rect x="69" y="52" width="29" height="20" />
          <rect x="124" y="52" width="28" height="20" />
        </g>
        <path className={styles.visualFlow} d="M98 62h26" />
        <circle className={styles.visualStatus} cx="56" cy="40" r="4" />
      </svg>
    );
  }

  if (type === "engineer") {
    return (
      <svg className={styles.processVisual} viewBox="0 0 180 104" aria-hidden="true">
        <g className={styles.visualBase}>
          <rect x="14" y="22" width="42" height="28" /><rect x="69" y="15" width="42" height="35" /><rect x="124" y="25" width="42" height="25" />
          <rect x="42" y="70" width="42" height="22" /><rect x="97" y="70" width="42" height="22" />
        </g>
        <path className={styles.visualFlow} d="M56 36h13m42 0h13M90 50v10M63 60v10m55-10v10M63 60h55" />
        <circle className={styles.visualStatus} cx="90" cy="60" r="4" />
      </svg>
    );
  }

  if (type === "integrate") {
    return (
      <svg className={styles.processVisual} viewBox="0 0 180 104" aria-hidden="true">
        <g className={styles.visualBase}>
          <rect x="12" y="18" width="38" height="25" /><rect x="130" y="15" width="38" height="28" />
          <rect x="15" y="72" width="38" height="22" /><rect x="127" y="70" width="41" height="24" />
          <circle cx="90" cy="55" r="19" />
        </g>
        <g className={styles.visualFlow}><path d="M50 31c19 3 23 8 29 14M130 29c-19 4-24 9-30 16M53 83c18-4 23-9 28-18M127 82c-18-4-23-9-28-17" /></g>
        <circle className={styles.visualStatus} cx="90" cy="55" r="5" />
      </svg>
    );
  }

  return (
    <svg className={styles.processVisual} viewBox="0 0 180 104" aria-hidden="true">
      <path className={styles.visualBase} d="M19 82h142M28 75l28-21 25 7 30-34 21 9 25-22" />
      <path className={styles.visualFlow} d="M28 75l28-21 25 7 30-34 21 9 25-22" />
      <g className={styles.optimizationLoop}>
        <path d="M93 18a34 34 0 1 1-25 57" />
        <path d="m62 76 6-1 1 7" />
      </g>
      <circle className={styles.visualStatus} cx="111" cy="27" r="4" />
    </svg>
  );
}
