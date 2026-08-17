import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AgentsBrowse from './pages/AgentsBrowse.jsx'
import AgentDetail from './pages/AgentDetail.jsx'
import SkillsBrowse from './pages/SkillsBrowse.jsx'
import SkillDetail from './pages/SkillDetail.jsx'

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="main-full">
        <Routes>
          <Route path="/" element={<Navigate to="/agents" replace />} />
          <Route path="/agents" element={<AgentsBrowse />} />
          <Route path="/agents/:slug" element={<AgentDetail />} />
          <Route path="/skills" element={<SkillsBrowse />} />
          <Route path="/skills/:slug" element={<SkillDetail />} />
          <Route path="*" element={<Navigate to="/agents" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
