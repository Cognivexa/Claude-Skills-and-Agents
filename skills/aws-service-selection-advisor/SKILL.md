---
name: aws-service-selection-advisor
description: Given a workload's traffic and data-access pattern, recommend the right AWS compute, database, and storage services with a real cost comparison — instead of defaulting to whatever is familiar.
argument-hint: [workload-requirements]
---

# AWS Service Selection Advisor

DynamoDB and Aurora alone cover roughly 90% of new AWS workloads, but the other 10% is where defaulting to a familiar service quietly costs the most — either in overpayment or in migration debt later.

## Try Asking

- "Should this workload use Lambda or Fargate?"

## Input

$ARGUMENTS

## How It Works

1. Classify the workload's traffic pattern (spiky, steady, predictable) and its data access pattern (relational, key-value, document, graph, time-series, vector)
2. Shortlist at least two viable services per layer (compute, database, storage) rather than jumping to one
3. Compare the shortlist on cost at the workload's actual expected scale, not list price at hello-world scale
4. Weigh integration fit — how cleanly each option connects to the rest of the AWS services already in use
5. Call out migration and lock-in risk explicitly for each option, especially purpose-built engines
6. Recommend one option with the tradeoffs stated, not a menu without a decision

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.