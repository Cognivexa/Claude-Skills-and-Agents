export default function FilterBar({
  query,
  onQuery,
  searchPlaceholder,
  categories,
  category,
  onCategory,
  authors,
  author,
  onAuthor,
  sort,
  onSort,
  sortOptions,
  allTags,
  activeTags,
  onToggleTag,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-row">
        <div className="search-input-wrap">
          <span className="search-icon">⌕</span>
          <input
            className="search-input"
            placeholder={searchPlaceholder}
            value={query}
            onChange={(e) => onQuery(e.target.value)}
          />
        </div>
        <select className="filter-select" value={author || ''} onChange={(e) => onAuthor(e.target.value || null)}>
          <option value="">All authors</option>
          {authors.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <select className="filter-select" value={sort} onChange={(e) => onSort(e.target.value)}>
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-row">
        <span className="filter-label">Category</span>
        <div className="chip-row">
          <button className={'chip' + (!category ? ' active' : '')} onClick={() => onCategory(null)}>
            All
          </button>
          {categories.map((c) => (
            <button key={c} className={'chip' + (category === c ? ' active' : '')} onClick={() => onCategory(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {allTags.length > 0 && (
        <div className="filter-row">
          <span className="filter-label">Tags</span>
          <div className="chip-row">
            {allTags.map((t) => (
              <button
                key={t}
                className={'chip tag' + (activeTags.includes(t) ? ' active' : '')}
                onClick={() => onToggleTag(t)}
              >
                #{t}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
