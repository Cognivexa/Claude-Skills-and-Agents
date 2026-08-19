import { useState } from 'react'
import CopyCommand from './CopyCommand.jsx'

const TOOLS = [
  { key: 'claude-code', label: 'Claude Code' },
  { key: 'codex', label: 'Codex' },
]

const SCOPES = [
  { key: 'project', label: 'Project' },
  { key: 'global', label: 'Global' },
]

// Directories each tool actually scans for skills, per each tool's own docs —
// used for the manual copy-by-hand fallback shown under the install command.
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

export default function SkillInstallTabs({ slug, repo }) {
  const [tool, setTool] = useState('claude-code')
  const [scope, setScope] = useState('project')

  const command = `npx skills add ${repo} --skill ${slug} --agent ${tool}${scope === 'global' ? ' --global' : ''}`
  const dest = DEST_DIR[tool][scope]

  return (
    <div className="install-block">
      <div className="install-tabs-header">
        <div className="install-heading" style={{ marginBottom: 0 }}>
          Or install it as a standalone skill
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
        This skill also ships as a plain <code>skills/{slug}/SKILL.md</code> folder at the repo root, following the
        open Agent Skills layout both tools below read directly. Pick which one you're installing it for:
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

      <CopyCommand label={`Run in a terminal, from anywhere`} command={command} />
      <div className="tools-note">
        Installs into <code>{dest}</code> {scope === 'project' ? 'of the current project' : 'for every project'}.{' '}
        {USE_NOTE[tool](slug)}
      </div>

      <div className="install-warning" style={{ marginTop: 10 }}>
        <code>npx skills</code> is a community installer (vercel-labs/skills), not something either Anthropic or
        OpenAI ships. If it ever doesn't recognize <code>--agent {tool}</code> on your version, copy the{' '}
        <code>skills/{slug}/</code> folder from this repo by hand into <code>{dest}</code> instead — that's the
        location {tool === 'codex' ? 'Codex' : 'Claude Code'} is documented to scan.
      </div>
    </div>
  )
}
