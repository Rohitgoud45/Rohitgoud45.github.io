import { MotionConfig } from 'motion/react'
import { BackToTop, Cursor, Loader, Nav } from './components/Chrome'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Journey } from './sections/Journey'
import { Work } from './sections/Work'
import { Mind } from './sections/Mind'
import { Toolkit } from './sections/Toolkit'
import { Contact, Evolution } from './sections/Closing'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory">Skip to content</a>
      <Loader />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Work />
        <Mind />
        <Toolkit />
        <Evolution />
        <Contact />
      </main>
      <BackToTop />
    </MotionConfig>
  )
}
