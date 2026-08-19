"use client";

import { useRef, type PointerEvent } from "react";
import styles from "./hero-ecosystem.module.css";

type AssetImageProps = { href: string; x: number; y: number; width: number; height: number };

function AssetImage({ href, x, y, width, height }: AssetImageProps) {
  return <image className={styles.assetImage} href={href} x={x} y={y} width={width} height={height} preserveAspectRatio="xMidYMid meet" />;
}

export function HeroEcosystem() {
  const visualRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch" || !visualRef.current) return;
    const bounds = visualRef.current.getBoundingClientRect();
    visualRef.current.style.setProperty("--pointer-x", (((event.clientX - bounds.left) / bounds.width) - 0.5).toFixed(3));
    visualRef.current.style.setProperty("--pointer-y", (((event.clientY - bounds.top) / bounds.height) - 0.5).toFixed(3));
  }

  function resetPointer() {
    visualRef.current?.style.setProperty("--pointer-x", "0");
    visualRef.current?.style.setProperty("--pointer-y", "0");
  }

  return (
    <figure ref={visualRef} className={styles.ecosystem} role="img" aria-label="Illustration of physical infrastructure, smart mobility, connected data, software and an AI intelligence core working as one digital ecosystem." onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <svg className={styles.scene} viewBox="40 45 680 581" fill="none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="ddmss-plane" x1="82" y1="320" x2="680" y2="575"><stop stopColor="#101E2B" stopOpacity="0.78" /><stop offset="0.62" stopColor="#0B1622" stopOpacity="0.48" /><stop offset="1" stopColor="#071019" stopOpacity="0.16" /></linearGradient>
          <linearGradient id="ddmss-cyan-blue" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#27D7FF" /><stop offset="1" stopColor="#397BFF" /></linearGradient>
          <radialGradient id="ddmss-core" cx="0" cy="0" r="1" gradientTransform="translate(374 308) rotate(90) scale(98)"><stop stopColor="#27D7FF" stopOpacity="0.24" /><stop offset="0.62" stopColor="#397BFF" stopOpacity="0.08" /><stop offset="1" stopColor="#071019" stopOpacity="0" /></radialGradient>
          <pattern id="ddmss-micro-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" stroke="#A6B3BF" strokeOpacity="0.07" /></pattern>
          <filter id="ddmss-soft-glow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          <filter id="ddmss-object-shadow" x="-30%" y="-30%" width="180%" height="190%"><feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#02070B" floodOpacity="0.68" /></filter>
        </defs>

        <g className={styles.backLayer}>
          <path d="M42 126H170M590 92H718M52 544H126M642 570H720" stroke="#A6B3BF" strokeOpacity="0.12" />
          <path d="M42 116V136M718 82V102M52 534V554M720 560V580" stroke="#27D7FF" strokeOpacity="0.24" />
          <text x="44" y="106" className={styles.coordinate}>ECOSYSTEM / 01</text><text x="590" y="76" className={styles.coordinate}>SYSTEM / CONNECTED</text>
          <path d="M60 430 348 263 706 455 412 620Z" fill="url(#ddmss-plane)" stroke="#397BFF" strokeOpacity="0.17" />
          <path d="M60 430 412 620M132 388 483 580M204 347 555 541M276 305 628 501M348 263 706 455" stroke="#A6B3BF" strokeOpacity="0.075" />
          <path d="M60 430 348 263M130 468 418 301M201 506 489 339M271 544 559 377M342 582 630 415M412 620 706 455" stroke="#A6B3BF" strokeOpacity="0.075" />
          <path d="M60 430 348 263 706 455 412 620Z" fill="url(#ddmss-micro-grid)" opacity="0.52" />
        </g>

        <g className={`${styles.flowLayer} ${styles.desktopOnly}`}>
          <path d="M342 331C292 352 250 387 203 424" className={styles.basePath} /><path d="M342 331C292 352 250 387 203 424" className={styles.dataPath} />
          <path d="M415 316C477 317 525 344 568 382" className={styles.basePath} /><path d="M415 316C477 317 525 344 568 382" className={`${styles.dataPath} ${styles.dataPathDelay}`} />
          <path d="M351 351C332 413 309 468 287 514" className={styles.basePath} /><path d="M351 351C332 413 309 468 287 514" className={`${styles.dataPath} ${styles.dataPathSlow}`} />
          <path d="M380 356C397 412 430 458 477 500" className={styles.basePath} /><path d="M380 356C397 412 430 458 477 500" className={`${styles.dataPath} ${styles.dataPathDelay}`} />
          <path d="M340 281C310 260 273 231 232 214" className={styles.basePath} /><path d="M340 281C310 260 273 231 232 214" className={`${styles.dataPath} ${styles.dataPathDelay}`} />
          <path d="M377 267C392 213 421 171 466 139" className={styles.basePath} /><path d="M377 267C392 213 421 171 466 139" className={styles.dataPath} />
          <path d="M410 284C473 245 532 229 594 235" className={styles.basePath} /><path d="M410 284C473 245 532 229 594 235" className={`${styles.dataPath} ${styles.dataPathSlow}`} />
        </g>

        <g className={`${styles.flowLayer} ${styles.mobileOnly}`}>
          <path d="M342 331C281 350 208 385 135 409" className={styles.basePath} /><path d="M342 331C281 350 208 385 135 409" className={styles.dataPath} />
          <path d="M414 319C480 329 545 360 603 392" className={styles.basePath} /><path d="M414 319C480 329 545 360 603 392" className={`${styles.dataPath} ${styles.dataPathDelay}`} />
          <path d="M351 352C326 418 292 479 261 520" className={styles.basePath} /><path d="M351 352C326 418 292 479 261 520" className={`${styles.dataPath} ${styles.dataPathSlow}`} />
          <path d="M382 357C411 416 448 474 484 510" className={styles.basePath} /><path d="M382 357C411 416 448 474 484 510" className={`${styles.dataPath} ${styles.dataPathDelay}`} />
          <path d="M340 281C300 250 252 210 204 176" className={styles.basePath} /><path d="M340 281C300 250 252 210 204 176" className={`${styles.dataPath} ${styles.dataPathDelay}`} />
          <path d="M377 267C382 218 387 168 392 126" className={styles.basePath} /><path d="M377 267C382 218 387 168 392 126" className={styles.dataPath} />
          <path d="M410 283C478 238 541 205 600 183" className={styles.basePath} /><path d="M410 283C478 238 541 205 600 183" className={`${styles.dataPath} ${styles.dataPathSlow}`} />
        </g>

        <g className={`${styles.backLayer} ${styles.desktopOnly}`}>
          <g className={styles.assetGroup}><AssetImage href="/visuals/cloud-server.png" x={414} y={70} width={116} height={78} /><text x="428" y="160" className={styles.labelStrong}>DATA / CLOUD</text><text x="428" y="173" className={styles.labelMuted}>STREAM / CONNECTED</text></g>
          <g className={styles.assetGroup}><AssetImage href="/visuals/rack-server.png" x={556} y={116} width={94} height={141} /><text x="558" y="273" className={styles.labelStrong}>SOFTWARE / COMPUTE</text><text x="558" y="286" className={styles.labelMuted}>SYSTEMS / OPERATIONS</text></g>
        </g>
        <g className={`${styles.midLayer} ${styles.desktopOnly}`}>
          <g className={styles.assetGroup}><AssetImage href="/visuals/industrial-asset.png" x={74} y={326} width={205} height={137} /><text x="88" y="480" className={styles.labelStrong}>INDUSTRIAL ASSET</text><text x="88" y="493" className={styles.labelMuted}>DIGITAL TWIN / EDGE</text></g>
          <g className={styles.assetGroup}><AssetImage href="/visuals/smart-facility.png" x={528} y={288} width={190} height={127} /><text x="578" y="430" className={styles.labelStrong}>SMART FACILITY</text><text x="578" y="443" className={styles.labelMuted}>BUILDING / CONNECTED</text></g>
        </g>
        <g className={`${styles.frontLayer} ${styles.desktopOnly}`}>
          <g className={styles.assetGroup}><AssetImage href="/visuals/smart-parking.png" x={390} y={432} width={190} height={127} /><text x="430" y="577" className={styles.labelStrong}>SMART PARKING</text><text x="430" y="590" className={styles.labelMuted}>ZONE A / CONNECTED</text></g>
          <g className={styles.assetGroup}><AssetImage href="/visuals/smart-mobility-ev.png" x={205} y={467} width={170} height={113} /><text x="232" y="591" className={styles.labelStrong}>SMART MOBILITY</text><text x="232" y="604" className={styles.labelMuted}>VEHICLE / EDGE</text></g>
        </g>

        <g className={`${styles.midLayer} ${styles.desktopOnly}`}>
          <g className={styles.assetGroup}><AssetImage href="/visuals/ev-charger.png" x={198} y={149} width={66} height={99} /><text x="190" y="265" className={styles.labelStrong}>EV NETWORK</text><text x="190" y="278" className={styles.labelMuted}>CHARGER / READY</text></g>
        </g>

        <g className={`${styles.backLayer} ${styles.mobileOnly}`}>
          <g className={styles.assetGroup}><AssetImage href="/visuals/cloud-server.png" x={330} y={55} width={125} height={83} /></g>
          <g className={styles.assetGroup}><AssetImage href="/visuals/rack-server.png" x={564} y={105} width={72} height={108} /></g>
        </g>
        <g className={`${styles.midLayer} ${styles.mobileOnly}`}>
          <g className={styles.assetGroup}><AssetImage href="/visuals/industrial-asset.png" x={55} y={342} width={158} height={105} /></g>
          <g className={styles.assetGroup}><AssetImage href="/visuals/smart-facility.png" x={528} y={326} width={155} height={103} /></g>
        </g>
        <g className={`${styles.frontLayer} ${styles.mobileOnly}`}>
          <g className={styles.assetGroup}><AssetImage href="/visuals/smart-parking.png" x={410} y={452} width={148} height={99} /></g>
          <g className={styles.assetGroup}><AssetImage href="/visuals/smart-mobility-ev.png" x={185} y={466} width={152} height={101} /></g>
        </g>
        <g className={`${styles.midLayer} ${styles.mobileOnly}`}>
          <g className={styles.assetGroup}><AssetImage href="/visuals/ev-charger.png" x={175} y={115} width={58} height={87} /></g>
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
          <circle cx="333" cy="318" r="3" fill="#27D7FF" filter="url(#ddmss-soft-glow)" /><circle cx="414" cy="303" r="3" fill="#9B6CFF" filter="url(#ddmss-soft-glow)" />
        </g>

        <g className={`${styles.nodeLayer} ${styles.desktopOnly}`}>
          <circle cx="203" cy="424" r="4" className={styles.node} /><circle cx="568" cy="382" r="4" className={styles.node} /><circle cx="287" cy="514" r="4" className={styles.node} /><circle cx="477" cy="500" r="4" className={styles.node} /><circle cx="232" cy="214" r="4" className={styles.node} /><circle cx="466" cy="139" r="4" className={styles.nodeViolet} /><circle cx="594" cy="235" r="4" className={styles.nodeViolet} />
        </g>
        <g className={`${styles.nodeLayer} ${styles.mobileOnly}`}>
          <circle cx="135" cy="409" r="4" className={styles.node} /><circle cx="603" cy="392" r="4" className={styles.node} /><circle cx="261" cy="520" r="4" className={styles.node} /><circle cx="484" cy="510" r="4" className={styles.node} /><circle cx="204" cy="176" r="4" className={styles.node} /><circle cx="392" cy="126" r="4" className={styles.nodeViolet} /><circle cx="600" cy="183" r="4" className={styles.nodeViolet} />
        </g>

        <g className={styles.mobileLabelGroup}>
          <text x="204" y="220" textAnchor="middle" className={styles.mobileLabel}>EV NETWORK</text><text x="392" y="153" textAnchor="middle" className={styles.mobileLabel}>DATA / CLOUD</text><text x="600" y="228" textAnchor="middle" className={styles.mobileLabel}>SOFTWARE</text><text x="374" y="376" textAnchor="middle" className={styles.mobileLabel}>AI CORE</text><text x="134" y="465" textAnchor="middle" className={styles.mobileLabel}>INDUSTRIAL</text><text x="261" y="588" textAnchor="middle" className={styles.mobileLabel}>MOBILITY</text><text x="484" y="570" textAnchor="middle" className={styles.mobileLabel}>PARKING</text><text x="605" y="446" textAnchor="middle" className={styles.mobileLabel}>FACILITY</text>
        </g>
      </svg>
    </figure>
  );
}
