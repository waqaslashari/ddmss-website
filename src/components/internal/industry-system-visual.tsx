import type { ReactNode } from "react";
import { IndustryEnvironment } from "@/components/home/industry-environment";
import type { IndustryVisualKey } from "@/types/content";
import styles from "./industry-system-visual.module.css";

const visualNames: Record<IndustryVisualKey, string> = {
  energy: "Energy & Oil & Gas",
  government: "Government & Public Sector",
  smartCities: "Real Estate & Smart Cities",
  mobility: "Mobility & Transportation",
  manufacturing: "Manufacturing & Industrial",
  logistics: "Logistics & Warehousing",
};

const environmentLabels: Record<IndustryVisualKey, string> = {
  energy: "Connected energy field and industrial asset operating environment",
  government: "Governed public-service workflow connecting users, departments and infrastructure",
  smartCities: "Connected development combining buildings, mobility, energy and facility systems",
  mobility: "Connected mobility environment combining vehicles, access, parking and charging",
  manufacturing: "Connected production environment combining machines, edge systems and operations",
  logistics: "Connected warehouse and yard environment coordinating access, assets and movement",
};

export function IndustryHeroVisual({ industry }: { industry: IndustryVisualKey }) {
  return (
    <figure className={styles.heroFigure}>
      <div className={styles.heroCanvas}>
        <IndustryEnvironment industry={industry} label={environmentLabels[industry]} />
      </div>
      <figcaption>{visualNames[industry]} / operating environment</figcaption>
    </figure>
  );
}

type NodeProps = {
  x: number;
  y: number;
  width?: number;
  label: string;
  sub?: string;
  active?: boolean;
};

function SystemNode({ x, y, width = 112, label, sub, active = false }: NodeProps) {
  return (
    <g className={`${styles.systemNode} ${active ? styles.activeNode : ""}`}>
      <rect x={x} y={y} width={width} height={sub ? 60 : 50} rx="3" />
      <text x={x + width / 2} y={y + (sub ? 24 : 30)}>{label}</text>
      {sub ? <text className={styles.nodeSub} x={x + width / 2} y={y + 42}>{sub}</text> : null}
    </g>
  );
}

function ArchitectureBase({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg className={`${styles.architectureSvg} ${styles.desktopArchitecture}`} viewBox="0 0 820 350" role="img" aria-label={label}>
      <path className={styles.grid} d="M20 30H800M20 110H800M20 190H800M20 270H800M90 18v314M250 18v314M410 18v314M570 18v314M730 18v314" />
      {children}
    </svg>
  );
}

function MobileArchitectureBase({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg className={`${styles.architectureSvg} ${styles.mobileArchitecture}`} viewBox="0 0 360 580" role="img" aria-label={label}>
      <path className={styles.grid} d="M20 24H340M20 132H340M20 240H340M20 348H340M20 456H340M36 14v552M180 14v552M324 14v552" />
      {children}
    </svg>
  );
}

function EnergyArchitecture() {
  return <ArchitectureBase label="Field assets, sensors, systems and inspection information connect to a data platform, digital twin monitoring, analytics and operational decisions."><path className={styles.path} d="M124 82l46 90M124 172h46M124 262l46-90h20M302 172h22M446 172h22M590 172h20M722 172h18" /><SystemNode x={12} y={52} label="FIELD" /><SystemNode x={12} y={147} label="ASSETS" active /><SystemNode x={12} y={242} label="INSPECTION" /><SystemNode x={170} y={142} width={132} label="SENSORS" sub="SYSTEMS" /><SystemNode x={324} y={142} width={122} label="DATA" sub="PLATFORM" active /><SystemNode x={468} y={142} width={122} label="TWIN" sub="MONITORING" /><SystemNode x={610} y={142} width={112} label="ANALYTICS" /><SystemNode x={740} y={142} width={68} label="DECISION" active /></ArchitectureBase>;
}

