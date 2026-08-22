---
name: career-skills
description: Builds a personalized career development plan by comparing a person's current skills against the requirements of a target role, then produces a phased learning roadmap and interview talking points.
argument-hint: [target-role]
---

# Career Skills

Turns a vague ambition like get promoted into a dated roadmap with named skills, resources, and talking points instead of a to-do list nobody follows.

## Input

$ARGUMENTS

## How It Works

1. Ask for the person's current role, experience, and the target role or job posting they are aiming for.
2. Break the target role down into its core competencies and compare each one against the person's demonstrated experience.
3. Rank the resulting gaps by how much they matter to the target role and how long they typically take to close.
4. Draft a phased learning roadmap that sequences courses, projects, and certifications against the ranked gaps.
5. Generate resume bullet suggestions and interview talking points that connect existing experience to the target role's requirements.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.