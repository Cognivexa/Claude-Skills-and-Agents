---
name: requirement-analysis
description: Extract and structure requirements from any source — a website URL, PDF, Word doc, Excel sheet, PowerPoint deck, or plain text — into a traceable, testable requirements set.
argument-hint: [source-url-or-file]
---

# Requirement Analysis

Requirements buried in a 40-slide deck or a scraped webpage are not requirements yet — they are raw material. This skill turns any source format into requirements written at a consistent altitude: what the system must do, not how it will be built.

## Try Asking

- "Extract the requirements from this PDF spec and flag anything contradictory"

## Input

$ARGUMENTS

## How It Works

1. Ingest the source regardless of format — fetch and parse the URL, or read the PDF/DOCX/XLSX/PPTX/TXT file
2. Extract every explicit and implied requirement statement, keeping a pointer back to its exact source location
3. Classify each as functional, non-functional (performance, security, availability), or a constraint
4. Rewrite each at a consistent altitude — what the system must do, never a specific database, framework, or UI choice
5. Flag contradictions, gaps, and requirements written at the wrong level of detail for stakeholder review
6. Build a traceability matrix linking each requirement back to its source and forward to the backlog item that will implement it

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.