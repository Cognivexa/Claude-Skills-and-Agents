---
name: board-deck-builder
description: Structure a board meeting deck around decisions needed, with metrics and narrative in a consistent order.
argument-hint: [meeting-topic]
---

# Board Deck Builder

Lead with the decision the board needs to make, not a wall of status updates.

## Input

$ARGUMENTS

## How It Works

1. Identify the decisions the board actually needs to make this meeting
2. Order sections so decisions come before background context
3. Pull the metrics that support each decision point
4. Flag where the narrative and the underlying numbers diverge
5. Draft anticipated questions and answers for the hardest points

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.