import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from '../lib/motion'
import PropertyCard from '../components/PropertyCard'
import PropertyFilters from '../components/PropertyFilters'
import PropertyModal from '../components/PropertyModal'
import SectionReveal from '../components/SectionReveal'
import { matchesPriceRange, properties } from '../data/content'

export default function Properties({ searchQuery }) {
  const [type, setType] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!searchQuery) return
    if (searchQuery.type && searchQuery.type !== 'Any type') {
      setType(searchQuery.type)
    } else {
      setType('All')
    }
  }, [searchQuery])

  const filtered = useMemo(() => {
    let list = [...properties]

    if (type !== 'All') {
      list = list.filter((item) => item.type === type)
    }

    if (searchQuery) {
      const { location, price } = searchQuery
      if (location && location !== 'Any location') {
        list = list.filter((item) => item.location === location)
      }
      if (price && price !== 'Any price') {
        list = list.filter((item) => matchesPriceRange(item.price, price))
      }
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'beds-desc':
        list.sort((a, b) => b.beds - a.beds)
        break
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured))
    }

    return list
  }, [type, sortBy, searchQuery])

  return (
    <section id="properties" className="scroll-mt-24 bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mb-10 max-w-2xl">
          <div className="gold-rule mb-4" />
          <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
            Featured inventory
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Homes with presence
          </h2>
          <p className="mt-3 text-base text-white/70">
            Filter and sort our curated collection. Select a card for full details.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.08} className="mb-8">
          <PropertyFilters
            activeType={type}
            onTypeChange={setType}
            sortBy={sortBy}
            onSortChange={setSortBy}
            resultCount={filtered.length}
          />
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
                onOpen={setSelected}
              />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 border border-white/10 bg-navy-deep/50 px-6 py-10 text-center text-white/70">
            No properties match those filters. Try widening your search.
          </p>
        )}
      </div>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
