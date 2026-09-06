import Image from "next/image";
import type { ReactNode } from "react";
import type { SolutionVisualKey } from "@/types/content";
import styles from "./solution-system-visual.module.css";

const visualNames: Record<SolutionVisualKey, string> = {
  smartParking: "Smart Parking",
  evCharging: "EV Charging",
  digitalTwins: "Digital Twins",
  intelligentOperations: "Intelligent Operations",
  smartFacilities: "Smart Facilities",
  aiPoweredEnterprise: "AI-Powered Enterprise",
};

function HeroNetwork({ children }: { children: ReactNode }) {
  return (
    <svg className={styles.heroNetwork} viewBox="0 0 760 430" aria-hidden="true">
      <path className={styles.reference} d="M32 54H728M32 376H728M74 28v374M686 28v374" />
      {children}
    </svg>
  );
}

function SmartParkingHero() {
  return (
    <>
      <Image className={`${styles.heroImage} ${styles.parkingImage}`} src="/visuals/smart-parking.png" width={1536} height={1024} sizes="(max-width: 768px) 90vw, 48vw" alt="Connected parking environment representing access, parking services and operational management." loading="eager" />
      <HeroNetwork>
        <path className={styles.activePath} d="M92 242h110l72-75h186l72 75h132" />
        <path className={styles.secondaryPath} d="M274 167v-74M460 167V93M532 242v88" />
        <g className={styles.heroLabels}><text x="72" y="228">USER / ENTRY</text><text x="266" y="78">AVAILABILITY</text><text x="449" y="78">PAYMENT</text><text x="576" y="228">OPERATIONS</text></g>
      </HeroNetwork>
    </>
  );
}

function EvChargingHero() {
  return (
    <>
      <Image className={`${styles.heroImage} ${styles.chargerImage}`} src="/visuals/ev-charger.png" width={1024} height={1536} sizes="(max-width: 768px) 32vw, 15vw" alt="Connected EV charging pedestal within a managed charging network." loading="eager" />
      <Image className={`${styles.heroImage} ${styles.evImage}`} src="/visuals/smart-mobility-ev.png" width={1536} height={1024} sizes="(max-width: 768px) 56vw, 27vw" alt="Electric vehicle interacting with the charging network." loading="eager" />
      <HeroNetwork>
        <path className={styles.activePath} d="M88 274h142l74-92h160l74 92h136" />
        <path className={styles.secondaryPath} d="M464 182l80-90h96M464 182l80 90h96" />
        <g className={styles.heroLabels}><text x="66" y="260">DRIVER</text><text x="314" y="165">CHARGER / LIVE</text><text x="550" y="78">PAYMENTS</text><text x="550" y="304">OPERATOR CMS</text></g>
      </HeroNetwork>
    </>
  );
}

function DigitalTwinsHero() {
  return (
    <>
      <div className={`${styles.assetFrame} ${styles.physicalFrame}`}><span>PHYSICAL / ASSET</span><Image src="/visuals/industrial-asset.png" width={1536} height={1024} sizes="(max-width: 768px) 72vw, 23vw" alt="Physical industrial asset connected to operational telemetry." loading="eager" /></div>
      <div className={`${styles.assetFrame} ${styles.twinFrame}`}><span>DIGITAL / TWIN</span><Image src="/visuals/industrial-twin.png" width={1536} height={1024} sizes="(max-width: 768px) 72vw, 25vw" alt="Synchronized digital representation of the industrial asset." loading="eager" /></div>
      <HeroNetwork>
        <path className={styles.activePath} d="M214 218h332" />
        <path className={styles.secondaryPath} d="M330 204v28M380 204v28M430 204v28" />
        <g className={styles.heroLabels}><text x="314" y="184">TELEMETRY / SYNC</text><text x="580" y="292">INTELLIGENCE / READY</text></g>
      </HeroNetwork>
    </>
  );
}

