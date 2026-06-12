export type SkillGroup = {
  title: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    title: 'Languages & Frameworks',
    items: ['TypeScript', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'PHP'],
  },
  {
    title: 'Back-End & Data',
    items: ['PostgreSQL', 'SQL Server', 'Drizzle ORM', 'Query optimization', 'Stored procedures', 'Zod schemas'],
  },
  {
    title: 'Integrations & APIs',
    items: ['REST APIs', 'OAuth', 'Stripe', 'Twilio', 'Nash / DoorDash Drive', 'Spotify & Apple Music'],
  },
  {
    title: 'DevOps & Observability',
    items: ['Docker', 'Jenkins', 'CI/CD', 'Kibana', 'DataDog', 'PagerDuty'],
  },
  {
    title: 'WMS & Logistics',
    items: ['HighJump', 'Manhattan', 'Outbound systems', 'Returns & recovery', 'Multi-site support'],
  },
  {
    title: 'Practice & Tools',
    items: ['Root cause analysis', 'Incident response', 'Jira', 'Confluence', 'ServiceNow', 'Mentoring'],
  },
]
