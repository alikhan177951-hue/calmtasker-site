import { motion } from 'framer-motion'
import { Smartphone, Globe2, AppWindow, Cpu } from 'lucide-react'
import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const services = [
  {
    id: '01',
    title: 'Custom websites with bookings — and more',
    kicker: 'Web',
    icon: Globe2,
    wide: true,
    body: 'Marketing sites that convert, booking calendars, intake forms, client dashboards, catalogs, and custom flows. If it belongs on the web, we build it to feel inevitable.',
    points: [
      'Scheduling and payments-ready booking UX',
      'Custom features, not a theme you outgrow',
      'Fast, accessible, search-aware front ends',
    ],
  },
  {
    id: '02',
    title: 'iOS apps',
    kicker: 'iOS',
    icon: Smartphone,
    body: 'Native Apple experiences — App Store polish, Human Interface intuition, and the details that make a product feel finished.',
  },
  {
    id: '03',
    title: 'Android apps',
    kicker: 'Android',
    icon: AppWindow,
    body: 'Play-ready Android products that feel at home across devices, with the same craft we bring to iOS.',
  },
  {
    id: '04',
    title: 'Broader software and product development',
    kicker: 'Software',
    icon: Cpu,
    wide: true,
    body: 'Internal tools, platforms, MVPs, and the unglamorous systems that keep a business calm. Architecture, APIs, dashboards, and long-lived code — not a throwaway prototype.',
  },
]

function SpotlightCard({ service, index }) {
  const ref = useRef(null)
  const [spot, setSpot] = useState({ x: 0, y: 0, o: 0 })
  const Icon = service.icon

  return (
    <Reveal delay={index * 0.08} className={service.wide ? 'md:col-span-2' : ''}>
      <motion.article
        ref={ref}
        onMouseMove={(event) => {
          const rect = ref.current.getBoundingClientRect()
          setSpot({ x: event.clientX - rect.left, y: event.clientY - rect.top, o: 1 })
        }}
        onMouseLeave={() => setSpot((s) => ({ ...s, o: 0 }))}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative h-full overflow-hidden rounded-3xl border border-cream/10 bg-forest-900/50 p-6 shadow-plate sm:p-8"
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: spot.o,
            background: `radial-gradient(420px circle at ${spot.x}px ${spot.y}px, rgba(11,107,79,0.35), transparent 40%)`,
          }}
        />
        <p className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-forest-200">
          {service.id} · {service.kicker}
        </p>
        <div className="relative mt-4 flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl text-cream sm:text-3xl">{service.title}</h3>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest/30 text-forest-100">
            <Icon size={20} />
          </span>
        </div>
        <p className="relative mt-4 text-mist/85">{service.body}</p>
        {service.points && (
          <ul className="relative mt-5 space-y-2 text-sm text-cream/80">
            {service.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                {point}
              </li>
            ))}
          </ul>
        )}
      </motion.article>
    </Reveal>
  )
}

export default function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-forest-200">Services</p>
          <h2 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">Four ways we help you ship.</h2>
          <p className="mt-4 max-w-2xl text-mist/80">
            Tell us the outcome. We handle the product, the interface, and the engineering — websites
            that take bookings or do anything else your business needs, plus mobile and software.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <SpotlightCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
