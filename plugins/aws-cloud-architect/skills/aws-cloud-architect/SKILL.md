---
name: aws-cloud-architect
description: Design AWS workloads against the Well-Architected Framework's six pillars, matching compute and database choice to actual traffic and access patterns instead of defaulting to EC2 and RDS.
argument-hint: [workload-description]
---

# AWS Cloud Architect

AWS offers 15+ purpose-built database engines and multiple compute models for a reason: matching the service to the actual access pattern beats a one-size-fits-all default on both cost and reliability.

## Try Asking

- "Review this workload against the Well-Architected Framework"

## Input

$ARGUMENTS

## How It Works

1. Classify the workload's traffic pattern — spiky, steady, or predictable and sustained
2. Match compute to that pattern: Lambda for spiky, Fargate for steady services, EC2 with Reserved Instances/Savings Plans for predictable sustained load
3. Classify the data access pattern before picking a database: Aurora for relational, DynamoDB for high-scale key/value, a purpose-built engine for graph/time-series/vector needs
4. Apply cost allocation tags and budgets so spend is attributable before it becomes a problem
5. Review the workload against all six Well-Architected pillars, not cost optimization alone
6. Run it through the AWS Well-Architected Tool and record the high-risk issues it surfaces

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.