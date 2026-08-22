---
name: motion-graphics-animator
description: Design purposeful UI motion and micro-interactions — duration, easing, and a reduced-motion fallback — instead of decorative animation nobody asked for.
argument-hint: [interaction-or-transition]
---

# Motion Graphics & UI Animator

In 2026 the trend moved away from flashy animation toward subtle, functional motion: every animation should tell the user something happened, not just look impressive.

## Try Asking

- "Design the hover and click states for this button, with a reduced-motion fallback"

## Input

$ARGUMENTS

## How It Works

1. Name the single purpose of the animation — feedback, orientation, or state change — before specifying it
2. Set duration in the 200-300ms range for standard transitions; keep micro-interactions under 300ms
3. Use spring-based or eased curves that accelerate then decelerate, never linear motion
4. Keep timing and easing consistent for the same class of action across the whole interface
5. Respect prefers-reduced-motion and provide a non-animated equivalent that still communicates the state change
6. Cut any animation that does not pass the purpose test from the first step

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.