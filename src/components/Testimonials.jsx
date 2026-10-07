import { demos } from '../data'
import { Reveal, Stagger, staggerItem, motion, useReducedMotion } from './Motion.jsx'

export default function Testimonials() {
  const reduce = useReducedMotion()

  return (
    <section className="section section--tight" id="voices">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Voices</p>
          <h2>Demo notes — not invented reviews.</h2>
        </Reveal>

        <Stagger className="demo-grid" delay={0.06}>
          {demos.map((item) => (
            <motion.blockquote
              key={item.meta}
              className="demo-card"
              variants={reduce ? undefined : staggerItem}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <span className="demo-card__badge">Demo</span>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>{item.meta}</footer>
            </motion.blockquote>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
