---
name: create-slash-commands
description: Provides expert guidance for authoring Claude Code slash commands, covering front-matter fields, argument-hint conventions, ARGUMENTS usage, and keeping each command focused on a single job.
argument-hint: [command-name]
---

# Create Slash Commands

Turns a recurring prompt copy-pasted from chat history into a proper reusable command instead of another paragraph retyped every time.

## Input

$ARGUMENTS

## How It Works

1. Clarify the single job the command should perform and reject scope creep beyond that job.
2. Draft the front-matter, including a clear description and an argument-hint that matches expected input.
3. Write the command body so it substitutes ARGUMENTS cleanly and handles the no-argument case gracefully.
4. Decide whether the command should run inline or delegate to a subagent, based on its expected output length.
5. Test the command with representative arguments and tighten the wording until behavior is predictable.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.