# Kevin Cabe — Portfolio

Personal portfolio site for Kevin Cabe, Software Engineer. Single-page, dark/neon
aesthetic, built with React 18 + TypeScript + Vite.

## Run locally

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├─ data/           # content (edit these to update the site)
│  ├─ profile.ts   # name, tagline, links, summary, stats
│  ├─ experience.ts# work history timeline
│  ├─ projects.ts  # featured + secondary projects
│  └─ skills.ts    # skill groups
├─ components/      # Nav, Hero, About, Experience, Projects, Skills, Contact
├─ hooks/useReveal.ts  # scroll-into-view reveal (respects reduced-motion)
└─ styles/global.css   # full theme + responsive layout
public/
└─ resume/Kevin-Cabe-Resume.pdf   # linked from the "Résumé" buttons
```

To update content, edit the files in `src/data/` — no component changes needed.
Replace `public/resume/Kevin-Cabe-Resume.pdf` to update the downloadable résumé.

## Deploy

The build output in `dist/` is static and hosts anywhere — GitHub Pages,
Netlify, Vercel, or Cloudflare Pages. For Netlify/Vercel: build command
`npm run build`, publish directory `dist`.
```
