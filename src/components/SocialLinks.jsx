import { Mail } from 'lucide-react'
import { Github, Linkedin, Telegram } from './BrandIcons'
import { social } from '../data/content'

const links = [
  { key: 'email', label: 'Email', icon: Mail, href: `mailto:${social.email}` },
  { key: 'github', label: 'GitHub', icon: Github, href: social.github },
  { key: 'linkedin', label: 'LinkedIn', icon: Linkedin, href: social.linkedin },
  { key: 'telegram', label: 'Telegram', icon: Telegram, href: social.telegram },
].filter((l) => Boolean(social[l.key]))

export default function SocialLinks({ size = 16, className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ key, label, icon: Icon, href }) => (
        <a
          key={key}
          href={href}
          aria-label={label}
          title={label}
          {...(key !== 'email'
            ? { target: '_blank', rel: 'noreferrer noopener' }
            : {})}
          className="focus-ring flex size-9 items-center justify-center rounded-lg border border-line bg-card text-secondary transition-colors hover:border-accent hover:text-accent"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  )
}
