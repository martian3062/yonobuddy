export const productCategories = [
  {
    id: "salary",
    title: "Salary Account",
    badge: "Fast onboarding",
    description: "Open or upgrade salary banking with consent-first checks.",
    accent: "#0b4f8a"
  },
  {
    id: "savings",
    title: "Savings Account",
    badge: "Voice assisted",
    description: "Guided account opening for first-time digital users.",
    accent: "#0b7a75"
  },
  {
    id: "home-loan",
    title: "Home Loan",
    badge: "Pre-qualify",
    description: "Match rent, income, and location signals to eligible offers.",
    accent: "#5b5fc7"
  },
  {
    id: "personal-loan",
    title: "Personal Loan",
    badge: "Human review",
    description: "Show only policies and limits that pass risk guardrails.",
    accent: "#d95d39"
  },
  {
    id: "protection",
    title: "Protection Cover",
    badge: "Consent gated",
    description: "Insurance recommendations blocked until consent is active.",
    accent: "#a15c00"
  },
  {
    id: "investments",
    title: "Investment Plans",
    badge: "Goal based",
    description: "Compare deposits, mutual funds, and retirement options.",
    accent: "#2f6fed"
  },
  {
    id: "merchant",
    title: "Merchant Banking",
    badge: "MSME ready",
    description: "QR, sweep deposits, and cashflow credit for merchants.",
    accent: "#117865"
  },
  {
    id: "yono",
    title: "Digital Adoption",
    badge: "Reset help",
    description: "YONO login, PIN reset, and branch-free assisted actions.",
    accent: "#6941c6"
  },
  {
    id: "rural",
    title: "Rural Voice KYC",
    badge: "22 languages",
    description: "Voice-first onboarding for low-bandwidth journeys.",
    accent: "#b54708"
  },
  {
    id: "service",
    title: "Service Requests",
    badge: "Track live",
    description: "Claims, complaints, renewals, and callback support.",
    accent: "#0b4f8a"
  }
];

export const quickActions = [
  "Renew a product",
  "File service request",
  "Track application",
  "Verify advisor",
  "Get callback"
];

export const trustStats = [
  { value: "22", label: "supported languages" },
  { value: "3", label: "policy guard rules" },
  { value: "100%", label: "signed decisions" },
  { value: "5", label: "demo customer journeys" }
];

export const calculators = [
  "Home loan eligibility",
  "Deposit maturity",
  "Monthly budget planner",
  "Credit readiness",
  "Retirement goal",
  "Protection cover need"
];

export const advantages = [
  {
    title: "Compare before commit",
    text: "Every recommendation shows reason codes, risk band, and consent status before the customer sees it."
  },
  {
    title: "Human-in-the-loop",
    text: "High-risk lending and protection actions stay review-only until a bank operator approves them."
  },
  {
    title: "No silent mis-selling",
    text: "The Policy Guard blocks cross-sell actions when consent is missing or an unsafe prompt is detected."
  },
  {
    title: "Built for assisted channels",
    text: "The same journey can start on voice, WhatsApp, USSD, or the app and still keep audit continuity."
  }
];

export const appFeatures = [
  "Compare recommended products",
  "Track application and service status",
  "Store consent and audit receipts",
  "Continue assisted journeys across channels"
];

export const testimonials = [
  {
    name: "Rural onboarding lead",
    quote: "The flow makes voice-first account opening feel simple, but keeps every risky action behind consent."
  },
  {
    name: "Branch operations manager",
    quote: "I can see why a product is recommended and why another one was blocked without reading logs."
  },
  {
    name: "Digital adoption team",
    quote: "The structure is familiar to customers, while the agent layer helps us prevent bad nudges."
  }
];

export const partnerBands = ["Banking APIs", "Voice AI", "Vector Search", "Audit Ledger", "Human Review"];

export const footerGroups = [
  {
    title: "Products",
    links: ["Salary account", "Savings account", "Home loan", "Protection cover", "Merchant banking"]
  },
  {
    title: "Service",
    links: ["Renew product", "Track application", "File request", "Advisor callback", "Support center"]
  },
  {
    title: "Tools",
    links: ["Eligibility calculator", "Deposit calculator", "Budget planner", "Credit readiness"]
  },
  {
    title: "Trust",
    links: ["Policy Guard", "Consent audit", "Human approval", "Prompt safety", "Decision trace"]
  }
];
