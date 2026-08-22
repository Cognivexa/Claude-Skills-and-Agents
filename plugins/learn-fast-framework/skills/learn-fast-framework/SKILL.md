---
name: learn-fast-framework
description: Transforms long-form content such as YouTube transcripts, articles, or tutorials into an actionable implementation plan, skipping straight past passive consumption. It applies a learn-by-doing framework that extracts concrete steps rather than summarizing the material for later re-reading.
argument-hint: [transcript-or-article]
---

# Learn Fast Framework

Turns a tutorial you'd normally just watch into a to-do list you can execute today.

## Input

$ARGUMENTS

## How It Works

1. Ingest the long-form content and identify the core skill or concept being taught.
2. Strip out anecdotes, tangents, and repetition to isolate the actionable material.
3. Break the actionable material into a sequence of concrete practice steps.
4. Attach a small, doable exercise to each step so the concept is applied immediately.
5. Flag prerequisites or gaps the learner should fill before starting the sequence.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.