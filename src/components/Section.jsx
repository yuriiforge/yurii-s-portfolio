import { motion } from 'framer-motion'

/**
 * A page section with the code-comment marker heading (`// about`) and a
 * fade-up reveal the first time it scrolls into view.
 */
export default function Section({ id, title, children, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-20 py-8 sm:py-11 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="mb-5 font-mono text-sm tracking-wide text-muted">
        <span className="text-accent">{'// '}</span>
        {title}
      </h2>
      {children}
    </motion.section>
  )
}