function GovernmentArchitecture() {
  return <ArchitectureBase label="A citizen or user moves through a governed digital service, workflow, connected systems, intelligence and accountable service delivery."><path className={styles.path} d="M120 190h22M264 190h22M408 190h22M552 190h22M696 190h22" /><g className={styles.governanceBand}><rect x="140" y="58" width="568" height="34" rx="2" /><text x="424" y="79">GOVERNANCE / ACCESS / POLICY / ACCOUNTABILITY</text><path d="M178 92v46M322 92v46M466 92v46M610 92v46M682 92v46" /></g><SystemNode x={12} y={165} width={108} label="CITIZEN" /><SystemNode x={142} y={160} width={122} label="DIGITAL" sub="SERVICE" active /><SystemNode x={286} y={160} width={122} label="WORKFLOW" sub="APPROVAL" /><SystemNode x={430} y={160} width={122} label="DATA" sub="SYSTEMS" /><SystemNode x={574} y={160} width={122} label="AI" sub="ANALYTICS" /><SystemNode x={718} y={160} width={90} label="SERVICE" sub="DELIVERY" active /></ArchitectureBase>;
}

function SmartCitiesArchitecture() {
  return <ArchitectureBase label="A user and development connect access, parking, EV charging, energy, assets and occupancy through a smart facility platform and operations layer."><path className={styles.path} d="M120 178h34M276 178h18V75h16M294 178h16M294 178v97h16M402 75h124v103h14M402 175h138M402 275h124v-97M510 75h16M510 175h30M510 275h16M676 178h28" /><SystemNode x={12} y={153} width={108} label="USER" /><SystemNode x={154} y={148} width={122} label="BUILDING" sub="DEVELOPMENT" /><SystemNode x={310} y={50} width={92} label="ACCESS" /><SystemNode x={310} y={150} width={92} label="PARKING" /><SystemNode x={310} y={250} width={92} label="EV CHARGING" /><SystemNode x={418} y={50} width={92} label="ENERGY" /><SystemNode x={418} y={150} width={92} label="OCCUPANCY" /><SystemNode x={418} y={250} width={92} label="ASSETS" /><SystemNode x={540} y={148} width={136} label="SMART FACILITY" sub="PLATFORM" active /><SystemNode x={704} y={148} width={104} label="OPERATIONS" active /></ArchitectureBase>;
}

function MobilityArchitecture() {
  return <ArchitectureBase label="A user and vehicle connect through a mobility experience to parking, access, EV charging and fleet devices, then into a mobility platform and operations layer."><path className={styles.path} d="M124 176h28M284 176h20V95h16M304 176v99h16M410 95h116v81h14M410 275h116v-99M510 95h16M510 275h16M676 176h28" /><SystemNode x={12} y={146} label="USER /" sub="VEHICLE" /><SystemNode x={152} y={146} width={132} label="MOBILITY" sub="EXPERIENCE" active /><SystemNode x={320} y={70} width={90} label="PARKING" /><SystemNode x={420} y={70} width={90} label="ACCESS" /><SystemNode x={320} y={250} width={90} label="EV CHARGING" /><SystemNode x={420} y={250} width={90} label="FLEET / DEV" /><SystemNode x={540} y={146} width={136} label="MOBILITY" sub="PLATFORM" active /><SystemNode x={704} y={146} width={104} label="DATA / OPS" sub="ANALYTICS" /></ArchitectureBase>;
}

function ManufacturingArchitecture() {
  return <ArchitectureBase label="Machines and production systems connect through sensors, edge and IoT infrastructure to an operational platform, monitoring, analytics and production action."><path className={styles.path} d="M126 176h18M266 176h18M406 176h18M560 176h18M702 176h18" /><SystemNode x={12} y={146} width={114} label="MACHINES" sub="PRODUCTION" /><SystemNode x={144} y={146} width={122} label="SENSORS" sub="SYSTEMS" /><SystemNode x={284} y={146} width={122} label="EDGE / IoT" active /><SystemNode x={424} y={146} width={136} label="OPERATIONAL" sub="PLATFORM" active /><SystemNode x={578} y={146} width={124} label="MONITORING" sub="ANALYTICS" /><SystemNode x={720} y={146} width={88} label="ACTION" /><text className={styles.meta} x="424" y="116">PRODUCTION + QUALITY + MAINTENANCE CONTEXT</text></ArchitectureBase>;
}

function LogisticsArchitecture() {
  return <ArchitectureBase label="Vehicles and assets pass through smart access into yard and warehouse operations, loading, tracking and fleet systems, then into an operations platform and workflow."><path className={styles.path} d="M124 178h28M274 178h44M364 100v48M456 100v48M364 208v42M456 208v42M468 178h72M676 178h28" /><SystemNode x={12} y={148} label="VEHICLE" sub="ASSET" /><SystemNode x={152} y={148} width={122} label="SMART" sub="ACCESS" active /><SystemNode x={318} y={50} width={92} label="LOADING" /><SystemNode x={418} y={50} width={92} label="TRACKING" /><SystemNode x={318} y={250} width={92} label="FLEET" /><SystemNode x={418} y={250} width={92} label="ASSETS" /><SystemNode x={318} y={148} width={150} label="YARD /" sub="WAREHOUSE" /><SystemNode x={540} y={148} width={136} label="OPERATIONS" sub="PLATFORM" active /><SystemNode x={704} y={148} width={104} label="ANALYTICS" sub="WORKFLOW" /></ArchitectureBase>;
}

