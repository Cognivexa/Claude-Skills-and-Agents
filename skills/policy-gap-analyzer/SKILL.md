---
name: policy-gap-analyzer
description: Compare an internal policy document against a named framework or checklist and report specific gaps.
argument-hint: [policy-doc] [framework-name]
---

# Policy Gap Analyzer

Report specific, cited gaps instead of a vague "mostly compliant" verdict.

## Input

$ARGUMENTS

## How It Works

1. Load the policy document and the named framework or checklist
2. Match each framework requirement to a specific policy clause
3. Flag requirements with no matching clause as a gap
4. Flag clauses that partially address a requirement, not just missing ones
5. Report gaps with the specific requirement cited, ranked by risk

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.