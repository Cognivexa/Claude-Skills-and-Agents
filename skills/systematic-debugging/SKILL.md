---
name: systematic-debugging
description: Applies a disciplined debugging process to any bug, failing test, or unexpected behavior before a fix is proposed. It reproduces the issue reliably, narrows the root cause through bisection-style isolation, and confirms the fix resolves the actual cause rather than a symptom.
argument-hint: [bug-or-failure]
---

# Systematic Debugging

Replaces guess-and-patch fixes with a narrowed-down, verified root cause.

## Input

$ARGUMENTS

## How It Works

1. Reproduce the failure with a minimal, repeatable case before touching any code.
2. Bisect the surrounding code, inputs, or recent commits to narrow down where the behavior diverges.
3. Form a specific hypothesis about the root cause and test it in isolation.
4. Implement the smallest fix that addresses the confirmed root cause, not just the visible symptom.
5. Re-run the original reproduction plus related tests to verify the failure is gone and nothing else broke.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.