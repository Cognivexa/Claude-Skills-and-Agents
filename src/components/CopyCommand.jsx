import { useEffect, useState } from 'react'

export default function CopyCommand({ command, label, autoCopy = false }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard unavailable, ignore
    }
  }

  // Fires once when a destination is picked, so the primary command is already on
  // the clipboard by the time the user reads it — one click to choose, not two.
  useEffect(() => {
    if (autoCopy) handleCopy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {label && <div className="install-cmd-label">{label}</div>}
      <div className="install-cmd">
        <span>
          <span className="prompt">&gt;_</span>
          {command}
        </span>
        <button className={'copy-btn' + (copied ? ' copied' : '')} onClick={handleCopy}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
