---
name: ralph
description: Runs the same fixed prompt repeatedly against a task backlog until it is empty, relying on statelessness and idempotent checks rather than long-running memory between iterations. Named after the well-known autonomous-loop coding technique.
argument-hint: [task-backlog]
---

# Ralph

Clears a backlog one dumb, repeatable pass at a time instead of one clever, stateful marathon.

## Input

$ARGUMENTS

## How It Works

1. Read the current backlog and pick the next unfinished item using only what is on disk, not memory of prior runs.
2. Check whether that item is already done by inspecting real state, avoiding duplicate work.
3. Execute the fixed prompt against that single item and make the smallest change that completes it.
4. Update the backlog file to mark the item resolved before moving to the next one.
5. Repeat the same fixed loop until the backlog file reports no remaining items.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.