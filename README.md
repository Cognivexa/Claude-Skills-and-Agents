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

Everything below is typed into an **active Claude Code chat session** —
that's the integrated terminal or chat panel of the VS Code / JetBrains
extension, or a plain terminal running `claude` with no editor at all. It is
**not** a GitHub URL field, an "Add MCP server" dialog, or any other box in
your editor — if a UI asks you for a bare `owner/repo` with no chat input
next to it, that's a different feature; use the chat-based commands below
instead.

Run the three commands **one at a time**, in order, waiting for each one to
finish before typing the next. Do not combine them into a single line, and
do not append anything to Step 1.

**Step 1 — register this repo as a marketplace (run this exactly once, ever,
per machine):**

```
/plugin marketplace add Cognivexa/claude-skills-and-agents
```

Type it exactly as shown, nothing added. You do this once no matter how
many agents or skills from this repo you go on to install.

**Step 2 — install one specific agent or skill:**

```
/plugin install <plugin-name>@claude-skills-and-agents
```

Replace `<plugin-name>` with the slug shown on that agent/skill's page in
the catalog. Run this again, separately, for every additional plugin you
want — Step 1 is never repeated.

**Step 3 — use it.** Skills run as a slash command; agents are invoked
automatically or with an @-mention. See the worked example below.

### Full worked example, start to finish

Installing and using the `dataset-cleaner` skill looks like this — four
separate commands, typed one after another in the same chat session:

```
/plugin marketplace add Cognivexa/claude-skills-and-agents
/plugin install dataset-cleaner@claude-skills-and-agents
/dataset-cleaner:dataset-cleaner path/to/messy-data.csv
```

Installing and using the `api-integration-engineer` agent:

```
/plugin marketplace add Cognivexa/claude-skills-and-agents
/plugin install api-integration-engineer@claude-skills-and-agents
@agent-api-integration-engineer:api-integration-engineer wire up the Stripe webhook handler
```

Notice the first line is identical in both examples — that's Step 1, and
you only need to run it the first time. Every other line is specific to
that one plugin.

Don't have Claude Code installed yet? `npm install -g @anthropic-ai/claude-code`,
then run `claude` from a terminal (including VS Code's or JetBrains') to
start a session before using the commands above.

## Using an agent or skill after installing

**Skills** run as a slash command, namespaced with the plugin name:

```
/plugin-name:skill-name [arguments]
```

Arguments after the command follow that skill's `argument-hint`, shown on
its catalog page (e.g. `<dataset-file>`).

**Agents** don't need to be invoked manually — Claude Code automatically
delegates to an installed agent when a task matches its description. To
invoke one explicitly instead, @-mention it in chat:

```
@agent-plugin-name:agent-name your request here
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
