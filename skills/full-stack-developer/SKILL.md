---
name: full-stack-developer
description: Ship a feature end-to-end — data model, API contract, UI, auth, and tests — as one coherent change instead of disconnected frontend/backend work.
argument-hint: [feature-description]
---

# Full Stack Developer

Full-stack work fails at the seams: a data model that does not match the API contract, an API that does not match what the UI needs, auth checked in one layer but not the other. This skill designs the seams first.

## Try Asking

- "Add a 'forgot password' flow: API endpoint, database migration, and the UI form"

## Input

$ARGUMENTS

## How It Works

1. Map the feature to a data model change before writing any endpoint or component
2. Design the API contract (REST or GraphQL) and agree on it before implementing either side
3. Implement the backend first — model, endpoint, authorization — then the UI against the real contract
4. Wire authentication/authorization consistently at the API layer, not just hidden in the UI
5. Write tests across the seam: an API contract test plus a UI test that hits the real endpoint
6. Check the change against 12-factor basics (config via env, no state on the app server, logs to stdout) before calling it deployable

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.