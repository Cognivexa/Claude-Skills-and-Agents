import { Link } from 'react-router-dom'
import { CONNECTORS } from '../data/connectors.js'

// Derived, not hand-maintained: scans the item's own integrations text for a real
// connector slug. If it mentions one, that connector is genuinely optional for this
// item; if it mentions none, the item has no connector dependency at all. Nothing in
// this catalog is ever marked "connection required" at the whole-item level — only a
// specific action within an agent's own instructions may ask for one, never the agent
// as a whole being gated behind a login screen.
function findMentionedConnectors(item) {
  // Skills and agents don't share one field name for this text, so scan every
  // field that plausibly carries it rather than assuming the agent-only
  // `integrations` array — a skill with no `integrations` field would otherwise
  // always read as "no connection," even when its own howItWorks names one.
  const candidateFields = [item.integrations, item.howItWorks, item.checklist, item.whenInvoked, item.intro, item.bodyMarkdown]
  const haystack = candidateFields
    .flat()
    .filter(Boolean)
    .join(' ')
  return CONNECTORS.filter((c) => haystack.includes(c.slug))
}

export default function ConnectionScope({ item }) {
  const mentioned = findMentionedConnectors(item)

  if (mentioned.length === 0) {
    return (
      <div className="connection-scope none">
        <span className="connection-scope-badge none">✓ No connection required</span>
        <span className="connection-scope-note">Fully usable standalone — nothing here depends on an external account.</span>
      </div>
    )
  }

  return (
    <div className="connection-scope optional">
      <span className="connection-scope-badge optional">◐ Optional connection</span>
      <span className="connection-scope-note">
        Works standalone. For live/account-specific actions it may use{' '}
        {mentioned.map((c, i) => (
          <span key={c.slug}>
            {i > 0 && ', '}
            <Link to={`/connectors/${c.slug}`}>{c.name}</Link>
          </span>
        ))}
        {' '}— always asked before it's used, never assumed.
      </span>
    </div>
  )
}
