import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__inner">
          <p className="section__kicker">05 — Contact</p>
          <h2 className="contact__title">Let&apos;s build something reliable.</h2>
          <p className="contact__lead">
            I&apos;m open to engineering roles where strong systems thinking and clean product work
            both matter. The fastest way to reach me is email.
          </p>

          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn--ghost" href={profile.links.resume} target="_blank" rel="noreferrer">
              Download résumé
            </a>
          </div>

          <div className="contact__links">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}>{profile.phone}</a>
          </div>
        </Reveal>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Kevin Cabe</span>
        <span>Built with React, TypeScript &amp; Vite</span>
      </footer>
    </section>
  )
}
