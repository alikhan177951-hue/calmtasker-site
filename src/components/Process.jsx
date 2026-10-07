import { process } from '../data'
import { Reveal, Stagger, staggerItem, motion, useReducedMotion } from './Motion.jsx'

export default function Process() {
  const reduce = useReducedMotion()

  return (
    <section className="section process-band" id="process">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Process</p>
          <h2>Quiet process. Loud results.</h2>
          <p className="lead">
            No theater. A short loop from the real problem to something you can
            put in customers&apos; hands.
          </p>
        </Reveal>

        <Stagger className="process-grid" delay={0.1}>
          {process.map((step) => (
            <motion.article
              key={step.n}
              className="process-card"
              variants={reduce ? undefined : staggerItem}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
