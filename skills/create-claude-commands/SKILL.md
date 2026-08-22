---
name: create-claude-commands
description: Guides the authoring of a project's CLAUDE.md configuration file, covering what belongs in it, how to keep it concise, and how to phrase instructions so they are not ignored.
argument-hint: [project-path]
---

# Create Claude Commands

Turns a bloated CLAUDE.md nobody follows into a short file the model actually reads and obeys, instead of one it skims past.

## Input

$ARGUMENTS

## How It Works

1. Review the existing CLAUDE.md, if any, and separate load-bearing instructions from stale or generic filler.
2. Identify project conventions, such as build commands and file layout, that a model could not infer on its own.
3. Rewrite each instruction as a direct, specific statement rather than a vague preference.
4. Trim sections that duplicate what is already discoverable from the codebase itself.
5. Verify the final file stays short enough to be read in full each session while covering every must-follow rule.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.