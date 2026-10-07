import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Cta, motion, useReducedMotion } from './Motion.jsx'
import LogoMark from './LogoMark.jsx'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <motion.header
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center gap-3 rounded-2xl border px-3 py-2.5 backdrop-blur-xl transition-colors duration-500 sm:px-4 ${
          scrolled ? 'border-forest-200/15 bg-ink/80 shadow-glow' : 'border-cream/10 bg-ink/40'
        }`}
      >
        <a href="#top" className="group flex min-w-0 items-center gap-3 rounded-xl pr-2" onClick={close}>
          <motion.span whileHover={reduce ? undefined : { scale: 1.06, rotate: -2 }} className="inline-flex">
            <LogoMark size={42} />
          </motion.span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-cream">KaamTasker</span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-forest-200">
              Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex md:flex-1 md:justify-center">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="rounded-full px-3.5 py-2 text-sm text-mist/80 transition-colors hover:bg-forest/20 hover:text-cream"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Cta href="#contact" className="hidden !px-4 !py-2 md:inline-flex">
            Start a project
          </Cta>
          <button
            type="button"
            className={`menu-toggle md:hidden${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-toggle__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={reduce ? false : { opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: 28 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-40 flex h-[100dvh] flex-col justify-center gap-1 overflow-hidden bg-ink/97 px-6 pb-10 pt-24 backdrop-blur-xl md:hidden"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={close}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
                className="block rounded-xl px-3 py-3 text-lg text-cream hover:bg-forest/20"
              >
                {link.label}
              </motion.a>
            ))}
            <Cta href="#contact" onClick={close} className="mt-3 inline-flex w-full">
              Start a project
            </Cta>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
