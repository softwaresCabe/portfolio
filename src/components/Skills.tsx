import { skills } from '../data/skills'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <Reveal>
          <p className="section__kicker">04 — Skills</p>
          <h2 className="section__title">The toolkit</h2>
        </Reveal>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <Reveal as="article" className="skill-card" key={group.title} delay={i * 50}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
