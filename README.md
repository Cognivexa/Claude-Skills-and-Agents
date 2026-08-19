# Claude Skills and Agents

A library of **92 skills** and **57 agents** built by **Cognivexa** — for Claude
Code and Codex — spanning engineering, product, marketing, research,
compliance, C-level advisory, business operations, and commercial & finance.
A handful of flagship "Pro" entries (WordPress, PHP, Laravel, Python, Django,
TypeScript, Docker & Kubernetes, React, Fullstack Guardian, Security
Reviewer, Code Review and Quality) ship with real code patterns, MUST-DO /
MUST-NOT constraints, and progressive-disclosure reference docs, not just a
short description.

This is an independent, community project. It is **not affiliated with,
endorsed by, or officially connected to Anthropic or OpenAI**. "Claude",
"Claude Code", "Codex", and "OpenAI" are used here only to describe
compatibility with those products.

A browsable catalog of everything in this repo is included as a small React
app under [`src/`](src/) — run `npm install && npm run dev` to explore it
locally.

## Two ways to install a skill or agent

Every skill and agent in this repo is a plain Markdown file. There are two
independent ways to get one into Claude Code, and Codex reads the same
skill files as Claude Code (agents are Claude-Code-only — see
[Codex support](#codex-support)):

| Method | Works with | Reliability | Setup |
|---|---|---|---|
| **[A. Copy the folder](#method-a-copy-the-folder-recommended)** | Claude Code + Codex | Works on any version, no network dependency after cloning | One `git clone` + one folder copy |
| **[B. Plugin marketplace](#method-b-plugin-marketplace-claude-code-only)** | Claude Code only | Needs Claude Code v2.1.232+ for reliable re-installs; older versions can serve a stale cached list | Three `/plugin` commands |

**If you only remember one thing:** Method A is what we recommend by
default. It's a plain file copy, so it can't be broken by a marketplace
cache or a Claude Code version mismatch, and it's the only method that also
works in Codex.

## Method A: copy the folder (recommended)

Claude Code scans two folders every session — `.claude/skills/` (this
project only) and `~/.claude/skills/` (every project on this machine) — and
lists anything with a `SKILL.md` inside under `/skills`, using it
automatically when a request matches its description. Codex does the same
thing at `.agents/skills/` (project) and `~/.agents/skills/` (global). This
repo's [`skills/`](skills/) and [`agents/`](agents/) directories are laid out
in exactly the format both tools expect, so "installing" one is just
**copying that one folder**.

**1. Get the repo once:**

```bash
git clone https://github.com/Cognivexa/Claude-Skills-and-Agents.git
```

**2. Copy the skill or agent you want.** Pick your tool and scope:

<details>
<summary><strong>Claude Code</strong></summary>

```powershell
# Windows PowerShell — this project only
Copy-Item -Recurse "Claude-Skills-and-Agents\skills\code-review" ".claude\skills\code-review"

# Windows PowerShell — every project on this machine
Copy-Item -Recurse "Claude-Skills-and-Agents\skills\code-review" "$HOME\.claude\skills\code-review"
```

```bash
# macOS / Linux — this project only
cp -r Claude-Skills-and-Agents/skills/code-review .claude/skills/code-review

# macOS / Linux — every project on this machine
cp -r Claude-Skills-and-Agents/skills/code-review ~/.claude/skills/code-review
```

For an **agent** instead of a skill, copy the single `.md` file from
[`agents/`](agents/) into `.claude/agents/<name>.md` (project) or
`~/.claude/agents/<name>.md` (personal) the same way.

</details>

<details>
<summary><strong>Codex</strong></summary>

```bash
# This project only
cp -r Claude-Skills-and-Agents/skills/code-review .agents/skills/code-review

# Every project on this machine
cp -r Claude-Skills-and-Agents/skills/code-review ~/.agents/skills/code-review
```

Codex doesn't have an equivalent to Claude Code's subagents, so only skills
are installable this way — there's nothing under `agents/` to copy for
Codex.

</details>

**3. Restart once if the destination folder is brand new.** Claude Code and
Codex watch `skills`/`agents` folders that already existed when the session
started; if `.claude/skills/` (or the equivalent) didn't exist before this
copy, restart the session so it starts watching the new folder. If you've
installed anything there before, it's picked up live — no restart needed.

**4. Confirm it shows up.** Run `/skills` in Claude Code (or `/skills` in
Codex) and you'll see it listed alongside anything else you've installed.

**5. Use it:**

* **Claude Code:** type `/code-review` (bare name, no plugin prefix — that's
  only for Method B), or just ask naturally — "review this file" — and
  Claude invokes it automatically because the request matches its
  description.
* **Codex:** mention `$code-review` in your prompt, or run `/skills` to
  browse and select it. Codex also invokes it automatically when a prompt
  matches the description.
* **A Claude Code agent:** Claude delegates to it automatically when a task
  matches its description, or @-mention it explicitly.

## Method B: plugin marketplace (Claude Code only)

This is Claude Code's built-in plugin system. It installs every skill/agent
in this repo as one namespaced plugin, shown in `/plugin` → Installed.

**Step 1 — register this repo as a marketplace (once, ever, per machine):**

```
/plugin marketplace add Cognivexa/claude-skills-and-agents
```

This installs **nothing** by itself — it only tells Claude Code where to
find plugins here. None of the plugins are downloaded until Step 2.

**Step 2 — install one specific agent or skill:**

```
/plugin install <plugin-name>@claude-skills-and-agents
```

Replace `<plugin-name>` with the slug shown on that agent/skill's page in
the catalog (for example, `code-review`, `wordpress-pro`).

**Step 3 — use it:**

```
/plugin-name:skill-name [arguments]          # skills
@agent-plugin-name:agent-name your request   # agents, or just describe the task
```

### If Step 2 says "not found in marketplace"

This means Claude Code is reading a cached copy of this repo's plugin list
from before the plugin you want was added — it happens on Claude Code
versions **before v2.1.232**, which don't auto-refresh a marketplace before
a named install. Fix it with one of these, then retry Step 2:

```
/plugin marketplace update claude-skills-and-agents
```

If that command isn't recognized either:

```
/plugin marketplace remove claude-skills-and-agents
/plugin marketplace add Cognivexa/claude-skills-and-agents
```

Or update Claude Code itself: `npm install -g @anthropic-ai/claude-code@latest`.

### Full worked example

```
/plugin marketplace add Cognivexa/claude-skills-and-agents
/plugin install code-review@claude-skills-and-agents
/code-review:code-review path/to/file.py
```

Don't have Claude Code installed yet? `npm install -g @anthropic-ai/claude-code`,
then run `claude` from a terminal (including VS Code's or JetBrains') to
start a session before using the commands above.

## Codex support

Every skill in [`skills/`](skills/) is written in the open Agent Skills
format both Claude Code and Codex read directly — no conversion needed.
Codex looks for skills in `.agents/skills/` (project, walking up to the repo
root) or `~/.agents/skills/` (global), and invokes one either by mentioning
`$skill-name` in a prompt or automatically when a prompt matches the
skill's description. See [Method A](#method-a-copy-the-folder-recommended)
above for the exact copy commands.

Agents (subagents) are a Claude Code–specific concept with no Codex
equivalent — if you need that capability in Codex, check whether the same
capability also exists as a skill in this repo (most of the flagship "Pro"
agents do, under the same slug) and install that instead.

## Repository layout

```
.claude-plugin/marketplace.json   marketplace manifest listing every plugin (Method B)
skills/<slug>/SKILL.md            flat skill layout — copy straight into .claude/skills/ or .agents/skills/ (Method A)
skills/<slug>/references/*.md     supporting reference docs for the flagship "Pro" skills
agents/<slug>.md                  flat agent layout — copy straight into .claude/agents/ (Method A, Claude Code only)
plugins/<slug>/                   the same content packaged as Claude Code plugins (Method B)
src/                              browsable catalog (React + Vite)
scripts/generate-marketplace.mjs  regenerates plugins/, skills/, agents/, and marketplace.json from src/data
```

`skills/`, `agents/`, and `plugins/` are all generated from
[`src/data/skills.js`](src/data/skills.js) and
[`src/data/agents.js`](src/data/agents.js) — don't hand-edit the generated
folders directly, since a regeneration overwrites them.

## Adding a new agent or skill

1. Add an entry to `src/data/agents.js` or `src/data/skills.js`.
2. Run `npm run generate:marketplace` to regenerate `plugins/`, `skills/`,
   `agents/`, and `.claude-plugin/marketplace.json` from that data.
3. Commit both the data change and the generated output.

## Categories

**Skills:** Research & Learning, Knowledge Management, Writing & Docs,
Media & YouTube, Code & Dev, Data & Analysis, Debug & Test, Utility,
Collections, Product, Compliance, C-Level Advisory, Business Operations,
Commercial & Finance, DevOps, Security, Mobile Development, Git & Version
Control, AI Engineering, Media & Graphics.

**Agents:** Development, SEO, Content Editor, Marketing, Data Analysis,
Automation, Research, Writing, Design, Productivity, Product, Compliance,
C-Level Advisory, Business Operations, Commercial & Finance, DevOps,
Security, Frontend, UI/UX, AI Engineering, Data Science, Communication,
Other.

## License

All content in this repository is original work authored for this project.

## Developer

Cognivexa
