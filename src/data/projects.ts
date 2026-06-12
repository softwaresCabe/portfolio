export type Project = {
  name: string
  blurb: string
  description: string
  tags: string[]
  featured: boolean
  links: { label: string; href: string }[]
  accent: string
}

export const projects: Project[] = [
  {
    name: 'ForkLine',
    blurb: 'Multi-tenant B2B SaaS — restaurant pickup & delivery ordering',
    description:
      'A full-stack, multi-tenant ordering platform for independent restaurants. Shared Zod schemas enforce type safety across the client/server boundary, a Drizzle-backed PostgreSQL layer uses versioned migrations, and all prices are stored as integer cents to eliminate floating-point errors. Integrates Nash (DoorDash Drive), Stripe billing with webhook verification, and Twilio SMS.',
    tags: ['React 18', 'TypeScript', 'Express 5', 'PostgreSQL', 'Drizzle ORM', 'Stripe', 'Twilio', 'Vite'],
    featured: true,
    links: [{ label: 'forklines.com', href: 'https://forklines.com' }],
    accent: '#6366f1',
  },
  {
    name: 'PocketSets',
    blurb: 'Festival companion app — EDC Las Vegas 2026',
    description:
      'A cross-platform schedule companion for music festivals. Browse the full lineup, save sets with custom notification timing, get conflict alerts between favorites, and explore stages, artists, and a festival map. Ships to iOS and Android via Capacitor with local notifications.',
    tags: ['React 18', 'TypeScript', 'Tailwind', 'Radix UI', 'Framer Motion', 'Express 5', 'Drizzle', 'Capacitor'],
    featured: true,
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/pocketsets/id6762584513' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.pocketsets.app' },
      { label: 'GitHub', href: 'https://github.com/softwaresCabe/pocketsets' },
    ],
    accent: '#22d3ee',
  },
  {
    name: 'SoundSink',
    blurb: 'Full-stack audio streaming & playlist sync',
    description:
      'A web app to stream, organize, and synchronize audio playlists across services. React + Redux front end, Node.js + PostgreSQL back end, with Spotify and Apple Music integrations to sync external libraries. Deployed via Docker and CI/CD, tuned with query optimization and caching.',
    tags: ['React', 'TypeScript', 'Redux', 'Node.js', 'PostgreSQL', 'Docker', 'CI/CD'],
    featured: true,
    links: [
      { label: 'soundsinkapp.com', href: 'https://soundsinkapp.com' },
      { label: 'GitHub', href: 'https://github.com/softwaresCabe/SoundSink' },
    ],
    accent: '#a855f7',
  },
  {
    name: 'Camborn Masonry',
    blurb: 'Client site — masonry contractor, Desert Hot Springs CA',
    description:
      'A polished marketing site for a local masonry business — clean, fast, and conversion-focused, hand-built and maintained for a real-world client.',
    tags: ['HTML', 'CSS', 'Responsive'],
    featured: false,
    links: [{ label: 'GitHub', href: 'https://github.com/softwaresCabe/camborn-masonry' }],
    accent: '#f59e0b',
  },
  {
    name: 'Joshua Tree RV Rentals',
    blurb: 'Client site — RV rental business',
    description:
      'A booking-oriented web presence for an RV rental business, built to drive inquiries and present the fleet cleanly on any device.',
    tags: ['JavaScript', 'Responsive', 'Web'],
    featured: false,
    links: [{ label: 'GitHub', href: 'https://github.com/softwaresCabe/Joshua-Tree-RV-Rentals' }],
    accent: '#10b981',
  },
  {
    name: 'Our Solar System Experience',
    blurb: 'Mobile VR flythrough of the solar system',
    description:
      'A VR experience built in Unity (C#) for mobile devices — a near fly-by of every planet in our solar system, designed as an educational, immersive tour.',
    tags: ['Unity', 'C#', 'VR', 'Mobile'],
    featured: false,
    links: [{ label: 'GitHub', href: 'https://github.com/softwaresCabe/OurSolarSystemExperience' }],
    accent: '#ec4899',
  },
]
