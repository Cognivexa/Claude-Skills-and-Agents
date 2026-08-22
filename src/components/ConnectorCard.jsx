import { Link } from 'react-router-dom'

export default function ConnectorCard({ connector, index = 0 }) {
  return (
    <Link to={`/connectors/${connector.slug}`} className="card" style={{ '--i': Math.min(index, 11) }}>
      <div className="card-head">
        <div className="card-icon">{connector.icon}</div>
        <div>
          <div className="card-title">{connector.name}</div>
          <div className="card-meta">
            by {connector.vendor} · Added {connector.addedDate}
          </div>
        </div>
      </div>
      <div className="card-desc">{connector.description}</div>
      <div className="card-footer">
        <span className="badge">{connector.category}</span>
        <span className="badge" style={{ opacity: 0.7 }}>
          {connector.transport}
        </span>
      </div>
    </Link>
  )
}
