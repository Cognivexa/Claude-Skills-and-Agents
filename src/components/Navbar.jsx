import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/agents" className="nav-brand">
          <span className="nav-brand-mark">CS</span>
          <span className="nav-brand-name">Claude Skills Hub</span>
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/agents" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Agents
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Skills
          </NavLink>
        </nav>
        <div className="nav-actions">
          <a
            className="nav-github-link"
            href="https://github.com/Cognivexa/Claude-Skills-and-Agents"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <button className="submit-btn" onClick={() => alert('Submissions open soon — this is a demo project.')}>
            + Submit
          </button>
        </div>
      </div>
    </header>
  )
}
