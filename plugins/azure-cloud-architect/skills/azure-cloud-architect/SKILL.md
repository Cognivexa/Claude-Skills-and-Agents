---
name: azure-cloud-architect
description: Stand up an Azure landing zone — management groups, policy, identity, networking — and apply the Well-Architected Framework's five pillars before workloads land on it.
argument-hint: [workload-or-environment-description]
---

# Azure Cloud Architect

A workload deployed before the landing zone exists inherits whatever ad hoc policy, logging, and network setup came before it. Azure's Cloud Adoption Framework exists so that foundation is decided once, not per project.

## Try Asking

- "Set up a landing zone for a new Azure subscription"

## Input

$ARGUMENTS

## How It Works

1. Establish the management group hierarchy before any subscription gets a workload
2. Apply a baseline policy set: enforce tagging, restrict allowed regions, deny public IPs by default
3. Centralize logging across subscriptions from day one, not after the first incident
4. Match workload placement to traffic pattern: serverless (Functions, Logic Apps) for event-driven, always-on VMs only for genuinely constant load
5. Set cost management budgets and alerts per subscription before spend, not after the invoice
6. Review the design against all five Well-Architected pillars — reliability, cost, operational excellence, performance, security

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.