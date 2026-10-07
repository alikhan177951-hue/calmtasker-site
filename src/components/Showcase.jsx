import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const work = [
  {
    tag: 'Website · bookings',
    title: 'Northline Sessions',
    body: 'Placeholder — a service business site with calendar booking, intake, and a calm client-facing flow.',
    art: 'from-forest-700 to-forest-500',
  },
  {
    tag: 'iOS app',
    title: 'Harbor',
    body: 'Placeholder — a consumer iOS product with a quiet interface and a daily-use interaction model.',
    art: 'from-forest-900 to-forest-600',
  },
  {
    tag: 'Android app',
    title: 'Atelier Field',
    body: 'Placeholder — an Android operations app for teams who work away from a desk.',
    art: 'from-[#0a4a38] to-forest',
  },
  {
    tag: 'Software',
    title: 'Ledgerlight',
    body: 'Placeholder — internal software that replaces spreadsheets with a product people actually enjoy.',
    art: 'from-forest-800 to-[#126b52]',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-forest-200">Selected work</p>
          <h2 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">Showcase placeholders.</h2>
          <p className="mt-4 max-w-2xl text-mist/80">
            Real case studies will live here. These frames show the kinds of products we take on —
            websites, mobile, and software — until live client work is published.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {work.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl border border-cream/10 bg-forest-900/40"
              >
                <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${item.art}`}>
                  <motion.div
                    className="absolute inset-8 rounded-2xl border border-cream/15 bg-ink/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.04, rotate: -1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 h-16 rounded-xl bg-cream/10"
                    animate={{ opacity: [0.35, 0.7, 0.35] }}
                    transition={{ duration: 4 + index, repeat: Infinity }}
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-forest-100">
                    Placeholder
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-forest-200">{item.tag}</p>
                  <h3 className="mt-2 font-serif text-2xl text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist/80">{item.body}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
