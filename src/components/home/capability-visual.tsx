import Image from "next/image";

import styles from "./capabilities-section.module.css";

export type CapabilityKey =
  | "transformation"
  | "intelligence"
  | "software"
  | "connected"
  | "digitalTwin";

type CapabilityVisualProps = {
  capability: CapabilityKey;
};

const Node = ({ cx, cy, active = false }: { cx: number; cy: number; active?: boolean }) => (
  <circle cx={cx} cy={cy} r="3" className={active ? styles.svgNodeActive : styles.svgNode} />
);

function TransformationVisual() {
  return (
    <svg viewBox="0 0 360 190" className={styles.visualSvg} aria-hidden="true">
      <path className={styles.svgGrid} d="M25 155H335M45 30v135M110 30v135M175 30v135M240 30v135M305 30v135" />
      <path className={styles.svgPath} d="M43 62h52l30 34h52l29-37h62l29 35h30" />
      <path className={styles.svgPathMuted} d="M43 130h63l23-23h68l28 25h82" />
      <g className={styles.svgSurface}>
        <rect x="27" y="47" width="52" height="31" rx="3" />
        <rect x="105" y="81" width="56" height="31" rx="3" />
        <rect x="190" y="43" width="55" height="31" rx="3" />
        <rect x="270" y="79" width="62" height="31" rx="3" />
      </g>
      <path className={styles.svgAccent} d="M27 47h52M105 81h56M190 43h55M270 79h62" />
      <path className={styles.svgActivePath} d="M43 62h52l30 34h52l29-37h62l29 35h30" />
      <Node cx={43} cy={62} /><Node cx={125} cy={96} active /><Node cx={206} cy={59} active />
      <Node cx={297} cy={94} active /><Node cx={327} cy={94} />
      <text x="28" y="24" className={styles.svgMeta}>OPERATING MODEL / STRUCTURED</text>
      <text x="28" y="177" className={styles.svgMeta}>ROADMAP  01 — 04</text>
    </svg>
  );
}

function IntelligenceVisual() {
  return (
    <svg viewBox="0 0 360 190" className={styles.visualSvg} aria-hidden="true">
      <path className={styles.svgGrid} d="M22 155H338M52 34v128M116 34v128M180 34v128M244 34v128M308 34v128" />
      <path className={styles.svgPathMuted} d="M35 64h62l38 30M35 121h62l38-27M225 94l45-43h55M225 94l45 43h55" />
      <path className={styles.svgActivePath} d="M35 64h62l38 30h90l45-43h55M225 94l45 43h55" />
      <g className={styles.svgCore}>
        <path d="M149 67h62l23 27-23 27h-62l-23-27z" />
        <circle cx="180" cy="94" r="12" />
      </g>
      <path className={styles.svgViolet} d="M277 51l13-13 13 13-13 13zM277 137l13-13 13 13-13 13z" />
      <path className={styles.svgAnalytics} d="M42 145c21-7 28-23 47-22 18 1 25 15 43 9 19-7 23-31 43-31 17 0 23 19 41 17" />
      <Node cx={35} cy={64} /><Node cx={35} cy={121} /><Node cx={97} cy={64} active />
      <Node cx={97} cy={121} active /><Node cx={325} cy={51} /><Node cx={325} cy={137} />
      <text x="24" y="24" className={styles.svgMeta}>DATA / DECISION STREAM</text>
      <text x="161" y="98" className={styles.svgCoreText}>AI</text>
    </svg>
  );
}

function SoftwareVisual() {
  return (
    <svg viewBox="0 0 360 190" className={styles.visualSvg} aria-hidden="true">
      <path className={styles.svgGrid} d="M25 157H335M45 30v135M110 30v135M175 30v135M240 30v135M305 30v135" />
      <g className={styles.svgSurface}>
        <rect x="36" y="42" width="132" height="91" rx="4" />
        <rect x="193" y="57" width="130" height="91" rx="4" />
        <rect x="103" y="113" width="151" height="42" rx="4" />
      </g>
      <path className={styles.svgAccent} d="M36 61h132M193 76h130M103 131h151" />
      <path className={styles.svgPath} d="M168 87h25M178 82l5 5-5 5M254 116h37V94" />
      <g className={styles.svgModule}>
        <rect x="51" y="76" width="40" height="38" rx="2" />
        <rect x="101" y="76" width="51" height="13" rx="2" />
        <rect x="101" y="99" width="38" height="15" rx="2" />
        <rect x="208" y="91" width="34" height="34" rx="2" />
        <rect x="252" y="91" width="54" height="10" rx="2" />
      </g>
      <Node cx={36} cy={51} active /><Node cx={193} cy={66} active /><Node cx={103} cy={122} />
      <text x="25" y="24" className={styles.svgMeta}>PRODUCT ARCHITECTURE / API</text>
      <text x="118" y="148" className={styles.svgMeta}>INTEGRATION BUS</text>
    </svg>
  );
}

