import { motion, useReducedMotion } from 'framer-motion'
import LogoMark from './LogoMark.jsx'

const chips = ['Websites', 'Bookings', 'iOS', 'Android', 'Software']

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-forest/35 blur-[110px]"
        animate={reduce ? undefined : { opacity: [0.35, 0.6, 0.35], scale: [0.92, 1.04, 0.92] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-forest-200/20 bg-forest/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-forest-100"
          >
            Development studio · kaamtasker.com
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl font-serif text-4xl leading-[1.08] text-cream sm:text-6xl lg:text-[4.25rem]"
          >
            Websites, apps, and software —{' '}
            <em className="text-forest-200">built with calm precision.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist/85"
          >
            KaamTasker (said CalmTasker or ComTasker) designs and ships custom websites — bookings,
            portals, and whatever else you need on the web — plus native iOS and Android apps and
            broader product software. We are a studio. Not a marketplace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="shine rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-glow"
            >
              Talk about a build
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-cream/15 bg-cream/5 px-6 py-3 text-sm font-medium text-cream hover:border-forest-200/40 hover:bg-forest/15"
            >
              See the work
            </motion.a>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {chips.map((chip, index) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.07 }}
                whileHover={{ y: -3, scale: 1.04 }}
                className="rounded-full border border-forest-200/20 bg-ink/60 px-3 py-1.5 text-xs text-mist"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-forest/25 blur-3xl" />
          <div className="relative rounded-[2rem] border border-cream/10 bg-forest-900/70 p-6 shadow-plate backdrop-blur-xl">
            <div className="flex items-center justify-center">
              <LogoMark size={132} className="!rounded-[28px] [&>img]:!rounded-[24px]" />
            </div>
            <p className="mt-5 text-center font-serif text-3xl text-cream">KaamTasker</p>
            <p className="mt-1 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-forest-200">
              CalmTasker · ComTasker
            </p>
            <HeroStage />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroStage() {
  return (
    <div className="relative mt-6 h-48">
      <motion.div
        className="absolute left-2 top-4 w-44 rounded-2xl border border-cream/10 bg-ink p-3 shadow-glow"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mb-2 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#ffd166]" />
          <span className="h-1.5 w-1.5 rounded-full bg-forest-300" />
          <span className="ml-1 font-mono text-[9px] text-mist/60">book.yourbrand.com</span>
        </div>
        <div className="grid grid-cols-6 gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className={`h-3 rounded-sm ${[2, 5, 8].includes(i) ? 'bg-forest' : 'bg-forest-800'}`}
            />
          ))}
        </div>
        <div className="mt-2 rounded-lg bg-forest px-2 py-1 text-center text-[10px] font-medium text-cream">
          Confirm
        </div>
      </motion.div>

      <motion.div
        className="absolute right-6 top-0 w-24 rounded-[1.4rem] border border-cream/10 bg-forest-800 p-2"
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-cream/20" />
        <p className="text-center text-[10px] text-cream">Harbor</p>
        <div className="mt-2 space-y-1">
          <i className="block h-1.5 rounded bg-forest-300/80" />
          <i className="block h-1.5 w-3/4 rounded bg-forest-300/40" />
          <i className="block h-1.5 w-2/3 rounded bg-forest-300/25" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-2 w-28 rounded-2xl border border-cream/10 bg-cream/5 p-2"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="mx-auto mb-2 h-2 w-2 rounded-full bg-forest" />
        <p className="text-center text-[10px] text-cream">Atelier</p>
        <div className="mt-2 space-y-1">
          <i className="block h-1.5 rounded bg-mist/40" />
          <i className="block h-1.5 w-4/5 rounded bg-mist/25" />
        </div>
      </motion.div>
    </div>
  )
}
