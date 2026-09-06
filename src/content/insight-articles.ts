import { getInsightSummary } from "@/content/insights";
import type {
  ContentReference,
  InsightPageContent,
} from "@/types/internal-pages";

function summaryFor(slug: string) {
  const insight = getInsightSummary(slug);

  if (!insight) {
    throw new Error(`Missing established insight summary for ${slug}`);
  }

  return insight;
}

const capabilities = {
  transformation: {
    family: "capability",
    slug: "digital-transformation-governance",
    title: "Digital Transformation & Governance",
    description: "Strategy, governance and delivery models shaped around operational change.",
  },
  intelligence: {
    family: "capability",
    slug: "ai-data-intelligence",
    title: "AI & Data Intelligence",
    description: "Trusted data foundations, analytics and responsible intelligence.",
  },
  software: {
    family: "capability",
    slug: "software-digital-products",
    title: "Software & Digital Products",
    description: "Applications, platforms, APIs and operational experiences.",
  },
  connected: {
    family: "capability",
    slug: "smart-infrastructure-iot",
    title: "Smart Infrastructure & IoT",
    description: "Devices and physical infrastructure connected to digital systems.",
  },
  twins: {
    family: "capability",
    slug: "digital-twins-intelligent-operations",
    title: "Digital Twins & Intelligent Operations",
    description: "Synchronised assets, operational context and intelligent action.",
  },
} as const satisfies Record<string, ContentReference>;

const solutions = {
  enterpriseAi: {
    family: "solution",
    slug: "ai-powered-enterprise",
    title: "AI-Powered Enterprise",
    description: "Governed assistants, agents and automation grounded in enterprise context.",
  },
  twins: {
    family: "solution",
    slug: "digital-twins",
    title: "Digital Twins",
    description: "Physical assets connected to useful digital representations.",
  },
  operations: {
    family: "solution",
    slug: "intelligent-operations",
    title: "Intelligent Operations",
    description: "Operational systems, data and intelligence connected to accountable action.",
  },
  parking: {
    family: "solution",
    slug: "smart-parking",
    title: "Smart Parking",
    description: "Connected access, parking, payments and operational management.",
  },
  charging: {
    family: "solution",
    slug: "ev-charging",
    title: "EV Charging",
    description: "Driver, charger, payment and operator platform integration.",
  },
  facilities: {
    family: "solution",
    slug: "smart-facilities",
    title: "Smart Facilities",
    description: "Building, access, mobility and asset systems connected to operations.",
  },
} as const satisfies Record<string, ContentReference>;

const work = {
  parking: {
    family: "work",
    slug: "smart-parking-ecosystem",
    title: "Smart Parking Ecosystem",
    description: "A parking system architecture connecting access, services and operations.",
  },
  charging: {
    family: "work",
    slug: "ev-charging-platform",
    title: "EV Charging Platform",
    description: "A charging architecture connecting drivers, infrastructure and operators.",
  },
  industrial: {
    family: "work",
    slug: "industrial-digital-operations",
    title: "Industrial Digital Operations",
    description: "An architecture connecting assets, telemetry and decision support.",
  },
} as const satisfies Record<string, ContentReference>;

const insightReferences = {
  aiGovernance: {
    family: "insight",
    slug: "ai-governance-for-enterprises",
    title: "AI Governance for Enterprises",
    description: "Accountability, data controls and human oversight for enterprise AI.",
  },
  digitalTwins: {
    family: "insight",
    slug: "digital-twins-industrial-operations",
    title: "Digital Twins in Industrial Operations",
    description: "Operational context behind useful digital representations.",
  },
  smartMobility: {
    family: "insight",
    slug: "infrastructure-behind-smart-mobility",
    title: "Building the Infrastructure Behind Smart Mobility",
    description: "The physical and digital layers behind connected mobility services.",
  },
} as const satisfies Record<string, ContentReference>;

