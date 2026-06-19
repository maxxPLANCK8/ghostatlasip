export type ProductPageData = {
  slug: string;
  name: string;
  eyebrow: string;
  oneLiner: string;
  cta: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  pricing: Array<{
    tier: string;
    price: string;
    unit: string;
    description: string;
    includes: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

const sharedFaqs = {
  setup: {
    question: "How quickly can we start sending traffic?",
    answer: "Most teams can create credentials, choose a region, and begin routing traffic in minutes from the dashboard or API."
  },
  auth: {
    question: "Which authentication methods are supported?",
    answer: "GHOSTATLAS IP supports username and password authentication, allowlisted IPs, and per-project credentials for clean access control."
  },
  integrations: {
    question: "Can this work with browser automation tools?",
    answer: "Yes. The endpoints work with Selenium, Puppeteer, Playwright, Scrapy, cURL, and standard HTTP clients."
  },
  targeting: {
    question: "Can we target specific locations?",
    answer: "You can target by country, region, city, and network type where coverage is available for the selected proxy product."
  },
  support: {
    question: "Do you support custom plans?",
    answer: "Yes. Higher-volume teams can request dedicated pools, committed bandwidth, custom routing rules, and shared success support."
  }
};

export const products: Record<string, ProductPageData> = {
  residential: {
    slug: "residential",
    name: "Residential Proxies",
    eyebrow: "RESIDENTIAL NETWORK",
    oneLiner: "Route through real residential connections with flexible geo-targeting and session control.",
    cta: "Start residential trial",
    stats: [
      { value: "50M+", label: "residential IPs" },
      { value: "195+", label: "countries" },
      { value: "99.99%", label: "network uptime" },
      { value: "10m+", label: "sticky sessions" }
    ],
    features: [
      { title: "Global residential pool", description: "Reach consumer networks across major markets with broad city-level coverage." },
      { title: "Rotating sessions", description: "Rotate IPs per request or keep sticky sessions alive for stateful workflows." },
      { title: "High trust access", description: "Use residential paths for websites that respond poorly to datacenter traffic." },
      { title: "Precise targeting", description: "Target by country, region, city, ASN, and connection profile." },
      { title: "Usage controls", description: "Set project limits, inspect consumption, and isolate credentials by workflow." },
      { title: "Fast failover", description: "Automatically route around unhealthy nodes to keep automation moving." }
    ],
    pricing: [
      { tier: "Starter", price: "$1.50", unit: "/GB", description: "For testing and small workloads.", includes: ["5 GB included", "Country targeting", "Shared pool access"] },
      { tier: "Growth", price: "$1.20", unit: "/GB", description: "For recurring production traffic.", includes: ["100 GB included", "City targeting", "Priority routing"] },
      { tier: "Scale", price: "Custom", unit: "", description: "For high-volume teams.", includes: ["Committed bandwidth", "Dedicated success", "Custom pool strategy"] }
    ],
    faqs: [sharedFaqs.setup, sharedFaqs.auth, sharedFaqs.integrations, sharedFaqs.targeting, sharedFaqs.support]
  },
  datacenter: {
    slug: "datacenter",
    name: "Datacenter Proxies",
    eyebrow: "DATACENTER NETWORK",
    oneLiner: "Fast, economical proxy infrastructure for high-throughput automation and data collection.",
    cta: "Start datacenter trial",
    stats: [
      { value: "<35ms", label: "median latency" },
      { value: "120+", label: "metro locations" },
      { value: "From $0.08", label: "per IP" },
      { value: "1M+", label: "requests per hour" }
    ],
    features: [
      { title: "Low latency routes", description: "Run high-volume workflows through fast regional datacenter capacity." },
      { title: "Dedicated IP options", description: "Reserve stable IPs for long-running jobs, QA, and controlled automation." },
      { title: "Bulk provisioning", description: "Generate endpoints and credentials in batches from the dashboard or API." },
      { title: "Protocol support", description: "Use HTTP, HTTPS, and SOCKS5 for flexible integration coverage." },
      { title: "Pool health metrics", description: "Monitor success rates, latency, availability, and usage by project." },
      { title: "Cost control", description: "Scale bandwidth-intensive workflows with predictable per-IP economics." }
    ],
    pricing: [
      { tier: "Starter", price: "$0.12", unit: "/IP", description: "For lightweight automation.", includes: ["25 IPs", "Shared locations", "HTTP and SOCKS5"] },
      { tier: "Growth", price: "$0.08", unit: "/IP", description: "For production fleets.", includes: ["500 IPs", "Dedicated subnets", "API provisioning"] },
      { tier: "Scale", price: "Custom", unit: "", description: "For enterprise routing.", includes: ["Reserved capacity", "Custom SLAs", "Private pool options"] }
    ],
    faqs: [sharedFaqs.setup, sharedFaqs.auth, sharedFaqs.integrations, sharedFaqs.targeting, sharedFaqs.support]
  },
  "static-residential": {
    slug: "static-residential",
    name: "Static Residential Proxies",
    eyebrow: "STATIC ISP NETWORK",
    oneLiner: "Persistent ISP-backed IPs for workflows that need stable identity and residential trust.",
    cta: "Start static trial",
    stats: [
      { value: "From $0.27", label: "per IP" },
      { value: "30d", label: "minimum lease" },
      { value: "99.9%", label: "availability" },
      { value: "80+", label: "ISP markets" }
    ],
    features: [
      { title: "Persistent identity", description: "Keep the same IP across sessions, devices, and long-running workflows." },
      { title: "ISP-backed routes", description: "Blend residential trust with the stability of dedicated proxy allocation." },
      { title: "Clean replacement flow", description: "Swap underperforming IPs quickly without rebuilding your integration." },
      { title: "Account-safe testing", description: "Use stable endpoints for QA, localization checks, and login-sensitive flows." },
      { title: "Dedicated credentials", description: "Assign static pools to teams, tools, and environments with separate auth." },
      { title: "Location planning", description: "Reserve IPs in the markets that matter before launches and campaigns." }
    ],
    pricing: [
      { tier: "Starter", price: "$0.35", unit: "/IP", description: "For stable testing routes.", includes: ["10 static IPs", "Monthly lease", "Location selection"] },
      { tier: "Growth", price: "$0.27", unit: "/IP", description: "For recurring production use.", includes: ["250 static IPs", "Replacement controls", "Team credentials"] },
      { tier: "Scale", price: "Custom", unit: "", description: "For reserved ISP capacity.", includes: ["Bulk reservations", "Custom markets", "Dedicated support"] }
    ],
    faqs: [sharedFaqs.setup, sharedFaqs.auth, sharedFaqs.integrations, sharedFaqs.targeting, sharedFaqs.support]
  },
  mobile: {
    slug: "mobile",
    name: "Mobile Proxies",
    eyebrow: "MOBILE CARRIER NETWORK",
    oneLiner: "Access mobile carrier networks for app testing, ad verification, and location-sensitive workflows.",
    cta: "Start mobile trial",
    stats: [
      { value: "4G/5G", label: "carrier routes" },
      { value: "70+", label: "mobile markets" },
      { value: "99.5%", label: "pool uptime" },
      { value: "5m", label: "rotation windows" }
    ],
    features: [
      { title: "Carrier-grade access", description: "Route traffic through real mobile networks across supported markets." },
      { title: "App workflow coverage", description: "Test mobile experiences, sign-up flows, and localized app behavior." },
      { title: "Ad verification", description: "Inspect mobile placements and campaign delivery from target regions." },
      { title: "Flexible rotation", description: "Rotate mobile IPs on interval, per request, or by explicit API call." },
      { title: "Session controls", description: "Maintain mobile sessions for workflows that require continuity." },
      { title: "Market observability", description: "Track health, latency, and availability across carrier-backed pools." }
    ],
    pricing: [
      { tier: "Starter", price: "$6.00", unit: "/GB", description: "For mobile QA and experiments.", includes: ["2 GB included", "Country targeting", "Rotating sessions"] },
      { tier: "Growth", price: "$4.80", unit: "/GB", description: "For recurring mobile workflows.", includes: ["50 GB included", "Carrier targeting", "Priority support"] },
      { tier: "Scale", price: "Custom", unit: "", description: "For dedicated mobile capacity.", includes: ["Reserved pools", "Custom markets", "Success engineering"] }
    ],
    faqs: [sharedFaqs.setup, sharedFaqs.auth, sharedFaqs.integrations, sharedFaqs.targeting, sharedFaqs.support]
  }
};
