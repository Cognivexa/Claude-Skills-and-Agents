---
name: deep-research
description: Performs autonomous multi-step research on a given topic by decomposing the question into sub-questions, gathering sources for each, and synthesizing the results into a cited report. It is suited to open-ended questions that require pulling together information from multiple independent sources.
argument-hint: [research-question]
---

# Deep Research

Runs an entire research pass end to end, instead of stopping after the first search result.

## Input

$ARGUMENTS

## How It Works

1. Break the research question down into a set of specific, answerable sub-questions.
2. Search for and gather sources addressing each sub-question independently.
3. Evaluate source credibility and discard low-quality or contradictory outliers.
4. Synthesize findings across sub-questions into a coherent narrative.
5. Compile a final report with inline citations linking each claim back to its source.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.