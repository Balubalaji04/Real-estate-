import { propertyTypes, sortOptions } from '../data/content'

export default function PropertyFilters({
  activeType,
  onTypeChange,
  sortBy,
  onSortChange,
  resultCount,
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-3 font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
          Filter by type
        </p>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => {
            const active = activeType === type
            return (
              <button
                key={type}
                type="button"
                onClick={() => onTypeChange(type)}
                className={`px-4 py-2 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                  active
                    ? 'bg-gold text-navy'
                    : 'border border-white/15 text-white/80 hover:border-gold hover:text-gold'
                }`}
              >
                {type}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
        <p className="font-body text-sm text-white/60">
          Showing <span className="text-white">{resultCount}</span> homes
        </p>
        <label className="flex items-center gap-3">
          <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
            Sort
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="border border-white/15 bg-navy-deep px-3 py-2 font-body text-sm text-white outline-none focus:border-gold"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}
