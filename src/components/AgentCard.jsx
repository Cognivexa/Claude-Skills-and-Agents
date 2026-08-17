import { Link } from 'react-router-dom'

export default function AgentCard({ agent }) {
  return (
    <Link to={`/agents/${agent.slug}`} className="card">
      <div className="card-head">
        <div className="card-icon">{agent.icon}</div>
        <div>
          <div className="card-title">{agent.name}</div>
          <div className="card-meta">
            {agent.author} · Added {agent.addedDate}
          </div>
        </div>
      </div>
      <div className="card-desc">{agent.shortDescription}</div>
      <div className="card-footer">
        <span className="badge">{agent.category}</span>
      </div>
    </Link>
  )
}
