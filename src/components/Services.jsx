import { services } from '../data'
import { Reveal, Stagger, staggerItem, motion, useReducedMotion } from './Motion.jsx'

export default function Services() {
  const reduce = useReducedMotion()

  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="services-head">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2>Four ways we help you ship.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead">
              Tell us the outcome. We handle the product, the interface, and the
              engineering — websites that take bookings or do anything else your
              business needs, plus mobile and software.
            </p>
          </Reveal>
        </div>

        <Stagger className="service-grid">
          {services.map((service) => (
            <motion.article
              key={service.n}
              className={`service-card${service.wide ? ' service-card--wide' : ''}`}
              variants={reduce ? undefined : staggerItem}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <p className="service-card__kicker">
                {service.n} · {service.kicker}
              </p>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              {service.points && (
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
