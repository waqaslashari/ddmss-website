import type { ReactNode } from "react";
import type {
  InsightDiagramKey,
  InsightVisualKey,
} from "@/types/content";
import styles from "./insight-editorial-visual.module.css";

const diagramNames: Record<InsightDiagramKey, string> = {
  aiGovernance: "AI governance architecture",
  digitalTwin: "Operational digital twin architecture",
  smartMobility: "Smart mobility system architecture",
};

type NodeProps = {
  x: number;
  y: number;
  width?: number;
  label: string;
  sub?: string;
  active?: boolean;
};

function Node({ x, y, width = 126, label, sub, active = false }: NodeProps) {
  return (
    <g className={`${styles.node} ${active ? styles.activeNode : ""}`}>
      <rect x={x} y={y} width={width} height={sub ? 62 : 52} rx="2" />
      <text x={x + width / 2} y={y + (sub ? 25 : 31)}>{label}</text>
      {sub ? <text className={styles.nodeSub} x={x + width / 2} y={y + 45}>{sub}</text> : null}
    </g>
  );
}

function DesktopDiagram({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg className={`${styles.diagramSvg} ${styles.desktopDiagram}`} viewBox="0 0 760 540" role="img" aria-label={label}>
      <path className={styles.grid} d="M28 40H732M28 140H732M28 240H732M28 340H732M28 440H732M90 22v496M380 22v496M670 22v496" />
      {children}
    </svg>
  );
}

function MobileDiagram({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg className={`${styles.diagramSvg} ${styles.mobileDiagram}`} viewBox="0 0 360 780" role="img" aria-label={label}>
      <path className={styles.grid} d="M24 30H336M24 750H336M48 16v748M180 16v748M312 16v748" />
      {children}
    </svg>
  );
}

function AiGovernanceDiagram() {
  const label = "A business objective passes through governance. Data, policy and access controls shape the AI system before recommendation, human oversight and approved action.";
  return (
    <>
      <DesktopDiagram label={label}>
        <path className={styles.path} d="M380 86v28M380 166v46M380 212H174v42M380 212v42M380 212h206v42M174 306v30h206M380 306v30M586 306v30H380M380 388v73H280M280 461h20M466 461h74" />
        <Node x={300} y={24} width={160} label="BUSINESS" sub="OBJECTIVE" active />
        <Node x={300} y={114} width={160} label="GOVERNANCE" active />
        <Node x={111} y={254} label="DATA" />
        <Node x={317} y={254} label="POLICY" />
        <Node x={523} y={254} label="ACCESS" />
        <Node x={300} y={336} width={160} label="AI SYSTEM" />
        <Node x={120} y={435} width={160} label="RECOMMENDATION" />
        <Node x={300} y={430} width={166} label="HUMAN" sub="OVERSIGHT" active />
        <Node x={540} y={430} width={160} label="APPROVED" sub="ACTION" />
        <text className={styles.meta} x="300" y="519">ACCOUNTABILITY / RETAINED</text>
      </DesktopDiagram>
      <MobileDiagram label={label}>
        <path className={styles.path} d="M180 82v40M180 174v42M180 216H86v42M180 216v42M180 216h94v42M86 310v40h94M180 310v40M274 310v40h-94M180 402v42M180 496v42M180 590v52M180 704v10" />
        <Node x={105} y={20} width={150} label="BUSINESS" sub="OBJECTIVE" active />
        <Node x={105} y={122} width={150} label="GOVERNANCE" active />
        <Node x={30} y={258} width={112} label="DATA" />
        <Node x={124} y={350} width={112} label="POLICY" />
        <Node x={218} y={258} width={112} label="ACCESS" />
        <Node x={105} y={444} width={150} label="AI SYSTEM" />
        <Node x={105} y={538} width={150} label="RECOMMENDATION" />
        <Node x={105} y={642} width={150} label="HUMAN" sub="OVERSIGHT" active />
        <Node x={105} y={714} width={150} label="ACTION" />
      </MobileDiagram>
    </>
  );
}

