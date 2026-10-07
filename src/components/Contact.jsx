import { AnimatePresence } from 'framer-motion'
import { CheckCircle2, Mail } from 'lucide-react'
import { useState } from 'react'
import { Cta, Reveal, motion, useReducedMotion } from './Motion.jsx'

const fieldClass =
  'rounded-2xl border border-cream/10 bg-ink/80 px-4 py-3 text-cream outline-none transition focus:border-sun/40 focus:ring-2 focus:ring-sun/40'

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.44-8.43ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.98c0 5.45-4.44 9.89-9.91 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

const empty = { name: '', email: '', kind: '', brief: '' }

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const reduce = useReducedMotion()

  function update(event) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (form.elements.website?.value) return
    if (!values.name.trim() || !values.email.trim() || !values.brief.trim()) {
      setError('Please add your name, email, and a short project brief.')
      return
    }
    if (!form.checkValidity()) {
      form.reportValidity()
      setError('Please complete the required fields.')
      return
    }

    setError('')
    setSending(true)
    await new Promise((resolve) => setTimeout(resolve, reduce ? 120 : 650))

    try {
      const leads = JSON.parse(localStorage.getItem('kaamtasker-leads') || '[]')
      leads.push({ ...values, submittedAt: new Date().toISOString() })
      localStorage.setItem('kaamtasker-leads', JSON.stringify(leads.slice(-20)))
    } catch {
      /* ignore quota / private mode */
    }

    setSending(false)
    setSent(true)
  }

  const iconHover = reduce ? undefined : { scale: 1.08, y: -2 }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-cream/10 bg-gradient-to-br from-forest/25 to-ink p-6 shadow-glow sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sun">Start a project</p>
          <h2 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">Tell us what you need to exist.</h2>
          <p className="mt-4 text-mist/85">
            A website that takes bookings. An iOS app. Android. A full product. Share a brief — we
            will reply with a clear next step.
          </p>
          <p className="mt-6 text-sm text-mist/70">Cantt Model Villas, Sialkot, Pakistan</p>
          <div className="mt-6 flex items-center gap-3">
            <motion.a
              href="mailto:support@kaamtasker.com"
              aria-label="Email KaamTasker"
              whileHover={iconHover}
              whileTap={reduce ? undefined : { scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun text-ink shadow-[0_10px_28px_-12px_rgba(232,239,108,0.7)]"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="https://wa.me/923355127623"
              aria-label="WhatsApp KaamTasker"
              target="_blank"
              rel="noreferrer"
              whileHover={iconHover}
              whileTap={reduce ? undefined : { scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-forest-200/30 bg-ink text-sun"
            >
              <WhatsAppIcon />
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                className="flex min-h-[28rem] flex-col items-start justify-center rounded-3xl border border-sun/20 bg-ink/60 p-8"
              >
                <motion.span
                  initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sun text-ink"
                >
                  <CheckCircle2 size={28} />
                </motion.span>
                <h3 className="mt-5 font-serif text-3xl text-cream">Brief received.</h3>
                <p className="mt-3 max-w-md text-mist/85">
                  Thanks{values.name ? `, ${values.name.split(' ')[0]}` : ''}. We have your project
                  notes and will follow up at {values.email}. Prefer a faster ping? Use the icons.
                </p>
                <Cta
                  className="mt-8"
                  onClick={() => {
                    setSent(false)
                    setValues(empty)
                  }}
                >
                  Send another brief
                </Cta>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                className="grid gap-4"
                onSubmit={onSubmit}
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm text-mist">
                    Name
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      value={values.name}
                      onChange={update}
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </label>
                  <label className="grid gap-1.5 text-sm text-mist">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={values.email}
                      onChange={update}
                      placeholder="you@company.com"
                      className={fieldClass}
                    />
                  </label>
                </div>
                <label className="grid gap-1.5 text-sm text-mist">
                  What do you need?
                  <select name="kind" value={values.kind} onChange={update} className={fieldClass}>
                    <option value="">Choose a starting point</option>
                    <option>Custom website (bookings or other features)</option>
                    <option>iOS app</option>
                    <option>Android app</option>
                    <option>iOS and Android</option>
                    <option>Software / product development</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm text-mist">
                  Project brief
                  <textarea
                    name="brief"
                    rows="5"
                    required
                    value={values.brief}
                    onChange={update}
                    placeholder="What should exist, who it is for, and any timing or constraints."
                    className={fieldClass}
                  />
                </label>
                <div className="hidden" aria-hidden="true">
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <Cta type="submit" disabled={sending} className="inline-flex w-full">
                  {sending ? 'Sending brief…' : 'Send project brief'}
                </Cta>
                <p className="text-xs text-mist/60" role="status" aria-live="polite">
                  {error || 'Lead form — we follow up from support@kaamtasker.com. Icons are for a direct ping.'}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
