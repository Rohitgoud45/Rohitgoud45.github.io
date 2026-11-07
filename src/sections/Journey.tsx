import { AnimatePresence, motion, useScroll } from 'motion/react'
import { Plus } from 'lucide-react'
import { useRef, useState } from 'react'
import { journey } from '../content'
import { Copy, Reveal, Section, SectionHead } from '../components/ui'

export function Journey() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const [open, setOpen] = useState<number | null>(1)

  return (
    <Section id="journey">
      <SectionHead num="03" label="The journey" title="Every experience adds another dimension." />

      <ol ref={ref} className="relative">
        {/* the line draws itself as you scroll */}
        <span className="absolute left-[7px] top-2 bottom-0 w-px bg-ink/10 md:left-[calc(25%+7px)]" aria-hidden />
        <motion.span style={{ scaleY: scrollYProgress }} className="absolute left-[7px] top-2 bottom-0 w-px origin-top bg-ink md:left-[calc(25%+7px)]" aria-hidden />

        {journey.map((m, i) => {
          const isOpen = open === i
          return (
            <li key={m.title} className="relative grid gap-2 pb-14 pl-10 md:grid-cols-4 md:gap-10 md:pl-0">
              <Reveal className="md:pr-10 md:text-right">
                <p className="font-serif text-2xl md:text-3xl">{m.when}</p>
                <p className="eyebrow mt-1 text-taupe">{m.kind}</p>
              </Reveal>
              <span className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border border-ink transition-colors duration-500 md:left-1/4 ${isOpen ? 'bg-ink' : 'bg-ivory'}`} aria-hidden />
              <Reveal className="md:col-span-3 md:pl-10" delay={0.1}>
                <button
                  className="group flex w-full items-start justify-between gap-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`m-${i}`}
                >
                  <span>
                    <span className="block font-serif text-3xl leading-tight md:text-4xl">{m.title}</span>
                    <span className="mt-1 block text-sm text-ink/60">{m.where}</span>
                  </span>
                  <Plus size={22} className={`mt-2 shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : 'group-hover:rotate-90'}`} />
                </button>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">{m.doing}</p>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`m-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      {m.points && (
                        <ul className="mt-6 max-w-2xl space-y-3 text-[15px]">
                          {m.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2.5 h-px w-4 shrink-0 bg-taupe" />{p}</li>)}
                        </ul>
                      )}
                      <div className="mt-6 max-w-2xl bg-stone/60 p-6">
                        <p className="eyebrow text-ink/50">What it changed</p>
                        <p className="mt-2 font-serif text-xl italic leading-snug"><Copy text={m.learned} /></p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
