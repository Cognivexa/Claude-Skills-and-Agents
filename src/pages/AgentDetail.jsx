import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AGENTS, getAgent } from '../data/agents.js'
import { SKILLS, getSkill } from '../data/skills.js'
import { CONNECTORS } from '../data/connectors.js'
import { renderAgentMarkdown } from '../data/render.js'
import { MARKETPLACE_REPO, MARKETPLACE_NAME, OTHER_COMPATIBLE_TOOLS } from '../data/marketplace.js'
import AgentCard from '../components/AgentCard.jsx'
import CopyCommand from '../components/CopyCommand.jsx'
import AgentInstallTabs from '../components/AgentInstallTabs.jsx'
import InstallButton from '../components/InstallButton.jsx'
import CompatibilityBadges from '../components/CompatibilityBadges.jsx'
import ConnectionScope from '../components/ConnectionScope.jsx'
import MarkdownLite from '../components/MarkdownLite.jsx'

export default function AgentDetail() {
  const { slug } = useParams()
  const agent = getAgent(slug)
  const [mode, setMode] = useState('preview')

  if (!agent) {
    return (
      <div className="content">
        <p className="error-text">Agent not found.</p>
      </div>
    )
  }

  const similar = AGENTS.filter((a) => a.slug !== agent.slug && a.category === agent.category).slice(0, 3)

  return (
    <div className="content">
      <Link to="/agents" className="back-link" style={{ marginBottom: 18, display: 'inline-flex' }}>
        ← Back to Agents
      </Link>

      <div className="detail-header">
        <div className="detail-icon">{agent.icon}</div>
        <div>
          <div className="detail-title">{agent.name}</div>
          <div className="detail-subline">
            <span>{agent.author}</span>
            <span>·</span>
            <span>Added {agent.addedDate}</span>
          </div>
        </div>
      </div>

      <div className="detail-desc">{agent.shortDescription}</div>
      <div className="detail-actions-row">
        <span className="category-pill">{agent.category}</span>
        <InstallButton type="agent" item={agent} hasMatchingSkill={!!getSkill(agent.slug)} />
      </div>
      <CompatibilityBadges type="agent" hasMatchingSkill={!!getSkill(agent.slug)} />
      <ConnectionScope item={agent} />

      {agent.exampleAsk && (
        <div className="panel" style={{ marginBottom: 20 }}>
          <div className="panel-header">
            <span className="panel-title">Try asking</span>
          </div>
          <div className="panel-body">
            <div className="code-block">
              {(Array.isArray(agent.exampleAsk) ? agent.exampleAsk : [agent.exampleAsk]).join('\n')}
            </div>
          </div>
        </div>
      )}

      <div className="install-block">
        <div className="install-heading">
          Install as a plugin
          <span className="tool-badge">Claude Code only</span>
        </div>
        <p className="install-intro">
          Open a Claude Code chat session — the terminal, or the chat panel of the VS Code / JetBrains extension —
          and run these <strong>one at a time</strong>, waiting for each to finish before the next:
        </p>

        <CopyCommand label="1. Add this repo as a marketplace — run once, ever" command={`/plugin marketplace add ${MARKETPLACE_REPO}`} />
        <div className="install-warning">
          Type this exactly as shown — just the repo, nothing appended. This step installs <strong>nothing</strong>{' '}
          — it only tells Claude Code where to find plugins in this repo. None of the {SKILLS.length + AGENTS.length + CONNECTORS.length}{' '}
          plugins are downloaded until you run step 2 for the specific one you want. You only run this once per
          machine, no matter how many agents or skills from this repo you plan to install afterward.
        </div>

        <CopyCommand label="2. Install only this agent — nothing else" command={`/plugin install ${agent.slug}@${MARKETPLACE_NAME}`} />

        <CopyCommand
          label="3. Use it (or just describe a task — Claude Code delegates to it automatically)"
          command={`@agent-${agent.slug}:${agent.slug} your request here`}
        />

        <div className="tools-note">
          Subagents (the Task tool) are a Claude Code concept — this install path only works there. See below if
          you want this capability available in Codex too.
        </div>
      </div>

      <AgentInstallTabs slug={agent.slug} hasMatchingSkill={!!getSkill(agent.slug)} />

      <div className="tools-note" style={{ marginBottom: 24 }}>
        Beyond Claude Code, this Markdown file is also usable as reference material with{' '}
        {OTHER_COMPATIBLE_TOOLS.join(', ')} — none of those share Claude Code's subagent format, but each supports
        its own custom instructions/rules mechanism this file can be adapted to by hand.
      </div>

      <div className="panel">
        <div className="panel-header">
          <span className="panel-title">Agent Instruction</span>
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
              <div className="fm-value">{agent.slug}</div>
            </div>
            <div className="fm-row">
              <div className="fm-key">description</div>
              <div className="fm-value">{agent.shortDescription}</div>
            </div>
            <div className="fm-row">
              <div className="fm-key">tools</div>
              <div className="fm-value">{agent.tools.join(', ')}</div>
            </div>
            <div className="fm-row">
              <div className="fm-key">model</div>
              <div className="fm-value">{agent.model || 'inherit'}</div>
            </div>
          </div>

          {mode === 'raw' ? (
            <pre className="raw-view">{renderAgentMarkdown(agent)}</pre>
          ) : agent.bodyMarkdown ? (
            <div className="prose">
              {agent.relatedSkills && (
                <p>
                  <strong>Related Skills:</strong> {agent.relatedSkills.join(' · ')}
                </p>
              )}
              <MarkdownLite text={agent.bodyMarkdown} />
            </div>
          ) : (
            <div className="prose">
              <p>{agent.intro}</p>

              {agent.pro && (
                <>
                  <p>
                    <strong>Related Skills:</strong> {agent.relatedSkills.join(' · ')}
                  </p>

                  <h3>Core Workflow</h3>
                  <ol>
                    {agent.coreWorkflow.map((step, i) => (
                      <li key={i}>
                        <strong>{step.title}</strong> — {step.detail}
                      </li>
                    ))}
                  </ol>

                  <h3>Key Implementation Patterns</h3>
                  {agent.codePatterns.map((p) => (
                    <div key={p.title}>
                      <div className="phase-col-label">{p.title}</div>
                      <pre className="code-block">{p.code}</pre>
                    </div>
                  ))}

                  <h3>Constraints</h3>
                  <div className="phase-cols">
                    <div>
                      <div className="phase-col-label">MUST DO</div>
                      <ul>
                        {agent.mustDo.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="phase-col-label">MUST NOT DO</div>
                      <ul>
                        {agent.mustNot.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}

              <h3>When invoked:</h3>
              <ol>
                {agent.whenInvoked.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>

              <h3>{agent.name} checklist:</h3>
              <ul className="checklist">
                {agent.checklist.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3>Development Workflow</h3>
              {agent.phases.map((phase, i) => (
                <div className="phase-block" key={phase.title}>
                  <div className="phase-title">
                    {i + 1}. {phase.title}
                  </div>
                  <div className="phase-desc">{phase.description}</div>
                  <div className="phase-cols">
                    <div>
                      <div className="phase-col-label">{phase.title} priorities:</div>
                      <ul>
                        {phase.priorities.map((p, j) => (
                          <li key={j}>{p}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="phase-col-label">Technical approach:</div>
                      <ul>
                        {phase.approach.map((a, j) => (
                          <li key={j}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              <h3>Output Format</h3>
              <p>{agent.outputFormat}</p>

              {agent.pro && (
                <>
                  <h3>Knowledge Reference</h3>
                  <p>{agent.knowledgeReference}</p>
                </>
              )}

              <h3>Communication Protocol</h3>
              <p>Initialize by querying the context manager for the current engagement's requirements.</p>
              <div className="code-block">
{`{
  "requesting_agent": "${agent.slug}",
  "request_type": "get_${agent.category.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_context",
  "payload": {
    "query": "Context needed: goals, constraints, existing assets, and success criteria."
  }
}`}
              </div>

              <h3>Integration with other agents:</h3>
              <ul>
                {agent.integrations.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p style={{ fontStyle: 'italic' }}>
                Always prioritize reliability, clarity, and measurable impact in every engagement.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="section-heading">
        <h4>Similar Agents</h4>
      </div>
      {similar.length ? (
        <div className="grid small">
          {similar.map((a) => (
            <AgentCard key={a.slug} agent={a} />
          ))}
        </div>
      ) : (
        <div className="empty-state">No similar agents yet.</div>
      )}
    </div>
  )
}
