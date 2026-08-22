import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CONNECTORS, CONNECTOR_CATEGORIES } from '../data/connectors.js'
import ConnectorCard from '../components/ConnectorCard.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FilterPanel from '../components/FilterPanel.jsx'

export default function ConnectorsBrowse() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('newest')
  const [activeTags, setActiveTags] = useState([])

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const categoryCounts = useMemo(() => {
    const counts = {}
    CONNECTORS.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1
    })
    return counts
  }, [])

  const categoryFiltered = useMemo(
    () => (category ? CONNECTORS.filter((c) => c.category === category) : CONNECTORS),
    [category]
  )

  const allTags = useMemo(() => [...new Set(categoryFiltered.flatMap((c) => c.tags))].sort(), [categoryFiltered])

  const results = useMemo(() => {
    let list = categoryFiltered
    if (activeTags.length) list = list.filter((c) => activeTags.every((t) => c.tags.includes(t)))
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    list = list.slice()
    if (sort === 'newest') list.sort((a, b) => (a.addedDate < b.addedDate ? 1 : -1))
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [categoryFiltered, activeTags, query, sort])

  function toggleTag(tag) {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="content">
      <PageHeader
        title="Connectors"
        subtitle="Real MCP servers — running software Claude talks to, not markdown prompts. Each one is the vendor's own official server, packaged so /plugin install wires it up directly in Claude Code."
        stats={[`${CONNECTORS.length} connectors`, `${CONNECTOR_CATEGORIES.length} categories`, 'Third-party servers, packaged by Cognivexa']}
      />

      <div className="tools-note" style={{ marginBottom: 20, maxWidth: 900 }}>
        Unlike the Agents and Skills in this catalog, connectors are not written by Cognivexa — each is a real MCP
        server built and operated by the vendor named on its card (GitHub, Notion, Slack, Sentry, Stripe, HubSpot,
        Asana, Bytebase, Airtable, or Anthropic's own reference servers). This catalog only packages the connection
        config; you'll need your own credentials (API key, PAT, or OAuth login) for each one.
      </div>

      <div className="browse-layout">
        <FilterPanel
          categories={CONNECTOR_CATEGORIES}
          categoryCounts={categoryCounts}
          totalCount={CONNECTORS.length}
          category={category}
          onCategory={(c) => updateParam('category', c)}
          allTags={allTags}
          activeTags={activeTags}
          onToggleTag={toggleTag}
        />

        <div>
          <div className="browse-toolbar-row">
            <div className="search-input-wrap">
              <span className="search-icon">⌕</span>
              <input
                className="search-input"
                placeholder="Search connectors..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <select className="filter-select" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="name">Name</option>
            </select>
          </div>

          <div className="results-count">
            {results.length} connector{results.length === 1 ? '' : 's'} found
            {category ? ` in ${category}` : ''}
          </div>
          {results.length === 0 ? (
            <div className="empty-state">No connectors match your filters.</div>
          ) : (
            <div className="grid">
              {results.map((c, i) => (
                <ConnectorCard key={c.slug} connector={c} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