function IntelligentOperationsHero() {
  return (
    <>
      <Image className={`${styles.heroImage} ${styles.operationsImage}`} src="/visuals/industrial-asset.png" width={1536} height={1024} sizes="(max-width: 768px) 82vw, 36vw" alt="Industrial operation connected to a unified operational intelligence layer." loading="eager" />
      <HeroNetwork>
        <path className={styles.activePath} d="M102 100l170 116M102 216h170M102 332l170-116h218l142-96M490 216l142 96" />
        <path className={styles.secondaryPath} d="M272 216h218" />
        <g className={styles.heroLabels}><text x="62" y="88">SYSTEMS</text><text x="62" y="204">DEVICES</text><text x="62" y="320">DATA</text><text x="278" y="201">OPERATIONS PLATFORM</text><text x="552" y="105">DECISION</text><text x="552" y="344">ACTION</text></g>
      </HeroNetwork>
    </>
  );
}

function SmartFacilitiesHero() {
  return (
    <>
      <Image className={`${styles.heroImage} ${styles.facilityImage}`} src="/visuals/smart-facility.png" width={1536} height={1024} sizes="(max-width: 768px) 90vw, 46vw" alt="Smart facility connecting building, access, mobility, energy and asset systems." loading="eager" />
      <HeroNetwork>
        <path className={styles.activePath} d="M112 92l212 124M112 154l212 62M112 278l212-62M112 340l212-124h174l138 0" />
        <path className={styles.secondaryPath} d="M498 216v-116M498 216v116" />
        <g className={styles.heroLabels}><text x="70" y="80">ACCESS</text><text x="70" y="142">PARKING</text><text x="70" y="294">ENERGY</text><text x="70" y="356">ASSETS</text><text x="318" y="200">FACILITY PLATFORM</text><text x="530" y="202">OPERATIONS</text></g>
      </HeroNetwork>
    </>
  );
}

function AiPoweredEnterpriseHero() {
  return (
    <HeroNetwork>
      <path className={styles.activePath} d="M132 92h96l94 124M132 160h108l82 56M132 270h108l82-54M132 338h96l94-122h126l88-92h104M448 216l88 92h104" />
      <path className={styles.secondaryPath} d="M448 216h192M536 124v184M378 154V82h116M378 278v70h116" />
      <g className={styles.aiHeroNodes}>
        <rect x="54" y="70" width="78" height="44" rx="3" /><text x="93" y="97">KNOWLEDGE</text>
        <rect x="54" y="138" width="78" height="44" rx="3" /><text x="93" y="165">DOCUMENTS</text>
        <rect x="54" y="248" width="78" height="44" rx="3" /><text x="93" y="275">DATA</text>
        <rect x="54" y="316" width="78" height="44" rx="3" /><text x="93" y="343">APPLICATIONS</text>
        <rect className={styles.aiCoreNode} x="322" y="154" width="126" height="124" rx="4" />
        <text className={styles.aiCoreTitle} x="385" y="205">GOVERNED AI</text>
        <text className={styles.aiCoreMeta} x="385" y="226">CONTEXT / ACCESS</text>
        <text className={styles.aiCoreMeta} x="385" y="242">POLICY / TRACE</text>
        <rect x="536" y="102" width="104" height="44" rx="3" /><text x="588" y="129">ASSISTANTS</text>
        <rect x="536" y="194" width="104" height="44" rx="3" /><text x="588" y="221">AGENTS</text>
        <rect x="536" y="286" width="104" height="44" rx="3" /><text x="588" y="313">ANALYTICS</text>
      </g>
      <g className={styles.heroLabels}>
        <text x="318" y="72">ENTERPRISE CONTEXT</text>
        <text x="535" y="86">INTELLIGENCE LAYER</text>
        <text x="536" y="354">HUMAN OVERSIGHT / ACTIVE</text>
        <text x="650" y="219">CONTROLLED ACTION</text>
      </g>
    </HeroNetwork>
  );
}

const heroVisuals: Record<SolutionVisualKey, ReactNode> = {
  smartParking: <SmartParkingHero />,
  evCharging: <EvChargingHero />,
  digitalTwins: <DigitalTwinsHero />,
  intelligentOperations: <IntelligentOperationsHero />,
  smartFacilities: <SmartFacilitiesHero />,
  aiPoweredEnterprise: <AiPoweredEnterpriseHero />,
};

