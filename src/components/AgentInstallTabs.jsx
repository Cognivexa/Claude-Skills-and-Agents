import { useState } from 'react'
import { Link } from 'react-router-dom'

const SCOPES = [
  { key: 'project', label: 'Project' },
  { key: 'global', label: 'Global' },
]

const DEST_DIR = {
  project: '.claude/agents/',
  global: '~/.claude/agents/',
}

export default function AgentInstallTabs({ slug, hasMatchingSkill }) {
  const [scope, setScope] = useState('project')

  return (
    <div className="install-block">
      <div className="install-tabs-header">
        <div className="install-heading" style={{ marginBottom: 0 }}>
          Or drop it straight into a project
          <span className="tool-badge">Claude Code only</span>
        </div>
        <div className="toggle-group">
          {SCOPES.map((s) => (
            <button
              key={s.key}
              className={'toggle-btn' + (scope === s.key ? ' active' : '')}
              onClick={() => setScope(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <p className="install-intro">
        This agent also ships as a plain <code>agents/{slug}.md</code> file at the repo root. Copy it by hand into{' '}
        <code>{DEST_DIR[scope]}</code> — {scope === 'project' ? 'this project only' : 'every project on this machine'}{' '}
        — to install it as a subagent without the plugin marketplace.
      </p>

      <div className="tools-note">
        Subagents are a Claude Code concept — Codex doesn't have an equivalent to install this into.{' '}
        {hasMatchingSkill ? (
          <>
            This capability is also available as a skill, which Codex <em>can</em> use — see the{' '}
            <Link to={`/skills/${slug}`}>{slug}</Link> skill page for its Claude Code + Codex install commands.
          </>
        ) : (
          "If you need this in Codex, it would need to be adapted into a skill first — there isn't one for this yet."
        )}
      </div>
    </div>
  )
}
