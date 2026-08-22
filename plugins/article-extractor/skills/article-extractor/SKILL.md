---
name: article-extractor
description: Extracts clean article content from a URL such as a blog post, news article, or tutorial, stripping ads, navigation, and other boilerplate. It saves the resulting readable text for downstream use such as summarizing or archiving.
argument-hint: [article-url]
---

# Article Extractor

Pulls out the actual article, instead of the ads and navigation wrapped around it.

## Input

$ARGUMENTS

## How It Works

1. Fetch the raw HTML from the given URL.
2. Identify the main content block by filtering out navigation, ads, and sidebar elements.
3. Preserve heading structure, lists, and inline links within the extracted content.
4. Clean up leftover boilerplate such as newsletter prompts and share buttons.
5. Save the resulting readable text to a file for downstream use.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.