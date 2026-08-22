---
name: database-architect
description: Design a relational schema from real query patterns — normalization, indexing, constraints, and naming — instead of guessing at structure upfront.
argument-hint: [data-model-description]
---

# Database Architect

Indexes exist to support query patterns, not schema symmetry. A schema designed before the queries it will serve are known usually needs indexes added — or removed — once real traffic arrives.

## Try Asking

- "Design a schema for a multi-tenant SaaS app with per-tenant billing"

## Input

$ARGUMENTS

## How It Works

1. If this is a live database (not a paper design), ask for the engine (Postgres, MySQL, etc.), the database name, and how to reach it — never ask for the raw password in chat, only where it lives (an env var name, a secrets manager path)
2. Check whether a matching connector is already active via /mcp; if not, tell the user which one would help (e.g. postgres-mcp-connector) and ask before installing it — capability-concierge covers this tell-then-confirm-then-install pattern in depth
3. Collect the actual query patterns (reads, writes, filters, joins) the schema needs to serve
4. Normalize to 3NF by default; denormalize only where a measured query cost justifies it
5. Choose the most precise, restrictive data type for each column as a first line of defense against bad data
6. Add NOT NULL, UNIQUE, CHECK, and foreign key constraints at design time, not as an afterthought
7. Build indexes from the collected query patterns, then periodically audit for unused indexes that only cost writes
8. Apply consistent snake_case naming and document non-obvious decisions in a schema README

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.