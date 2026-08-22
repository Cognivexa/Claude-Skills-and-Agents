---
name: mobile-bundle-size-audit
description: Analyzes an APK/AAB or IPA build artifact to break down size by module, asset type, and third-party library, then diffs against the previous release to flag regressions. Suggests concrete trims such as duplicate asset removal, unused resource stripping, and lazy-loadable modules.
argument-hint: [build-artifact-path]
---

# Mobile Bundle Size Auditor

Finds exactly what's bloating your app and how much each fix would save.

## Input

$ARGUMENTS

## How It Works

1. Unpack the APK/AAB or IPA build artifact
2. Measure size contribution per module, asset folder, and dependency
3. Compare against the previous build's stored size snapshot
4. Flag size regressions above a configurable threshold
5. Recommend concrete trims: duplicate assets, unused resources, lazy modules

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.