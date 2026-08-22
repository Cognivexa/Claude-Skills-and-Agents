// Connectors bundle a real MCP server config, not a markdown prompt — this produces
// the exact `.claude-plugin/plugin.json` + `.mcp.json` pair Claude Code's plugin
// system reads (per code.claude.com/docs/en/mcp#plugin-provided-mcp-servers), so
// `/plugin install <slug>@claude-skills-and-agents` genuinely registers the server.
export function renderConnectorPluginJson(connector) {
  return (
    JSON.stringify(
      {
        name: connector.slug,
        description: connector.description,
        version: '0.1.0',
        author: { name: connector.vendor },
      },
      null,
      2
    ) + '\n'
  )
}

// The name Claude Code's /mcp panel and `claude mcp` commands will show for this
// server — derived from the slug (not the display name) so it stays a single
// distinct token, e.g. "google-calendar" rather than an ambiguous bare "google".
export function connectorServerKey(connector) {
  return connector.slug.replace(/-mcp-connector$/, '')
}

export function renderConnectorMcpJson(connector) {
  const server = {}
  if (connector.transport === 'stdio') {
    server.command = connector.command
    server.args = connector.args
    if (connector.envVars?.length) {
      server.env = Object.fromEntries(connector.envVars.map((e) => [e.name, `\${${e.name}}`]))
    }
  } else {
    server.type = connector.transport
    // Per Claude Code's own docs: a plugin can ship an empty `url` as a placeholder
    // for a connector you configure later, and Claude Code shows it as "not
    // configured" rather than an error — the right shape for a connector like
    // Google Calendar that requires you to register your own OAuth client first.
    server.url = connector.requiresOwnOAuthApp ? '' : connector.url
    if (connector.headerAuthEnvVar) {
      server.headers = { Authorization: `Bearer \${${connector.headerAuthEnvVar}}` }
    }
  }
  return JSON.stringify({ mcpServers: { [connectorServerKey(connector)]: server } }, null, 2) + '\n'
}

// Powers the capability-concierge skill's bundled reference/catalog-index.md — the
// full, always-current list it reads to match a task against a real skill, agent,
// or connector before ever proposing an install.
export function renderCatalogIndex(agents, skills, connectors) {
  const lines = []
  lines.push('# Catalog Index')
  lines.push('')
  lines.push(
    'Generated automatically from the live catalog. Every row is real and installable — never propose an install for anything not listed here.'
  )
  lines.push('')
  lines.push('## Agents (Claude Code subagents — no Claude Desktop or Codex equivalent)')
  lines.push('')
  lines.push('| Slug | Name | What it does | Install |')
  lines.push('|---|---|---|---|')
  agents
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .forEach((a) => {
      lines.push(
        `| ${a.slug} | ${a.name} | ${a.shortDescription.replace(/\|/g, '/').slice(0, 160)} | \`npx github:Cognivexa/Claude-Skills-and-Agents install agent ${a.slug}\` |`
      )
    })
  lines.push('')
  lines.push('## Skills (work in Claude Code, Claude Desktop, and Codex)')
  lines.push('')
  lines.push('| Slug | Name | What it does | Install |')
  lines.push('|---|---|---|---|')
  skills
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .forEach((s) => {
      lines.push(
        `| ${s.slug} | ${s.name} | ${s.description.replace(/\|/g, '/').slice(0, 160)} | \`npx github:Cognivexa/Claude-Skills-and-Agents install skill ${s.slug}\` |`
      )
    })
  lines.push('')
  lines.push('## Connectors (real MCP servers — require your own third-party credentials)')
  lines.push('')
  lines.push('| Slug | Name | Vendor | What it does | Install |')
  lines.push('|---|---|---|---|---|')
  connectors
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .forEach((c) => {
      lines.push(
        `| ${c.slug} | ${c.name} | ${c.vendor} | ${c.description.replace(/\|/g, '/').slice(0, 140)} | \`/plugin install ${c.slug}@claude-skills-and-agents\` (after \`/plugin marketplace add Cognivexa/claude-skills-and-agents\`) |`
      )
    })
  lines.push('')
  return lines.join('\n')
}

// Applied at generation time, not to the source data — so every agent/skill ships
// with real WebSearch/WebFetch access without hand-editing 180+ authored tool lists.
function withResearchTools(tools) {
  return [...new Set([...(tools || []), 'WebSearch', 'WebFetch'])]
}

// One instruction, injected into every generated agent and skill file, so "stay
// current" is a property of the whole catalog rather than something authored
// per-file (and risking 180+ inconsistent, hand-written versions of the same rule).
const STAYING_CURRENT = `## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.`

