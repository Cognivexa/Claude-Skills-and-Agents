---
name: stale-branch-cleanup-planner
description: Scans all local and remote branches to find ones already merged, abandoned for 60+ days, or orphaned from deleted PRs, then produces a safe-to-delete list with the evidence behind each entry. It never deletes anything itself; it only outputs the plan and the exact git commands to run.
argument-hint: [days-inactive-threshold]
---

# Stale Branch Cleanup Planner

Tells you exactly which branches are safe to delete, and why, without touching a single one.

## Input

$ARGUMENTS

## How It Works

1. List all local and remote branches with their last-commit timestamps
2. Check each branch's merge status against the main branch
3. Cross-reference branches against closed or deleted PRs
4. Flag branches inactive beyond the threshold as cleanup candidates
5. Output a plan with reasoning and the exact git commands to delete each

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.