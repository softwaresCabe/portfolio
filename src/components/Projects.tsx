import { projects } from '../data/projects'
import Reveal from './Reveal'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <p className="section__kicker">03 — Projects</p>
          <h2 className="section__title">Things I&apos;ve designed, shipped, and maintained</h2>
          <p className="section__lead">
            Full-stack products built end to end — architecture, data modeling, third-party
            integrations, and deployment.
          </p>
        </Reveal>

        <div className="projects__featured">
          {featured.map((p, i) => (
            <Reveal
              as="article"
              className="project-card"
              key={p.name}
              delay={i * 70}
            >
              <div className="project-card__bar" style={{ background: p.accent }} aria-hidden />
              <div className="project-card__body">
                <div className="project-card__head">
                  <h3>{p.name}</h3>
                  <span className="project-card__blurb">{p.blurb}</span>
                </div>
                <p className="project-card__desc">{p.description}</p>
                <ul className="project-card__tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-card__links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <ArrowIcon />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="section__kicker section__kicker--mt">More builds</p>
        </Reveal>
        <div className="projects__more">
          {more.map((p, i) => (
            <Reveal as="article" className="mini-card" key={p.name} delay={i * 60}>
              <span className="mini-card__dot" style={{ background: p.accent }} aria-hidden />
              <h4>{p.name}</h4>
              <p>{p.blurb}</p>
              <ul className="mini-card__tags">
                {p.tags.slice(0, 3).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="mini-card__links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                    {l.label} <ArrowIcon />
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
