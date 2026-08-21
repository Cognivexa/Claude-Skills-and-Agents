import { useState } from 'react'

export default function CopyCommand({ command, label }) {
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
