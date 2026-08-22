import { Link, useParams } from 'react-router-dom'
import { CONNECTORS, getConnector } from '../data/connectors.js'
import { connectorServerKey } from '../data/render.js'
import { MARKETPLACE_REPO, MARKETPLACE_NAME } from '../data/marketplace.js'
import ConnectorCard from '../components/ConnectorCard.jsx'
import CopyCommand from '../components/CopyCommand.jsx'

function rawMcpAddCommand(connector) {
  if (connector.transport === 'stdio') {
    const envFlags = (connector.envVars || [])
      .map((e) => `--env ${e.name}=YOUR_${e.name.replace(/[^A-Z0-9]/gi, '_').toUpperCase()}`)
      .join(' ')
    const argsWithPlaceholders = connector.args.map((a) =>
      a.startsWith('${') ? `YOUR_${a.slice(2, -1)}` : a
    )
    return `claude mcp add ${envFlags ? envFlags + ' ' : ''}--transport stdio ${connectorServerKey(
      connector
    )} -- ${connector.command} ${argsWithPlaceholders.join(' ')}`
  }
  const headerFlag = connector.headerAuthEnvVar
    ? ` --header "Authorization: Bearer YOUR_${connector.headerAuthEnvVar}"`
    : ''
  return `claude mcp add --transport ${connector.transport} ${connectorServerKey(connector)} ${connector.url}${headerFlag}`
}

function desktopJsonSnippet(connector) {
  const server = {}
  if (connector.transport === 'stdio') {
    server.command = connector.command
    server.args = connector.args.map((a) => (a.startsWith('${') ? `YOUR_${a.slice(2, -1)}` : a))
    if (connector.envVars?.length) {
      server.env = Object.fromEntries(connector.envVars.map((e) => [e.name, `YOUR_${e.name}`]))
    }
  } else {
    server.url = connector.url
    if (connector.headerAuthEnvVar) {
      server.headers = { Authorization: `Bearer YOUR_${connector.headerAuthEnvVar}` }
    }
  }
  return JSON.stringify({ mcpServers: { [connectorServerKey(connector)]: server } }, null, 2)
}

