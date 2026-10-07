import { work } from '../data'
import { Reveal, Stagger, staggerItem, motion, useReducedMotion } from './Motion.jsx'

export default function Showcase() {
  const reduce = useReducedMotion()

  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2>Product frames, labelled honestly.</h2>
          <p className="lead">
            Showcase frames are marked Placeholder until live case studies land.
            The craft standard is already set.
          </p>
        </Reveal>

        <Stagger className="work-grid" delay={0.08}>
          {work.map((item) => (
            <motion.article
              key={item.title}
              className={`work-card work-card--${item.tone}`}
              variants={reduce ? undefined : staggerItem}
              whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
              whileTap={reduce ? undefined : { scale: 0.99 }}
            >
              <span className="work-card__badge">{item.label}</span>
              <div className="work-card__screen" aria-hidden="true">
                <div className="work-card__bar" />
                <div className="work-card__lines">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.kind}</p>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