const finalCta = {
  marker: "INSIGHT / CONTINUE",
  title: "Connect the idea to the operating reality.",
  description:
    "Explore how the principles in this article could inform a practical, governed system in your organisation.",
  action: { label: "Discuss This Topic", href: "/contact" },
} as const;

const aiSummary = summaryFor("ai-governance-for-enterprises");

const aiGovernance: InsightPageContent = {
  family: "insight",
  slug: "ai-governance-for-enterprises",
  visualKey: "aiGovernance",
  category: "AI & GOVERNANCE",
  seo: {
    title: aiSummary.title,
    description: aiSummary.summary,
  },
  hero: {
    marker: "INSIGHT / 01",
    title: aiSummary.title,
    introduction: aiSummary.summary,
    technicalLine: "AI & GOVERNANCE",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Insights", href: "/insights" },
      { label: aiSummary.title },
    ],
  },
  sections: [
    {
      id: "governance-question",
      title: "AI Adoption Is a Governance Question",
      body: [
        "Enterprise AI is often introduced as a tool-selection exercise. That framing is too narrow. The moment an AI system interprets internal information, recommends a course of action or participates in a workflow, it becomes part of the organisation's operating model. Responsibility, access and acceptable use therefore matter as much as model capability.",
        "Governance does not mean placing a policy around a completed technical experiment. It means deciding who is accountable for the use case, which information the system may access, how outputs are checked and where approval remains with a person. These choices shape the architecture before a model or platform is selected.",
        "A useful starting question is not, ‘What AI tool should we deploy?’ It is, ‘What business problem exists, what evidence can be trusted, what support is appropriate and who remains responsible for the outcome?’ Answering those questions creates a controlled route from opportunity to implementation.",
      ],
      callout: {
        label: "KEY PRINCIPLE",
        text: "The level of governance should follow the consequence of the decision or action—not the novelty of the technology.",
      },
      diagramKey: "aiGovernance",
    },
    {
      id: "business-objective",
      title: "Start With the Business Objective",
      body: [
        "A credible AI initiative begins with a defined operational problem. The use case should identify the user, the decision or task being supported, the information available and the outcome the organisation is trying to improve. Without that definition, experimentation can produce impressive demonstrations that have no dependable place in day-to-day work.",
        "The desired outcome should be expressed in business and operational terms. It may involve making information easier to find, helping a team review complex documents, improving the consistency of a classification task or supporting a decision with relevant evidence. The objective should be understandable without referring to a particular model.",
        "Success criteria also need to match the use case. Quality, timeliness, traceability, adoption and the frequency of human correction may all be relevant. A single technical accuracy score rarely captures whether a system is useful, safe and workable inside an enterprise process.",
      ],
    },
    {
      id: "data-before-intelligence",
      title: "Data Comes Before Intelligence",
      body: [
        "AI output reflects the information and context available to the system. If source data is incomplete, poorly owned or difficult to interpret, adding a capable model does not remove the underlying uncertainty. The system may produce a fluent answer while concealing the gaps that made the answer unreliable.",
        "Data governance begins with ownership and purpose. Teams need to know which sources are authoritative, who may access them, how current they are and what restrictions apply. Privacy, confidentiality and contractual obligations should be represented in the access design rather than left to informal user judgement.",
        "Structured records and unstructured documents require different controls. A database field may have a defined owner and schema, while a document repository may contain drafts, duplicates and superseded policies. Retrieval quality depends on preserving document identity, version and context—not merely making the text searchable.",
        "The most useful AI architecture is therefore often a data and knowledge architecture first. It connects approved sources, preserves permissions and provides enough provenance for a user to understand where an answer came from. Intelligence becomes dependable when evidence remains visible.",
      ],
    },
    {
      id: "automation-boundary",
      title: "Define the Boundary of Automation",
      body: [
        "AI assistance and automated action are not the same design choice. A system that organises information for review carries a different consequence from one that changes a record, sends a communication or initiates an operational process. Greater autonomy requires stronger validation, permissions and recovery paths.",
        "A practical hierarchy moves from information, to recommendation, to human review, and only then to approved action. Some low-consequence tasks may justify a shorter path. Others should retain explicit review because the decision affects people, money, safety, compliance or a material business commitment.",
        "The boundary should be visible to users. Interfaces need to distinguish generated content from verified records, explain when a recommendation is provisional and make approval an intentional act. Hidden automation can weaken accountability even when the underlying model performs well.",
      ],
      callout: {
        label: "CONTROL BOUNDARY",
        text: "INFORMATION → RECOMMENDATION → HUMAN REVIEW → APPROVED ACTION",
      },
    },
    {
      id: "governance-by-design",
      title: "Governance by Design",
      body: [
        "Governance becomes effective when it is translated into system behaviour. Policy defines acceptable use; permissions determine who can access a capability or source; validation tests whether an output meets the required standard; and logging records what the system received, produced and triggered.",
        "Approval controls should reflect operational consequence. A drafting assistant may require clear source attribution and user review. An agent with access to enterprise tools may also need scoped credentials, action limits, confirmation steps and a durable record of every tool call. The architecture should make unsafe paths difficult, not merely prohibited in documentation.",
        "Model and tool selection are part of this control system. Different use cases may require different levels of reasoning, latency, privacy, deployment control or output consistency. Choosing one model for every task can be simpler administratively but may create unnecessary cost or risk.",
        "Governance also continues after launch. Source information changes, models are updated and users find new ways to apply a capability. Periodic review should examine behaviour, corrections, incidents, access and whether the original business objective still justifies the system's scope.",
      ],
    },
    {
      id: "human-oversight",
      title: "Build for Human Oversight",
      body: [
        "Human oversight should not be treated as a fallback added because AI may fail. It is part of the operating design. People contribute context, judgement and responsibility that are not captured by a model output, particularly when evidence is ambiguous or consequences extend beyond the immediate task.",
        "Effective oversight requires more than an approval button. Reviewers need access to the source material, a clear explanation of what the system has done and enough time and authority to challenge it. If checking an output is harder than recreating the work, the control will not function reliably.",
        "Feedback should also improve the system rather than disappear into individual corrections. Capturing why an output was changed can reveal data gaps, unclear policy or a use case that has moved beyond its intended boundary. Oversight is therefore both a control and a source of operational learning.",
      ],
    },
    {
      id: "adoption-framework",
      title: "A Practical Adoption Framework",
      body: [
        "A staged adoption model allows governance and technical learning to develop together. It begins with a bounded problem and named accountability, then connects only the information required for that use case. A pilot can test the full workflow without prematurely extending access or autonomy.",
        "Validation should include representative users and difficult cases, not only a prepared demonstration. The organisation can then compare system behaviour with the agreed success criteria, refine controls and decide whether the capability is ready for broader use.",
        "Scaling should repeat the discipline rather than simply increase user numbers. New departments, data sources and actions introduce new ownership and risk. Each expansion should preserve the relationship between objective, evidence, permission, oversight and measurable value.",
      ],
      list: {
        style: "ordered",
        items: [
          "DEFINE — establish the business problem, user, outcome and accountable owner.",
          "GOVERN — set policy, permissions, review responsibilities and action boundaries.",
          "CONNECT DATA — use approved sources with ownership, context and provenance.",
          "PILOT — test a bounded workflow with representative users and evidence.",
          "VALIDATE — assess quality, risk, usability and operational fit before expansion.",
          "SCALE — extend deliberately while maintaining controls and lifecycle review.",
        ],
      },
    },
    {
      id: "practical-implications",
      title: "Practical Implications for Leadership",
      body: [
        "AI governance cannot sit entirely with a technology team. Business owners define the purpose and acceptable outcome; data owners establish authority over information; risk and legal functions clarify constraints; and engineering teams turn those decisions into architecture and controls. A named decision forum helps resolve trade-offs before they become implementation problems.",
        "Investment should include the less visible foundations: data preparation, access design, evaluation, workflow integration and ongoing review. These elements may contribute more to dependable adoption than the model demonstration itself. Treating them as optional overhead usually transfers cost and uncertainty into operations.",
        "The goal is not to remove experimentation. It is to create a route by which useful experiments can become accountable enterprise capabilities. Clear boundaries make it easier to move with confidence because the organisation knows what the system is allowed to do and how its behaviour will be assessed.",
      ],
    },
    {
      id: "key-takeaways",
      title: "Key Takeaways",
      body: [
        "Enterprise AI becomes valuable when business purpose, trusted information and accountable use are designed as one system. The following principles provide a practical basis for evaluating an initiative.",
      ],
      list: {
        style: "unordered",
        items: [
          "Begin with a defined business problem and responsible owner, not a preferred AI tool.",
          "Treat data ownership, access, privacy and provenance as part of the AI architecture.",
          "Separate assistance, recommendation and automated action through explicit control boundaries.",
          "Give human reviewers the evidence, authority and interface needed for meaningful oversight.",
          "Scale only after the complete workflow—including governance and exception handling—has been validated.",
        ],
      },
    },
  ],
  relatedInsights: [insightReferences.digitalTwins, insightReferences.smartMobility],
  relatedCapabilities: [capabilities.intelligence, capabilities.transformation],
  relatedSolutions: [solutions.enterpriseAi],
  relatedWork: [],
  finalCta,
};

