import { motion } from 'motion/react'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export function Reveal({ children, delay = 0, className = '', y = 28 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Headline that reveals word by word from behind a mask. */
export function SplitHeadline({ text, className = '', as: Tag = 'h2' }: { text: string; className?: string; as?: 'h1' | 'h2' }) {
  const words = text.split(' ')
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '105%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: i * 0.05 }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

export function SectionHead({ num, label, title }: { num: string; label: string; title: string }) {
  return (
    <header className="mb-14 md:mb-20">
      <Reveal>
        <p className="eyebrow mb-6 flex items-center gap-4 text-ink/60">
          <span>{num}</span>
          <span className="h-px w-10 bg-taupe" />
          <span>{label}</span>
        </p>
      </Reveal>
      <SplitHeadline text={title} className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl" />
    </header>
  )
}

/** Renders copy; strings starting with "TODO:" show as a visible placeholder for Rohit to fill in. */
export function Copy({ text, className = '' }: { text: string; className?: string }) {
  if (text.startsWith('TODO:')) return <span className={`todo ${className}`}>[To add: {text.slice(5).trim()}]</span>
  return <span className={className}>{text}</span>
}

export const Section = ({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) => (
  <section id={id} className={`mx-auto max-w-7xl px-4 py-24 sm:px-8 md:py-36 ${className}`}>
    {children}
  </section>
)
