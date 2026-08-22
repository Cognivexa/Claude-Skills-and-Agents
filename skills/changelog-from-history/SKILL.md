---
name: changelog-from-history
description: Walks the git log between two tags, groups commits by Conventional Commit type (feat/fix/chore/breaking), and drafts a Keep-a-Changelog formatted entry with links to detected PR numbers. Breaking changes get pulled into a dedicated "Upgrade Notes" section.
argument-hint: [from-tag]..[to-tag]
---

# Changelog Generator From Commit History

Builds a publish-ready changelog straight from your commit history, no manual copy-pasting.

## Input

$ARGUMENTS

## How It Works

1. Walk the git log between the two provided tags or refs
2. Parse each commit into feat, fix, chore, or breaking categories
3. Detect linked PR numbers and attach them to their entries
4. Group entries under Keep-a-Changelog style headings
5. Draft an Upgrade Notes section for any breaking changes found

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.