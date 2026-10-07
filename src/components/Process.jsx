import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const steps = [
  { n: '01', title: 'Listen', body: 'Goals, constraints, users, and the job the product actually has to do.' },
  { n: '02', title: 'Shape', body: 'Information architecture, UX, and a build plan you can trust.' },
  { n: '03', title: 'Build', body: 'Tight iterations. Production quality from the first meaningful commit.' },
  { n: '04', title: 'Launch', body: 'Ship, hand off cleanly, and stay on for care if you want us.' },
]

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="absolute inset-0 bg-forest/10" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-forest-200">Process</p>
          <h2 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">Quiet process. Loud results.</h2>
          <p className="mt-4 max-w-2xl text-mist/80">
            No theater. A short loop from the real problem to something you can put in customers’
            hands.
          </p>
        </Reveal>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.1}>
              <motion.li
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full rounded-3xl border border-cream/10 bg-ink/70 p-6"
              >
                <motion.span
                  className="block font-serif text-4xl text-forest-300"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                >
                  {step.n}
                </motion.span>
                <h3 className="mt-4 font-serif text-2xl text-cream">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/80">{step.body}</p>
              </motion.li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
