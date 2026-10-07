import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.12, margin: '0px 0px -8% 0px' })
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) setPassed(true)
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
      initial={{ opacity: 0, y: 28 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, delay: show ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
