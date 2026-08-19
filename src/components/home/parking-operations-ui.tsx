import Image from "next/image";

import styles from "./smart-parking-experience.module.css";

export type ParkingDemo = {
  capacity: number;
  occupied: number;
  available: number;
  chargers: {
    total: number;
    available: number;
  };
  payments: {
    sessionsToday: number;
    successRate: number;
  };
  gates: readonly {
    name: string;
    status: "Online";
  }[];
  zones: readonly {
    name: string;
    occupancy: number;
  }[];
  events: readonly {
    time: string;
    message: string;
  }[];
};

type ParkingOperationsUIProps = {
  demo: ParkingDemo;
};

function StatusDot() {
  return <span className={styles.statusDot} aria-hidden="true" />;
}

function Metric({ label, value, suffix }: { label: string; value: string | number; suffix?: string }) {
  return (
    <div className={styles.metric}>
      <span>{label}</span>
      <strong>{value}{suffix && <small>{suffix}</small>}</strong>
    </div>
  );
}

function OccupancyChart({ occupancy }: { occupancy: string }) {
  return (
    <figure className={`${styles.interfacePanel} ${styles.chartPanel}`}>
      <div className={styles.panelHeader}>
        <div><span>Occupancy Profile</span><small>Today / Illustrative</small></div>
        <strong>{occupancy}%</strong>
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-labelledby="parking-chart-title parking-chart-description">
        <title id="parking-chart-title">Parking occupancy through the day</title>
        <desc id="parking-chart-description">Occupancy rises from 28 percent at 6 AM to a current level of {occupancy} percent, peaking near midday.</desc>
        <defs>
          <linearGradient id="parking-chart-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#27d7ff" stopOpacity="0.18" />
            <stop offset="1" stopColor="#27d7ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className={styles.chartGrid}><path d="M24 24H500M24 62H500M24 100H500M24 138H500" /></g>
        <path className={styles.chartArea} d="M24 116C72 112 82 92 125 84s70-45 116-42 74 16 116 14 71 30 143 25v57H24z" />
        <path className={styles.chartLine} pathLength="1" d="M24 116C72 112 82 92 125 84s70-45 116-42 74 16 116 14 71 30 143 25" />
        <g className={styles.chartPoint}><circle cx="500" cy="81" r="4" /><circle cx="500" cy="81" r="9" /></g>
        <g className={styles.chartLabels}><text x="24" y="148">06:00</text><text x="132" y="148">09:00</text><text x="242" y="148">12:00</text><text x="350" y="148">15:00</text><text x="462" y="148">18:00</text></g>
      </svg>
    </figure>
  );
}

