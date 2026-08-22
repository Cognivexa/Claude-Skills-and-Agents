---
name: alt-text-composer
description: Generates concise, screen-reader-friendly alt text for batches of images by describing subject, action, and context while stripping redundant phrasing like 'image of'.
argument-hint: [image-folder]
---

# Alt Text Composer

Makes an entire image library accessible without writing a single description by hand.

## Input

$ARGUMENTS

## How It Works

1. Scan the target folder and queue all supported image files.
2. Analyze each image for subject, setting, and notable action or embedded text.
3. Draft alt text under a configurable character limit, dropping filler phrases.
4. Flag purely decorative images for empty alt attributes instead of descriptions.
5. Write results to a CSV mapping filename to alt text for direct CMS import.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.