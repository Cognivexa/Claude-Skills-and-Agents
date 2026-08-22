---
name: social-crop-kit
description: Takes one source image and generates a full set of platform-ready crops (square, story, landscape, banner) using subject-aware framing so faces and focal points stay in frame.
argument-hint: [source-image]
---

# Social Crop Kit

One upload in, a full social media crop kit out, with nothing important cut off.

## Input

$ARGUMENTS

## How It Works

1. Load the source image and detect the primary subject or focal region.
2. Map the requested platforms to their required aspect ratios and dimensions.
3. Compute a crop window per ratio that keeps the focal region centered in frame.
4. Render each crop at the platform's native export resolution.
5. Package all variants into a labeled output folder ready for upload.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.