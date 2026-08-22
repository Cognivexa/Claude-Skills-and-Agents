---
name: deal-desk-checklist
description: Review a proposed deal against discount and approval policy before it goes to signature.
argument-hint: [deal-summary]
---

# Deal Desk Checklist

Catch policy violations before the deal reaches signature, not after.

## Input

$ARGUMENTS

## How It Works

1. Load the deal summary and the current approval policy thresholds
2. Check discount level against the approval matrix
3. Flag non-standard terms that need legal or finance sign-off
4. Verify required approvals are attached, not just requested
5. Report a clear pass/fail with the specific policy citation for any flag

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.