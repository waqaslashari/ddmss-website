import Image from "next/image";
import type { ReactNode } from "react";
import type { WorkVisualKey } from "@/types/content";
import styles from "./work-system-visual.module.css";

const workNames: Record<WorkVisualKey, string> = {
  smartParking: "Smart Parking Ecosystem",
  evCharging: "EV Charging Platform",
  industrialOperations: "Industrial Digital Operations",
};

function HeroNetwork({ children }: { children: ReactNode }) {
  return (
    <svg className={styles.heroNetwork} viewBox="0 0 760 430" aria-hidden="true">
      <path className={styles.reference} d="M28 50H732M28 380H732M72 24v382M688 24v382" />
      {children}
    </svg>
  );
}

function SmartParkingHero() {
  return (
    <>
      <Image
        className={`${styles.heroImage} ${styles.parkingImage}`}
        src="/visuals/smart-parking.png"
        width={1536}
        height={1024}
        sizes="(max-width: 768px) 92vw, 48vw"
        alt="Smart parking environment connecting access, parking services and operational management."
        loading="eager"
      />
      <HeroNetwork>
        <path className={styles.activePath} d="M54 275h126l74-93h218l78 93h154" />
        <path className={styles.secondaryPath} d="M254 182v-82M472 182v-82M550 275v82" />
        <g className={styles.heroLabels}>
          <text x="52" y="259">ACCESS / ENTRY</text>
          <text x="238" y="84">PARKING / AVAILABILITY</text>
          <text x="468" y="84">PAYMENTS / SERVICES</text>
          <text x="574" y="260">OPERATIONS PLATFORM</text>
        </g>
      </HeroNetwork>
    </>
  );
}

function EvChargingHero() {
  return (
    <>
      <Image
        className={`${styles.heroImage} ${styles.chargerImage}`}
        src="/visuals/ev-charger.png"
        width={1024}
        height={1536}
        sizes="(max-width: 768px) 30vw, 14vw"
        alt="EV charging pedestal connected to driver and operator platform services."
        loading="eager"
      />
      <Image
        className={`${styles.heroImage} ${styles.evImage}`}
        src="/visuals/smart-mobility-ev.png"
        width={1536}
        height={1024}
        sizes="(max-width: 768px) 50vw, 24vw"
        alt="Electric vehicle associated with the connected charging journey."
        loading="eager"
      />
      <HeroNetwork>
        <path className={styles.activePath} d="M64 278h145l84-94h168l84 94h151" />
        <path className={styles.secondaryPath} d="M461 184l76-94h116M461 184l76 94v78" />
        <g className={styles.heroLabels}>
          <text x="62" y="261">DRIVER / APP</text>
          <text x="292" y="166">CHARGER / SESSION</text>
          <text x="544" y="75">PAYMENT / API</text>
          <text x="557" y="263">OPERATOR / CMS</text>
        </g>
      </HeroNetwork>
    </>
  );
}

function IndustrialHero() {
  return (
    <>
      <div className={`${styles.assetFrame} ${styles.physicalFrame}`}>
        <span>PHYSICAL / ASSET</span>
        <Image
          src="/visuals/industrial-asset.png"
          width={1536}
          height={1024}
          sizes="(max-width: 768px) 68vw, 23vw"
          alt="Physical industrial asset connected to operational data."
          loading="eager"
        />
      </div>
      <div className={`${styles.assetFrame} ${styles.twinFrame}`}>
        <span>DIGITAL / REPRESENTATION</span>
        <Image
          src="/visuals/industrial-twin.png"
          width={1536}
          height={1024}
          sizes="(max-width: 768px) 68vw, 24vw"
          alt="Digital representation supporting monitoring and operational intelligence."
          loading="eager"
        />
      </div>
      <HeroNetwork>
        <path className={styles.activePath} d="M177 218h406" />
        <path className={styles.secondaryPath} d="M294 202v32M350 202v32M406 202v32M462 202v32" />
        <g className={styles.heroLabels}>
          <text x="282" y="183">TELEMETRY / OPERATIONAL DATA</text>
          <text x="527" y="320">ANALYTICS / INTELLIGENCE</text>
        </g>
      </HeroNetwork>
    </>
  );
}

const heroVisuals: Record<WorkVisualKey, ReactNode> = {
  smartParking: <SmartParkingHero />,
  evCharging: <EvChargingHero />,
  industrialOperations: <IndustrialHero />,
};

