---
name: web-artifacts-builder
description: Supplies a set of patterns for building self-contained web artifacts, such as dashboards, small tools, and multi-component apps, that run entirely from a single HTML file with no build step or external dependencies.
argument-hint: [app-idea]
---

# Web Artifacts Builder

Ships a working single-file app instead of a half-finished project scaffold.

## Input

$ARGUMENTS

## How It Works

1. Clarify the artifact type needed, whether a dashboard, form, game, or utility tool.
2. Select layout and interaction patterns proven to work well inside a single HTML document.
3. Inline all CSS and JavaScript directly in the file, avoiding any external build tooling.
4. Wire up state and interactivity using plain JavaScript or lightweight in-browser patterns only.
5. Test the artifact by opening it directly to confirm it renders and functions with zero setup steps.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.