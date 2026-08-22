---
name: vendor-contract-tracker
description: Extract renewal dates, notice periods, and auto-renewal terms from contract text into a tracked summary.
argument-hint: [contract-file]
---

# Vendor Contract Tracker

Never let an auto-renewal clause be a surprise again.

## Input

$ARGUMENTS

## How It Works

1. Read the full contract text, not just the summary page
2. Extract renewal date, notice period, and auto-renewal terms
3. Flag ambiguous or unusually short notice periods
4. Calculate the actual cancellation deadline from the notice period
5. Summarize key terms in a consistent, comparable format

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.