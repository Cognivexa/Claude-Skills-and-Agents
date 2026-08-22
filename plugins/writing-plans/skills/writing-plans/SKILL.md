---
name: writing-plans
description: Invoked before implementation work begins on any multi-step coding task, this skill converts a spec or requirement into an ordered, checkable plan with explicit in-scope and out-of-scope boundaries. It forces scope discipline up front so execution does not drift once code changes start.
argument-hint: [spec-or-requirement]
---

# Writing Plans

Turns a vague requirement into a checklist with edges, instead of a pile of code that drifts as it goes.

## Input

$ARGUMENTS

## How It Works

1. Read the spec or requirement in full before writing a single line of code.
2. Identify the discrete milestones needed to satisfy the requirement and order them by dependency.
3. Draft explicit in-scope and out-of-scope statements so later work cannot silently expand.
4. Convert each milestone into a checkable task with a clear definition of done.
5. Surface open questions or ambiguous requirements as blocking items before implementation starts.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.