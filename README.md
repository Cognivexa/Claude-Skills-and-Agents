# Claude Skills and Agents

A Claude Code plugin marketplace of original agents, skills, and commands
built by **Cognivexa**, spanning engineering, product, marketing, research,
compliance, C-level advisory, business operations, and commercial & finance.

This is an independent, community project. It is **not affiliated with,
endorsed by, or officially connected to Anthropic**. "Claude" and "Claude
Code" are used here only to describe compatibility with Anthropic's Claude
Code product.

A browsable catalog of everything in this repo is included as a small React
app under [`src/`](src/) — run `npm install && npm run dev` to explore it
locally.

## Install with Claude Code (recommended)

These are Claude Code **slash commands**, typed straight into a Claude Code
session — in the integrated terminal of VS Code, JetBrains, or any other
editor Claude Code runs in, or in a plain terminal with no editor at all.
The plugin system lives inside Claude Code itself, so the two commands
below are identical no matter where Claude Code is running:

**Step 1 — register this repo as a plugin marketplace** (do this once):

```
/plugin marketplace add Cognivexa/claude-skills-and-agents
```

**Step 2 — install any individual agent or skill you want:**

```
/plugin install <plugin-name>@claude-skills-and-agents
```

Every plugin name matches its slug in the catalog — e.g.:

```
/plugin install sop-writer@claude-skills-and-agents
/plugin install api-integration-engineer@claude-skills-and-agents
/plugin install data-privacy-compliance-officer@claude-skills-and-agents
```

Don't have Claude Code installed yet? `npm install -g @anthropic-ai/claude-code`,
then run `claude` from a terminal (including VS Code's or JetBrains') to
start a session before using the commands above.

## Using an agent or skill after installing

**Skills** run as a slash command, namespaced with the plugin name:

```
/plugin-name:skill-name [arguments]
```

For example, after installing `sop-writer`:

```
/sop-writer:sop-writer <process-description>
```

Arguments after the command follow that skill's `argument-hint`.

**Agents** don't need to be invoked manually — Claude Code automatically
delegates to an installed agent when a task matches its `description`. To
invoke one explicitly instead, @-mention it in chat:

```
@agent-plugin-name:agent-name your request here
```

For example, after installing `technical-seo-auditor`:

```
@agent-technical-seo-auditor:technical-seo-auditor audit this site for crawl issues
```

Both skills and agents show up in autocomplete and `/help` once installed.

## Other coding agents

Every plugin here is a plain Markdown agent/skill file under `plugins/`.
Claude Code installs them natively through the plugin system above. Other
coding agents — Codex, Gemini CLI, Cursor, Windsurf, Cline, Aider, Continue,
Roo Code, Zed, Amp, GitHub Copilot — don't share Claude Code's plugin
format, but each has its own custom-instructions/rules mechanism the
Markdown content can be adapted to by hand.

## Repository layout

```
.claude-plugin/marketplace.json   marketplace manifest listing every plugin
plugins/<slug>/agents/<slug>.md   agent plugins (persona + workflow)
plugins/<slug>/skills/<slug>/     skill plugins (SKILL.md)
src/                              browsable catalog (React + Vite)
scripts/generate-marketplace.mjs  regenerates plugins/ + marketplace.json from src/data
```

## Adding a new agent or skill

1. Add an entry to `src/data/agents.js` or `src/data/skills.js`.
2. Run `npm run generate:marketplace` to regenerate the plugin files and
   manifest from that data.
3. Commit both the data change and the generated `plugins/` output.

## Categories

Engineering & Development, SEO, Content Editor, Marketing, Data Analysis,
Automation, Research, Writing, Design, Productivity, Product, Compliance,
C-Level Advisory, Business Operations, Commercial & Finance.

## License

All content in this repository is original work authored for this project.

## Developer

Cognivexa
