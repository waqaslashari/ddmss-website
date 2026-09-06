import styles from "./internal-pages.module.css";

const nodes = [
  { x: 94, y: 198, label: "OBJECTIVE", active: false },
  { x: 226, y: 146, label: "GOVERNANCE", active: true },
  { x: 374, y: 146, label: "ARCHITECTURE", active: true },
  { x: 506, y: 94, label: "ROADMAP", active: false },
] as const;

export function TransformationGovernanceVisual() {
  return (
    <figure className={styles.transformationVisual}>
      <svg
        viewBox="0 0 600 430"
        role="img"
        aria-labelledby="transformation-visual-title transformation-visual-description"
      >
        <title id="transformation-visual-title">
          Digital transformation governance system
        </title>
        <desc id="transformation-visual-description">
          Business objectives flow through governance and enterprise architecture
          into a sequenced technology roadmap.
        </desc>
        <defs>
          <linearGradient id="transformation-active-line" x1="80" y1="215" x2="520" y2="80">
            <stop stopColor="#27d7ff" stopOpacity="0.82" />
            <stop offset="0.62" stopColor="#397bff" stopOpacity="0.72" />
            <stop offset="1" stopColor="#9b6cff" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="transformation-core-light">
            <stop stopColor="#27d7ff" stopOpacity="0.16" />
            <stop offset="1" stopColor="#27d7ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className={styles.transformationGrid}>
          <path d="M38 62h524M38 126h524M38 190h524M38 254h524M38 318h524M38 382h524" />
          <path d="M74 34v364M150 34v364M226 34v364M302 34v364M378 34v364M454 34v364M530 34v364" />
        </g>

        <path className={styles.transformationPlane} d="m54 285 247-118 246 118-247 113z" />
        <path className={styles.transformationReference} d="M94 198 226 146h148l132-52" />
        <path className={styles.transformationReference} d="M94 198 226 250h148l132-52" />
        <path className={styles.transformationActiveLine} d="M94 198 226 146h148l132-52" />
        <path className={styles.transformationArrow} d="m492 86 14 8-10 12" />

        <circle className={styles.transformationCoreLight} cx="300" cy="198" r="92" />
        <g className={styles.transformationCore}>
          <path d="m300 152 60 34v69l-60 34-60-34v-69z" />
          <path d="m300 166 45 26v51l-45 26-45-26v-51z" />
          <circle cx="300" cy="217" r="12" />
          <text x="300" y="213">TARGET</text>
          <text x="300" y="230">STATE</text>
        </g>

        <g className={styles.transformationNodes}>
          {nodes.map((node, index) => (
            <g key={node.label}>
              <rect
                x={node.x - 8}
                y={node.y - 8}
                width="16"
                height="16"
                className={node.active ? styles.transformationNodeActive : undefined}
                transform={`rotate(45 ${node.x} ${node.y})`}
              />
              <text x={node.x} y={node.y + (index % 2 === 0 ? 32 : -22)}>
                {node.label}
              </text>
            </g>
          ))}
        </g>

        <g className={styles.transformationMeta}>
          <text x="40" y="24">SYSTEM / TRANSFORMATION GOVERNANCE</text>
          <text x="405" y="416">MODEL / STRUCTURED 01—04</text>
          <text x="46" y="357">BUSINESS</text>
          <text x="46" y="371">PRIORITIES</text>
          <text x="490" y="342">ENGINEERED</text>
          <text x="490" y="356">DELIVERY</text>
        </g>
      </svg>
      <figcaption>
        Objective → governance → architecture → sequenced delivery roadmap
      </figcaption>
    </figure>
  );
}