export default function ConnectorDetail() {
  const { slug } = useParams()
  const connector = getConnector(slug)

  if (!connector) {
    return (
      <div className="content">
        <p className="error-text">Connector not found.</p>
      </div>
    )
  }

  const similar = CONNECTORS.filter((c) => c.slug !== connector.slug && c.category === connector.category).slice(0, 3)
  const serverKey = connectorServerKey(connector)

  return (
    <div className="content">
      <Link to="/connectors" className="back-link" style={{ marginBottom: 18, display: 'inline-flex' }}>
        ← Back to Connectors
      </Link>

      <div className="detail-header">
        <div className="detail-icon">{connector.icon}</div>
        <div>
          <div className="detail-title">{connector.name}</div>
          <div className="detail-subline">
            <span>by {connector.vendor}</span>
            <span>·</span>
            <span>Added {connector.addedDate}</span>
          </div>
        </div>
      </div>

      <div className="detail-desc">{connector.description}</div>
      <div className="detail-actions-row">
        <span className="category-pill">{connector.category}</span>
        <span className="compat-badge no" style={{ cursor: 'default' }}>
          {connector.transport} transport
        </span>
      </div>

      <div className="install-warning" style={{ maxWidth: 640 }}>
        This is a real MCP server built by <strong>{connector.vendor}</strong>, not by Cognivexa. {connector.authNote}{' '}
        Review what a server can access before connecting it — see{' '}
        <a href={connector.docsUrl} target="_blank" rel="noreferrer">
          {connector.docsLabel}
        </a>
        .
      </div>

      {connector.requiresOwnOAuthApp ? (
        <div className="install-block" style={{ marginBottom: 24 }}>
          <div className="install-heading">
            Add as a custom connector
            <span className="tool-badge">Requires your own OAuth app first</span>
          </div>
          <p className="install-intro">
            {connector.vendor} doesn't publish one shared public endpoint the way the other connectors here do — you
            register your own OAuth client first, then point Claude at it. This is a real extra step, not a
            simplification we skipped:
          </p>
          <ol style={{ color: 'var(--text-dim)', fontSize: 13, lineHeight: 1.8, paddingLeft: 20, maxWidth: 640 }}>
            <li>
              Follow{' '}
              <a href={connector.docsUrl} target="_blank" rel="noreferrer">
                {connector.docsLabel}
              </a>{' '}
              to create an OAuth client ID and secret in Google Cloud Console.
            </li>
            <li>
              In Claude (web, Desktop, or Enterprise admin settings), go to <strong>Settings → Connectors → Add custom connector</strong>.
            </li>
            <li>
              Set the name to <strong>{connector.name}</strong>, the Remote MCP server URL to the value below, and paste your OAuth client ID/secret into Advanced settings.
            </li>
          </ol>
          <CopyCommand label="Remote MCP server URL" command={connector.url} />
          <div className="tools-note">Requires a Claude Enterprise, Pro, Max, or Team plan.</div>
        </div>
      ) : (
        <>
          <div className="install-block">
            <div className="install-heading">
              Install as a plugin
              <span className="tool-badge">Claude Code only — genuinely registers the MCP server</span>
            </div>
            <p className="install-intro">
              This repo packages {connector.name} as a plugin bundling a real <code>.mcp.json</code>, exactly the
              mechanism Claude Code's plugin system uses for MCP servers. Installing it registers the server
              directly — no manual JSON editing needed.
            </p>

            <CopyCommand
              label="1. Add this repo as a marketplace — run once, ever"
              command={`/plugin marketplace add ${MARKETPLACE_REPO}`}
            />

            {connector.envVars.length > 0 && (
              <>
                <div className="install-cmd-label">
                  2. Set the required environment variable(s) first, in the same shell you'll run Claude Code from
                </div>
                {connector.envVars.map((e) => (
                  <CopyCommand key={e.name} command={`export ${e.name}=YOUR_${e.name}`} />
                ))}
                <div className="tools-note" style={{ marginTop: -4, marginBottom: 10 }}>
                  {connector.envVars.map((e) => e.description).join(' ')}
                </div>
              </>
            )}

            <CopyCommand
              label={`${connector.envVars.length > 0 ? '3' : '2'}. Install this connector — nothing else`}
              command={`/plugin install ${connector.slug}@${MARKETPLACE_NAME}`}
            />

            <div className="tools-note">
              Then run <code>/mcp</code> in Claude Code to confirm it shows <code>{serverKey}</code> as connected
              {connector.transport !== 'stdio' && !connector.headerAuthEnvVar
                ? ' and complete the OAuth sign-in if prompted'
                : ''}
              .
            </div>
          </div>

          <div className="install-block">
            <div className="install-heading">Or add it directly with the CLI, without installing a plugin</div>
            <p className="install-intro">
              Equivalent to the plugin above, using Claude Code's own <code>claude mcp add</code> command with
              literal values in place of environment variables:
            </p>
            <CopyCommand label="Run in a terminal, from anywhere" command={rawMcpAddCommand(connector)} />
            <div className="tools-note">
              Replace every <code>YOUR_...</code> placeholder with your real credential before running this. Add{' '}
              <code>--scope project</code> to share it with your team via a committed <code>.mcp.json</code>, or{' '}
              <code>--scope user</code> to make it available across every project on this machine.
            </div>
          </div>

          <div className="install-block" style={{ marginBottom: 24 }}>
            <div className="install-heading">
              Or add it to Claude Desktop
              <span className="tool-badge">Claude Desktop only</span>
            </div>
            <p className="install-intro">
              Open <code>claude_desktop_config.json</code> (macOS:{' '}
              <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>; Windows:{' '}
              <code>%APPDATA%\Claude\claude_desktop_config.json</code>), add this under the top-level{' '}
              <code>mcpServers</code> key — merge it with any servers already there rather than replacing the file —
              then save and restart Claude Desktop.
            </p>
            <pre className="code-block">{desktopJsonSnippet(connector)}</pre>
            <div className="tools-note" style={{ marginTop: 10 }}>
              Replace every <code>YOUR_...</code> placeholder with your real credential. A single syntax error
              (missing comma, mismatched bracket) silently disables every server in the file, so validate the JSON
              before saving.
            </div>
          </div>
        </>
      )}

      <div className="panel">
        <div className="panel-header">
          <span className="panel-title">Try asking</span>
        </div>
        <div className="panel-body">
          <div className="code-block">{connector.exampleAsk}</div>
        </div>
      </div>

      <div className="section-heading">
        <h4>Similar Connectors</h4>
      </div>
      {similar.length ? (
        <div className="grid small">
          {similar.map((c) => (
            <ConnectorCard key={c.slug} connector={c} />
          ))}
        </div>
      ) : (
        <div className="empty-state">No similar connectors yet.</div>
      )}
    </div>
  )
}