export function SolutionHeroVisual({ solution }: { solution: SolutionVisualKey }) {
  return (
    <figure className={`${styles.heroFigure} ${styles[`${solution}Hero`]}`} aria-label={`${visualNames[solution]} connected system overview`}>
      <div className={styles.heroCanvas}>{heroVisuals[solution]}</div>
      <figcaption>{visualNames[solution]} / connected system architecture</figcaption>
    </figure>
  );
}

type NodeProps = { x: number; y: number; width?: number; label: string; active?: boolean; sub?: string };

function SystemNode({ x, y, width = 112, label, active = false, sub }: NodeProps) {
  return (
    <g className={`${styles.systemNode} ${active ? styles.activeNode : ""}`}>
      <rect x={x} y={y} width={width} height={sub ? 62 : 52} rx="3" />
      <text x={x + width / 2} y={y + (sub ? 25 : 31)}>{label}</text>
      {sub ? <text className={styles.nodeSub} x={x + width / 2} y={y + 44}>{sub}</text> : null}
    </g>
  );
}

function ArchitectureBase({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg className={`${styles.architectureSvg} ${styles.desktopArchitecture}`} viewBox="0 0 820 330" role="img" aria-label={label}>
      <path className={styles.architectureGrid} d="M20 30H800M20 110H800M20 190H800M20 270H800M90 18v294M250 18v294M410 18v294M570 18v294M730 18v294" />
      {children}
    </svg>
  );
}

function MobileArchitectureBase({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg className={`${styles.architectureSvg} ${styles.mobileArchitecture}`} viewBox="0 0 360 480" role="img" aria-label={label}>
      <path className={styles.architectureGrid} d="M20 24H340M20 120H340M20 216H340M20 312H340M20 408H340M36 14v452M180 14v452M324 14v452" />
      {children}
    </svg>
  );
}

function SmartParkingArchitecture() {
  return <ArchitectureBase label="User access flows into parking, connects with payments and EV charging, then reaches the operations platform and analytics."><path className={styles.architecturePath} d="M132 137h35M279 137h31M452 137h38M602 137h42M704 163v68M452 137h38M546 111V78M546 163v35" /><SystemNode x={20} y={111} label="USER" /><SystemNode x={167} y={111} label="ACCESS" /><SystemNode x={310} y={106} width={142} label="PARKING" sub="AVAILABILITY" active /><SystemNode x={490} y={52} label="PAYMENT" /><SystemNode x={490} y={198} label="EV CHARGING" /><SystemNode x={644} y={106} width={140} label="OPERATIONS" sub="PLATFORM" active /><SystemNode x={648} y={231} width={132} label="ANALYTICS" /></ArchitectureBase>;
}

function EvChargingArchitecture() {
  return <ArchitectureBase label="Driver interaction flows through an app or QR code to a charger and charging platform, connected with payments, APIs and the operator CMS."><path className={styles.architecturePath} d="M126 161h34M272 161h34M424 161h34M600 161h42M530 130V72M530 192v53M704 192v53" /><SystemNode x={18} y={135} width={108} label="DRIVER" /><SystemNode x={160} y={135} label="APP / QR" /><SystemNode x={306} y={135} width={118} label="CHARGER" active /><SystemNode x={458} y={130} width={142} label="CHARGING" sub="PLATFORM" active /><SystemNode x={474} y={26} label="PAYMENTS" /><SystemNode x={474} y={245} label="APIs" /><SystemNode x={642} y={130} width={142} label="OPERATOR" sub="CMS" /></ArchitectureBase>;
}

