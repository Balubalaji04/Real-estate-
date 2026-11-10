import { useEffect } from 'react'
import { AnimatePresence, motion } from '../lib/motion'
import { formatPrice } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function PropertyModal({ property, onClose }) {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!property) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [property, onClose])

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="property-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
            aria-label="Close property details"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-white/10 bg-navy shadow-2xl"
            initial={reduced ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={property.gallery?.[0] || property.image}
                alt={property.title}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-navy/80 text-white transition hover:bg-gold hover:text-navy"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-5 p-5 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    {property.type} · {property.location}
                  </p>
                  <h2
                    id="property-modal-title"
                    className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl"
                  >
                    {property.title}
                  </h2>
                </div>
                <p className="font-heading text-2xl font-bold text-gold">
                  {formatPrice(property.price)}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 border border-white/10 bg-navy-deep/50 p-4 text-center">
                <div>
                  <p className="font-heading text-lg font-bold">{property.beds}</p>
                  <p className="text-xs uppercase tracking-wider text-white/60">Beds</p>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold">{property.baths}</p>
                  <p className="text-xs uppercase tracking-wider text-white/60">Baths</p>
                </div>
                <div>
                  <p className="font-heading text-lg font-bold">
                    {property.sqft.toLocaleString()}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-white/60">Sqft</p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-white/80">{property.description}</p>

              <div>
                <p className="mb-2 font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  Amenities
                </p>
                <ul className="flex flex-wrap gap-2">
                  {property.amenities.map((item) => (
                    <li
                      key={item}
                      className="border border-white/15 px-3 py-1.5 text-sm text-white/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {property.gallery?.length > 1 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {property.gallery.slice(1).map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}

              <a
                href="#enquiry"
                onClick={onClose}
                className="inline-flex bg-gold px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-gold-soft"
              >
                Enquire about this home
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
