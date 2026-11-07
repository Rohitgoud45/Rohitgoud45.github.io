import { about } from '../content'
import { Reveal, Section, SectionHead } from '../components/ui'

export function About() {
  return (
    <Section id="about">
      <SectionHead num="02" label="The person" title="More than a job title." />

      <div className="grid gap-16 lg:grid-cols-12">
        <div className="space-y-7 lg:col-span-7">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className={i === 0 ? 'font-serif text-3xl leading-snug md:text-4xl' : 'text-lg leading-relaxed text-ink/80'}>{p}</p>
            </Reveal>
          ))}
          <Reveal>
            <p className="border-l-2 border-taupe pl-6 font-serif text-2xl italic leading-snug">{about.generalist}</p>
          </Reveal>
        </div>

        <aside className="lg:col-span-5">
          <Reveal className="bg-ink p-8 text-ivory md:p-10">
            <p className="eyebrow text-taupe">{about.origin.label}</p>
            <h3 className="mt-4 font-serif text-4xl">{about.origin.title}</h3>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ivory/80">
              {about.origin.body.map((b, i) => <p key={i} className={i === about.origin.body.length - 1 ? 'font-serif text-xl italic text-ivory' : ''}>{b}</p>)}
            </div>
          </Reveal>
          <Reveal className="mt-6 border border-ink/15 p-8">
            <p className="eyebrow text-ink/50">{about.proof.label}</p>
            <p className="mt-4 text-[15px] leading-relaxed">{about.proof.body}</p>
          </Reveal>
        </aside>
      </div>

      <div className="mt-24">
        <Reveal><p className="eyebrow mb-8 text-ink/50">Off the clock</p></Reveal>
        <ul className="grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {about.offDuty.map(({ what, why }, i) => (
            <li key={what} className="group border-b border-ink/15 py-8 pr-6 sm:border-r sm:pl-6 sm:first:pl-0 lg:border-b-0 lg:last:border-r-0">
              <Reveal delay={i * 0.08}>
                <span className="eyebrow text-taupe">0{i + 1}</span>
                <p className="mt-3 font-serif text-3xl transition-transform duration-500 group-hover:translate-x-2">{what}</p>
                <p className="mt-2 text-sm text-ink/65">{why}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
