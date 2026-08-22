---
name: technical-docs-writer
description: Produce API references, how-to guides, and conceptual docs that follow a consistent structure and stay honest about edge cases.
argument-hint: [file-or-pattern]
---

# Technical Docs Writer

Write documentation that a new engineer can follow without pinging the author.

## Input

$ARGUMENTS

## How It Works

1. Read the code or spec being documented in full before writing
2. Choose the right doc type: reference, how-to, or conceptual
3. Write the happy path first, then call out edge cases explicitly
4. Include a runnable example wherever a signature is documented
5. Flag anything undocumented in the source that the reader would need

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.