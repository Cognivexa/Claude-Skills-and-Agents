---
name: create-agent-skills
description: Provides rigorous guidance for structuring and refining Claude Agent Skills, covering SKILL.md authoring, writing accurate when-to-trigger descriptions, and keeping a skill's scope narrow.
argument-hint: [skill-name]
---

# Create Agent Skills

Turns a skill idea into a SKILL.md that actually triggers when it should instead of one that gets skipped or fires on everything.

## Input

$ARGUMENTS

## How It Works

1. Define the single problem the skill solves and write it as a clear one-sentence description.
2. Draft trigger conditions specific enough to fire on relevant requests without matching unrelated ones.
3. Structure the SKILL.md body into scannable sections that a model can follow step by step mid-task.
4. Remove instructions that duplicate general model knowledge and keep only what is specific to this skill.
5. Review the finished skill against edge cases to confirm it neither over-triggers nor under-triggers.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.