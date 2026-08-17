export default function PageHeader({ title, subtitle, stats }) {
  return (
    <div className="page-header">
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
      {stats && stats.length > 0 && (
        <div className="stats-row">
          {stats.map((s, i) => (
            <span className="stat-chip" key={i}>
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
