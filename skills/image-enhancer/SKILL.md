---
name: image-enhancer
description: Improves the visual quality of images, especially screenshots, by upscaling resolution, sharpening blurred detail, and reducing compression artifacts such as banding and blockiness.
argument-hint: [image-file]
---

# Image Enhancer

Turns a blurry, compressed screenshot into something worth pasting into a document.

## Input

$ARGUMENTS

## How It Works

1. Inspect the source image to identify its resolution, format, and dominant quality issues.
2. Upscale the image using an interpolation method suited to its content, such as edge-aware scaling for text or UI screenshots.
3. Sharpen fine detail without amplifying existing noise or artifacts.
4. Reduce compression artifacts like blocking and color banding introduced by lossy formats.
5. Export the result at a specified resolution and format, comparing it side by side with the original on request.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.