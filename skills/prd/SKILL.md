---
name: prd
description: Generates a Product Requirements Document for a proposed feature, covering the problem statement, goals and non-goals, user stories, and success metrics. It structures ambiguous feature ideas into a document a team can review and sign off on.
argument-hint: [feature-idea]
---

# PRD

Turns a rough feature idea into a document stakeholders can sign off on, instead of a Slack thread nobody can reference later.

## Input

$ARGUMENTS

## How It Works

1. Clarify the problem the feature is meant to solve and who experiences it.
2. Draft explicit goals and non-goals to bound the feature's scope.
3. Write user stories that describe the feature from the perspective of each affected user type.
4. Define measurable success metrics tied to the stated goals.
5. Assemble the sections into a single reviewable document with open questions called out separately.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.