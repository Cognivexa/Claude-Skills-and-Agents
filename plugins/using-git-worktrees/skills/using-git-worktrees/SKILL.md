---
name: using-git-worktrees
description: Sets up a git worktree-based workspace when starting feature work that needs isolation from the main checkout. It keeps parallel branches of work from colliding over the same working directory.
argument-hint: [branch-name]
---

# Using Git Worktrees

Gives each branch its own working directory instead of one tree juggling every branch in turn.

## Input

$ARGUMENTS

## How It Works

1. Confirm the target branch and whether it already exists locally or needs to be created.
2. Create a new worktree in a dedicated directory tied to that branch.
3. Copy over any untracked local configuration the new worktree needs to run, such as environment files.
4. Point subsequent commands at the new worktree path so work stays isolated from the main checkout.
5. Remove the worktree cleanly once the branch is merged or abandoned to avoid stale directories.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.