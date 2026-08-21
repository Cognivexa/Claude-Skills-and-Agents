#!/usr/bin/env node
// Installs a skill or agent from this repo straight into a Claude Code (or,
// for skills, Codex) project or home directory, with no marketplace and no
// manual `git clone` step.
//
// Usage:
//   npx github:Cognivexa/Claude-Skills-and-Agents install skill <slug> [--global] [--codex] [--dir <path>]
//   npx github:Cognivexa/Claude-Skills-and-Agents install agent <slug> [--global] [--dir <path>]
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
const PKG_NAME = 'Cognivexa/Claude-Skills-and-Agents'
const RUN = `npx github:${PKG_NAME}`

// --- tiny color helper, no dependencies — degrades to plain text when the
// output isn't a real terminal (piped, redirected, CI, NO_COLOR set) -------
const color = process.stdout.isTTY && !process.env.NO_COLOR
const paint = (code) => (s) => (color ? `\x1b[${code}m${s}\x1b[0m` : s)
const bold = paint('1')
const dim = paint('2')
const green = paint('32')
const cyan = paint('36')
const yellow = paint('33')
const red = paint('31')

const ok = (s) => `${green('✔')} ${s}`
const fail = (s) => `${red('✘')} ${s}`
const heading = (s) => `\n${bold(s)}`

function usage() {
  console.log(`${bold('Claude Skills & Agents')} ${dim('— installer')}

Install a skill or agent from ${cyan(PKG_NAME)} directly — no marketplace, no manual clone.

${bold('Usage')}
  ${RUN} install skill <slug>  ${dim('[--global] [--codex] [--dir <path>]')}
  ${RUN} install agent <slug>  ${dim('[--global] [--dir <path>]')}
  ${RUN} list

${bold('Scope')}
  ${dim('(default)')}   installs into ${cyan('./.claude/')}   — this project only
  ${cyan('--global')}   installs into ${cyan('~/.claude/')}   — every project on this machine

${bold('Tool')} ${dim('(skills only — agents are a Claude Code concept, no Codex equivalent)')}
  ${dim('(default)')}   Claude Code — ${cyan('.claude/skills/')}
  ${cyan('--codex')}    Codex — ${cyan('.agents/skills/')}

${bold('Examples')}
  ${dim('$')} ${RUN} install skill code-review
  ${dim('$')} ${RUN} install skill code-review --codex
  ${dim('$')} ${RUN} install agent code-review --global
  ${dim('$')} ${RUN} list
`)
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

  console.log(heading(`Skills (${skills.length})`))
  console.log(skills.map((s) => `  ${s}`).join('\n'))
  console.log(heading(`Agents (${agents.length})`))
  console.log(agents.map((a) => `  ${a}`).join('\n'))
  console.log(`\n${dim(`Install one with: ${RUN} install skill <slug>   or   install agent <slug>`)}`)
}

function resolveRoot(args, toolDirName) {
  const dirFlagIndex = args.indexOf('--dir')
  if (dirFlagIndex !== -1 && args[dirFlagIndex + 1]) {
    return { root: args[dirFlagIndex + 1], global: args.includes('--global') }
  }
  const global = args.includes('--global')
  return { root: global ? join(homedir(), toolDirName) : join(process.cwd(), toolDirName), global }
}

// Prints both the project and global command side by side, with the one the
// user actually just ran marked, so it's obvious how to get the other scope too.
function scopeReference(kind, slug, usedGlobal, extraFlag = '') {
  const projectCmd = `${RUN} install ${kind} ${slug}${extraFlag}`
  const globalCmd = `${projectCmd} --global`
  const mark = (isThisOne) => (isThisOne ? green('→') : ' ')
  console.log(heading('Scope reference'))
  console.log(`  ${mark(!usedGlobal)} ${dim('Project')}  ${dim('(this folder only)')}   ${projectCmd}`)
  console.log(`  ${mark(usedGlobal)} ${dim('Global')}   ${dim('(every project here)')}  ${globalCmd}`)
}

function installSkill(slug, args) {
  const src = join(SKILLS_SRC, slug)
  if (!existsSync(src)) {
    console.error(fail(`No skill named "${slug}" in this repo. Run "${RUN} list" to see available slugs.`))
    process.exitCode = 1
    return
  }
  const codex = args.includes('--codex')
  const toolDirName = codex ? '.agents' : '.claude'
  const { root, global } = resolveRoot(args, toolDirName)
  const dest = join(root, 'skills', slug)
  mkdirSync(dirname(dest), { recursive: true })
  cpSync(src, dest, { recursive: true })

  console.log(ok(`Skill installed: ${bold(slug)}`))
  console.log(`  ${dim('└─')} ${dest}`)
  scopeReference('skill', slug, global, codex ? ' --codex' : '')

  if (codex) {
    console.log(heading('Use it in Codex'))
    console.log(`  1. Run ${cyan('/skills')} to confirm "${slug}" is listed.`)
    console.log(`     ${dim(`(First run only: restart Codex if .agents/skills/ didn't already exist here.)`)}`)
    console.log(`  2. Mention ${cyan(`$${slug}`)} in a prompt`)
    console.log(`     ${dim('— or just describe the task naturally; Codex loads it automatically when it matches.')}\n`)
  } else {
    console.log(heading('Use it in Claude Code'))
    console.log(`  1. Run ${cyan('/skills')} to confirm "${slug}" is listed.`)
    console.log(`     ${dim(`(First run only: restart claude if .claude/skills/ didn't already exist here.)`)}`)
    console.log(`  2. Run ${cyan(`/${slug} <your request>`)}`)
    console.log(`     ${dim('— or just describe the task naturally; Claude uses it automatically when it matches.')}\n`)
  }
}

function installAgent(slug, args) {
  if (args.includes('--codex')) {
    console.error(fail('Codex has no subagent concept, so --codex does not apply to "install agent".'))
    console.error(dim(`If this capability exists as a skill too, install that instead: ${RUN} install skill ${slug} --codex`))
    process.exitCode = 1
    return
  }
  const src = join(AGENTS_SRC, `${slug}.md`)
  if (!existsSync(src)) {
    console.error(fail(`No agent named "${slug}" in this repo. Run "${RUN} list" to see available slugs.`))
    process.exitCode = 1
    return
  }
  const { root, global } = resolveRoot(args, '.claude')
  const dest = join(root, 'agents', `${slug}.md`)
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(src, dest)

  console.log(ok(`Agent installed: ${bold(slug)}`))
  console.log(`  ${dim('└─')} ${dest}`)
  scopeReference('agent', slug, global)
  console.log(heading('Use it in Claude Code'))
  console.log(`  1. Run ${cyan('/agents')} to confirm "${slug}" is listed.`)
  console.log(`     ${dim(`(First run only: restart claude if .claude/agents/ didn't already exist here.)`)}`)
  console.log(`  2. Run ${cyan(`@${slug} <your request>`)}`)
  console.log(`     ${dim('— or just describe the task naturally; Claude delegates to it automatically when it matches.')}\n`)
}

const [command, kind, slug, ...rest] = process.argv.slice(2)

if (command === '--help' || command === '-h') {
  usage()
} else if (command === 'list') {
  listAvailable()
} else if (command === 'install' && kind === 'skill' && slug) {
  installSkill(slug, rest)
} else if (command === 'install' && kind === 'agent' && slug) {
  installAgent(slug, rest)
} else {
  if (command) console.error(fail(`Unrecognized command: ${[command, kind, slug].filter(Boolean).join(' ')}\n`))
  usage()
  process.exitCode = command ? 1 : 0
}
