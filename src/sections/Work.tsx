import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { otherWork, work, type CaseStudy } from '../content'
import { ProjectArt } from '../components/Art'
import { Copy, Reveal, Section, SectionHead } from '../components/ui'

export function Work() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const current = work.find((w) => w.slug === openSlug) ?? null

  return (
    <Section id="work">
      <SectionHead num="04" label="The work & the challenges" title="Things I've made happen." />

      <ul className="border-t border-ink/15">
        {work.map((p) => (
          <li key={p.slug} className="border-b border-ink/15">
            <Reveal>
              <button onClick={() => setOpenSlug(p.slug)} className="group grid w-full gap-6 py-10 text-left md:grid-cols-12 md:items-center md:gap-10" aria-haspopup="dialog">
                <span className="eyebrow text-taupe md:col-span-1">{p.index}</span>
                <span className="md:col-span-6">
                  <span className="block font-serif text-4xl leading-none transition-transform duration-700 group-hover:translate-x-3 md:text-6xl">{p.name}</span>
                  <span className="mt-3 block text-sm text-ink/60">{p.kicker}</span>
                </span>
                <span className="md:col-span-2">
                  <span className="block font-serif text-3xl">{p.results[0].value}</span>
                  <span className="block text-xs text-ink/60">{p.results[0].label}</span>
                </span>
                <span className="relative aspect-[4/3] overflow-hidden md:col-span-3">
                  <span className="absolute inset-0 block transition-transform duration-700 ease-out group-hover:scale-105"><ProjectArt kind={p.art} /></span>
                  <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-ivory opacity-0 transition-all duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </span>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink/50">Select a project to read the full case study.</p>

      <div className="mt-20">
        <Reveal><p className="eyebrow mb-6 text-ink/50">Also on the bench</p></Reveal>
        <ul className="grid gap-px bg-ink/10 sm:grid-cols-2">
          {otherWork.map((o) => (
            <li key={o.name} className="bg-ivory p-6">
              <p className="font-serif text-2xl">{o.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{o.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>{current && <CaseStudyPage p={current} onClose={() => setOpenSlug(null)} />}</AnimatePresence>
    </Section>
  )
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-ink/15 py-10 md:grid-cols-12 md:gap-10">
      <h3 className="eyebrow text-ink/50 md:col-span-3"><span className="text-taupe">{n}</span> &nbsp;{title}</h3>
      <div className="text-[17px] leading-relaxed md:col-span-9">{children}</div>
    </section>
  )
}

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-4">{items.map((t) => <li key={t} className="flex gap-4"><span className="mt-3 h-px w-5 shrink-0 bg-taupe" /><Copy text={t} /></li>)}</ul>
)

function CaseStudyPage({ p, onClose }: { p: CaseStudy; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', esc)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc); prev?.focus() }
  }, [onClose])

  return (
    <motion.div
      ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={`${p.name} case study`}
      className="fixed inset-0 z-50 overflow-y-auto bg-ivory outline-none"
      initial={{ clipPath: 'inset(100% 0 0 0)' }} animate={{ clipPath: 'inset(0% 0 0 0)' }} exit={{ clipPath: 'inset(100% 0 0 0)' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between bg-ivory/90 px-4 py-4 backdrop-blur sm:px-8">
        <span className="eyebrow text-ink/60">Case study {p.index} / 0{work.length}</span>
        <button onClick={onClose} className="flex items-center gap-2 text-sm" aria-label="Close case study">Close <X size={20} /></button>
      </div>

      <article className="mx-auto max-w-6xl px-4 pb-24 sm:px-8">
        <motion.header initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="pt-10">
          <p className="eyebrow text-taupe">{p.kicker}</p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.95] md:text-8xl">{p.name}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => <li key={s} className="border border-ink/20 px-3 py-1 text-xs">{s}</li>)}
          </ul>
        </motion.header>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1 }} className="mt-12 aspect-[16/8] overflow-hidden">
          <ProjectArt kind={p.art} />
        </motion.div>

        <dl className="mt-12 grid grid-cols-2 gap-px bg-ink/10 md:grid-cols-4">
          {p.results.map((r) => (
            <div key={r.label} className="bg-ivory p-5">
              <dt className="font-serif text-3xl md:text-4xl">{r.value}</dt>
              <dd className="mt-2 text-xs text-ink/60">{r.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16">
          <Block n="01" title="Context"><Copy text={p.context} /></Block>
          <Block n="02" title="The problem"><p className="font-serif text-2xl leading-snug md:text-3xl"><Copy text={p.problem} /></p></Block>
          <Block n="03" title="Why it was hard"><Copy text={p.whyHard} /></Block>
          <Block n="04" title="Approach & thinking"><List items={p.approach} /></Block>
          <Block n="05" title="My contribution"><Copy text={p.contribution} /></Block>
          <Block n="06" title="Execution"><List items={p.execution} /></Block>
          <Block n="07" title="What I learned"><p className="font-serif text-2xl italic leading-snug md:text-3xl"><Copy text={p.learned} /></p></Block>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-ink/15 pt-10">
          {p.link && (
            <a href={p.link.href} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm text-ivory">
              {p.link.label} <ArrowUpRight size={16} />
            </a>
          )}
          <button onClick={onClose} className="link-line text-sm">Back to all projects</button>
        </div>
      </article>
    </motion.div>
  )
}
