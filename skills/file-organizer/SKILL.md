---
name: file-organizer
description: Organizes files and folders by reading their actual content rather than trusting filenames or extensions alone. It flags duplicate and near-duplicate files and proposes a cleaner folder structure grouped by topic and purpose.
argument-hint: [folder-path]
---

# File Organizer

Sorts by what a file actually contains instead of what it happens to be named.

## Input

$ARGUMENTS

## How It Works

1. Scan the target folder recursively and sample the content of each file, not just its name.
2. Cluster files by topic, project, and document type using content similarity.
3. Identify exact and near-duplicate files by comparing content hashes and text overlap.
4. Propose a revised folder hierarchy with clear category names and flag files that do not fit anywhere.
5. Apply the reorganization only after the user confirms the proposed structure and duplicate list.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.