export function WorkHeroVisual({ work }: { work: WorkVisualKey }) {
  return (
    <figure className={styles.heroFigure} aria-label={`${workNames[work]} system overview`}>
      <div className={styles.heroCanvas}>{heroVisuals[work]}</div>
      <figcaption>{workNames[work]} / system architecture</figcaption>
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

function SystemNode({ x, y, width = 116, label, sub, active = false }: NodeProps) {
  const height = sub ? 62 : 52;

  return (
    <g className={`${styles.systemNode} ${active ? styles.activeNode : ""}`}>
      <rect x={x} y={y} width={width} height={height} rx="3" />
      <text x={x + width / 2} y={y + (sub ? 25 : 31)}>{label}</text>
      {sub ? <text className={styles.nodeSub} x={x + width / 2} y={y + 45}>{sub}</text> : null}
    </g>
  );
}

function DesktopArchitecture({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg className={`${styles.architectureSvg} ${styles.desktopArchitecture}`} viewBox="0 0 1000 410" role="img" aria-label={label}>
      <path className={styles.grid} d="M20 40H980M20 130H980M20 220H980M20 310H980M100 18v374M300 18v374M500 18v374M700 18v374M900 18v374" />
      {children}
    </svg>
  );
}

function MobileArchitecture({ children, label, height = 820 }: { children: ReactNode; label: string; height?: number }) {
  return (
    <svg className={`${styles.architectureSvg} ${styles.mobileArchitecture}`} viewBox={`0 0 360 ${height}`} role="img" aria-label={label}>
      <path className={styles.grid} d={`M24 28H336M24 ${height - 28}H336M48 14v${height - 28}M180 14v${height - 28}M312 14v${height - 28}`} />
      {children}
    </svg>
  );
}

const parkingLabel = "User access flows into parking, where availability, payments, EV charging and devices connect to an operations platform and data analytics.";

function SmartParkingArchitecture() {
  return (
    <>
      <DesktopArchitecture label={parkingLabel}>
        <path className={styles.architecturePath} d="M124 204h30M276 204h28M452 204h34M610 66h36M610 156h36M610 246h36M610 336h36M796 204h80v94M486 204l0-138h20M486 204l0-48h20M486 204l0 42h20M486 204l0 132h20M762 66v270" />
        <SystemNode x={14} y={178} width={110} label="USER" />
        <SystemNode x={154} y={178} width={122} label="ACCESS" sub="ENTRY" />
        <SystemNode x={304} y={173} width={148} label="PARKING" sub="SYSTEM" active />
        <SystemNode x={506} y={40} width={104} label="AVAILABILITY" />
        <SystemNode x={506} y={130} width={104} label="PAYMENTS" />
        <SystemNode x={506} y={220} width={104} label="EV CHARGING" />
        <SystemNode x={506} y={310} width={104} label="DEVICES" />
        <SystemNode x={646} y={173} width={150} label="OPERATIONS" sub="PLATFORM" active />
        <SystemNode x={820} y={298} width={156} label="DATA" sub="ANALYTICS" />
      </DesktopArchitecture>
      <MobileArchitecture label={parkingLabel} height={890}>
        <path className={styles.architecturePath} d="M180 72v46M180 180v46M180 288v42M180 330H90v54M180 330h90v54M180 330H90v154M180 330h90v154M90 436v100h90M270 436v100h-90M90 536v48h90M270 536v48h-90M180 646v48" />
        <SystemNode x={115} y={20} width={130} label="USER" />
        <SystemNode x={115} y={118} width={130} label="ACCESS" sub="ENTRY" />
        <SystemNode x={105} y={226} width={150} label="PARKING" sub="SYSTEM" active />
        <SystemNode x={34} y={384} width={112} label="AVAILABILITY" />
        <SystemNode x={214} y={384} width={112} label="PAYMENTS" />
        <SystemNode x={34} y={484} width={112} label="EV CHARGING" />
        <SystemNode x={214} y={484} width={112} label="DEVICES" />
        <SystemNode x={105} y={584} width={150} label="OPERATIONS" sub="PLATFORM" active />
        <SystemNode x={105} y={694} width={150} label="DATA" sub="ANALYTICS" />
      </MobileArchitecture>
    </>
  );
}

const chargingLabel = "Driver interaction passes through an app or QR journey to the charger and charging platform, where sessions, tariffs, payments, status and APIs connect to the operator CMS.";

function EvChargingArchitecture() {
  return (
    <>
      <DesktopArchitecture label={chargingLabel}>
        <path className={styles.architecturePath} d="M128 204h34M284 204h34M442 204h28M620 204h230M545 173V118H505V92M545 118h120V92M545 118h240V92M545 235v34h20v31M545 269h160v31" />
        <SystemNode x={18} y={178} width={110} label="DRIVER" />
        <SystemNode x={162} y={178} width={122} label="APP / QR" />
        <SystemNode x={318} y={178} width={124} label="CHARGER" active />
        <SystemNode x={470} y={173} width={150} label="CHARGING" sub="PLATFORM" active />
        <SystemNode x={455} y={40} width={100} label="SESSION" />
        <SystemNode x={615} y={40} width={100} label="TARIFF" />
        <SystemNode x={735} y={40} width={100} label="PAYMENT" />
        <SystemNode x={515} y={300} width={100} label="STATUS" />
        <SystemNode x={655} y={300} width={100} label="API" />
        <SystemNode x={850} y={173} width={136} label="OPERATOR" sub="CMS" />
      </DesktopArchitecture>
      <MobileArchitecture label={chargingLabel} height={980}>
        <path className={styles.architecturePath} d="M180 72v46M180 170v46M180 268v46M180 376v42M180 418H90v42M180 418h90v42M90 512v40M270 512v40M90 604v78h90M270 604v78h-90M180 604v46M180 702v46" />
        <SystemNode x={115} y={20} width={130} label="DRIVER" />
        <SystemNode x={115} y={118} width={130} label="APP / QR" />
        <SystemNode x={115} y={216} width={130} label="CHARGER" active />
        <SystemNode x={105} y={314} width={150} label="CHARGING" sub="PLATFORM" active />
        <SystemNode x={34} y={460} width={112} label="SESSION" />
        <SystemNode x={214} y={460} width={112} label="TARIFF" />
        <SystemNode x={34} y={552} width={112} label="PAYMENT" />
        <SystemNode x={214} y={552} width={112} label="STATUS" />
        <SystemNode x={124} y={650} width={112} label="API" />
        <SystemNode x={105} y={748} width={150} label="OPERATOR" sub="CMS" />
      </MobileArchitecture>
    </>
  );
}

const industrialLabel = "A physical asset connects through sensors, telemetry and data to a digital representation, monitoring, analytics, intelligence and operational action.";

function IndustrialArchitecture() {
  return (
    <>
      <DesktopArchitecture label={industrialLabel}>
        <path className={styles.architecturePath} d="M130 204h16M268 204h16M406 204h16M544 204h16M682 204h16M820 204h16" />
        <SystemNode x={10} y={173} width={120} label="PHYSICAL" sub="ASSET" />
        <SystemNode x={146} y={173} width={122} label="SENSORS" sub="SYSTEMS" />
        <SystemNode x={284} y={173} width={122} label="TELEMETRY" sub="DATA" />
        <SystemNode x={422} y={173} width={122} label="DIGITAL" sub="REPRESENTATION" active />
        <SystemNode x={560} y={173} width={122} label="MONITORING" sub="ANALYTICS" />
        <SystemNode x={698} y={173} width={122} label="INTELLIGENCE" />
        <SystemNode x={836} y={173} width={154} label="OPERATIONAL" sub="ACTION" active />
        <text className={styles.architectureMeta} x="483" y="144">SYNCHRONIZED OPERATING CONTEXT</text>
      </DesktopArchitecture>
      <MobileArchitecture label={industrialLabel} height={900}>
        <path className={styles.architecturePath} d="M180 82v42M180 186v42M180 290v42M180 394v42M180 498v42M180 602v42" />
        <SystemNode x={105} y={20} width={150} label="PHYSICAL" sub="ASSET" />
        <SystemNode x={105} y={124} width={150} label="SENSORS" sub="SYSTEMS" />
        <SystemNode x={105} y={228} width={150} label="TELEMETRY" sub="DATA" />
        <SystemNode x={105} y={332} width={150} label="DIGITAL" sub="REPRESENTATION" active />
        <SystemNode x={105} y={436} width={150} label="MONITORING" sub="ANALYTICS" />
        <SystemNode x={105} y={540} width={150} label="INTELLIGENCE" />
        <SystemNode x={105} y={644} width={150} label="OPERATIONAL" sub="ACTION" active />
      </MobileArchitecture>
    </>
  );
}

const architectures: Record<WorkVisualKey, ReactNode> = {
  smartParking: <SmartParkingArchitecture />,
  evCharging: <EvChargingArchitecture />,
  industrialOperations: <IndustrialArchitecture />,
};

export function WorkArchitectureVisual({ work }: { work: WorkVisualKey }) {
  return (
    <figure className={styles.architectureFigure}>
      {architectures[work]}
      <figcaption>{workNames[work]} / textual flow described above</figcaption>
    </figure>
  );
}

export function WorkIndexVisual({ work }: { work: WorkVisualKey }) {
  const labels: Record<WorkVisualKey, readonly string[]> = {
    smartParking: ["ACCESS", "PARKING", "OPS"],
    evCharging: ["DRIVER", "CHARGER", "CMS"],
    industrialOperations: ["ASSET", "TWIN", "ACTION"],
  };

  return (
    <svg className={styles.indexSvg} viewBox="0 0 260 96" aria-hidden="true">
      <path d="M28 48H232" />
      {labels[work].map((label, index) => {
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
