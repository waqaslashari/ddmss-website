# DDMSS homepage audit and refinement

Date: 6 September 2026. Scope: the existing homepage, Phases 0 and 1A–1M.

## Assessment

The homepage has a distinctive, coherent industrial-technology identity and a strong physical → digital → intelligence narrative. Its operational illustrations and dashboard examples are substantially more concrete than a generic agency or SaaS presentation. This pass fixes functional mobile problems and improves pacing, labeling and keyboard behavior without changing the brand or rebuilding sections.

It is **not yet a launch-complete website**: 29 linked destinations, including Contact, return 404. Completing those routes and substantiating project narratives is more valuable than another broad visual redesign.

These are qualitative audit ratings, not Lighthouse scores or an accessibility certification. UX includes the limitations of the currently missing routes; performance remains provisional until deployed-device measurements are available.

| Area | /10 | Assessment |
| --- | ---: | --- |
| Overall | 7.8 | Strong homepage foundation; destination pages and conversion workflow remain incomplete. |
| Visual design | 8.7 | Distinctive, restrained and operationally grounded. Selected transitions are now tighter. |
| UX | 7.4 | Navigation and selectors are improved; unfinished destinations prevent complete journeys. |
| Content clarity | 8.3 | Clear positioning and outcomes; some repetition is inherent in the comprehensive story. |
| Mobile experience | 8.0 | Major layout/focus defects corrected; all content remains readable, but the page is still long. |
| Accessibility | 7.8 | Better modal behavior, tabs and focus order; manual assistive-technology and cross-browser testing remain. |
| Performance | 7.6 | Static rendering and optimized assets are sound; SVG/animation density and production prefetch 404s still warrant attention. |
| Maintainability | 8.0 | Typed data, section components and scoped CSS are sound; the client boundary is smaller. |

## Prioritized findings and actions

### Critical — fixed

1. **Mobile navigation was constrained by the blurred header.** Its fixed-position menu inherited the header's containing block; after scrolling, the dialog could be only approximately 152px tall. Replaced the custom overlay with a native modal dialog in the browser top layer. It now fills the viewport, makes background content inert, locks body scrolling, resets internal scroll on opening, wraps Tab/Shift+Tab, closes with Escape and restores focus. Resizing to desktop closes the menu and releases the scroll lock.
2. **How We Work retained five columns on mobile.** Its rail became vertical while its grid did not, producing overlapping columns even though the document itself did not overflow. The tablet/mobile rule now explicitly uses one column with the existing vertical delivery journey.

### High value — completed

- Separated solution telemetry/status labels and the mobile data path from nearby labels. Checked the special 360px layout as well as normal phone widths.
- Moved the Digital Twin Experience sync overlay away from its primary/subtitle label area.
- Changed tablet Industries at 768–1023px from six oversized full-width entries to a two-column journey. Phone and desktop architectures remain intact.
- Improved regional label readability, added restrained leaders and aligned mobile network nodes to the existing geography. The US is shown as a westward off-map connection, not a false point on the cropped map. Oman remains dominant; regional descriptors and claims are unchanged.
- Reduced selected desktop section padding, oversized minimum heights and transition gaps. No global text-size reduction or blanket whitespace compression.
- Kept the hero SVG on the server, with only a small client wrapper for pointer interaction. Touch, small-screen and reduced-motion cases do not run parallax updates.

### Safe medium improvements — completed

- Added solution tab semantics, roving focus, arrow-key navigation and Home/End behavior. Preserved industry keyboard navigation; mouse hover no longer changes selection while focus is inside either tab list.
- Removed 13 nonfunctional article tab stops from the operating model and credibility/methodology content. Static diagrams remain readable without pretending to be controls.
- Made demo/illustrative data explicit in Solutions, the Digital Twin Experience and the flagship capability visualization. Numeric values were not changed.
- Improved selected meaningful metadata contrast using existing tokens.
- Reused regional land/coast definitions with SVG `use` references instead of repeating the path data in desktop and mobile renderings. Geography and asset files were not regenerated.

## Before / after observations

Measurements below use the same in-app browser viewport sizes at normal zoom. Small differences in page height can occur during header transitions. These are layout measurements, not speed benchmarks.

