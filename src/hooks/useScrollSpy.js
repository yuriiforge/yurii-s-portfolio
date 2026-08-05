import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently closest to the top of the viewport.
 * Uses a rootMargin band near the top so a section becomes "active" as its
 * heading scrolls into the upper third of the screen, not when it first appears.
 */
export function useScrollSpy(ids, { offset = 96 } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const pickActive = () => {
      // Bottom of page: always highlight the last section, otherwise short
      // trailing sections can never win the "closest to top" comparison.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      if (atBottom) {
        setActiveId(elements[elements.length - 1].id)
        return
      }

      let current = elements[0].id
      for (const el of elements) {
        if (el.getBoundingClientRect().top - offset <= 0) current = el.id
        else break
      }
      setActiveId(current)
    }

    pickActive()
    window.addEventListener('scroll', pickActive, { passive: true })
    window.addEventListener('resize', pickActive)
    return () => {
      window.removeEventListener('scroll', pickActive)
      window.removeEventListener('resize', pickActive)
    }
  }, [ids, offset])

  return activeId
}
