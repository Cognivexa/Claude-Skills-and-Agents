---
name: zettelkasten-notes
description: Capture atomic notes and link them into a Zettelkasten-style knowledge graph instead of a flat, unsearchable notes dump.
argument-hint: [note-text-or-file]
---

# Zettelkasten Notes

Turn raw notes into atomic, linkable knowledge instead of a pile of unstructured text.

## Input

$ARGUMENTS

## How It Works

1. Split incoming notes into single, atomic ideas
2. Check for existing related notes before creating a new one
3. Link each note to at least one existing note by idea, not by topic
4. Tag notes with retrievable, specific tags
5. Surface orphan notes with no links for review

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.