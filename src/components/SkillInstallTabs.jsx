import { useState } from 'react'
import CopyCommand from './CopyCommand.jsx'
import { GITHUB_REPO } from '../data/marketplace.js'

const TOOLS = [
  { key: 'claude-code', label: 'Claude Code' },
  { key: 'codex', label: 'Codex' },
]

const SCOPES = [
  { key: 'project', label: 'Project' },
  { key: 'global', label: 'Global' },
]

// Directories each tool actually scans for skills, per each tool's own docs.
const DEST_DIR = {
  'claude-code': { project: '.claude/skills/', global: '~/.claude/skills/' },
  codex: { project: '.agents/skills/', global: '~/.agents/skills/' },
}

const USE_NOTE = {
  'claude-code': (slug) => (
    <>
      Then run <code>/{slug}</code> in Claude Code — it also loads automatically when your request matches the
      skill's description.
    </>
  ),
  codex: (slug) => (
    <>
      Then mention <code>${slug}</code> in Codex, or run <code>/skills</code> to browse and select it — Codex also
      loads it automatically when your prompt matches the skill's description.
    </>
  ),
}

export default function SkillInstallTabs({ slug }) {
  const [tool, setTool] = useState('claude-code')
  const [scope, setScope] = useState('project')

  const command = `npx github:${GITHUB_REPO} install skill ${slug}${tool === 'codex' ? ' --codex' : ''}${
    scope === 'global' ? ' --global' : ''
  }`
  const dest = DEST_DIR[tool][scope]

  return (
    <div className="install-block">
      <div className="install-tabs-header">
        <div className="install-heading" style={{ marginBottom: 0 }}>
          Or install it directly from GitHub
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
        Runs straight from this repo's <code>skills/{slug}/</code> folder — no marketplace, no manual clone, no
        plugin install step. Pick which tool you're installing it for:
      </p>

      <div className="toggle-group" style={{ marginBottom: 14 }}>
        {TOOLS.map((t) => (
          <button
            key={t.key}
            className={'toggle-btn' + (tool === t.key ? ' active' : '')}
            onClick={() => setTool(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <CopyCommand label="Run in a terminal, from anywhere" command={command} />
      <div className="tools-note">
        Installs into <code>{dest}</code> {scope === 'project' ? 'of the current project' : 'for every project'}.{' '}
        {USE_NOTE[tool](slug)} The first run takes a few extra seconds while npx checks out this repo.
      </div>

      <div className="tools-note" style={{ marginTop: 6 }}>
        Prefer not to run a script? Copy the <code>skills/{slug}/</code> folder from this repo by hand into{' '}
        <code>{dest}</code> instead — that's the location {tool === 'codex' ? 'Codex' : 'Claude Code'} is documented
        to scan.
      </div>
    </div>
  )
}
