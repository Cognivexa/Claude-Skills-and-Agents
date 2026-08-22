---
name: secrets-in-code-scanner
description: Sweeps repository history and working tree for hardcoded API keys, tokens, and credentials using entropy analysis and provider-specific pattern matching, then generates revocation steps.
argument-hint: [repo-path]
---

# Secrets In Code Scanner

Finds the API key your teammate committed three months ago before an attacker does.

## Input

$ARGUMENTS

## How It Works

1. Walk the full git history and current working tree file by file
2. Run entropy analysis alongside provider-specific regex signatures for known key formats
3. Filter out placeholder and test-fixture values to cut false positives
4. Trace each confirmed secret to its commit, author, and first-exposed date
5. Output a revocation checklist with provider-specific rotation links per finding

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.