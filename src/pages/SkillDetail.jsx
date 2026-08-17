import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SKILLS, getSkill } from '../data/skills.js'
import { renderSkillMarkdown } from '../data/render.js'
import { MARKETPLACE_REPO, MARKETPLACE_NAME, OTHER_COMPATIBLE_TOOLS } from '../data/marketplace.js'
import SkillCard from '../components/SkillCard.jsx'
import CopyCommand from '../components/CopyCommand.jsx'

export default function SkillDetail() {
  const { slug } = useParams()
  const skill = getSkill(slug)
  const [mode, setMode] = useState('preview')
  const [expanded, setExpanded] = useState(false)

  if (!skill) {
    return (
      <div className="content">
        <p className="error-text">Skill not found.</p>
      </div>
    )
  }

  const similar = SKILLS.filter((s) => s.slug !== skill.slug && s.category === skill.category).slice(0, 3)

  const visibleSteps = expanded ? skill.howItWorks : skill.howItWorks.slice(0, 2)

  return (
    <div className="content">
      <Link to="/skills" className="back-link" style={{ marginBottom: 18, display: 'inline-flex' }}>
        ← Back to Browse
      </Link>

      <div className="detail-header">
        <div className="detail-icon">{skill.icon}</div>
        <div>
          <div className="detail-title">{skill.name}</div>
          <div className="detail-subline">
            <span>{skill.author}</span>
            <span>·</span>
            <span>★ {skill.stars}</span>
            <span>⑂ {skill.forks}</span>
            <span>·</span>
            <span>Added {skill.addedDate}</span>
          </div>
        </div>
      </div>

      <div className="detail-desc">{skill.description}</div>
      <div>
        <span className="category-pill">{skill.category}</span>
      </div>

      <div className="install-block">
        <div className="install-heading">Install with Claude Code</div>
        <p className="install-intro">
          Open a Claude Code chat session — the terminal, or the chat panel of the VS Code / JetBrains extension —
          and run these <strong>one at a time</strong>, waiting for each to finish before the next:
        </p>

        <CopyCommand label="1. Add this repo as a marketplace — run once, ever" command={`/plugin marketplace add ${MARKETPLACE_REPO}`} />
        <div className="install-warning">
          Type this exactly as shown — just the repo, nothing appended. You only run this once per machine, no
          matter how many agents or skills from this repo you plan to install.
        </div>

        <CopyCommand label="2. Install this skill" command={`/plugin install ${skill.slug}@${MARKETPLACE_NAME}`} />

        <CopyCommand label="3. Use it" command={`/${skill.slug}:${skill.slug} ${skill.argumentHint}`} />

        <div className="tools-note">
          Also usable with {OTHER_COMPATIBLE_TOOLS.join(', ')} — these tools don't share Claude Code's plugin
          format, but each supports its own custom instructions/rules mechanism this Markdown file can be adapted
          to.
        </div>
      </div>

      <div className="detail-layout">
        <div className="files-panel">
          <div className="files-panel-title">Files</div>
          {skill.files.map((f) => (
            <div className="file-row" key={f}>
              📄 {f.split('/').pop()}
            </div>
          ))}
        </div>

        <div className="panel" style={{ marginBottom: 0 }}>
          <div className="panel-header">
            <span className="panel-title">{skill.files[0]}</span>
            <div className="toggle-group">
              <button
                className={'toggle-btn' + (mode === 'preview' ? ' active' : '')}
                onClick={() => setMode('preview')}
              >
                Preview
              </button>
              <button className={'toggle-btn' + (mode === 'raw' ? ' active' : '')} onClick={() => setMode('raw')}>
                Raw
              </button>
            </div>
          </div>
          <div className="panel-body">
            <div className="fm-table">
              <div className="fm-row">
                <div className="fm-key">name</div>
                <div className="fm-value">{skill.slug}</div>
              </div>
              <div className="fm-row">
                <div className="fm-key">description</div>
                <div className="fm-value">{skill.description}</div>
              </div>
              <div className="fm-row">
                <div className="fm-key">argument-hint</div>
                <div className="fm-value">{skill.argumentHint}</div>
              </div>
            </div>

            {mode === 'raw' ? (
              <pre className="raw-view">{renderSkillMarkdown(skill)}</pre>
            ) : (
              <div className="prose">
                <h3>{skill.name}</h3>
                <p>{skill.intro}</p>

                <h3>How It Works</h3>
                <ol>
                  {visibleSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
                {!expanded && skill.howItWorks.length > 2 && (
                  <button className="load-more-btn" onClick={() => setExpanded(true)}>
                    ▾ Load more content
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section-heading">
        <h4>Similar Skills</h4>
      </div>
      {similar.length ? (
        <div className="grid small">
          {similar.map((s) => (
            <SkillCard key={s.slug} skill={s} />
          ))}
        </div>
      ) : (
        <div className="empty-state">No similar skills yet.</div>
      )}
    </div>
  )
}
