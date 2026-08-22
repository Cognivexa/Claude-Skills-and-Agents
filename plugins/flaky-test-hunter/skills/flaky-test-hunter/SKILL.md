---
name: flaky-test-hunter
description: Identify flaky tests from CI history, isolate the non-determinism, and propose a fix instead of a blanket retry.
argument-hint: [ci-log-or-test-path]
---

# Flaky Test Hunter

Find the actual source of non-determinism instead of papering over it with retries.

## Input

$ARGUMENTS

## How It Works

1. Scan CI history for tests with inconsistent pass/fail patterns
2. Reproduce the failure locally with repeated or randomized runs
3. Isolate the non-determinism: timing, ordering, shared state, or environment
4. Propose a fix that removes the root cause, not a retry wrapper
5. Verify the fix with a stress-test run before closing it out

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.