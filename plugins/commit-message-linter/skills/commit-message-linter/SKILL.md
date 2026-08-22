---
name: commit-message-linter
description: Reviews a range of commits against Conventional Commits and imperative-mood style rules, flagging vague messages like "fix stuff" and suggesting rewrites grounded in the actual diff content. Also checks subject-line length and body wrapping conventions.
argument-hint: [commit-range]
---

# Commit Message Quality Checker

Catches lazy commit messages before they land in permanent history.

## Input

$ARGUMENTS

## How It Works

1. Read each commit's diff alongside its message
2. Check the subject line against Conventional Commits type/scope format
3. Flag vague or generic messages that don't match the diff content
4. Verify line length, imperative mood, and body wrapping conventions
5. Suggest a rewritten message grounded in what the diff actually changed

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.