const twinSummary = summaryFor("digital-twins-industrial-operations");

const digitalTwins: InsightPageContent = {
  family: "insight",
  slug: "digital-twins-industrial-operations",
  visualKey: "digitalTwins",
  category: "DIGITAL TWINS",
  seo: {
    title: twinSummary.title,
    description: twinSummary.summary,
  },
  hero: {
    marker: "INSIGHT / 02",
    title: twinSummary.title,
    introduction: twinSummary.summary,
    technicalLine: "DIGITAL TWINS",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Insights", href: "/insights" },
      { label: twinSummary.title },
    ],
  },
  sections: [
    {
      id: "beyond-3d-model",
      title: "Beyond the 3D Model",
      body: [
        "A three-dimensional model can make an asset easier to understand, but visual detail alone does not create a digital twin. A rendering represents appearance. An engineering model represents selected structure or behaviour. An operational digital twin connects a useful representation to the data and context needed to understand the physical operation.",
        "That distinction matters because organisations can invest heavily in visualisation without improving a maintenance, monitoring or planning decision. The value does not come from reproducing every surface. It comes from linking the right asset identity, relationships and operating information to the people responsible for interpreting it.",
        "A digital twin should therefore be defined by purpose. A twin designed for condition monitoring may emphasise sensor trends and equipment hierarchy. One designed for facility coordination may focus on spatial relationships, occupancy and work activity. The representation follows the operational question rather than becoming the objective itself.",
      ],
      callout: {
        label: "KEY PRINCIPLE",
        text: "A useful digital twin is an operational information system with a visual or structural representation—not simply a detailed 3D model.",
      },
      diagramKey: "digitalTwin",
    },
    {
      id: "physical-operation",
      title: "Start With the Physical Operation",
      body: [
        "Digital twin work begins at the asset, facility or process. Teams need to understand what the physical system is intended to do, how it is operated, which conditions matter and which decisions are difficult today. This prevents the digital layer from becoming detached from the environment it is meant to support.",
        "Existing systems are part of that assessment. Control platforms, historians, maintenance records, inspection reports, drawings and enterprise applications may each hold part of the operating picture. None should be connected automatically; their relevance depends on the purpose and required update frequency of the twin.",
        "The people around the asset are equally important. Operators, engineers, maintainers and managers use different language and require different levels of detail. A shared representation should preserve those responsibilities rather than flatten every need into one dashboard.",
      ],
    },
    {
      id: "right-data",
      title: "Connect the Right Data",
      body: [
        "More data does not automatically produce a more useful twin. High-frequency signals can create storage and interpretation burdens without contributing to a decision. The design should identify which conditions, events and records change the understanding of the asset and how quickly that change needs to be visible.",
        "Relevant information may include temperature, vibration, process state, utilisation, alarms, maintenance history, inspections and system events. Each source has a different meaning and level of reliability. A sensor value without units, calibration context or asset association is technically available but operationally weak.",
        "Update frequency should follow purpose. Safety or control functions may require dedicated real-time systems and should not be casually displaced by a twin platform. Maintenance planning may be well served by periodic synchronisation. Clear boundaries prevent the twin from claiming authority it does not have.",
        "Data quality also needs to be visible. Missing values, delayed updates and inconsistent identifiers should be represented as conditions, not silently smoothed away. Users can make better judgements when they understand both the information and its limitations.",
      ],
    },
    {
      id: "create-context",
      title: "Create Context",
      body: [
        "Operational data becomes useful when it is connected to identity and relationships. A temperature reading needs to belong to a known sensor, component and asset. That asset may sit within a line, system or facility and may have maintenance history, operating limits and dependencies that change how the reading should be interpreted.",
        "A consistent asset model provides this structure. It does not need to recreate every engineering discipline in one schema. It needs enough hierarchy, naming and relationship information to support the agreed use cases while remaining maintainable as equipment and systems change.",
        "Context also includes time. Current state, recent events and historical patterns answer different questions. Preserving timestamps, source identity and change history allows the digital representation to explain how a condition developed rather than showing only the latest value.",
      ],
    },
    {
      id: "monitoring-to-intelligence",
      title: "From Monitoring to Intelligence",
      body: [
        "The first value of a twin is often a clearer shared view of the operation. Physical assets and telemetry are connected to a digital representation, where state, events and history can be inspected in context. This alone can reduce the effort required to assemble information from separate systems.",
        "Analytics can then identify patterns, compare conditions or highlight departures from expected behaviour. These techniques range from straightforward thresholds and trend analysis to statistical or machine-learning models. The appropriate method depends on data quality, operating consequence and whether the result can be explained to the responsible user.",
        "Decision support is the final step, not an automatic consequence of visualisation. A recommendation should connect the observed condition to relevant evidence, known limits and an accountable workflow. The twin supports action when it helps the right person understand what has changed and what options are available.",
      ],
    },
    {
      id: "predictive-use-cases",
      title: "Predictive Use Cases Require Care",
      body: [
        "Predictive maintenance is frequently presented as the defining digital twin use case, but prediction depends on appropriate history, consistent failure definitions and enough examples of the conditions being modelled. Many environments do not begin with that evidence, and overstating certainty can undermine trust.",
        "A more practical progression may start with anomaly awareness and condition trends. The system can show that behaviour has changed, compare it with related operating context and support investigation. As evidence accumulates, models may contribute to maintenance planning or scenario understanding without claiming to predict every failure.",
        "Scenario analysis also needs explicit assumptions. A twin may help teams explore how a change could affect capacity, energy or process behaviour, but a simulated outcome is not an observed fact. Interfaces and reports should preserve that distinction.",
      ],
    },
    {
      id: "implementation-challenges",
      title: "Implementation Challenges Are Mostly Systemic",
      body: [
        "Integration is rarely a single technical connection. Legacy equipment may use specialised protocols, identifiers may differ across systems and ownership may be distributed across operational technology, information technology and engineering teams. The integration plan needs to respect both technical constraints and operational authority.",
        "Asset models can also become difficult to maintain if their scope is unclear. A representation that depends on manual updates will diverge from the physical environment unless responsibility and change processes are defined. Configuration governance is as important as initial model accuracy.",
        "Security, access and lifecycle management should be designed from the beginning. A twin may expose sensitive operating information or provide links into critical systems. Users need permissions appropriate to their role, while connections require monitoring, version control and clear ownership.",
        "Finally, the organisation needs agreement on what ‘current’ means. Different sources update at different rates, and network interruptions are normal in distributed environments. Visible timestamps and health indicators help prevent stale information from being mistaken for live state.",
      ],
    },
    {
      id: "where-value-emerges",
      title: "Where Digital Twins Create Value",
      body: [
        "Value emerges when the twin shortens the distance between a physical condition and an informed response. Asset visibility gives teams a common operating picture. Contextual monitoring connects a signal to the equipment, history and dependencies required to interpret it.",
        "Maintenance support can bring condition, inspection and work information together before a decision is made. Operational coordination can provide different teams with a shared representation of current state and planned activity. Scenario analysis can help them examine options while keeping assumptions visible.",
        "These benefits are qualitative until measured in a real environment. A credible programme defines which decisions should improve, establishes a baseline and evaluates whether the twin changes the quality or timeliness of those decisions. The technology should earn its scope through operational usefulness.",
      ],
    },
    {
      id: "practical-implications",
      title: "Practical Implications for Implementation",
      body: [
        "Begin with one operational question and the minimum representation needed to answer it. This keeps asset modelling, integration and interface work proportionate. It also creates a clearer basis for validating whether users can make a better-informed decision.",
        "Design the information model and ownership model together. Every source, asset relationship and derived condition should have a responsible owner and an understood update path. Technical flexibility cannot compensate for unclear authority over operational information.",
        "Extend the twin in deliberate layers. New sensors, analytics or visual detail should be added because they support another validated use case. This preserves trust and keeps the system aligned with the physical operation as both evolve.",
      ],
    },
    {
      id: "key-takeaways",
      title: "Key Takeaways",
      body: [
        "A digital twin becomes credible through operational purpose, connected context and disciplined ownership. The following principles keep the implementation focused on useful decisions.",
      ],
      list: {
        style: "unordered",
        items: [
          "Define the operational purpose before selecting visualisation or modelling technology.",
          "Connect only the data that contributes meaningful asset, condition or process context.",
          "Represent identity, relationships, time and data quality—not just current sensor values.",
          "Treat predictive outputs as evidence-based support, with assumptions and uncertainty visible.",
          "Measure value through improved operational understanding and decisions, not model detail alone.",
        ],
      },
    },
  ],
  relatedInsights: [insightReferences.aiGovernance],
  relatedCapabilities: [capabilities.twins, capabilities.intelligence, capabilities.connected],
  relatedSolutions: [solutions.twins, solutions.operations],
  relatedWork: [work.industrial],
  finalCta,
};

