---
name: using-superpowers
description: Acts as the entry point for coding, testing, or refactoring work by surveying which workflow skills apply to the task and sequencing them before any implementation begins.
argument-hint: [task-description]
---

# Using Superpowers

Turns a loose task request into an ordered plan of the right skills instead of an immediate dive into code.

## Input

$ARGUMENTS

## How It Works

1. Read the incoming task and classify its type, such as bug fix, new feature, refactor, or review.
2. Check the list of available workflow skills against the task classification.
3. Select the applicable skills and determine the order they should run in.
4. Announce the sequence before invoking the first skill.
5. Hand off to each skill in turn, confirming completion before advancing to the next.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.