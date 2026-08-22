import { useState } from 'react'
import { Link } from 'react-router-dom'
import { zipSync, strToU8 } from 'fflate'
import CopyCommand from './CopyCommand.jsx'
import { GITHUB_REPO } from '../data/marketplace.js'
import { renderSkillMarkdown } from '../data/render.js'

// Browsers cannot launch a desktop app or a terminal from a webpage, and Claude
// Desktop has no API for a website to push an install into it — both destinations
// below end in a real, manual step (paste a command / upload a file), never a
// fabricated "installed" message.
export default function InstallButton({ type, item, hasMatchingSkill }) {
  const [open, setOpen] = useState(false)
  const [destination, setDestination] = useState(null)
  const [downloaded, setDownloaded] = useState(false)

  const slug = item.slug
  const terminalCommand = `npx github:${GITHUB_REPO} install ${type} ${slug}`

  function downloadDesktopZip() {
    const files = { [`${slug}/SKILL.md`]: strToU8(renderSkillMarkdown(item)) }
    for (const [relPath, content] of Object.entries(item.referenceFiles || {})) {
      files[`${slug}/${relPath}`] = strToU8(content)
    }
    const zipped = zipSync(files, { level: 9 })
    const url = URL.createObjectURL(new Blob([zipped], { type: 'application/zip' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `${slug}.zip`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    setDownloaded(true)
  }

  function choose(next) {
    setDestination(next)
    setDownloaded(false)
  }

  return (
    <div className="install-picker">
      <button className="install-picker-btn" onClick={() => setOpen((o) => !o)}>
        ⚡ Install {open ? '▴' : '▾'}
      </button>

      {open && (
        <div className="install-picker-panel">
          <div className="install-picker-prompt">Install this {type} into:</div>
          <div className="toggle-group" style={{ marginBottom: 12 }}>
            <button
              className={'toggle-btn' + (destination === 'terminal' ? ' active' : '')}
              onClick={() => choose('terminal')}
            >
              Claude Code (Terminal)
            </button>
            <button
              className={'toggle-btn' + (destination === 'desktop' ? ' active' : '')}
              onClick={() => choose('desktop')}
            >
              Claude Desktop
            </button>
          </div>

          {destination === 'terminal' && (
            <>
              <CopyCommand label="Run in a terminal, from anywhere — already copied" command={terminalCommand} autoCopy />
              <div className="tools-note">
                Installs into <code>.claude/{type === 'skill' ? 'skills' : 'agents'}/</code> of the current project.{' '}
                {type === 'skill' ? (
                  <>
                    Then run <code>/{slug}</code> in Claude Code, or just describe the task naturally.
                  </>
                ) : (
                  <>
                    Then run <code>/agents</code> in Claude Code to confirm it's listed, and use it with{' '}
                    <code>@{slug} your request</code>.
                  </>
                )}
              </div>
            </>
          )}

          {destination === 'desktop' && type === 'skill' && (
            <>
              <button className="copy-btn install-download-btn" onClick={downloadDesktopZip}>
                {downloaded ? '✓ Downloaded' : `Download ${slug}.zip`}
              </button>
              <div className="tools-note" style={{ marginTop: 10 }}>
                Claude Desktop only installs skills through a manual upload — no website can push a file into it
                directly. Once downloaded: open the <strong>+</strong> menu next to the chat box →{' '}
                <strong>Skills</strong> → <strong>Manage skills</strong> to open the Directory, select the{' '}
                <strong>Your organization</strong> tab, and upload the file you just downloaded there. (Menu wording
                varies slightly by plan/version — look for "Skills" in Settings or Customize if you don't see this
                exact path.)
              </div>
            </>
          )}

          {destination === 'desktop' && type === 'agent' && (
            <div className="tools-note">
              Claude Desktop has no concept of custom subagents — that's a Claude Code-only feature, so there's
              nothing to install here.{' '}
              {hasMatchingSkill ? (
                <>
                  This capability is also available as a skill, which <em>can</em> be installed into Claude Desktop —
                  see the <Link to={`/skills/${slug}`}>{slug}</Link> skill page.
                </>
              ) : (
                'Use the Claude Code (Terminal) option above instead.'
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
