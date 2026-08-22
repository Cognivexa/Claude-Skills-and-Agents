---
name: content-research-writer
description: Assists in producing high-quality long-form content by researching the topic, adding supporting citations, sharpening the opening hook, and tightening formatting and titles. It works on an existing draft or outline rather than generating content from nothing.
argument-hint: [draft-or-outline]
---

# Content Research Writer

Sharpens a draft into something worth publishing, instead of leaving it as a rough first pass.

## Input

$ARGUMENTS

## How It Works

1. Read the existing draft or outline and identify claims that need supporting evidence.
2. Research and attach credible citations for unsupported or weak claims.
3. Rewrite the opening hook to establish stakes and pull the reader in immediately.
4. Tighten formatting, headings, and paragraph length for scannability.
5. Test and refine the title against the actual content of the piece.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.