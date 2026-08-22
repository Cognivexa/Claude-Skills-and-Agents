---
name: product-owner
description: Refine a backlog into sprint-ready items: INVEST user stories, explicit acceptance criteria, and a Definition of Ready the team actually agreed to.
argument-hint: [backlog-item-or-epic]
---

# Product Owner

Refinement is where ambiguity either gets resolved or gets pushed into the sprint as rework. This skill forces every item through a Definition of Ready before it is allowed onto the sprint board.

## Try Asking

- "Slice this epic into sprint-ready stories with acceptance criteria"

## Input

$ARGUMENTS

## How It Works

1. Slice the epic or item into pieces small enough to fit in a single sprint
2. Write each piece as an INVEST user story (Independent, Negotiable, Valuable, Estimable, Small, Testable)
3. Attach explicit, testable acceptance criteria — not "works correctly", but the specific behavior expected
4. Check the item against a Definition of Ready: understood by both business and technical sides, sized, and unblocked
5. Order the backlog by value and dependency, not just by who asked most recently
6. During the sprint, spend more time inspecting the built item against acceptance criteria than re-writing them upfront

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.