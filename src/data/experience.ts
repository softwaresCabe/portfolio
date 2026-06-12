export type Experience = {
  role: string
  team?: string
  company: string
  period: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    team: 'Quality & Recovery Systems',
    company: 'Wayfair',
    period: 'Jun 2025 — Jan 2026',
    highlights: [
      'Permanent Critical Rotations Engineer triaging and resolving high-priority production incidents across Quality Control and reverse-logistics workflows in multiple fulfillment centers.',
      'Owned critical ticket intake end to end — rapid root cause analysis and immediate fixes to minimize operational downtime.',
      'Built and maintained microservices and React/TypeScript apps integrated with WMS and returns platforms to power defect detection and recovery automation.',
      'Partnered with Operations, Product, and analytics to turn urgent business issues into durable, system-driven solutions.',
    ],
  },
  {
    role: 'Global WMS Application Support Engineer',
    company: 'Wayfair',
    period: 'Aug 2023 — Jun 2025',
    highlights: [
      'Delivered Tier 1 & Tier 2 support for HighJump WMS across 18+ fulfillment centers in a multi-state environment.',
      'Triaged and resolved 160+ production defects annually using SQL, Kibana logs, and DataDog dashboards.',
      'Diagnosed recurring systemic issues and authored production fixes improving outbound, inventory, and returns workflows.',
      'Mentored 15+ junior engineers and upgraded SOP documentation and knowledge-sharing processes.',
    ],
  },
  {
    role: 'Software Engineer I',
    team: 'WMS Outbound Systems',
    company: 'Wayfair',
    period: 'Mar 2022 — Jul 2023',
    highlights: [
      'Shipped enhancements and bug fixes in JavaScript/TypeScript and SQL supporting outbound warehouse workflows.',
      'Designed SQL queries and data transformations powering custom business flows and reporting.',
      'Drove rollout planning, testing, and validation for stable releases across fulfillment centers.',
      'Improved playbooks and documentation to reduce mean time to resolution (MTTR).',
    ],
  },
  {
    role: 'Warehouse IT Support Engineer',
    company: 'Wayfair',
    period: 'Aug 2020 — Mar 2022',
    highlights: [
      'Supported WMS hardware, networking, and infrastructure across warehouse sites.',
      'Partnered with Operations to troubleshoot system and device issues impacting warehouse execution.',
      'Led site audits to keep systems within operational performance standards.',
    ],
  },
  {
    role: 'WMS Inventory Control Administrator',
    company: 'Wayfair',
    period: 'Mar 2019 — Aug 2020',
    highlights: [
      'Supported WMS configuration, data validation, and inventory reconciliation.',
      'Built SQL- and Excel-driven reports validating inventory accuracy and informing operational decisions.',
    ],
  },
]
