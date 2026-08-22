---
name: eval-set-forge
description: Builds structured evaluation datasets from raw production transcripts by clustering similar queries, sampling edge cases, and drafting rubric-based grading criteria.
argument-hint: [logs-path]
---

# Eval Set Forge

Turns a pile of production transcripts into a defensible, reusable eval suite in minutes.

## Input

$ARGUMENTS

## How It Works

1. Ingest raw transcripts and normalize them into a common schema.
2. Cluster queries by semantic similarity to surface distinct task types.
3. Stratified-sample across clusters and deliberately oversample outliers.
4. Draft a per-cluster grading rubric with explicit pass and fail criteria.
5. Export the eval set and rubrics as a versioned JSONL bundle.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.