| Width | Before height | After height | Change |
| ---: | ---: | ---: | ---: |
| 1920 | 19,182px | 18,362px | −4.3% |
| 1440 | 18,629px | 17,663px | −5.2% |
| 1366 | 17,985px | 17,094px | −5.0% |
| 1024 | 18,629px | 18,215px | −2.2% |
| 820 | 26,684px | 24,929px | −6.6% |
| 768 | 26,554px | 24,917px | −6.2% |
| 430 | 33,721px | 34,510px | +2.3% |
| 390 | 33,589px | 34,405px | +2.4% |
| 360 | 33,539px | 34,402px | +2.6% |
| 320 | 33,982px | 34,956px | +2.9% |

Mobile becomes slightly longer because previously overlapping methodology content now occupies its proper readable space. Compressing this corrected content merely to meet a percentage target would undermine the audit's readability objective.

All 14 homepage phases and the footer remain in sequence. Regional Presence remains between Featured Work and Insights. The hero wording, typography, imagery, SVG objects, global colors, header branding, footer and approved regional descriptions were preserved. Existing uncommitted Phase 1M, typography, navigation-link and hero-WebP work was preserved rather than credited as new work from this audit.

## Architecture, performance and SEO

- Existing stack retained: Next.js 16.3.1 App Router, React 19.2.8, strict TypeScript and Tailwind CSS 4 with CSS Modules. No new dependencies.
- Five client entry points remain, each with a concrete interaction requirement:
  - `header-frame.tsx`: scroll-responsive header state.
  - `mobile-navigation.tsx`: modal state, focus and scroll locking.
  - `ecosystem-frame.tsx`: pointer parallax wrapper; the SVG child is server-rendered.
  - `solutions-showcase.tsx`: active solution and keyboard selection.
  - `industries-showcase.tsx`: active industry and keyboard selection.
- Existing hero WebPs were already present before this audit. Other major raster illustrations use `next/image`, dimensions, responsive sizes and lazy loading; no source images were recompressed or replaced in this pass.
- A sampled 1440px production walkthrough plus all five solution states fetched optimized image responses of approximately 12–131KB each, rather than transferring their multi-megabyte PNG originals. Different responsive variants are legitimate, though some duplicate presentation remains in the DOM.
- In that sample, encoded JavaScript resource bodies totaled approximately 151KB and the two font files totaled approximately 65KB. Generated homepage HTML was approximately 535KB uncompressed / 100KB when gzip-compressed locally. These are local observations, not a deployed performance guarantee or a before/after speed claim.
- The build statically prerenders `/`. Continuous SVG/CSS animation remains a possible low-end-device cost; profile it before introducing an offscreen-animation mechanism.
- Existing title, description and Open Graph basics accurately describe digital transformation, AI, data, software, connected infrastructure and Oman-based delivery. They were left intact. One H1, descriptive section headings, semantic lists and image alternatives remain present.
- Canonical production URL, social preview artwork, sitemap/robots policy and final brand assets should be finalized with the launch domain/content. No domain, legal presence or social proof was invented.

## Outstanding routes

The homepage returns 200. All four navigation section anchors and the skip-link target resolve. The following **29 distinct linked routes return 404** in the production build:

| Group | Missing routes |
| --- | --- |
| Company | `/about`, `/contact` |
| Capabilities | `/capabilities`, `/capabilities/digital-transformation-governance`, `/capabilities/ai-data-intelligence`, `/capabilities/software-digital-products`, `/capabilities/smart-infrastructure-iot`, `/capabilities/digital-twins-intelligent-operations` |
| Solutions | `/solutions`, `/solutions/smart-parking`, `/solutions/ev-charging`, `/solutions/digital-twins`, `/solutions/intelligent-operations`, `/solutions/smart-facilities` |
| Industries | `/industries`, `/industries/energy-oil-gas`, `/industries/government-public-sector`, `/industries/real-estate-smart-cities`, `/industries/mobility-transportation`, `/industries/manufacturing-industrial`, `/industries/logistics-warehousing` |
| Work | `/work`, `/work/smart-parking-ecosystem`, `/work/ev-charging-platform`, `/work/industrial-digital-operations` |
| Insights | `/insights`, `/insights/ai-governance-for-enterprises`, `/insights/digital-twins-industrial-operations`, `/insights/infrastructure-behind-smart-mobility` |

