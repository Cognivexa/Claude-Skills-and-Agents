---
name: rest-api-scaffolder
description: Scaffold a REST resource end to end: route, handler, validation schema, and tests, following the project's existing conventions.
argument-hint: [resource-name]
---

# REST API Scaffolder

Generate a new REST resource that matches existing project conventions instead of inventing new ones.

## Input

$ARGUMENTS

## How It Works

1. Detect the project's existing routing, validation, and test conventions
2. Generate route, handler, and schema files matching that pattern
3. Wire the resource into the router and dependency injection, if used
4. Generate request/response tests covering success and validation failure
5. Run the test suite and report any convention mismatches found

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.