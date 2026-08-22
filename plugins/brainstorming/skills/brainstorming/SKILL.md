---
name: brainstorming
description: Runs a structured ideation pass before any code is written for a new feature, design, or architecture decision. It surfaces multiple distinct approaches, weighs their tradeoffs against the stated constraints, and requires explicit sign-off on a direction before implementation starts.
argument-hint: [feature-or-decision]
---

# Brainstorming

Turns the first hour of a project into a decision record instead of a head start on the wrong approach.

## Input

$ARGUMENTS

## How It Works

1. Restate the problem and constraints in plain terms and confirm them with the requester before generating options.
2. Draft at least three structurally different approaches, not variations on the same idea.
3. Score each approach against complexity, risk, performance, and maintenance cost.
4. Present the comparison as a short table and recommend one option with reasoning.
5. Wait for explicit approval or a chosen alternative before writing any implementation code.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.