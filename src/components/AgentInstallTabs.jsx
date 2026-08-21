import { useState } from 'react'
import { Link } from 'react-router-dom'
import CopyCommand from './CopyCommand.jsx'
import { GITHUB_REPO } from '../data/marketplace.js'

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

  const command = `npx github:${GITHUB_REPO} install agent ${slug}${scope === 'global' ? ' --global' : ''}`

  return (
    <div className="install-block">
      <div className="install-tabs-header">
        <div className="install-heading" style={{ marginBottom: 0 }}>
          Or install it directly from GitHub
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
        Runs straight from this repo's <code>agents/{slug}.md</code> file — no marketplace, no manual clone, no
        plugin install step.
      </p>

      <CopyCommand label="Run in a terminal, from anywhere" command={command} />
      <div className="tools-note">
        Installs into <code>{DEST_DIR[scope]}</code> —{' '}
        {scope === 'project' ? 'this project only' : 'every project on this machine'}. Then run <code>/agents</code>{' '}
        in Claude Code to confirm it's listed, and use it with <code>@{slug} your request</code> — or just describe
        the task naturally and Claude delegates to it automatically.
      </div>

      <div className="tools-note" style={{ marginTop: 6 }}>
        Prefer not to run a script? Copy the <code>agents/{slug}.md</code> file from this repo by hand into{' '}
        <code>{DEST_DIR[scope]}</code> instead.
      </div>

      <div className="tools-note" style={{ marginTop: 6 }}>
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
