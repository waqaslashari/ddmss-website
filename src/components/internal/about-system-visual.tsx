import styles from "./about-system-visual.module.css";

type VisualNodeProps = {
  x: number;
  y: number;
  width: number;
  label: string;
  sub?: string;
  active?: boolean;
};

function VisualNode({
  x,
  y,
  width,
  label,
  sub,
  active = false,
}: VisualNodeProps) {
  return (
    <g className={`${styles.node} ${active ? styles.activeNode : ""}`}>
      <rect x={x} y={y} width={width} height={sub ? 58 : 48} rx="2" />
      <text x={x + width / 2} y={y + (sub ? 24 : 29)}>{label}</text>
      {sub ? (
        <text className={styles.nodeSub} x={x + width / 2} y={y + 42}>
          {sub}
        </text>
      ) : null}
    </g>
  );
}

export function AboutHeroVisual() {
  const label =
    "DDMSS connects business transformation to software, data and AI, then to connected infrastructure and real-world operations.";

  return (
    <figure className={`${styles.figure} ${styles.heroFigure}`}>
      <svg className={`${styles.svg} ${styles.desktopSvg}`} viewBox="0 0 680 540" role="img" aria-label={label}>
        <path className={styles.grid} d="M40 36H640M40 132H640M40 228H640M40 324H640M40 420H640M88 20v500M340 20v500M592 20v500" />
        <path className={styles.flow} d="M340 88v44M340 190v38M340 310v48M340 416v32" />
        <VisualNode x={260} y={30} width={160} label="BUSINESS" sub="OBJECTIVE / OPERATION" />
        <VisualNode x={240} y={132} width={200} label="TRANSFORMATION" sub="STRATEGY / GOVERNANCE" />
        <g className={styles.core}>
          <rect x="170" y="228" width="340" height="82" rx="2" />
          <text x="340" y="258">DDMSS / DIGITAL SYSTEM</text>
          <text className={styles.coreSub} x="340" y="285">SOFTWARE · DATA · AI</text>
          <circle cx="190" cy="249" r="3" />
          <circle cx="490" cy="289" r="3" />
        </g>
        <VisualNode x={210} y={358} width={260} label="CONNECTED INFRASTRUCTURE" sub="DEVICES / ASSETS / SYSTEMS" active />
        <VisualNode x={250} y={448} width={180} label="OPERATIONS" sub="PEOPLE / WORKFLOWS" />
        <text className={styles.meta} x="48" y="510">SYSTEM / END-TO-END</text>
        <text className={styles.meta} x="505" y="510">REAL WORLD / ACTIVE</text>
      </svg>

      <svg className={`${styles.svg} ${styles.mobileSvg}`} viewBox="0 0 360 570" role="img" aria-label={label}>
        <path className={styles.grid} d="M28 28H332M28 542H332M52 16v540M180 16v540M308 16v540" />
        <path className={styles.flow} d="M180 84v38M180 180v40M180 302v40M180 400v40" />
        <VisualNode x={105} y={26} width={150} label="BUSINESS" sub="OBJECTIVE / OPERATION" />
        <VisualNode x={90} y={122} width={180} label="TRANSFORMATION" sub="STRATEGY / GOVERNANCE" />
        <g className={styles.core}>
          <rect x="58" y="220" width="244" height="82" rx="2" />
          <text x="180" y="251">DDMSS / DIGITAL SYSTEM</text>
          <text className={styles.coreSub} x="180" y="278">SOFTWARE · DATA · AI</text>
        </g>
        <VisualNode x={65} y={342} width={230} label="CONNECTED INFRASTRUCTURE" sub="DEVICES / ASSETS / SYSTEMS" active />
        <VisualNode x={95} y={440} width={170} label="OPERATIONS" sub="PEOPLE / WORKFLOWS" />
        <text className={styles.mobileMeta} x="180" y="536">END-TO-END / REAL WORLD</text>
      </svg>
      <figcaption>Business context connected to digital systems, infrastructure and operations</figcaption>
    </figure>
  );
}