No placeholder pages or fabricated project results were added. Contact is the highest-priority launch dependency because all conversation CTAs lead there. Production Next.js prefetch requests to unfinished routes also produce 404 console entries; this is an outstanding issue, not a clean-console pass.

## Validation

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; the initial restricted-network attempt could not fetch Google Fonts, and the network-enabled run succeeded.
- `git diff --check`: passed.
- Visual walkthrough and section captures reviewed at 1920×1080, 1440×900, 1366×768, 1024×900, 820×1000, 768×1024, 430×900, 390×844, 360×800 and 320×700. No reduced desktop zoom was used.
- Overflow checked at all ten widths in both the in-app browser and a separate production Chromium/Edge context: `document.documentElement.scrollWidth <= window.innerWidth`. No global horizontal-overflow masking was added.
- Menu additionally tested at 320×640: full-height dialog, first navigation item visible, reopen scroll reset, bidirectional focus wrap, Escape, restored focus/scrolling and desktop-resize cleanup. Mobile Capabilities anchor placement remains below the sticky header.
- Keyboard skip link was also verified from a fresh load: it becomes visible and moves focus to `main-content`.
- Solution and industry tab navigation checked, including active-panel association and Home/End. All five solution visual states inspected.
- Reduced-motion emulation at 1440px and 390px: no ongoing long-running CSS animations, regional SMIL pulse groups hidden and no pointer parallax styles applied.
- Production walkthrough: no uncaught JavaScript errors, hydration warnings or broken visible images. Remaining console failures are 404 fetches to unfinished page routes, not image/font failures.
- This was a WCAG 2.2 AA-oriented review, not a formal conformance audit. Real screen-reader, Safari/Firefox, touch-device and deployed Core Web Vitals testing remain necessary before launch.

Visual review artifacts: [1440px section overview](C:/Users/prowa/.codex/visualizations/2026/08/18/01a01494-c35e-7ef3-b32d-cb45bf62a874/ddmss-audit/1440-overview.png), [320px methodology detail](C:/Users/prowa/.codex/visualizations/2026/08/18/01a01494-c35e-7ef3-b32d-cb45bf62a874/ddmss-audit/320-detail-10.png), [final mobile telemetry clearance](C:/Users/prowa/.codex/visualizations/2026/08/18/01a01494-c35e-7ef3-b32d-cb45bf62a874/ddmss-audit/final-twin-solution-320.png). Test scripts and captures are outside the repository and add no project dependency.

## Exact repository files changed by this audit

This list is relative to the initial working-tree snapshot, not `HEAD`; the repository already contained substantial uncommitted work.

