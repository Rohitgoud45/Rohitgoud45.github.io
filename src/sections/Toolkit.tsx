import { useState } from 'react'
import { motion } from 'motion/react'
import { thinking, toolkit } from '../content'
import { Reveal, Section, SectionHead } from '../components/ui'

export function Toolkit() {
  const [active, setActive] = useState(0)
  const g = toolkit[active]

  return (
    <Section id="toolkit">
      <SectionHead num="06" label="The toolkit" title="What I bring to the table." />

      <div className="grid gap-12 lg:grid-cols-12">
        {/* category index */}
        <div role="tablist" aria-label="Skill categories" className="flex gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:gap-0 lg:overflow-visible">
          {toolkit.map((t, i) => (
            <button
              key={t.group} role="tab" id={`tab-${i}`} aria-selected={i === active} aria-controls="skill-panel"
              onClick={() => setActive(i)}
              className={`group relative shrink-0 whitespace-nowrap border px-4 py-2 text-left text-sm transition-colors lg:whitespace-normal lg:border-0 lg:border-b lg:border-ink/15 lg:px-0 lg:py-5 ${i === active ? 'border-ink bg-ink text-ivory lg:bg-transparent lg:text-ink' : 'border-ink/20 text-ink/55 hover:text-ink'}`}
            >
              <span className="eyebrow mr-3 hidden text-taupe lg:inline">0{i + 1}</span>
              <span className="lg:font-serif lg:text-3xl">{t.group}</span>
              {i === active && <motion.span layoutId="skill-bar" className="absolute bottom-[-1px] left-0 hidden h-px w-full bg-ink lg:block" />}
            </button>
          ))}
        </div>

        <div id="skill-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="lg:col-span-8">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="font-serif text-3xl italic text-ink/60 md:text-4xl">{g.how}</p>
            <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-4">
              {g.items.map((s, i) => (
                <motion.li key={s} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 + i * 0.04 }}
                  className="border-b border-ink pb-1 font-serif text-2xl md:text-4xl">
                  {s}{i < g.items.length - 1 && <span className="ml-3 text-taupe">/</span>}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="mt-28">
        <Reveal><p className="eyebrow mb-8 text-ink/50">And the thinking behind the tools</p></Reveal>
        <dl className="grid gap-px bg-ink/10 md:grid-cols-2">
          {thinking.map((t, i) => (
            <Reveal key={t.k} delay={i * 0.06} className="bg-ivory p-8">
              <dt className="font-serif text-3xl">{t.k}</dt>
              <dd className="mt-3 text-[15px] leading-relaxed text-ink/70">{t.v}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  )
}
