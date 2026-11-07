import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useRef, useState } from 'react'
import { mind } from '../content'
import { Reveal, SectionHead } from '../components/ui'

/**
 * Desktop: a tall scroll track with a sticky stage. Scrolling moves through the five
 * stages, and the orbit diagram shows the loop closing back on itself.
 * Mobile: a simple stacked list.
 */
export function Mind() {
  const track = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: track, offset: ['start start', 'end end'] })
  const [step, setStep] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => setStep(Math.min(mind.length - 1, Math.floor(v * mind.length))))

  return (
    <section id="mind" className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-8 md:pt-36 [&_header_p]:text-ivory/60">
        <SectionHead num="05" label="How my mind works" title="A little insight into how I think." />
      </div>

      {/* desktop: scroll-driven sequence */}
      <div ref={track} className="relative hidden lg:block" style={{ height: `${mind.length * 70}vh` }}>
        <div className="sticky top-0 mx-auto grid h-screen max-w-7xl grid-cols-12 items-center gap-10 px-8">
          <div className="col-span-5">
            <Orbit step={step} />
          </div>
          <div className="relative col-span-7 h-80">
            {mind.map((m, i) => (
              <motion.div
                key={m.n}
                className="absolute inset-0"
                animate={{ opacity: i === step ? 1 : 0, y: i === step ? 0 : i < step ? -40 : 40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden={i !== step}
              >
                <p className="eyebrow text-taupe">Stage {m.n} / 05</p>
                <h3 className="mt-4 font-serif text-7xl xl:text-8xl">{m.verb}</h3>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/80">{m.body}</p>
                <p className="mt-6 max-w-lg border-l border-taupe pl-5 text-sm text-ivory/60">In practice: {m.eg}</p>
              </motion.div>
            ))}
            <ol className="absolute -bottom-16 left-0 flex gap-3" aria-hidden>
              {mind.map((m, i) => <li key={m.n} className={`h-px transition-all duration-500 ${i === step ? 'w-14 bg-ivory' : 'w-6 bg-ivory/30'}`} />)}
            </ol>
          </div>
        </div>
      </div>

      {/* mobile & tablet: stacked */}
      <ol className="mx-auto max-w-7xl px-4 pb-8 sm:px-8 lg:hidden">
        {mind.map((m) => (
          <li key={m.n} className="border-t border-ivory/15 py-10">
            <Reveal>
              <p className="eyebrow text-taupe">{m.n}</p>
              <h3 className="mt-3 font-serif text-5xl">{m.verb}</h3>
              <p className="mt-4 leading-relaxed text-ivory/80">{m.body}</p>
              <p className="mt-4 border-l border-taupe pl-4 text-sm text-ivory/60">In practice: {m.eg}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* screen-reader version of the desktop sequence */}
      <ol className="sr-only hidden lg:block">{mind.map((m) => <li key={m.n}>{m.verb} {m.body} In practice: {m.eg}</li>)}</ol>

      <div className="mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-8 md:pb-36">
        <Reveal>
          <p className="max-w-4xl font-serif text-4xl italic leading-tight md:text-6xl">
            “Every solved problem becomes the starting point for a better question.”
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Orbit({ step }: { step: number }) {
  const R = 150, C = 180
  const pts = mind.map((_, i) => {
    const a = -Math.PI / 2 + (i / mind.length) * Math.PI * 2
    return [C + R * Math.cos(a), C + R * Math.sin(a)] as const
  })
  return (
    <svg viewBox="-60 0 480 360" className="w-full max-w-md overflow-visible" aria-hidden>
      <circle cx={C} cy={C} r={R} fill="none" stroke="#F0EDE5" strokeOpacity="0.12" />
      <motion.circle
        cx={C} cy={C} r={R} fill="none" stroke="#B4A58E" strokeWidth="1.5"
        transform={`rotate(-90 ${C} ${C})`}
        animate={{ pathLength: (step + 1) / mind.length }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      {pts.map(([x, y], i) => (
        <g key={i}>
          <motion.circle cx={x} cy={y} animate={{ r: i === step ? 9 : 4, fill: i <= step ? '#F0EDE5' : '#25241F' }} stroke="#F0EDE5" strokeOpacity="0.5" />
          {/* labels sit radially outside the ring, anchored away from it */}
          <text x={C + (x - C) * 1.14} y={C + (y - C) * 1.16 + 4} textAnchor={x > C + 20 ? 'start' : x < C - 20 ? 'end' : 'middle'} fontSize="11" fill="#F0EDE5" opacity={i === step ? 1 : 0.4} fontFamily="Times New Roman, Times, serif" letterSpacing="2">
            {mind[i].verb.replace('I ', '').replace('.', '').toUpperCase()}
          </text>
        </g>
      ))}
      <text x={C} y={C + 8} textAnchor="middle" fontFamily="Instrument Serif" fontSize="44" fill="#F0EDE5">{mind[step].n}</text>
    </svg>
  )
}
