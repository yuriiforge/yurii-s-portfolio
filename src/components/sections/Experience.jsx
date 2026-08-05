import Section from '../Section'
import { experience } from '../../data/content'

export default function Experience() {
  return (
    <Section id="experience" title="experience">
      {/* Timeline: a single vertical rule with a node per role. */}
      <div className="relative border-l border-line pl-6 sm:pl-8">
        <div className="space-y-9">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="relative">
              <span
                className={`absolute top-1.5 -left-[31px] size-2.5 rounded-full ring-4 sm:-left-[39px] ${
                  job.current ? 'bg-accent' : 'bg-muted'
                }`}
                style={{ '--tw-ring-color': 'var(--bg)' }}
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-bold text-primary">{job.role}</h3>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>

              <p className="mt-0.5 font-mono text-sm text-accent">
                {job.company}
                <span className="text-muted"> · {job.location}</span>
              </p>

              <ul className="mt-3.5 space-y-2">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 text-sm leading-relaxed text-secondary"
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-accent">
                      ▸
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
