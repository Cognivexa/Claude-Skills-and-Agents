---
name: youtube-downloader
description: Downloads YouTube videos and their subtitles with configurable resolution, format, and audio-only options, handling both single videos and full playlists. It manages format selection and output naming so batches of downloads stay organized.
argument-hint: [youtube-url-or-playlist]
---

# YouTube Downloader

Turns a YouTube link into a saved file on disk, instead of a page you can only watch once.

## Input

$ARGUMENTS

## How It Works

1. Parse the given URL to detect whether it points to a single video or a playlist.
2. Query available formats and resolve the requested quality and container format.
3. Fetch the video stream and, where available, the subtitle track in the requested language.
4. Name and organize output files consistently, numbering playlist entries in order.
5. Report any videos that failed to download along with the reason.

## Staying Current

Training data has a cutoff; the external world this task touches (framework versions, API/pricing changes, platform policy, security advisories) usually doesn't wait for it. Before finalizing a recommendation that depends on something outside this conversation:
- If the task involves a fast-moving external target — a specific framework/CMS/platform version, a vendor's pricing or API, a compliance or policy detail — use WebSearch or WebFetch to confirm the current state before answering, not just at the start of the conversation but whenever the task shifts to a new external target.
- If the task is purely internal to this session (reviewing a diff, running tests, editing a file, managing git) — this step does not apply; do not force a web search where nothing external is at stake.
- If a search isn't available or comes back inconclusive, say so plainly and flag which specific claims might be dated, instead of presenting a training-data guess as current fact.