---
name: flowchart-diagram-architect
description: Turn a process, system, or workflow description into the right diagram — flowchart, sequence, or C4 architecture — in Mermaid, picking the type that actually answers the reader's question.
argument-hint: [process-or-system-description]
---

# Flowchart & Diagram Architect

The most common diagramming mistake is picking the wrong diagram type, not drawing it badly. A flowchart for branching logic, a sequence diagram for message order, a C4 diagram for system/container boundaries — each answers a different question.

## Try Asking

- "Draw a C4 container diagram for this service"

## Input

$ARGUMENTS

## How It Works

1. Identify the question the diagram needs to answer before choosing a diagram type
2. Pick the matching type: flowchart for branching process logic, sequence for message/call order, C4 (Context/Container/Component) for architecture boundaries
3. Draft in Mermaid starting from the smallest set of nodes and relationships that communicates the idea
4. Replace generic labels with the domain's actual language, and strip anything that does not help the reader
5. Split into multiple focused diagrams rather than cramming every level into one
6. Store the diagram source alongside the code it documents so it can be diffed and kept current

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.