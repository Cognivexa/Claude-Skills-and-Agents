---
name: dependency-vuln-triage
description: Scans package manifests and lockfiles across npm, pip, and Maven for known CVEs, then ranks each finding by exploitability, reachability in your code, and available patch path.
argument-hint: [lockfile-or-manifest-path]
---

# Dependency Vulnerability Triage

Cuts through hundreds of CVE alerts to the handful that are actually exploitable in your codebase.

## Input

$ARGUMENTS

## How It Works

1. Parse manifests and lockfiles to build a full transitive dependency tree
2. Cross-reference every package version against known vulnerability advisories
3. Statically trace import graphs to check whether vulnerable code paths are actually reachable
4. Score each finding using exploitability, reachability, and patch-availability weights
5. Produce a ranked remediation list with exact upgrade targets and breaking-change warnings

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.