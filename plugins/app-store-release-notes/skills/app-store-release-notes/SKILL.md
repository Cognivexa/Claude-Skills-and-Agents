---
name: app-store-release-notes
description: Turns a range of git commits or a sprint's ticket list into polished, user-facing release notes formatted for App Store Connect and Google Play listings. Produces both a full changelog and a trimmed "what's new" version that respects each store's character limits.
argument-hint: [version-tag-or-commit-range]
---

# App Store Release Notes Drafter

Turns raw commit noise into store-ready release notes in one pass.

## Input

$ARGUMENTS

## How It Works

1. Collect commits or PR titles across the specified range
2. Classify each change as feature, fix, improvement, or internal-only
3. Filter out internal changes that end users don't need to see
4. Rewrite technical descriptions into plain, user-facing language
5. Format two outputs: a full changelog and a character-limited "what's new" blurb

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.