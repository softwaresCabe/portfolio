import { education, profile, stats } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section__kicker">01 — About</p>
          <h2 className="section__title">From warehouse floors to production-critical systems</h2>
        </Reveal>

        <div className="about__grid">
          <div className="about__copy">
            {profile.summary.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="about__stats" delay={120}>
            <ul>
              {stats.map((s) => (
                <li key={s.label}>
                  <span className="about__stat-value">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </li>
              ))}
            </ul>
            <div className="about__edu">
              <span className="about__edu-kicker">Education</span>
              <span className="about__edu-degree">{education.degree}</span>
              <span className="about__edu-school">
                {education.school} · {education.location}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
