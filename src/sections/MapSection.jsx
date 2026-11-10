import LocationMap from '../components/LocationMap'
import SectionReveal from '../components/SectionReveal'
import { mapSection } from '../data/content'

export default function MapSection() {
  return (
    <section id="map" className="scroll-mt-24 bg-navy-deep py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-10 max-w-2xl">
          <div className="gold-rule mb-4" />
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
            Location
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            {mapSection.title}
          </h2>
          <p className="mt-3 text-base text-white/70">{mapSection.subtitle}</p>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <LocationMap />
        </SectionReveal>
      </div>
    </section>
  )
}