function DigitalTwinDiagram() {
  const label = "A physical asset connects through sensors and data to a digital twin, which supports monitoring, analytics and decision support.";
  return (
    <>
      <DesktopDiagram label={label}>
        <path className={styles.path} d="M142 270h22M284 270h22M426 270h24M600 270h12V106h10M612 270h10M612 270v164h10" />
        <Node x={22} y={239} width={120} label="PHYSICAL" sub="ASSET" />
        <Node x={164} y={239} width={120} label="SENSORS" sub="SYSTEMS" />
        <Node x={306} y={239} width={120} label="DATA" sub="CONTEXT" />
        <Node x={450} y={239} width={150} label="DIGITAL TWIN" active />
        <Node x={622} y={80} width={116} label="MONITORING" />
        <Node x={622} y={244} width={116} label="ANALYTICS" />
        <Node x={622} y={408} width={116} label="DECISION" sub="SUPPORT" active />
        <text className={styles.meta} x="451" y="222">SYNCHRONISED REPRESENTATION</text>
      </DesktopDiagram>
      <MobileDiagram label={label}>
        <path className={styles.path} d="M180 82v42M180 186v42M180 290v42M180 394v54M180 448H86v44M180 448h94v44M86 544v66h94M274 544v66h-94M180 662v42" />
        <Node x={105} y={20} width={150} label="PHYSICAL" sub="ASSET" />
        <Node x={105} y={124} width={150} label="SENSORS" sub="SYSTEMS" />
        <Node x={105} y={228} width={150} label="DATA" sub="CONTEXT" />
        <Node x={105} y={332} width={150} label="DIGITAL TWIN" active />
        <Node x={30} y={492} width={112} label="MONITORING" />
        <Node x={218} y={492} width={112} label="ANALYTICS" />
        <Node x={105} y={610} width={150} label="DECISION" sub="SUPPORT" active />
      </MobileDiagram>
    </>
  );
}

function SmartMobilityDiagram() {
  const label = "A user and vehicle connect to one mobility experience spanning parking, access, EV charging and payments, followed by an operations platform and data analytics.";
  return (
    <>
      <DesktopDiagram label={label}>
        <path className={styles.path} d="M136 270h48M344 270h34M538 270h27M565 270V86h23M565 270V186h23M565 270v84h23M565 270v184h23" />
        <Node x={18} y={239} width={118} label="USER" sub="VEHICLE" />
        <Node x={184} y={238} width={160} label="MOBILITY" sub="EXPERIENCE" active />
        <Node x={378} y={239} width={160} label="OPERATIONS" sub="PLATFORM" active />
        <Node x={588} y={60} width={132} label="PARKING" />
        <Node x={588} y={160} width={132} label="ACCESS" />
        <Node x={588} y={328} width={132} label="EV CHARGING" />
        <Node x={588} y={428} width={132} label="PAYMENTS" />
        <text className={styles.meta} x="379" y="222">CONNECTED SERVICES</text>
        <text className={styles.meta} x="379" y="326">DATA / ANALYTICS</text>
      </DesktopDiagram>
      <MobileDiagram label={label}>
        <path className={styles.path} d="M180 82v42M180 186v42M180 290v42M180 332H86v44M180 332h94v44M86 428v76h94M274 428v76h-94M180 556v48M180 666v42" />
        <Node x={105} y={20} width={150} label="USER" sub="VEHICLE" />
        <Node x={105} y={124} width={150} label="MOBILITY" sub="EXPERIENCE" active />
        <Node x={30} y={376} width={112} label="PARKING" />
        <Node x={218} y={376} width={112} label="ACCESS" />
        <Node x={30} y={504} width={112} label="EV CHARGING" />
        <Node x={218} y={504} width={112} label="PAYMENTS" />
        <Node x={105} y={604} width={150} label="OPERATIONS" sub="PLATFORM" active />
        <Node x={105} y={708} width={150} label="DATA" sub="ANALYTICS" />
      </MobileDiagram>
    </>
  );
}

const diagrams: Record<InsightDiagramKey, ReactNode> = {
  aiGovernance: <AiGovernanceDiagram />,
  digitalTwin: <DigitalTwinDiagram />,
  smartMobility: <SmartMobilityDiagram />,
};

export function InsightEditorialDiagram({ diagram }: { diagram: InsightDiagramKey }) {
  return (
    <figure className={styles.diagramFigure}>
      {diagrams[diagram]}
      <figcaption>{diagramNames[diagram]} / conceptual model</figcaption>
    </figure>
  );
}

export function InsightIndexVisual({ insight }: { insight: InsightVisualKey }) {
  const labels: Record<InsightVisualKey, readonly string[]> = {
    aiGovernance: ["OBJECTIVE", "GOVERN", "ACTION"],
    digitalTwins: ["PHYSICAL", "TWIN", "DECIDE"],
    smartMobility: ["MOBILITY", "PLATFORM", "DATA"],
  };

  return (
    <svg className={styles.indexSvg} viewBox="0 0 260 96" aria-hidden="true">
      <path d="M28 48H232" />
      {labels[insight].map((label, index) => {
        const x = 8 + index * 92;
        return (
          <g key={label}>
            <rect x={x} y="30" width="76" height="36" rx="2" />
            <text x={x + 38} y="52">{label}</text>
          </g>
        );
      })}
      <circle cx="130" cy="48" r="3" />
    </svg>
  );
}