| File | Change |
| --- | --- |
| [mobile-navigation.tsx](D:/Development/ddmss-website/src/components/layout/mobile-navigation.tsx) | Fullscreen native modal, keyboard containment, scroll reset/lock and desktop cleanup. |
| [ecosystem-frame.tsx](D:/Development/ddmss-website/src/components/home/ecosystem-frame.tsx) | New small client-only pointer wrapper. |
| [hero-ecosystem.tsx](D:/Development/ddmss-website/src/components/home/hero-ecosystem.tsx) | Server-rendered SVG composed into the wrapper; existing geometry/assets retained. |
| [solutions-showcase.tsx](D:/Development/ddmss-website/src/components/home/solutions-showcase.tsx) | Accessible tab selection and keyboard behavior. |
| [solutions-section.tsx](D:/Development/ddmss-website/src/components/home/solutions-section.tsx) | Illustrative-data qualifier. |
| [solutions-section.module.css](D:/Development/ddmss-website/src/components/home/solutions-section.module.css) | Label separation, mobile path clearance and selected spacing. |
| [industries-showcase.tsx](D:/Development/ddmss-website/src/components/home/industries-showcase.tsx) | Keyboard-safe hover selection. |
| [industries-section.module.css](D:/Development/ddmss-website/src/components/home/industries-section.module.css) | Tablet grid, focus containment and section spacing. |
| [credibility-section.tsx](D:/Development/ddmss-website/src/components/home/credibility-section.tsx) | Removed static article tab stops. |
| [credibility-section.module.css](D:/Development/ddmss-website/src/components/home/credibility-section.module.css) | Corrected mobile methodology grid/rail and selected desktop spacing. |
| [operating-model-section.tsx](D:/Development/ddmss-website/src/components/home/operating-model-section.tsx) | Removed static article tab stops. |
| [operating-model-section.module.css](D:/Development/ddmss-website/src/components/home/operating-model-section.module.css) | Modest mobile pillar spacing adjustment. |
| [digital-twin-experience.tsx](D:/Development/ddmss-website/src/components/home/digital-twin-experience.tsx) | Illustrative-data qualifier. |
| [digital-twin-experience.module.css](D:/Development/ddmss-website/src/components/home/digital-twin-experience.module.css) | Sync-label clearance, metadata contrast and spacing. |
| [capability-visual.tsx](D:/Development/ddmss-website/src/components/home/capability-visual.tsx) | Demo telemetry label. |
| [smart-parking-experience.module.css](D:/Development/ddmss-website/src/components/home/smart-parking-experience.module.css) | Outer spacing/transition reduction; dashboard typography and data unchanged. |
| [featured-work-section.module.css](D:/Development/ddmss-website/src/components/home/featured-work-section.module.css) | Selected outer spacing/minimum-height reduction. |
| [insights-section.module.css](D:/Development/ddmss-website/src/components/home/insights-section.module.css) | Selected outer spacing/minimum-height reduction. |
| [regional-network-map.tsx](D:/Development/ddmss-website/src/components/home/regional-network-map.tsx) | Shared definitions, leaders and geographically aligned mobile nodes. |
| [real-geographic-map.tsx](D:/Development/ddmss-website/src/components/home/real-geographic-map.tsx) | Shared geography definitions and SVG references; this file was already untracked. |
| [regional-presence-section.module.css](D:/Development/ddmss-website/src/components/home/regional-presence-section.module.css) | Map label readability, balanced map viewport and selected spacing. |
| [DDMSS_AUDIT_REPORT.md](D:/Development/ddmss-website/DDMSS_AUDIT_REPORT.md) | This report. |

No changes from this audit to global CSS/tokens, layout metadata, page sequence, home-hero copy/typography, header branding, footer, content data, image assets, package files or the master specification. Existing changes in some of those files remain in the working tree.

## Remaining improvements and launch gates

1. Build Contact and the detail/index pages above, with a real conversion workflow and approved content. Do not publish with broken primary conversion links.
2. Confirm which Featured Work systems are deployed, demonstrators or concepts; add only approved evidence and outcomes. Keep illustrative dashboard values clearly distinct from customer results.
3. Confirm the launch domain and complete canonical/social/sitemap/robots decisions; supply the final DDMSS logo/favicon assets.
4. Run deployed, throttled mobile performance tests and profile offscreen animation before adding complexity. The long page is intentional but still merits real-user navigation testing.
5. Add a repeatable repository-level browser regression suite once the testing toolchain is approved. This audit used already-available external tooling without adding project dependencies.
6. Complete assistive-technology and cross-browser QA, including native-dialog behavior on actual mobile devices. Decorative reference text is intentionally dim; an exhaustive contrast inventory remains part of formal certification.

## Git state

Branch: `main`, tracking `origin/main` according to local Git status. No commits were amended, and nothing was staged, committed or pushed.

The tree remains dirty: 30 tracked files modified, plus seven untracked paths as shown by short status (including the pre-existing hero asset directory and Phase 1M/geography files). This audit changed 20 existing source files, added one source file and added this report. Pre-existing work was preserved using an initial status/diff inventory and source/asset hash comparison.

Untracked paths: `DDMSS_AUDIT_REPORT.md`, `public/visuals/hero/`, `src/components/home/ecosystem-frame.tsx`, `src/components/home/final-cta-section.module.css`, `src/components/home/final-cta-section.tsx`, `src/components/home/real-geographic-map.tsx`, `src/components/home/regional-geography-data.ts`.

Stop for review. No additional homepage phase has been started.