function DigitalTwinsArchitecture() {
  return <ArchitectureBase label="A physical asset connects through sensors and systems to data integration, a synchronized digital twin, analytics and intelligence or action."><path className={styles.architecturePath} d="M128 162h18M258 162h18M388 162h18M528 162h18M658 162h18" /><SystemNode x={12} y={131} width={116} label="PHYSICAL" sub="ASSET" /><SystemNode x={146} y={131} width={112} label="SENSORS" sub="SYSTEMS" /><SystemNode x={276} y={131} width={112} label="DATA" sub="INTEGRATION" /><SystemNode x={406} y={131} width={122} label="DIGITAL TWIN" active /><SystemNode x={546} y={136} label="ANALYTICS" /><SystemNode x={676} y={131} width={132} label="INTELLIGENCE" sub="ACTION" active /><text className={styles.architectureMeta} x="406" y="102">SYNCHRONIZED OPERATIONAL REPRESENTATION</text></ArchitectureBase>;
}

function IntelligentOperationsArchitecture() {
  return <ArchitectureBase label="Systems, devices and data converge into an operational platform, followed by analytics, governed AI or rules, decision and action."><path className={styles.architecturePath} d="M124 64l74 99M124 164h74M124 264l74-100h128M468 164h26M622 164h26M704 138V92M704 190v52" /><SystemNode x={12} y={38} label="SYSTEMS" /><SystemNode x={12} y={138} label="DEVICES" /><SystemNode x={12} y={238} label="DATA" /><SystemNode x={198} y={133} width={128} label="OPERATIONAL" sub="PLATFORM" active /><SystemNode x={356} y={138} label="ANALYTICS" /><SystemNode x={494} y={133} width={128} label="AI / RULES" sub="GOVERNED" active /><SystemNode x={648} y={40} label="DECISION" /><SystemNode x={648} y={242} label="ACTION" /></ArchitectureBase>;
}

function SmartFacilitiesArchitecture() {
  return <ArchitectureBase label="Building access, parking, EV charging, energy and asset systems converge into a facility platform and operational data layer."><path className={styles.architecturePath} d="M132 52l170 112M132 104l170 60M132 164h170M132 224l170-60M132 276l170-112h40M484 164h46M672 164h32" /><SystemNode x={12} y={26} width={120} label="ACCESS" /><SystemNode x={12} y={78} width={120} label="PARKING" /><SystemNode x={12} y={138} width={120} label="EV CHARGING" /><SystemNode x={12} y={198} width={120} label="ENERGY" /><SystemNode x={12} y={250} width={120} label="ASSETS" /><SystemNode x={302} y={133} width={182} label="FACILITY" sub="PLATFORM" active /><SystemNode x={530} y={133} width={142} label="DATA" sub="ANALYTICS" /><SystemNode x={704} y={138} width={104} label="OPERATIONS" active /></ArchitectureBase>;
}

function AiPoweredEnterpriseArchitecture() {
  return <ArchitectureBase label="Trusted enterprise context passes through governance into an AI platform, assistants and agents, human review and controlled action."><path className={styles.architecturePath} d="M128 162h24M278 162h24M438 162h24M594 162h24M738 162h16" /><SystemNode x={12} y={131} width={116} label="TRUSTED" sub="CONTEXT" /><SystemNode x={152} y={131} width={126} label="GOVERNANCE" sub="ACCESS / POLICY" active /><SystemNode x={302} y={131} width={136} label="AI PLATFORM" sub="MODELS / CONTEXT" active /><SystemNode x={462} y={131} width={132} label="ASSIST / AGENT" sub="ANALYTICS" /><SystemNode x={618} y={131} width={120} label="HUMAN" sub="REVIEW" active /><SystemNode x={754} y={136} width={54} label="ACTION" /><text className={styles.architectureMeta} x="410" y="102">KNOWLEDGE + DOCUMENTS + DATA + APPLICATIONS</text><text className={styles.architectureMeta} x="678" y="222">APPROVED WORKFLOW / CONTROLLED ACTION</text></ArchitectureBase>;
}

const architectureVisuals: Record<SolutionVisualKey, ReactNode> = {
  smartParking: <SmartParkingArchitecture />,
  evCharging: <EvChargingArchitecture />,
  digitalTwins: <DigitalTwinsArchitecture />,
  intelligentOperations: <IntelligentOperationsArchitecture />,
  smartFacilities: <SmartFacilitiesArchitecture />,
  aiPoweredEnterprise: <AiPoweredEnterpriseArchitecture />,
};

