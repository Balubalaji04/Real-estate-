import { motion } from '../lib/motion'
import { formatPrice } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function PropertyCard({ property, index, onOpen }) {
  const reduced = useReducedMotion()

  const content = (
    <article className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-navy-deep/70 transition duration-300 hover:border-gold/40 hover:shadow-[0_24px_60px_-28px_rgba(212,175,55,0.35)]">
      <div className="absolute left-0 top-0 z-10 h-full w-0.5 bg-gold opacity-0 transition group-hover:opacity-100" />
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90" />
        {property.featured && (
          <span className="absolute left-3 top-3 bg-gold px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.16em] text-navy">
            Featured
          </span>
        )}
        <span className="absolute bottom-3 left-3 font-heading text-xl font-bold text-white">
          {formatPrice(property.price)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
            {property.type} · {property.location}
          </p>
          <h3 className="mt-1.5 font-heading text-lg font-semibold leading-snug text-white">
            {property.title}
          </h3>
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center text-sm text-white/70">
          <span>
            <strong className="block font-heading text-white">{property.beds}</strong>
            beds
          </span>
          <span>
            <strong className="block font-heading text-white">{property.baths}</strong>
            baths
          </span>
          <span>
            <strong className="block font-heading text-white">
              {property.sqft.toLocaleString()}
            </strong>
            sqft
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpen(property)}
          className="mt-1 w-full border border-gold/70 px-4 py-2.5 font-heading text-[11px] font-bold uppercase tracking-[0.16em] text-gold transition group-hover:bg-gold group-hover:text-navy"
        >
          View details
        </button>
      </div>
    </article>
  )

  if (reduced) return content

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      {content}
    </motion.div>
  )
}
