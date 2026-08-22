---
name: asset-namer
description: Renames and sorts a messy folder of design exports into a consistent convention (project-type-variant-size-version) and rebuilds folder structure by asset type.
argument-hint: [source-folder]
---

# Asset Namer

Turns a chaotic export dump into a predictable, searchable asset library in one pass.

## Input

$ARGUMENTS

## How It Works

1. Scan the source folder and detect file type, dimensions, and existing naming hints.
2. Infer project, variant, and version tokens from filenames and parent folders.
3. Apply the naming pattern to generate a collision-free filename per asset.
4. Move files into type-based subfolders such as icons, banners, and photos.
5. Log a rename manifest mapping old paths to new ones for safe rollback.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.