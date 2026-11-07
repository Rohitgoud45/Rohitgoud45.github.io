import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { ArrowUp, ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { nav, person } from '../content'

function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return active
}

export function Nav() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${scrolled ? 'bg-ivory/85 backdrop-blur-md' : ''}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <a href="#home" className="font-serif text-2xl italic" aria-label="Rohit Bandameedi, back to top">Rohit B.</a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex gap-7 text-[13px]">
              {nav.map(({ id, label }) => (
                <li key={id} className="relative">
                  <a href={`#${id}`} className={`py-2 transition-opacity ${active === id ? 'opacity-100' : 'opacity-55 hover:opacity-100'}`} aria-current={active === id ? 'true' : undefined}>
                    {label}
                  </a>
                  {active === id && <motion.span layoutId="nav-dot" className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ink" />}
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href={person.resume} target="_blank" rel="noopener" className="group hidden items-center gap-1 border border-ink px-4 py-2 text-[13px] transition-colors hover:bg-ink hover:text-ivory sm:flex">
              Résumé <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button className="p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
              <Menu size={22} />
            </button>
          </div>
        </div>
        <motion.div className="h-px origin-left bg-ink/70" style={{ scaleX: progress }} />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog" aria-modal="true" aria-label="Menu"
            className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-5 text-ivory"
            initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl italic">Rohit B.</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2" autoFocus><X size={24} /></button>
            </div>
            <ul className="mt-12 flex flex-col gap-2">
              {nav.map(({ id, label }, i) => (
                <motion.li key={id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
                  <a href={`#${id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 font-serif text-5xl">
                    <span className="eyebrow text-taupe">0{i + 1}</span>{label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href={person.resume} target="_blank" rel="noopener" className="mt-auto flex items-center gap-2 border-t border-ivory/20 pt-6 text-sm">
              Download résumé <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function Loader() {
  const [done, setDone] = useState(false)
  useEffect(() => { const t = setTimeout(() => setDone(true), 1100); return () => clearTimeout(t) }, [])
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-between bg-ink p-6 text-ivory sm:p-10"
          exit={{ y: '-100%' }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <motion.p className="font-serif text-4xl italic sm:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            The mind in motion
          </motion.p>
          <motion.span className="mb-3 block h-px w-24 origin-left bg-taupe" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/** Soft ring that follows the pointer on precise-pointer devices; grows over links. */
export function Cursor() {
  const spring = { stiffness: 500, damping: 40, mass: 0.4 }
  const x = useSpring(-100, spring), y = useSpring(-100, spring)
  const [hover, setHover] = useState(false)
  const [enabled] = useState(() => matchMedia('(pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    if (!enabled) return
    const move = (e: PointerEvent) => {
      x.set(e.clientX); y.set(e.clientY)
      setHover(!!(e.target as Element).closest?.('a,button'))
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [enabled, x, y])
  if (!enabled) return null
  return (
    <motion.div
      aria-hidden
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-ink/60 mix-blend-multiply"
      animate={{ width: hover ? 48 : 20, height: hover ? 48 : 20, backgroundColor: hover ? 'rgba(180,165,142,0.25)' : 'rgba(0,0,0,0)' }}
    />
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 1.5)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#home" aria-label="Back to top"
          className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 bg-ink text-ivory shadow-lg"
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ y: -3 }}
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
