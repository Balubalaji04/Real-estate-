import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from '../lib/motion'
import { brand, navLinks } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduced = useReducedMotion()

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
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-navy/95 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md'
          : 'border-transparent bg-navy/40 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group flex items-center gap-3" onClick={close}>
          <span className="flex h-10 w-10 items-center justify-center bg-gold text-navy shadow-[0_0_24px_-6px_rgba(212,175,55,0.8)] transition group-hover:bg-gold-soft">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M4 20V10l4-3v13H4zm6 0V5l4-3v18h-4zm6 0V8l4-3v15h-4z" />
            </svg>
          </span>
          <span className="font-heading text-sm font-bold tracking-[0.14em] uppercase sm:text-base">
            {brand.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-heading text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            className="bg-gold px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-[0.16em] text-navy transition hover:bg-gold-soft"
          >
            Book a tour
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-gold hover:text-gold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="border-t border-white/10 bg-navy-deep md:hidden"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={reduced ? undefined : { height: 'auto', opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="border-b border-white/10 py-3 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white/90"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#enquiry"
                onClick={close}
                className="mt-3 bg-gold px-4 py-3 text-center font-heading text-xs font-bold uppercase tracking-[0.16em] text-navy"
              >
                Book a tour
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
