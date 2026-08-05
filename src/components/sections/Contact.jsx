import { Mail, ArrowUpRight } from 'lucide-react'
import { Github, Linkedin, Telegram } from '../BrandIcons'
import Section from '../Section'
import { contact, social, profile } from '../../data/content'

const rows = [
  {
    key: 'email',
    label: 'Email',
    icon: Mail,
    value: social.email,
    href: `mailto:${social.email}`,
  },
  {
    key: 'github',
    label: 'GitHub',
    icon: Github,
    value: social.github?.replace(/^https?:\/\/(www\.)?/, ''),
    href: social.github,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    value: social.linkedin?.replace(/^https?:\/\/(www\.)?/, ''),
    href: social.linkedin,
  },
  {
    key: 'telegram',
    label: 'Telegram',
    icon: Telegram,
    value: social.telegram?.replace(/^https?:\/\/(www\.)?/, ''),
    href: social.telegram,
  },
].filter((r) => Boolean(social[r.key]))

export default function Contact() {
  return (
    <Section id="contact" title="contact">
      <h3 className="text-2xl font-bold text-primary sm:text-3xl">
        {contact.headline}
      </h3>
      <p className="mt-4 leading-relaxed text-secondary">
        {contact.text}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {rows.map(({ key, label, icon: Icon, value, href }) => (
          <a
            key={key}
            href={href}
            {...(key !== 'email'
              ? { target: '_blank', rel: 'noreferrer noopener' }
              : {})}
            className="card-hover focus-ring group flex items-center gap-3.5 rounded-xl border border-line bg-card p-4"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line text-accent transition-colors group-hover:border-accent">
              <Icon size={17} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[11px] text-muted">
                {label}
              </span>
              <span className="block truncate text-sm text-primary">
                {value}
              </span>
            </span>
            <ArrowUpRight
              size={15}
              className="shrink-0 text-muted transition-colors group-hover:text-accent"
            />
          </a>
        ))}
      </div>

      <footer className="mt-12 border-t border-line pt-6">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} — built with React,
          Tailwind CSS & Framer Motion.
        </p>
      </footer>
    </Section>
  )
}
