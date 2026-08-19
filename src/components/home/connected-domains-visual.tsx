import styles from "./physical-digital-section.module.css";

const domains = [
  {
    key: "people",
    number: "01",
    title: "People",
    detail: "Users / Operators",
  },
  {
    key: "systems",
    number: "02",
    title: "Systems",
    detail: "Software / Platforms",
  },
  {
    key: "devices",
    number: "03",
    title: "Devices",
    detail: "IoT / Edge",
  },
  {
    key: "infrastructure",
    number: "04",
    title: "Infrastructure",
    detail: "Physical / Assets",
  },
] as const;

type DomainKey = (typeof domains)[number]["key"];

function DomainIcon({ domain }: { domain: DomainKey }) {
  if (domain === "people") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="15" r="6" />
        <path d="M12 37c1-8 5-12 12-12s11 4 12 12M8 20h5m22 0h5" />
        <circle cx="8" cy="20" r="1.5" className={styles.iconStatus} />
        <circle cx="40" cy="20" r="1.5" />
      </svg>
    );
  }

  if (domain === "systems") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="9" width="32" height="25" rx="1" />
        <path d="M8 16h32M14 12h2m4 0h2M15 23h18M15 28h12M18 39h12" />
        <circle cx="35" cy="12" r="1.5" className={styles.iconStatus} />
      </svg>
    );
  }

  if (domain === "devices") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="14" y="13" width="20" height="25" rx="1" />
        <path d="M20 19h8v8h-8zM24 8v5m-4-7 4-3 4 3M9 20h5m20 0h5M9 30h5m20 0h5" />
        <circle cx="24" cy="33" r="1.5" className={styles.iconStatus} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m7 20 17-10 17 10-17 10Z" />
      <path d="M7 20v17l17 10 17-10V20M24 30v17M14 24v8m20-8v8" />
      <circle cx="38" cy="36" r="1.5" className={styles.iconStatus} />
    </svg>
  );
}

export function ConnectedDomainsVisual() {
  return (
    <figure className={styles.visual} aria-labelledby="connected-domains-caption">
      <figcaption id="connected-domains-caption" className="sr-only">
        People, systems, devices and infrastructure converge through a shared
        DDMSS data and intelligence layer.
      </figcaption>

      <svg
        className={styles.network}
        viewBox="0 0 1000 560"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="domain-path-active" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#27D7FF" />
            <stop offset="0.58" stopColor="#397BFF" />
            <stop offset="1" stopColor="#9B6CFF" />
          </linearGradient>
          <radialGradient id="domain-hub-field">
            <stop stopColor="#27D7FF" stopOpacity="0.16" />
            <stop offset="1" stopColor="#071019" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="500" cy="280" rx="170" ry="124" fill="url(#domain-hub-field)" />

        <g className={styles.baseConnections}>
          <path d="M185 145C300 145 360 214 454 262" />
          <path d="M815 132C706 140 643 205 546 262" />
          <path d="M190 432C304 423 366 345 454 298" />
          <path d="M820 422C704 414 639 346 546 298" />
          <path d="M500 330V545" />
        </g>

        <g className={styles.activeConnections}>
          <path d="M185 145C300 145 360 214 454 262" />
          <path d="M815 132C706 140 643 205 546 262" />
          <path d="M190 432C304 423 366 345 454 298" />
          <path d="M820 422C704 414 639 346 546 298" />
          <path d="M500 330V545" />
        </g>

        <g className={styles.networkNodes}>
          <circle cx="185" cy="145" r="4" />
          <circle cx="815" cy="132" r="4" />
          <circle cx="190" cy="432" r="4" />
          <circle cx="820" cy="422" r="4" />
          <circle cx="500" cy="280" r="5" />
          <circle cx="500" cy="545" r="3" />
        </g>

        <path className={styles.gridLine} d="M74 280H926M500 48V520" />
        <path className={styles.coordinateLine} d="M75 72h88M837 487h88" />
        <path className={styles.coordinateTick} d="M75 66v12M925 481v12" />
      </svg>

      <ol className={styles.domainList}>
        {domains.map((domain) => (
          <li
            key={domain.key}
            className={`${styles.domain} ${styles[domain.key]}`}
          >
            <span className={styles.iconFrame} aria-hidden="true">
              <DomainIcon domain={domain.key} />
            </span>
            <span className={styles.domainCopy}>
              <span className={styles.domainNumber}>{domain.number} / DOMAIN</span>
              <strong>{domain.title}</strong>
              <span className={styles.domainDetail}>{domain.detail}</span>
            </span>
          </li>
        ))}
      </ol>

      <div className={styles.hub} aria-label="Shared intelligence and data convergence point">
        <span className={styles.hubOrbit} aria-hidden="true" />
        <span className={styles.hubCore} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className={styles.hubCopy}>
          <strong>Intelligence / Convergence</strong>
          <span>Data / Connected</span>
        </span>
      </div>

      <span className={`${styles.systemMarker} ${styles.markerLeft}`} aria-hidden="true">
        INPUT / PHYSICAL
      </span>
      <span className={`${styles.systemMarker} ${styles.markerRight}`} aria-hidden="true">
        STATE / CONNECTED
      </span>
    </figure>
  );
}
