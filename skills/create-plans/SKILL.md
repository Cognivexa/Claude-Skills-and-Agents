---
name: create-plans
description: Builds a hierarchical project plan of epics, tasks, and subtasks structured so a single agent can execute it sequentially without losing track of prior context.
argument-hint: [project-description]
---

# Create Plans

Turns a one-line feature request into an ordered, checkable task tree instead of a wall of text an agent re-reads from scratch every step.

## Input

$ARGUMENTS

## How It Works

1. Clarify the overall goal and constraints, then split the work into a small number of epics.
2. Break each epic into concrete tasks that can be completed and verified independently.
3. Decompose any task that touches multiple files or systems into ordered subtasks.
4. Sequence the tree so each step's output supplies exactly the context the next step needs.
5. Attach a completion check to each task so progress can be verified before moving on.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.