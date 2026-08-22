---
name: executing-plans
description: Tracks execution of a previously written multi-step development plan by checkpointing progress after each step and resuming cleanly if the session is interrupted.
argument-hint: [plan-file]
---

# Executing Plans

Turns a written plan into a resumable, trackable execution instead of a document that goes stale mid-run.

## Input

$ARGUMENTS

## How It Works

1. Load the plan and confirm each step's scope, order, and completion criteria.
2. Execute the next incomplete step and validate it against its stated criteria.
3. Record the step as complete in a checkpoint file before moving to the next one.
4. On resume after an interruption, read the checkpoint file to find the last completed step.
5. Continue execution from that point without repeating or skipping any step.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.