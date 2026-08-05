import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { profile, nav } from '../data/content'

export default function MobileNav({ activeId }) {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Escape closes the drawer.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className="sticky top-0 z-40 flex items-center justify-between border-b border-line px-5 py-3.5 backdrop-blur-md lg:hidden"
        style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 85%, transparent)' }}
      >
        <a href="#about" className="focus-ring flex flex-col">
          <span className="text-sm font-bold text-primary">{profile.name}</span>
          <span className="font-mono text-[11px] text-accent">
            {profile.title}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ThemeToggle className="size-10" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="focus-ring flex size-10 items-center justify-center rounded-lg border border-line bg-card text-primary"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 lg:hidden"
              style={{ backgroundColor: 'var(--overlay)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 z-50 flex h-full w-[min(78vw,300px)] flex-col border-l border-line p-6 lg:hidden"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              aria-label="Sections"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="focus-ring mb-8 flex size-10 items-center justify-center self-end rounded-lg border border-line bg-card text-primary"
              >
                <X size={18} />
              </button>

              <ul className="space-y-1">
                {nav.map((item) => {
                  const active = activeId === item.id
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        aria-current={active ? 'true' : undefined}
                        className={`focus-ring flex items-center gap-2 rounded-lg px-3 py-2.5 font-mono text-sm transition-colors ${
                          active
                            ? 'bg-(--accent-glow) text-accent'
                            : 'text-secondary hover:bg-card hover:text-primary'
                        }`}
                      >
                        <span className={active ? 'text-accent' : 'text-muted'}>
                          {'//'}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
