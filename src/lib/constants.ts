export const primaryNavigation = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/#industries" },
  { label: "Insights", href: "/#insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = {
  capabilities: [
    { label: "Digital Transformation", href: "/capabilities/digital-transformation-governance" },
    { label: "AI & Data Intelligence", href: "/capabilities/ai-data-intelligence" },
    { label: "Software & Digital Products", href: "/capabilities/software-digital-products" },
    { label: "Smart Infrastructure & IoT", href: "/capabilities/smart-infrastructure-iot" },
  ],
  solutions: [
    { label: "Smart Parking", href: "/solutions/smart-parking" },
    { label: "EV Charging", href: "/solutions/ev-charging" },
    { label: "Digital Twins", href: "/solutions/digital-twins" },
    { label: "Intelligent Operations", href: "/solutions/intelligent-operations" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
