import { GraduationCap, Languages as LanguagesIcon } from 'lucide-react'
import Section from '../Section'
import { education, languages } from '../../data/content'

export default function Education() {
  return (
    <Section id="education" title="education">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-4">
          {education.map((e) => (
            <div
              key={e.degree}
              className="card-hover flex gap-3.5 rounded-xl border border-line bg-card p-5"
            >
              <GraduationCap
                size={18}
                className="mt-0.5 shrink-0 text-accent"
              />
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-primary">{e.degree}</h3>
                <p className="mt-0.5 text-sm text-secondary">{e.school}</p>
                {e.period && (
                  <p className="mt-1 font-mono text-xs text-muted">{e.period}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="card-hover rounded-xl border border-line bg-card p-5">
          <div className="flex items-center gap-2">
            <LanguagesIcon size={16} className="text-accent" />
            <h3 className="font-mono text-xs tracking-wide text-accent">
              languages
            </h3>
          </div>
          <ul className="mt-4 space-y-3">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0"
              >
                <span className="text-sm text-primary">{l.name}</span>
                <span className="font-mono text-xs text-secondary">
                  {l.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
