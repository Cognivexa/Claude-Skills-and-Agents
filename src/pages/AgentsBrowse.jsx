import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AGENTS, AGENT_CATEGORIES } from '../data/agents.js'
import AgentCard from '../components/AgentCard.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FilterBar from '../components/FilterBar.jsx'

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'name', label: 'Name' },
]

export default function AgentsBrowse() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category')
  const author = searchParams.get('author')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('newest')
  const [activeTags, setActiveTags] = useState([])

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  const authors = useMemo(() => [...new Set(AGENTS.map((a) => a.author))].sort(), [])

  const categoryFiltered = useMemo(() => {
    let list = AGENTS.slice()
    if (category) list = list.filter((a) => a.category === category)
    if (author) list = list.filter((a) => a.author === author)
    return list
  }, [category, author])

  const allTags = useMemo(
    () => [...new Set(categoryFiltered.flatMap((a) => a.tags))].sort(),
    [categoryFiltered]
  )

  const results = useMemo(() => {
    let list = categoryFiltered
    if (activeTags.length) list = list.filter((a) => activeTags.every((t) => a.tags.includes(t)))
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.shortDescription.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
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
        title="Agents"
        subtitle="Specialist subagents you can delegate work to inside Claude Code — one persona and workflow per job."
        stats={[`${AGENTS.length} agents`, `${AGENT_CATEGORIES.length} categories`, `${authors.length} authors`]}
      />

      <FilterBar
        query={query}
        onQuery={setQuery}
        searchPlaceholder="Search agents..."
        categories={AGENT_CATEGORIES}
        category={category}
        onCategory={(c) => updateParam('category', c)}
        authors={authors}
        author={author}
        onAuthor={(a) => updateParam('author', a)}
        sort={sort}
        onSort={setSort}
        sortOptions={SORT_OPTIONS}
        allTags={allTags}
        activeTags={activeTags}
        onToggleTag={toggleTag}
      />

      <div className="results-count">
        {results.length} agent{results.length === 1 ? '' : 's'} found
        {category ? ` in ${category}` : ''}
        {author ? ` by ${author}` : ''}
      </div>
      {results.length === 0 ? (
        <div className="empty-state">No agents match your filters.</div>
      ) : (
        <div className="grid">
          {results.map((a) => (
            <AgentCard key={a.slug} agent={a} />
          ))}
        </div>
      )}
    </div>
  )
}
