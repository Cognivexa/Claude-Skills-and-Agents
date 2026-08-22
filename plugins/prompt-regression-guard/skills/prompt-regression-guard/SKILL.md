---
name: prompt-regression-guard
description: Runs your prompt templates against a versioned snapshot suite before every deploy, diffing model outputs field-by-field to flag silent behavior drift.
argument-hint: [prompt-dir]
---

# Prompt Regression Guard

Catches silent prompt breakage before it reaches production, not after.

## Input

$ARGUMENTS

## How It Works

1. Load prompt templates and their last-known-good output snapshots.
2. Re-run each template against the current model and config.
3. Diff structured output fields rather than raw text to ignore harmless wording changes.
4. Score each diff's severity using configurable per-field weights.
5. Emit a pass or fail report and update snapshots once changes are approved.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.