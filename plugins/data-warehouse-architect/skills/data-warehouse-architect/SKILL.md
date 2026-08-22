---
name: data-warehouse-architect
description: Design a Kimball star-schema consumption layer on a medallion (bronze/silver/gold) lakehouse, with ELT transformations managed as version-controlled dbt models.
argument-hint: [reporting-need-or-source-systems]
---

# Data Warehouse Architect

Most mature 2026 warehouse architectures pair an Inmon-style governed core with a Kimball-style star schema on top: normalized and conformed in Silver, denormalized and fast in Gold, so analysts get speed without the warehouse losing traceability to source.

## Try Asking

- "Design a star schema for order and shipment fact tables"

## Input

$ARGUMENTS

## How It Works

1. Define the grain of each fact table first — the exact thing one row represents
2. Model facts as measures and foreign keys only; keep dimension tables wide with descriptive attributes
3. Land raw source data unchanged in a Bronze layer, conform it in Silver, and expose the star schema in Gold
4. Keep every dimension one join from the fact table (star schema) unless a specific case justifies snowflaking
5. Manage all transformations as version-controlled SQL (ELT via dbt) rather than a black-box ETL job
6. Document lineage from source table through Silver to the Gold model consumers actually query

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.