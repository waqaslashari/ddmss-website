import Image from "next/image";
import type { ReactNode } from "react";
import type { CapabilityVisualKey } from "@/types/content";
import styles from "./capability-system-visual.module.css";

type DiagramNodeProps = {
  x: number;
  y: number;
  width: number;
  label: string;
  meta?: string;
  active?: boolean;
};

function DiagramNode({ x, y, width, label, meta, active = false }: DiagramNodeProps) {
  return (
    <g className={active ? styles.nodeActive : styles.node}>
      <rect x={x} y={y} width={width} height="54" rx="2" />
      <circle cx={x + 15} cy={y + 17} r="3" />
      <text x={x + 26} y={y + 21}>{label}</text>
      {meta ? <text className={styles.nodeMeta} x={x + 15} y={y + 40}>{meta}</text> : null}
    </g>
  );
}

function DiagramFrame({ children, title, description, id }: { children: ReactNode; title: string; description: string; id: string }) {
  return (
    <figure className={styles.diagram} data-diagram={id}>
      <svg viewBox="0 0 620 400" role="img" aria-labelledby={`${id}-title ${id}-description`}>
        <title id={`${id}-title`}>{title}</title>
        <desc id={`${id}-description`}>{description}</desc>
        <defs>
          <linearGradient id={`${id}-flow`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#27d7ff" />
            <stop offset="0.62" stopColor="#397bff" />
            <stop offset="1" stopColor="#9b6cff" />
          </linearGradient>
          <pattern id={`${id}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" className={styles.gridLine} />
          </pattern>
          <marker id={`${id}-arrow`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 8 4 0 8Z" className={styles.arrowHead} />
          </marker>
        </defs>
        <rect width="620" height="400" fill={`url(#${id}-grid)`} opacity="0.55" />
        <path d="M24 34H118M502 366h94" className={styles.referenceLine} />
        <text x="24" y="25" className={styles.referenceText}>SYSTEM / CAPABILITY</text>
        <text x="500" y="388" className={styles.referenceText}>DDMSS / CONTROLLED</text>
        {children}
      </svg>
    </figure>
  );
}

function IntelligenceVisual() {
  return (
    <DiagramFrame id="intelligence-system" title="Governed AI and data operating flow" description="Enterprise and operational data moves through governance into AI and analytics, decision support and controlled action with human oversight.">
      <path d="M310 89V105M310 159V190M310 244V275M310 329V350" className={styles.activeFlow} markerEnd="url(#intelligence-system-arrow)" />
      <DiagramNode x={220} y={35} width={180} label="DATA" meta="ENTERPRISE / OPERATIONAL" />
      <DiagramNode x={220} y={105} width={180} label="GOVERNANCE" meta="QUALITY / ACCESS / CONTROL" />
      <DiagramNode x={220} y={190} width={180} label="AI / ANALYTICS" meta="MODEL / INTERPRETATION" active />
      <DiagramNode x={220} y={275} width={180} label="DECISION" meta="CONTEXT / HUMAN REVIEW" />
      <path d="M220 128H135V206H220M400 215H490V302H400" className={styles.secondaryFlow} />
      <text x="58" y="119" className={styles.calloutText}>DATA QUALITY</text>
      <text x="58" y="135" className={styles.calloutMeta}>TRUST / TRACEABILITY</text>
      <text x="454" y="198" className={styles.calloutText}>OVERSIGHT</text>
      <text x="454" y="214" className={styles.calloutMeta}>ACCOUNTABLE</text>
      <text x="310" y="376" className={styles.outputText}>ACTION / CONTROLLED AUTOMATION</text>
    </DiagramFrame>
  );
}

function SoftwareVisual() {
  return (
    <DiagramFrame id="software-system" title="Software product architecture" description="Users connect to an application that exchanges information through APIs with platforms and governed data services.">
      <path d="M114 219H178M302 219H334M438 219H470" className={styles.activeFlow} markerEnd="url(#software-system-arrow)" />
      <path d="M270 141V188" className={styles.activeFlow} markerEnd="url(#software-system-arrow)" />
      <DiagramNode x={42} y={192} width={72} label="USER" />
      <DiagramNode x={178} y={192} width={124} label="APPLICATION" meta="WEB / MOBILE" active />
      <DiagramNode x={334} y={192} width={104} label="API" meta="SECURE / INTEGRATED" />
      <DiagramNode x={470} y={192} width={108} label="DATA" meta="TRUSTED / AVAILABLE" />
      <DiagramNode x={208} y={87} width={124} label="PLATFORM" meta="WORKFLOW / SERVICES" />
      <path d="M178 252H86V304H494V252" className={styles.secondaryFlow} />
      <text x="86" y="328" className={styles.calloutText}>PRODUCT ARCHITECTURE</text>
      <text x="86" y="346" className={styles.calloutMeta}>USABLE · MAINTAINABLE · CONNECTED</text>
    </DiagramFrame>
  );
}

function ConnectedVisual() {
  return (
    <DiagramFrame id="connected-system" title="Connected infrastructure operating flow" description="A physical asset connects through sensors, edge processing and a digital platform to operational intelligence.">
      <path d="M118 300 205 250 305 208 405 154 500 103" className={styles.activeFlow} markerEnd="url(#connected-system-arrow)" />
      <g className={styles.assetSymbol} transform="translate(55 250)">
        <path d="M0 58V20l28 14V8l28 15v35Z" />
        <path d="M13 58V43h12v15M39 58V38h10v20" />
      </g>
      <circle cx="205" cy="250" r="18" className={styles.sensorNode} />
      <circle cx="205" cy="250" r="5" className={styles.sensorCore} />
      <DiagramNode x={254} y={181} width={102} label="EDGE" meta="LOCAL / CONTROL" />
      <DiagramNode x={368} y={127} width={112} label="PLATFORM" meta="CONNECTED / LIVE" />
      <DiagramNode x={470} y={76} width={118} label="INTELLIGENCE" meta="MONITOR / ACT" active />
      <text x="50" y="337" className={styles.calloutText}>PHYSICAL ASSET</text>
      <text x="50" y="355" className={styles.calloutMeta}>OPERATIONAL / REAL WORLD</text>
      <text x="172" y="288" className={styles.calloutText}>SENSOR</text>
      <path d="M82 242V157H210" className={styles.secondaryFlow} />
      <text x="54" y="143" className={styles.calloutText}>DEVICE NETWORK</text>
      <text x="54" y="159" className={styles.calloutMeta}>STATUS / CONNECTED</text>
    </DiagramFrame>
  );
}

function DigitalTwinVisual() {
  return (
    <figure className={`${styles.diagram} ${styles.twinDiagram}`}>
      <div className={styles.twinStage}>
        <div className={styles.twinAsset}>
          <p>PHYSICAL</p>
          <span>ASSET / OPERATIONAL</span>
          <Image src="/visuals/industrial-asset.png" alt="Industrial facility representing a physical operational asset." width={768} height={512} sizes="(max-width: 768px) 82vw, 28vw" loading="eager" />
        </div>
        <div className={styles.twinConnection} aria-hidden="true">
          <span>TELEMETRY</span>
          <i />
          <b>LIVE DATA</b>
        </div>
        <div className={styles.twinAsset}>
          <p>DIGITAL TWIN</p>
          <span>SYNCHRONIZED / INTELLIGENT</span>
          <Image src="/visuals/industrial-twin.png" alt="Synchronized digital representation of the industrial facility with operational information overlays." width={768} height={512} sizes="(max-width: 768px) 82vw, 28vw" loading="eager" />
        </div>
      </div>
      <div className={styles.twinOutcome}>
        <span>PHYSICAL</span><i>→</i><span>TELEMETRY</span><i>→</i><span>DIGITAL TWIN</span><i>→</i><span>INTELLIGENCE</span><i>→</i><span>ACTION</span>
      </div>
      <figcaption>Operational relationship / explanatory system view</figcaption>
    </figure>
  );
}

export function CapabilitySystemVisual({ capability }: { capability: CapabilityVisualKey }) {
  if (capability === "intelligence") return <IntelligenceVisual />;
  if (capability === "software") return <SoftwareVisual />;
  if (capability === "connected") return <ConnectedVisual />;
  if (capability === "digitalTwin") return <DigitalTwinVisual />;
  return null;
}

const indexFlows: Record<CapabilityVisualKey, readonly string[]> = {
  transformation: ["STRATEGY", "GOVERN", "ARCHITECT", "ROADMAP"],
  intelligence: ["DATA", "GOVERN", "MODEL", "DECIDE"],
  software: ["USER", "PRODUCT", "API", "DATA"],
  connected: ["ASSET", "SENSOR", "EDGE", "SYSTEM"],
  digitalTwin: ["PHYSICAL", "LIVE DATA", "TWIN", "ACTION"],
};

export function CapabilityIndexVisual({ capability }: { capability: CapabilityVisualKey }) {
  const labels = indexFlows[capability];

  return (
    <svg
      className={styles.indexDiagram}
      viewBox="0 0 360 92"
      role="img"
      aria-label={`${labels.join(" to ")} capability flow`}
    >
      <path d="M34 46H326" className={styles.indexLine} />
      {labels.map((label, index) => {
        const x = 34 + index * 97.3;
        return (
          <g key={label} className={index === 2 ? styles.indexNodeActive : styles.indexNode}>
            <rect x={x - 5} y="41" width="10" height="10" transform={`rotate(45 ${x} 46)`} />
            <text x={x} y={index % 2 === 0 ? 24 : 77}>{label}</text>
          </g>
        );
      })}
    </svg>
  );
}
