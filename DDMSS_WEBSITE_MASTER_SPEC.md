# DDMSS Website Master Build Specification

**Project:** Digital Data & Media Solutions & Services (DDMSS) corporate website  
**Primary market:** Oman  
**Regional reach:** Middle East and Pakistan  
**Positioning:** Technology transformation and intelligent infrastructure company  
**Brand line:** Engineering the Digital Future  
**Supporting line:** AI · Data · Software · Connected Infrastructure

---

## 1. Purpose

Build a premium, high-performance corporate website that positions DDMSS as an Oman-based technology partner capable of designing and delivering intelligent digital ecosystems spanning strategy, AI, data, custom software, IoT, smart mobility, connected infrastructure and digital twins.

The site must not look like a generic web-development agency or SaaS template. It should feel engineered, enterprise-ready, cinematic and technically credible.

The homepage should tell a story:

**physical world + digital world → DDMSS connects them → capabilities → real solutions → proof → industries → approach → regional credibility → conversation.**

---

## 2. Brand Objectives

Visitors should leave with three impressions:

1. DDMSS builds serious technology.
2. DDMSS understands both software and physical operations.
3. DDMSS is capable of delivering enterprise and infrastructure projects in Oman and the wider region.

### Brand personality

- Intelligent
- Precise
- Engineering-led
- Confident
- Modern
- Practical
- Premium
- Future-focused

### Avoid

- Generic blue corporate IT visuals
- Generic SaaS templates
- Excessive glassmorphism
- Random neon effects
- Crypto/gaming aesthetics
- Stock photos of people pointing at laptops
- Buzzword-heavy copy
- Motion without meaning
- 3D for decoration only
- Huge JavaScript bundles for effects that can be achieved with CSS

---

## 3. Core Message

### Primary headline

**Engineering the Digital Future**

### Homepage supporting message

DDMSS designs intelligent digital ecosystems that combine AI, data, software and connected infrastructure to transform businesses and real-world operations.

### Secondary brand statement

**Built in Oman. Engineered for the Region.**

### Capability language

**Transform. Build. Connect. Optimize.**

- Transform — strategy, governance, process and digital change
- Build — applications, platforms, portals, APIs and digital products
- Connect — devices, infrastructure, mobility, IoT and physical systems
- Optimize — AI, analytics, automation and intelligent decision-making

---

## 4. Technology Stack

Use a modern React/TypeScript stack with progressive enhancement.

### Required

- Next.js using App Router
- TypeScript with strict mode
- Tailwind CSS v4-style configuration
- Motion for React for page/scroll/component animation
- Lucide React for interface icons
- next/font for typography
- next/image for raster image delivery

### 3D / immersive features

Use React Three Fiber + Three.js only where it materially adds value:

- homepage hero ecosystem
- digital-twin showcase
- optional interactive infrastructure scene

3D must be dynamically loaded and must never be required for users to understand or navigate the website.

### Initial content approach

Keep launch content local and version-controlled:

- typed TypeScript content objects for structured sections
- MDX or Markdown for Insights/case studies if needed

Do not introduce a CMS in the first implementation unless content volume requires it. Structure the code so a CMS can be added later without redesigning presentation components.

### Deployment

Primary workflow:

**GitHub → Vercel**

Keep the project portable so it can later be self-hosted if required.

---

## 5. Application Architecture

Use Server Components by default. Mark components `use client` only when interactivity, browser APIs, animation or WebGL requires it.

Suggested structure:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── capabilities/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── solutions/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── industries/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── insights/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── not-found.tsx
├── components/
│   ├── layout/
│   ├── ui/
│   ├── home/
│   ├── visualizations/
│   ├── three/
│   └── forms/
├── content/
│   ├── capabilities.ts
│   ├── solutions.ts
│   ├── industries.ts
│   ├── projects.ts
│   └── insights/
├── lib/
│   ├── metadata.ts
│   ├── motion.ts
│   ├── utils.ts
│   └── constants.ts
├── styles/
└── types/
```

Keep files focused. Avoid giant 500+ line page components.

---

## 6. Route Architecture

```text
/
/capabilities
/capabilities/digital-transformation-governance
/capabilities/ai-data-intelligence
/capabilities/software-digital-products
/capabilities/smart-infrastructure-iot
/capabilities/digital-twins-intelligent-operations

