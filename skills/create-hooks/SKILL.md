---
name: create-hooks
description: Provides expert guidance for authoring Claude Code hooks, covering event selection, matcher configuration, and writing hook scripts that run fast and fail safely.
argument-hint: [hook-event]
---

# Create Hooks

Turns from now on always do X requests into a properly wired hook instead of an instruction that quietly gets forgotten.

## Input

$ARGUMENTS

## How It Works

1. Identify which lifecycle event, such as PreToolUse or PostToolUse, actually corresponds to the desired trigger point.
2. Write a matcher that targets the right tools or commands without over- or under-matching.
3. Draft the hook script logic, keeping it short-running and side-effect-aware so it cannot stall the session.
4. Add safe failure handling so a hook error blocks or warns as intended rather than crashing silently.
5. Wire the hook into settings.json and describe how to verify it fires correctly on a test action.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.