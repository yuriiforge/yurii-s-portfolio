import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Lock, Star } from 'lucide-react'
import { Github } from '../BrandIcons'
import Section from '../Section'
import { projects } from '../../data/content'

/** yookilabs.com — the bare domain reads better on the chip than "live demo". */
function siteName(url) {
  return new URL(url).hostname.replace(/^www\./, '')
}

/** Chip-sized link that sits in the card header next to the title. */
function HeaderLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="focus-ring pointer-events-auto relative z-10 flex items-center gap-1 rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-secondary transition-colors hover:border-accent hover:text-accent"
    >
      <Icon size={9} />
      {label}
    </a>
  )
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  // An NDA project can still have a public URL — the flag hides what wasn't
  // given, it doesn't override a link that was.
  const showLinks = Boolean(project.links.live || project.links.github)

  return (
    <div
      className={`card-hover overflow-hidden rounded-xl border bg-card ${
        open ? 'border-line-hover' : 'border-line'
      }`}
    >
      {/* The toggle is an overlay rather than a wrapper: the header holds real
          links, and an <a> can't live inside a <button>. The content layer
          ignores pointer events so clicks fall through to the toggle, and each
          link opts back in on top of it. */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="focus-ring absolute inset-0 h-full w-full rounded-xl"
        >
          <span className="sr-only">
            {open ? 'Hide' : 'Show'} details for {project.title}
          </span>
        </button>

        <div className="pointer-events-none flex items-start gap-4 p-5 text-left">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
              <h3 className="font-bold text-primary">{project.title}</h3>

              {project.featured && (
                <span className="flex items-center gap-1 rounded-md bg-(--accent-glow) px-1.5 py-0.5 font-mono text-[10px] text-accent">
                  <Star size={9} className="fill-current" />
                  featured
                </span>
              )}

              {project.nda && (
                <span className="flex items-center gap-1 rounded-md border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
                  <Lock size={9} />
                  NDA
                </span>
              )}

              {showLinks && project.links.live && (
                <HeaderLink
                  href={project.links.live}
                  icon={ExternalLink}
                  label={siteName(project.links.live)}
                />
              )}

              {showLinks && project.links.github && (
                <HeaderLink
                  href={project.links.github}
                  icon={Github}
                  label="source"
                />
              )}
            </div>

            <p className="mt-0.5 font-mono text-xs text-accent">
              {project.subtitle}
              {project.period && (
                <span className="text-muted"> · {project.period}</span>
              )}
            </p>

            <p className="mt-2.5 text-sm leading-relaxed text-secondary">
              {project.summary}
            </p>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <ChevronDown
            size={18}
            className={`mt-1 shrink-0 text-muted transition-transform duration-300 ${
              open ? 'rotate-180 text-accent' : ''
            }`}
          />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-5 py-5">
              <div className="space-y-3">
                {project.details.map((d, i) => (
                  <p
                    key={i}
                    className="flex gap-2.5 text-sm leading-relaxed text-secondary"
                  >
                    <span className="mt-0.5 shrink-0 font-mono text-accent">
                      ▸
                    </span>
                    <span>{d}</span>
                  </p>
                ))}
              </div>

              {project.nda && !showLinks && (
                <p className="mt-5 font-mono text-xs text-muted">
                  Source and live links withheld under NDA — happy to walk
                  through the work in a call.
                </p>
              )}

              {project.nda && showLinks && (
                <p className="mt-5 font-mono text-xs text-muted">
                  Source withheld under NDA — happy to walk through the work in
                  a call.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="projects">
      <p className="mb-4 font-mono text-xs text-muted">
        Click a card to expand details.
      </p>
      <div className="grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
