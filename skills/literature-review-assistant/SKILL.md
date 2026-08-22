---
name: literature-review-assistant
description: Guide for structuring a literature review: source triage, claim mapping, and gap identification across academic and industry sources.
argument-hint: [topic-or-question]
---

# Literature Review Assistant

Structure a rigorous literature review instead of a summarized reading list.

## Input

$ARGUMENTS

## How It Works

1. Clarify the research question and scope boundaries
2. Triage candidate sources by relevance and recency
3. Extract claims and map agreement/disagreement across sources
4. Identify gaps the existing literature does not resolve
5. Draft a synthesis organized by theme, not by source

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.