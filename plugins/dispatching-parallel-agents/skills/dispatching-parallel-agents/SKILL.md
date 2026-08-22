---
name: dispatching-parallel-agents
description: Splits a batch of independent tasks with no shared dependencies across multiple subagents dispatched at once, then reconciles their results into a single output.
argument-hint: [task-list]
---

# Dispatching Parallel Agents

Turns a pile of unrelated tasks into simultaneous subagent runs instead of a slow sequential queue.

## Input

$ARGUMENTS

## How It Works

1. Confirm each task in the batch has no shared files or state with the others.
2. Assign one subagent per independent task with a self-contained prompt.
3. Dispatch all subagents concurrently rather than one after another.
4. Collect each subagent's output as it completes.
5. Merge the results, checking for conflicts or duplicated work before finalizing.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.