export function ParkingOperationsUI({ demo }: ParkingOperationsUIProps) {
  const occupancy = ((demo.occupied / demo.capacity) * 100).toFixed(1);

  return (
    <div className={styles.operationsUi} aria-label="Illustrative smart parking operations interface">
      <header className={styles.interfaceHeader}>
        <div className={styles.platformIdentity}>
          <span className={styles.platformMark}>DP</span>
          <div><strong>Parking Network</strong><small>Operational Overview</small></div>
        </div>
        <div className={styles.demoStatus}><StatusDot /><span>Live Demo</span><small>Illustrative Data</small></div>
      </header>

      <div className={styles.interfaceShell}>
        <aside className={styles.interfaceIndex} aria-label="Illustrative platform sections">
          <span className={styles.indexLabel}>System / 06</span>
          <ul>
            {['Overview', 'Live View', 'Parking Areas', 'Transactions', 'Analytics', 'Devices'].map((item, index) => (
              <li key={item} className={index === 0 ? styles.indexActive : ""} aria-current={index === 0 ? "page" : undefined}>
                <span>0{index + 1}</span>{item}
              </li>
            ))}
          </ul>
          <div className={styles.networkState}><StatusDot /><span>Network</span><strong>Operational</strong></div>
        </aside>

        <div className={styles.dashboardMain}>
          <section className={styles.metrics} aria-label="Primary parking metrics">
            <Metric label="Capacity" value={demo.capacity} />
            <Metric label="Occupied" value={demo.occupied} />
            <Metric label="Available" value={demo.available} />
            <Metric label="Occupancy" value={occupancy} suffix="%" />
          </section>

          <figure className={`${styles.interfacePanel} ${styles.facilityPanel}`}>
            <div className={styles.panelHeader}>
              <div><span>Live Facility View</span><small>Parking Asset / Connected</small></div>
              <div className={styles.onlineLabel}><StatusDot />System / Operational</div>
            </div>
            <div className={styles.facilityStage}>
              <svg viewBox="0 0 760 390" className={styles.facilityConnections} aria-hidden="true">
                <path className={styles.basePath} d="M84 291 260 194 386 247 570 146 691 211M386 247v91M260 194l-68-65" />
                <path className={styles.activePath} d="M84 291 260 194 386 247 570 146 691 211M386 247v91M260 194l-68-65" />
                <g><circle cx="84" cy="291" r="4" /><circle cx="260" cy="194" r="4" /><circle cx="386" cy="247" r="4" /><circle cx="570" cy="146" r="4" /><circle cx="691" cy="211" r="4" /></g>
              </svg>
              <Image src="/visuals/smart-parking.png" width={1536} height={1024} sizes="(max-width: 768px) calc(100vw - 64px), 43vw" alt="Connected smart parking facility showing parking zones, access infrastructure and operational systems." />
              <span className={`${styles.zoneMarker} ${styles.zoneA}`}>Zone A / 84%</span>
              <span className={`${styles.zoneMarker} ${styles.zoneB}`}>Zone B / 82%</span>
              <span className={`${styles.zoneMarker} ${styles.zoneC}`}>Zone C / 78%</span>
              <span className={styles.gateMarker}><StatusDot />Gate 01 / Online</span>
            </div>
            <figcaption className={styles.srOnly}>A connected parking facility provides live zone occupancy, access status and system telemetry to the operations platform.</figcaption>
          </figure>

          <div className={styles.statusStack}>
            <section className={`${styles.interfacePanel} ${styles.gatesPanel}`} aria-labelledby="gates-title">
              <div className={styles.panelHeader}><div><span id="gates-title">Access Control</span><small>Gate Network</small></div><span className={styles.barrierIcon} aria-hidden="true" /></div>
              <ul>{demo.gates.map((gate) => <li key={gate.name}><div><span>{gate.name}</span><small>Access / Confirmed</small></div><strong><StatusDot />{gate.status}</strong></li>)}</ul>
            </section>

            <section className={`${styles.interfacePanel} ${styles.evPanel}`} aria-labelledby="ev-title">
              <div className={styles.panelHeader}><div><span id="ev-title">EV Chargers</span><small>Network / Connected</small></div><StatusDot /></div>
              <strong>{demo.chargers.available}<span> / {demo.chargers.total}</span></strong>
              <p>Available</p>
              <div className={styles.chargerSlots} aria-hidden="true">{Array.from({ length: demo.chargers.total }, (_, index) => <span key={index} className={index < demo.chargers.available ? styles.slotAvailable : ""} />)}</div>
            </section>

            <section className={`${styles.interfacePanel} ${styles.paymentPanel}`} aria-labelledby="payment-title">
              <div className={styles.panelHeader}><div><span id="payment-title">Payment System</span><small>Connected</small></div><StatusDot /></div>
              <dl><div><dt>Sessions Today</dt><dd>{demo.payments.sessionsToday.toLocaleString('en-US')}</dd></div><div><dt>Success Rate</dt><dd>{demo.payments.successRate}%</dd></div></dl>
            </section>
          </div>

          <OccupancyChart occupancy={occupancy} />

          <section className={`${styles.interfacePanel} ${styles.zonesPanel}`} aria-labelledby="zones-title">
            <div className={styles.panelHeader}><div><span id="zones-title">Parking Zones</span><small>Current Load</small></div></div>
            <ul>{demo.zones.map((zone) => <li key={zone.name}><div><span>{zone.name}</span><strong>{zone.occupancy}%</strong></div><i><b style={{ width: `${zone.occupancy}%` }} /></i></li>)}</ul>
          </section>

          <section className={`${styles.interfacePanel} ${styles.eventsPanel}`} aria-labelledby="events-title">
            <div className={styles.panelHeader}><div><span id="events-title">Recent Activity</span><small>Operational Events</small></div></div>
            <ol>{demo.events.map((event) => <li key={`${event.time}-${event.message}`}><time>{event.time}</time><span>{event.message}</span></li>)}</ol>
          </section>
        </div>
      </div>
    </div>
  );
}
