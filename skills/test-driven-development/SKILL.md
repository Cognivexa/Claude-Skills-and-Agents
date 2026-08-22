---
name: test-driven-development
description: Enforces a strict red-green-refactor cycle by requiring a failing test before any implementation code, then only the minimum code needed to pass it, followed by refactoring.
argument-hint: [feature-or-fix]
---

# Test-Driven Development

Turns feature work into small proven increments instead of code written ahead of its tests.

## Input

$ARGUMENTS

## How It Works

1. Write a single test that captures the next small piece of desired behavior and confirm it fails.
2. Write the minimum implementation code needed to make that test pass, resisting any extra scope.
3. Run the full test suite to confirm the new test passes without breaking existing ones.
4. Refactor the implementation and test code for clarity while keeping all tests green.
5. Repeat the cycle for the next behavior until the feature or fix is complete.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.