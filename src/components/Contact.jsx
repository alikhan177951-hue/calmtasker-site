import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { brand } from '../data'
import { Reveal, motion, useReducedMotion } from './Motion.jsx'

const empty = { name: '', email: '', brief: '' }

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5.5 7.5 6.5 5 6.5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.44-8.43ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.98c0 5.45-4.44 9.89-9.91 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const reduce = useReducedMotion()

  function update(event) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function onSubmit(event) {
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
    const subject = encodeURIComponent(
      `Project brief from ${values.name || 'website visitor'}`,
    )
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        '',
        'Project brief:',
        values.brief,
      ].join('\n'),
    )
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <div className="wrap quote-shell">
        <Reveal>
          <aside className="quote-aside">
            <p className="eyebrow">Start a project</p>
            <h2>Tell us what you need to exist.</h2>
            <p>
              A website that takes bookings. An iOS app. Android. A full product.
              Share a brief — we reply with a clear next step.
            </p>
            <p className="quote-aside__area">{brand.area}</p>
            <div className="contact-icons">
              <motion.a
                href={`mailto:${brand.email}`}
                aria-label="Email KaamTasker"
                className="contact-icon"
                whileHover={reduce ? undefined : { scale: 1.08, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.95 }}
              >
                <MailIcon />
              </motion.a>
              <motion.a
                href={brand.whatsapp}
                aria-label="WhatsApp KaamTasker"
                target="_blank"
                rel="noreferrer"
                className="contact-icon contact-icon--ghost"
                whileHover={reduce ? undefined : { scale: 1.08, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.95 }}
              >
                <WhatsAppIcon />
              </motion.a>
            </div>
          </aside>
        </Reveal>

        <Reveal delay={0.1}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                className="quote-success"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
              >
                <h3>Brief ready to send.</h3>
                <p>
                  Your email app should open with the project notes filled in for{' '}
                  {brand.email}. Prefer a faster ping? Use the icons.
                </p>
                <motion.button
                  type="button"
                  className="btn btn--ghost-dark"
                  whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  onClick={() => {
                    setSent(false)
                    setValues(empty)
                  }}
                >
                  Edit another brief
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="quote-form"
                onSubmit={onSubmit}
                noValidate
                initial={reduce ? false : { opacity: 0.96 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
              >
                <div className="form-grid form-grid--2">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.name}
                      onChange={update}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={values.email}
                      onChange={update}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="field" style={{ marginTop: '1rem' }}>
                  <label htmlFor="brief">Project brief</label>
                  <textarea
                    id="brief"
                    name="brief"
                    required
                    value={values.brief}
                    onChange={update}
                    placeholder="What should exist, who it is for, and any timing or constraints."
                  />
                </div>
                <div className="hp" aria-hidden="true">
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="form-actions">
                  <motion.button
                    className="btn btn--accent"
                    type="submit"
                    whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                  >
                    Send project brief
                  </motion.button>
                </div>
                <p className="form-note" role="status" aria-live="polite">
                  {error ||
                    `Opens your email client to ${brand.email}. Icons are for a direct ping.`}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
