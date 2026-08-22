---
name: git-pushing
description: Stages, commits, and pushes changes using well-formed conventional commit messages. It checks first for unrelated uncommitted work in the tree so it does not get swept into the same commit by accident.
argument-hint: [commit-message]
---

# Git Pushing

Commits what belongs together and leaves everything else exactly where it was.

## Input

$ARGUMENTS

## How It Works

1. Run a status check to separate changes relevant to the current task from unrelated modifications.
2. Stage only the files tied to the current change, never a blanket add of the whole tree.
3. Draft a conventional commit message with the correct type, scope, and a why-focused summary.
4. Create the commit and confirm it was recorded before attempting to push.
5. Push to the tracked remote branch and report the resulting commit hash and branch status.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.