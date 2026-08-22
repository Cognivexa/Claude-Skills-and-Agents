---
name: audit-evidence-collector
description: Organize evidence artifacts against a control list so audit prep isn't a last-minute scramble.
argument-hint: [control-list]
---

# Audit Evidence Collector

Know exactly which controls are missing evidence before the auditor asks.

## Input

$ARGUMENTS

## How It Works

1. Load the control list for the relevant framework
2. Match existing artifacts to each control
3. Flag controls with no evidence or stale evidence
4. Organize matched evidence by control for easy auditor review
5. Report the remaining gap list with a suggested collection owner

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.