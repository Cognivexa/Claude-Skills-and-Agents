---
name: security-questionnaire-responder
description: Drafts answers to vendor security questionnaires and SOC 2/ISO 27001 audit requests by pulling evidence from your existing policy docs, architecture diagrams, and control matrices.
argument-hint: [questionnaire-file]
---

# Security Questionnaire Responder

Turns a 200-question vendor security review from a week of scrambling into an afternoon of review.

## Input

$ARGUMENTS

## How It Works

1. Parse the incoming questionnaire into individual control and policy questions
2. Match each question against your indexed policy documents and control matrix
3. Draft an evidence-backed answer with citations to the source document and section
4. Flag unanswerable questions where no matching control or evidence exists yet
5. Compile the final response into the questionnaire's original format for submission

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.