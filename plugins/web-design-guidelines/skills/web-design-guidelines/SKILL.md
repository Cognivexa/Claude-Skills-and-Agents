---
name: web-design-guidelines
description: Audits a web interface or design mockup against a curated set of modern UI heuristics covering spacing, typography, contrast, hierarchy, and responsive behavior, then reports concrete fixes.
argument-hint: [file-or-folder]
---

# Web Design Guidelines

Turns a subjective is this UI good conversation into a checklist audit with line-level fixes instead of vague taste-based feedback.

## Input

$ARGUMENTS

## How It Works

1. Scan the provided markup, styles, or screenshot for spacing, alignment, and grid consistency issues.
2. Check text contrast ratios and font sizing against accessibility and legibility thresholds.
3. Evaluate visual hierarchy by checking whether heading weights, color, and whitespace correctly guide the eye.
4. Test layout behavior at common breakpoints and flag elements that break, overflow, or become unreadable.
5. Compile violations into a prioritized list, each paired with a specific CSS or markup change that resolves it.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.