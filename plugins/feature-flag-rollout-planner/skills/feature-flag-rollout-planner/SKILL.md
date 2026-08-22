---
name: feature-flag-rollout-planner
description: Plan a staged feature flag rollout with explicit rollback criteria and monitoring checkpoints per stage.
argument-hint: [feature-name]
---

# Feature Flag Rollout Planner

Plan the rollback criteria before the rollout starts, not after something breaks.

## Input

$ARGUMENTS

## How It Works

1. Define rollout stages by percentage or cohort
2. Set explicit success and rollback criteria for each stage
3. Identify the metrics to monitor at each checkpoint
4. Define the kill-switch process and who can pull it
5. Document the full rollout plan for on-call visibility

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.