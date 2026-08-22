---
name: prompt-chain-builder
description: Design multi-step prompt chains with explicit inputs/outputs per step, so failures are traceable to one stage.
argument-hint: [task-description]
---

# Prompt Chain Builder

Break a fuzzy multi-step task into named stages with clear inputs and outputs.

## Input

$ARGUMENTS

## How It Works

1. Decompose the task into stages with a single clear responsibility each
2. Define the exact input and output shape for every stage
3. Add a validation check between stages to catch drift early
4. Recommend where a stage should be a schema-constrained call
5. Document the chain so failures can be traced to one stage

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.