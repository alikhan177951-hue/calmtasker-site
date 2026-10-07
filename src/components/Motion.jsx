import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export const easeOut = [0.22, 1, 0.36, 1]

export function Reveal({ children, className, delay = 0, y = 28 }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.18, margin: '0px 0px -8% 0px' })
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) setPassed(true)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('hashchange', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('hashchange', check)
    }
  }, [])

  if (reduce) return <div className={className}>{children}</div>

  const show = inView || passed

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay: show ? delay : 0, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className, delay = 0 }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

export function WordStagger({ text, className = '', delay = 0.18, as: Tag = 'span' }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  if (reduce) return <Tag className={className}>{text}</Tag>
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: delay + i * 0.048, ease: easeOut }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Tag>
  )
}

export function Cta({ href, children, className = 'inline-flex', type, onClick, disabled }) {
  const reduce = useReducedMotion()
  const hover = reduce ? undefined : { scale: 1.03, y: -2 }
  const tap = reduce ? undefined : { scale: 0.98 }
  const classes = `cta-sun items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${className}`

  if (href) {
    return (
      <motion.a href={href} whileHover={hover} whileTap={tap} className={classes} onClick={onClick}>
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button
      type={type || 'button'}
      disabled={disabled}
      whileHover={disabled ? undefined : hover}
      whileTap={disabled ? undefined : tap}
      className={`${classes} disabled:opacity-70`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

export function GhostCta({ href, children, className = '', onClick }) {
  const reduce = useReducedMotion()
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full border border-cream/20 bg-cream/5 px-6 py-3 text-sm font-semibold text-cream hover:border-sun/50 hover:bg-forest/20 ${className}`}
    >
      {children}
    </motion.a>
  )
}

export { motion, useReducedMotion }
