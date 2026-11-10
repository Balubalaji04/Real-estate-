import { useState } from 'react'
import { hero } from '../data/content'

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState(hero.search.locations[0])
  const [type, setType] = useState(hero.search.propertyTypes[0])
  const [price, setPrice] = useState(hero.search.priceRanges[0])

  const submit = (event) => {
    event.preventDefault()
    onSearch?.({ location, type, price })
  }

  const fieldClass =
    'w-full border border-white/10 bg-navy-deep/90 px-3 py-3.5 font-body text-sm text-white outline-none transition focus:border-gold focus:bg-navy'

  return (
    <form
      onSubmit={submit}
      className="relative overflow-hidden border border-gold/25 bg-navy/80 p-3 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-4 lg:grid lg:grid-cols-[1.1fr_1fr_1fr_auto] lg:gap-3"
      aria-label="Property search"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="grid gap-3 lg:contents">
        <label className="block">
          <span className="mb-1.5 block font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Location
          </span>
          <select
            className={fieldClass}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {hero.search.locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Property type
          </span>
          <select className={fieldClass} value={type} onChange={(e) => setType(e.target.value)}>
            {hero.search.propertyTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Price range
          </span>
          <select className={fieldClass} value={price} onChange={(e) => setPrice(e.target.value)}>
            {hero.search.priceRanges.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-gold px-6 py-3.5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-gold-soft lg:min-w-[150px]"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  )
}
