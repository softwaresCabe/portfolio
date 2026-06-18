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
    team: 'Inventory Quality & Recovery',
    company: 'Wayfair',
    period: 'Jun 2025 — Jan 2026',
    highlights: [
      'Served as a permanent Critical Rotations Engineer supporting QC, returns, inventory, and reverse-logistics systems across 18+ fulfillment centers.',
      'Resolved 30+ engineering tickets per month across HighJump WMS, Manhattan, QC apps, inventory systems, and returns platforms — including 3+ quarterly escalations tied to $100K+ operational or financial exposure.',
      'Isolated a returns software feature gap causing roughly 40 hours of manual adjustment work per week per fulfillment center, then led the fix from first-touch investigation through scoping, PM design review, operations collaboration, deployment, and production validation.',
      'Built and supported Java, Python, Node, REST API, and React/TypeScript systems, improving defect detection, recovery automation, and inventory accuracy — debugging with SQL, DataDog, Kibana, Grafana, Postman, REST APIs, SQL Server, Postgres, and IntelliJ.',
    ],
  },
  {
    role: 'Global WMS Application Support Engineer',
    company: 'Wayfair',
    period: 'Apr 2022 — Jun 2025',
    highlights: [
      'Supported HighJump WMS production applications across 18+ fulfillment centers, resolving warehouse-impacting issues in outbound, inventory, and returns workflows.',
      'Triaged and resolved 160+ production defects annually using SQL, Kibana logs, DataDog dashboards, system monitoring, and cross-application debugging.',
      'Authored production fixes and workflow improvements that reduced repeat defects and improved stability, while validating WMS integrations by troubleshooting interface failures and protecting inventory data integrity.',
      'Partnered with Operations leadership to translate process gaps into system improvements, led production escalations across engineering and vendor teams, and mentored 15+ junior engineers by improving SOPs and knowledge-sharing processes.',
    ],
  },
  {
    role: 'Warehouse IT Support Engineer',
    company: 'Wayfair',
    period: 'Mar 2019 — Mar 2022',
    highlights: [
      'Tier 1 for the Application Support Engineering team supporting 14+ fulfillment centers and 40 final-mile facilities.',
      'Supported warehouse hardware, networking, automation, and infrastructure systems at 2 campus fulfillment centers.',
      'Managed 300+ Android devices running WMS software using Intune, and led site audits to keep systems within operational performance standards.',
    ],
  },
]
