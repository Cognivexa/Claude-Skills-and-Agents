---
name: ci-pipeline-linter
description: Lints GitHub Actions, GitLab CI, and CircleCI YAML configs for slow, flaky, or insecure pipeline patterns such as unpinned actions, missing caching, and unbounded job timeouts.
argument-hint: [workflow-file-or-dir]
---

# CI Pipeline Linter

Catches the pipeline mistakes that quietly cost you build minutes and security posture before they ship.

## Input

$ARGUMENTS

## How It Works

1. Detect the CI provider from file structure and parse each workflow into a job graph
2. Check every third-party action or job reference against pinned-SHA and version-range rules
3. Flag missing timeout-minutes, concurrency groups, and dependency-caching steps
4. Simulate the job graph to surface redundant or serially-blocking steps that could run in parallel
5. Output a prioritized fix list with inline YAML patches ready to apply

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.