const mobilitySummary = summaryFor("infrastructure-behind-smart-mobility");

const smartMobility: InsightPageContent = {
  family: "insight",
  slug: "infrastructure-behind-smart-mobility",
  visualKey: "smartMobility",
  category: "SMART MOBILITY",
  seo: {
    title: mobilitySummary.title,
    description: mobilitySummary.summary,
  },
  hero: {
    marker: "INSIGHT / 03",
    title: mobilitySummary.title,
    introduction: mobilitySummary.summary,
    technicalLine: "SMART MOBILITY",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Insights", href: "/insights" },
      { label: mobilitySummary.title },
    ],
  },
  sections: [
    {
      id: "mobility-ecosystem",
      title: "Mobility Is an Ecosystem",
      body: [
        "Smart mobility is sometimes reduced to a mobile application or a connected device. In practice, a journey may involve a driver, vehicle, parking facility, access point, charger, payment service, network and operator platform. The experience succeeds only when those physical and digital parts cooperate.",
        "Each participant sees a different slice of the system. A driver wants to find, access, park, charge and pay with minimal uncertainty. An operator needs to monitor infrastructure, manage rules, respond to faults and understand activity across locations. A facility owner may need mobility services to work with wider building and access operations.",
        "Architecture provides the common structure between those needs. It identifies which system owns a decision, how state moves between components and what happens when a dependency is unavailable. This is more durable than placing a single interface over disconnected services.",
      ],
      callout: {
        label: "KEY PRINCIPLE",
        text: "Smart mobility is coordinated physical and digital infrastructure—not one application, platform or device.",
      },
      diagramKey: "smartMobility",
    },
    {
      id: "physical-layer",
      title: "The Physical Layer Matters",
      body: [
        "Mobility becomes real at the physical boundary. Barriers control access, chargers transfer energy, sensors observe occupancy or movement, and gateways connect local equipment to wider platforms. Their placement, power, environmental tolerance and maintenance needs shape what the digital service can promise.",
        "Connectivity is part of the infrastructure rather than an invisible assumption. Devices may operate across wired, wireless or mobile networks with different latency and availability. Local control and safe fallback behaviour are important when a platform connection is interrupted.",
        "Facility infrastructure also creates constraints. Parking geometry, electrical capacity, traffic flow, accessibility and existing control systems affect design choices. A technically capable device can still produce a poor service if it is introduced without understanding the environment around it.",
      ],
    },
    {
      id: "digital-layer",
      title: "The Digital Layer Coordinates the Service",
      body: [
        "Applications and web experiences provide the user-facing journey, but they depend on services behind the interface. Identity and access establish who may enter or use a resource. Payment systems connect tariffs to a parking or charging session. APIs exchange state across equipment, platforms and partners.",
        "The operational platform provides a different view. It represents devices, sessions, availability, events and configuration in a form that supports the people responsible for the service. Analytics can then organise activity and condition information without replacing the underlying operating responsibilities.",
        "Clear system boundaries matter. An application should not need to understand the protocol of every charger or barrier. A hardware abstraction and integration layer can translate device-specific behaviour into stable platform services while preserving diagnostic detail for operators.",
      ],
    },
    {
      id: "two-journeys",
      title: "Design the User and Operator Journeys Together",
      body: [
        "The user journey may appear linear: discover a service, gain access, park, charge where needed and pay. At every step, however, the operator journey runs alongside it. Infrastructure must be monitored, rules configured, incidents managed and service activity analysed.",
        "A good user interface cannot compensate for weak operations. If availability is stale, a payment is disconnected from the session or a charger fault is invisible, the user experiences the consequence. Conversely, an operator dashboard that ignores the customer journey may optimise device status while leaving service friction unresolved.",
        "Mapping both journeys exposes shared moments. Access authorisation affects entry and operator exception handling. Session completion affects the user receipt and transaction reconciliation. Device status affects both availability information and maintenance response. These intersections should shape the integration design.",
      ],
      callout: {
        label: "PARALLEL JOURNEYS",
        text: "USER: DISCOVER → ACCESS → PARK → CHARGE → PAY · OPERATOR: MONITOR → MANAGE → CONFIGURE → RESPOND → ANALYSE",
      },
    },
    {
      id: "integration",
      title: "Integration Is the Hard Part",
      body: [
        "Mobility environments often grow through separate procurements and specialist systems. Parking, access, charging and payments may each use different identifiers, status models and administrative tools. Connecting them requires agreement about ownership and behaviour, not merely a set of technical interfaces.",
        "Without that agreement, duplicate workflows emerge. A user may need separate accounts or repeat the same information. Operators may reconcile events manually across platforms. Availability can differ between channels because systems update at different times or define state differently.",
        "A shared architecture establishes canonical concepts such as user, vehicle, location, device and session while allowing specialist systems to retain their proper responsibilities. Integration then becomes a controlled exchange of meaningful state rather than a collection of point-to-point data transfers.",
        "Exception paths deserve the same attention as the normal journey. Lost connectivity, failed payments, occupied bays, unavailable chargers and manual access all need clear ownership. Operational complexity becomes manageable when the system can explain what happened and where intervention is required.",
      ],
    },
    {
      id: "data-intelligence",
      title: "Data and Intelligence Follow Operational Context",
      body: [
        "Connected mobility systems can provide information about availability, utilisation, sessions, events, device status and maintenance. The purpose is not to collect every possible signal. It is to give users and operators information that improves a defined choice or response.",
        "Availability needs a timestamp and source. Utilisation needs a clear denominator and operating period. An event needs a relationship to the relevant device, site and session. Context prevents a technically correct value from being interpreted in the wrong way.",
        "Analytics can reveal patterns in demand, faults or service flow. AI may help classify events, forecast demand or support maintenance planning when sufficient evidence exists. These outputs should remain distinguishable from observed state and should be validated against the decisions they are intended to support.",
      ],
    },
    {
      id: "interoperability",
      title: "Design for Interoperability",
      body: [
        "Interoperability begins with explicit boundaries. APIs should expose stable business and operational concepts rather than mirror every internal database field. Versioning, authentication, rate limits and error behaviour make those interfaces dependable as systems evolve.",
        "Relevant standards can reduce custom integration, particularly for charging, identity, payments and device communication. They do not remove the need for architecture. Implementations vary, optional features differ and local operating rules still need to be represented.",
        "Hardware abstraction limits dependence on one device family. The platform can work with a common model for status and control while adapters preserve vendor-specific capabilities. This supports change without pretending all equipment behaves identically.",
        "Scalability should include operations as well as transaction volume. Adding sites creates more devices, permissions, configurations, support responsibilities and exceptions. A system that scales technically but becomes difficult to manage has not solved the complete problem.",
      ],
    },
    {
      id: "architecture",
      title: "What Smart Mobility Architecture Looks Like",
      body: [
        "A coherent architecture starts with the user and vehicle, then provides one mobility experience across parking, access, EV charging and payments. Those services connect to an operations platform that represents infrastructure, configuration, sessions and events before contributing to a shared data and analytics layer.",
        "This does not require one product to own every function. It requires agreed responsibilities, consistent identity and dependable interfaces between specialist components. The architecture should allow parts to change without breaking the user journey or removing operator visibility.",
        "Security and privacy span every layer. Access credentials, vehicle information, location data and payment records have different purposes and retention requirements. Permissions should follow those purposes, with only the necessary information moving between systems.",
      ],
    },
    {
      id: "practical-implications",
      title: "Practical Implications for Delivery",
      body: [
        "Start by mapping the complete mobility and operating journeys at a specific site or service. Identify every physical interaction, digital hand-off and exception. This produces requirements that are more useful than beginning with a list of devices or application screens.",
        "Define the platform and integration model before adding interfaces. Teams should know which system owns identity, session, tariff, payment, device status and operational configuration. Clear ownership reduces duplicated logic and makes incident investigation possible.",
        "Deliver in end-to-end slices. A bounded journey—from access through operator visibility—tests infrastructure, connectivity, software and workflow together. Scaling can then extend a proven system pattern while accounting for the conditions of each new environment.",
      ],
    },
    {
      id: "key-takeaways",
      title: "Key Takeaways",
      body: [
        "Smart mobility becomes dependable when the physical journey, digital services and operating model are treated as one system. The following principles keep the architecture grounded.",
      ],
      list: {
        style: "unordered",
        items: [
          "Design around the complete user and operator journeys, including exception paths.",
          "Treat barriers, chargers, sensors, gateways and connectivity as core service infrastructure.",
          "Establish clear ownership for identity, device state, sessions, tariffs and payments.",
          "Use stable APIs, appropriate standards and hardware abstraction to preserve interoperability.",
          "Apply analytics and AI only where operational context and evidence support the decision.",
        ],
      },
    },
  ],
  relatedInsights: [insightReferences.digitalTwins],
  relatedCapabilities: [capabilities.connected, capabilities.software, capabilities.intelligence],
  relatedSolutions: [solutions.parking, solutions.charging, solutions.facilities],
  relatedWork: [work.parking, work.charging],
  finalCta,
};

export const insightPages: readonly InsightPageContent[] = [
  aiGovernance,
  digitalTwins,
  smartMobility,
];

export function getInsightPage(slug: string) {
  return insightPages.find((insight) => insight.slug === slug);
}
