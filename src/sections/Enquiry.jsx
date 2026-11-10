import { useState } from 'react'
import { motion } from '../lib/motion'
import SectionReveal from '../components/SectionReveal'
import { enquiry } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

const initial = {
  name: '',
  email: '',
  phone: '',
  interest: enquiry.interests[0],
  message: '',
}

export default function Enquiry() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const reduced = useReducedMotion()

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initial)
  }

  const field =
    'w-full border border-white/15 bg-navy/60 px-4 py-3 font-body text-sm text-white outline-none transition placeholder:text-white/35 focus:border-gold'

  return (
    <section id="enquiry" className="scroll-mt-24 bg-navy py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionReveal>
          <div className="gold-rule mb-4" />
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
            Contact
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            {enquiry.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            {enquiry.subtitle}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          {submitted ? (
            <motion.div
              className="border border-gold/40 bg-navy-deep/70 px-6 py-10"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="font-heading text-lg font-semibold text-gold">Enquiry sent</p>
              <p className="mt-2 text-white/80">{enquiry.successMessage}</p>
              <button
                type="button"
                className="mt-6 border border-white/20 px-4 py-2 text-xs font-heading font-bold uppercase tracking-[0.16em] text-white hover:border-gold hover:text-gold"
                onClick={() => setSubmitted(false)}
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid gap-4 border border-gold/20 bg-navy-deep/50 p-5 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)] sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Name
                  </span>
                  <input
                    required
                    className={field}
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    className={field}
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@email.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Phone
                  </span>
                  <input
                    className={field}
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+1 (555) 000-0000"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Interest
                  </span>
                  <select
                    className={field}
                    value={form.interest}
                    onChange={update('interest')}
                  >
                    {enquiry.interests.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Message
                </span>
                <textarea
                  required
                  rows={5}
                  className={`${field} resize-y`}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us about the home you’re seeking…"
                />
              </label>

              <button
                type="submit"
                className="mt-2 w-full bg-gold px-5 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-gold-soft sm:w-auto sm:justify-self-start"
              >
                Submit enquiry
              </button>
            </form>
          )}
        </SectionReveal>
      </div>
    </section>
  )
}
