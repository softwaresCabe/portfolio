export const profile = {
  name: 'Kevin Cabe',
  title: 'Software Engineer',
  tagline: 'Full-stack engineer who keeps global fulfillment networks running — and ships polished product on the side.',
  location: 'Chino, CA',
  email: 'nivek2696@gmail.com',
  phone: '(702) 826-8237',
  links: {
    linkedin: 'https://www.linkedin.com/in/kevin-cabe-engineer/',
    github: 'https://github.com/softwaresCabe',
    resume: '/resume/Kevin-Cabe-Resume.pdf',
  },
  summary: [
    'Software engineer with 6+ years designing, building, and supporting the Warehouse Management Systems that move product across 18+ fulfillment centers. I live where production reliability meets clean code — triaging critical incidents at warehouse scale by day, and architecting full-stack SaaS products on my own time.',
    'I started at Wayfair reconciling inventory and writing SQL reports, and grew through five roles into a Critical Rotations Engineer building React/TypeScript services and microservices for quality control and reverse logistics. Along the way I learned how to translate messy operational problems into systems people actually trust.',
  ],
} as const

export const stats = [
  { value: '6+', label: 'Years engineering' },
  { value: '18+', label: 'Fulfillment centers supported' },
  { value: '160+', label: 'Production defects resolved / yr' },
  { value: '15+', label: 'Engineers mentored' },
] as const
