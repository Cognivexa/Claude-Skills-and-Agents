---
name: regression-triage
description: Triage a reported regression: bisect the likely commit range, reproduce locally, and hand off with a minimal repro.
argument-hint: [bug-report]
---

# Regression Triage

Hand off a minimal, reproducible case instead of a vague bug report.

## Input

$ARGUMENTS

## How It Works

1. Reproduce the reported behavior locally before investigating further
2. Bisect the likely commit range using known-good and known-bad points
3. Narrow the repro to the smallest input that still triggers it
4. Identify the responsible change and its intended purpose
5. Hand off with the minimal repro and a suggested owner

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.