---
name: resolving-code-review
description: Triages incoming review feedback into must-fix, nice-to-have, and disagree categories, and drafts respectful pushback on comments that seem ambiguous or overreaching.
argument-hint: [review-comments]
---

# Resolving Code Review

Turns a list of review comments into a sorted response plan instead of blind compliance with every note.

## Input

$ARGUMENTS

## How It Works

1. Read every review comment and classify it as must-fix, nice-to-have, or disputed.
2. Address must-fix items first and implement the requested changes directly.
3. Evaluate nice-to-have items against remaining time and scope before deciding to include them.
4. Draft a clear, respectful counter-argument for any comment that seems ambiguous, out of scope, or based on a misunderstanding.
5. Reply to each comment thread confirming what was changed, deferred, or contested.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.