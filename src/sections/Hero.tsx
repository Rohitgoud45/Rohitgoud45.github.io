import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { person, quickFacts } from '../content'
import { HeroArt } from '../components/Art'

const ease = [0.22, 1, 0.36, 1] as const
const up = (d: number) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease, delay: 1.1 + d } })

export function Hero() {
  const { scrollY } = useScroll()
  const artY = useTransform(scrollY, [0, 800], [0, 80])

  return (
    <section id="home" className="relative mx-auto max-w-7xl px-4 pt-28 sm:px-8 md:pt-36">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <motion.p {...up(0)} className="eyebrow mb-8 flex items-start gap-3 text-ink/70">
            <span className="relative mt-[3px] flex h-2 w-2 shrink-0"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6f8a5e] opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#6f8a5e]" /></span>
            {person.availability}
          </motion.p>

          <h1 className="font-serif text-[13vw] leading-[0.88] tracking-tight sm:text-7xl md:text-8xl xl:text-[8.5rem]">
            {['Curiosity is', 'my compass.'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span className="block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 1.0 + i * 0.1 }}>{line}</motion.span>
              </span>
            ))}
            {['Challenges are', 'my catalyst.'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em] italic text-ink/45">
                <motion.span className="block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay: 1.2 + i * 0.1 }}>{line}</motion.span>
              </span>
            ))}
          </h1>

          <motion.div {...up(0.4)} className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-serif text-3xl">{person.name}</p>
              <p className="mt-1 text-sm text-ink/60">{person.title}</p>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-ink/80">
              I'm a curious thinker, an analytical problem solver, and someone who gets energy from figuring out what comes next. {person.intro}
            </p>
          </motion.div>

          <motion.div {...up(0.55)} className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#about" className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm text-ivory transition-colors hover:bg-[#3a382f]">
              Explore my journey <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
            </a>
            <a href={person.resume} target="_blank" rel="noopener" className="link-line inline-flex items-center gap-1 text-sm">
              View my résumé <ArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>

        <motion.div style={{ y: artY }} className="relative hidden lg:col-span-4 lg:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.9 }}>
          <div className="aspect-[4/5] w-full"><HeroArt /></div>
          <p className="eyebrow mt-4 text-ink/50">Fig. 01 — Always one step further</p>
        </motion.div>
      </div>

      {/* recruiter fast path: the essentials without scrolling the story */}
      <motion.dl {...up(0.7)} className="mt-20 grid grid-cols-2 border-t border-ink/15 md:grid-cols-4">
        {quickFacts.map(({ k, v }) => (
          <div key={k} className="border-b border-ink/15 py-5 pr-4 md:border-b-0">
            <dt className="eyebrow text-ink/50">{k}</dt>
            <dd className="mt-2 text-sm">{v}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}