const architectureVisuals: Record<IndustryVisualKey, ReactNode> = {
  energy: <EnergyArchitecture />,
  government: <GovernmentArchitecture />,
  smartCities: <SmartCitiesArchitecture />,
  mobility: <MobilityArchitecture />,
  manufacturing: <ManufacturingArchitecture />,
  logistics: <LogisticsArchitecture />,
};

const mobileArchitectureVisuals: Record<IndustryVisualKey, ReactNode> = {
  energy: <MobileArchitectureBase label="Field assets and operating systems connect through a data platform to monitoring, intelligence and decisions."><path className={styles.path} d="M180 70v26M180 156v26M180 242v26M180 328v26M180 414v26" /><SystemNode x={108} y={10} width={144} label="FIELD / ASSETS" /><SystemNode x={108} y={96} width={144} label="SENSORS" sub="SYSTEMS" /><SystemNode x={108} y={182} width={144} label="DATA PLATFORM" active /><SystemNode x={108} y={268} width={144} label="TWIN" sub="MONITORING" /><SystemNode x={108} y={354} width={144} label="ANALYTICS" /><SystemNode x={108} y={440} width={144} label="OPERATIONAL" sub="DECISION" active /></MobileArchitectureBase>,
  government: <MobileArchitectureBase label="A governed public-service journey connects users, digital service, workflow, systems, intelligence and service delivery."><path className={styles.path} d="M180 90v22M180 172v22M180 254v22M180 336v22M180 418v22" /><g className={styles.governanceBand}><rect x="44" y="18" width="272" height="28" rx="2" /><text x="180" y="36">GOVERNANCE / ACCESS / POLICY</text><path d="M62 46v448M298 46v448" /></g><SystemNode x={108} y={60} width={144} label="CITIZEN / USER" /><SystemNode x={108} y={142} width={144} label="DIGITAL SERVICE" active /><SystemNode x={108} y={224} width={144} label="WORKFLOW" sub="APPROVAL" /><SystemNode x={108} y={306} width={144} label="DATA / SYSTEMS" /><SystemNode x={108} y={388} width={144} label="AI / ANALYTICS" /><SystemNode x={108} y={470} width={144} label="SERVICE" sub="DELIVERY" active /></MobileArchitectureBase>,
  smartCities: <MobileArchitectureBase label="Building systems converge through a smart facility platform into data, analytics and operations."><path className={styles.path} d="M62 80l118 84M180 80v84M298 80l-118 84M62 150l118 14M180 150v14M298 150l-118 14v44M180 268v32M180 360v32" /><SystemNode x={12} y={20} width={100} label="ACCESS" /><SystemNode x={130} y={20} width={100} label="PARKING" /><SystemNode x={248} y={20} width={100} label="EV" /><SystemNode x={12} y={100} width={100} label="ENERGY" /><SystemNode x={130} y={100} width={100} label="OCCUPANCY" /><SystemNode x={248} y={100} width={100} label="ASSETS" /><SystemNode x={100} y={208} width={160} label="SMART FACILITY" sub="PLATFORM" active /><SystemNode x={108} y={300} width={144} label="DATA" sub="ANALYTICS" /><SystemNode x={108} y={392} width={144} label="OPERATIONS" active /></MobileArchitectureBase>,
  mobility: <MobileArchitectureBase label="A user and vehicle connect through a mobility experience to parking, access, charging and fleet services, then operations."><path className={styles.path} d="M180 70v30M180 160v52M62 282l118-70M180 282v-70M298 282l-118-70v104M180 376v30" /><SystemNode x={108} y={10} width={144} label="USER / VEHICLE" /><SystemNode x={108} y={100} width={144} label="MOBILITY" sub="EXPERIENCE" active /><SystemNode x={12} y={252} width={100} label="PARKING" /><SystemNode x={130} y={252} width={100} label="ACCESS" /><SystemNode x={248} y={252} width={100} label="EV / FLEET" /><SystemNode x={108} y={316} width={144} label="MOBILITY" sub="PLATFORM" active /><SystemNode x={108} y={406} width={144} label="DATA / OPS" sub="ANALYTICS" /></MobileArchitectureBase>,
  manufacturing: <MobileArchitectureBase label="Machines and production systems connect through sensors, edge infrastructure, operations, monitoring and production action."><path className={styles.path} d="M180 70v26M180 156v26M180 242v26M180 328v26M180 414v26" /><SystemNode x={108} y={10} width={144} label="MACHINES" sub="PRODUCTION" /><SystemNode x={108} y={96} width={144} label="SENSORS" sub="SYSTEMS" /><SystemNode x={108} y={182} width={144} label="EDGE / IoT" active /><SystemNode x={108} y={268} width={144} label="OPERATIONAL" sub="PLATFORM" active /><SystemNode x={108} y={354} width={144} label="MONITORING" sub="ANALYTICS" /><SystemNode x={108} y={440} width={144} label="MAINTENANCE" sub="PRODUCTION ACTION" /></MobileArchitectureBase>,
  logistics: <MobileArchitectureBase label="Vehicles and assets pass through smart access into yard and warehouse activity, then an operations and workflow layer."><path className={styles.path} d="M180 70v30M180 160v44M95 254l85-50M265 254l-85-50M95 324l85-120M265 324l-85-120v170M180 434v30" /><SystemNode x={108} y={10} width={144} label="VEHICLE / ASSET" /><SystemNode x={108} y={100} width={144} label="SMART ACCESS" active /><SystemNode x={20} y={224} width={150} label="LOADING" /><SystemNode x={190} y={224} width={150} label="ASSET TRACK" /><SystemNode x={20} y={294} width={150} label="WAREHOUSE" /><SystemNode x={190} y={294} width={150} label="YARD / FLEET" /><SystemNode x={104} y={374} width={152} label="OPERATIONS" sub="PLATFORM" active /><SystemNode x={108} y={464} width={144} label="ANALYTICS" sub="WORKFLOW" /></MobileArchitectureBase>,
};

