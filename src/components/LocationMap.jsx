import { brand, mapSection } from '../data/content'

export default function LocationMap() {
  return (
    <div className="grid overflow-hidden border border-white/10 lg:grid-cols-[0.9fr_1.3fr]">
      <aside className="relative flex flex-col justify-between gap-8 border-b border-white/10 bg-gradient-to-br from-navy-deep via-navy to-navy-soft p-6 sm:p-8 lg:border-b-0 lg:border-r">
        <div>
          <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
            Showroom
          </p>
          <h3 className="mt-3 font-heading text-2xl font-bold text-white">
            Horizon Avenue Gallery
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {brand.address}
          </p>
          <p className="mt-2 font-heading text-xs tracking-[0.12em] text-gold/90">
            {mapSection.coords}
          </p>
        </div>

        <div>
          <p className="mb-3 font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Hours
          </p>
          <ul className="space-y-2">
            {mapSection.hours.map((row) => (
              <li
                key={row.day}
                className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2 text-sm"
              >
                <span className="text-white/80">{row.day}</span>
                <span className="text-white/55">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={mapSection.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex bg-gold px-4 py-2.5 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition hover:bg-gold-soft"
          >
            Get directions
          </a>
          <a
            href={`tel:${brand.phone.replace(/[^\d+]/g, '')}`}
            className="inline-flex border border-white/25 px-4 py-2.5 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:border-gold hover:text-gold"
          >
            Call showroom
          </a>
        </div>
      </aside>

      <div className="relative min-h-[320px] bg-navy-deep sm:min-h-[420px] lg:min-h-[480px]">
        <iframe
          title="Skyline Properties showroom map"
          src={mapSection.embedUrl}
          className="absolute inset-0 h-full w-full border-0 grayscale-[0.25] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
      </div>
    </div>
  )
}
