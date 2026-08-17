import { Link } from 'react-router-dom'

export default function SkillCard({ skill }) {
  return (
    <Link to={`/skills/${skill.slug}`} className="card">
      <div className="card-head">
        <div className="card-icon">{skill.icon}</div>
        <div>
          <div className="card-title">{skill.name}</div>
          <div className="card-meta">{skill.author}</div>
        </div>
      </div>
      <div className="card-desc">{skill.description}</div>
      <div className="card-footer">
        <span className="badge">{skill.category}</span>
        <span className="stat">
          <span>★ {skill.stars}</span>
          <span>⑂ {skill.forks}</span>
        </span>
      </div>
    </Link>
  )
}