function tryAskingSection(exampleAsk) {
  if (!exampleAsk) return ''
  const asks = Array.isArray(exampleAsk) ? exampleAsk : [exampleAsk]
  return `## Try Asking\n\n${asks.map((a) => `- "${a}"`).join('\n')}\n`
}

export function renderAgentMarkdown(agent) {
  if (agent.bodyMarkdown) return renderFreeformAgentMarkdown(agent)
  if (agent.pro) return renderProAgentMarkdown(agent)

  const lines = []
  lines.push('---')
  lines.push(`name: ${agent.slug}`)
  lines.push(`description: ${agent.shortDescription}`)
  lines.push(`tools: ${withResearchTools(agent.tools).join(', ')}`)
  lines.push(`model: ${agent.model || 'inherit'}`)
  lines.push('---')
  lines.push('')
  lines.push(agent.intro)
  lines.push('')
  if (agent.exampleAsk) {
    lines.push(tryAskingSection(agent.exampleAsk))
  }
  lines.push('When invoked:')
  agent.whenInvoked.forEach((step, i) => lines.push(`${i + 1}. ${step}`))
  lines.push('')
  lines.push(`${agent.name} checklist:`)
  agent.checklist.forEach((item) => lines.push(`- ${item}`))
  lines.push('')
  agent.phases.forEach((phase, i) => {
    lines.push(`## ${i + 1}. ${phase.title}`)
    lines.push('')
    lines.push(phase.description)
    lines.push('')
    lines.push(`${phase.title} priorities:`)
    phase.priorities.forEach((p) => lines.push(`- ${p}`))
    lines.push('')
    lines.push('Technical approach:')
    phase.approach.forEach((a) => lines.push(`- ${a}`))
    lines.push('')
  })
  lines.push('## Output Format')
  lines.push('')
  lines.push(agent.outputFormat)
  lines.push('')
  lines.push(STAYING_CURRENT)
  lines.push('')
  lines.push('Integration with other agents:')
  agent.integrations.forEach((i) => lines.push(`- ${i}`))
  lines.push('')
  lines.push('Always prioritize reliability, clarity, and measurable impact in every engagement.')
  return lines.join('\n')
}

function renderFreeformAgentMarkdown(agent) {
  const lines = []
  lines.push('---')
  lines.push(`name: ${agent.slug}`)
  lines.push(`description: ${agent.shortDescription}`)
  lines.push(`tools: ${withResearchTools(agent.tools).join(', ')}`)
  lines.push(`model: ${agent.model || 'inherit'}`)
  lines.push('---')
  lines.push('')
  lines.push(agent.bodyMarkdown)
  lines.push('')
  if (agent.exampleAsk) {
    lines.push(tryAskingSection(agent.exampleAsk))
    lines.push('')
  }
  lines.push(STAYING_CURRENT)
  return lines.join('\n')
}

function renderProAgentMarkdown(agent) {
  const lines = []
  lines.push('---')
  lines.push(`name: ${agent.slug}`)
  lines.push(`description: ${agent.shortDescription}`)
  lines.push(`tools: ${withResearchTools(agent.tools).join(', ')}`)
  lines.push(`model: ${agent.model || 'inherit'}`)
  if (agent.relatedSkills?.length) {
    lines.push('metadata:')
    lines.push(`  domain: ${agent.domain}`)
    lines.push(`  platform: ${agent.platform}`)
    lines.push(`  role: ${agent.role}`)
    lines.push(`  scope: ${agent.scope}`)
    lines.push(`  output: ${agent.output}`)
    lines.push(`  relatedSkills: ${agent.relatedSkills.join(', ')}`)
  }
  lines.push('---')
  lines.push('')
  lines.push(agent.intro)
  lines.push('')
  if (agent.exampleAsk) {
    lines.push(tryAskingSection(agent.exampleAsk))
  }
  lines.push('## Core Workflow')
  lines.push('')
  agent.coreWorkflow.forEach((step, i) => lines.push(`${i + 1}. **${step.title}** — ${step.detail}`))
  lines.push('')
  lines.push('## Key Implementation Patterns')
  lines.push('')
  agent.codePatterns.forEach((p) => {
    lines.push(`### ${p.title}`)
    lines.push('```' + p.language)
    lines.push(p.code)
    lines.push('```')
    lines.push('')
  })
  lines.push('## Constraints')
  lines.push('')
  lines.push('**MUST DO**')
  agent.mustDo.forEach((m) => lines.push(`- ${m}`))
  lines.push('')
  lines.push('**MUST NOT DO**')
  agent.mustNot.forEach((m) => lines.push(`- ${m}`))
  lines.push('')
  lines.push('## Output Format')
  lines.push('')
  lines.push(agent.outputFormat)
  lines.push('')
  lines.push('## Knowledge Reference')
  lines.push('')
  lines.push(agent.knowledgeReference)
  lines.push('')
  lines.push(STAYING_CURRENT)
  lines.push('')
  lines.push('Integration with other agents:')
  agent.integrations.forEach((i) => lines.push(`- ${i}`))
  return lines.join('\n')
}

