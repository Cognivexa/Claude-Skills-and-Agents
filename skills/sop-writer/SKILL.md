---
name: sop-writer
description: Turn a described process into a numbered standard operating procedure with clear ownership at each step.
argument-hint: [process-description]
---

# SOP Writer

Write the SOP with the fewest steps that still actually work.

## Input

$ARGUMENTS

## How It Works

1. Extract each discrete step from the described process
2. Assign an explicit owner to each step
3. Cut redundant or purely historical steps
4. Document exceptions and edge cases separately from the happy path
5. Add a short verification step so completion is unambiguous

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.