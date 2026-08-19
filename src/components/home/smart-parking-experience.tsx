import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { ParkingOperationsUI, type ParkingDemo } from "./parking-operations-ui";
import styles from "./smart-parking-experience.module.css";

const parkingDemo: ParkingDemo = {
  capacity: 260,
  occupied: 213,
  available: 47,
  chargers: { total: 10, available: 8 },
  payments: { sessionsToday: 1284, successRate: 99.2 },
  gates: [
    { name: "Entry Gate 01", status: "Online" },
    { name: "Exit Gate 02", status: "Online" },
  ],
  zones: [
    { name: "Zone A", occupancy: 84 },
    { name: "Zone B", occupancy: 82 },
    { name: "Zone C", occupancy: 78 },
  ],
  events: [
    { time: "14:42", message: "Gate 01 access confirmed" },
    { time: "14:39", message: "EV Charger 06 session started" },
    { time: "14:35", message: "Zone B availability updated" },
  ],
};

export function SmartParkingExperience() {
  return (
    <section className={styles.section} aria-labelledby="smart-parking-heading">
      <div className={styles.handoff} aria-hidden="true"><span>Now look inside the system</span></div>
      <div className="content-container">
        <div className={styles.composition}>
          <header className={styles.intro}>
            <TechnicalLabel>06 / Featured Solution</TechnicalLabel>
            <h2 id="smart-parking-heading">Smart Parking. Connected End to End.</h2>
            <p>A complete ecosystem connecting parking infrastructure, access, availability, payments, EV charging and operational intelligence.</p>
            <span className={styles.systemStatement}>Hardware · Software · Data · Intelligence</span>
            <Link href="/solutions/smart-parking" className={styles.cta}>Explore Smart Parking<ArrowIcon className={styles.arrow} /></Link>
          </header>

          <ParkingOperationsUI demo={parkingDemo} />
        </div>

        <div className={styles.sectionExit} aria-hidden="true"><span>From Operations</span><i /><span>Intelligence</span></div>
      </div>
    </section>
  );
}
