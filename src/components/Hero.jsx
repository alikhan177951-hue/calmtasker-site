import { Cta, GhostCta, WordStagger, easeOut, motion, useReducedMotion } from './Motion.jsx'
import LogoMark from './LogoMark.jsx'

const chips = ['Websites', 'Bookings', 'iOS', 'Android', 'Software']

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[18%] top-10 h-[420px] w-[420px] rounded-full bg-forest/40 blur-[120px]"
        animate={reduce ? undefined : { opacity: [0.35, 0.62, 0.35], scale: [0.94, 1.06, 0.94] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-32 h-[280px] w-[280px] rounded-full bg-sun/10 blur-[90px]"
        animate={reduce ? undefined : { opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease: easeOut }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sun/20 bg-forest/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-sun"
          >
            Development studio · kaamtasker.com
          </motion.p>

          <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] text-cream sm:text-6xl lg:text-[4.35rem]">
            <WordStagger text="Websites, apps, and software —" delay={0.16} as="span" />{' '}
            <WordStagger
              text="built with calm precision."
              delay={0.52}
              className="italic text-sun"
              as="em"
            />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.7, ease: easeOut }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist/85"
          >
            KaamTasker (said CalmTasker or ComTasker) designs and ships custom websites — bookings,
            portals, and whatever else you need on the web — plus native iOS and Android apps and
            broader product software. We are a studio. Not a marketplace.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86, duration: 0.6, ease: easeOut }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Cta href="#contact">Talk about a build</Cta>
            <GhostCta href="#work">See the work</GhostCta>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {chips.map((chip, index) => (
              <motion.span
                key={chip}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95 + index * 0.06, ease: easeOut }}
                whileHover={reduce ? undefined : { y: -3, scale: 1.04 }}
                className="rounded-full border border-forest-200/20 bg-ink/60 px-3 py-1.5 text-xs text-mist"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.28, duration: 0.95, ease: easeOut }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-forest/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cream/10 bg-forest-900/55 p-6 shadow-plate backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sun/50 to-transparent" />
            <div className="flex items-center justify-center pt-2">
              <LogoMark size={132} className="!rounded-[28px] [&>img]:!rounded-[24px]" />
            </div>
            <p className="mt-5 text-center font-serif text-3xl text-cream">KaamTasker</p>
            <p className="mt-1 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-forest-200">
              CalmTasker · ComTasker
            </p>
            <HeroStage reduce={reduce} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroStage({ reduce }) {
  const float = (duration, from = 0) =>
    reduce
      ? undefined
      : { y: [from, from - 8, from], transition: { duration, repeat: Infinity, ease: 'easeInOut' } }

  return (
    <div className="relative mt-6 h-48">
      <motion.div
        className="absolute left-2 top-4 w-44 rounded-2xl border border-cream/10 bg-ink/90 p-3 shadow-glow"
        animate={float(5.5)}
      >
        <div className="mb-2 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-1.5 w-1.5 rounded-full bg-sun" />
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
        <div className="mt-2 rounded-lg bg-sun px-2 py-1 text-center text-[10px] font-semibold text-ink">
          Confirm
        </div>
      </motion.div>

      <motion.div
        className="absolute right-6 top-0 w-24 rounded-[1.4rem] border border-cream/10 bg-forest-800/90 p-2 backdrop-blur"
        animate={float(6.2, 6)}
      >
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-cream/20" />
        <p className="text-center text-[10px] text-cream">Harbor</p>
        <div className="mt-2 space-y-1">
          <i className="block h-1.5 rounded bg-sun/80" />
          <i className="block h-1.5 w-3/4 rounded bg-forest-300/40" />
          <i className="block h-1.5 w-2/3 rounded bg-forest-300/25" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-2 w-28 rounded-2xl border border-cream/10 bg-cream/5 p-2 backdrop-blur"
        animate={float(4.8)}
      >
        <div className="mx-auto mb-2 h-2 w-2 rounded-full bg-sun" />
        <p className="text-center text-[10px] text-cream">Atelier</p>
        <div className="mt-2 space-y-1">
          <i className="block h-1.5 rounded bg-mist/40" />
          <i className="block h-1.5 w-4/5 rounded bg-mist/25" />
        </div>
      </motion.div>
    </div>
  )
}
