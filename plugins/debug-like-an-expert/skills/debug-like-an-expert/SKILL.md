---
name: debug-like-an-expert
description: Guides systematic root-cause investigation for difficult bugs by requiring full context gathering, multiple competing hypotheses, and isolated testing of each one before any fix is attempted.
argument-hint: [bug-description]
---

# Debug Like An Expert

Turns guess-and-check debugging into a disciplined investigation instead of a lucky patch.

## Input

$ARGUMENTS

## How It Works

1. Collect the full error output, stack trace, logs, and recent changes surrounding the failure.
2. Reproduce the bug reliably before touching any code.
3. Draft at least three distinct hypotheses for the root cause, ranked by plausibility.
4. Design a minimal test or probe for the top hypothesis and run it in isolation.
5. Discard disproven hypotheses, refine the fix, and confirm the corrected behavior against the original reproduction case.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.