const mobileArchitectureVisuals: Record<SolutionVisualKey, ReactNode> = {
  smartParking: <MobileArchitectureBase label="User access flows into parking, connects with payments and EV charging, then reaches the operations platform and analytics."><path className={styles.architecturePath} d="M180 68v34M180 154v34M180 250v34M180 346v34M115 219H72M245 219h43" /><SystemNode x={120} y={16} width={120} label="USER" /><SystemNode x={120} y={102} width={120} label="ACCESS" /><SystemNode x={110} y={188} width={140} label="PARKING" sub="AVAILABILITY" active /><SystemNode x={12} y={193} width={102} label="PAYMENT" /><SystemNode x={246} y={193} width={102} label="EV CHARGING" /><SystemNode x={110} y={284} width={140} label="OPERATIONS" sub="PLATFORM" active /><SystemNode x={120} y={380} width={120} label="ANALYTICS" /></MobileArchitectureBase>,
  evCharging: <MobileArchitectureBase label="Driver interaction flows through an app or QR code to a charger and charging platform, connected with payments, APIs and the operator CMS."><path className={styles.architecturePath} d="M180 68v28M180 148v28M180 228v38M180 328v36M110 297H70M250 297h40" /><SystemNode x={120} y={16} width={120} label="DRIVER" /><SystemNode x={120} y={96} width={120} label="APP / QR" /><SystemNode x={120} y={176} width={120} label="CHARGER" active /><SystemNode x={110} y={266} width={140} label="CHARGING" sub="PLATFORM" active /><SystemNode x={12} y={271} width={98} label="PAYMENTS" /><SystemNode x={250} y={271} width={98} label="APIs" /><SystemNode x={110} y={364} width={140} label="OPERATOR" sub="CMS" /></MobileArchitectureBase>,
  digitalTwins: <MobileArchitectureBase label="A physical asset connects through sensors and systems to data integration, a synchronized digital twin, analytics and intelligence or action."><path className={styles.architecturePath} d="M180 70v18M180 150v18M180 230v18M180 310v18M180 390v18" /><SystemNode x={110} y={8} width={140} label="PHYSICAL" sub="ASSET" /><SystemNode x={110} y={88} width={140} label="SENSORS" sub="SYSTEMS" /><SystemNode x={110} y={168} width={140} label="DATA" sub="INTEGRATION" /><SystemNode x={110} y={248} width={140} label="DIGITAL TWIN" active /><SystemNode x={110} y={328} width={140} label="ANALYTICS" /><SystemNode x={110} y={408} width={140} label="INTELLIGENCE" sub="ACTION" active /></MobileArchitectureBase>,
  intelligentOperations: <MobileArchitectureBase label="Systems, devices and data converge into an operational platform, followed by analytics, governed AI or rules, decision and action."><path className={styles.architecturePath} d="M62 70l118 58M180 70v58M298 70l-118 58v34M180 224v24M180 310v24M180 396v20" /><SystemNode x={12} y={18} width={100} label="SYSTEMS" /><SystemNode x={130} y={18} width={100} label="DEVICES" /><SystemNode x={248} y={18} width={100} label="DATA" /><SystemNode x={110} y={162} width={140} label="OPERATIONAL" sub="PLATFORM" active /><SystemNode x={120} y={248} width={120} label="ANALYTICS" /><SystemNode x={110} y={334} width={140} label="AI / RULES" sub="GOVERNED" active /><SystemNode x={12} y={416} width={142} label="DECISION" /><SystemNode x={206} y={416} width={142} label="ACTION" /></MobileArchitectureBase>,
  smartFacilities: <MobileArchitectureBase label="Building access, parking, EV charging, energy and asset systems converge into a facility platform and operational data layer."><path className={styles.architecturePath} d="M55 70l125 72M180 70v72M305 70l-125 72M110 130l70 12M250 130l-70 12v54M180 258v34M180 354v34" /><SystemNode x={8} y={18} width={94} label="ACCESS" /><SystemNode x={133} y={18} width={94} label="PARKING" /><SystemNode x={258} y={18} width={94} label="EV CHARGE" /><SystemNode x={62} y={96} width={96} label="ENERGY" /><SystemNode x={202} y={96} width={96} label="ASSETS" /><SystemNode x={100} y={196} width={160} label="FACILITY" sub="PLATFORM" active /><SystemNode x={110} y={292} width={140} label="DATA" sub="ANALYTICS" /><SystemNode x={110} y={388} width={140} label="OPERATIONS" active /></MobileArchitectureBase>,
  aiPoweredEnterprise: <MobileArchitectureBase label="Trusted enterprise context passes through governance into an AI platform, assistants and agents, human review and controlled action."><path className={styles.architecturePath} d="M180 70v18M180 150v18M180 230v18M180 310v18M180 390v18" /><SystemNode x={110} y={8} width={140} label="TRUSTED" sub="CONTEXT" /><SystemNode x={110} y={88} width={140} label="GOVERNANCE" sub="ACCESS / POLICY" active /><SystemNode x={110} y={168} width={140} label="AI PLATFORM" sub="MODELS / CONTEXT" active /><SystemNode x={110} y={248} width={140} label="ASSIST / AGENT" sub="ANALYTICS" /><SystemNode x={110} y={328} width={140} label="HUMAN" sub="REVIEW" active /><SystemNode x={110} y={408} width={140} label="CONTROLLED" sub="ACTION" /></MobileArchitectureBase>,
};

