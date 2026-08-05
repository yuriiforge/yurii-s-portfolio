import { MapPin, Circle, Download } from 'lucide-react'
import { profile, nav } from '../data/content'
import Avatar from './Avatar'
import SocialLinks from './SocialLinks'
import ThemeToggle from './ThemeToggle'

export default function Sidebar({ activeId }) {
  return (
    <aside
      className="fixed top-0 left-0 z-30 hidden h-screen flex-col overflow-y-auto border-r border-line lg:flex"
      style={{
        width: 'var(--sidebar-width)',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="flex flex-col items-center px-6 pt-12">
        <Avatar size="size-56" />

        <h1 className="mt-5 text-lg font-bold text-primary">{profile.name}</h1>
        <p className="mt-1 text-sm font-medium text-accent">{profile.title}</p>

        {profile.available && (
          <div className="mt-2 flex items-center gap-1.5">
            <Circle size={7} className="fill-accent text-accent" />
            <span className="text-xs text-secondary">
              {profile.availableText}
            </span>
          </div>
        )}

        <div className="mt-1.5 flex items-center gap-1.5 text-secondary">
          <MapPin size={11} />
          <span className="text-xs">{profile.location}</span>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>

      <nav className="mt-9 flex-1 px-6" aria-label="Sections">
        <ul className="space-y-1">
          {nav.map((item) => {
            const active = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active ? 'true' : undefined}
                  className={`focus-ring group flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-sm transition-colors ${
                    active
                      ? 'bg-(--accent-glow) text-accent'
                      : 'text-secondary hover:bg-card hover:text-primary'
                  }`}
                >
                  <span
                    className={
                      active
                        ? 'text-accent'
                        : 'text-muted group-hover:text-accent'
                    }
                  >
                    {'//'}
                  </span>
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="px-6 pt-6 pb-8">
        {profile.resume && (
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-card px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={15} />
            Download CV
          </a>
        )}
        <p className="mt-5 text-center font-mono text-[11px] text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </aside>
  )
}
