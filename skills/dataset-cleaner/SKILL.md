---
name: dataset-cleaner
description: Clean a messy dataset: standardize types, handle missing values deliberately, and log every transformation applied.
argument-hint: [dataset-file]
---

# Dataset Cleaner

Every cleaning decision is logged, so the cleaned dataset stays auditable.

## Input

$ARGUMENTS

## How It Works

1. Profile column types, missing rates, and outliers before touching anything
2. Standardize types and formats consistently across columns
3. Choose an explicit, documented strategy for missing values per column
4. Log every transformation applied, in order, to a changelog
5. Re-profile the cleaned dataset and report what changed

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.