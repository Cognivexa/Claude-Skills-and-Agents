import { useState } from 'react'

export default function FilterPanel({
  categories,
  categoryCounts,
  totalCount,
  category,
  onCategory,
  authors,
  author,
  onAuthor,
  allTags,
  activeTags,
  onToggleTag,
}) {
  const [tagsOpen, setTagsOpen] = useState(false)
  const [tagQuery, setTagQuery] = useState('')

  const visibleTags = allTags.filter((t) => t.toLowerCase().includes(tagQuery.trim().toLowerCase()))

  return (
    <aside className="filter-panel">
      <div className="filter-panel-section">
        <div className="filter-panel-title">Categories</div>
        <div className="cat-list">
          <button className={'cat-row' + (!category ? ' active' : '')} onClick={() => onCategory(null)}>
            <span>All</span>
            <span className="cat-count">{totalCount}</span>
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={'cat-row' + (category === c ? ' active' : '')}
              onClick={() => onCategory(c)}
            >
              <span>{c}</span>
              <span className="cat-count">{categoryCounts[c] || 0}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-panel-section">
        <div className="filter-panel-title">Author</div>
        <select className="filter-select full" value={author || ''} onChange={(e) => onAuthor(e.target.value || null)}>
          <option value="">All authors</option>
          {authors.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-panel-section">
        <button className="filter-panel-title toggle" onClick={() => setTagsOpen((o) => !o)}>
          <span>Tags{activeTags.length > 0 ? ` (${activeTags.length})` : ''}</span>
          <span className="chevron">{tagsOpen ? '−' : '+'}</span>
        </button>

        {tagsOpen && (
          <div className="tag-filter">
            <input
              className="filter-select full"
              placeholder="Filter tags..."
              value={tagQuery}
              onChange={(e) => setTagQuery(e.target.value)}
            />
            <div className="tag-list">
              {visibleTags.map((t) => (
                <label className="tag-checkbox" key={t}>
                  <input type="checkbox" checked={activeTags.includes(t)} onChange={() => onToggleTag(t)} />
                  <span>#{t}</span>
                </label>
              ))}
              {visibleTags.length === 0 && <div className="tag-empty">No matching tags</div>}
            </div>
          </div>
        )}

        {activeTags.length > 0 && (
          <div className="active-tag-pills">
            {activeTags.map((t) => (
              <button key={t} className="chip tag active" onClick={() => onToggleTag(t)}>
                #{t} ×
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
