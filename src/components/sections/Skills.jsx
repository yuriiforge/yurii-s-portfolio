import Section from '../Section'
import { skills } from '../../data/content'

export default function Skills() {
  return (
    <Section id="skills" title="skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="card-hover rounded-xl border border-line bg-card p-5"
          >
            <h3 className="font-mono text-xs tracking-wide text-accent">
              {group.category}
            </h3>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line px-2.5 py-1 text-xs text-secondary transition-colors hover:border-accent hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
