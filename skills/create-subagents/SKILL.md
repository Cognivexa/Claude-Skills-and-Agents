---
name: create-subagents
description: Provides expert guidance for designing Claude Code subagents, covering tool-access scoping, system-prompt writing, and deciding when a task should be delegated rather than handled inline.
argument-hint: [subagent-purpose]
---

# Create Subagents

Turns an all-purpose helper agent into a narrowly scoped specialist instead of one that reaches for tools it does not need.

## Input

$ARGUMENTS

## How It Works

1. Clarify the task category the subagent should own and confirm it benefits from running in a separate context.
2. Select the minimal tool set the subagent needs and exclude anything that expands its blast radius unnecessarily.
3. Write a system prompt that states the subagent's role, boundaries, and expected report format.
4. Define criteria for when the parent should delegate to this subagent versus completing the work inline.
5. Test the subagent on a representative task and check whether its final report gives the parent enough to act on.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.