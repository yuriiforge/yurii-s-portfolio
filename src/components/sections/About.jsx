import { MapPin, Circle } from 'lucide-react'
import Section from '../Section'
import Avatar from '../Avatar'
import SocialLinks from '../SocialLinks'
import { about, profile } from '../../data/content'

export default function About() {
  return (
    <Section id="about" title="about">
      {/* Profile block — sidebar covers this on desktop, so it's mobile-only. */}
      <div className="mb-10 flex flex-col items-center text-center lg:hidden">
        <Avatar size="size-40" />
        <h1 className="mt-4 text-xl font-bold text-primary">{profile.name}</h1>
        <p className="mt-1 text-sm font-medium text-accent">{profile.title}</p>
        <div className="mt-2 flex items-center gap-3">
          {profile.available && (
            <span className="flex items-center gap-1.5">
              <Circle size={7} className="fill-accent text-accent" />
              <span className="text-xs text-secondary">
                {profile.availableText}
              </span>
            </span>
          )}
          <span className="flex items-center gap-1.5 text-secondary">
            <MapPin size={11} />
            <span className="text-xs">{profile.location}</span>
          </span>
        </div>
        <SocialLinks className="mt-4" />
      </div>

      <h3 className="text-2xl font-bold text-primary sm:text-3xl">
        {about.headline}
      </h3>
      <p className="mt-1.5 font-mono text-sm text-accent">{about.subhead}</p>

      <div className="mt-6 space-y-4">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-secondary">
            {p}
          </p>
        ))}
      </div>

      {/* Column count follows the data, so the row always fills the width
          evenly however many stats there are — no empty trailing slot. */}
      <div
        className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-[repeat(var(--stat-cols),minmax(0,1fr))]"
        style={{ '--stat-cols': about.stats.length }}
      >
        {about.stats.map((s, i) => {
          // An odd tile count leaves a lone card on the 2-column mobile grid —
          // let the last one span the full row instead of sitting half-width.
          const orphan =
            about.stats.length % 2 === 1 && i === about.stats.length - 1

          return (
            <div
              key={s.label}
              className={`card-hover rounded-xl border border-line bg-card px-3 py-4 text-center sm:px-4 ${
                orphan ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="font-display text-xl font-bold text-accent sm:text-2xl">
                {s.value}
              </div>
              <div className="mt-1 text-[11px] leading-snug text-secondary sm:text-xs">
                {s.label}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
