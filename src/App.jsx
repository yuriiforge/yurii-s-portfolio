import { useMemo } from 'react'
import BackgroundOrbs from './components/BackgroundOrbs'
import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'
import { useScrollSpy } from './hooks/useScrollSpy'
import { nav } from './data/content'

export default function App() {
  const ids = useMemo(() => nav.map((n) => n.id), [])
  const activeId = useScrollSpy(ids)

  return (
    <div className="min-h-screen bg-bg">
      <BackgroundOrbs />

      <a
        href="#about"
        className="focus-ring sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:border focus:border-accent focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:text-primary"
      >
        Skip to content
      </a>

      <Sidebar activeId={activeId} />
      <MobileNav activeId={activeId} />

      <main id="content" className="relative z-10 lg:pl-[var(--sidebar-width)]">
        <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  )
}
