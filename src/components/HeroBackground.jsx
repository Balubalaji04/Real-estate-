export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-gradient absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-80" />
      <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-gold/12 blur-3xl" />
      <div className="absolute right-[-4rem] top-1/3 h-96 w-96 rounded-full bg-navy-soft/90 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gold/8 blur-3xl" />
      <span className="hero-particle" style={{ left: '12%', bottom: '18%', animationDelay: '0s' }} />
      <span className="hero-particle" style={{ left: '46%', bottom: '22%', animationDelay: '0.6s' }} />
      <span className="hero-particle" style={{ left: '78%', bottom: '26%', animationDelay: '1.5s' }} />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy-deep/70 to-transparent" />
    </div>
  )
}