export function renderSkillMarkdown(skill) {
  if (skill.bodyMarkdown) return renderFreeformSkillMarkdown(skill)
  if (skill.pro) return renderProSkillMarkdown(skill)

  const lines = []
  lines.push('---')
  lines.push(`name: ${skill.slug}`)
  lines.push(`description: ${skill.description}`)
  lines.push(`argument-hint: ${skill.argumentHint}`)
  lines.push('---')
  lines.push('')
  lines.push(`# ${skill.name}`)
  lines.push('')
  lines.push(skill.intro)
  lines.push('')
  if (skill.exampleAsk) {
    lines.push(tryAskingSection(skill.exampleAsk))
  }
  lines.push('## Input')
  lines.push('')
  lines.push(`$ARGUMENTS`)
  lines.push('')
  lines.push('## How It Works')
  lines.push('')
  skill.howItWorks.forEach((step, i) => lines.push(`${i + 1}. ${step}`))
  lines.push('')
  lines.push(STAYING_CURRENT)
  return lines.join('\n')
}

function renderFreeformSkillMarkdown(skill) {
  const lines = []
  lines.push('---')
  lines.push(`name: ${skill.slug}`)
  lines.push(`description: ${skill.description}`)
  lines.push('---')
  lines.push('')
  lines.push(skill.bodyMarkdown)
  lines.push('')
  if (skill.exampleAsk) {
    lines.push(tryAskingSection(skill.exampleAsk))
    lines.push('')
  }
  lines.push(STAYING_CURRENT)
  return lines.join('\n')
}

function renderProSkillMarkdown(skill) {
  const lines = []
  lines.push('---')
  lines.push(`name: ${skill.slug}`)
  lines.push(`description: ${skill.description}`)
  if (skill.whenToUse) lines.push(`when_to_use: ${skill.whenToUse}`)
  lines.push('metadata:')
  lines.push(`  domain: ${skill.domain}`)
  lines.push(`  platform: ${skill.platform}`)
  lines.push(`  role: ${skill.role}`)
  lines.push(`  scope: ${skill.scope}`)
  lines.push(`  output: ${skill.output}`)
  if (skill.relatedSkills?.length) lines.push(`  relatedSkills: ${skill.relatedSkills.join(', ')}`)
  lines.push('---')
  lines.push('')
  lines.push(`# ${skill.name}`)
  lines.push('')
  lines.push(skill.intro)
  lines.push('')
  if (skill.exampleAsk) {
    lines.push(tryAskingSection(skill.exampleAsk))
  }
  lines.push('## Core Workflow')
  lines.push('')
  skill.coreWorkflow.forEach((step, i) => lines.push(`${i + 1}. **${step.title}** — ${step.detail}`))
  lines.push('')
  lines.push('## Reference Guide')
  lines.push('')
  lines.push('Load detailed guidance based on context:')
  lines.push('')
  lines.push('| Topic | Reference | Load When |')
  lines.push('|---|---|---|')
  skill.referenceGuide.forEach((r) => lines.push(`| ${r.topic} | ${r.file} | ${r.loadWhen} |`))
  lines.push('')
  lines.push('## Key Implementation Patterns')
  lines.push('')
  skill.codePatterns.forEach((p) => {
    lines.push(`### ${p.title}`)
    lines.push('```' + p.language)
    lines.push(p.code)
    lines.push('```')
    lines.push('')
  })
  lines.push('## Constraints')
  lines.push('')
  lines.push('**MUST DO**')
  skill.mustDo.forEach((m) => lines.push(`- ${m}`))
  lines.push('')
  lines.push('**MUST NOT DO**')
  skill.mustNot.forEach((m) => lines.push(`- ${m}`))
  lines.push('')
  lines.push('## Output Templates')
  lines.push('')
  lines.push('When implementing, provide:')
  lines.push('')
  skill.outputTemplate.forEach((o, i) => lines.push(`${i + 1}. ${o}`))
  lines.push('')
  lines.push('## Knowledge Reference')
  lines.push('')
  lines.push(skill.knowledgeReference)
  lines.push('')
  lines.push(STAYING_CURRENT)
  return lines.join('\n')
}
