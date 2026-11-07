import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { evolution, next, person } from '../content'
import { Reveal, Section, SectionHead, SplitHeadline } from '../components/ui'

export function Evolution() {
  return (
    <Section id="evolution" className="border-t border-ink/15">
      <SectionHead num="07" label="The evolution" title="Always becoming." />
      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="font-serif text-3xl leading-snug md:text-4xl">{evolution.statement}</p>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow mb-4 text-ink/50">Currently learning</p>
          <ol>
            {evolution.now.map((e, i) => (
              <li key={e.k} className="border-t border-ink/15 py-6 last:border-b">
                <Reveal delay={i * 0.08} className="flex gap-6">
                  <span className="relative mt-3 flex h-2 w-2 shrink-0"><span className="absolute h-full w-full animate-ping rounded-full bg-taupe opacity-70" /><span className="h-2 w-2 rounded-full bg-taupe" /></span>
                  <span>
                    <span className="block font-serif text-3xl">{e.k}</span>
                    <span className="mt-1 block text-sm text-ink/65">{e.v}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

const links = [
  { label: 'Email', value: person.email, href: `mailto:${person.email}` },
  { label: 'LinkedIn', value: 'in/rohitbandameedi', href: person.linkedin },
  { label: 'GitHub', value: 'Rohitgoud45', href: person.github },
]

export function Contact() {
  return (
    <section id="contact" className="bg-stone/70">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-8 md:py-36">
        <SectionHead num="08" label="The next chapter" title="What's next is what excites me." />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-ink/80 lg:col-span-6">
            <Reveal><p>I'm looking for work that challenges my thinking, widens my perspective, and lets me contribute something real.</p></Reveal>
            <Reveal><p>I do my best work where curiosity is welcome, new ideas get a hearing, and hard problems are seen as a chance to build something better.</p></Reveal>
            <Reveal><p className="font-serif text-3xl italic text-ink">I'm excited about what I haven't figured out yet.</p></Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="eyebrow text-ink/50">Roles I'm pursuing</p>
              <ul className="mt-3 space-y-1 font-serif text-3xl">{next.roles.map((r) => <li key={r}>{r}</li>)}</ul>
              <ul className="mt-5 flex flex-wrap gap-2">{next.terms.map((t) => <li key={t} className="border border-ink/25 px-3 py-1 text-xs">{t}</li>)}</ul>
              <p className="mt-3 text-sm text-ink/60">Based in {person.location}</p>
            </Reveal>
          </div>
        </div>

        <ul className="mt-20 border-t border-ink/20">
          {links.map((l) => (
            <li key={l.label} className="border-b border-ink/20">
              <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener" className="group flex items-center justify-between gap-4 py-6">
                <span className="eyebrow w-24 shrink-0 text-ink/50">{l.label}</span>
                <span className="flex-1 truncate font-serif text-2xl transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">{l.value}</span>
                {l.label === 'Email' ? <Mail size={20} /> : <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />}
              </a>
            </li>
          ))}
        </ul>
        <a href={person.resume} download className="mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm text-ivory transition-colors hover:bg-[#3a382f]">
          <Download size={16} /> Download résumé (PDF)
        </a>
      </div>

      <footer className="bg-ink px-4 py-24 text-ivory sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SplitHeadline text={next.closing} className="max-w-5xl font-serif text-5xl leading-[1] md:text-8xl" />
          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-ivory/15 pt-6 text-xs text-ivory/50 sm:flex-row">
            <p>The Mind in Motion · “I don't chase familiarity. I chase growth.”</p>
            <p>© {new Date().getFullYear()} {person.name}</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
