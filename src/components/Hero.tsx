import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden />
      <div className="hero__grid" aria-hidden />
      <div className="hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__status" /> Open to new opportunities · {profile.location}
        </p>

        <h1 className="hero__title">
          Kevin&nbsp;Cabe
          <span className="hero__role">{profile.title}</span>
        </h1>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            View my work
          </a>
          <a className="btn btn--ghost" href={profile.links.resume} target="_blank" rel="noreferrer">
            Download résumé
          </a>
        </div>

        <div className="hero__contacts">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span aria-hidden>·</span>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span aria-hidden>·</span>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  )
}
