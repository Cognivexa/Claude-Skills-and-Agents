---
name: subagent-driven-development
description: Coordinates implementation of a multi-task plan by identifying which tasks are independent enough to run in parallel subagents and which require sequential handoffs.
argument-hint: [plan-file-or-tasks]
---

# Subagent-Driven Development

Turns a flat task list into a coordinated dispatch of parallel and sequential work instead of one long serial chain.

## Input

$ARGUMENTS

## How It Works

1. Parse the plan into discrete tasks and map their inputs, outputs, and shared files.
2. Build a dependency graph identifying which tasks have no overlapping resources.
3. Dispatch independent tasks to separate subagents to run concurrently.
4. Queue dependent tasks behind the subagent output they rely on.
5. Reconcile all subagent results into a single coherent implementation and check for conflicts.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.