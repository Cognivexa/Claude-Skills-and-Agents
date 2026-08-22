---
name: infra-drift-detector
description: Compares a Terraform or Pulumi state file against the live cloud provider API to surface unmanaged changes, then generates a remediation plan to reconcile or import them.
argument-hint: [terraform-state-path]
---

# Infra Drift Detector

Finds the manual console changes nobody told the pipeline about, before they cause the next 2am incident.

## Input

$ARGUMENTS

## How It Works

1. Load the declared state file and enumerate every tracked resource and its expected attributes
2. Query the live cloud provider API for the current attributes of each tracked resource
3. Diff declared versus live state and classify each mismatch as drift, deletion, or orphan
4. Rank findings by blast radius, weighting production tags and public-facing resources highest
5. Generate terraform import or apply commands to bring state back into sync

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.