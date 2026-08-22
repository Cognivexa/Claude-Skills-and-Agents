---
name: onboarding-kit
description: A bundled collection of skills for new-hire onboarding: repo tour, glossary builder, and first-week task planner.
argument-hint: [repo-path]
---

# Onboarding Kit

A curated bundle so a new team member gets oriented without three days of Slack questions.

## Input

$ARGUMENTS

## How It Works

1. Generate a guided tour of the repository's key modules
2. Build a glossary of project-specific terms and acronyms
3. Draft a realistic first-week task plan with checkpoints
4. Link out to the relevant docs and dashboards for each area

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.