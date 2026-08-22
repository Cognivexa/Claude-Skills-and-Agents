---
name: meeting-notes-digest
description: Turn raw meeting notes or transcripts into decisions, action items with owners, and open questions.
argument-hint: [transcript-or-notes]
---

# Meeting Notes Digest

Separate decisions from discussion, and action items from vague intentions.

## Input

$ARGUMENTS

## How It Works

1. Read the full transcript or notes before summarizing anything
2. Extract decisions made, distinct from options merely discussed
3. Extract action items with an explicit owner and due date if stated
4. List open questions that were raised but not resolved
5. Flag any action item with no clear owner for follow-up

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.