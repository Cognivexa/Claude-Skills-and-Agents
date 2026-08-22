// Reports where a skill/agent actually works today. Agents (Claude Code subagents)
// have no Claude Desktop or Codex equivalent, so those show "via skill" only when a
// same-slug skill genuinely exists — never a bare checkmark for something that isn't real.
export default function CompatibilityBadges({ type, hasMatchingSkill }) {
  const isSkill = type === 'skill'

  const badges = [
    { label: 'Claude Code', state: 'ok', title: 'Installs directly as a plugin or skill/agent file.' },
    {
      label: 'Claude Desktop',
      state: isSkill ? 'ok' : hasMatchingSkill ? 'via' : 'no',
      title: isSkill
        ? 'Installable via a downloadable .zip, uploaded manually in the Skills directory.'
        : hasMatchingSkill
          ? 'Not as an agent — Desktop has no subagent concept — but available through the matching skill.'
          : 'Claude Desktop has no concept of custom subagents.',
    },
    {
      label: 'Codex',
      state: isSkill ? 'ok' : hasMatchingSkill ? 'via' : 'no',
      title: isSkill
        ? 'Installable via the same npx command, into .agents/skills/.'
        : hasMatchingSkill
          ? 'Not as an agent — Codex has no subagent concept — but available through the matching skill.'
          : 'Codex has no concept of custom subagents.',
    },
  ]

  return (
    <div className="compat-badges">
      {badges.map((b) => (
        <span key={b.label} className={'compat-badge ' + b.state} title={b.title}>
          {b.state === 'ok' ? '✓' : b.state === 'via' ? '↳' : '✗'} {b.label}
        </span>
      ))}
    </div>
  )
}
