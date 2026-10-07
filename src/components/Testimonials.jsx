import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const quotes = [
  {
    text: 'They treated our booking site like a product, not a brochure. It just feels finished.',
    name: 'Maya Chen',
    role: 'Studio lead',
  },
  {
    text: 'iOS and Android shipped as one idea. No “we’ll do Android later” energy.',
    name: 'Jonah Hale',
    role: 'Founder',
  },
  {
    text: 'The internal tool replaced three spreadsheets and a lot of Saturday panic.',
    name: 'Priya Nair',
    role: 'Operations',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-forest-200">Testimonials</p>
          <h2 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">What a partnership feels like.</h2>
          <p className="mt-4 max-w-2xl text-mist/80">
            These quotes are <strong className="text-cream">demo-labelled</strong> samples for layout
            and tone. They are not real client reviews.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {quotes.map((quote, index) => (
            <Reveal key={quote.name} delay={index * 0.1}>
              <motion.blockquote
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex h-full flex-col rounded-3xl border border-cream/10 bg-forest/10 p-6"
              >
                <p className="font-serif text-xl leading-relaxed text-cream">“{quote.text}”</p>
                <footer className="mt-6 flex items-center justify-between gap-3 text-sm">
                  <div>
                    <cite className="not-italic text-cream">{quote.name}</cite>
                    <p className="text-mist/70">{quote.role}</p>
                  </div>
                  <span className="rounded-full border border-forest-200/30 bg-forest/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-forest-100">
                    Demo
                  </span>
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
