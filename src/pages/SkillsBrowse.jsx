import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SKILLS, SKILL_CATEGORIES } from '../data/skills.js'
import SkillCard from '../components/SkillCard.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FilterBar from '../components/FilterBar.jsx'

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'stars', label: 'Most Stars' },
  { value: 'name', label: 'Name' },
]

export default function SkillsBrowse() {
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

  const authors = useMemo(() => [...new Set(SKILLS.map((s) => s.author))].sort(), [])

  const categoryFiltered = useMemo(() => {
    let list = SKILLS.slice()
    if (category) list = list.filter((s) => s.category === category)
    if (author) list = list.filter((s) => s.author === author)
    return list
  }, [category, author])

  const allTags = useMemo(
    () => [...new Set(categoryFiltered.flatMap((s) => s.tags))].sort(),
    [categoryFiltered]
  )

  const results = useMemo(() => {
    let list = categoryFiltered
    if (activeTags.length) list = list.filter((s) => activeTags.every((t) => s.tags.includes(t)))
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    list = list.slice()
    if (sort === 'newest') list.sort((a, b) => (a.addedDate < b.addedDate ? 1 : -1))
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'stars') list.sort((a, b) => b.stars - a.stars)
    return list
  }, [categoryFiltered, activeTags, query, sort])

  function toggleTag(tag) {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="content">
      <PageHeader
        title="Skills"
        subtitle="Reusable Markdown skills Claude Code loads on demand — drop them in and invoke by name."
        stats={[`${SKILLS.length} skills`, `${SKILL_CATEGORIES.length} categories`, `${authors.length} authors`]}
      />

      <FilterBar
        query={query}
        onQuery={setQuery}
        searchPlaceholder="Search skills..."
        categories={SKILL_CATEGORIES}
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
        {results.length} skill{results.length === 1 ? '' : 's'} found
        {category ? ` in ${category}` : ''}
        {author ? ` by ${author}` : ''}
      </div>
      {results.length === 0 ? (
        <div className="empty-state">No skills match your filters.</div>
      ) : (
        <div className="grid">
          {results.map((s) => (
            <SkillCard key={s.slug} skill={s} />
          ))}
        </div>
      )}
    </div>
  )
}