export function IndustryArchitectureVisual({ industry }: { industry: IndustryVisualKey }) {
  return (
    <figure className={styles.architectureFigure}>
      {architectureVisuals[industry]}
      {mobileArchitectureVisuals[industry]}
      <figcaption>{visualNames[industry]} / example operating architecture</figcaption>
    </figure>
  );
}

const indexPaths: Record<IndustryVisualKey, ReactNode> = {
  energy: <><path d="M16 60h46l26-36h58l22 24h56" /><path d="M88 24v38m58-38v38" /><circle cx="16" cy="60" r="4" /><circle cx="224" cy="48" r="4" /></>,
  government: <><path d="M18 38h42m34 0h42m34 0h52" /><rect x="60" y="24" width="34" height="28" /><rect x="136" y="24" width="34" height="28" /><path d="M52 14h126v48" /><circle cx="222" cy="38" r="4" /></>,
  smartCities: <><path d="M18 58h204M46 58V28h28v30M92 58V14h40v44M152 58V32h30v26" /><path d="M38 22h102l28 10h54" /><circle cx="222" cy="32" r="4" /></>,
  mobility: <><path d="M18 54h204M54 54l34-34h64l34 34M120 20v34" /><rect x="28" y="28" width="28" height="18" /><rect x="184" y="24" width="24" height="24" /><circle cx="120" cy="20" r="4" /></>,
  manufacturing: <><path d="M18 56h204M34 56V22h42v34M92 56V16h48v40M158 56V28h38v28" /><path d="M55 22v-10h94M116 16V8" /><circle cx="55" cy="42" r="4" /><circle cx="116" cy="38" r="4" /><circle cx="177" cy="44" r="4" /></>,
  logistics: <><path d="M18 58h204M28 58V18h96v40M42 18l34-12 48 12M142 58h48l22-18" /><rect x="44" y="30" width="22" height="28" /><rect x="76" y="30" width="22" height="28" /><circle cx="164" cy="58" r="6" /><circle cx="204" cy="58" r="6" /></>,
};

export function IndustryIndexVisual({ industry }: { industry: IndustryVisualKey }) {
  return <svg className={styles.indexSvg} viewBox="0 0 240 76" role="img" aria-label={`${visualNames[industry]} environment diagram`}>{indexPaths[industry]}</svg>;
}
