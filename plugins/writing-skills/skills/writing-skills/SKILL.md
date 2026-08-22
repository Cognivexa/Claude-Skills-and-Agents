---
name: writing-skills
description: Invoked when authoring a new Claude skill, editing an existing one, or auditing one before deployment, this skill checks the SKILL.md front matter, trigger description, and scope boundaries against common authoring mistakes. It flags vague triggers, missing metadata, and scope creep before the skill ships.
argument-hint: [skill-directory]
---

# Writing Skills

Catches a badly triggered or bloated skill before it ships, instead of after it misfires in production.

## Input

$ARGUMENTS

## How It Works

1. Parse the SKILL.md front matter and confirm required fields are present and correctly formatted.
2. Evaluate the trigger description for specificity, flagging wording too vague to reliably fire.
3. Check the skill's stated scope against its actual instructions for mismatches or creep.
4. Compare structure and tone against known good skills to catch inconsistent conventions.
5. Produce a list of concrete fixes ranked by how likely each is to cause a misfire.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.