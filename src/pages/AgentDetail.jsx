import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AGENTS, getAgent } from '../data/agents.js'
import { renderAgentMarkdown } from '../data/render.js'
import { MARKETPLACE_REPO, MARKETPLACE_NAME, OTHER_COMPATIBLE_TOOLS } from '../data/marketplace.js'
import AgentCard from '../components/AgentCard.jsx'
import CopyCommand from '../components/CopyCommand.jsx'

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
      <div>
        <span className="category-pill">{agent.category}</span>
      </div>

      <div className="install-block">
        <CopyCommand
          label="Claude Code (Recommended) — 1. Add the marketplace"
          command={`/plugin marketplace add ${MARKETPLACE_REPO}`}
        />
        <CopyCommand label="2. Install this agent" command={`/plugin install ${agent.slug}@${MARKETPLACE_NAME}`} />
        <CopyCommand
          label="3. Use it (or just describe a task — Claude Code delegates to it automatically)"
          command={`@agent-${agent.slug}:${agent.slug} your request here`}
        />
        <div className="tools-note">
          Also usable with {OTHER_COMPATIBLE_TOOLS.join(', ')} — these tools don't share Claude Code's plugin
          format, but each supports its own custom instructions/rules mechanism this Markdown file can be adapted
          to.
        </div>
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
          </div>

          {mode === 'raw' ? (
            <pre className="raw-view">{renderAgentMarkdown(agent)}</pre>
          ) : (
            <div className="prose">
              <p>{agent.intro}</p>

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
