import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { AGENTS } from '../src/data/agents.js'
import { SKILLS } from '../src/data/skills.js'
import { renderAgentMarkdown, renderSkillMarkdown } from '../src/data/render.js'
import { MARKETPLACE_NAME } from '../src/data/marketplace.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const PLUGINS_DIR = join(ROOT, 'plugins')
const SKILLS_DIR = join(ROOT, 'skills')
const AGENTS_DIR = join(ROOT, 'agents')
const MANIFEST_DIR = join(ROOT, '.claude-plugin')

function writeFile(path, content) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, content, 'utf8')
}

// Start clean so removed/renamed entries don't leave stale plugin dirs behind.
if (existsSync(PLUGINS_DIR)) rmSync(PLUGINS_DIR, { recursive: true, force: true })
// Flat top-level skills/ and agents/ dirs: drop-in compatible with .claude/skills/,
// .claude/agents/, and the `npx skills add <owner>/<repo> --skill <name>` CLI, which
// discovers skills from a top-level skills/<name>/SKILL.md layout, not the nested
// plugins/<name>/skills/<name>/SKILL.md layout the plugin marketplace above uses.
if (existsSync(SKILLS_DIR)) rmSync(SKILLS_DIR, { recursive: true, force: true })
if (existsSync(AGENTS_DIR)) rmSync(AGENTS_DIR, { recursive: true, force: true })

const pluginEntries = []

for (const agent of AGENTS) {
  const pluginDir = join(PLUGINS_DIR, agent.slug)
  const agentMarkdown = renderAgentMarkdown(agent)
  writeFile(join(pluginDir, 'agents', `${agent.slug}.md`), agentMarkdown)
  writeFile(join(AGENTS_DIR, `${agent.slug}.md`), agentMarkdown)

  pluginEntries.push({
    name: agent.slug,
    source: `./plugins/${agent.slug}`,
    displayName: agent.name,
    description: agent.shortDescription,
    version: '0.1.0',
    author: { name: agent.author },
    category: agent.category,
    keywords: agent.tags,
  })
}

for (const skill of SKILLS) {
  const pluginDir = join(PLUGINS_DIR, skill.slug)
  const skillMarkdown = renderSkillMarkdown(skill)
  writeFile(join(pluginDir, 'skills', skill.slug, 'SKILL.md'), skillMarkdown)
  writeFile(join(SKILLS_DIR, skill.slug, 'SKILL.md'), skillMarkdown)

  for (const [relativePath, content] of Object.entries(skill.referenceFiles || {})) {
    writeFile(join(pluginDir, 'skills', skill.slug, relativePath), content)
    writeFile(join(SKILLS_DIR, skill.slug, relativePath), content)
  }

  pluginEntries.push({
    name: skill.slug,
    source: `./plugins/${skill.slug}`,
    displayName: skill.name,
    description: skill.description,
    version: '0.1.0',
    author: { name: skill.author },
    category: skill.category,
    keywords: skill.tags,
  })
}

pluginEntries.sort((a, b) => a.name.localeCompare(b.name))

const marketplace = {
  name: MARKETPLACE_NAME,
  owner: { name: 'Cognivexa' },
  description:
    'Original Claude Code agents, skills, and plugins spanning engineering, product, marketing, research, compliance, C-level advisory, business operations, and commercial & finance.',
  version: '0.1.0',
  plugins: pluginEntries,
}

writeFile(join(MANIFEST_DIR, 'marketplace.json'), JSON.stringify(marketplace, null, 2) + '\n')

console.log(`Generated ${pluginEntries.length} plugins (${AGENTS.length} agents + ${SKILLS.length} skills).`)
console.log(`Marketplace manifest: ${join(MANIFEST_DIR, 'marketplace.json')}`)
