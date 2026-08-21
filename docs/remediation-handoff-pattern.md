# Remediation Handoff Pattern

A reusable template for skill/agent authors in this repo. It's implemented today in
[`security-reviewer`](../skills/security-reviewer/SKILL.md) and
[`code-review`](../skills/code-review/SKILL.md) — copy it into another skill or agent's
Markdown deliberately, where it actually fits, rather than applying it mechanically to
every entry in the catalog. Most skills (`alt-text-composer`, `youtube-transcript`, ...)
have no natural "next skill to call" and gain nothing from this pattern.

## When this pattern fits

A skill/agent is a good candidate if all three are true:

1. It **finds** discrete, itemizable problems (findings, violations, bugs) rather than
   producing one holistic output (a document, a summary, a design).
2. Some of those findings are plausibly better fixed by a *different* skill/agent in this
   repo than by the one that found them (e.g. a reviewer finding a Django-specific bug is
   better fixed by `django-pro` than by rewriting Django conventions into the reviewer).
3. Auto-fixing is safe to offer at all — the change is reversible (version control) and
   scoped to the files the user is already working in.

## The four building blocks

### 1. Terminal progress output

Print one line per check category as it completes, ending in a single result line:

```
✔ Category A — clear
✘ Category B — 1 issue found

──────────────────────────────
Result: 1 issue found. See <name>-report.md for details.
```

When everything passes, the result line reads exactly `Result: 0 issues found — <name> is 100% clear.`
Don't hold everything until the end — the user should see the check moving.

### 2. Findings report file

Write a Markdown report even when nothing is found — a run that reports nothing on disk
looks the same as a run that never happened.

```markdown
# <Skill Name> Report — <target>

## Summary
- N issues found across M categories

## Findings

### 1. [Category] Short title
- **File:** path/to/file:line
- **Severity:** ...
- **Issue:** ...
- **Fix:** ...
```

### 3. Ask before fixing

Never modify code to address a finding without asking first. One question covering
everything found, not one question per finding:

> "Found N issue(s) — want me to fix them?"

If no, stop. The report file is the deliverable.

### 4. Named handoff, not silent delegation

If the answer is yes, don't just start editing. For each finding (or group of related
findings), decide whether *this* skill/agent should make the fix, or whether another one
in the catalog is better suited — and say so before acting:

> "I can use the `<slug>` skill/agent from this repo to fix this — install and run it?"

Only on an explicit yes:

```bash
npx github:Cognivexa/Claude-Skills-and-Agents install skill <slug>
# or
npx github:Cognivexa/Claude-Skills-and-Agents install agent <slug>
```

then invoke it. Never install or invoke anything the user hasn't just approved, and never
fold unrelated fixes into one approval — a "yes" to fixing leaked secrets isn't a "yes" to
a dependency upgrade found in the same run.

## Picking a handoff target

Keep a short, honest mental map from finding category to catalog slug — don't invent a
capability that doesn't exist in this repo. A few examples already used by
`security-reviewer` and `code-review`:

| Finding category | Likely handoff target |
|---|---|
| Hardcoded secret/credential | `secrets-in-code-scanner` |
| Vulnerable dependency | `dependency-vuln-triage` |
| Auth/access-control bug | `security-reviewer` agent |
| Framework-specific bug (Django/Laravel/React/...) | the matching `*-pro` agent |
| Nothing more specific fits | offer to fix it yourself, and say that explicitly |

If you're adding this pattern to a new skill/agent, write your own table like this one
scoped to what that skill actually finds — don't reuse this list verbatim if it doesn't
match.