/solutions
/solutions/smart-parking
/solutions/ev-charging
/solutions/digital-twins
/solutions/intelligent-operations
/solutions/smart-facilities
/solutions/ai-powered-enterprise

/industries
/industries/energy-oil-gas
/industries/government-public-sector
/industries/real-estate-smart-cities
/industries/mobility-transportation
/industries/manufacturing-industrial
/industries/logistics-warehousing

/work
/work/[case-study]

/insights
/insights/[article]

/about
/contact
```

Do not build all subpages before the homepage design language is approved in code.

---

## 7. Design Tokens

### Colors

```css
--bg-primary: #071019;
--bg-deep: #040A10;
--bg-panel: #0B1622;
--bg-panel-raised: #101E2B;

--text-primary: #F3F7FA;
--text-secondary: #A6B3BF;
--text-muted: #70818E;
--text-subtle: #465765;

--cyan: #27D7FF;
--blue: #397BFF;
--violet: #9B6CFF;
--status-green: #44E28A;

--border-default: rgba(255,255,255,0.08);
--border-active: rgba(39,215,255,0.35);
```

### Main gradient

```css
linear-gradient(90deg, #27D7FF 0%, #397BFF 55%, #9B6CFF 100%)
```

Use gradients selectively. Most typography remains white or muted gray.

### Typography

Primary: **Manrope**  
Technical/data: **JetBrains Mono**

Use next/font rather than external stylesheet font loading.

### Type scale

Desktop approximate targets:

- Hero: 72–90px
- Major section heading: 48–64px
- Subheading: 28–36px
- Body: 16–18px
- Technical labels: 11–13px

Mobile:

- Hero: 42–52px
- Major section heading: 32–40px

Use fluid `clamp()` values where appropriate.

### Grid

- Maximum outer canvas: ~1440px
- Typical content width: 1280–1360px
- Desktop: 12-column grid
- Desktop horizontal padding: 48–72px
- Tablet: 32px
- Mobile: 20–24px

### Spacing

- Major section vertical spacing: 120–180px desktop
- Mobile section spacing: 72–104px
- Card gaps: 16–24px
- Section group gaps: 40–64px

Use generous negative space.

### Radius

- Small controls: 8px
- Cards/panels: 10–12px
- Large media: 12–16px maximum

Avoid pill-shaped everything.

---

## 8. Visual Language

The site should feel like:

**industrial control system + premium product company + modern technology consultancy.**

### Recurring visual motifs

- technical grid lines
- tiny coordinate markers
- flowing network paths
- connected nodes
- blueprint/wireframe overlays
- live status dots
- operational data labels
- topographic/network texture
- asset tags
- subtle bloom/glow

Background texture opacity should generally remain below 8%.

### System label examples

```text
01 / DIGITAL TRANSFORMATION
SYSTEM / ONLINE
AI ENGINE / ACTIVE
DATA STREAM / CONNECTED
ASSET P-102 / NORMAL
```

Do not fake customer data. Demo dashboards should be visibly illustrative or generic.

---

## 9. Navigation

### Desktop header

Left:

**DDMSS** logo/wordmark

Center/right:

- Capabilities
- Solutions
- Industries
- Insights
- About
- Contact

Primary CTA:

**Let's Talk →**

### Behavior

At page top:

- transparent
- integrated into hero

After scroll:

- dark translucent background
- subtle backdrop blur
- thin low-opacity bottom border
- reduced vertical height

### Mobile

Use a clean fullscreen or large-sheet menu. Do not compress the full desktop navigation into tiny text.

---

## 10. Homepage Specification

### Section 01 — Hero

Goal: communicate DDMSS in under five seconds.

Copy:

**Engineering the Digital Future**

DDMSS designs intelligent digital ecosystems that combine AI, data, software and connected infrastructure to transform businesses and real-world operations.

Actions:

- Explore Capabilities
- Start a Conversation

Visual:

A dark isometric/3D digital ecosystem containing simplified representations of:

- city/buildings
- industrial facility
- smart parking
- EV charging
- vehicle
- cloud/data node
- software platform
- AI core

The DDMSS node sits at the center and data lines connect the ecosystem.

Motion:

- slow reveal on initial load
- controlled data pulses
- subtle pointer parallax
- occasional status activity
- no continuous camera orbit

Fallback:

High-quality static render with lightweight CSS/SVG data paths.

Mobile:

Prefer static or simplified scene unless device capability supports smooth 3D.

---

### Section 02 — Physical + Digital

Headline:

**The physical and digital worlds are becoming one.**

Visual entities:

- People
- Systems
- Devices
- Infrastructure

On scroll, connection lines converge into:

**We connect them.**

Followed by:

**AI · Data · Software · Connected Infrastructure**

This section should visually inherit lines/nodes from the hero so the page feels continuous.

---

### Section 03 — Transform / Build / Connect / Optimize

Four-column desktop grid.

01 / TRANSFORM  
Strategy, governance, processes and digital change.

02 / BUILD  
Applications, platforms, APIs and digital products.

03 / CONNECT  
IoT, devices, infrastructure, mobility and physical systems.

04 / OPTIMIZE  
AI, analytics, automation and intelligent decisions.

Hover/focus may activate a subtle background visualization for the selected pillar.

---

### Section 04 — Capabilities

Headline:

**From Strategy to Systems.**

Cards:

1. Digital Transformation & Governance
2. AI & Data Intelligence
3. Software & Digital Products
4. Smart Infrastructure & IoT
5. Digital Twins & Intelligent Operations

Each card requires:

- number
- visual/icon/mini-animation
- title
- one-line explanation
- arrow/link

Hover:

- 2–4px visual movement maximum
- subtle border activation
- small glow
- arrow translation

No dramatic tilt effect.

---

### Section 05 — Solutions

Headline:

**Technology Built for the Real World.**

Primary solution cards:

- Smart Parking
- EV Charging
- Digital Twins
- Intelligent Operations
- Smart Facilities

Use real product-like scenes: infrastructure + interface + data.

Each solution should appear as something DDMSS can actually architect and deploy, not a generic consulting service.

---

### Section 06 — Featured Smart Parking Experience

Headline:

**Hardware. Software. Intelligence. One ecosystem.**

Create a polished illustrative operations interface containing:

- parking map
- zone occupancy
- capacity
- available spaces
- entry gate status
- payment system status
- EV charger availability
- simple activity/revenue chart

Suggested generic demo values:

- Capacity 260
- Occupied 213
- Available 47
- Entry Gate 01 / Online
- Payment System / Connected
- EV Chargers / 8 of 10 available

Desktop behavior:

Use a sticky description and an evolving visual panel if it remains smooth.

Do not simulate financial or operational metrics as live customer data.

---

### Section 07 — Digital Twin Showcase

Headline:

**See Operations Differently.**

Visual:

Industrial facility or high-value asset rendered in 3D or high-quality pseudo-3D.

Overlay example:

```text
PUMP P-102
STATUS       RUNNING
TEMP         68.4°C
VIBRATION    NORMAL
EFFICIENCY   92%
```

Secondary panel:

```text
ENERGY SYSTEM
CURRENT LOAD    74%
TODAY           8.42 MWh
AI FORECAST     NORMAL
```

Purpose:

Explain the concept visually:

**physical asset → sensor/data → digital model → intelligence → decision.**

Interaction must be lightweight and optional.

---

### Section 08 — Industries

Headline:

**Technology Changes When the Environment Changes.**

Industries:

- Energy & Oil + Gas
- Government & Public Sector
- Real Estate & Smart Cities
- Mobility & Transportation
- Manufacturing & Industrial
- Logistics & Warehousing

Use cinematic operational imagery, not generic business imagery.

Hover/focus reveals relevant technology tags.

Example for Energy:

**Digital Twin · IoT · AI Analytics · Asset Monitoring · Field Applications**

---

### Section 09 — Why DDMSS

Headline:

**More Than Software.**

Differentiators:

**Business First**  
Technology designed around operational requirements.

**Digital + Physical**  
Software integrated with infrastructure, equipment and devices.

**AI by Design**  
Intelligence embedded where it creates measurable value.

**Regional Understanding**  
Oman-based with regional delivery capability.

---

### Section 10 — Approach

Headline:

**A Proven Approach to Every Engagement.**

Flow:

**Understand → Design → Engineer → Integrate → Optimize**

Each step gets a concise one-line explanation and simple technical icon.

---

### Section 11 — Featured Work

Headline:

**Systems. Delivered.**

Launch placeholders/case-study categories:

- Smart Parking Ecosystem
- EV Charging Platform
- Industrial Digital Operations

Do not fabricate customers, contracts, KPIs or project results.

If a project is conceptual/prototype work, clearly label it accordingly.

---

### Section 12 — Regional Presence

Headline:

**Built in Oman. Engineered for the Region.**

Visual:

Minimal dark regional map with Oman as the strongest node and subtle connections toward regional markets and Pakistan.

Labels:

- Oman — Headquarters / Primary Market
- Middle East — Regional Markets
- Pakistan — Delivery / Technology Ecosystem

Keep this section restrained.

---

### Section 13 — Insights

Headline:

**Ideas. Insights. Impact.**

Initial themes:

- AI Governance for Enterprises
- Digital Twins in Industrial Operations
- Infrastructure Behind Smart Mobility

Each card:

- category
- headline
- image/visual
- publish date when real
- link

Do not publish fake dates or fake articles.

---

### Section 14 — Final CTA

Large, minimal and cinematic.

Headline:

**What Could Your Business Become?**

Supporting line:

Let's build intelligent digital systems that create real operational impact.

Primary CTA:

**Let's Build It →**

A subtle digital mesh/network element can appear at the edge of the viewport.

---

## 11. Footer

Include:

- DDMSS wordmark
- short positioning sentence
- capabilities links
- solutions links
- company links
- contact CTA
- LinkedIn placeholder only if an official profile exists
- privacy policy
- terms if required
- copyright year generated automatically

Do not display social icons with empty links.

---

## 12. Reusable Component Inventory

Build reusable components before duplicating styles.

### Layout

- `SiteHeader`
- `MobileNavigation`
- `SiteFooter`
- `PageShell`
- `Section`
- `SectionIntro`

### UI

- `PrimaryButton`
- `SecondaryButton`
- `TechnicalLabel`
- `StatusIndicator`
- `MetricCard`
- `TechnologyTag`
- `GradientText`

### Marketing

- `CapabilityCard`
- `SolutionCard`
- `IndustryCard`
- `CaseStudyCard`
- `InsightCard`
- `ProcessStep`

### Visualization

- `NetworkBackground`
- `DataFlowLine`
- `TechnologyNode`
- `SystemStatusPanel`
- `ParkingDashboardDemo`
- `RegionalNetworkMap`

### 3D

- `HeroEcosystemScene`
- `DigitalTwinScene`
- `SceneFallback`

Keep 3D code isolated from the rest of the application.

---

## 13. Motion System

Use Motion for React for interface/scroll animation.

### Global motion principles

Motion must feel:

- slow
- precise
- deliberate
- engineered

### Use

- opacity reveal
- 12–24px vertical movement
- subtle scale 0.98 → 1
- SVG path drawing
- network activation
- staggered data labels
- restrained counters
- hover arrow translation
- sticky storytelling sections

### Avoid

- bouncing
- exaggerated spring motion
- constant floating cards
- spinning icons
- large zoom transitions
- animation on every paragraph

### Reduced motion

Honor `prefers-reduced-motion`.

When enabled:

- disable parallax
- disable long scroll-linked motion
- minimize animated counters
- show static 3D fallback where appropriate

---

## 14. 3D / WebGL Rules

3D is enhancement, not dependency.

### Requirements

- dynamically import WebGL sections
- do not block initial text/CTA rendering
- static poster/fallback always available
- compress models and textures
- minimize geometry and materials
- cap device pixel ratio where needed
- pause or reduce rendering when offscreen
- avoid continuous scene updates unless visually necessary
- do not auto-load large 3D assets on constrained/mobile experiences

Use standard physically based materials only where needed; complex materials should not be the default.

---

## 15. Responsive Behavior

### Desktop ≥ 1200px

Full experience:

- 12-column layout
- 3D where supported
- sticky storytelling
- richer dashboards
- hover interaction

### Tablet 768–1199px

- simplified scenes
- reduced sticky behavior
- 2-column cards where appropriate
- no interaction that depends only on hover

### Mobile < 768px

- large typography retained
- sections stack vertically
- simplify WebGL dramatically or replace with static media
- no heavy cursor/parallax interaction
- dashboards become horizontally simple or vertically stacked
- navigation becomes full-screen/sheet
- CTA remains prominent

Mobile must feel intentionally designed, not like a compressed desktop page.

---

## 16. Content Model

Define typed models for all repeated content.

Example:

```ts
export type Capability = {
  slug: string
  number: string
  title: string
  shortDescription: string
  description: string
  visual: string
  highlights: string[]
}
```

Create similar types for:

- Solution
- Industry
- Project
- Insight

Components should consume data rather than hardcoding repeated arrays inside JSX.

---

## 17. SEO & Metadata

Every public route requires:

- unique title
- unique meta description
- canonical URL strategy
- Open Graph data
- social share image
- semantic heading structure

Generate:

- `sitemap.ts`
- `robots.ts`
- application icons
- Open Graph image assets

Add structured data later where truthful and relevant, such as Organization and Article schemas.

Never invent ratings, reviews, addresses, certifications or customer relationships for schema markup.

---

## 18. Images & Media

Use `next/image` for raster content whenever appropriate.

### Asset categories

- hero ecosystem poster
- industrial environments
- parking infrastructure
- EV charging
- smart buildings
- digital twin renders
- project imagery
- insight thumbnails

### Treatment

- cool/dark grade
- restrained saturation
- high local contrast
- subtle cyan/blue technical overlays where appropriate

Prefer AVIF/WebP output through the framework pipeline where practical.

Avoid large unoptimized PNG/JPEG backgrounds.

---

## 19. Accessibility

Target WCAG 2.2 AA-quality implementation.

Requirements:

- semantic HTML
- keyboard-accessible navigation
- visible focus states
- meaningful alt text
- adequate text/background contrast
- buttons must be buttons; links must be links
- no essential information conveyed by color alone
- no hover-only functionality
- reduced-motion support
- correct form labels and validation feedback
- logical heading order

3D scenes must have accessible textual equivalents.

---

## 20. Performance

Performance is part of the brand.

### Priorities

- text and primary CTA render before immersive assets
- minimize client components
- lazy-load below-the-fold media
- dynamically load 3D
- keep animation libraries scoped
- use optimized fonts and images
- avoid unnecessary dependencies
- avoid autoplay video above the fold unless proven performant

### Working quality targets

Aim for production builds that achieve strong Lighthouse scores on representative devices, with particular focus on:

- LCP
- CLS
- INP
- accessibility
- SEO

Do not sacrifice clarity or performance to hit an arbitrary score, but treat regressions seriously.

---

## 21. Contact Experience

Page headline:

**Start a Conversation**

Qualifying selector:

**What are you looking to achieve?**

Options:

- Digital Transformation
- AI Solution
- Software Development
- Smart Parking
- EV Charging
- Digital Twin
- IoT Solution
- Other

Fields:

- Name
- Company
- Work email
- Phone optional
- Project interest
- Message

Include:

- server-side validation
- spam prevention
- clear success/error states

Do not wire a third-party mail or CRM provider until credentials/provider are deliberately selected.

---

## 22. Engineering Quality

Codex must:

- use strict TypeScript
- keep components composable
- avoid `any` except where technically unavoidable and documented
- run lint before considering a task complete
- keep console free of errors/warnings
- maintain semantic markup
- use deterministic data for demos
- avoid hydration mismatches
- avoid unnecessary global state
- document unusual implementation decisions

Prefer simple solutions over elaborate abstractions.

---

## 23. Build Sequence for Codex

Do not ask Codex to build the complete website in one pass.

### Phase 0 — Foundation

1. Initialize project.
2. Configure fonts.
3. Configure global tokens.
4. Create page container/grid primitives.
5. Build header/footer.
6. Add lint/typecheck scripts.
7. Create core content types.

**Checkpoint:** global shell looks premium before continuing.

### Phase 1 — Homepage static design

Build without WebGL first:

1. Hero with static ecosystem poster/placeholder
2. Physical + Digital
3. Four operating pillars
4. Capabilities
5. Solutions
6. Smart Parking demo UI
7. Digital Twin static visual
8. Industries
9. Why DDMSS
10. Approach
11. Featured Work
12. Regional Presence
13. Insights
14. Final CTA

**Checkpoint:** homepage visually matches approved concept at desktop and mobile sizes.

### Phase 2 — Motion

Add:

- section reveals
- network lines
- card interactions
- scroll progression
- sticky sections where useful
- reduced motion behavior

**Checkpoint:** motion improves understanding rather than distracting.

### Phase 3 — Immersive scenes

Add optional:

- hero React Three Fiber ecosystem
- digital twin scene

Do not proceed if these materially reduce performance.

### Phase 4 — Internal pages

Build page templates for:

- capability
- solution
- industry
- project/case study
- insight/article

Then populate content.

### Phase 5 — Conversion & SEO

- contact form
- metadata
- sitemap/robots
- OG imagery
- analytics only when platform is selected

### Phase 6 — QA

Test:

- desktop
- tablet
- mobile
- keyboard navigation
- reduced motion
- slow network
- WebGL unavailable
- production build

---

## 24. Codex Working Rules

Before changing code, Codex should:

1. Read this specification.
2. Inspect the current repository.
3. Preserve approved design tokens and content architecture.
4. Make the smallest coherent implementation for the current phase.

After each significant task:

1. run lint
2. run typecheck
3. run production build when practical
4. report changed files
5. report unresolved issues
6. do not silently change the design direction

When a visual requirement is ambiguous, prioritize:

**clarity → brand consistency → performance → spectacle.**

---

## 25. Visual Acceptance Criteria

The implementation is not approved merely because all sections exist.

It should meet these visual criteria:

- hero feels premium and distinctive
- typography is large and confident
- enough negative space exists between ideas
- borders are restrained
- cyan is an accent, not a flood color
- cards are not generic SaaS cards
- dashboards look credible and engineered
- imagery relates to real operational environments
- animations feel deliberate
- mobile experience remains premium
- no section feels copied from a template library

---

## 26. First Codex Task

Use this as the first implementation request after placing this specification in the repository:

> Read `DDMSS_WEBSITE_MASTER_SPEC.md` in full. Create the project foundation only. Use Next.js App Router, TypeScript, Tailwind CSS, Manrope and JetBrains Mono. Implement the global design tokens, responsive content container, base page background, technical texture layer, SiteHeader, MobileNavigation, SiteFooter, PrimaryButton, SecondaryButton, TechnicalLabel and Section primitives. Do not build the homepage sections or add WebGL yet. Keep Server Components as the default and use client components only where necessary. Match the DDMSS dark graphite/cyan visual system exactly. Run lint, typecheck and a production build, then summarize what was created and any issues.

Only after the foundation is visually reviewed should Codex receive the homepage task.

---

## 27. Final Principle

The DDMSS website itself should demonstrate the company's positioning.

It should not merely say DDMSS understands AI, data, software and connected infrastructure. Through its interface, system visualizations, motion, responsiveness and polish, it should make that capability believable.