function ConnectedVisual() {
  return (
    <svg viewBox="0 0 360 190" className={styles.visualSvg} aria-hidden="true">
      <path className={styles.svgGrid} d="M26 157H334M44 31v135M108 31v135M172 31v135M236 31v135M300 31v135" />
      <path className={styles.svgPathMuted} d="M47 121h57l33-31h59l34 31h76M168 90V50h91" />
      <path className={styles.svgActivePath} d="M47 121h57l33-31h59l34 31h76" />
      <g className={styles.svgSurface}>
        <path d="M30 89h58v52H30zM40 76h38v13H40z" />
        <path d="M259 69h58v72h-58zM270 56h36v13h-36z" />
        <path d="M137 69h59v42h-59z" />
      </g>
      <path className={styles.svgAccent} d="M30 89h58M259 69h58M137 69h59" />
      <g className={styles.svgSignal}>
        <path d="M151 62c8-8 22-8 30 0M156 67c5-5 15-5 20 0" />
        <circle cx="166" cy="73" r="2.5" />
      </g>
      <g className={styles.svgStatus}>
        <circle cx="47" cy="121" r="4" /><circle cx="306" cy="121" r="4" />
      </g>
      <Node cx={104} cy={121} /><Node cx={137} cy={90} active /><Node cx={196} cy={90} active /><Node cx={230} cy={121} />
      <text x="26" y="24" className={styles.svgMeta}>EDGE NETWORK / LIVE</text>
      <text x="145" y="96" className={styles.svgCoreText}>GATEWAY</text>
    </svg>
  );
}

function DigitalTwinVisual() {
  return (
    <figure className={styles.twinComposition}>
      <div className={`${styles.twinAssetGroup} ${styles.physicalImageGroup}`}>
        <div className={styles.assetCaption}>
          <span>Physical Asset</span>
          <small>Live / Operational</small>
        </div>
        <div className={styles.assetImagePlane}>
          <Image
            src="/visuals/industrial-asset.png"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) calc(100vw - 80px), 22vw"
            alt="Industrial facility representing a live physical asset."
            className={styles.physicalImage}
          />
        </div>
      </div>

      <div className={styles.telemetry} aria-hidden="true">
        <span className={styles.telemetryHtmlLabel}>Live Data</span>
        <svg viewBox="0 0 160 210" className={styles.desktopTelemetry}>
          <path className={styles.telemetryPath} d="M4 68h142M4 104h142M4 140h142" />
          <path className={styles.telemetryActive} d="M4 68h142M4 104h142M4 140h142" />
          <path className={styles.telemetryArrow} d="m137 62 9 6-9 6M137 98l9 6-9 6M137 134l9 6-9 6" />
          <circle cx="48" cy="68" r="3" className={styles.telemetryPulse} />
          <circle cx="83" cy="104" r="3" className={styles.telemetryPulseViolet} />
          <circle cx="114" cy="140" r="3" className={styles.telemetryPulse} />
        </svg>
        <svg viewBox="0 0 320 86" className={styles.mobileTelemetry}>
          <path className={styles.telemetryPath} d="M130 4v70M160 4v70M190 4v70" />
          <path className={styles.telemetryActive} d="M130 4v70M160 4v70M190 4v70" />
          <path className={styles.telemetryArrow} d="m124 65 6 9 6-9M154 65l6 9 6-9M184 65l6 9 6-9" />
          <circle cx="130" cy="31" r="3" className={styles.telemetryPulse} />
          <circle cx="160" cy="45" r="3" className={styles.telemetryPulseViolet} />
          <circle cx="190" cy="23" r="3" className={styles.telemetryPulse} />
        </svg>
      </div>

      <div className={`${styles.twinAssetGroup} ${styles.digitalImageGroup}`}>
        <div className={styles.assetCaption}>
          <span>Digital Twin</span>
          <small>Synchronized / Intelligent</small>
        </div>
        <div className={styles.assetImagePlane}>
          <Image
            src="/visuals/industrial-twin.png"
            width={1536}
            height={1024}
            sizes="(max-width: 768px) calc(100vw - 80px), 25vw"
            alt="Digital twin of the industrial facility with synchronized sensor and operational data."
            className={styles.digitalTwinImage}
          />
        </div>
      </div>

      <dl className={styles.twinMetrics}>
        <div><dt>Demo telemetry</dt><dd className={styles.liveStatus}>Live</dd></div>
        <div><dt>Sync</dt><dd>99.8%</dd></div>
        <div><dt>Asset Health</dt><dd>94%</dd></div>
        <div><dt>Predictive Risk</dt><dd className={styles.liveStatus}>Low</dd></div>
      </dl>

      <figcaption className={styles.srOnly}>
        A live industrial facility sends operational telemetry to a synchronized digital twin for monitoring and predictive intelligence.
      </figcaption>
    </figure>
  );
}

export function CapabilityVisual({ capability }: CapabilityVisualProps) {
  const visual = {
    transformation: <TransformationVisual />,
    intelligence: <IntelligenceVisual />,
    software: <SoftwareVisual />,
    connected: <ConnectedVisual />,
    digitalTwin: <DigitalTwinVisual />,
  }[capability];

  return <div className={`${styles.visual} ${styles[`${capability}Visual`]}`}>{visual}</div>;
}
