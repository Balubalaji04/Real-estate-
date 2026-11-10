import { brand, footer } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <div className="gold-rule mb-4" />
          <p className="font-heading text-lg font-bold tracking-[0.08em] uppercase text-white">
            {brand.name}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{footer.blurb}</p>
          <div className="mt-5 space-y-1 text-sm text-white/70">
            <p>{brand.address}</p>
            <a href={`mailto:${brand.email}`} className="block transition hover:text-gold">
              {brand.email}
            </a>
            <a
              href={`tel:${brand.phone.replace(/[^\d+]/g, '')}`}
              className="block transition hover:text-gold"
            >
              {brand.phone}
            </a>
          </div>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title}>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45 sm:px-6">
        {footer.legal}
      </div>
    </footer>
  )
}
