"use client";

import { useRef, type PointerEvent } from "react";
import styles from "./hero-ecosystem.module.css";

export function HeroEcosystem() {
  const visualRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || !visualRef.current) return;

    const bounds = visualRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    visualRef.current.style.setProperty("--pointer-x", x.toFixed(3));
    visualRef.current.style.setProperty("--pointer-y", y.toFixed(3));
  }

  function resetPointer() {
    visualRef.current?.style.setProperty("--pointer-x", "0");
    visualRef.current?.style.setProperty("--pointer-y", "0");
  }

  return (
    <figure
      ref={visualRef}
      className={styles.ecosystem}
      role="img"
      aria-label="Illustration of physical infrastructure, smart mobility, connected data, software and an AI intelligence core working as one digital ecosystem."
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <svg
        className={styles.scene}
        viewBox="40 45 680 581"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="ddmss-plane" x1="82" y1="320" x2="680" y2="575">
            <stop stopColor="#101E2B" stopOpacity="0.78" />
            <stop offset="0.62" stopColor="#0B1622" stopOpacity="0.48" />
            <stop offset="1" stopColor="#071019" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="ddmss-cyan-blue" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#27D7FF" />
            <stop offset="1" stopColor="#397BFF" />
          </linearGradient>
          <linearGradient id="ddmss-blue-violet" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#397BFF" />
            <stop offset="1" stopColor="#9B6CFF" />
          </linearGradient>
          <radialGradient id="ddmss-core" cx="0" cy="0" r="1" gradientTransform="translate(374 308) rotate(90) scale(98)">
            <stop stopColor="#27D7FF" stopOpacity="0.24" />
            <stop offset="0.62" stopColor="#397BFF" stopOpacity="0.08" />
            <stop offset="1" stopColor="#071019" stopOpacity="0" />
          </radialGradient>
          <pattern id="ddmss-micro-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" stroke="#A6B3BF" strokeOpacity="0.07" />
          </pattern>
          <filter id="ddmss-soft-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="ddmss-object-shadow" x="-30%" y="-30%" width="180%" height="190%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#02070B" floodOpacity="0.68" />
          </filter>
        </defs>

        <g className={styles.backLayer}>
          <path d="M42 126H170M590 92H718M52 544H126M642 570H720" stroke="#A6B3BF" strokeOpacity="0.12" />
          <path d="M42 116V136M718 82V102M52 534V554M720 560V580" stroke="#27D7FF" strokeOpacity="0.24" />
          <text x="44" y="106" className={styles.coordinate}>ECOSYSTEM / 01</text>
          <text x="590" y="76" className={styles.coordinate}>SYSTEM / CONNECTED</text>

          <path
            d="M60 430 348 263 706 455 412 620Z"
            fill="url(#ddmss-plane)"
            stroke="#397BFF"
            strokeOpacity="0.17"
          />
          <path d="M60 430 412 620M132 388 483 580M204 347 555 541M276 305 628 501M348 263 706 455" stroke="#A6B3BF" strokeOpacity="0.075" />
          <path d="M60 430 348 263M130 468 418 301M201 506 489 339M271 544 559 377M342 582 630 415M412 620 706 455" stroke="#A6B3BF" strokeOpacity="0.075" />
          <path d="M60 430 348 263 706 455 412 620Z" fill="url(#ddmss-micro-grid)" opacity="0.52" />
        </g>

        <g className={styles.flowLayer}>
          <path id="path-industrial" d="M342 331C292 352 250 387 203 424" className={styles.basePath} />
          <path d="M342 331C292 352 250 387 203 424" className={styles.dataPath} />
          <path id="path-facility" d="M415 316C477 317 525 344 568 382" className={styles.basePath} />
          <path d="M415 316C477 317 525 344 568 382" className={`${styles.dataPath} ${styles.dataPathDelay}`} />
          <path id="path-mobility" d="M380 356C397 412 418 454 468 493" className={styles.basePath} />
          <path d="M380 356C397 412 418 454 468 493" className={`${styles.dataPath} ${styles.dataPathSlow}`} />
          <path id="path-ev" d="M402 347C497 364 604 405 644 520" className={styles.basePath} />
          <path d="M402 347C497 364 604 405 644 520" className={`${styles.dataPath} ${styles.dataPathDelay}`} />
          <path id="path-cloud" d="M377 267C392 213 421 171 466 139" className={styles.basePath} />
          <path d="M377 267C392 213 421 171 466 139" className={styles.dataPath} />
          <path id="path-software" d="M410 284C473 245 532 229 594 235" className={styles.basePath} />
          <path d="M410 284C473 245 532 229 594 235" className={`${styles.dataPath} ${styles.dataPathSlow}`} />
        </g>

        <g className={styles.backLayer}>
          <g className={styles.dataSystem} transform="translate(420 86)">
            <path d="M21 50C8 50 0 41 0 29c0-11 8-20 19-21C24 1 32-3 42-3c16 0 28 10 31 24 11 1 19 9 19 19 0 11-9 20-22 20H21Z" fill="#0B1622" stroke="#397BFF" strokeOpacity="0.48" />
            <path d="M23 28h45M32 38h28" stroke="#27D7FF" strokeOpacity="0.45" />
            <circle cx="69" cy="28" r="2.5" fill="#44E28A" />
            <text x="21" y="78" className={`${styles.labelStrong} ${styles.mobileKey}`}>DATA / CLOUD</text>
            <text x="21" y="91" className={styles.labelMuted}>STREAM / CONNECTED</text>
          </g>

          <g className={styles.secondarySystem} transform="translate(548 184)">
            <path d="M0 12 18 0h126v78L126 90H0Z" fill="#0B1622" fillOpacity="0.86" stroke="#9B6CFF" strokeOpacity="0.42" />
            <path d="M0 12h126l18-12M126 12v78" stroke="#A6B3BF" strokeOpacity="0.12" />
            <circle cx="18" cy="27" r="2" fill="#44E28A" />
            <path d="M29 27h72M18 43h94M18 54h66M18 66h80" stroke="#A6B3BF" strokeOpacity="0.2" />
            <path d="M18 54h36" stroke="#9B6CFF" strokeOpacity="0.72" />
            <text x="0" y="111" className={`${styles.labelStrong} ${styles.mobileSecondary}`}>SOFTWARE LAYER</text>
            <text x="0" y="124" className={styles.labelMuted}>API / OPERATIONS</text>
          </g>
        </g>

        <g className={styles.midLayer}>
          <g className={`${styles.physicalAsset} ${styles.primaryAsset}`} transform="translate(106 344)">
            <path d="M0 84 74 41l108 59-74 43Z" fill="#0B1622" stroke="#27D7FF" strokeOpacity="0.18" />
            <path d="M19 72v-43l43-24 34 19v43L53 92Z" fill="#101E2B" stroke="#A6B3BF" strokeOpacity="0.22" />
            <path d="m19 29 34 19 43-24M53 48v44" stroke="#A6B3BF" strokeOpacity="0.16" />
            <path d="M109 72V26l23-13 23 13v46" fill="#0B1622" stroke="#A6B3BF" strokeOpacity="0.24" />
            <ellipse cx="132" cy="26" rx="23" ry="13" fill="#101E2B" stroke="#27D7FF" strokeOpacity="0.3" />
            <ellipse cx="132" cy="72" rx="23" ry="13" fill="#071019" stroke="#A6B3BF" strokeOpacity="0.18" />
            <path d="M73 8V-27h12V8" fill="#101E2B" stroke="#A6B3BF" strokeOpacity="0.22" />
            <path d="M69-27h20" stroke="#27D7FF" strokeOpacity="0.38" />
            <circle cx="79" cy="-35" r="3" fill="#44E28A" filter="url(#ddmss-soft-glow)" />
            <text x="0" y="166" className={`${styles.labelStrong} ${styles.mobileSecondary}`}>INDUSTRIAL ASSET</text>
            <text x="0" y="179" className={styles.labelMuted}>DIGITAL TWIN / EDGE</text>
          </g>

          <g className={`${styles.physicalAsset} ${styles.primaryAsset}`} transform="translate(541 325)">
            <path d="M0 94 72 52l107 59-73 43Z" fill="#0B1622" stroke="#397BFF" strokeOpacity="0.2" />
            <path d="M24 81V11l45-26 45 25v71L69 107Z" fill="#101E2B" stroke="#A6B3BF" strokeOpacity="0.25" />
            <path d="m24 11 45 25 45-26M69 36v71" stroke="#A6B3BF" strokeOpacity="0.16" />
            <path d="m37 32 20 11v13L37 45Zm0 25 20 11v13L37 70Zm45-17 19-11v13L82 53Zm0 25 19-11v13L82 78Z" fill="#397BFF" fillOpacity="0.18" stroke="#27D7FF" strokeOpacity="0.28" />
            <path d="M119 89V45l27-15 26 15v43l-26 16Z" fill="#0B1622" stroke="#A6B3BF" strokeOpacity="0.2" />
          </g>
        </g>

        <g className={styles.mobileSecondary}>
          <path d="M710 170V316l-18 20" stroke="#397BFF" strokeOpacity="0.28" strokeDasharray="2 5" />
          <circle cx="692" cy="336" r="2.25" fill="#27D7FF" fillOpacity="0.72" />
          <text x="710" y="145" textAnchor="end" className={styles.labelStrong}>SMART FACILITY</text>
          <text x="710" y="158" textAnchor="end" className={styles.labelMuted}>BUILDING / CONNECTED</text>
        </g>

        <g className={styles.frontLayer}>
          <g className={styles.physicalAsset} transform="translate(380 456)">
            <path d="M0 41 82-7l122 67-83 48Z" fill="#0B1622" fillOpacity="0.9" stroke="#27D7FF" strokeOpacity="0.2" />
            <path d="m28 42 22-13m7 29 22-13m7 29 22-13m7 29 22-13m7 29 22-13" stroke="#A6B3BF" strokeOpacity="0.22" />
            <path d="M41 18 157 82M26 48l116 64" stroke="#A6B3BF" strokeOpacity="0.1" />
            <rect x="73" y="27" width="22" height="9" rx="2" transform="rotate(29 73 27)" fill="#397BFF" fillOpacity="0.55" stroke="#27D7FF" strokeOpacity="0.5" />
            <rect x="112" y="75" width="22" height="9" rx="2" transform="rotate(29 112 75)" fill="#27D7FF" fillOpacity="0.32" stroke="#27D7FF" strokeOpacity="0.5" />
            <path d="M13 19v-27h20v27M19-1h8M23-8v-8" stroke="#27D7FF" strokeOpacity="0.62" />
            <text x="0" y="137" className={`${styles.labelStrong} ${styles.mobileKey}`}>SMART PARKING</text>
            <text x="0" y="150" className={styles.labelMuted}>ZONE A / CONNECTED</text>
          </g>

          <g className={styles.physicalAsset} transform="translate(620 486)">
            <path d="M0 78 38 56l55 30-38 22Z" fill="#0B1622" stroke="#397BFF" strokeOpacity="0.22" />
            <path d="m17 65 26-15 27 15-27 16Z" fill="#101E2B" stroke="#397BFF" strokeOpacity="0.38" />
            <path d="M24 61V1h38v61L43 72Z" fill="#101E2B" stroke="#27D7FF" strokeOpacity="0.46" />
            <rect x="32" y="12" width="21" height="18" rx="2" fill="#071019" stroke="#397BFF" strokeOpacity="0.55" />
            <path d="m42 15-6 8h6l-3 6 9-10h-6l3-4Z" fill="#27D7FF" />
            <path d="M62 19c18 4 18 20 10 29-4 5-5 8-1 13" stroke="#9B6CFF" strokeOpacity="0.55" />
            <circle cx="72" cy="62" r="3" fill="#44E28A" />
            <text x="0" y="118" className={`${styles.labelStrong} ${styles.mobileKey}`}>EV NETWORK</text>
            <text x="0" y="131" className={styles.labelMuted}>CHARGER / READY</text>
          </g>

          <g className={styles.physicalAsset} transform="translate(238 485)">
            <image
              href="/visuals/smart-mobility-ev.png"
              x="-34"
              y="-12"
              width="180"
              height="101"
              preserveAspectRatio="xMidYMid meet"
              opacity="0.9"
            />
            <text x="0" y="91" className={`${styles.labelStrong} ${styles.mobileSecondary}`}>SMART MOBILITY</text>
            <text x="0" y="104" className={styles.labelMuted}>VEHICLE / EDGE</text>
          </g>
        </g>

        <g className={styles.coreLayer}>
          <ellipse cx="374" cy="350" rx="76" ry="24" fill="#040A10" fillOpacity="0.48" />
          <circle cx="374" cy="308" r="98" fill="url(#ddmss-core)" />
          <circle cx="374" cy="308" r="68" stroke="#397BFF" strokeOpacity="0.18" strokeDasharray="3 8" />
          <circle cx="374" cy="308" r="52" stroke="#27D7FF" strokeOpacity="0.34" />
          <path d="m374 264 39 22v44l-39 22-39-22v-44Z" fill="#071019" fillOpacity="0.98" stroke="url(#ddmss-cyan-blue)" strokeWidth="1.7" filter="url(#ddmss-soft-glow)" />
          <path d="M357 290h13v13h-13zm21 0h13v13h-13zm-21 21h13v13h-13zm21 0h13v13h-13z" fill="#27D7FF" fillOpacity="0.88" />
          <text x="374" y="368" textAnchor="middle" className={`${styles.coreLabel} ${styles.desktopCoreLabel}`}>DDMSS / AI CORE</text>
          <text x="374" y="368" textAnchor="middle" className={`${styles.coreLabel} ${styles.mobileCoreLabel}`}>AI CORE</text>
          <text x="374" y="382" textAnchor="middle" className={styles.labelMuted}>INTELLIGENCE / ACTIVE</text>
          <circle cx="333" cy="318" r="3" fill="#27D7FF" filter="url(#ddmss-soft-glow)" />
          <circle cx="414" cy="303" r="3" fill="#9B6CFF" filter="url(#ddmss-soft-glow)" />
        </g>

        <g className={styles.nodeLayer}>
          <circle cx="203" cy="424" r="4" className={styles.node} />
          <circle cx="568" cy="382" r="4" className={styles.node} />
          <circle cx="468" cy="493" r="4" className={styles.node} />
          <circle cx="615" cy="491" r="4" className={styles.node} />
          <circle cx="466" cy="139" r="4" className={styles.nodeViolet} />
          <circle cx="594" cy="235" r="4" className={styles.nodeViolet} />
        </g>

        <g className={styles.mobileLabelGroup}>
          <text x="466" y="164" textAnchor="middle" className={styles.mobileLabel}>DATA / CLOUD</text>
          <text x="620" y="284" textAnchor="middle" className={styles.mobileLabel}>SOFTWARE</text>
          <text x="374" y="372" textAnchor="middle" className={styles.mobileLabel}>AI CORE</text>
          <text x="158" y="501" textAnchor="middle" className={styles.mobileLabel}>INDUSTRIAL ASSET</text>
          <text x="294" y="586" textAnchor="middle" className={styles.mobileLabel}>SMART MOBILITY</text>
          <text x="490" y="590" textAnchor="middle" className={styles.mobileLabel}>SMART PARKING</text>
          <text x="650" y="306" textAnchor="middle" className={styles.mobileLabel}>SMART FACILITY</text>
          <text x="666" y="614" textAnchor="middle" className={styles.mobileLabel}>EV NETWORK</text>
        </g>
      </svg>
    </figure>
  );
}
