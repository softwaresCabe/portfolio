import { experience } from '../data/experience'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <Reveal>
          <p className="section__kicker">02 — Experience</p>
          <h2 className="section__title">Five roles, one company, a steady climb</h2>
          <p className="section__lead">
            Promoted from inventory administrator to Critical Rotations Engineer at Wayfair — growing
            from data validation into building the systems that keep fulfillment moving.
          </p>
        </Reveal>

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" className="timeline__item" key={job.role + job.period} delay={i * 60}>
              <div className="timeline__marker" aria-hidden />
              <div className="timeline__card">
                <div className="timeline__head">
                  <h3>
                    {job.role}
                    {job.team && <span className="timeline__team"> · {job.team}</span>}
                  </h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__company">{job.company}</p>
                <ul className="timeline__highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