export function SolutionArchitectureVisual({ solution }: { solution: SolutionVisualKey }) {
  return (
    <figure className={styles.architectureFigure}>
      {architectureVisuals[solution]}
      {mobileArchitectureVisuals[solution]}
      <figcaption>{visualNames[solution]} / end-to-end operating flow</figcaption>
    </figure>
  );
}

const indexPaths: Record<SolutionVisualKey, ReactNode> = {
  smartParking: <><path d="M16 38h48l22-20h62l22 20h54" /><rect x="86" y="8" width="62" height="20" /><circle cx="16" cy="38" r="4" /><circle cx="224" cy="38" r="4" /></>,
  evCharging: <><path d="M18 52h48l32-30h48l32 30h46" /><path d="M146 22h42" /><rect x="96" y="10" width="30" height="40" /><circle cx="18" cy="52" r="4" /><circle cx="224" cy="52" r="4" /></>,
  digitalTwins: <><rect x="18" y="20" width="62" height="36" /><path d="M80 38h76" /><rect x="156" y="14" width="68" height="48" /><path d="M100 32v12m18-12v12m18-12v12" /></>,
  intelligentOperations: <><path d="M18 14l58 24M18 38h58M18 62l58-24h66l82-24M142 38l82 24" /><rect x="76" y="24" width="66" height="28" /><circle cx="224" cy="14" r="4" /><circle cx="224" cy="62" r="4" /></>,
  smartFacilities: <><path d="M18 12l76 26M18 28l76 10M18 48l76-10M18 64l76-26h56l74 0" /><rect x="94" y="24" width="56" height="28" /><circle cx="224" cy="38" r="4" /></>,
  aiPoweredEnterprise: <><path d="M16 14l64 24M16 38h64M16 62l64-24h60M140 38h34M208 38h16" /><rect x="80" y="22" width="60" height="32" /><rect x="174" y="24" width="34" height="28" /><circle cx="16" cy="14" r="3" /><circle cx="16" cy="38" r="3" /><circle cx="16" cy="62" r="3" /><circle cx="224" cy="38" r="4" /></>,
};

export function SolutionIndexVisual({ solution }: { solution: SolutionVisualKey }) {
  return <svg className={styles.indexSvg} viewBox="0 0 240 76" role="img" aria-label={`${visualNames[solution]} system flow`}>{indexPaths[solution]}</svg>;
}
