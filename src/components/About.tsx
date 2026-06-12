import { profile, stats } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section__kicker">01 — About</p>
          <h2 className="section__title">From inventory counts to production-critical systems</h2>
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}
