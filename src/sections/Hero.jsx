import { motion } from '../lib/motion'
import Building3D from '../components/Building3D'
import HeroBackground from '../components/HeroBackground'
import SearchBar from '../components/SearchBar'
import { brand, hero } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Hero({ onSearch }) {
  const reduced = useReducedMotion()

  const fade = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-10 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-16 lg:pt-8">
        <div className="relative z-10 max-w-xl">
          <motion.div {...fade(0)}>
            <div className="gold-rule mb-5" />
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Luxury brokerage
            </p>
          </motion.div>

          <motion.p
            className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
            {...fade(0.06)}
          >
            {brand.name}
          </motion.p>

          <motion.h1
            className="mt-5 max-w-lg font-heading text-xl font-semibold leading-snug text-gold-soft sm:text-2xl"
            {...fade(0.12)}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-md text-base leading-relaxed text-white/75 sm:text-lg"
            {...fade(0.18)}
          >
            {hero.subheadline}
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3" {...fade(0.26)}>
            <a
              href="#properties"
              className="bg-gold px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-navy shadow-[0_0_0_1px_rgba(212,175,55,0.35)] transition hover:bg-gold-soft hover:shadow-[0_12px_40px_-12px_rgba(212,175,55,0.55)]"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#agents"
              className="border border-white/25 bg-white/5 px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:border-gold hover:text-gold"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 h-[300px] sm:h-[380px] lg:h-[480px]"
          {...fade(0.2)}
        >
          <div className="absolute inset-6 rounded-full bg-gold/10 blur-3xl" aria-hidden />
          <Building3D />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
        {...fade(0.32)}
      >
        <SearchBar onSearch={onSearch} />
      </motion.div>
    </section>
  )
}
