#!/usr/bin/env node
// Installs a skill or agent from this repo straight into a Claude Code project
// or home directory, with no marketplace and no manual `git clone` step.
//
// Usage:
//   npx github:Cognivexa/Claude-Skills-and-Agents install skill <slug> [--global]
//   npx github:Cognivexa/Claude-Skills-and-Agents install agent <slug> [--global]
//   npx github:Cognivexa/Claude-Skills-and-Agents list
//
// `npx github:<owner>/<repo>` shallow-clones this repo into npm's temp cache
// before running this script, so everything under skills/ and agents/ is
// already on disk right next to this file — no network calls happen here.

import { existsSync, mkdirSync, cpSync, copyFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { homedir } from 'node:os'

const REPO_ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const SKILLS_SRC = join(REPO_ROOT, 'skills')
const AGENTS_SRC = join(REPO_ROOT, 'agents')

function usage() {
  console.log(`Install a skill or agent from Cognivexa/Claude-Skills-and-Agents directly.

Usage:
  npx github:Cognivexa/Claude-Skills-and-Agents install skill <slug> [--global] [--dir <path>]
  npx github:Cognivexa/Claude-Skills-and-Agents install agent <slug> [--global] [--dir <path>]
  npx github:Cognivexa/Claude-Skills-and-Agents list

Options:
  --global      Install to ~/.claude instead of ./.claude (available in every project)
  --dir <path>  Install under a custom root instead of ./.claude or ~/.claude (mainly for testing)

Examples:
  npx github:Cognivexa/Claude-Skills-and-Agents install skill code-review
  npx github:Cognivexa/Claude-Skills-and-Agents install agent code-review --global`)
}

function listAvailable() {
  const skills = readdirSync(SKILLS_SRC, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort()
  const agents = readdirSync(AGENTS_SRC, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.md'))
    .map((e) => e.name.replace(/\.md$/, ''))
    .sort()
  console.log(`${skills.length} skills:\n  ${skills.join('\n  ')}`)
  console.log(`\n${agents.length} agents:\n  ${agents.join('\n  ')}`)
}

function resolveClaudeRoot(args) {
  const dirFlagIndex = args.indexOf('--dir')
  if (dirFlagIndex !== -1 && args[dirFlagIndex + 1]) {
    return args[dirFlagIndex + 1]
  }
  return args.includes('--global') ? join(homedir(), '.claude') : join(process.cwd(), '.claude')
}

function installSkill(slug, claudeRoot) {
  const src = join(SKILLS_SRC, slug)
  if (!existsSync(src)) {
    console.error(`✘ No skill named "${slug}" in this repo. Run "list" to see available slugs.`)
    process.exitCode = 1
    return
  }
  const dest = join(claudeRoot, 'skills', slug)
  mkdirSync(dirname(dest), { recursive: true })
  cpSync(src, dest, { recursive: true })
  console.log(`✔ Installed skill "${slug}" -> ${dest}`)
  console.log(`\nNext steps in Claude Code:`)
  console.log(`  1. Run /skills to confirm "${slug}" is listed (restart the session first if this was the first skill installed here).`)
  console.log(`  2. Use it with "/${slug} <your request>", or just describe the task naturally — Claude uses it automatically when it matches.`)
}

function installAgent(slug, claudeRoot) {
  const src = join(AGENTS_SRC, `${slug}.md`)
  if (!existsSync(src)) {
    console.error(`✘ No agent named "${slug}" in this repo. Run "list" to see available slugs.`)
    process.exitCode = 1
    return
  }
  const dest = join(claudeRoot, 'agents', `${slug}.md`)
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(src, dest)
  console.log(`✔ Installed agent "${slug}" -> ${dest}`)
  console.log(`\nNext steps in Claude Code:`)
  console.log(`  1. Run /agents to confirm "${slug}" is listed (restart the session first if this was the first agent installed here).`)
  console.log(`  2. Use it with "@${slug} <your request>", or just describe the task naturally — Claude delegates to it automatically when it matches.`)
}

const [command, kind, slug, ...rest] = process.argv.slice(2)

if (command === 'list') {
  listAvailable()
} else if (command === 'install' && kind === 'skill' && slug) {
  installSkill(slug, resolveClaudeRoot(rest))
} else if (command === 'install' && kind === 'agent' && slug) {
  installAgent(slug, resolveClaudeRoot(rest))
} else {
  usage()
  process.exitCode = command ? 1 : 0
}
