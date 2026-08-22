---
name: verification-before-completion
description: Blocks premature claims of a task being done, fixed, or passing by requiring the relevant tests, build, or lint to actually be run and their output cited as evidence.
argument-hint: [completed-task]
---

# Verification Before Completion

Replaces confident assertions of success with actual command output as proof.

## Input

$ARGUMENTS

## How It Works

1. Identify which commands, such as the test suite, build, or linter, are relevant to the change made.
2. Run each identified command and capture its full output.
3. Compare the output against the expected passing state, not against memory of prior runs.
4. Flag any failures, warnings, or skipped tests instead of glossing over them.
5. Only report the task as complete once the cited evidence supports that claim.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.