export function DigitalPhysicalVisual() {
  const label =
    "A two-way integration layer connects digital software, data and AI with physical devices, infrastructure and assets.";

  return (
    <figure className={styles.figure}>
      <svg className={`${styles.svg} ${styles.desktopSvg}`} viewBox="0 0 760 440" role="img" aria-label={label}>
        <path className={styles.grid} d="M28 40H732M28 220H732M28 400H732M74 20v400M380 20v400M686 20v400" />
        <text className={styles.layerTitle} x="34" y="77">DIGITAL</text>
        <text className={styles.layerMeta} x="34" y="99">SOFTWARE / DATA / AI</text>
        <path className={styles.connection} d="M112 168v38M242 168v38M372 168v38M502 168v38M632 168v38M112 234v42M242 234v42M372 234v42M502 234v42M632 234v42" />
        <VisualNode x={56} y={120} width={112} label="SOFTWARE" />
        <VisualNode x={186} y={120} width={112} label="APPLICATIONS" />
        <VisualNode x={316} y={120} width={112} label="APIs" />
        <VisualNode x={446} y={120} width={112} label="DATA" />
        <VisualNode x={576} y={120} width={112} label="AI" />
        <g className={styles.integrationBand}>
          <rect x="56" y="206" width="632" height="28" rx="2" />
          <text x="372" y="224">INTEGRATION / BIDIRECTIONAL CONTEXT</text>
        </g>
        <VisualNode x={56} y={276} width={112} label="SENSORS" />
        <VisualNode x={186} y={276} width={112} label="GATEWAYS" />
        <VisualNode x={316} y={276} width={112} label="MOBILITY" />
        <VisualNode x={446} y={276} width={112} label="BUILDINGS" />
        <VisualNode x={576} y={276} width={112} label="ASSETS" />
        <text className={styles.layerTitle} x="34" y="371">PHYSICAL</text>
        <text className={styles.layerMeta} x="34" y="393">DEVICES / INFRASTRUCTURE / OPERATIONS</text>
      </svg>

      <svg className={`${styles.svg} ${styles.mobileSvg}`} viewBox="0 0 360 650" role="img" aria-label={label}>
        <path className={styles.grid} d="M26 28H334M26 620H334M48 16v620M180 16v620M312 16v620" />
        <text className={styles.layerTitle} x="28" y="62">DIGITAL</text>
        <text className={styles.layerMeta} x="28" y="83">SOFTWARE / DATA / AI</text>
        <VisualNode x={28} y={112} width={92} label="SOFTWARE" />
        <VisualNode x={134} y={112} width={92} label="DATA" />
        <VisualNode x={240} y={112} width={92} label="AI" />
        <path className={styles.connection} d="M74 160v86M180 160v86M286 160v86M74 278v106M180 278v106M286 278v106" />
        <g className={styles.integrationBand}>
          <rect x="28" y="246" width="304" height="32" rx="2" />
          <text x="180" y="266">INTEGRATION / TWO-WAY</text>
        </g>
        <VisualNode x={28} y={384} width={92} label="DEVICES" />
        <VisualNode x={134} y={384} width={92} label="INFRASTRUCTURE" />
        <VisualNode x={240} y={384} width={92} label="ASSETS" />
        <text className={styles.layerTitle} x="28" y="520">PHYSICAL</text>
        <text className={styles.layerMeta} x="28" y="541">DEVICES / INFRASTRUCTURE / ASSETS</text>
        <text className={styles.mobileMeta} x="180" y="601">ONE CONNECTED OPERATING ENVIRONMENT</text>
      </svg>
      <figcaption>Digital and physical layers connected through one integration architecture</figcaption>
    </figure>
  );
}

export function AboutRegionalVisual() {
  const label =
    "Oman is the central and primary DDMSS market, connected to Middle East regional markets, Pakistan and India technology and delivery ecosystems, and United Kingdom and United States market and partnership ecosystems.";

  return (
    <figure className={`${styles.figure} ${styles.regionalFigure}`}>
      <svg className={`${styles.svg} ${styles.desktopSvg}`} viewBox="0 0 760 390" role="img" aria-label={label}>
        <path className={styles.grid} d="M28 42H732M28 195H732M28 348H732M72 22v346M380 22v346M688 22v346" />
        <path className={styles.regionalPath} d="M380 195C286 112 226 102 144 91M380 195C486 108 547 100 622 91M380 195C280 273 220 286 144 299M380 195C483 276 544 286 622 299" />
        <g className={styles.omanNode}>
          <circle cx="380" cy="195" r="42" />
          <circle cx="380" cy="195" r="8" />
          <text x="380" y="188">OMAN</text>
          <text className={styles.nodeSub} x="380" y="210">BASE / PRIMARY</text>
        </g>
        <VisualNode x={72} y={62} width={144} label="MIDDLE EAST" sub="REGIONAL MARKETS" />
        <VisualNode x={544} y={62} width={156} label="PAKISTAN / INDIA" sub="TECHNOLOGY / DELIVERY" />
        <VisualNode x={54} y={270} width={180} label="UNITED KINGDOM" sub="MARKET / PARTNERSHIP" />
        <VisualNode x={544} y={270} width={156} label="UNITED STATES" sub="MARKET / PARTNERSHIP" />
        <text className={styles.meta} x="314" y="366">REGIONAL CONNECTION / CONTEXT</text>
      </svg>

      <svg className={`${styles.svg} ${styles.mobileSvg}`} viewBox="0 0 360 580" role="img" aria-label={label}>
        <path className={styles.grid} d="M26 28H334M26 550H334M48 16v548M180 16v548M312 16v548" />
        <path className={styles.regionalPath} d="M180 132v50M180 252v46M180 368v46" />
        <VisualNode x={88} y={52} width={184} label="MIDDLE EAST" sub="REGIONAL MARKETS" />
        <g className={styles.omanNode}>
          <circle cx="180" cy="217" r="36" />
          <circle cx="180" cy="217" r="7" />
          <text x="180" y="211">OMAN</text>
          <text className={styles.nodeSub} x="180" y="231">BASE / PRIMARY</text>
        </g>
        <VisualNode x={76} y={298} width={208} label="PAKISTAN / INDIA" sub="TECHNOLOGY / DELIVERY" />
        <VisualNode x={56} y={414} width={248} label="UK / UNITED STATES" sub="MARKET / PARTNERSHIP ECOSYSTEM" />
        <text className={styles.mobileMeta} x="180" y="532">OMAN / CONNECTED BEYOND</text>
      </svg>
      <figcaption>Oman-based regional and international technology connections</figcaption>
    </figure>
  );
}
