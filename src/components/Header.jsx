import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
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
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 16)
  })

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-3 py-2.5 backdrop-blur-xl transition-colors duration-500 sm:px-4 ${
          scrolled
            ? 'border-forest-200/15 bg-ink/80 shadow-glow'
            : 'border-cream/10 bg-ink/40'
        }`}
      >
        <a href="#top" className="group flex items-center gap-3 rounded-xl pr-2">
          <motion.span whileHover={{ scale: 1.06, rotate: -2 }} className="inline-flex">
            <LogoMark size={42} />
          </motion.span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-cream">KaamTasker</span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-forest-200">
              Studio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full px-3.5 py-2 text-sm text-mist/80 transition-colors hover:bg-forest/20 hover:text-cream"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shine hidden rounded-full bg-forest px-4 py-2 text-sm font-medium text-cream shadow-glow md:inline-flex"
          >
            Start a project
          </motion.a>
          <button
            type="button"
            className="rounded-full p-2 text-cream md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            className="mx-auto mt-2 overflow-hidden rounded-2xl border border-cream/10 bg-ink/95 p-3 backdrop-blur-xl md:hidden"
          >
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="block rounded-xl px-3 py-3 text-cream hover:bg-forest/20"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl bg-forest px-3 py-3 text-center font-medium text-cream"
            >
              Start a project
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
