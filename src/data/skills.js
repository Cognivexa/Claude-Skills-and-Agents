export const SKILL_CATEGORIES = [
  'Research & Learning',
  'Knowledge Management',
  'Writing & Docs',
  'Media & YouTube',
  'Code & Dev',
  'Data & Analysis',
  'Debug & Test',
  'Utility',
  'Collections',
  'Product',
  'Compliance',
  'C-Level Advisory',
  'Business Operations',
  'Commercial & Finance',
  'DevOps',
  'Security',
  'Mobile Development',
  'Git & Version Control',
  'AI Engineering',
  'Media & Graphics',
]

export const SKILLS = [
  {
    slug: 'literature-review-assistant',
    name: 'Literature Review Assistant',
    author: 'Cognivexa',
    category: 'Research & Learning',
    stars: 412,
    forks: 38,
    addedDate: '2026-01-18',
    icon: '📚',
    description:
      'Guide for structuring a literature review: source triage, claim mapping, and gap identification across academic and industry sources.',
    argumentHint: '[topic-or-question]',
    tags: ['research', 'academic', 'synthesis'],
    intro: 'Structure a rigorous literature review instead of a summarized reading list.',
    howItWorks: [
      'Clarify the research question and scope boundaries',
      'Triage candidate sources by relevance and recency',
      'Extract claims and map agreement/disagreement across sources',
      'Identify gaps the existing literature does not resolve',
      'Draft a synthesis organized by theme, not by source',
    ],
    files: ['skills/literature-review-assistant/SKILL.md'],
  },
  {
    slug: 'zettelkasten-notes',
    name: 'Zettelkasten Notes',
    author: 'Cognivexa',
    category: 'Knowledge Management',
    stars: 289,
    forks: 21,
    addedDate: '2026-01-05',
    icon: '🗂️',
    description:
      'Capture atomic notes and link them into a Zettelkasten-style knowledge graph instead of a flat, unsearchable notes dump.',
    argumentHint: '[note-text-or-file]',
    tags: ['notes', 'zettelkasten', 'knowledge-graph'],
    intro: 'Turn raw notes into atomic, linkable knowledge instead of a pile of unstructured text.',
    howItWorks: [
      'Split incoming notes into single, atomic ideas',
      'Check for existing related notes before creating a new one',
      'Link each note to at least one existing note by idea, not by topic',
      'Tag notes with retrievable, specific tags',
      'Surface orphan notes with no links for review',
    ],
    files: ['skills/zettelkasten-notes/SKILL.md'],
  },
  {
    slug: 'technical-docs-writer',
    name: 'Technical Docs Writer',
    author: 'Cognivexa',
    category: 'Writing & Docs',
    stars: 1204,
    forks: 156,
    addedDate: '2026-02-08',
    icon: '📄',
    description:
      'Produce API references, how-to guides, and conceptual docs that follow a consistent structure and stay honest about edge cases.',
    argumentHint: '[file-or-pattern]',
    tags: ['documentation', 'api-reference', 'style'],
    intro: 'Write documentation that a new engineer can follow without pinging the author.',
    howItWorks: [
      'Read the code or spec being documented in full before writing',
      'Choose the right doc type: reference, how-to, or conceptual',
      'Write the happy path first, then call out edge cases explicitly',
      'Include a runnable example wherever a signature is documented',
      'Flag anything undocumented in the source that the reader would need',
    ],
    files: ['skills/technical-docs-writer/SKILL.md', 'skills/technical-docs-writer/templates/reference.md'],
  },
  {
    slug: 'youtube-script-planner',
    name: 'YouTube Script Planner',
    author: 'Cognivexa',
    category: 'Media & YouTube',
    stars: 567,
    forks: 44,
    addedDate: '2026-01-25',
    icon: '🎬',
    description:
      'Plan a YouTube script with a retention-focused hook, timestamped beats, and a CTA placed where drop-off is lowest.',
    argumentHint: '[video-topic]',
    tags: ['youtube', 'scriptwriting', 'retention'],
    intro: 'Plan videos around retention curves, not just a topic outline.',
    howItWorks: [
      'Define the single promise the video makes in the first 15 seconds',
      'Break the script into beats with a hook every 30-45 seconds',
      'Timestamp each beat so pacing can be reviewed before filming',
      'Place the CTA where retention data suggests, not just at the end',
      'Draft a thumbnail-and-title pair aligned with the hook',
    ],
    files: ['skills/youtube-script-planner/SKILL.md'],
  },
  {
    slug: 'rest-api-scaffolder',
    name: 'REST API Scaffolder',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 2318,
    forks: 301,
    addedDate: '2026-02-12',
    icon: '🧱',
    description:
      'Scaffold a REST resource end to end: route, handler, validation schema, and tests, following the project\'s existing conventions.',
    argumentHint: '[resource-name]',
    tags: ['scaffolding', 'rest', 'codegen'],
    intro: 'Generate a new REST resource that matches existing project conventions instead of inventing new ones.',
    howItWorks: [
      'Detect the project\'s existing routing, validation, and test conventions',
      'Generate route, handler, and schema files matching that pattern',
      'Wire the resource into the router and dependency injection, if used',
      'Generate request/response tests covering success and validation failure',
      'Run the test suite and report any convention mismatches found',
    ],
    files: ['skills/rest-api-scaffolder/SKILL.md', 'skills/rest-api-scaffolder/templates/handler.ts'],
  },
  {
    slug: 'spreadsheet-insights',
    name: 'Spreadsheet Insights',
    author: 'Cognivexa',
    category: 'Data & Analysis',
    stars: 890,
    forks: 62,
    addedDate: '2026-01-11',
    icon: '📈',
    description:
      'Turn a raw spreadsheet into a short set of defensible insights, with the underlying calculation shown for each claim.',
    argumentHint: '[spreadsheet-file]',
    tags: ['spreadsheets', 'analysis', 'reporting'],
    intro: 'Every insight ships with its calculation attached, so nobody has to trust a number blindly.',
    howItWorks: [
      'Profile the data for missing values, outliers, and type mismatches',
      'Identify the two or three questions the data can actually answer',
      'Compute each insight and show the underlying formula or query',
      'Flag any insight that depends on a small or biased sample',
      'Summarize findings in plain language before the supporting tables',
    ],
    files: ['skills/spreadsheet-insights/SKILL.md'],
  },
  {
    slug: 'flaky-test-hunter',
    name: 'Flaky Test Hunter',
    author: 'Cognivexa',
    category: 'Debug & Test',
    stars: 1540,
    forks: 118,
    addedDate: '2026-02-15',
    icon: '🎯',
    description:
      'Identify flaky tests from CI history, isolate the non-determinism, and propose a fix instead of a blanket retry.',
    argumentHint: '[ci-log-or-test-path]',
    tags: ['testing', 'ci', 'flakiness'],
    intro: 'Find the actual source of non-determinism instead of papering over it with retries.',
    howItWorks: [
      'Scan CI history for tests with inconsistent pass/fail patterns',
      'Reproduce the failure locally with repeated or randomized runs',
      'Isolate the non-determinism: timing, ordering, shared state, or environment',
      'Propose a fix that removes the root cause, not a retry wrapper',
      'Verify the fix with a stress-test run before closing it out',
    ],
    files: ['skills/flaky-test-hunter/SKILL.md'],
  },
  {
    slug: 'file-organizer-pro',
    name: 'File Organizer Pro',
    author: 'Cognivexa',
    category: 'Utility',
    stars: 733,
    forks: 55,
    addedDate: '2026-01-08',
    icon: '🗄️',
    description:
      'Organize files and folders by understanding context and content, suggesting a clearer structure and flagging duplicates.',
    argumentHint: '[directory]',
    tags: ['file-management', 'organization', 'dedupe'],
    intro: 'Understand what files actually are before moving them, not just their extensions.',
    howItWorks: [
      'Scan the target directory and classify files by content and context',
      'Detect likely duplicates and near-duplicates',
      'Propose a folder structure grouped by project or purpose',
      'Ask for confirmation before any move, rename, or delete',
      'Log every change made so it can be reversed',
    ],
    files: ['skills/file-organizer-pro/SKILL.md'],
  },
  {
    slug: 'onboarding-kit',
    name: 'Onboarding Kit',
    author: 'Cognivexa',
    category: 'Collections',
    stars: 344,
    forks: 29,
    addedDate: '2026-01-20',
    icon: '📦',
    description:
      'A bundled collection of skills for new-hire onboarding: repo tour, glossary builder, and first-week task planner.',
    argumentHint: '[repo-path]',
    tags: ['onboarding', 'collection', 'bundle'],
    intro: 'A curated bundle so a new team member gets oriented without three days of Slack questions.',
    howItWorks: [
      'Generate a guided tour of the repository\'s key modules',
      'Build a glossary of project-specific terms and acronyms',
      'Draft a realistic first-week task plan with checkpoints',
      'Link out to the relevant docs and dashboards for each area',
    ],
    files: [
      'skills/onboarding-kit/SKILL.md',
      'skills/onboarding-kit/repo-tour.md',
      'skills/onboarding-kit/glossary.md',
    ],
  },
  {
    slug: 'prompt-chain-builder',
    name: 'Prompt Chain Builder',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 1876,
    forks: 203,
    addedDate: '2026-02-03',
    icon: '🔗',
    description:
      'Design multi-step prompt chains with explicit inputs/outputs per step, so failures are traceable to one stage.',
    argumentHint: '[task-description]',
    tags: ['prompting', 'llm', 'pipelines'],
    intro: 'Break a fuzzy multi-step task into named stages with clear inputs and outputs.',
    howItWorks: [
      'Decompose the task into stages with a single clear responsibility each',
      'Define the exact input and output shape for every stage',
      'Add a validation check between stages to catch drift early',
      'Recommend where a stage should be a schema-constrained call',
      'Document the chain so failures can be traced to one stage',
    ],
    files: ['skills/prompt-chain-builder/SKILL.md'],
  },
  {
    slug: 'dataset-cleaner',
    name: 'Dataset Cleaner',
    author: 'Cognivexa',
    category: 'Data & Analysis',
    stars: 654,
    forks: 47,
    addedDate: '2026-01-14',
    icon: '🧹',
    description:
      'Clean a messy dataset: standardize types, handle missing values deliberately, and log every transformation applied.',
    argumentHint: '[dataset-file]',
    tags: ['data-cleaning', 'etl', 'quality'],
    intro: 'Every cleaning decision is logged, so the cleaned dataset stays auditable.',
    howItWorks: [
      'Profile column types, missing rates, and outliers before touching anything',
      'Standardize types and formats consistently across columns',
      'Choose an explicit, documented strategy for missing values per column',
      'Log every transformation applied, in order, to a changelog',
      'Re-profile the cleaned dataset and report what changed',
    ],
    files: ['skills/dataset-cleaner/SKILL.md'],
  },
  {
    slug: 'meeting-notes-digest',
    name: 'Meeting Notes Digest',
    author: 'Cognivexa',
    category: 'Knowledge Management',
    stars: 498,
    forks: 33,
    addedDate: '2026-02-01',
    icon: '🗒️',
    description:
      'Turn raw meeting notes or transcripts into decisions, action items with owners, and open questions.',
    argumentHint: '[transcript-or-notes]',
    tags: ['meetings', 'summarization', 'action-items'],
    intro: 'Separate decisions from discussion, and action items from vague intentions.',
    howItWorks: [
      'Read the full transcript or notes before summarizing anything',
      'Extract decisions made, distinct from options merely discussed',
      'Extract action items with an explicit owner and due date if stated',
      'List open questions that were raised but not resolved',
      'Flag any action item with no clear owner for follow-up',
    ],
    files: ['skills/meeting-notes-digest/SKILL.md'],
  },
  {
    slug: 'regression-triage',
    name: 'Regression Triage',
    author: 'Cognivexa',
    category: 'Debug & Test',
    stars: 1021,
    forks: 89,
    addedDate: '2026-01-27',
    icon: '🩹',
    description:
      'Triage a reported regression: bisect the likely commit range, reproduce locally, and hand off with a minimal repro.',
    argumentHint: '[bug-report]',
    tags: ['debugging', 'regression', 'bisect'],
    intro: 'Hand off a minimal, reproducible case instead of a vague bug report.',
    howItWorks: [
      'Reproduce the reported behavior locally before investigating further',
      'Bisect the likely commit range using known-good and known-bad points',
      'Narrow the repro to the smallest input that still triggers it',
      'Identify the responsible change and its intended purpose',
      'Hand off with the minimal repro and a suggested owner',
    ],
    files: ['skills/regression-triage/SKILL.md'],
  },
  {
    slug: 'style-guide-enforcer',
    name: 'Style Guide Enforcer',
    author: 'Cognivexa',
    category: 'Writing & Docs',
    stars: 712,
    forks: 51,
    addedDate: '2026-02-09',
    icon: '✒️',
    description:
      'Check prose against a project or brand style guide: terminology, tone, formatting, and voice consistency.',
    argumentHint: '[file-or-pattern]',
    tags: ['style-guide', 'consistency', 'editing'],
    intro: 'Enforce the style guide that already exists instead of relying on memory during review.',
    howItWorks: [
      'Load the project or brand style guide as the source of truth',
      'Flag terminology that deviates from the approved glossary',
      'Check tone and voice consistency across sections',
      'Verify formatting conventions: headings, lists, code blocks',
      'Return a diff-style report rather than silently rewriting',
    ],
    files: ['skills/style-guide-enforcer/SKILL.md'],
  },
  {
    slug: 'prd-template-builder',
    name: 'PRD Template Builder',
    author: 'Cognivexa',
    category: 'Product',
    stars: 601,
    forks: 48,
    addedDate: '2026-02-18',
    icon: '📋',
    description:
      'Draft a structured PRD from a rough feature request: problem statement, scope, success metrics, and open questions.',
    argumentHint: '[feature-request]',
    tags: ['product', 'prd', 'requirements'],
    intro: 'Turn a rough feature request into a spec engineering can actually estimate against.',
    howItWorks: [
      'Separate the stated problem from any solution already baked into the request',
      'Draft explicit scope and non-goals to prevent creep',
      'Define a measurable success metric, not an aspirational one',
      'List edge cases and cross-team dependencies',
      'Flag open questions that block estimation instead of guessing at answers',
    ],
    files: ['skills/prd-template-builder/SKILL.md'],
  },
  {
    slug: 'feature-flag-rollout-planner',
    name: 'Feature Flag Rollout Planner',
    author: 'Cognivexa',
    category: 'Product',
    stars: 388,
    forks: 27,
    addedDate: '2026-01-24',
    icon: '🚦',
    description:
      'Plan a staged feature flag rollout with explicit rollback criteria and monitoring checkpoints per stage.',
    argumentHint: '[feature-name]',
    tags: ['feature-flags', 'rollout', 'release'],
    intro: 'Plan the rollback criteria before the rollout starts, not after something breaks.',
    howItWorks: [
      'Define rollout stages by percentage or cohort',
      'Set explicit success and rollback criteria for each stage',
      'Identify the metrics to monitor at each checkpoint',
      'Define the kill-switch process and who can pull it',
      'Document the full rollout plan for on-call visibility',
    ],
    files: ['skills/feature-flag-rollout-planner/SKILL.md'],
  },
  {
    slug: 'policy-gap-analyzer',
    name: 'Policy Gap Analyzer',
    author: 'Cognivexa',
    category: 'Compliance',
    stars: 512,
    forks: 39,
    addedDate: '2026-02-11',
    icon: '📜',
    description:
      'Compare an internal policy document against a named framework or checklist and report specific gaps.',
    argumentHint: '[policy-doc] [framework-name]',
    tags: ['compliance', 'policy', 'gap-analysis'],
    intro: 'Report specific, cited gaps instead of a vague "mostly compliant" verdict.',
    howItWorks: [
      'Load the policy document and the named framework or checklist',
      'Match each framework requirement to a specific policy clause',
      'Flag requirements with no matching clause as a gap',
      'Flag clauses that partially address a requirement, not just missing ones',
      'Report gaps with the specific requirement cited, ranked by risk',
    ],
    files: ['skills/policy-gap-analyzer/SKILL.md'],
  },
  {
    slug: 'audit-evidence-collector',
    name: 'Audit Evidence Collector',
    author: 'Cognivexa',
    category: 'Compliance',
    stars: 347,
    forks: 22,
    addedDate: '2026-01-29',
    icon: '🗃️',
    description:
      'Organize evidence artifacts against a control list so audit prep isn\'t a last-minute scramble.',
    argumentHint: '[control-list]',
    tags: ['audit', 'evidence', 'controls'],
    intro: 'Know exactly which controls are missing evidence before the auditor asks.',
    howItWorks: [
      'Load the control list for the relevant framework',
      'Match existing artifacts to each control',
      'Flag controls with no evidence or stale evidence',
      'Organize matched evidence by control for easy auditor review',
      'Report the remaining gap list with a suggested collection owner',
    ],
    files: ['skills/audit-evidence-collector/SKILL.md'],
  },
  {
    slug: 'board-deck-builder',
    name: 'Board Deck Builder',
    author: 'Cognivexa',
    category: 'C-Level Advisory',
    stars: 729,
    forks: 61,
    addedDate: '2026-02-13',
    icon: '🗂️',
    description:
      'Structure a board meeting deck around decisions needed, with metrics and narrative in a consistent order.',
    argumentHint: '[meeting-topic]',
    tags: ['board-deck', 'executive', 'reporting'],
    intro: 'Lead with the decision the board needs to make, not a wall of status updates.',
    howItWorks: [
      'Identify the decisions the board actually needs to make this meeting',
      'Order sections so decisions come before background context',
      'Pull the metrics that support each decision point',
      'Flag where the narrative and the underlying numbers diverge',
      'Draft anticipated questions and answers for the hardest points',
    ],
    files: ['skills/board-deck-builder/SKILL.md'],
  },
  {
    slug: 'executive-briefing-digest',
    name: 'Executive Briefing Digest',
    author: 'Cognivexa',
    category: 'C-Level Advisory',
    stars: 455,
    forks: 34,
    addedDate: '2026-02-04',
    icon: '📰',
    description:
      'Condense a long report or thread into a one-page executive brief with the decision and risk stated upfront.',
    argumentHint: '[source-document]',
    tags: ['executive-brief', 'summarization'],
    intro: 'One page, decision first, everything else in an appendix.',
    howItWorks: [
      'Read the full source document before summarizing anything',
      'State the decision or ask in the first sentence',
      'Summarize supporting context in three bullets or fewer',
      'Move detail and caveats into an appendix, not the main brief',
      'Flag any risk that could change the recommendation',
    ],
    files: ['skills/executive-briefing-digest/SKILL.md'],
  },
  {
    slug: 'sop-writer',
    name: 'SOP Writer',
    author: 'Cognivexa',
    category: 'Business Operations',
    stars: 668,
    forks: 52,
    addedDate: '2026-01-31',
    icon: '📝',
    description:
      'Turn a described process into a numbered standard operating procedure with clear ownership at each step.',
    argumentHint: '[process-description]',
    tags: ['sop', 'operations', 'documentation'],
    intro: 'Write the SOP with the fewest steps that still actually work.',
    howItWorks: [
      'Extract each discrete step from the described process',
      'Assign an explicit owner to each step',
      'Cut redundant or purely historical steps',
      'Document exceptions and edge cases separately from the happy path',
      'Add a short verification step so completion is unambiguous',
    ],
    files: ['skills/sop-writer/SKILL.md'],
  },
  {
    slug: 'vendor-contract-tracker',
    name: 'Vendor Contract Tracker',
    author: 'Cognivexa',
    category: 'Business Operations',
    stars: 421,
    forks: 30,
    addedDate: '2026-01-26',
    icon: '📇',
    description:
      'Extract renewal dates, notice periods, and auto-renewal terms from contract text into a tracked summary.',
    argumentHint: '[contract-file]',
    tags: ['contracts', 'vendor-management', 'procurement'],
    intro: 'Never let an auto-renewal clause be a surprise again.',
    howItWorks: [
      'Read the full contract text, not just the summary page',
      'Extract renewal date, notice period, and auto-renewal terms',
      'Flag ambiguous or unusually short notice periods',
      'Calculate the actual cancellation deadline from the notice period',
      'Summarize key terms in a consistent, comparable format',
    ],
    files: ['skills/vendor-contract-tracker/SKILL.md'],
  },
  {
    slug: 'proposal-pricing-table-generator',
    name: 'Proposal Pricing Table Generator',
    author: 'Cognivexa',
    category: 'Commercial & Finance',
    stars: 502,
    forks: 41,
    addedDate: '2026-02-07',
    icon: '💲',
    description:
      'Build a pricing or tiering table for a sales proposal from a rate card and the deal\'s specific terms.',
    argumentHint: '[rate-card] [deal-terms]',
    tags: ['pricing', 'proposals', 'sales'],
    intro: 'Generate a pricing table that matches the deal terms exactly, not a generic template.',
    howItWorks: [
      'Load the base rate card and the deal-specific terms',
      'Apply any negotiated discounts or volume tiers',
      'Structure the table to match the format the buyer requested',
      'Flag any pricing that falls outside standard discount policy',
      'Include a plain-language summary line above the table',
    ],
    files: ['skills/proposal-pricing-table-generator/SKILL.md'],
  },
  {
    slug: 'deal-desk-checklist',
    name: 'Deal Desk Checklist',
    author: 'Cognivexa',
    category: 'Commercial & Finance',
    stars: 376,
    forks: 25,
    addedDate: '2026-01-21',
    icon: '✅',
    description:
      'Review a proposed deal against discount and approval policy before it goes to signature.',
    argumentHint: '[deal-summary]',
    tags: ['deal-desk', 'sales-ops', 'approvals'],
    intro: 'Catch policy violations before the deal reaches signature, not after.',
    howItWorks: [
      'Load the deal summary and the current approval policy thresholds',
      'Check discount level against the approval matrix',
      'Flag non-standard terms that need legal or finance sign-off',
      'Verify required approvals are attached, not just requested',
      'Report a clear pass/fail with the specific policy citation for any flag',
    ],
    files: ['skills/deal-desk-checklist/SKILL.md'],
  },
  {
    slug: 'dockerfile-hardening-checker',
    name: 'Dockerfile Hardening Checker',
    author: 'Cognivexa',
    category: 'DevOps',
    stars: 1847,
    forks: 129,
    addedDate: '2026-02-19',
    icon: '🐳',
    description:
      'Scans Dockerfiles and Compose files for insecure base images, root-user execution, exposed secrets, and missing multi-stage build patterns, then rewrites offending lines with hardened equivalents.',
    argumentHint: '[dockerfile-path]',
    tags: ['docker', 'container-security', 'hardening', 'ci-cd'],
    intro: 'Turns a sloppy Dockerfile into a production-hardened one in seconds, not a code review cycle.',
    howItWorks: [
      'Parse the target Dockerfile and any referenced Compose files into an instruction tree',
      'Flag root-user execution, latest-tag base images, and world-writable file permissions',
      'Cross-reference base image tags against a curated list of minimal and distroless alternatives',
      'Rewrite flagged instructions in place, adding USER, HEALTHCHECK, and multi-stage build steps',
      'Emit a before/after diff summary with a hardening score',
    ],
    files: ['skills/dockerfile-hardening-checker/SKILL.md'],
  },
  {
    slug: 'ci-pipeline-linter',
    name: 'CI Pipeline Linter',
    author: 'Cognivexa',
    category: 'DevOps',
    stars: 1120,
    forks: 78,
    addedDate: '2026-02-24',
    icon: '⚙️',
    description:
      'Lints GitHub Actions, GitLab CI, and CircleCI YAML configs for slow, flaky, or insecure pipeline patterns such as unpinned actions, missing caching, and unbounded job timeouts.',
    argumentHint: '[workflow-file-or-dir]',
    tags: ['ci-cd', 'yaml-lint', 'github-actions', 'pipeline'],
    intro: 'Catches the pipeline mistakes that quietly cost you build minutes and security posture before they ship.',
    howItWorks: [
      'Detect the CI provider from file structure and parse each workflow into a job graph',
      'Check every third-party action or job reference against pinned-SHA and version-range rules',
      'Flag missing timeout-minutes, concurrency groups, and dependency-caching steps',
      'Simulate the job graph to surface redundant or serially-blocking steps that could run in parallel',
      'Output a prioritized fix list with inline YAML patches ready to apply',
    ],
    files: ['skills/ci-pipeline-linter/SKILL.md'],
  },
  {
    slug: 'infra-drift-detector',
    name: 'Infra Drift Detector',
    author: 'Cognivexa',
    category: 'DevOps',
    stars: 970,
    forks: 68,
    addedDate: '2026-03-02',
    icon: '🛰️',
    description:
      'Compares a Terraform or Pulumi state file against the live cloud provider API to surface unmanaged changes, then generates a remediation plan to reconcile or import them.',
    argumentHint: '[terraform-state-path]',
    tags: ['terraform', 'drift-detection', 'iac', 'cloud-ops'],
    intro: 'Finds the manual console changes nobody told the pipeline about, before they cause the next 2am incident.',
    howItWorks: [
      'Load the declared state file and enumerate every tracked resource and its expected attributes',
      'Query the live cloud provider API for the current attributes of each tracked resource',
      'Diff declared versus live state and classify each mismatch as drift, deletion, or orphan',
      'Rank findings by blast radius, weighting production tags and public-facing resources highest',
      'Generate terraform import or apply commands to bring state back into sync',
    ],
    files: ['skills/infra-drift-detector/SKILL.md'],
  },
  {
    slug: 'dependency-vuln-triage',
    name: 'Dependency Vulnerability Triage',
    author: 'Cognivexa',
    category: 'Security',
    stars: 2140,
    forks: 158,
    addedDate: '2026-02-20',
    icon: '🛡️',
    description:
      'Scans package manifests and lockfiles across npm, pip, and Maven for known CVEs, then ranks each finding by exploitability, reachability in your code, and available patch path.',
    argumentHint: '[lockfile-or-manifest-path]',
    tags: ['vulnerability-scan', 'dependency-management', 'cve', 'sca'],
    intro: 'Cuts through hundreds of CVE alerts to the handful that are actually exploitable in your codebase.',
    howItWorks: [
      'Parse manifests and lockfiles to build a full transitive dependency tree',
      'Cross-reference every package version against known vulnerability advisories',
      'Statically trace import graphs to check whether vulnerable code paths are actually reachable',
      'Score each finding using exploitability, reachability, and patch-availability weights',
      'Produce a ranked remediation list with exact upgrade targets and breaking-change warnings',
    ],
    files: ['skills/dependency-vuln-triage/SKILL.md'],
  },
  {
    slug: 'secrets-in-code-scanner',
    name: 'Secrets In Code Scanner',
    author: 'Cognivexa',
    category: 'Security',
    stars: 1560,
    forks: 112,
    addedDate: '2026-02-27',
    icon: '🔑',
    description:
      'Sweeps repository history and working tree for hardcoded API keys, tokens, and credentials using entropy analysis and provider-specific pattern matching, then generates revocation steps.',
    argumentHint: '[repo-path]',
    tags: ['secrets-detection', 'credential-leak', 'git-history', 'sast'],
    intro: 'Finds the API key your teammate committed three months ago before an attacker does.',
    howItWorks: [
      'Walk the full git history and current working tree file by file',
      'Run entropy analysis alongside provider-specific regex signatures for known key formats',
      'Filter out placeholder and test-fixture values to cut false positives',
      'Trace each confirmed secret to its commit, author, and first-exposed date',
      'Output a revocation checklist with provider-specific rotation links per finding',
    ],
    files: ['skills/secrets-in-code-scanner/SKILL.md'],
  },
  {
    slug: 'security-questionnaire-responder',
    name: 'Security Questionnaire Responder',
    author: 'Cognivexa',
    category: 'Security',
    stars: 640,
    forks: 48,
    addedDate: '2026-03-08',
    icon: '📋',
    description:
      'Drafts answers to vendor security questionnaires and SOC 2/ISO 27001 audit requests by pulling evidence from your existing policy docs, architecture diagrams, and control matrices.',
    argumentHint: '[questionnaire-file]',
    tags: ['soc2', 'compliance', 'questionnaire', 'audit-prep'],
    intro: 'Turns a 200-question vendor security review from a week of scrambling into an afternoon of review.',
    howItWorks: [
      'Parse the incoming questionnaire into individual control and policy questions',
      'Match each question against your indexed policy documents and control matrix',
      'Draft an evidence-backed answer with citations to the source document and section',
      'Flag unanswerable questions where no matching control or evidence exists yet',
      'Compile the final response into the questionnaire\'s original format for submission',
    ],
    files: ['skills/security-questionnaire-responder/SKILL.md'],
  },
  {
    slug: 'app-store-release-notes',
    name: 'App Store Release Notes Drafter',
    author: 'Cognivexa',
    category: 'Mobile Development',
    stars: 1450,
    forks: 110,
    addedDate: '2026-02-21',
    icon: '📱',
    description:
      'Turns a range of git commits or a sprint\'s ticket list into polished, user-facing release notes formatted for App Store Connect and Google Play listings. Produces both a full changelog and a trimmed "what\'s new" version that respects each store\'s character limits.',
    argumentHint: '[version-tag-or-commit-range]',
    tags: ['release-notes', 'app-store', 'changelog', 'mobile-release'],
    intro: 'Turns raw commit noise into store-ready release notes in one pass.',
    howItWorks: [
      'Collect commits or PR titles across the specified range',
      'Classify each change as feature, fix, improvement, or internal-only',
      'Filter out internal changes that end users don\'t need to see',
      'Rewrite technical descriptions into plain, user-facing language',
      'Format two outputs: a full changelog and a character-limited "what\'s new" blurb',
    ],
    files: ['skills/app-store-release-notes/SKILL.md'],
  },
  {
    slug: 'crash-report-triage',
    name: 'Mobile Crash Report Triage',
    author: 'Cognivexa',
    category: 'Mobile Development',
    stars: 1890,
    forks: 150,
    addedDate: '2026-02-25',
    icon: '🧯',
    description:
      'Parses symbolicated iOS/Android crash logs from Crashlytics or Sentry exports and clusters them by root stack frame, ranking each cluster by device, OS version, and affected-user impact. Drafts a short triage note per cluster with the suspected file/line and repro hints.',
    argumentHint: '[crash-log-export-path]',
    tags: ['crash-triage', 'crashlytics', 'ios', 'android'],
    intro: 'Turns a flood of crash logs into a ranked, actionable fix list.',
    howItWorks: [
      'Ingest the symbolicated crash log export and parse stack traces',
      'Cluster crashes by matching root exception frame and thread',
      'Score each cluster by affected user count, OS version, and device model',
      'Rank clusters from highest to lowest impact',
      'Draft a triage note per cluster with suspected file/line and repro hints',
    ],
    files: ['skills/crash-report-triage/SKILL.md'],
  },
  {
    slug: 'mobile-bundle-size-audit',
    name: 'Mobile Bundle Size Auditor',
    author: 'Cognivexa',
    category: 'Mobile Development',
    stars: 980,
    forks: 75,
    addedDate: '2026-03-02',
    icon: '📦',
    description:
      'Analyzes an APK/AAB or IPA build artifact to break down size by module, asset type, and third-party library, then diffs against the previous release to flag regressions. Suggests concrete trims such as duplicate asset removal, unused resource stripping, and lazy-loadable modules.',
    argumentHint: '[build-artifact-path]',
    tags: ['bundle-size', 'apk', 'ipa', 'performance'],
    intro: 'Finds exactly what\'s bloating your app and how much each fix would save.',
    howItWorks: [
      'Unpack the APK/AAB or IPA build artifact',
      'Measure size contribution per module, asset folder, and dependency',
      'Compare against the previous build\'s stored size snapshot',
      'Flag size regressions above a configurable threshold',
      'Recommend concrete trims: duplicate assets, unused resources, lazy modules',
    ],
    files: ['skills/mobile-bundle-size-audit/SKILL.md'],
  },
  {
    slug: 'commit-message-linter',
    name: 'Commit Message Quality Checker',
    author: 'Cognivexa',
    category: 'Git & Version Control',
    stars: 2100,
    forks: 165,
    addedDate: '2026-02-19',
    icon: '✅',
    description:
      'Reviews a range of commits against Conventional Commits and imperative-mood style rules, flagging vague messages like "fix stuff" and suggesting rewrites grounded in the actual diff content. Also checks subject-line length and body wrapping conventions.',
    argumentHint: '[commit-range]',
    tags: ['commit-messages', 'conventional-commits', 'linting'],
    intro: 'Catches lazy commit messages before they land in permanent history.',
    howItWorks: [
      'Read each commit\'s diff alongside its message',
      'Check the subject line against Conventional Commits type/scope format',
      'Flag vague or generic messages that don\'t match the diff content',
      'Verify line length, imperative mood, and body wrapping conventions',
      'Suggest a rewritten message grounded in what the diff actually changed',
    ],
    files: ['skills/commit-message-linter/SKILL.md'],
  },
  {
    slug: 'changelog-from-history',
    name: 'Changelog Generator From Commit History',
    author: 'Cognivexa',
    category: 'Git & Version Control',
    stars: 1620,
    forks: 130,
    addedDate: '2026-02-27',
    icon: '📜',
    description:
      'Walks the git log between two tags, groups commits by Conventional Commit type (feat/fix/chore/breaking), and drafts a Keep-a-Changelog formatted entry with links to detected PR numbers. Breaking changes get pulled into a dedicated "Upgrade Notes" section.',
    argumentHint: '[from-tag]..[to-tag]',
    tags: ['changelog', 'git-log', 'release-notes'],
    intro: 'Builds a publish-ready changelog straight from your commit history, no manual copy-pasting.',
    howItWorks: [
      'Walk the git log between the two provided tags or refs',
      'Parse each commit into feat, fix, chore, or breaking categories',
      'Detect linked PR numbers and attach them to their entries',
      'Group entries under Keep-a-Changelog style headings',
      'Draft an Upgrade Notes section for any breaking changes found',
    ],
    files: ['skills/changelog-from-history/SKILL.md'],
  },
  {
    slug: 'stale-branch-cleanup-planner',
    name: 'Stale Branch Cleanup Planner',
    author: 'Cognivexa',
    category: 'Git & Version Control',
    stars: 760,
    forks: 55,
    addedDate: '2026-03-06',
    icon: '🧹',
    description:
      'Scans all local and remote branches to find ones already merged, abandoned for 60+ days, or orphaned from deleted PRs, then produces a safe-to-delete list with the evidence behind each entry. It never deletes anything itself; it only outputs the plan and the exact git commands to run.',
    argumentHint: '[days-inactive-threshold]',
    tags: ['branch-cleanup', 'git-branches', 'repo-hygiene'],
    intro: 'Tells you exactly which branches are safe to delete, and why, without touching a single one.',
    howItWorks: [
      'List all local and remote branches with their last-commit timestamps',
      'Check each branch\'s merge status against the main branch',
      'Cross-reference branches against closed or deleted PRs',
      'Flag branches inactive beyond the threshold as cleanup candidates',
      'Output a plan with reasoning and the exact git commands to delete each',
    ],
    files: ['skills/stale-branch-cleanup-planner/SKILL.md'],
  },
  {
    slug: 'prompt-regression-guard',
    name: 'Prompt Regression Guard',
    author: 'Cognivexa',
    category: 'AI Engineering',
    stars: 1450,
    forks: 102,
    addedDate: '2026-02-21',
    icon: '🧪',
    description:
      'Runs your prompt templates against a versioned snapshot suite before every deploy, diffing model outputs field-by-field to flag silent behavior drift.',
    argumentHint: '[prompt-dir]',
    tags: ['prompt-testing', 'regression', 'llm-eval', 'ci'],
    intro: 'Catches silent prompt breakage before it reaches production, not after.',
    howItWorks: [
      'Load prompt templates and their last-known-good output snapshots.',
      'Re-run each template against the current model and config.',
      'Diff structured output fields rather than raw text to ignore harmless wording changes.',
      'Score each diff\'s severity using configurable per-field weights.',
      'Emit a pass or fail report and update snapshots once changes are approved.',
    ],
    files: ['skills/prompt-regression-guard/SKILL.md'],
  },
  {
    slug: 'eval-set-forge',
    name: 'Eval Set Forge',
    author: 'Cognivexa',
    category: 'AI Engineering',
    stars: 980,
    forks: 68,
    addedDate: '2026-02-25',
    icon: '📋',
    description:
      'Builds structured evaluation datasets from raw production transcripts by clustering similar queries, sampling edge cases, and drafting rubric-based grading criteria.',
    argumentHint: '[logs-path]',
    tags: ['eval-sets', 'dataset-curation', 'rubrics'],
    intro: 'Turns a pile of production transcripts into a defensible, reusable eval suite in minutes.',
    howItWorks: [
      'Ingest raw transcripts and normalize them into a common schema.',
      'Cluster queries by semantic similarity to surface distinct task types.',
      'Stratified-sample across clusters and deliberately oversample outliers.',
      'Draft a per-cluster grading rubric with explicit pass and fail criteria.',
      'Export the eval set and rubrics as a versioned JSONL bundle.',
    ],
    files: ['skills/eval-set-forge/SKILL.md'],
  },
  {
    slug: 'chain-cost-auditor',
    name: 'Chain Cost Auditor',
    author: 'Cognivexa',
    category: 'AI Engineering',
    stars: 720,
    forks: 55,
    addedDate: '2026-03-02',
    icon: '💸',
    description:
      'Walks a multi-step prompt chain and computes token usage and dollar cost per step, then flags the highest-cost hops for compression or caching.',
    argumentHint: '[chain-config.json]',
    tags: ['token-cost', 'prompt-chains', 'cost-optimization'],
    intro: 'Shows you exactly which link in your prompt chain is burning your budget.',
    howItWorks: [
      'Parse the chain config to identify each step\'s prompt and target model.',
      'Tokenize inputs and outputs per step using that model\'s tokenizer.',
      'Apply current per-model pricing to compute per-step and cumulative cost.',
      'Rank steps by cost share and detect redundant or cacheable calls.',
      'Output a cost breakdown table with concrete trimming suggestions.',
    ],
    files: ['skills/chain-cost-auditor/SKILL.md'],
  },
  {
    slug: 'alt-text-composer',
    name: 'Alt Text Composer',
    author: 'Cognivexa',
    category: 'Media & Graphics',
    stars: 1680,
    forks: 130,
    addedDate: '2026-02-19',
    icon: '🖼️',
    description:
      'Generates concise, screen-reader-friendly alt text for batches of images by describing subject, action, and context while stripping redundant phrasing like \'image of\'.',
    argumentHint: '[image-folder]',
    tags: ['alt-text', 'accessibility', 'image-batch'],
    intro: 'Makes an entire image library accessible without writing a single description by hand.',
    howItWorks: [
      'Scan the target folder and queue all supported image files.',
      'Analyze each image for subject, setting, and notable action or embedded text.',
      'Draft alt text under a configurable character limit, dropping filler phrases.',
      'Flag purely decorative images for empty alt attributes instead of descriptions.',
      'Write results to a CSV mapping filename to alt text for direct CMS import.',
    ],
    files: ['skills/alt-text-composer/SKILL.md'],
  },
  {
    slug: 'asset-namer',
    name: 'Asset Namer',
    author: 'Cognivexa',
    category: 'Media & Graphics',
    stars: 540,
    forks: 40,
    addedDate: '2026-02-28',
    icon: '🗂️',
    description:
      'Renames and sorts a messy folder of design exports into a consistent convention (project-type-variant-size-version) and rebuilds folder structure by asset type.',
    argumentHint: '[source-folder]',
    tags: ['file-naming', 'asset-organization', 'batch-rename'],
    intro: 'Turns a chaotic export dump into a predictable, searchable asset library in one pass.',
    howItWorks: [
      'Scan the source folder and detect file type, dimensions, and existing naming hints.',
      'Infer project, variant, and version tokens from filenames and parent folders.',
      'Apply the naming pattern to generate a collision-free filename per asset.',
      'Move files into type-based subfolders such as icons, banners, and photos.',
      'Log a rename manifest mapping old paths to new ones for safe rollback.',
    ],
    files: ['skills/asset-namer/SKILL.md'],
  },
  {
    slug: 'social-crop-kit',
    name: 'Social Crop Kit',
    author: 'Cognivexa',
    category: 'Media & Graphics',
    stars: 1920,
    forks: 160,
    addedDate: '2026-03-06',
    icon: '✂️',
    description:
      'Takes one source image and generates a full set of platform-ready crops (square, story, landscape, banner) using subject-aware framing so faces and focal points stay in frame.',
    argumentHint: '[source-image]',
    tags: ['image-cropping', 'social-media', 'aspect-ratio'],
    intro: 'One upload in, a full social media crop kit out, with nothing important cut off.',
    howItWorks: [
      'Load the source image and detect the primary subject or focal region.',
      'Map the requested platforms to their required aspect ratios and dimensions.',
      'Compute a crop window per ratio that keeps the focal region centered in frame.',
      'Render each crop at the platform\'s native export resolution.',
      'Package all variants into a labeled output folder ready for upload.',
    ],
    files: ['skills/social-crop-kit/SKILL.md'],
  },
  {
    slug: 'career-skills',
    name: 'Career Skills',
    author: 'Cognivexa',
    category: 'Utility',
    stars: 340,
    forks: 38,
    addedDate: '2026-03-12',
    icon: '🧭',
    description:
      'Builds a personalized career development plan by comparing a person\'s current skills against the requirements of a target role, then produces a phased learning roadmap and interview talking points.',
    argumentHint: '[target-role]',
    tags: ['career-planning', 'skill-gap-analysis', 'interview-prep'],
    intro: 'Turns a vague ambition like get promoted into a dated roadmap with named skills, resources, and talking points instead of a to-do list nobody follows.',
    howItWorks: [
      'Ask for the person\'s current role, experience, and the target role or job posting they are aiming for.',
      'Break the target role down into its core competencies and compare each one against the person\'s demonstrated experience.',
      'Rank the resulting gaps by how much they matter to the target role and how long they typically take to close.',
      'Draft a phased learning roadmap that sequences courses, projects, and certifications against the ranked gaps.',
      'Generate resume bullet suggestions and interview talking points that connect existing experience to the target role\'s requirements.',
    ],
    files: ['skills/career-skills/SKILL.md'],
  },
  {
    slug: 'web-design-guidelines',
    name: 'Web Design Guidelines',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 1580,
    forks: 190,
    addedDate: '2026-04-02',
    icon: '🎨',
    description:
      'Audits a web interface or design mockup against a curated set of modern UI heuristics covering spacing, typography, contrast, hierarchy, and responsive behavior, then reports concrete fixes.',
    argumentHint: '[file-or-folder]',
    tags: ['ui-review', 'accessibility', 'design-heuristics'],
    intro: 'Turns a subjective is this UI good conversation into a checklist audit with line-level fixes instead of vague taste-based feedback.',
    howItWorks: [
      'Scan the provided markup, styles, or screenshot for spacing, alignment, and grid consistency issues.',
      'Check text contrast ratios and font sizing against accessibility and legibility thresholds.',
      'Evaluate visual hierarchy by checking whether heading weights, color, and whitespace correctly guide the eye.',
      'Test layout behavior at common breakpoints and flag elements that break, overflow, or become unreadable.',
      'Compile violations into a prioritized list, each paired with a specific CSS or markup change that resolves it.',
    ],
    files: ['skills/web-design-guidelines/SKILL.md'],
  },
  {
    slug: 'react-best-practices',
    name: 'React Best Practices',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 2340,
    forks: 288,
    addedDate: '2026-08-18',
    icon: '⚛️',
    pro: true,
    domain: 'React',
    platform: 'JavaScript/TypeScript',
    role: 'expert',
    scope: 'implementation',
    output: 'code',
    description:
      'Expert React developer specializing in component architecture, hooks, and performance: eliminates prop drilling, unnecessary re-renders, and unsafe effects.',
    whenToUse:
      'Use when building or reviewing React components, extracting custom hooks, choosing a state-management approach, optimizing re-renders, writing React Testing Library tests, or auditing components for accessibility and XSS risk.',
    argumentHint: '[component-file]',
    tags: ['react', 'hooks', 'performance'],
    triggers: [
      'React',
      'hooks',
      'component architecture',
      'state management',
      'React performance',
      'React Server Components',
      'React Testing Library',
      'prop drilling',
      'memoization',
      'React forms',
    ],
    relatedSkills: ['TypeScript Pro', 'Fullstack Guardian', 'Security Reviewer'],
    intro:
      'Expert React developer specializing in component architecture, hooks, and performance: eliminates prop drilling, unnecessary re-renders, and unsafe effects.',
    coreWorkflow: [
      { title: 'Analyze requirements', detail: "Understand the app's React version, state management approach, and existing component conventions." },
      { title: 'Design component architecture', detail: 'Decide component boundaries, prop contracts, and where state should live.' },
      { title: 'Implement', detail: 'Build with hooks, proper memoization, and accessible markup.' },
      { title: 'Validate', detail: 'Run the linter (eslint-plugin-react-hooks) and type-check props/state.' },
      { title: 'Test', detail: 'Write React Testing Library tests focused on behavior, not implementation details.' },
      { title: 'Optimize & secure', detail: 'Profile re-renders with React DevTools, and audit for XSS via dangerouslySetInnerHTML and unsafe prop passthrough.' },
    ],
    referenceGuide: [
      { topic: 'Component Architecture', file: 'references/component-architecture.md', loadWhen: 'Composition, prop drilling, container/presentational split' },
      { topic: 'Hooks & State Management', file: 'references/hooks-state-management.md', loadWhen: 'useState/useReducer, context, external stores' },
      { topic: 'Performance', file: 'references/performance.md', loadWhen: 'Memoization, virtualization, code splitting' },
      { topic: 'Testing with React Testing Library', file: 'references/testing-rtl.md', loadWhen: 'Querying by role, user-event, avoiding implementation details' },
      { topic: 'Accessibility & Security', file: 'references/accessibility-security.md', loadWhen: 'ARIA, focus management, dangerouslySetInnerHTML risks' },
    ],
    codePatterns: [
      {
        title: 'Custom Hook Extraction',
        language: 'tsx',
        code: `function useOrderTotal(items: OrderItem[]): number {
  return useMemo(
    () => items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0),
    [items]
  )
}`,
      },
      {
        title: 'Avoiding Unnecessary Re-Renders',
        language: 'tsx',
        code: `const ExpensiveRow = memo(function ExpensiveRow({ item }: { item: OrderItem }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.priceCents}</td>
    </tr>
  )
})`,
      },
      {
        title: 'Context for Cross-Cutting State Only',
        language: 'tsx',
        code: `const ThemeContext = createContext<Theme>('light')

// Reach for context for truly cross-cutting state (theme, auth, locale) —
// not as a shortcut past prop drilling for a couple of levels.`,
      },
      {
        title: 'Testing Library — Query by Role, Not by Class',
        language: 'tsx',
        code: `test('submits the order form', async () => {
  render(<OrderForm onSubmit={onSubmit} />)
  await userEvent.click(screen.getByRole('button', { name: /place order/i }))
  expect(onSubmit).toHaveBeenCalled()
})`,
      },
      {
        title: 'Safe HTML Rendering',
        language: 'tsx',
        code: `// Never: dangerouslySetInnerHTML={{ __html: userInput }}
// Sanitize first if raw HTML is genuinely required:
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(markdownHtml) }} />`,
      },
    ],
    mustDo: [
      'Keep components small and focused on one responsibility',
      'Use useMemo/useCallback only where a measured re-render cost justifies it',
      'Extract reusable stateful logic into custom hooks',
      'Query in tests by role/label text, not by class name or test-id when an accessible query exists',
      'Manage server state with a dedicated library (React Query/SWR) rather than useEffect + useState',
      'Provide key props that are stable and unique, never array index for reorderable lists',
      'Handle loading, error, and empty states explicitly in every data-fetching component',
      'Sanitize any HTML passed to dangerouslySetInnerHTML',
      'Co-locate related state instead of lifting everything to a global store by default',
    ],
    mustNot: [
      'Call hooks conditionally or inside loops',
      'Use array index as a key for a list that can reorder, filter, or have items removed',
      'Store server data in component state without a cache/invalidation strategy',
      'Overuse Context for state that only a couple of components need',
      'Mutate state directly instead of using the setter/reducer',
      'Use dangerouslySetInnerHTML with unsanitized user input',
      'Add useEffect for logic that can be computed directly during render',
      'Test implementation details (internal state, function calls) instead of observable behavior',
    ],
    outputTemplate: [
      'Component implementation with clear prop types',
      'Custom hooks extracted where logic is reusable',
      'React Testing Library tests',
      'A brief note on the state-management choice made',
      'Any accessibility considerations addressed',
    ],
    knowledgeReference:
      'React 18/19, hooks, Context, React Server Components, React Query/SWR, React Testing Library, Vitest/Jest, memoization (memo/useMemo/useCallback), code splitting/lazy, ARIA/accessibility',
    howItWorks: [
      "Analyze the app's React version, state approach, and component conventions.",
      'Design component boundaries and decide where state should live before implementing.',
      'Implement with hooks, appropriate memoization, and accessible markup.',
      'Validate with the hooks linter and type-check props/state.',
      'Test behavior with React Testing Library and profile re-renders before shipping.',
    ],
    referenceFiles: {
      'references/component-architecture.md': `# Component Architecture

## Composition Over Configuration

Prefer composing small components via \`children\` or slots over one large component with many boolean/variant props controlling its internal branches:

\`\`\`tsx
<Card>
  <Card.Header>Order #123</Card.Header>
  <Card.Body>...</Card.Body>
</Card>
\`\`\`

This scales better than \`<Card showHeader variant="order" headerContent="...">\` as requirements grow, and each piece can be tested and reused independently.

## Prop Drilling

Passing a prop through three or more intermediate components that don't use it themselves is a sign the data belongs in Context, a colocated state manager, or that the component tree should be restructured (e.g. by moving the consuming component up and passing it down as \`children\` instead).

## Container/Presentational Split

Separate "how to fetch/compute the data" from "how to render it" — a presentational component that only receives props and renders is trivial to test and reuse, while the data-fetching logic can be swapped (mocked, cached, moved to a server component) independently.

## Component Size

If a component's render function needs scrolling to read in one pass, or it manages more than two or three pieces of unrelated state, it's usually a sign to extract a child component or a custom hook.
`,
      'references/hooks-state-management.md': `# Hooks & State Management

## useState vs. useReducer

Reach for \`useReducer\` when a component has several pieces of state that change together in response to the same actions (a form with validation state, submission state, and field values) — it makes the valid transitions explicit instead of scattered across several \`useState\` calls that can drift out of sync with each other.

## Context

Context re-renders every consumer when the value changes, regardless of which part of the value a given consumer actually reads. Split a large context into smaller, more focused ones, or pair it with a selector-based store (Zustand, Jotai) when a value changes frequently and many components read only part of it.

## Server State vs. Client State

Data that lives on a server (fetched via an API) has different needs than truly client-only state (a modal's open/closed flag): it needs caching, revalidation, and de-duplication of in-flight requests. Use React Query, SWR, or RTK Query for server state, and reserve \`useState\`/Context/a lightweight store for genuinely client-local state.

## Derived State

If a value can be computed from existing props/state, compute it during render (optionally wrapped in \`useMemo\` if the computation is expensive) rather than storing it in its own \`useState\` and syncing it with a \`useEffect\` — the synced-copy pattern is a common source of stale-state bugs.
`,
      'references/performance.md': `# Performance

## Memoization Is Not Free

\`useMemo\`/\`useCallback\`/\`memo\` each have their own overhead (comparing dependencies) — applying them everywhere "just in case" can make things slower, not faster. Reach for them when a profiler shows a component actually re-rendering expensively and unnecessarily, not by default on every component.

## Virtualization

For a list that can grow large (hundreds+ of rows), render only the visible window with a virtualization library instead of every row — a full DOM tree for a huge list degrades scroll performance and initial render time regardless of how well individual rows are optimized.

## Code Splitting

Split rarely-visited routes or heavy, optional features (a rich text editor, a charting library) into a separate chunk loaded with \`React.lazy\` and \`Suspense\`, so the initial bundle only pays for what most users need immediately.

\`\`\`tsx
const ReportBuilder = lazy(() => import('./ReportBuilder'))
\`\`\`

## Profiling Before Optimizing

Use the React DevTools Profiler to find which components actually re-render and why, before reaching for memoization — the component that "feels" slow is often not the one that's actually re-rendering excessively.
`,
      'references/testing-rtl.md': `# Testing with React Testing Library

## Query Priority

Query in the order the library recommends: by accessible role and name first (\`getByRole('button', { name: /submit/i })\`), then by label text, then by text content — reach for \`data-testid\` only when no accessible query applies. This keeps tests aligned with what a real user (including one using assistive technology) actually perceives.

## user-event Over fireEvent

Use \`@testing-library/user-event\` instead of \`fireEvent\` for interactions — it simulates the full sequence of events a real user interaction produces (focus, keydown, input, etc.), catching bugs that a single synthetic \`fireEvent.change\` call would miss.

## Avoiding Implementation Details

Don't assert on component internal state, instance methods, or exactly which child function was called — assert on what the user would see or the effect on the outside world (a callback fired, text now visible on screen). This lets the component be refactored internally without breaking its tests.

## Async Assertions

Wrap assertions on data that arrives asynchronously in \`findBy*\` queries or \`waitFor\`, rather than asserting immediately after a state-changing action — a synchronous assertion right after a fetch-triggering click is a common source of flaky tests.
`,
      'references/accessibility-security.md': `# Accessibility & Security

## Semantic HTML First

Use a native \`<button>\`, \`<a>\`, or form element before reaching for a \`<div>\` with an \`onClick\` and ARIA attributes bolted on — native elements come with keyboard interaction, focus behavior, and screen-reader semantics for free that a div-based reimplementation has to hand-build and will likely miss edge cases on.

## Focus Management

When a modal opens, move focus into it and trap it there until closed; when it closes, return focus to the element that opened it. Losing focus management is one of the most common accessibility regressions in custom overlay components.

## ARIA as a Last Resort

ARIA attributes describe a custom widget to assistive technology, but they don't provide any behavior — adding \`role="button"\` to a div doesn't give it keyboard activation on Enter/Space; that still has to be implemented by hand. Prefer a native element wherever one exists for the job.

## dangerouslySetInnerHTML

Any use of \`dangerouslySetInnerHTML\` with content derived from user input is a stored/reflected XSS risk. If rendering rich text or Markdown-derived HTML is genuinely required, sanitize it with a library like DOMPurify immediately before rendering, not at some earlier point in the pipeline that a later refactor could bypass.
`,
    },
    files: [
      'skills/react-best-practices/SKILL.md',
      'skills/react-best-practices/references/component-architecture.md',
      'skills/react-best-practices/references/hooks-state-management.md',
      'skills/react-best-practices/references/performance.md',
      'skills/react-best-practices/references/testing-rtl.md',
      'skills/react-best-practices/references/accessibility-security.md',
    ],
  },
  {
    slug: 'mcp-builder',
    name: 'MCP Builder',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 890,
    forks: 95,
    addedDate: '2026-05-14',
    icon: '🔌',
    description:
      'Guides the design of a Model Context Protocol server by scoping each tool tightly, writing precise descriptions and schemas, and structuring error handling so agents can call it reliably.',
    argumentHint: '[server-name]',
    tags: ['mcp', 'tool-design', 'server-architecture'],
    intro: 'Turns a grab-bag of API wrappers into a small set of well-scoped tools an agent can actually reason about, instead of one that gets ignored or misused.',
    howItWorks: [
      'Clarify the underlying system\'s capabilities and identify the smallest set of operations worth exposing as tools.',
      'Draft a name and one-sentence description for each tool that states exactly when an agent should call it.',
      'Define input and output schemas with explicit types, required fields, and realistic examples.',
      'Design error responses that tell the calling agent what went wrong and what to try next, rather than raw stack traces.',
      'Structure the server code so tools stay independent, testable, and easy to add to without touching existing ones.',
    ],
    files: ['skills/mcp-builder/SKILL.md'],
  },
  {
    slug: 'create-hooks',
    name: 'Create Hooks',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 420,
    forks: 45,
    addedDate: '2026-06-01',
    icon: '🪝',
    description:
      'Provides expert guidance for authoring Claude Code hooks, covering event selection, matcher configuration, and writing hook scripts that run fast and fail safely.',
    argumentHint: '[hook-event]',
    tags: ['claude-code', 'hooks', 'automation'],
    intro: 'Turns from now on always do X requests into a properly wired hook instead of an instruction that quietly gets forgotten.',
    howItWorks: [
      'Identify which lifecycle event, such as PreToolUse or PostToolUse, actually corresponds to the desired trigger point.',
      'Write a matcher that targets the right tools or commands without over- or under-matching.',
      'Draft the hook script logic, keeping it short-running and side-effect-aware so it cannot stall the session.',
      'Add safe failure handling so a hook error blocks or warns as intended rather than crashing silently.',
      'Wire the hook into settings.json and describe how to verify it fires correctly on a test action.',
    ],
    files: ['skills/create-hooks/SKILL.md'],
  },
  {
    slug: 'create-plans',
    name: 'Create Plans',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 610,
    forks: 70,
    addedDate: '2026-04-19',
    icon: '🗺️',
    description:
      'Builds a hierarchical project plan of epics, tasks, and subtasks structured so a single agent can execute it sequentially without losing track of prior context.',
    argumentHint: '[project-description]',
    tags: ['project-planning', 'task-breakdown', 'agent-workflow'],
    intro: 'Turns a one-line feature request into an ordered, checkable task tree instead of a wall of text an agent re-reads from scratch every step.',
    howItWorks: [
      'Clarify the overall goal and constraints, then split the work into a small number of epics.',
      'Break each epic into concrete tasks that can be completed and verified independently.',
      'Decompose any task that touches multiple files or systems into ordered subtasks.',
      'Sequence the tree so each step\'s output supplies exactly the context the next step needs.',
      'Attach a completion check to each task so progress can be verified before moving on.',
    ],
    files: ['skills/create-plans/SKILL.md'],
  },
  {
    slug: 'create-slash-commands',
    name: 'Create Slash Commands',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 265,
    forks: 28,
    addedDate: '2026-06-20',
    icon: '⌨️',
    description:
      'Provides expert guidance for authoring Claude Code slash commands, covering front-matter fields, argument-hint conventions, ARGUMENTS usage, and keeping each command focused on a single job.',
    argumentHint: '[command-name]',
    tags: ['claude-code', 'slash-commands', 'cli-design'],
    intro: 'Turns a recurring prompt copy-pasted from chat history into a proper reusable command instead of another paragraph retyped every time.',
    howItWorks: [
      'Clarify the single job the command should perform and reject scope creep beyond that job.',
      'Draft the front-matter, including a clear description and an argument-hint that matches expected input.',
      'Write the command body so it substitutes ARGUMENTS cleanly and handles the no-argument case gracefully.',
      'Decide whether the command should run inline or delegate to a subagent, based on its expected output length.',
      'Test the command with representative arguments and tighten the wording until behavior is predictable.',
    ],
    files: ['skills/create-slash-commands/SKILL.md'],
  },
  {
    slug: 'create-agent-skills',
    name: 'Create Agent Skills',
    author: 'Cognivexa',
    category: 'Writing & Docs',
    stars: 1340,
    forks: 155,
    addedDate: '2026-07-08',
    icon: '🧩',
    description:
      'Provides rigorous guidance for structuring and refining Claude Agent Skills, covering SKILL.md authoring, writing accurate when-to-trigger descriptions, and keeping a skill\'s scope narrow.',
    argumentHint: '[skill-name]',
    tags: ['agent-skills', 'skill-authoring', 'documentation'],
    intro: 'Turns a skill idea into a SKILL.md that actually triggers when it should instead of one that gets skipped or fires on everything.',
    howItWorks: [
      'Define the single problem the skill solves and write it as a clear one-sentence description.',
      'Draft trigger conditions specific enough to fire on relevant requests without matching unrelated ones.',
      'Structure the SKILL.md body into scannable sections that a model can follow step by step mid-task.',
      'Remove instructions that duplicate general model knowledge and keep only what is specific to this skill.',
      'Review the finished skill against edge cases to confirm it neither over-triggers nor under-triggers.',
    ],
    files: ['skills/create-agent-skills/SKILL.md'],
  },
  {
    slug: 'create-subagents',
    name: 'Create Subagents',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 980,
    forks: 110,
    addedDate: '2026-07-25',
    icon: '🤖',
    description:
      'Provides expert guidance for designing Claude Code subagents, covering tool-access scoping, system-prompt writing, and deciding when a task should be delegated rather than handled inline.',
    argumentHint: '[subagent-purpose]',
    tags: ['subagents', 'agent-design', 'delegation'],
    intro: 'Turns an all-purpose helper agent into a narrowly scoped specialist instead of one that reaches for tools it does not need.',
    howItWorks: [
      'Clarify the task category the subagent should own and confirm it benefits from running in a separate context.',
      'Select the minimal tool set the subagent needs and exclude anything that expands its blast radius unnecessarily.',
      'Write a system prompt that states the subagent\'s role, boundaries, and expected report format.',
      'Define criteria for when the parent should delegate to this subagent versus completing the work inline.',
      'Test the subagent on a representative task and check whether its final report gives the parent enough to act on.',
    ],
    files: ['skills/create-subagents/SKILL.md'],
  },
  {
    slug: 'create-claude-commands',
    name: 'Create Claude Commands',
    author: 'Cognivexa',
    category: 'Writing & Docs',
    stars: 155,
    forks: 14,
    addedDate: '2026-08-10',
    icon: '📘',
    description:
      'Guides the authoring of a project\'s CLAUDE.md configuration file, covering what belongs in it, how to keep it concise, and how to phrase instructions so they are not ignored.',
    argumentHint: '[project-path]',
    tags: ['claude-md', 'project-config', 'documentation'],
    intro: 'Turns a bloated CLAUDE.md nobody follows into a short file the model actually reads and obeys, instead of one it skims past.',
    howItWorks: [
      'Review the existing CLAUDE.md, if any, and separate load-bearing instructions from stale or generic filler.',
      'Identify project conventions, such as build commands and file layout, that a model could not infer on its own.',
      'Rewrite each instruction as a direct, specific statement rather than a vague preference.',
      'Trim sections that duplicate what is already discoverable from the codebase itself.',
      'Verify the final file stays short enough to be read in full each session while covering every must-follow rule.',
    ],
    files: ['skills/create-claude-commands/SKILL.md'],
  },
  {
    slug: 'debug-like-an-expert',
    name: 'Debug Like An Expert',
    author: 'Cognivexa',
    category: 'Debug & Test',
    stars: 1450,
    forks: 178,
    addedDate: '2026-03-14',
    icon: '🕵️',
    description:
      'Guides systematic root-cause investigation for difficult bugs by requiring full context gathering, multiple competing hypotheses, and isolated testing of each one before any fix is attempted.',
    argumentHint: '[bug-description]',
    tags: ['root-cause-analysis', 'hypothesis-testing', 'debugging'],
    intro: 'Turns guess-and-check debugging into a disciplined investigation instead of a lucky patch.',
    howItWorks: [
      'Collect the full error output, stack trace, logs, and recent changes surrounding the failure.',
      'Reproduce the bug reliably before touching any code.',
      'Draft at least three distinct hypotheses for the root cause, ranked by plausibility.',
      'Design a minimal test or probe for the top hypothesis and run it in isolation.',
      'Discard disproven hypotheses, refine the fix, and confirm the corrected behavior against the original reproduction case.',
    ],
    files: ['skills/debug-like-an-expert/SKILL.md'],
  },
  {
    slug: 'using-superpowers',
    name: 'Using Superpowers',
    author: 'Cognivexa',
    category: 'Utility',
    stars: 620,
    forks: 71,
    addedDate: '2026-04-02',
    icon: '🦸',
    description:
      'Acts as the entry point for coding, testing, or refactoring work by surveying which workflow skills apply to the task and sequencing them before any implementation begins.',
    argumentHint: '[task-description]',
    tags: ['workflow-orchestration', 'skill-routing', 'task-planning'],
    intro: 'Turns a loose task request into an ordered plan of the right skills instead of an immediate dive into code.',
    howItWorks: [
      'Read the incoming task and classify its type, such as bug fix, new feature, refactor, or review.',
      'Check the list of available workflow skills against the task classification.',
      'Select the applicable skills and determine the order they should run in.',
      'Announce the sequence before invoking the first skill.',
      'Hand off to each skill in turn, confirming completion before advancing to the next.',
    ],
    files: ['skills/using-superpowers/SKILL.md'],
  },
  {
    slug: 'verification-before-completion',
    name: 'Verification Before Completion',
    author: 'Cognivexa',
    category: 'Debug & Test',
    stars: 890,
    forks: 102,
    addedDate: '2026-03-22',
    icon: '✔️',
    description:
      'Blocks premature claims of a task being done, fixed, or passing by requiring the relevant tests, build, or lint to actually be run and their output cited as evidence.',
    argumentHint: '[completed-task]',
    tags: ['test-verification', 'build-checks', 'evidence-based'],
    intro: 'Replaces confident assertions of success with actual command output as proof.',
    howItWorks: [
      'Identify which commands, such as the test suite, build, or linter, are relevant to the change made.',
      'Run each identified command and capture its full output.',
      'Compare the output against the expected passing state, not against memory of prior runs.',
      'Flag any failures, warnings, or skipped tests instead of glossing over them.',
      'Only report the task as complete once the cited evidence supports that claim.',
    ],
    files: ['skills/verification-before-completion/SKILL.md'],
  },
  {
    slug: 'subagent-driven-development',
    name: 'Subagent-Driven Development',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 340,
    forks: 42,
    addedDate: '2026-05-11',
    icon: '🧵',
    description:
      'Coordinates implementation of a multi-task plan by identifying which tasks are independent enough to run in parallel subagents and which require sequential handoffs.',
    argumentHint: '[plan-file-or-tasks]',
    tags: ['subagent-coordination', 'parallel-execution', 'task-dependencies'],
    intro: 'Turns a flat task list into a coordinated dispatch of parallel and sequential work instead of one long serial chain.',
    howItWorks: [
      'Parse the plan into discrete tasks and map their inputs, outputs, and shared files.',
      'Build a dependency graph identifying which tasks have no overlapping resources.',
      'Dispatch independent tasks to separate subagents to run concurrently.',
      'Queue dependent tasks behind the subagent output they rely on.',
      'Reconcile all subagent results into a single coherent implementation and check for conflicts.',
    ],
    files: ['skills/subagent-driven-development/SKILL.md'],
  },
  {
    slug: 'test-driven-development',
    name: 'Test-Driven Development',
    author: 'Cognivexa',
    category: 'Debug & Test',
    stars: 2100,
    forks: 245,
    addedDate: '2026-03-09',
    icon: '🔴',
    description:
      'Enforces a strict red-green-refactor cycle by requiring a failing test before any implementation code, then only the minimum code needed to pass it, followed by refactoring.',
    argumentHint: '[feature-or-fix]',
    tags: ['red-green-refactor', 'unit-testing', 'tdd'],
    intro: 'Turns feature work into small proven increments instead of code written ahead of its tests.',
    howItWorks: [
      'Write a single test that captures the next small piece of desired behavior and confirm it fails.',
      'Write the minimum implementation code needed to make that test pass, resisting any extra scope.',
      'Run the full test suite to confirm the new test passes without breaking existing ones.',
      'Refactor the implementation and test code for clarity while keeping all tests green.',
      'Repeat the cycle for the next behavior until the feature or fix is complete.',
    ],
    files: ['skills/test-driven-development/SKILL.md'],
  },
  {
    slug: 'finishing-a-development-branch',
    name: 'Finishing A Development Branch',
    author: 'Cognivexa',
    category: 'Git & Version Control',
    stars: 480,
    forks: 58,
    addedDate: '2026-06-03',
    icon: '🏁',
    description:
      'Runs a completion checklist covering lint, build, tests, documentation, and leftover TODOs before a development branch is considered ready to merge.',
    argumentHint: '[branch-name]',
    tags: ['merge-readiness', 'completion-checklist', 'branch-hygiene'],
    intro: 'Turns "I think it\'s done" into a checked-off list before the branch is declared mergeable.',
    howItWorks: [
      'Run the linter and build across the full branch diff and confirm both are clean.',
      'Run the complete test suite and record the pass results.',
      'Scan the changed files for leftover TODO, FIXME, or debug statements.',
      'Confirm documentation and changelog entries reflect the new behavior.',
      'Summarize the checklist results and flag any item that still needs attention before merge.',
    ],
    files: ['skills/finishing-a-development-branch/SKILL.md'],
  },
  {
    slug: 'requesting-code-review',
    name: 'Requesting Code Review',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 760,
    forks: 88,
    addedDate: '2026-05-28',
    icon: '👀',
    description:
      'Packages a finished change into a reviewable request by summarizing what changed, why, and which parts deserve the closest scrutiny, rather than submitting a bare diff link.',
    argumentHint: '[pr-or-diff]',
    tags: ['code-review', 'pr-description', 'review-context'],
    intro: 'Turns a raw diff into a guided review request instead of leaving reviewers to reconstruct context themselves.',
    howItWorks: [
      'Summarize the intent of the change and the problem it solves in a short opening statement.',
      'List the files touched and group them by logical purpose.',
      'Call out any risky, complex, or non-obvious sections that warrant closer reading.',
      'Note what testing was performed and what remains unverified.',
      'Compile the summary, risk callouts, and testing notes into the review request before submission.',
    ],
    files: ['skills/requesting-code-review/SKILL.md'],
  },
  {
    slug: 'resolving-code-review',
    name: 'Resolving Code Review',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 210,
    forks: 24,
    addedDate: '2026-07-14',
    icon: '🔁',
    description:
      'Triages incoming review feedback into must-fix, nice-to-have, and disagree categories, and drafts respectful pushback on comments that seem ambiguous or overreaching.',
    argumentHint: '[review-comments]',
    tags: ['review-triage', 'feedback-handling', 'pushback'],
    intro: 'Turns a list of review comments into a sorted response plan instead of blind compliance with every note.',
    howItWorks: [
      'Read every review comment and classify it as must-fix, nice-to-have, or disputed.',
      'Address must-fix items first and implement the requested changes directly.',
      'Evaluate nice-to-have items against remaining time and scope before deciding to include them.',
      'Draft a clear, respectful counter-argument for any comment that seems ambiguous, out of scope, or based on a misunderstanding.',
      'Reply to each comment thread confirming what was changed, deferred, or contested.',
    ],
    files: ['skills/resolving-code-review/SKILL.md'],
  },
  {
    slug: 'executing-plans',
    name: 'Executing Plans',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 1020,
    forks: 119,
    addedDate: '2026-06-20',
    icon: '📐',
    description:
      'Tracks execution of a previously written multi-step development plan by checkpointing progress after each step and resuming cleanly if the session is interrupted.',
    argumentHint: '[plan-file]',
    tags: ['plan-execution', 'progress-tracking', 'checkpointing'],
    intro: 'Turns a written plan into a resumable, trackable execution instead of a document that goes stale mid-run.',
    howItWorks: [
      'Load the plan and confirm each step\'s scope, order, and completion criteria.',
      'Execute the next incomplete step and validate it against its stated criteria.',
      'Record the step as complete in a checkpoint file before moving to the next one.',
      'On resume after an interruption, read the checkpoint file to find the last completed step.',
      'Continue execution from that point without repeating or skipping any step.',
    ],
    files: ['skills/executing-plans/SKILL.md'],
  },
  {
    slug: 'dispatching-parallel-agents',
    name: 'Dispatching Parallel Agents',
    author: 'Cognivexa',
    category: 'Utility',
    stars: 150,
    forks: 19,
    addedDate: '2026-08-05',
    icon: '🧑‍🤝‍🧑',
    description:
      'Splits a batch of independent tasks with no shared dependencies across multiple subagents dispatched at once, then reconciles their results into a single output.',
    argumentHint: '[task-list]',
    tags: ['parallel-dispatch', 'subagent-coordination', 'result-merging'],
    intro: 'Turns a pile of unrelated tasks into simultaneous subagent runs instead of a slow sequential queue.',
    howItWorks: [
      'Confirm each task in the batch has no shared files or state with the others.',
      'Assign one subagent per independent task with a self-contained prompt.',
      'Dispatch all subagents concurrently rather than one after another.',
      'Collect each subagent\'s output as it completes.',
      'Merge the results, checking for conflicts or duplicated work before finalizing.',
    ],
    files: ['skills/dispatching-parallel-agents/SKILL.md'],
  },
  {
    slug: 'brainstorming',
    name: 'Brainstorming',
    author: 'Cognivexa',
    category: 'Utility',
    stars: 1450,
    forks: 165,
    addedDate: '2026-03-12',
    icon: '💡',
    description:
      'Runs a structured ideation pass before any code is written for a new feature, design, or architecture decision. It surfaces multiple distinct approaches, weighs their tradeoffs against the stated constraints, and requires explicit sign-off on a direction before implementation starts.',
    argumentHint: '[feature-or-decision]',
    tags: ['ideation', 'tradeoff-analysis', 'pre-implementation'],
    intro: 'Turns the first hour of a project into a decision record instead of a head start on the wrong approach.',
    howItWorks: [
      'Restate the problem and constraints in plain terms and confirm them with the requester before generating options.',
      'Draft at least three structurally different approaches, not variations on the same idea.',
      'Score each approach against complexity, risk, performance, and maintenance cost.',
      'Present the comparison as a short table and recommend one option with reasoning.',
      'Wait for explicit approval or a chosen alternative before writing any implementation code.',
    ],
    files: ['skills/brainstorming/SKILL.md'],
  },
  {
    slug: 'file-organizer',
    name: 'File Organizer',
    author: 'Cognivexa',
    category: 'Knowledge Management',
    stars: 620,
    forks: 78,
    addedDate: '2026-03-29',
    icon: '🗃️',
    description:
      'Organizes files and folders by reading their actual content rather than trusting filenames or extensions alone. It flags duplicate and near-duplicate files and proposes a cleaner folder structure grouped by topic and purpose.',
    argumentHint: '[folder-path]',
    tags: ['file-management', 'deduplication', 'auto-sort'],
    intro: 'Sorts by what a file actually contains instead of what it happens to be named.',
    howItWorks: [
      'Scan the target folder recursively and sample the content of each file, not just its name.',
      'Cluster files by topic, project, and document type using content similarity.',
      'Identify exact and near-duplicate files by comparing content hashes and text overlap.',
      'Propose a revised folder hierarchy with clear category names and flag files that do not fit anywhere.',
      'Apply the reorganization only after the user confirms the proposed structure and duplicate list.',
    ],
    files: ['skills/file-organizer/SKILL.md'],
  },
  {
    slug: 'systematic-debugging',
    name: 'Systematic Debugging',
    author: 'Cognivexa',
    category: 'Debug & Test',
    stars: 1980,
    forks: 230,
    addedDate: '2026-04-08',
    icon: '🔬',
    description:
      'Applies a disciplined debugging process to any bug, failing test, or unexpected behavior before a fix is proposed. It reproduces the issue reliably, narrows the root cause through bisection-style isolation, and confirms the fix resolves the actual cause rather than a symptom.',
    argumentHint: '[bug-or-failure]',
    tags: ['root-cause-analysis', 'bisection', 'regression-testing'],
    intro: 'Replaces guess-and-patch fixes with a narrowed-down, verified root cause.',
    howItWorks: [
      'Reproduce the failure with a minimal, repeatable case before touching any code.',
      'Bisect the surrounding code, inputs, or recent commits to narrow down where the behavior diverges.',
      'Form a specific hypothesis about the root cause and test it in isolation.',
      'Implement the smallest fix that addresses the confirmed root cause, not just the visible symptom.',
      'Re-run the original reproduction plus related tests to verify the failure is gone and nothing else broke.',
    ],
    files: ['skills/systematic-debugging/SKILL.md'],
  },
  {
    slug: 'postgres',
    name: 'Postgres',
    author: 'Cognivexa',
    category: 'Data & Analysis',
    stars: 890,
    forks: 95,
    addedDate: '2026-04-25',
    icon: '🐘',
    description:
      'Provides recommendation-only guidance for working against a PostgreSQL database, covering query design, indexing strategy, and reading EXPLAIN output. It never runs destructive statements without explicit confirmation from the user.',
    argumentHint: '[query-or-schema]',
    tags: ['sql-tuning', 'query-planning', 'indexing'],
    intro: 'Advises on the query and the index instead of just running whatever statement is handed to it.',
    howItWorks: [
      'Inspect the relevant schema, existing indexes, and table sizes before suggesting any change.',
      'Draft the query with attention to join order, filter selectivity, and expected row counts.',
      'Run EXPLAIN ANALYZE where safe and interpret the plan for sequential scans, missing indexes, or bad estimates.',
      'Recommend specific index or query rewrites with the expected impact stated plainly.',
      'Hold off on any destructive statement, such as DELETE, DROP, or TRUNCATE, until the user explicitly confirms it.',
    ],
    files: ['skills/postgres/SKILL.md'],
  },
  {
    slug: 'web-artifacts-builder',
    name: 'Web Artifacts Builder',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 1120,
    forks: 140,
    addedDate: '2026-05-14',
    icon: '🧰',
    description:
      'Supplies a set of patterns for building self-contained web artifacts, such as dashboards, small tools, and multi-component apps, that run entirely from a single HTML file with no build step or external dependencies.',
    argumentHint: '[app-idea]',
    tags: ['single-file-app', 'no-build-step', 'ui-patterns'],
    intro: 'Ships a working single-file app instead of a half-finished project scaffold.',
    howItWorks: [
      'Clarify the artifact type needed, whether a dashboard, form, game, or utility tool.',
      'Select layout and interaction patterns proven to work well inside a single HTML document.',
      'Inline all CSS and JavaScript directly in the file, avoiding any external build tooling.',
      'Wire up state and interactivity using plain JavaScript or lightweight in-browser patterns only.',
      'Test the artifact by opening it directly to confirm it renders and functions with zero setup steps.',
    ],
    files: ['skills/web-artifacts-builder/SKILL.md'],
  },
  {
    slug: 'condition-based-waiting',
    name: 'Condition-Based Waiting',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 340,
    forks: 42,
    addedDate: '2026-05-30',
    icon: '⏳',
    description:
      'Replaces fixed sleep or delay calls with polling against a real readiness condition, such as a process starting, a file appearing, or an endpoint responding. This avoids both premature failures and wasted idle time.',
    argumentHint: '[readiness-check]',
    tags: ['polling', 'test-reliability', 'async-sync'],
    intro: 'Waits for the thing to actually be ready instead of guessing how long that takes.',
    howItWorks: [
      'Identify the concrete signal that proves readiness, such as a port opening or a status file being written.',
      'Replace any fixed-duration sleep call with a polling loop that checks that exact signal.',
      'Set a short poll interval and a sane maximum timeout to avoid hanging indefinitely.',
      'Fail fast with a clear error message once the timeout is reached without the condition being met.',
      'Log how long the wait actually took so future runs can be tuned if needed.',
    ],
    files: ['skills/condition-based-waiting/SKILL.md'],
  },
  {
    slug: 'git-pushing',
    name: 'Git Pushing',
    author: 'Cognivexa',
    category: 'Git & Version Control',
    stars: 780,
    forks: 88,
    addedDate: '2026-06-11',
    icon: '📤',
    description:
      'Stages, commits, and pushes changes using well-formed conventional commit messages. It checks first for unrelated uncommitted work in the tree so it does not get swept into the same commit by accident.',
    argumentHint: '[commit-message]',
    tags: ['conventional-commits', 'git-workflow', 'safe-push'],
    intro: 'Commits what belongs together and leaves everything else exactly where it was.',
    howItWorks: [
      'Run a status check to separate changes relevant to the current task from unrelated modifications.',
      'Stage only the files tied to the current change, never a blanket add of the whole tree.',
      'Draft a conventional commit message with the correct type, scope, and a why-focused summary.',
      'Create the commit and confirm it was recorded before attempting to push.',
      'Push to the tracked remote branch and report the resulting commit hash and branch status.',
    ],
    files: ['skills/git-pushing/SKILL.md'],
  },
  {
    slug: 'using-git-worktrees',
    name: 'Using Git Worktrees',
    author: 'Cognivexa',
    category: 'Git & Version Control',
    stars: 560,
    forks: 65,
    addedDate: '2026-06-27',
    icon: '🌳',
    description:
      'Sets up a git worktree-based workspace when starting feature work that needs isolation from the main checkout. It keeps parallel branches of work from colliding over the same working directory.',
    argumentHint: '[branch-name]',
    tags: ['git-worktree', 'parallel-branches', 'workspace-isolation'],
    intro: 'Gives each branch its own working directory instead of one tree juggling every branch in turn.',
    howItWorks: [
      'Confirm the target branch and whether it already exists locally or needs to be created.',
      'Create a new worktree in a dedicated directory tied to that branch.',
      'Copy over any untracked local configuration the new worktree needs to run, such as environment files.',
      'Point subsequent commands at the new worktree path so work stays isolated from the main checkout.',
      'Remove the worktree cleanly once the branch is merged or abandoned to avoid stale directories.',
    ],
    files: ['skills/using-git-worktrees/SKILL.md'],
  },
  {
    slug: 'ralph',
    name: 'Ralph',
    author: 'Cognivexa',
    category: 'Utility',
    stars: 2150,
    forks: 310,
    addedDate: '2026-07-15',
    icon: '🔁',
    description:
      'Runs the same fixed prompt repeatedly against a task backlog until it is empty, relying on statelessness and idempotent checks rather than long-running memory between iterations. Named after the well-known autonomous-loop coding technique.',
    argumentHint: '[task-backlog]',
    tags: ['autonomous-loop', 'task-queue', 'idempotent-runs'],
    intro: 'Clears a backlog one dumb, repeatable pass at a time instead of one clever, stateful marathon.',
    howItWorks: [
      'Read the current backlog and pick the next unfinished item using only what is on disk, not memory of prior runs.',
      'Check whether that item is already done by inspecting real state, avoiding duplicate work.',
      'Execute the fixed prompt against that single item and make the smallest change that completes it.',
      'Update the backlog file to mark the item resolved before moving to the next one.',
      'Repeat the same fixed loop until the backlog file reports no remaining items.',
    ],
    files: ['skills/ralph/SKILL.md'],
  },
  {
    slug: 'image-enhancer',
    name: 'Image Enhancer',
    author: 'Cognivexa',
    category: 'Media & Graphics',
    stars: 470,
    forks: 55,
    addedDate: '2026-08-02',
    icon: '🖌️',
    description:
      'Improves the visual quality of images, especially screenshots, by upscaling resolution, sharpening blurred detail, and reducing compression artifacts such as banding and blockiness.',
    argumentHint: '[image-file]',
    tags: ['upscaling', 'sharpening', 'artifact-removal'],
    intro: 'Turns a blurry, compressed screenshot into something worth pasting into a document.',
    howItWorks: [
      'Inspect the source image to identify its resolution, format, and dominant quality issues.',
      'Upscale the image using an interpolation method suited to its content, such as edge-aware scaling for text or UI screenshots.',
      'Sharpen fine detail without amplifying existing noise or artifacts.',
      'Reduce compression artifacts like blocking and color banding introduced by lossy formats.',
      'Export the result at a specified resolution and format, comparing it side by side with the original on request.',
    ],
    files: ['skills/image-enhancer/SKILL.md'],
  },
  {
    slug: 'writing-plans',
    name: 'Writing Plans',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 1460,
    forks: 168,
    addedDate: '2026-03-16',
    icon: '📝',
    description:
      'Invoked before implementation work begins on any multi-step coding task, this skill converts a spec or requirement into an ordered, checkable plan with explicit in-scope and out-of-scope boundaries. It forces scope discipline up front so execution does not drift once code changes start.',
    argumentHint: '[spec-or-requirement]',
    tags: ['implementation-planning', 'scope-control', 'task-breakdown'],
    intro: 'Turns a vague requirement into a checklist with edges, instead of a pile of code that drifts as it goes.',
    howItWorks: [
      'Read the spec or requirement in full before writing a single line of code.',
      'Identify the discrete milestones needed to satisfy the requirement and order them by dependency.',
      'Draft explicit in-scope and out-of-scope statements so later work cannot silently expand.',
      'Convert each milestone into a checkable task with a clear definition of done.',
      'Surface open questions or ambiguous requirements as blocking items before implementation starts.',
    ],
    files: ['skills/writing-plans/SKILL.md'],
  },
  {
    slug: 'youtube-downloader',
    name: 'YouTube Downloader',
    author: 'Cognivexa',
    category: 'Media & YouTube',
    stars: 890,
    forks: 98,
    addedDate: '2026-04-06',
    icon: '📥',
    description:
      'Downloads YouTube videos and their subtitles with configurable resolution, format, and audio-only options, handling both single videos and full playlists. It manages format selection and output naming so batches of downloads stay organized.',
    argumentHint: '[youtube-url-or-playlist]',
    tags: ['video-download', 'youtube', 'media-fetch'],
    intro: 'Turns a YouTube link into a saved file on disk, instead of a page you can only watch once.',
    howItWorks: [
      'Parse the given URL to detect whether it points to a single video or a playlist.',
      'Query available formats and resolve the requested quality and container format.',
      'Fetch the video stream and, where available, the subtitle track in the requested language.',
      'Name and organize output files consistently, numbering playlist entries in order.',
      'Report any videos that failed to download along with the reason.',
    ],
    files: ['skills/youtube-downloader/SKILL.md'],
  },
  {
    slug: 'youtube-transcript',
    name: 'YouTube Transcript',
    author: 'Cognivexa',
    category: 'Media & YouTube',
    stars: 620,
    forks: 72,
    addedDate: '2026-04-21',
    icon: '📜',
    description:
      'Given a YouTube URL, fetches the video\'s subtitle track and reformats it into clean, readable text while preserving timestamps at natural paragraph breaks. It removes caption artifacts like repeated filler and auto-caption noise.',
    argumentHint: '[youtube-url]',
    tags: ['transcript-extraction', 'youtube', 'subtitles'],
    intro: 'Turns a wall of auto-generated captions into a readable transcript, instead of a jumble of timestamped fragments.',
    howItWorks: [
      'Extract the video ID from the supplied URL and fetch the available subtitle track.',
      'Prefer manually created captions over auto-generated ones when both exist.',
      'Merge fragmented caption lines into coherent sentences and paragraphs.',
      'Strip filler artifacts such as repeated words and auto-caption noise markers.',
      'Insert timestamp markers at paragraph breaks so sections remain navigable.',
    ],
    files: ['skills/youtube-transcript/SKILL.md'],
  },
  {
    slug: 'writing-skills',
    name: 'Writing Skills',
    author: 'Cognivexa',
    category: 'Writing & Docs',
    stars: 340,
    forks: 41,
    addedDate: '2026-05-05',
    icon: '🧑‍🏫',
    description:
      'Invoked when authoring a new Claude skill, editing an existing one, or auditing one before deployment, this skill checks the SKILL.md front matter, trigger description, and scope boundaries against common authoring mistakes. It flags vague triggers, missing metadata, and scope creep before the skill ships.',
    argumentHint: '[skill-directory]',
    tags: ['skill-authoring', 'quality-check', 'skill-md'],
    intro: 'Catches a badly triggered or bloated skill before it ships, instead of after it misfires in production.',
    howItWorks: [
      'Parse the SKILL.md front matter and confirm required fields are present and correctly formatted.',
      'Evaluate the trigger description for specificity, flagging wording too vague to reliably fire.',
      'Check the skill\'s stated scope against its actual instructions for mismatches or creep.',
      'Compare structure and tone against known good skills to catch inconsistent conventions.',
      'Produce a list of concrete fixes ranked by how likely each is to cause a misfire.',
    ],
    files: ['skills/writing-skills/SKILL.md'],
  },
  {
    slug: 'prd',
    name: 'PRD',
    author: 'Cognivexa',
    category: 'Writing & Docs',
    stars: 1120,
    forks: 134,
    addedDate: '2026-05-22',
    icon: '📋',
    description:
      'Generates a Product Requirements Document for a proposed feature, covering the problem statement, goals and non-goals, user stories, and success metrics. It structures ambiguous feature ideas into a document a team can review and sign off on.',
    argumentHint: '[feature-idea]',
    tags: ['product-requirements', 'documentation', 'feature-planning'],
    intro: 'Turns a rough feature idea into a document stakeholders can sign off on, instead of a Slack thread nobody can reference later.',
    howItWorks: [
      'Clarify the problem the feature is meant to solve and who experiences it.',
      'Draft explicit goals and non-goals to bound the feature\'s scope.',
      'Write user stories that describe the feature from the perspective of each affected user type.',
      'Define measurable success metrics tied to the stated goals.',
      'Assemble the sections into a single reviewable document with open questions called out separately.',
    ],
    files: ['skills/prd/SKILL.md'],
  },
  {
    slug: 'tapestry',
    name: 'Tapestry',
    author: 'Cognivexa',
    category: 'Research & Learning',
    stars: 210,
    forks: 22,
    addedDate: '2026-06-15',
    icon: '🕸️',
    description:
      'Weaves scattered notes, articles, and links on a single topic into one coherent action plan. It consolidates overlapping and conflicting material gathered during research into a single next-steps document rather than leaving it as separate fragments.',
    argumentHint: '[notes-or-links]',
    tags: ['knowledge-synthesis', 'action-planning', 'note-consolidation'],
    intro: 'Weaves a pile of scattered links and notes into one action plan, instead of leaving them as separate tabs nobody revisits.',
    howItWorks: [
      'Collect all supplied notes, articles, and links related to the topic.',
      'Extract the key claims and recommendations from each source.',
      'Identify overlaps, contradictions, and gaps across the collected material.',
      'Group related points into themes and resolve conflicting advice with explicit reasoning.',
      'Produce a single ordered action plan that reflects the synthesized findings.',
    ],
    files: ['skills/tapestry/SKILL.md'],
  },
  {
    slug: 'deep-research',
    name: 'Deep Research',
    author: 'Cognivexa',
    category: 'Research & Learning',
    stars: 1980,
    forks: 231,
    addedDate: '2026-06-30',
    icon: '🔎',
    description:
      'Performs autonomous multi-step research on a given topic by decomposing the question into sub-questions, gathering sources for each, and synthesizing the results into a cited report. It is suited to open-ended questions that require pulling together information from multiple independent sources.',
    argumentHint: '[research-question]',
    tags: ['autonomous-research', 'source-synthesis', 'cited-report'],
    intro: 'Runs an entire research pass end to end, instead of stopping after the first search result.',
    howItWorks: [
      'Break the research question down into a set of specific, answerable sub-questions.',
      'Search for and gather sources addressing each sub-question independently.',
      'Evaluate source credibility and discard low-quality or contradictory outliers.',
      'Synthesize findings across sub-questions into a coherent narrative.',
      'Compile a final report with inline citations linking each claim back to its source.',
    ],
    files: ['skills/deep-research/SKILL.md'],
  },
  {
    slug: 'learn-fast-framework',
    name: 'Learn Fast Framework',
    author: 'Cognivexa',
    category: 'Research & Learning',
    stars: 760,
    forks: 88,
    addedDate: '2026-07-10',
    icon: '⚡',
    description:
      'Transforms long-form content such as YouTube transcripts, articles, or tutorials into an actionable implementation plan, skipping straight past passive consumption. It applies a learn-by-doing framework that extracts concrete steps rather than summarizing the material for later re-reading.',
    argumentHint: '[transcript-or-article]',
    tags: ['active-learning', 'implementation-plan', 'content-to-action'],
    intro: 'Turns a tutorial you\'d normally just watch into a to-do list you can execute today.',
    howItWorks: [
      'Ingest the long-form content and identify the core skill or concept being taught.',
      'Strip out anecdotes, tangents, and repetition to isolate the actionable material.',
      'Break the actionable material into a sequence of concrete practice steps.',
      'Attach a small, doable exercise to each step so the concept is applied immediately.',
      'Flag prerequisites or gaps the learner should fill before starting the sequence.',
    ],
    files: ['skills/learn-fast-framework/SKILL.md'],
  },
  {
    slug: 'content-research-writer',
    name: 'Content Research Writer',
    author: 'Cognivexa',
    category: 'Writing & Docs',
    stars: 480,
    forks: 58,
    addedDate: '2026-07-30',
    icon: '✍️',
    description:
      'Assists in producing high-quality long-form content by researching the topic, adding supporting citations, sharpening the opening hook, and tightening formatting and titles. It works on an existing draft or outline rather than generating content from nothing.',
    argumentHint: '[draft-or-outline]',
    tags: ['long-form-writing', 'content-editing', 'citation-research'],
    intro: 'Sharpens a draft into something worth publishing, instead of leaving it as a rough first pass.',
    howItWorks: [
      'Read the existing draft or outline and identify claims that need supporting evidence.',
      'Research and attach credible citations for unsupported or weak claims.',
      'Rewrite the opening hook to establish stakes and pull the reader in immediately.',
      'Tighten formatting, headings, and paragraph length for scannability.',
      'Test and refine the title against the actual content of the piece.',
    ],
    files: ['skills/content-research-writer/SKILL.md'],
  },
  {
    slug: 'article-extractor',
    name: 'Article Extractor',
    author: 'Cognivexa',
    category: 'Research & Learning',
    stars: 150,
    forks: 18,
    addedDate: '2026-08-16',
    icon: '📰',
    description:
      'Extracts clean article content from a URL such as a blog post, news article, or tutorial, stripping ads, navigation, and other boilerplate. It saves the resulting readable text for downstream use such as summarizing or archiving.',
    argumentHint: '[article-url]',
    tags: ['content-extraction', 'web-scraping', 'readability'],
    intro: 'Pulls out the actual article, instead of the ads and navigation wrapped around it.',
    howItWorks: [
      'Fetch the raw HTML from the given URL.',
      'Identify the main content block by filtering out navigation, ads, and sidebar elements.',
      'Preserve heading structure, lists, and inline links within the extracted content.',
      'Clean up leftover boilerplate such as newsletter prompts and share buttons.',
      'Save the resulting readable text to a file for downstream use.',
    ],
    files: ['skills/article-extractor/SKILL.md'],
  },
  {
    slug: 'wordpress-pro',
    name: 'WordPress Pro',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 1860,
    forks: 214,
    addedDate: '2026-08-17',
    icon: '🐘',
    pro: true,
    domain: 'WordPress',
    platform: 'PHP',
    role: 'expert',
    scope: 'implementation',
    output: 'code',
    description:
      'Expert WordPress developer specializing in custom themes, plugins, Gutenberg blocks, WooCommerce, and WordPress performance and security optimization.',
    whenToUse:
      'Use when building WordPress themes, writing plugins, customizing Gutenberg blocks, extending WooCommerce, working with ACF, using the WordPress REST API, applying hooks and filters, or improving WordPress performance and security.',
    argumentHint: '[feature-or-file]',
    tags: ['wordpress', 'woocommerce', 'gutenberg'],
    triggers: [
      'WordPress',
      'WooCommerce',
      'Gutenberg',
      'WordPress theme',
      'WordPress plugin',
      'custom blocks',
      'ACF',
      'WordPress REST API',
      'hooks',
      'filters',
      'WordPress performance',
      'WordPress security',
    ],
    relatedSkills: ['PHP Pro', 'Laravel Specialist', 'Fullstack Guardian', 'Security Reviewer'],
    intro:
      'Expert WordPress developer specializing in custom themes, plugins, Gutenberg blocks, WooCommerce, and WordPress performance optimization.',
    coreWorkflow: [
      { title: 'Analyze requirements', detail: 'Understand WordPress context, existing setup, and goals.' },
      { title: 'Design architecture', detail: 'Plan theme/plugin structure, hooks, and data flow.' },
      { title: 'Implement', detail: 'Build using WordPress coding standards and security best practices.' },
      {
        title: 'Validate',
        detail:
          'Run phpcs --standard=WordPress to catch WPCS violations; verify nonce handling and capability checks manually.',
      },
      { title: 'Optimize', detail: 'Apply transient/object caching, query optimization, and asset enqueuing.' },
      {
        title: 'Test & secure',
        detail:
          'Confirm sanitization/escaping on all I/O, test across target WordPress versions, and run a security audit checklist.',
      },
    ],
    referenceGuide: [
      { topic: 'Theme Development', file: 'references/theme-development.md', loadWhen: 'Templates, hierarchy, child themes, FSE' },
      { topic: 'Plugin Architecture', file: 'references/plugin-architecture.md', loadWhen: 'Structure, activation, settings API, updates' },
      { topic: 'Gutenberg Blocks', file: 'references/gutenberg-blocks.md', loadWhen: 'Block dev, patterns, FSE, dynamic blocks' },
      { topic: 'Hooks & Filters', file: 'references/hooks-filters.md', loadWhen: 'Actions, filters, custom hooks, priorities' },
      { topic: 'Performance & Security', file: 'references/performance-security.md', loadWhen: 'Caching, optimization, hardening, backups' },
    ],
    codePatterns: [
      {
        title: 'Nonce Verification (form submissions)',
        language: 'php',
        code: `// Output nonce field in form
wp_nonce_field( 'my_action', 'my_nonce' );

// Verify on submission — bail early if invalid
if ( ! isset( $_POST['my_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['my_nonce'] ) ), 'my_action' ) ) {
    wp_die( esc_html__( 'Security check failed.', 'my-textdomain' ) );
}`,
      },
      {
        title: 'Sanitization & Escaping',
        language: 'php',
        code: `// Sanitize input (store)
$title   = sanitize_text_field( wp_unslash( $_POST['title'] ?? '' ) );
$content = wp_kses_post( wp_unslash( $_POST['content'] ?? '' ) );
$url     = esc_url_raw( wp_unslash( $_POST['url'] ?? '' ) );

// Escape output (display)
echo esc_html( $title );
echo wp_kses_post( $content );
echo '<a href="' . esc_url( $url ) . '">' . esc_html__( 'Link', 'my-textdomain' ) . '</a>';`,
      },
      {
        title: 'Enqueuing Scripts & Styles',
        language: 'php',
        code: `add_action( 'wp_enqueue_scripts', 'my_theme_assets' );
function my_theme_assets(): void {
    wp_enqueue_style(
        'my-theme-style',
        get_stylesheet_uri(),
        [],
        wp_get_theme()->get( 'Version' )
    );
    wp_enqueue_script(
        'my-theme-script',
        get_template_directory_uri() . '/assets/js/main.js',
        [ 'jquery' ],
        '1.0.0',
        true // load in footer
    );
    // Pass server data to JS safely
    wp_localize_script( 'my-theme-script', 'MyTheme', [
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'my_ajax_nonce' ),
    ] );
}`,
      },
      {
        title: 'Prepared Database Queries',
        language: 'php',
        code: `global $wpdb;
$results = $wpdb->get_results(
    $wpdb->prepare(
        "SELECT * FROM {$wpdb->prefix}my_table WHERE user_id = %d AND status = %s",
        absint( $user_id ),
        sanitize_text_field( $status )
    )
);`,
      },
      {
        title: 'Capability Checks',
        language: 'php',
        code: `// Always check capabilities before sensitive operations
if ( ! current_user_can( 'manage_options' ) ) {
    wp_die( esc_html__( 'You do not have permission to do this.', 'my-textdomain' ) );
}`,
      },
    ],
    mustDo: [
      'Follow WordPress Coding Standards (WPCS); validate with phpcs --standard=WordPress',
      'Use nonces for all form submissions and AJAX requests',
      'Sanitize all user inputs with appropriate functions (sanitize_text_field, wp_kses_post, etc.)',
      'Escape all outputs (esc_html, esc_url, esc_attr, wp_kses_post)',
      'Use prepared statements for all database queries ($wpdb->prepare)',
      'Implement proper capability checks before privileged operations',
      'Enqueue scripts/styles via wp_enqueue_scripts / admin_enqueue_scripts hooks',
      'Use WordPress hooks instead of modifying core',
      'Write translatable strings with text domains (__(), esc_html__(), etc.)',
      'Test across target WordPress versions',
    ],
    mustNot: [
      'Modify WordPress core files',
      'Use PHP short tags or deprecated functions',
      'Trust user input without sanitization',
      'Output data without escaping',
      'Hardcode database table names (use $wpdb->prefix)',
      'Skip capability checks in admin functions',
      'Ignore SQL injection vectors',
      'Bundle unnecessary libraries when WordPress APIs suffice',
      'Allow unsafe file upload handling',
      'Skip internationalization (i18n)',
    ],
    outputTemplate: [
      'Main plugin/theme file with proper headers',
      'Relevant template files or block code',
      'Functions with proper WordPress hooks',
      'Security implementations (nonces, sanitization, escaping)',
      'Brief explanation of WordPress-specific patterns used',
    ],
    knowledgeReference:
      'WordPress 6.4+, PHP 8.1+, Gutenberg, WooCommerce, ACF, REST API, WP-CLI, block development, theme customizer, widget API, shortcode API, transients, object caching, query optimization, security hardening, WPCS',
    howItWorks: [
      'Analyze requirements — understand WordPress context, existing setup, and goals.',
      'Design theme/plugin architecture, hooks, and data flow before writing code.',
      'Implement using WordPress coding standards, nonces, sanitization, and escaping throughout.',
      'Validate with phpcs --standard=WordPress and manual nonce/capability checks.',
      'Optimize with caching and query tuning, then run a security audit before shipping.',
    ],
    referenceFiles: {
      'references/theme-development.md': `# Theme Development

## Template Hierarchy

WordPress resolves the template for a request by walking a fixed hierarchy, from most specific to least specific. For a single post it checks, in order: \`single-{post-type}-{slug}.php\`, \`single-{post-type}.php\`, \`single.php\`, \`singular.php\`, \`index.php\`. Build the most specific template only when that page genuinely needs different markup; otherwise let it fall through so one template serves many URLs.

## Child Themes

Never edit a parent theme directly — changes are lost on update. Create a child theme instead:

\`\`\`
/* style.css */
/*
 Theme Name: My Theme Child
 Template: my-theme
 Version: 1.0.0
*/
\`\`\`

\`\`\`php
// functions.php — enqueue the parent stylesheet, then the child's
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style(
        'child-style',
        get_stylesheet_uri(),
        [ 'parent-style' ],
        wp_get_theme()->get( 'Version' )
    );
} );
\`\`\`

## Full Site Editing (FSE) / Block Themes

A block theme replaces \`header.php\`/\`footer.php\`/\`sidebar.php\` with a \`theme.json\` design-token file and HTML template parts:

\`\`\`
my-block-theme/
├── theme.json
├── templates/
│   ├── index.html
│   └── single.html
└── parts/
    ├── header.html
    └── footer.html
\`\`\`

\`theme.json\` controls global styles, color palettes, typography presets, and layout settings that the block editor reads directly — set \`settings.color.palette\` and \`styles.typography\` there rather than in a stylesheet so the editor UI and the front end stay in sync.

Templates and template parts are just block markup (\`<!-- wp:group -->\` etc.) saved as \`.html\` files; edit them visually in Appearance → Editor or hand-author the block comments directly.

## Theme Support

Declare theme features in \`functions.php\` via \`add_theme_support()\`: \`title-tag\`, \`post-thumbnails\`, \`html5\`, \`custom-logo\`, \`editor-styles\`, and \`align-wide\` are the ones nearly every theme needs. Register nav menus with \`register_nav_menus()\` and image sizes with \`add_image_size()\` in the same \`after_setup_theme\` hook.
`,
      'references/plugin-architecture.md': `# Plugin Architecture

## Main Plugin File Header

Every plugin needs a main file with a standard header comment block; WordPress parses this to populate the Plugins screen:

\`\`\`php
<?php
/**
 * Plugin Name: My Plugin
 * Description: What the plugin does, in one sentence.
 * Version: 1.0.0
 * Requires at least: 6.4
 * Requires PHP: 8.1
 * Author: Your Name
 * License: GPL v2 or later
 * Text Domain: my-plugin
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Disallow direct access.
}
\`\`\`

## Structure

Keep the main file thin — it should only bootstrap. Put logic in \`includes/\`, admin-only code in \`admin/\`, and public-facing code in \`public/\`, each loaded conditionally with \`is_admin()\` so admin classes never load on the front end.

## Activation, Deactivation, Uninstall

\`\`\`php
register_activation_hook( __FILE__, 'my_plugin_activate' );
register_deactivation_hook( __FILE__, 'my_plugin_deactivate' );

function my_plugin_activate(): void {
    // Create tables, set default options, flush rewrite rules.
    flush_rewrite_rules();
}

function my_plugin_deactivate(): void {
    // Clear scheduled events, flush rewrite rules. Do NOT delete user data here.
    flush_rewrite_rules();
}
\`\`\`

Data deletion belongs in \`uninstall.php\` at the plugin root (WordPress runs this file, not a hook, when a user clicks Delete):

\`\`\`php
<?php
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
    exit;
}
delete_option( 'my_plugin_settings' );
\`\`\`

## Settings API

\`\`\`php
add_action( 'admin_init', function () {
    register_setting( 'my_plugin_group', 'my_plugin_settings', [
        'sanitize_callback' => 'my_plugin_sanitize_settings',
    ] );

    add_settings_section( 'main', 'Main Settings', '__return_false', 'my-plugin' );

    add_settings_field( 'api_key', 'API Key', function () {
        $value = get_option( 'my_plugin_settings' )['api_key'] ?? '';
        echo '<input type="text" name="my_plugin_settings[api_key]" value="' . esc_attr( $value ) . '" />';
    }, 'my-plugin', 'main' );
} );
\`\`\`

## Updates

For plugins outside the WordPress.org repository, ship a self-hosted update check using the \`update_{type}_{file}\` transient filters, or vendor a maintained update-checker library. Always version-gate breaking changes and provide a migration routine keyed off a stored \`my_plugin_db_version\` option, run on \`plugins_loaded\`.
`,
      'references/gutenberg-blocks.md': `# Gutenberg Blocks

## block.json

Every block starts with a manifest that declares its identity, attributes, and supports:

\`\`\`json
{
  "apiVersion": 3,
  "name": "my-plugin/testimonial",
  "title": "Testimonial",
  "category": "widgets",
  "icon": "format-quote",
  "attributes": {
    "quote": { "type": "string", "source": "html", "selector": "blockquote" },
    "author": { "type": "string" }
  },
  "supports": { "align": [ "wide", "full" ] },
  "editorScript": "file:./index.js",
  "style": "file:./style-index.css"
}
\`\`\`

## Registering the Block (server-side)

\`\`\`php
add_action( 'init', function () {
    register_block_type( __DIR__ . '/build/testimonial' );
} );
\`\`\`

## Static vs. Dynamic Blocks

A static block saves its markup directly into post content. A dynamic block instead renders server-side on every request — use this whenever the output depends on data that can change independently of the post (latest posts, live pricing, user-specific content). Add a \`render_callback\` (or a \`render.php\` file referenced from \`block.json\` as \`"render": "file:./render.php"\`) and leave the block's \`save\` function returning \`null\`.

\`\`\`php
function my_plugin_render_testimonial( array $attributes ): string {
    return sprintf(
        '<blockquote>%s <cite>%s</cite></blockquote>',
        wp_kses_post( $attributes['quote'] ?? '' ),
        esc_html( $attributes['author'] ?? '' )
    );
}
\`\`\`

## InnerBlocks

Container blocks that accept nested content use \`<InnerBlocks />\` in the edit component and \`InnerBlocks.Content\` in save, optionally with \`allowedBlocks\` to restrict what can be nested and \`template\` to pre-populate a default layout.

## Block Patterns

Register a reusable multi-block layout as a pattern so it's insertable but not locked to a single block instance:

\`\`\`php
register_block_pattern( 'my-plugin/cta-banner', [
    'title'      => __( 'Call to Action Banner', 'my-plugin' ),
    'categories' => [ 'call-to-action' ],
    'content'    => file_get_contents( __DIR__ . '/patterns/cta-banner.html' ),
] );
\`\`\`

## Full Site Editing Interplay

Dynamic blocks and patterns both work inside block-theme templates the same way they work in post content, since FSE templates are themselves just block markup.
`,
      'references/hooks-filters.md': `# Hooks & Filters

## Actions vs. Filters

An action runs code at a point in the request lifecycle and does not return a value: \`do_action( 'my_event', $arg )\` / \`add_action( 'my_event', $callback, $priority, $accepted_args )\`. A filter transforms a value and must return it: \`apply_filters( 'my_value', $value, $arg )\` / \`add_filter( 'my_value', $callback )\` — a filter callback that forgets to \`return\` silently breaks the value for every subscriber after it.

## Priority & Accepted Args

\`\`\`php
add_action( 'save_post', 'my_plugin_on_save', 20, 2 ); // priority 20, expects 2 args
function my_plugin_on_save( int $post_id, WP_Post $post ): void {
    if ( wp_is_post_revision( $post_id ) ) {
        return;
    }
    // ...
}
\`\`\`

Lower priority numbers run earlier (default is 10). Bump priority up to run after other integrations have had a chance to act, or down to run first and let others build on your change.

## Custom Hooks

Fire your own hooks around meaningful extension points so other plugins and child themes can integrate without patching your code:

\`\`\`php
do_action( 'my_plugin_before_render', $context );
$output = apply_filters( 'my_plugin_output_html', $output, $context );
\`\`\`

Document every custom hook's parameters in a docblock above the \`do_action\`/\`apply_filters\` call — that comment is the only reference other developers get.

## Common Pitfalls

- A callback registered as a closure or a class method can only be removed with \`remove_action\`/\`remove_filter\` if you kept a reference to the exact same callable — an anonymous closure registered elsewhere can't be removed at all.
- Hooking too late (e.g. on \`wp_footer\` instead of \`wp_enqueue_scripts\`) causes enqueue calls to be ignored because WordPress has already printed the relevant tag.
- Removing a core hook you didn't add requires matching the exact priority it was originally registered with; \`remove_action( 'hook', 'callback' )\` without the priority argument fails silently if the original priority wasn't 10.
`,
      'references/performance-security.md': `# Performance & Security

## Caching

Use transients for expensive, infrequently-changing data (API responses, computed report data):

\`\`\`php
$data = get_transient( 'my_plugin_report' );
if ( false === $data ) {
    $data = my_plugin_expensive_calculation();
    set_transient( 'my_plugin_report', $data, HOUR_IN_SECONDS );
}
\`\`\`

On a host with a persistent object cache (Redis/Memcached), transients are automatically backed by it; without one, they fall back to the \`wp_options\` table, so keep values small and TTLs reasonable to avoid table bloat.

## Query Optimization

- Avoid \`meta_query\` on unindexed meta keys at scale; register the value as a real column or a taxonomy term when it drives a frequent query.
- Set \`'no_found_rows' => true\` on \`WP_Query\` when you don't render pagination — it skips a \`SQL_CALC_FOUND_ROWS\` count query.
- Set \`'update_post_meta_cache' => false\` and \`'update_post_term_cache' => false\` when a loop only needs post titles/IDs.
- Prefer \`WP_Query\`/\`$wpdb->prepare()\` over raw \`$wpdb->query()\` string concatenation for anything touching user input.

## Security Hardening Checklist

- Disable the theme/plugin file editor: \`define( 'DISALLOW_FILE_EDIT', true );\` in \`wp-config.php\`.
- Remove the generator meta tag (\`remove_action( 'wp_head', 'wp_generator' )\`) so the WordPress version isn't advertised.
- Rate-limit or gate \`wp-login.php\` (fail2ban, a login-attempt limiter, or moving auth behind an app-level check) — brute force is the most common WordPress compromise vector.
- Validate and restrict file uploads by MIME type and extension; never trust the client-supplied \`Content-Type\`.
- Set restrictive file permissions (\`644\` files, \`755\` directories) and keep \`wp-config.php\` outside the web root when the host allows it.
- Keep core, themes, and plugins patched — most real-world WordPress compromises exploit a known, already-fixed vulnerability in outdated code.

## Backups

Back up the database and the \`wp-content\` uploads/themes/plugins separately, on a schedule matched to how often content changes, and verify restores periodically — an untested backup is not a backup.
`,
    },
    files: [
      'skills/wordpress-pro/SKILL.md',
      'skills/wordpress-pro/references/theme-development.md',
      'skills/wordpress-pro/references/plugin-architecture.md',
      'skills/wordpress-pro/references/gutenberg-blocks.md',
      'skills/wordpress-pro/references/hooks-filters.md',
      'skills/wordpress-pro/references/performance-security.md',
    ],
  },
  {
    slug: 'php-pro',
    name: 'PHP Pro',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 1420,
    forks: 168,
    addedDate: '2026-08-18',
    icon: '🐘',
    pro: true,
    domain: 'PHP',
    platform: 'PHP',
    role: 'expert',
    scope: 'implementation',
    output: 'code',
    description:
      'Expert PHP developer specializing in strictly-typed, modern PHP: PSR standards, dependency injection, static analysis, and secure, tested implementations.',
    whenToUse:
      'Use when writing or reviewing framework-agnostic PHP, adding strict types and static analysis to a codebase, designing classes and interfaces, working with Composer and PSR standards, writing PHPUnit tests, or auditing PHP code for performance and security issues.',
    argumentHint: '[feature-or-file]',
    tags: ['php', 'phpunit', 'composer'],
    triggers: [
      'PHP',
      'PSR standards',
      'Composer',
      'PHPUnit',
      'PHP 8',
      'type declarations',
      'design patterns',
      'dependency injection',
      'PHP performance',
      'PHP security',
    ],
    relatedSkills: ['WordPress Pro', 'Laravel Specialist', 'Fullstack Guardian', 'Security Reviewer'],
    intro:
      'Expert PHP developer specializing in strictly-typed, modern PHP: PSR standards, dependency injection, static analysis, and secure, tested implementations.',
    coreWorkflow: [
      { title: 'Analyze requirements', detail: "Understand the codebase's PHP version, framework (if any), and existing conventions." },
      { title: 'Design architecture', detail: 'Plan class structure, interfaces, and dependency boundaries before writing code.' },
      { title: 'Implement', detail: 'Write strictly-typed, PSR-12-compliant PHP using appropriate design patterns.' },
      { title: 'Validate', detail: 'Run phpstan or psalm for static analysis and phpcs --standard=PSR12; fix all reported issues.' },
      { title: 'Test', detail: 'Write PHPUnit tests covering the new behavior, including edge cases and failure paths.' },
      { title: 'Optimize & secure', detail: 'Profile with Xdebug/Blackfire where relevant, and audit for injection, deserialization, and input-validation issues.' },
    ],
    referenceGuide: [
      { topic: 'Type System & Modern Syntax', file: 'references/type-system.md', loadWhen: 'Enums, readonly properties, union/intersection types, first-class callables' },
      { topic: 'Composer & Autoloading', file: 'references/composer-autoloading.md', loadWhen: 'PSR-4, composer.json, versioning, private packages' },
      { topic: 'Design Patterns', file: 'references/design-patterns.md', loadWhen: 'Dependency injection, repository pattern, value objects, when to avoid patterns' },
      { topic: 'Testing with PHPUnit', file: 'references/testing-phpunit.md', loadWhen: 'Test doubles, data providers, coverage' },
      { topic: 'Performance & Security', file: 'references/performance-security.md', loadWhen: 'OPcache, N+1 queries, prepared statements, deserialization risks' },
    ],
    codePatterns: [
      {
        title: 'Strict Types & Typed Properties',
        language: 'php',
        code: `declare(strict_types=1);

final class Money
{
    public function __construct(
        private readonly int $amountInCents,
        private readonly string $currency,
    ) {}

    public function add(self $other): self
    {
        if ($this->currency !== $other->currency) {
            throw new InvalidArgumentException('Currency mismatch.');
        }
        return new self($this->amountInCents + $other->amountInCents, $this->currency);
    }
}`,
      },
      {
        title: 'Dependency Injection via Constructor',
        language: 'php',
        code: `final class OrderService
{
    public function __construct(
        private readonly OrderRepository $orders,
        private readonly PaymentGateway $payments,
    ) {}

    public function checkout(Order $order): Receipt
    {
        $charge = $this->payments->charge($order->total());
        $this->orders->markPaid($order, $charge);
        return new Receipt($order, $charge);
    }
}`,
      },
      {
        title: 'PDO Prepared Statements',
        language: 'php',
        code: `$stmt = $pdo->prepare('SELECT * FROM users WHERE email = :email');
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);`,
      },
      {
        title: 'PHPUnit Test with Data Provider',
        language: 'php',
        code: `final class MoneyTest extends TestCase
{
    #[DataProvider('additionCases')]
    public function testAdd(int $a, int $b, int $expected): void
    {
        $result = (new Money($a, 'USD'))->add(new Money($b, 'USD'));
        $this->assertSame($expected, $result->amountInCents());
    }

    public static function additionCases(): array
    {
        return [[100, 200, 300], [0, 0, 0], [-50, 50, 0]];
    }
}`,
      },
      {
        title: 'Safe Deserialization',
        language: 'php',
        code: `// Never unserialize() untrusted input — it can trigger object injection.
$data = json_decode($payload, associative: true, flags: JSON_THROW_ON_ERROR);`,
      },
    ],
    mustDo: [
      'Use declare(strict_types=1) in every new file',
      'Type-hint all parameters, return types, and properties',
      'Run static analysis (phpstan or psalm) at a meaningful level before merging',
      "Use PDO/prepared statements or an ORM's parameter binding for all SQL",
      'Write PHPUnit tests for new behavior and regressions',
      'Use Composer for dependency management with pinned, audited versions',
      'Follow PSR-12 coding style, validated with phpcs',
      'Use dependency injection instead of static/global state',
      'Validate and sanitize all external input at the boundary',
      'Handle errors with exceptions, not silent failures or @-suppression',
    ],
    mustNot: [
      'Use unserialize() on untrusted input',
      'Use eval() or dynamic code execution on external input',
      'Suppress errors with @ instead of handling them',
      'Mix business logic into templates or presentation code',
      'Use mysql_* deprecated functions or raw string-concatenated SQL',
      'Leave var_dump/print_r/error-display code paths reachable in production',
      'Depend on superglobals directly inside business logic',
      'Ignore static analysis warnings without a documented reason',
      'Skip null/type checks on data from external APIs',
      'Version-lock dependencies without a documented reason',
    ],
    outputTemplate: [
      'Implementation with strict types and full type coverage',
      'Accompanying PHPUnit tests',
      'composer.json changes if a new dependency was added',
      'Static analysis / lint results',
      'Brief explanation of the pattern chosen',
    ],
    knowledgeReference:
      'PHP 8.1-8.3, PSR-1/4/12, Composer, PHPUnit, Pest, PHPStan/Psalm, PDO, OPcache, Xdebug, PSR-7/15 (HTTP messages/middleware), Reflection API',
    howItWorks: [
      'Analyze the codebase\'s PHP version and conventions before writing any code.',
      'Design class structure and dependency boundaries, favoring composition and DI over statics.',
      'Implement with strict types, PSR-12 style, and appropriate design patterns.',
      'Validate with phpstan/psalm and phpcs, then write PHPUnit tests for the new behavior.',
      'Profile and audit for injection, deserialization, and performance issues before shipping.',
    ],
    referenceFiles: {
      'references/type-system.md': `# Type System & Modern Syntax

## Strict Types

Add \`declare(strict_types=1);\` as the first statement in every new PHP file. Without it, PHP silently coerces scalar arguments (a string \`"5"\` passed where an \`int\` is expected becomes \`5\`), which hides bugs that only surface with unusual input.

## Readonly Properties & Constructor Promotion

\`\`\`php
final class Point
{
    public function __construct(
        public readonly float $x,
        public readonly float $y,
    ) {}
}
\`\`\`

Promoted, readonly properties remove the boilerplate of declaring a property, then assigning it in the constructor, then never allowing it to change — the three used to require three separate statements per property.

## Enums

Prefer backed enums over class-constant "enum" patterns for anything with a fixed, named set of values:

\`\`\`php
enum OrderStatus: string
{
    case Pending = 'pending';
    case Paid = 'paid';
    case Shipped = 'shipped';

    public function isTerminal(): bool
    {
        return $this === self::Shipped;
    }
}
\`\`\`

Enums can implement interfaces and carry methods, so validation logic that used to live in a separate switch statement can move onto the enum itself.

## Union & Intersection Types

\`\`\`php
function formatId(int|string $id): string { /* ... */ }

function process(Countable&Iterator $collection): void { /* ... */ }
\`\`\`

Reach for a union type when a parameter genuinely accepts more than one shape; reach for \`null\`-able types (\`?Foo\`) rather than a union with \`null\` scattered elsewhere, for readability.

## First-Class Callable Syntax

\`\`\`php
$strlen = strlen(...);
array_map($strlen, $words);
\`\`\`

This replaces the older \`'strlen'\` string-callable and \`[$this, 'method']\` array-callable forms, and is checked by static analysis the way a real reference is.
`,
      'references/composer-autoloading.md': `# Composer & Autoloading

## PSR-4 Autoloading

\`\`\`json
{
  "autoload": {
    "psr-4": {
      "App\\\\": "src/"
    }
  },
  "autoload-dev": {
    "psr-4": {
      "App\\\\Tests\\\\": "tests/"
    }
  }
}
\`\`\`

The namespace prefix must map to the directory: \`App\\Billing\\Invoice\` resolves to \`src/Billing/Invoice.php\`. Run \`composer dump-autoload -o\` to regenerate an optimized classmap after adding new PSR-4 roots.

## Versioning Dependencies

Pin with a caret constraint (\`^8.2\`) to allow non-breaking updates, and commit \`composer.lock\` so every environment — including CI — installs the exact same resolved versions. Run \`composer audit\` regularly to catch dependencies with known CVEs.

## Private Packages

For internal packages not published to Packagist, add a VCS or path repository:

\`\`\`json
{
  "repositories": [
    { "type": "vcs", "url": "git@github.com:my-org/internal-package.git" }
  ]
}
\`\`\`

## Scripts & Platform Requirements

Declare the minimum PHP version and required extensions in \`composer.json\`'s \`require\` block (\`"php": "^8.2"\`, \`"ext-pdo": "*"\`) so \`composer install\` fails fast on an incompatible environment instead of failing at runtime.
`,
      'references/design-patterns.md': `# Design Patterns

## Dependency Injection Over Statics

Pass collaborators through the constructor rather than reaching for a static factory or a global container mid-method — it makes every dependency visible in the type signature and trivially mockable in tests.

## Repository Pattern

Wrap persistence behind an interface so business logic doesn't depend on a specific ORM or query builder:

\`\`\`php
interface OrderRepository
{
    public function find(string $id): ?Order;
    public function save(Order $order): void;
}
\`\`\`

Keep the interface's methods expressed in domain terms (\`markPaid\`, not \`updateColumn\`) so swapping the storage engine never touches calling code.

## Value Objects

Model a domain concept that has no identity of its own (money, an email address, a date range) as an immutable value object rather than a primitive. This moves validation to one place (the constructor) instead of scattering \`if\`-checks everywhere the primitive is used.

## When to Avoid a Pattern

Introducing a factory, a strategy, or an abstract base class for a single concrete implementation adds indirection without a corresponding benefit. Reach for a pattern when there's a real, current need for the flexibility it buys — a second implementation that already exists, or a seam a test genuinely needs — not because the codebase might need it later.
`,
      'references/testing-phpunit.md': `# Testing with PHPUnit

## Test Doubles

Prefer a real object over a mock whenever it's cheap to construct — a mock only pays for itself when the real dependency is slow, non-deterministic, or has side effects (network calls, sending email, charging a card).

\`\`\`php
$gateway = $this->createMock(PaymentGateway::class);
$gateway->method('charge')->willReturn(new Charge('ch_123', 500));
\`\`\`

## Data Providers

Use a data provider instead of copy-pasting near-identical test methods for different inputs:

\`\`\`php
#[DataProvider('cases')]
public function testDiscount(int $subtotal, int $expected): void { /* ... */ }

public static function cases(): array
{
    return [
        'no discount below threshold' => [500, 500],
        'discount applied at threshold' => [10000, 9500],
    ];
}
\`\`\`

Naming each case (the array key) makes failures readable in the test runner output without opening the file.

## Coverage

Treat coverage percentage as a signal for untested areas, not a target to hit for its own sake — 100% line coverage with no assertions on behavior catches nothing. Prioritize covering branches with real business risk (money, permissions, external I/O) over simple getters and setters.

## Database Tests

Wrap each test in a transaction that rolls back afterward (PHPUnit's \`RefreshDatabase\`-style trait in framework integrations, or a manual \`beginTransaction\`/\`rollBack\` in plain PHPUnit) so tests never leak state into each other or require manual cleanup.
`,
      'references/performance-security.md': `# Performance & Security

## OPcache

Enable and preload OPcache in production (\`opcache.enable=1\`, \`opcache.validate_timestamps=0\` with a deploy-time cache clear) — without it, PHP recompiles every file on every request. Never disable timestamp validation on a machine where files still change live (local dev).

## N+1 Queries

Loading a collection and then querying inside the loop for each item's related data is the single most common PHP performance bug:

\`\`\`php
// N+1: one query per order
foreach ($orders as $order) {
    $items = $itemRepository->findByOrderId($order->id);
}

// One query for all of them
$itemsByOrder = $itemRepository->findByOrderIds(array_column($orders, 'id'));
\`\`\`

## Prepared Statements

Always bind parameters rather than interpolating values into a query string, even for values that "can't" contain attacker input — the cost of prepared statements is negligible and the alternative is one refactor away from a SQL injection.

## Deserialization Risks

\`unserialize()\` on attacker-controlled data can instantiate arbitrary objects and trigger their \`__wakeup\`/\`__destruct\` methods (PHP object injection). Use \`json_decode\`/\`json_encode\` for any data that crosses a trust boundary, and reserve \`serialize\`/\`unserialize\` for data your own application fully controls end to end.

## Profiling

Reach for Xdebug's profiler or Blackfire when a request is slow and the cause isn't obvious from logs — guessing at optimizations without a profile usually optimizes the wrong function.
`,
    },
    files: [
      'skills/php-pro/SKILL.md',
      'skills/php-pro/references/type-system.md',
      'skills/php-pro/references/composer-autoloading.md',
      'skills/php-pro/references/design-patterns.md',
      'skills/php-pro/references/testing-phpunit.md',
      'skills/php-pro/references/performance-security.md',
    ],
  },
  {
    slug: 'laravel-specialist',
    name: 'Laravel Specialist',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 1590,
    forks: 182,
    addedDate: '2026-08-18',
    icon: '🔺',
    pro: true,
    domain: 'Laravel',
    platform: 'PHP',
    role: 'expert',
    scope: 'implementation',
    output: 'code',
    description:
      'Expert Laravel developer specializing in Eloquent, queues, authorization, and framework-idiomatic architecture over custom plumbing.',
    whenToUse:
      'Use when building Laravel features, designing Eloquent models and migrations, writing Form Requests and policies, dispatching queued jobs, building Blade views or API resources, or writing Feature/Unit tests with PHPUnit or Pest.',
    argumentHint: '[feature-or-file]',
    tags: ['laravel', 'eloquent', 'php'],
    triggers: [
      'Laravel',
      'Eloquent',
      'Artisan',
      'Blade',
      'Laravel migrations',
      'Laravel queues',
      'Laravel middleware',
      'Laravel testing',
      'Sanctum',
      'Livewire',
    ],
    relatedSkills: ['PHP Pro', 'WordPress Pro', 'Fullstack Guardian', 'Security Reviewer'],
    intro:
      'Expert Laravel developer specializing in Eloquent, queues, authorization, and framework-idiomatic architecture over custom plumbing.',
    coreWorkflow: [
      { title: 'Analyze requirements', detail: "Understand the app's Laravel version, existing models/routes, and conventions." },
      { title: 'Design architecture', detail: 'Plan models, migrations, relationships, and service/action classes.' },
      { title: 'Implement', detail: "Build using Eloquent, Form Requests, and Laravel's conventions over custom plumbing." },
      { title: 'Validate', detail: 'Run php artisan test and larastan/phpstan; check migration reversibility.' },
      { title: 'Optimize', detail: 'Eliminate N+1 queries with eager loading, add indexes, use caching where appropriate.' },
      { title: 'Test & secure', detail: 'Cover with Feature/Unit tests, verify policies/gates, and check mass-assignment protection.' },
    ],
    referenceGuide: [
      { topic: 'Eloquent & Migrations', file: 'references/eloquent-migrations.md', loadWhen: 'Relationships, migrations, seeders, factories' },
      { topic: 'Routing & Middleware', file: 'references/routing-middleware.md', loadWhen: 'Route model binding, middleware groups, form requests' },
      { topic: 'Queues & Jobs', file: 'references/queues-jobs.md', loadWhen: 'Dispatching, retries, failed jobs, batching' },
      { topic: 'Authorization', file: 'references/authorization.md', loadWhen: 'Policies, gates, Sanctum/Passport' },
      { topic: 'Testing', file: 'references/testing.md', loadWhen: 'Feature tests, factories, mocking, database transactions' },
    ],
    codePatterns: [
      {
        title: 'Eloquent Relationship + Eager Loading',
        language: 'php',
        code: `class Order extends Model
{
    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}

// Avoid N+1: eager load instead of looping and lazy-loading.
$orders = Order::with('items.product')->where('status', 'paid')->get();`,
      },
      {
        title: 'Form Request Validation',
        language: 'php',
        code: `class StoreOrderRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('create', Order::class);
    }

    public function rules(): array
    {
        return [
            'items' => ['required', 'array', 'min:1'],
            'items.*.product_id' => ['required', 'exists:products,id'],
            'items.*.quantity' => ['required', 'integer', 'min:1'],
        ];
    }
}`,
      },
      {
        title: 'Policy-Based Authorization',
        language: 'php',
        code: `class OrderPolicy
{
    public function view(User $user, Order $order): bool
    {
        return $user->id === $order->user_id || $user->hasRole('admin');
    }
}`,
      },
      {
        title: 'Queued Job',
        language: 'php',
        code: `class SendOrderConfirmation implements ShouldQueue
{
    use Queueable, InteractsWithQueue, SerializesModels;

    public function __construct(private readonly Order $order) {}

    public function handle(Mailer $mailer): void
    {
        $mailer->to($this->order->user->email)->send(new OrderConfirmed($this->order));
    }
}`,
      },
      {
        title: 'Feature Test',
        language: 'php',
        code: `public function test_guest_cannot_create_order(): void
{
    $response = $this->postJson('/api/orders', ['items' => []]);
    $response->assertStatus(401);
}`,
      },
    ],
    mustDo: [
      'Use Form Requests for validation instead of validating inline in controllers',
      'Protect against mass assignment with $fillable or $guarded',
      "Use policies/gates for authorization, checked via can()/authorize()",
      'Eager load relationships to avoid N+1 queries',
      'Use migrations for all schema changes, never manual DB edits',
      'Queue slow operations (email, external API calls) instead of blocking requests',
      'Write Feature tests for every new route and Unit tests for complex logic',
      "Use Laravel's built-in CSRF, encryption, and hashing rather than custom implementations",
      'Use route model binding instead of manual find-or-fail lookups',
      'Keep controllers thin — push business logic into actions/services',
    ],
    mustNot: [
      'Put business logic directly in routes or controllers',
      'Use raw DB::statement with concatenated user input',
      'Disable CSRF protection to work around a form issue',
      'Skip authorization checks on API endpoints',
      'Return Eloquent models directly from API endpoints without a resource/transformer',
      'Run un-reviewed migrations directly against production',
      'Store secrets in code instead of .env / config',
      'Leave debug mode enabled in production (APP_DEBUG=false)',
      'Ignore failed job handling — always define a failed() method or monitoring',
      'Bypass the query builder with raw SQL when parameter binding would do',
    ],
    outputTemplate: [
      'Migration + model changes',
      'Form Request / policy where relevant',
      'Route + controller/action',
      'Feature/Unit tests',
      'Brief note on N+1 / query-performance considerations',
    ],
    knowledgeReference:
      'Laravel 10/11, Eloquent ORM, Blade, Artisan, Sanctum/Passport, Horizon, Pest/PHPUnit, Laravel Telescope, Livewire, queues/broadcasting, Laravel Octane',
    howItWorks: [
      "Analyze the app's Laravel version, existing models, and conventions before designing.",
      'Design models, migrations, and relationships using Eloquent idioms.',
      'Implement with Form Requests, policies, and thin controllers over custom plumbing.',
      'Validate with php artisan test and larastan; check migration reversibility.',
      'Optimize with eager loading and caching, then cover with Feature/Unit tests.',
    ],
    referenceFiles: {
      'references/eloquent-migrations.md': `# Eloquent & Migrations

## Relationships

Declare the relationship type that matches the actual cardinality — \`hasMany\`/\`belongsTo\` for one-to-many, \`belongsToMany\` for many-to-many with a pivot table, \`hasManyThrough\` when a relationship spans an intermediate model. Getting this wrong is the root cause of most N+1 and incorrect-query bugs.

\`\`\`php
class Order extends Model
{
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
\`\`\`

## Migrations

Write every schema change as a migration, and make it reversible with a real \`down()\`:

\`\`\`php
public function up(): void
{
    Schema::table('orders', function (Blueprint $table) {
        $table->unsignedInteger('total_cents')->nullable()->after('total');
    });
}

public function down(): void
{
    Schema::table('orders', function (Blueprint $table) {
        $table->dropColumn('total_cents');
    });
}
\`\`\`

For a column with live production traffic reading it, add it nullable first, backfill in a separate deploy, then make it non-nullable in a third — never add a NOT NULL column with no default to a populated table in one step.

## Seeders & Factories

Define a model factory for every model used in tests, with realistic-but-fake defaults via Faker, and states for common variations:

\`\`\`php
class OrderFactory extends Factory
{
    public function definition(): array
    {
        return ['status' => 'pending', 'total_cents' => $this->faker->numberBetween(500, 50000)];
    }

    public function paid(): static
    {
        return $this->state(['status' => 'paid']);
    }
}
\`\`\`
`,
      'references/routing-middleware.md': `# Routing & Middleware

## Route Model Binding

Let Laravel resolve the model instead of manually calling \`findOrFail\`:

\`\`\`php
Route::get('/orders/{order}', [OrderController::class, 'show']);

public function show(Order $order) { /* $order is already resolved, or a 404 was thrown */ }
\`\`\`

Use scoped bindings (\`Route::get('/users/{user}/orders/{order}')->scopeBindings()\`) when a nested resource must belong to its parent, so one user can't fetch another's order by guessing an ID.

## Middleware Groups

Group related middleware instead of listing them individually on every route:

\`\`\`php
Route::middleware(['auth:sanctum', 'throttle:api'])->group(function () {
    Route::apiResource('orders', OrderController::class);
});
\`\`\`

## Form Requests as the Validation Boundary

A Form Request is both the validation rules and the authorization check for a route in one class — inject it as the controller method's parameter and Laravel validates before the method body runs, so the method can assume its input is already valid.

## API Resources

Never return an Eloquent model directly from a JSON endpoint — wrap it in a Resource so the response shape is explicit and stable even if the underlying model gains columns later:

\`\`\`php
class OrderResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'totalCents' => $this->total_cents,
            'items' => OrderItemResource::collection($this->whenLoaded('items')),
        ];
    }
}
\`\`\`
`,
      'references/queues-jobs.md': `# Queues & Jobs

## Dispatching

\`\`\`php
SendOrderConfirmation::dispatch($order);
SendOrderConfirmation::dispatch($order)->onQueue('emails')->delay(now()->addMinutes(5));
\`\`\`

Dispatch anything that calls an external service (email, SMS, payment webhooks, third-party APIs) as a job instead of doing it inline in the request — a slow or down third party should never make your own endpoint time out.

## Retries & Backoff

\`\`\`php
class SendOrderConfirmation implements ShouldQueue
{
    public int $tries = 3;
    public function backoff(): array
    {
        return [10, 60, 300]; // seconds between attempts
    }
}
\`\`\`

Make job handling idempotent — a retried job must be safe to run again (check "already sent" state, use upserts) since Laravel's at-least-once delivery means a job can run more than once.

## Failed Jobs

Always define a \`failed()\` method or wire up \`Queue::failing()\` monitoring — a job that silently exhausts its retries and vanishes into the \`failed_jobs\` table is a production incident nobody noticed.

\`\`\`php
public function failed(Throwable $exception): void
{
    Log::error('Order confirmation failed permanently', ['order_id' => $this->order->id]);
}
\`\`\`

## Batching

Group related jobs and react to the batch as a whole when you need "all of these succeeded" semantics:

\`\`\`php
Bus::batch([new ProcessOrder($a), new ProcessOrder($b)])
    ->then(fn (Batch $batch) => Log::info('Batch complete'))
    ->catch(fn (Batch $batch, Throwable $e) => Log::error('Batch had a failure'))
    ->dispatch();
\`\`\`
`,
      'references/authorization.md': `# Authorization

## Policies

A policy centralizes the authorization rules for one model, keyed by action:

\`\`\`php
class OrderPolicy
{
    public function update(User $user, Order $order): bool
    {
        return $user->id === $order->user_id && $order->status === OrderStatus::Pending;
    }
}
\`\`\`

Register it (auto-discovered by naming convention in recent Laravel versions, or explicitly in \`AuthServiceProvider\`), then check it everywhere the action is exposed — a controller, a Blade \`@can\`, a Livewire component, and an API endpoint must all check the same policy rather than re-implementing the rule.

## Gates

Use a Gate for authorization that isn't tied to a specific model instance:

\`\`\`php
Gate::define('access-admin-panel', fn (User $user) => $user->hasRole('admin'));
\`\`\`

## API Authentication: Sanctum vs. Passport

Use Sanctum for a first-party SPA or mobile app talking to your own API (lightweight token or cookie-based auth). Reach for Passport only when you need full OAuth2 — issuing tokens to genuinely third-party clients you don't control.

## Defense in Depth

Authorization belongs at every layer it's checked: the policy is the source of truth, but also scope queries to the current user (\`Order::where('user_id', $user->id)\`) so a missing \`authorize()\` call in one code path doesn't turn into an IDOR.
`,
      'references/testing.md': `# Testing

## Feature Tests

A Feature test drives the application through HTTP, the same way a real client would — prefer it over a Unit test whenever the behavior under test involves routing, middleware, or the database:

\`\`\`php
public function test_authenticated_user_can_create_order(): void
{
    $user = User::factory()->create();
    $response = $this->actingAs($user)->postJson('/api/orders', [
        'items' => [['product_id' => Product::factory()->create()->id, 'quantity' => 2]],
    ]);
    $response->assertCreated();
    $this->assertDatabaseHas('orders', ['user_id' => $user->id]);
}
\`\`\`

## Database Transactions

Use the \`RefreshDatabase\` trait so each test runs in a transaction that rolls back at the end — tests stay isolated without needing to manually clean up rows they created.

## Mocking External Services

Fake Laravel's own facades instead of mocking HTTP clients by hand:

\`\`\`php
Http::fake(['payments.example.com/*' => Http::response(['status' => 'ok'], 200)]);
Mail::fake();
Queue::fake();
\`\`\`

Then assert on the fake (\`Mail::assertSent(OrderConfirmed::class)\`) rather than on internal implementation details.

## Factories Over Fixtures

Prefer a model factory with explicit overrides for the fields the test cares about, over a large fixture file — it keeps the setup next to the assertion and makes it obvious which values actually matter for the test.
`,
    },
    files: [
      'skills/laravel-specialist/SKILL.md',
      'skills/laravel-specialist/references/eloquent-migrations.md',
      'skills/laravel-specialist/references/routing-middleware.md',
      'skills/laravel-specialist/references/queues-jobs.md',
      'skills/laravel-specialist/references/authorization.md',
      'skills/laravel-specialist/references/testing.md',
    ],
  },
  {
    slug: 'fullstack-guardian',
    name: 'Fullstack Guardian',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 980,
    forks: 104,
    addedDate: '2026-08-18',
    icon: '🛡️',
    pro: true,
    domain: 'Fullstack',
    platform: 'Any',
    role: 'expert',
    scope: 'review',
    output: 'findings',
    description:
      'Cross-stack reviewer that traces a change across the database, API, and frontend to catch contract drift, unsafe migrations, and rolling-deploy breakage before merge.',
    whenToUse:
      'Use before merging any change that touches both a backend and its frontend consumers, when a schema migration is involved, when an API response shape changes, or when a PR needs a fullstack pre-merge sign-off rather than a single-layer review.',
    argumentHint: '[pr-or-diff]',
    tags: ['fullstack', 'api-contracts', 'code-review'],
    triggers: [
      'fullstack review',
      'API contract',
      'frontend-backend consistency',
      'cross-stack regression',
      'pre-merge review',
      'breaking change',
      'schema migration impact',
      'type safety across boundary',
    ],
    relatedSkills: ['PHP Pro', 'Laravel Specialist', 'WordPress Pro', 'Security Reviewer'],
    intro:
      'Cross-stack reviewer that traces a change across the database, API, and frontend to catch contract drift, unsafe migrations, and rolling-deploy breakage before merge.',
    coreWorkflow: [
      { title: 'Map the change', detail: 'Identify every layer touched: DB schema, API contract, backend logic, frontend consumers.' },
      { title: 'Check contract consistency', detail: 'Confirm API request/response shapes match on both sides of the boundary.' },
      { title: 'Trace data flow', detail: 'Follow a field from database to UI (or vice versa) to catch silent breakage.' },
      { title: 'Verify migration safety', detail: "Confirm old clients don't break during a rolling deploy." },
      { title: 'Run cross-stack tests', detail: 'Execute backend, frontend, and integration/e2e tests together, not in isolation.' },
      { title: 'Sign off or block', detail: 'Approve only when every layer is consistent; otherwise list the specific mismatch found.' },
    ],
    referenceGuide: [
      { topic: 'API Contract Drift', file: 'references/api-contract-drift.md', loadWhen: 'Detecting mismatched request/response shapes' },
      { topic: 'Schema Migration Safety', file: 'references/schema-migration-safety.md', loadWhen: 'Backward-compatible migrations, rolling deploys' },
      { topic: 'Type Safety Across the Boundary', file: 'references/type-safety-boundary.md', loadWhen: 'Shared types, codegen, validation at the edge' },
      { topic: 'State & Caching Consistency', file: 'references/state-caching-consistency.md', loadWhen: 'Stale cache after a shape change, invalidation' },
      { topic: 'Cross-Stack Testing', file: 'references/cross-stack-testing.md', loadWhen: 'Contract tests, e2e, staging parity' },
    ],
    codePatterns: [
      {
        title: 'Backward-Compatible Migration (expand/contract)',
        language: 'sql',
        code: `-- Step 1 (deploy N): add the new column, nullable, don't touch the old one
ALTER TABLE orders ADD COLUMN total_cents INTEGER NULL;

-- Step 2 (deploy N, background job): backfill total_cents from the old total column
UPDATE orders SET total_cents = ROUND(total * 100) WHERE total_cents IS NULL;

-- Step 3 (deploy N+1): application code reads/writes total_cents, stops using total
-- Step 4 (deploy N+2, after old clients are gone): DROP COLUMN total`,
      },
      {
        title: 'Contract Test Between Frontend and Backend',
        language: 'ts',
        code: `// consumer-driven contract: frontend asserts the exact shape it depends on
test('GET /api/orders/:id returns the shape the order page needs', async () => {
  const res = await fetch('/api/orders/123')
  const body = await res.json()
  expect(body).toMatchObject({
    id: expect.any(String),
    totalCents: expect.any(Number),
    items: expect.arrayContaining([
      expect.objectContaining({ productId: expect.any(String), quantity: expect.any(Number) }),
    ]),
  })
})`,
      },
      {
        title: 'Shared Type Definition (avoid duplicated shapes)',
        language: 'ts',
        code: `// shared/types/order.ts — imported by both the API layer and the frontend
export interface OrderResponse {
  id: string
  totalCents: number
  items: Array<{ productId: string; quantity: number }>
}`,
      },
      {
        title: 'Defensive Parsing at the Boundary',
        language: 'ts',
        code: `// Never trust that the backend still returns what it did last sprint.
const OrderSchema = z.object({
  id: z.string(),
  totalCents: z.number(),
  items: z.array(z.object({ productId: z.string(), quantity: z.number() })),
})

const order = OrderSchema.parse(await res.json())`,
      },
      {
        title: 'Cache Invalidation on Shape Change',
        language: 'ts',
        code: `// Bump the cache key version whenever the cached shape changes,
// so stale entries from before the change are never read as valid.
const CACHE_KEY = \`order:v2:\${orderId}\` // was order:v1:... before totalCents was added`,
      },
    ],
    mustDo: [
      'Trace every changed field from its source (DB column, external API) to every consumer before approving',
      "Require a shared type or generated client so frontend and backend can't silently drift",
      'Treat schema migrations as expand/contract across at least two deploys for anything with live traffic',
      'Require contract or integration tests for any endpoint shape change',
      'Check that error responses (4xx/5xx shapes) are also covered, not just the happy path',
      'Verify authentication/authorization is enforced consistently at both the API and UI layer',
      'Confirm feature flags gate both the backend behavior and the frontend code path together',
      "Check that a rolling deploy (old frontend + new backend, or vice versa) doesn't break",
      'Require the same validation rules on the client (UX) and server (source of truth)',
      'Document any intentionally breaking change and the coordinated deploy plan for it',
    ],
    mustNot: [
      'Approve a change that alters an API response shape without checking every consumer',
      'Allow a migration that drops or renames a column in the same deploy that stops writing to it',
      'Let duplicated type definitions for the same shape exist on both sides of the boundary',
      "Skip checking what happens to in-flight requests during the deploy window",
      "Assume the staging environment's data shape matches production",
      'Let client-side-only validation stand in for server-side validation',
      'Approve a change based on unit tests alone when the risk is at the integration boundary',
      'Ignore analytics/logging schema changes that downstream dashboards depend on',
      'Sign off without running the frontend against the actual new backend response, not a mock',
      'Treat "it works on my machine" as evidence the two layers agree',
    ],
    outputTemplate: [
      'A data-flow trace from source to consumer for the changed field(s)',
      'The specific mismatch found, if any, with file:line on both sides',
      'Migration safety assessment (expand/contract compliant or not)',
      'Recommended test to add before merge',
      'Explicit approve/block verdict',
    ],
    knowledgeReference:
      'REST/GraphQL contract design, OpenAPI/JSON Schema, expand-contract migrations, consumer-driven contract testing, shared TypeScript types/codegen, feature flagging, rolling deployments, cache invalidation strategies',
    howItWorks: [
      'Map every layer touched by the change: schema, API, backend logic, and frontend consumers.',
      'Trace each changed field from its source to every place it is consumed.',
      'Check that the migration is safe across a rolling deploy, not just correct in isolation.',
      'Run backend, frontend, and integration tests together against the real new contract.',
      'Approve or block with the specific mismatch and file:line, not a general impression.',
    ],
    referenceFiles: {
      'references/api-contract-drift.md': `# API Contract Drift

## What It Looks Like

The backend renames a field, changes a type (string to number), makes a field optional that was required, or reorders array items the frontend assumed were sorted — and nothing fails until a specific user hits the specific path that depended on the old shape.

## Detecting It

Diff the actual response shape before and after the change, not just the code diff — read the serializer/resource/DTO, not the controller, since that's where the wire shape is actually defined. Grep the frontend for every place that destructures or accesses the field being changed; a TypeScript-only search misses stringly-typed access in untyped JS or dynamic property access.

## The Fix

Add or update a shared type/schema (OpenAPI, JSON Schema, or a hand-shared TS interface) as part of the same change, and require the frontend PR that consumes it to be reviewed alongside the backend PR — never merge the backend half first and "fix the frontend later."

## When Drift Is Intentional

A genuinely breaking API change still needs a plan: version the endpoint, ship both shapes for one deploy cycle, or coordinate a synchronized deploy of both sides. Document which of these applies in the PR description so the reviewer isn't left guessing whether the drift is a bug or a plan.
`,
      'references/schema-migration-safety.md': `# Schema Migration Safety

## Expand/Contract

Never rename or drop a column in the same deploy that stops using it. Split any breaking schema change into:

1. **Expand** — add the new column/table alongside the old one.
2. **Migrate** — backfill and switch application code to the new shape, deployed separately.
3. **Contract** — once no code path reads the old column, drop it in a later deploy.

## Rolling Deploys

During a rolling deploy, old and new application code run simultaneously against the same database for some window. A migration is only safe if both the old code and the new code can operate correctly against the schema at every point in that window — check this explicitly, don't assume it.

## Default Values on Large Tables

Adding a \`NOT NULL\` column with no default to a large, actively-written table can lock it for the duration of the backfill on some databases. Add the column nullable, backfill in batches, then add the \`NOT NULL\` constraint once every row has a value.

## Index Changes

Adding an index on a large table can hold a lock depending on the database; use the database's online/concurrent index-creation mechanism (e.g. \`CREATE INDEX CONCURRENTLY\` in Postgres) rather than a blocking default index build during business hours.
`,
      'references/type-safety-boundary.md': `# Type Safety Across the Boundary

## The Core Problem

A backend type and a frontend type that describe the same API response are, by default, two independent pieces of code with no compiler check that they agree. They drift silently the moment one side changes without the other.

## Shared Types

Where both sides are the same language (TypeScript monorepo), put the wire-format type in a shared package both sides import — there is then exactly one place to update, and a change to it shows type errors on both sides immediately.

## Codegen From a Schema

Where the backend isn't TypeScript, generate the frontend's types from an OpenAPI spec, GraphQL schema, or protobuf definition rather than hand-writing them. A generated client fails to compile the moment the backend's contract changes, instead of failing silently at runtime.

## Validation at the Edge

Even with shared or generated types, validate the actual response at runtime (with a schema library such as Zod or io-ts) at the one place data crosses the network boundary. Compile-time types describe what the backend is *supposed* to send; runtime validation catches what it *actually* sent — including bugs, an unmigrated old server, or a network proxy that mangled the payload.
`,
      'references/state-caching-consistency.md': `# State & Caching Consistency

## The Stale Shape Problem

Changing an API response shape while an old cached response is still being served produces objects that don't match either the old or new frontend code's expectations — a partially-migrated read is often worse than a fully-old one.

## Versioned Cache Keys

Include a version segment in any cache key for data whose shape can change (\`order:v2:123\` instead of \`order:123\`), and bump it whenever the cached shape changes, so a deploy naturally invalidates old entries instead of requiring a manual cache flush that's easy to forget.

## Client-Side State

The same problem exists in frontend state managers (Redux/Zustand/React Query caches) — a user with a tab open across a deploy can hold state shaped like the old API. Prefer short cache TTLs plus revalidation-on-focus for data whose shape might change, over long-lived client caches with no invalidation path.

## CDN and Edge Caches

An API response cached at a CDN layer is invisible to both the backend and frontend test suite. If the endpoint is cached there, changing its shape needs an explicit cache purge as part of the deploy, not just a code change.
`,
      'references/cross-stack-testing.md': `# Cross-Stack Testing

## Why Layer-Isolated Tests Miss This

Backend unit tests confirm the backend does what the backend test expects. Frontend unit tests confirm the frontend does what the frontend test (usually backed by a mock) expects. Neither one confirms the two actually agree with each other — that gap is exactly where contract drift lives.

## Contract Tests

Write a test, owned by the consumer, that asserts the exact shape it depends on from the provider — run against the real provider (or a provider-verified mock), not a hand-maintained fixture that can drift from reality on its own.

## Staging Parity

Run the frontend against a staging backend that has gone through the same migration path as production will, not a fresh seed database with the final schema already applied — the fresh-seed version can hide expand/contract bugs that only show up mid-migration.

## End-to-End Tests

Reserve e2e tests for the handful of critical paths (checkout, sign-up, payment) where a cross-stack regression is expensive — e2e suites are slow and flaky at scale, so they complement contract tests rather than replacing them for everyday coverage.
`,
    },
    files: [
      'skills/fullstack-guardian/SKILL.md',
      'skills/fullstack-guardian/references/api-contract-drift.md',
      'skills/fullstack-guardian/references/schema-migration-safety.md',
      'skills/fullstack-guardian/references/type-safety-boundary.md',
      'skills/fullstack-guardian/references/state-caching-consistency.md',
      'skills/fullstack-guardian/references/cross-stack-testing.md',
    ],
  },
  {
    slug: 'security-reviewer',
    name: 'Security Reviewer',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 2040,
    forks: 245,
    addedDate: '2026-08-18',
    icon: '🔒',
    pro: true,
    domain: 'Application Security',
    platform: 'Any',
    role: 'expert',
    scope: 'review',
    output: 'findings',
    description:
      'Application security reviewer that traces untrusted input through a change and reports OWASP-class vulnerabilities ranked by severity with concrete fixes.',
    whenToUse:
      'Use for a security review of new or changed code, when auditing authentication/authorization logic, when handling user input, file uploads, or external API calls, or when triaging findings from a penetration test or scanner.',
    argumentHint: '[pr-or-file]',
    tags: ['security', 'owasp', 'code-review'],
    triggers: [
      'security review',
      'vulnerability',
      'OWASP',
      'injection',
      'XSS',
      'CSRF',
      'authentication',
      'authorization',
      'secrets',
      'security audit',
    ],
    relatedSkills: ['PHP Pro', 'Laravel Specialist', 'WordPress Pro', 'Fullstack Guardian'],
    intro:
      'Application security reviewer that traces untrusted input through a change and reports OWASP-class vulnerabilities ranked by severity with concrete fixes.',
    coreWorkflow: [
      { title: 'Scope the review', detail: 'Identify the trust boundaries, entry points, and sensitive data in the change.' },
      { title: 'Threat model', detail: 'Map how an attacker could abuse each entry point (injection, auth bypass, data exposure).' },
      { title: 'Trace untrusted input', detail: "Follow every external input from entry to where it's used (query, command, output, file path)." },
      { title: 'Check authentication & authorization', detail: 'Verify every sensitive action is gated correctly, not just the obvious ones.' },
      { title: 'Verify secrets & dependencies', detail: 'Confirm no hardcoded secrets and no known-vulnerable dependency versions.' },
      { title: 'Report with severity', detail: 'Rank findings by exploitability and impact, and provide a concrete fix for each.' },
    ],
    referenceGuide: [
      { topic: 'Injection Vulnerabilities', file: 'references/injection.md', loadWhen: 'SQL/NoSQL/command/LDAP injection patterns and fixes' },
      { topic: 'Authentication & Session Security', file: 'references/auth-session.md', loadWhen: 'Password storage, session fixation, token handling' },
      { topic: 'XSS & Output Encoding', file: 'references/xss-output-encoding.md', loadWhen: 'Reflected/stored/DOM XSS, context-aware encoding' },
      { topic: 'Access Control', file: 'references/access-control.md', loadWhen: 'IDOR, privilege escalation, missing function-level checks' },
      { topic: 'Secrets & Dependency Hygiene', file: 'references/secrets-dependencies.md', loadWhen: 'Secret scanning, SCA, supply chain risks' },
    ],
    codePatterns: [
      {
        title: 'Parameterized Query (SQL Injection)',
        language: 'js',
        code: `// Never: "SELECT * FROM users WHERE email = '" + email + "'"
// Always bind parameters:
await db.query('SELECT * FROM users WHERE email = $1', [email])`,
      },
      {
        title: 'Output Encoding by Context (XSS)',
        language: 'js',
        code: `// HTML body context
el.textContent = userInput // never el.innerHTML = userInput

// HTML attribute context
element.setAttribute('data-name', encodeHTMLAttribute(userInput))

// URL context
const href = \`/search?q=\${encodeURIComponent(userInput)}\``,
      },
      {
        title: 'Password Hashing',
        language: 'js',
        code: `const hash = await argon2.hash(password) // never md5/sha1/plain
const valid = await argon2.verify(hash, submittedPassword)`,
      },
      {
        title: 'Object-Level Authorization Check (IDOR)',
        language: 'js',
        code: `// Never trust the ID alone — verify ownership every time.
const invoice = await db.invoices.findById(invoiceId)
if (!invoice || invoice.ownerId !== currentUser.id) {
  throw new ForbiddenError()
}`,
      },
      {
        title: 'Secret Loading (never hardcoded)',
        language: 'js',
        code: `const apiKey = process.env.PAYMENT_API_KEY
if (!apiKey) throw new Error('PAYMENT_API_KEY is not configured')`,
      },
    ],
    mustDo: [
      'Treat all external input (query params, headers, cookies, file uploads, webhooks) as untrusted',
      'Use parameterized queries / ORM binding for every database call',
      'Hash passwords with a memory-hard algorithm (argon2id or bcrypt), never MD5/SHA1/plain',
      'Enforce object-level authorization checks on every ID-based lookup, not just role checks',
      'Encode output based on the context it is rendered into (HTML body, attribute, URL, JS)',
      'Store secrets in environment variables or a secrets manager, never in source control',
      'Set secure session/cookie flags (HttpOnly, Secure, SameSite) on every auth cookie',
      'Validate file uploads by content, not just extension or client-supplied MIME type',
      'Keep dependencies patched and scan for known CVEs before shipping',
      'Rate-limit authentication and password-reset endpoints',
    ],
    mustNot: [
      'Build SQL/shell/LDAP commands by string-concatenating user input',
      'Roll a custom crypto or auth scheme instead of a vetted library',
      'Trust client-side validation as the security boundary',
      'Log sensitive data (passwords, tokens, full card numbers) in plaintext',
      'Return verbose stack traces or internal errors to end users',
      'Grant broad default permissions "to make it work" and narrow later',
      'Disable TLS certificate verification, even temporarily, in code that could reach production',
      "Assume an internal network call doesn't need authentication",
      "Ship a fix without a regression test that proves the vulnerability is closed",
      'Treat a finding as low priority because it is "hard to exploit" without checking the actual attacker cost',
    ],
    outputTemplate: [
      'Findings list ranked by severity (critical/high/medium/low) with exploit scenario',
      'Exact file:line of the vulnerable code',
      'Concrete fix, as a diff or code snippet',
      'A regression test that would have caught it',
      'Any related instances of the same pattern elsewhere in the codebase',
    ],
    knowledgeReference:
      'OWASP Top 10, CWE/CVE, injection classes (SQL/NoSQL/command/LDAP), authentication/session security, XSS (reflected/stored/DOM), CSRF, IDOR/broken access control, SSRF, secrets management, dependency/SCA scanning, secure headers (CSP, HSTS)',
    howItWorks: [
      'Scope the review to the trust boundaries and entry points the change touches.',
      'Trace every piece of untrusted input from entry to where it is used.',
      'Verify authentication and authorization are enforced on every sensitive action.',
      'Check for hardcoded secrets and known-vulnerable dependencies.',
      'Report findings ranked by severity with a concrete fix and a regression test for each.',
    ],
    referenceFiles: {
      'references/injection.md': `# Injection Vulnerabilities

## SQL Injection

Any query built by concatenating untrusted input into a SQL string is exploitable, regardless of how the input is "sanitized" with escaping alone. Use parameterized queries or an ORM's binding, always:

\`\`\`js
// Vulnerable
db.query(\`SELECT * FROM users WHERE email = '\${email}'\`)

// Safe
db.query('SELECT * FROM users WHERE email = $1', [email])
\`\`\`

## NoSQL Injection

Document stores are not immune — passing a raw object from user input directly into a query operator lets an attacker inject operators:

\`\`\`js
// Vulnerable: { email: { $ne: null } } bypasses the intended equality check
db.users.find({ email: req.body.email })

// Safe: coerce to the expected primitive type first
db.users.find({ email: String(req.body.email) })
\`\`\`

## Command Injection

Never pass unsanitized input to a shell: \`exec\`, \`system\`, or a template-string-built shell command. Use the array-argument form of your language's process-spawning API, which doesn't go through a shell at all:

\`\`\`js
// Vulnerable
exec(\`convert \${filename} out.png\`)

// Safe — arguments passed directly, no shell interpretation
execFile('convert', [filename, 'out.png'])
\`\`\`

## LDAP Injection

The same principle applies to LDAP filter strings — escape or reject metacharacters (\`* ( ) \\ NUL\`) in any value interpolated into an LDAP query filter, or use a library that parameterizes filters instead of building them as strings.
`,
      'references/auth-session.md': `# Authentication & Session Security

## Password Storage

Hash with a memory-hard, adaptive algorithm — argon2id or bcrypt — never a fast general-purpose hash (MD5, SHA-1, SHA-256 alone), which is exactly what makes offline brute-forcing of a leaked hash database cheap.

## Session Fixation

Regenerate the session identifier on login (and on any privilege change), rather than reusing whatever session ID existed before authentication — otherwise an attacker who can set a victim's session ID before login can hijack the now-authenticated session.

## Token Handling

Store bearer tokens/JWTs client-side in a way that isn't reachable by JavaScript when possible (an HttpOnly cookie) to limit XSS-driven token theft. If a JWT must be readable by client JS, keep its lifetime short and pair it with a separate, HttpOnly refresh token.

## Session/Cookie Flags

\`\`\`
Set-Cookie: session=...; HttpOnly; Secure; SameSite=Lax
\`\`\`

\`HttpOnly\` blocks JavaScript access (mitigates XSS token theft), \`Secure\` blocks transmission over plain HTTP, and \`SameSite\` reduces CSRF exposure. Use \`SameSite=Strict\` for the most sensitive cookies where the UX cost is acceptable.

## Multi-Factor & Rate Limiting

Rate-limit login and password-reset endpoints per account and per IP, and treat repeated failures as a signal to require MFA or lock the account temporarily — unlimited login attempts turn any password policy into a formality.
`,
      'references/xss-output-encoding.md': `# XSS & Output Encoding

## The Three Kinds

**Reflected** — untrusted input from the current request (a query param) is echoed back into the page without encoding. **Stored** — untrusted input is saved (a comment, a profile field) and rendered for other users later, making it more dangerous since it doesn't require tricking a victim into clicking a crafted link. **DOM-based** — client-side JavaScript writes untrusted data into the DOM (\`innerHTML\`, \`document.write\`) without the server ever seeing the payload.

## Context-Aware Encoding

The correct encoding depends on where the value lands:

\`\`\`js
el.textContent = userInput                                   // HTML body
element.setAttribute('title', userInput)                     // HTML attribute — browser encodes via setAttribute
const url = \`/search?q=\${encodeURIComponent(userInput)}\`      // URL
const json = JSON.stringify({ name: userInput })              // embedding in a <script> block
\`\`\`

Using HTML-body encoding for a value placed inside a URL (or vice versa) still leaves an exploitable gap — encoding must match the sink, not just "be encoded somehow."

## Never Use innerHTML With Untrusted Data

\`el.innerHTML = userInput\` executes any \`<script>\` or event-handler attribute in the input. Use \`textContent\` for plain text, or a sanitizing library (DOMPurify) when the input must support a safe subset of HTML.

## Content Security Policy

A strict CSP (\`script-src 'self'\`, no \`unsafe-inline\`) is a second layer of defense that blocks injected scripts from executing even if an encoding gap slips through — treat it as defense in depth, not a substitute for correct encoding.
`,
      'references/access-control.md': `# Access Control

## Insecure Direct Object Reference (IDOR)

The most common real-world access-control bug: an endpoint takes an ID and returns/modifies the corresponding record without checking that the current user actually owns or may access it.

\`\`\`js
// Vulnerable — any authenticated user can read any invoice by guessing IDs
app.get('/invoices/:id', (req, res) => res.json(db.invoices.findById(req.params.id)))

// Safe — ownership checked on every access
app.get('/invoices/:id', (req, res) => {
  const invoice = db.invoices.findById(req.params.id)
  if (!invoice || invoice.ownerId !== req.user.id) return res.sendStatus(403)
  res.json(invoice)
})
\`\`\`

## Privilege Escalation

Check for both vertical escalation (a regular user reaching admin-only functionality) and horizontal escalation (a user reaching another user's data at the same privilege level, which is IDOR by another name). Test both directions explicitly — a review that only checks "can a logged-out user do this" misses most access-control bugs.

## Missing Function-Level Access Control

An admin action hidden from the UI for non-admins is not access control — if the underlying endpoint doesn't independently check the caller's role, anyone who discovers the URL can call it directly. Every sensitive endpoint must check authorization server-side regardless of what the UI shows.

## Default Deny

Design authorization so a missing or misconfigured rule denies access by default, rather than one that fails open — a bug in an allow-list is far safer than a bug in a deny-list.
`,
      'references/secrets-dependencies.md': `# Secrets & Dependency Hygiene

## Secrets

Never commit API keys, database credentials, or signing keys to source control — including in test fixtures, comments, or commit history from before it was removed (a deleted secret in git history is still exposed; rotate it, don't just delete the line). Load secrets from environment variables or a dedicated secrets manager, and fail fast at startup if a required secret is missing rather than silently running with an empty value.

## Secret Scanning

Run a secret-scanning tool (gitleaks, truffleHog, or the equivalent built into most CI platforms) on every push, not just at audit time — catching a committed secret in the same PR is far cheaper than rotating it after it's been live in history for months.

## Software Composition Analysis (SCA)

Run dependency vulnerability scanning (\`npm audit\`, \`composer audit\`, Dependabot, Snyk) on a schedule and on every dependency bump. A vulnerable transitive dependency is exploitable exactly the same as vulnerable code you wrote yourself.

## Supply Chain Risk

Pin dependency versions and review new dependencies before adding them, especially small packages with a single maintainer — a compromised maintainer account or a typosquatted package name are both real, recurring attack vectors. Prefer well-maintained, widely-used packages over marginally more convenient ones with a tiny user base.
`,
    },
    files: [
      'skills/security-reviewer/SKILL.md',
      'skills/security-reviewer/references/injection.md',
      'skills/security-reviewer/references/auth-session.md',
      'skills/security-reviewer/references/xss-output-encoding.md',
      'skills/security-reviewer/references/access-control.md',
      'skills/security-reviewer/references/secrets-dependencies.md',
    ],
  },
  {
    slug: 'python-pro',
    name: 'Python Pro',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 2210,
    forks: 268,
    addedDate: '2026-08-18',
    icon: '🐍',
    pro: true,
    domain: 'Python',
    platform: 'Python',
    role: 'expert',
    scope: 'implementation',
    output: 'code',
    description:
      'Expert Python developer specializing in fully type-hinted, tested Python: dataclasses/Pydantic, async I/O, and secure, well-packaged code.',
    whenToUse:
      'Use when writing or reviewing Python, adding type hints and static analysis, designing dataclasses/Pydantic models, working with asyncio, writing pytest tests, or auditing Python for performance and security issues.',
    argumentHint: '[feature-or-file]',
    tags: ['python', 'pytest', 'typing'],
    triggers: [
      'Python',
      'type hints',
      'pytest',
      'Python packaging',
      'async Python',
      'Python performance',
      'Python security',
      'virtual environments',
      'dataclasses',
      'Pydantic',
    ],
    relatedSkills: ['Django Pro', 'TypeScript Pro', 'Security Reviewer', 'Fullstack Guardian'],
    intro:
      'Expert Python developer specializing in fully type-hinted, tested Python: dataclasses/Pydantic, async I/O, and secure, well-packaged code.',
    coreWorkflow: [
      { title: 'Analyze requirements', detail: 'Understand the Python version, existing dependencies, and project conventions (poetry/pip/uv).' },
      { title: 'Design architecture', detail: 'Plan modules, classes/dataclasses, and interfaces before writing logic.' },
      { title: 'Implement', detail: 'Write fully type-hinted Python following PEP 8, using dataclasses/Pydantic for data structures.' },
      { title: 'Validate', detail: 'Run mypy or pyright for type checking and ruff for linting; fix all reported issues.' },
      { title: 'Test', detail: 'Write pytest tests with fixtures and parametrization covering edge cases.' },
      { title: 'Optimize & secure', detail: 'Profile with cProfile where relevant, and audit for injection, deserialization, and dependency risks.' },
    ],
    referenceGuide: [
      { topic: 'Type Hints & Modern Syntax', file: 'references/type-hints.md', loadWhen: 'Generics, Protocols, dataclasses, TypedDict' },
      { topic: 'Packaging & Environments', file: 'references/packaging-environments.md', loadWhen: 'pyproject.toml, virtual envs, dependency pinning' },
      { topic: 'Async Python', file: 'references/async-python.md', loadWhen: 'asyncio, async/await, concurrency pitfalls' },
      { topic: 'Testing with pytest', file: 'references/testing-pytest.md', loadWhen: 'Fixtures, parametrization, mocking' },
      { topic: 'Performance & Security', file: 'references/performance-security.md', loadWhen: 'Profiling, the GIL, injection, pickle risks' },
    ],
    codePatterns: [
      {
        title: 'Type Hints & Dataclasses',
        language: 'python',
        code: `from dataclasses import dataclass

@dataclass(frozen=True, slots=True)
class Money:
    amount_cents: int
    currency: str

    def add(self, other: "Money") -> "Money":
        if self.currency != other.currency:
            raise ValueError("Currency mismatch.")
        return Money(self.amount_cents + other.amount_cents, self.currency)`,
      },
      {
        title: 'Pydantic Validation',
        language: 'python',
        code: `from pydantic import BaseModel, EmailStr, field_validator

class SignupRequest(BaseModel):
    email: EmailStr
    password: str

    @field_validator("password")
    @classmethod
    def password_strength(cls, v: str) -> str:
        if len(v) < 12:
            raise ValueError("Password must be at least 12 characters.")
        return v`,
      },
      {
        title: 'Async I/O',
        language: 'python',
        code: `import asyncio
import httpx

async def fetch_all(urls: list[str]) -> list[dict]:
    async with httpx.AsyncClient() as client:
        responses = await asyncio.gather(*(client.get(url) for url in urls))
        return [r.json() for r in responses]`,
      },
      {
        title: 'Pytest Fixture + Parametrize',
        language: 'python',
        code: `import pytest

@pytest.fixture
def order_service(payment_gateway_stub):
    return OrderService(payment_gateway_stub)

@pytest.mark.parametrize("subtotal,expected", [(500, 500), (10000, 9500)])
def test_discount(order_service, subtotal, expected):
    assert order_service.apply_discount(subtotal) == expected`,
      },
      {
        title: 'Safe Deserialization',
        language: 'python',
        code: `import json

# Never pickle.loads() untrusted data — it can execute arbitrary code.
data = json.loads(payload)`,
      },
    ],
    mustDo: [
      'Type-hint all function signatures and public attributes',
      'Run mypy or pyright in CI and treat new type errors as build failures',
      'Use dataclasses or Pydantic models instead of loose dicts for structured data',
      'Manage dependencies with a lockfile (poetry.lock, uv.lock, or pip-compile output)',
      'Write pytest tests with fixtures for setup and parametrize for multiple cases',
      'Use context managers (with) for any resource that must be closed',
      'Validate and sanitize all external input at the boundary',
      'Use f-strings for formatting instead of % or .format() in new code',
      'Run ruff/flake8 for linting and fix or justify every finding',
      'Handle exceptions specifically, not with a bare except:',
    ],
    mustNot: [
      'Use pickle.loads() on untrusted data',
      'Use eval()/exec() on external input',
      'Catch exceptions with a bare except: that swallows everything',
      'Use mutable default arguments (def f(x=[]))',
      'Import * from a module in application code',
      'Leave print() debugging statements in production code paths',
      'Ignore type-checker errors without a documented # type: ignore reason',
      'Use assert statements for input validation that must run in production',
      'Shell out with shell=True when passing untrusted input',
      'Depend on system Python instead of a project-scoped virtual environment',
    ],
    outputTemplate: [
      'Implementation with full type hints',
      'Accompanying pytest tests',
      'pyproject.toml/dependency changes if applicable',
      'mypy/ruff results',
      'Brief explanation of the pattern chosen',
    ],
    knowledgeReference:
      'Python 3.11-3.12, PEP 8/484/585, mypy/pyright, ruff, pytest, Pydantic v2, asyncio, dataclasses, Poetry/uv, cProfile, the GIL and its implications for CPU-bound concurrency',
    howItWorks: [
      "Analyze the project's Python version, dependencies, and conventions before designing.",
      'Design modules and data structures with dataclasses/Pydantic before writing logic.',
      'Implement with full type hints, validated by mypy/pyright and ruff.',
      'Write pytest tests with fixtures and parametrization for edge cases.',
      'Profile and audit for injection and deserialization issues before shipping.',
    ],
    referenceFiles: {
      'references/type-hints.md': `# Type Hints & Modern Syntax

## Generics

\`\`\`python
from typing import TypeVar

T = TypeVar("T")

def first(items: list[T]) -> T | None:
    return items[0] if items else None
\`\`\`

Use built-in generics (\`list[T]\`, \`dict[K, V]\`) rather than \`typing.List\`/\`typing.Dict\` — they've been the standard since Python 3.9 and read closer to the runtime type.

## Protocols (Structural Typing)

\`\`\`python
from typing import Protocol

class SupportsTotal(Protocol):
    def total(self) -> int: ...

def print_total(item: SupportsTotal) -> None:
    print(item.total())
\`\`\`

A Protocol lets a function accept "anything with a \`.total()\` method" without requiring a shared base class — useful for decoupling code from a specific inheritance hierarchy.

## Dataclasses vs. TypedDict vs. Pydantic

Use a \`dataclass\` for an internal, in-process value object with behavior. Use \`TypedDict\` for a plain dict shape you don't own the construction of (e.g. matching an external JSON structure) without runtime validation. Use Pydantic when the data crosses a trust boundary (an API request body, a config file) and needs actual runtime validation, not just a type hint that erases at runtime.

## Slots

Add \`slots=True\` to dataclasses that will be created in bulk — it removes the per-instance \`__dict__\`, cutting memory and speeding up attribute access, at the cost of not being able to add arbitrary attributes later.
`,
      'references/packaging-environments.md': `# Packaging & Environments

## pyproject.toml

Use \`pyproject.toml\` as the single source of project metadata and dependencies (PEP 621), rather than a separate \`setup.py\`/\`setup.cfg\`/\`requirements.txt\` trio that can drift out of sync with each other.

## Virtual Environments

Never install project dependencies into the system Python. Use \`venv\`, \`poetry\`, or \`uv\` to create an isolated environment per project, and commit the lockfile (\`poetry.lock\`, \`uv.lock\`) so every machine — including CI — resolves the exact same dependency graph.

## Dependency Pinning

Pin direct dependencies with a compatible-release specifier (\`httpx>=0.27,<0.28\`) rather than an exact pin for a library, and let the lockfile pin the full transitive graph exactly. Exact-pinning every direct dependency makes routine security patches harder to pull in.

## Entry Points & CLI Tools

Declare console scripts in \`pyproject.toml\` (\`[project.scripts]\`) rather than a hand-rolled \`if __name__ == "__main__"\` wrapper, so the package installs a proper CLI command when installed.

## Auditing

Run \`pip-audit\` or the equivalent for your package manager against the lockfile on a schedule — a vulnerable transitive dependency is exploitable the same as vulnerable code you wrote yourself.
`,
      'references/async-python.md': `# Async Python

## When to Reach for asyncio

Async I/O helps when a program spends most of its time waiting on network or disk I/O and needs to juggle many such waits concurrently (an API client fetching from many endpoints, a web server handling many connections). It does not speed up CPU-bound work — the GIL still serializes actual Python bytecode execution within one process.

## async/await Basics

\`\`\`python
async def fetch_user(client: httpx.AsyncClient, user_id: int) -> dict:
    response = await client.get(f"/users/{user_id}")
    response.raise_for_status()
    return response.json()
\`\`\`

## Concurrency with gather

\`\`\`python
results = await asyncio.gather(*(fetch_user(client, uid) for uid in user_ids))
\`\`\`

\`asyncio.gather\` runs all the awaitables concurrently and raises the first exception once all have completed (or use \`return_exceptions=True\` to collect them all instead of failing fast).

## Common Pitfalls

- Calling a blocking, synchronous function (a CPU-bound loop, a non-async DB driver) inside an async function still blocks the entire event loop — offload it with \`asyncio.to_thread\` or a process pool.
- Forgetting to \`await\` a coroutine creates it without running it, and Python only warns about this after the fact (a "coroutine was never awaited" warning).
- Mixing sync and async database drivers for the same connection pool causes subtle deadlocks; pick one consistently per codebase.

## Structured Concurrency

Prefer \`asyncio.TaskGroup\` (3.11+) over manually tracking a list of \`create_task\` results — it ensures all child tasks are awaited and cancelled together if one fails, rather than leaking an orphaned task.
`,
      'references/testing-pytest.md': `# Testing with pytest

## Fixtures

A fixture separates setup from the assertion, and pytest resolves its dependency graph automatically:

\`\`\`python
@pytest.fixture
def db_session():
    session = create_test_session()
    yield session
    session.rollback()
\`\`\`

The code after \`yield\` runs as teardown, guaranteed even if the test fails.

## Parametrize

Replace near-duplicate test functions that only differ by input with one parametrized test:

\`\`\`python
@pytest.mark.parametrize("value,expected", [(0, False), (1, True), (-1, True)])
def test_is_nonzero(value, expected):
    assert is_nonzero(value) is expected
\`\`\`

## Mocking

Prefer dependency injection (pass the collaborator in) over patching a module attribute with \`unittest.mock.patch\` — patching couples the test to the exact import path of the dependency, which breaks silently on a refactor.

## Test Isolation

Each test should be able to run alone and in any order. A test that depends on state left behind by a previous test is a source of flaky CI runs; use fixtures with proper teardown (or \`pytest-django\`'s transaction-per-test) instead of shared mutable state.
`,
      'references/performance-security.md': `# Performance & Security

## Profiling Before Optimizing

Use \`cProfile\` (or \`py-spy\` for a running process) to find the actual bottleneck before rewriting anything — intuition about what's slow in Python is wrong more often than not, especially around string operations and attribute access.

## The GIL

The Global Interpreter Lock means only one thread executes Python bytecode at a time in a given process. Threads still help for I/O-bound work (they release the GIL during I/O waits); for CPU-bound work, use \`multiprocessing\` or a separate process pool to get real parallelism.

## Pickle Risks

\`pickle.loads()\` on attacker-controlled data can execute arbitrary code during deserialization — it is not a safe format for anything crossing a trust boundary. Use \`json\` for data exchanged with clients or external services, and reserve \`pickle\` for trusted, internal-only caches your own process wrote.

## Injection

Use parameterized queries with your DB driver/ORM, never string-formatted SQL. The same principle applies to \`subprocess\` calls — pass arguments as a list, not a shell string, and avoid \`shell=True\` with any untrusted input.

## Dependency Hygiene

Run \`pip-audit\` regularly and keep the lockfile current — an outdated transitive dependency with a known CVE is exploitable regardless of how careful your own code is.
`,
    },
    files: [
      'skills/python-pro/SKILL.md',
      'skills/python-pro/references/type-hints.md',
      'skills/python-pro/references/packaging-environments.md',
      'skills/python-pro/references/async-python.md',
      'skills/python-pro/references/testing-pytest.md',
      'skills/python-pro/references/performance-security.md',
    ],
  },
  {
    slug: 'django-pro',
    name: 'Django Pro',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 1680,
    forks: 196,
    addedDate: '2026-08-18',
    icon: '🎸',
    pro: true,
    domain: 'Django',
    platform: 'Python',
    role: 'expert',
    scope: 'implementation',
    output: 'code',
    description:
      "Expert Django developer specializing in the ORM, Django REST Framework, and framework-idiomatic architecture over custom plumbing.",
    whenToUse:
      'Use when building Django features, designing models and migrations, writing DRF serializers/viewsets, handling permissions, using Celery for background tasks, or writing tests with pytest-django.',
    argumentHint: '[feature-or-file]',
    tags: ['django', 'drf', 'python'],
    triggers: [
      'Django',
      'Django ORM',
      'Django REST Framework',
      'Django migrations',
      'Django admin',
      'Django middleware',
      'Django templates',
      'Celery',
      'Django signals',
      'Django testing',
    ],
    relatedSkills: ['Python Pro', 'TypeScript Pro', 'Security Reviewer', 'Fullstack Guardian'],
    intro:
      "Expert Django developer specializing in the ORM, Django REST Framework, and framework-idiomatic architecture over custom plumbing.",
    coreWorkflow: [
      { title: 'Analyze requirements', detail: "Understand the app's Django version, installed apps, and existing conventions." },
      { title: 'Design architecture', detail: 'Plan models, relationships, and where logic lives (models/services vs. views).' },
      { title: 'Implement', detail: "Build using Django's ORM, forms/serializers, and class-based views or DRF viewsets idiomatically." },
      { title: 'Validate', detail: 'Run python manage.py check, makemigrations --check, and mypy/django-stubs if configured.' },
      { title: 'Optimize', detail: 'Eliminate N+1 queries with select_related/prefetch_related, add indexes, use caching.' },
      { title: 'Test & secure', detail: "Cover with Django's test client / pytest-django, verify permissions, and check CSRF/XSS defaults are intact." },
    ],
    referenceGuide: [
      { topic: 'Models & Migrations', file: 'references/models-migrations.md', loadWhen: 'Relationships, migrations, managers, querysets' },
      { topic: 'Views & DRF', file: 'references/views-drf.md', loadWhen: 'Class-based views, serializers, viewsets, routers' },
      { topic: 'Authentication & Permissions', file: 'references/auth-permissions.md', loadWhen: 'Django auth, DRF permissions, object-level permissions' },
      { topic: 'Background Tasks', file: 'references/background-tasks.md', loadWhen: 'Celery tasks, signals, scheduled jobs' },
      { topic: 'Testing', file: 'references/testing.md', loadWhen: 'pytest-django, factories, test client' },
    ],
    codePatterns: [
      {
        title: 'Model + Custom Manager',
        language: 'python',
        code: `class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status="published")

class Article(models.Model):
    title = models.CharField(max_length=200)
    status = models.CharField(max_length=20, default="draft")
    objects = models.Manager()
    published = PublishedManager()`,
      },
      {
        title: 'select_related / prefetch_related',
        language: 'python',
        code: `# Avoid N+1: eager load related rows
orders = Order.objects.select_related("user").prefetch_related("items__product").filter(status="paid")`,
      },
      {
        title: 'DRF Serializer + Viewset',
        language: 'python',
        code: `class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ["id", "total_cents", "status"]
        read_only_fields = ["status"]

class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated, IsOwner]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)`,
      },
      {
        title: 'Object-Level Permission',
        language: 'python',
        code: `class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user_id == request.user.id`,
      },
      {
        title: 'Celery Task',
        language: 'python',
        code: `@shared_task(bind=True, max_retries=3)
def send_order_confirmation(self, order_id: int) -> None:
    order = Order.objects.get(pk=order_id)
    send_mail("Order confirmed", "...", "orders@example.com", [order.user.email])`,
      },
    ],
    mustDo: [
      'Use migrations for every schema change and run makemigrations --check in CI',
      'Use select_related/prefetch_related to avoid N+1 queries',
      'Enforce object-level permissions in DRF, not just IsAuthenticated',
      "Use Django's built-in CSRF, auth, and password hashing rather than custom implementations",
      'Validate input via forms/serializers, not directly in views',
      'Queue slow operations (email, external calls) via Celery',
      'Write tests with pytest-django or Django TestCase for every new view',
      'Keep business logic in models/services, not in views or templates',
      'Use environment-based settings for secrets',
    ],
    mustNot: [
      'Query in a template loop that triggers N+1 lookups',
      'Disable CSRF middleware to work around a form issue',
      'Return model instances directly from a DRF view without a serializer',
      'Run raw SQL with string-concatenated user input instead of the ORM or parameterized raw()',
      'Leave DEBUG=True in a production settings file',
      'Skip permission_classes on a DRF viewset that exposes user data',
      'Store secrets in settings.py committed to source control',
      'Manually edit migration files instead of letting makemigrations generate them',
    ],
    outputTemplate: [
      'Model/migration changes',
      'Serializer/form + view or viewset',
      'Permission classes where relevant',
      'Tests',
      'Brief note on query-performance considerations',
    ],
    knowledgeReference:
      'Django 4.2/5.x, Django REST Framework, Celery, django-stubs, pytest-django, Django ORM, Django admin, Django signals, Django Channels',
    howItWorks: [
      "Analyze the app's Django version, installed apps, and conventions before designing.",
      'Design models and relationships, deciding where logic belongs.',
      "Implement with Django's ORM, serializers/forms, and idiomatic views.",
      'Validate with manage.py check and makemigrations --check.',
      'Optimize with select_related/prefetch_related, then cover with tests.',
    ],
    referenceFiles: {
      'references/models-migrations.md': `# Models & Migrations

## Relationships & Managers

Choose the relationship field that matches the real cardinality (\`ForeignKey\`, \`ManyToManyField\`, \`OneToOneField\`), and add a custom \`Manager\` for a query pattern used in more than one place (\`Article.published.all()\`) rather than repeating the filter everywhere it's needed.

## Migrations

Run \`makemigrations\` and commit the generated file — never hand-edit a migration's operations list, since Django's migration graph depends on the recorded dependency chain matching what actually ran. Run \`makemigrations --check --dry-run\` in CI to catch model changes that don't have a corresponding migration.

## Safe Schema Changes on Live Tables

Adding a \`NOT NULL\` field to a populated table needs a default or a two-step migration (add nullable, backfill, then make non-nullable) — Django will prompt for a one-off default interactively, but that default doesn't get recorded for future rows unless it's also set in the model.

## QuerySets Are Lazy

A queryset doesn't hit the database until it's iterated, sliced with a concrete index, or coerced (\`list()\`, \`len()\`, boolean check). Chain filters freely before that point; each additional \`.filter()\` after evaluation triggers a new query instead of refining the cached one.
`,
      'references/views-drf.md': `# Views & DRF

## Class-Based Views

Prefer Django's generic class-based views (\`ListView\`, \`DetailView\`, \`CreateView\`) for standard CRUD over hand-writing the same query-render-response boilerplate in a function view. Override only the specific hook you need (\`get_queryset\`, \`form_valid\`) rather than the whole method.

## Serializers

A DRF \`ModelSerializer\` both validates input and shapes output — keep \`fields\` explicit rather than \`"__all__"\` so adding a sensitive model field later doesn't silently expose it through the API.

## Viewsets & Routers

\`\`\`python
router = DefaultRouter()
router.register("orders", OrderViewSet, basename="order")
\`\`\`

A \`ModelViewSet\` plus a router gives the full CRUD URL set from one class — override \`get_queryset\` to scope results to the requesting user rather than trusting the default unfiltered queryset.

## Pagination

Set a default pagination class (\`PageNumberPagination\` or \`CursorPagination\`) project-wide in settings rather than per-view, so no endpoint accidentally returns an unbounded result set as the table grows.
`,
      'references/auth-permissions.md': `# Authentication & Permissions

## Django Auth

Use Django's built-in \`User\` model (or a custom user model set up before the first migration — swapping it later is painful) and its password hashers (PBKDF2/Argon2 by default) rather than a hand-rolled auth system.

## DRF Permission Classes

\`IsAuthenticated\` only checks that a request is logged in — it says nothing about whether that user may access *this specific* object. Add object-level permission checks (\`has_object_permission\`) for any endpoint that takes a resource ID:

\`\`\`python
class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user_id == request.user.id
\`\`\`

## Combining Permissions

\`\`\`python
permission_classes = [IsAuthenticated, IsOwner | IsAdminUser]
\`\`\`

DRF supports \`&\`/\`|\`/\`~\` composition of permission classes — use it instead of writing one large permission class with branching logic for every role combination.

## Token vs. Session Auth

Use session auth for a same-origin, cookie-based frontend, and token auth (DRF's TokenAuthentication, or JWT via a library) for a separate SPA or mobile client. Don't mix both as the primary mechanism for the same endpoint without a specific reason — it doubles the surface area to secure.
`,
      'references/background-tasks.md': `# Background Tasks

## Celery Tasks

Dispatch anything slow or calling an external service as a Celery task instead of doing it inline in the request-response cycle:

\`\`\`python
send_order_confirmation.delay(order.id)
\`\`\`

Pass primitive IDs, not model instances, as task arguments — Celery serializes arguments (typically to JSON), and a model instance can go stale between when the task is queued and when it runs.

## Retries

\`\`\`python
@shared_task(bind=True, max_retries=3, default_retry_delay=60)
def charge_payment(self, order_id):
    try:
        ...
    except PaymentGatewayTimeout as exc:
        raise self.retry(exc=exc)
\`\`\`

Make tasks idempotent — Celery's at-least-once delivery means a task can run more than once; check "already done" state before repeating a side effect like charging a card or sending an email.

## Signals

Use Django signals (\`post_save\`, \`pre_delete\`) sparingly — they make control flow implicit and harder to trace. Prefer calling a service function explicitly from the view or model method unless the side effect genuinely needs to fire regardless of which code path triggered the save.

## Scheduled Jobs

Use Celery Beat (or the equivalent scheduler) for periodic tasks, and make each scheduled task safe to run concurrently or skip if a previous run is still in progress (a lock via cache or a "last run" timestamp check).
`,
      'references/testing.md': `# Testing

## pytest-django

Prefer pytest-django's fixtures (\`client\`, \`db\`) and plain \`assert\` statements over Django's \`TestCase\`/\`unittest\`-style assertions for new test suites — they read more directly and integrate with the wider pytest ecosystem (parametrize, plugins).

\`\`\`python
def test_order_list_requires_auth(client):
    response = client.get("/api/orders/")
    assert response.status_code == 401
\`\`\`

## Factories

Use \`factory_boy\` to build test data instead of hand-constructing model instances in every test:

\`\`\`python
class OrderFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Order
    status = "pending"
    total_cents = factory.Faker("random_int", min=500, max=50000)
\`\`\`

## Database Access in Tests

Mark any test that touches the database with \`@pytest.mark.django_db\` (or use the \`db\` fixture) — pytest-django wraps each such test in a transaction that rolls back afterward, so tests stay isolated without manual cleanup.

## Testing the Admin and Management Commands

Don't skip coverage for Django admin customizations or management commands just because they're "just tooling" — a broken \`import_data\` management command that silently corrupts records in production is exactly the kind of bug a quick test would catch.
`,
    },
    files: [
      'skills/django-pro/SKILL.md',
      'skills/django-pro/references/models-migrations.md',
      'skills/django-pro/references/views-drf.md',
      'skills/django-pro/references/auth-permissions.md',
      'skills/django-pro/references/background-tasks.md',
      'skills/django-pro/references/testing.md',
    ],
  },
  {
    slug: 'typescript-pro',
    name: 'TypeScript Pro',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 2380,
    forks: 291,
    addedDate: '2026-08-18',
    icon: '🔷',
    pro: true,
    domain: 'TypeScript',
    platform: 'JavaScript/TypeScript',
    role: 'expert',
    scope: 'implementation',
    output: 'code',
    description:
      'Expert TypeScript developer specializing in strict-mode type safety: discriminated unions, generics, and runtime-validated boundaries.',
    whenToUse:
      'Use when writing or reviewing TypeScript, designing types for a domain model, enabling or migrating to strict mode, working with generics or discriminated unions, or validating external data at runtime.',
    argumentHint: '[feature-or-file]',
    tags: ['typescript', 'type-safety', 'generics'],
    triggers: [
      'TypeScript',
      'type safety',
      'generics',
      'tsconfig',
      'Node.js',
      'npm packaging',
      'TypeScript testing',
      'discriminated unions',
      'type narrowing',
    ],
    relatedSkills: ['React Best Practices', 'Python Pro', 'Security Reviewer', 'Fullstack Guardian'],
    intro:
      'Expert TypeScript developer specializing in strict-mode type safety: discriminated unions, generics, and runtime-validated boundaries.',
    coreWorkflow: [
      { title: 'Analyze requirements', detail: 'Understand the target runtime (Node/browser), tsconfig strictness, and existing conventions.' },
      { title: 'Design architecture', detail: 'Model the domain with types first: discriminated unions, generics, and interfaces before logic.' },
      { title: 'Implement', detail: 'Write code under strict mode with no implicit any, favoring narrow types over broad ones.' },
      { title: 'Validate', detail: 'Run tsc --noEmit and eslint; fix all reported issues, not just the errors.' },
      { title: 'Test', detail: 'Write Vitest/Jest tests, including type-level tests for complex generics where warranted.' },
      { title: 'Optimize & secure', detail: 'Check bundle size impact, and audit for prototype pollution, unsafe any casts, and untrusted input.' },
    ],
    referenceGuide: [
      { topic: 'Type System Fundamentals', file: 'references/type-system.md', loadWhen: 'Generics, conditional types, discriminated unions' },
      { topic: 'tsconfig & Project Setup', file: 'references/tsconfig-project-setup.md', loadWhen: 'strict mode, module resolution, project references' },
      { topic: 'Async & Error Handling', file: 'references/async-error-handling.md', loadWhen: 'Promises, Result types, never-throwing patterns' },
      { topic: 'Testing', file: 'references/testing.md', loadWhen: 'Vitest/Jest, mocking, type-level tests' },
      { topic: 'Performance & Security', file: 'references/performance-security.md', loadWhen: 'Bundle size, prototype pollution, unsafe casts' },
    ],
    codePatterns: [
      {
        title: 'Discriminated Union',
        language: 'ts',
        code: `type Result<T> = { ok: true; value: T } | { ok: false; error: string }

function parseAmount(input: string): Result<number> {
  const n = Number(input)
  return Number.isNaN(n) ? { ok: false, error: 'Not a number' } : { ok: true, value: n }
}`,
      },
      {
        title: 'Generic Constraint',
        language: 'ts',
        code: `function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key])
}`,
      },
      {
        title: 'Narrowing with Type Guards',
        language: 'ts',
        code: `function isOrder(value: unknown): value is Order {
  return typeof value === 'object' && value !== null && 'id' in value && 'totalCents' in value
}`,
      },
      {
        title: 'Strict tsconfig',
        language: 'json',
        code: `{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true
  }
}`,
      },
      {
        title: 'Vitest Test',
        language: 'ts',
        code: `import { describe, expect, it } from 'vitest'

describe('parseAmount', () => {
  it('rejects non-numeric input', () => {
    expect(parseAmount('abc')).toEqual({ ok: false, error: 'Not a number' })
  })
})`,
      },
    ],
    mustDo: [
      'Enable strict mode in tsconfig.json (strict: true) for all new projects',
      'Model domain states as discriminated unions instead of optional/nullable flags',
      'Use type guards to narrow unknown/external data before using it',
      'Run tsc --noEmit in CI as a build gate, separate from bundling',
      'Prefer unknown over any for values of genuinely unclear type',
      'Validate external input (API responses, env vars) at runtime, not just at the type level',
      'Write tests for the runtime behavior, not just for the types compiling',
      "Use readonly and const assertions for data that shouldn't mutate",
      'Keep generics constrained (extends) rather than fully open when a real constraint exists',
    ],
    mustNot: [
      'Use any to silence a type error instead of fixing the underlying type',
      'Use non-null assertions (!) on values that can genuinely be null/undefined',
      'Disable strict mode to make a migration easier and never re-enable it',
      "Trust that a JSON.parse() result matches a TypeScript interface without runtime validation",
      'Export types with structurally different shapes than what the runtime actually returns',
      'Use @ts-ignore instead of a targeted, justified @ts-expect-error',
      'Mutate function parameters that are typed as readonly',
    ],
    outputTemplate: [
      'Implementation with full type coverage under strict mode',
      'Accompanying tests',
      'tsconfig changes if applicable',
      'tsc/eslint results',
      'Brief explanation of the type design chosen',
    ],
    knowledgeReference:
      'TypeScript 5.x, strict mode, generics, conditional/mapped types, discriminated unions, Vitest/Jest, ESLint with typescript-eslint, Node.js type definitions, Zod for runtime validation',
    howItWorks: [
      'Analyze the target runtime and tsconfig strictness before designing types.',
      'Model the domain with discriminated unions and generics before writing logic.',
      'Implement under strict mode, avoiding any and unchecked casts.',
      'Validate with tsc --noEmit and eslint, then write tests for runtime behavior.',
      'Check bundle size and audit for unsafe casts before shipping.',
    ],
    referenceFiles: {
      'references/type-system.md': `# Type System Fundamentals

## Discriminated Unions

Model a value that can be one of several distinct shapes as a union tagged by a literal field, not as one object with a pile of optional fields:

\`\`\`ts
type LoadState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string }
\`\`\`

Switching on \`status\` lets TypeScript narrow the type in each branch — \`state.data\` is only accessible where \`status === 'success'\`, so a bug that reads \`data\` before it exists is a compile error, not a runtime \`undefined\`.

## Conditional & Mapped Types

\`\`\`ts
type NonNullableFields<T> = { [K in keyof T]: NonNullable<T[K]> }
\`\`\`

Reach for a mapped or conditional type when a transformation needs to apply uniformly across every property of an existing type — deriving it once avoids the two types drifting apart as fields are added.

## Generics With Real Constraints

A generic that accepts literally anything (\`<T>\`) is rarely the goal — constrain it to what the function actually needs (\`<T extends { id: string }>\`), so the compiler catches a caller passing something structurally incompatible.

## Utility Types

Prefer built-in utility types (\`Partial\`, \`Pick\`, \`Omit\`, \`ReturnType\`) derived from an existing type over hand-writing a near-duplicate interface — the derived version stays in sync automatically when the source type changes.
`,
      'references/tsconfig-project-setup.md': `# tsconfig & Project Setup

## Strict Mode

\`"strict": true\` turns on \`noImplicitAny\`, \`strictNullChecks\`, \`strictFunctionTypes\`, and several other flags together. Enable it on day one of a new project — retrofitting strict mode onto a large \`any\`-riddled codebase later is far more expensive than starting with it.

## Extra Strictness Worth Enabling

\`\`\`json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true
  }
}
\`\`\`

\`noUncheckedIndexedAccess\` in particular catches a common real bug: indexing into an array or record and assuming the result isn't \`undefined\`.

## Module Resolution

Match \`moduleResolution\` to the actual runtime: \`bundler\` for a project built by Vite/esbuild/webpack, \`node16\`/\`nodenext\` for a Node.js package that ships its own compiled output and needs correct \`.js\` extension resolution.

## Project References

For a monorepo with multiple packages that depend on each other, use TypeScript project references (\`"references": [{ "path": "../shared" }]\`) so \`tsc --build\` only recompiles what actually changed, instead of type-checking the whole repo from a single root config.
`,
      'references/async-error-handling.md': `# Async & Error Handling

## Typed Promises

An \`async\` function's return type is inferred as \`Promise<T>\` — annotate it explicitly on public APIs so a change to what the function resolves to is caught at every call site, not just where the change was made.

## Result Types Over Throwing

For expected failure cases (validation, a not-found lookup), consider returning a discriminated \`Result<T, E>\` instead of throwing — it forces the caller to handle the failure case at the type level, rather than relying on them remembering to wrap the call in \`try/catch\`:

\`\`\`ts
type Result<T, E = string> = { ok: true; value: T } | { ok: false; error: E }
\`\`\`

Reserve actual \`throw\` for genuinely exceptional, programmer-error conditions (an invariant violation), not for expected business outcomes like "user not found."

## Typed Catch Blocks

\`catch\` binds its parameter as \`unknown\` under strict mode (correctly — anything can be thrown). Narrow it before use:

\`\`\`ts
try {
  await risky()
} catch (err) {
  if (err instanceof PaymentError) return { ok: false, error: err.code }
  throw err
}
\`\`\`

## Avoiding Floating Promises

Enable the \`no-floating-promises\` ESLint rule (from \`typescript-eslint\`) — an un-awaited promise whose rejection is never handled is a common source of silently swallowed errors and unhandled rejection crashes.
`,
      'references/testing.md': `# Testing

## Vitest / Jest

Keep tests close to the code they cover and assert on observable behavior (return values, thrown errors, calls to injected collaborators), not on internal implementation details that are free to change.

\`\`\`ts
it('rejects a negative quantity', () => {
  expect(() => new OrderItem('sku', -1)).toThrow('quantity must be positive')
})
\`\`\`

## Mocking

Prefer passing a fake/stub implementation of a dependency through its constructor or parameter over mocking a module import — it keeps the test's setup honest about what the function actually depends on.

## Type-Level Tests

For a library exporting complex generic types, add type-level tests that assert on the *type* the compiler infers, not just runtime values:

\`\`\`ts
import { expectTypeOf } from 'vitest'

expectTypeOf(pluck([{ id: 1, name: 'a' }], 'name')).toEqualTypeOf<string[]>()
\`\`\`

This catches a change that breaks type inference for consumers even when every runtime test still passes.

## Coverage as a Signal

Treat coverage as a map of what's untested, not a score to maximize — a test that only calls a function without asserting anything meaningful inflates coverage while catching nothing.
`,
      'references/performance-security.md': `# Performance & Security

## Bundle Size

A type-only import (\`import type { Foo } from './foo'\`) is erased at compile time and costs nothing in the bundle — use it explicitly for imports that are only used as types, so a bundler doesn't need to guess whether the import has runtime side effects.

## Tree-Shaking

Prefer named exports over a default export that re-exports an object of everything — bundlers can tree-shake unused named exports far more reliably than they can eliminate unused properties of a single default-exported object.

## Prototype Pollution

Merging an untrusted object into another (a naive deep-merge of request body into config) can let an attacker set \`__proto__\` or \`constructor.prototype\` and affect every object in the process. Use a merge utility that explicitly guards against these keys, or validate/allowlist the incoming shape with a schema library before merging.

## Unsafe Casts

A type assertion (\`as SomeType\`) tells the compiler to trust you — it performs no runtime check. Reserve it for cases you've verified are genuinely safe (e.g. narrowing after a runtime check the compiler can't see), and prefer a type guard or schema-validated parse over \`as\` for anything derived from external input.
`,
    },
    files: [
      'skills/typescript-pro/SKILL.md',
      'skills/typescript-pro/references/type-system.md',
      'skills/typescript-pro/references/tsconfig-project-setup.md',
      'skills/typescript-pro/references/async-error-handling.md',
      'skills/typescript-pro/references/testing.md',
      'skills/typescript-pro/references/performance-security.md',
    ],
  },
  {
    slug: 'docker-kubernetes-pro',
    name: 'Docker & Kubernetes Pro',
    author: 'Cognivexa',
    category: 'DevOps',
    stars: 1940,
    forks: 227,
    addedDate: '2026-08-18',
    icon: '🐳',
    pro: true,
    domain: 'Containers & Orchestration',
    platform: 'DevOps',
    role: 'expert',
    scope: 'implementation',
    output: 'config',
    description:
      'Expert in containerizing and deploying applications: minimal multi-stage Docker images and secure, resource-aware Kubernetes manifests.',
    whenToUse:
      'Use when writing or reviewing a Dockerfile, docker-compose setup, or Kubernetes manifests, sizing resource requests/limits, configuring health checks, hardening container security, or setting up a CI/CD pipeline for containers.',
    argumentHint: '[service-name]',
    tags: ['docker', 'kubernetes', 'devops'],
    triggers: [
      'Docker',
      'Dockerfile',
      'docker-compose',
      'Kubernetes',
      'Helm',
      'container security',
      'image size',
      'k8s manifests',
      'liveness probe',
      'CI/CD pipeline',
    ],
    relatedSkills: ['Fullstack Guardian', 'Security Reviewer', 'Python Pro', 'TypeScript Pro'],
    intro:
      'Expert in containerizing and deploying applications: minimal multi-stage Docker images and secure, resource-aware Kubernetes manifests.',
    coreWorkflow: [
      { title: 'Analyze requirements', detail: "Understand the app's runtime, existing deployment target, and current Dockerfile/manifests if any." },
      { title: 'Design the image', detail: 'Plan a multi-stage build that separates build-time and run-time dependencies.' },
      { title: 'Implement', detail: 'Write the Dockerfile/manifests using minimal base images and least-privilege defaults.' },
      { title: 'Validate', detail: 'Build locally, scan the image for vulnerabilities, and lint manifests (hadolint, kubeval/kubeconform).' },
      { title: 'Optimize', detail: 'Minimize image layers/size, tune resource requests/limits, and configure health checks.' },
      { title: 'Test & secure', detail: "Verify the container runs as non-root, secrets aren't baked into the image, and rollouts are safe." },
    ],
    referenceGuide: [
      { topic: 'Dockerfile Best Practices', file: 'references/dockerfile-best-practices.md', loadWhen: 'Multi-stage builds, layer caching, minimal images' },
      { topic: 'Kubernetes Workloads', file: 'references/kubernetes-workloads.md', loadWhen: 'Deployments, Services, ConfigMaps/Secrets' },
      { topic: 'Health & Resource Management', file: 'references/health-resource-management.md', loadWhen: 'Probes, requests/limits, HPA' },
      { topic: 'Container Security', file: 'references/container-security.md', loadWhen: 'Non-root users, image scanning, secrets handling' },
      { topic: 'CI/CD for Containers', file: 'references/cicd-containers.md', loadWhen: 'Build/push pipelines, rollout strategies' },
    ],
    codePatterns: [
      {
        title: 'Multi-Stage Dockerfile',
        language: 'dockerfile',
        code: `FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
USER app
EXPOSE 3000
CMD ["node", "dist/server.js"]`,
      },
      {
        title: 'Kubernetes Deployment with Probes and Limits',
        language: 'yaml',
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
spec:
  replicas: 3
  template:
    spec:
      containers:
        - name: api
          image: registry.example.com/api:1.4.0
          resources:
            requests: { cpu: "100m", memory: "128Mi" }
            limits: { cpu: "500m", memory: "256Mi" }
          readinessProbe:
            httpGet: { path: /healthz, port: 3000 }
            initialDelaySeconds: 5
          livenessProbe:
            httpGet: { path: /healthz, port: 3000 }
            initialDelaySeconds: 15`,
      },
      {
        title: 'Secrets via Environment, Not Baked In',
        language: 'yaml',
        code: `env:
  - name: DATABASE_URL
    valueFrom:
      secretKeyRef:
        name: api-secrets
        key: database-url`,
      },
      {
        title: 'Non-Root User Enforcement',
        language: 'yaml',
        code: `securityContext:
  runAsNonRoot: true
  readOnlyRootFilesystem: true
  allowPrivilegeEscalation: false`,
      },
      {
        title: 'Zero-Downtime Rolling Update',
        language: 'yaml',
        code: `strategy:
  type: RollingUpdate
  rollingUpdate:
    maxUnavailable: 0
    maxSurge: 1`,
      },
    ],
    mustDo: [
      'Use multi-stage builds to keep build-time dependencies out of the final image',
      'Pin base image versions (node:20-alpine, not node:latest)',
      'Run containers as a non-root user',
      'Set resource requests and limits on every workload',
      'Configure readiness and liveness probes for every service',
      'Load secrets from a secrets manager or Kubernetes Secret, never bake them into the image',
      'Scan images for known vulnerabilities before deploying',
      'Use maxUnavailable: 0 for zero-downtime rolling updates on user-facing services',
      'Keep images small using slim/alpine/distroless bases and minimizing layers',
      "Set explicit health-check timeouts that match the app's real startup time",
    ],
    mustNot: [
      'Use the latest tag for any image in a production manifest',
      'Run a container as root without a documented reason',
      'Bake API keys or credentials into a Docker image layer',
      'Skip resource limits, letting one pod starve others on the same node',
      'Expose the Docker daemon socket to a container without a strong reason',
      'Ignore image scan results for high/critical vulnerabilities',
      'Use hostNetwork or hostPID unless there is a specific, justified need',
      'Deploy without a readiness probe, causing traffic to hit a not-yet-ready pod',
    ],
    outputTemplate: [
      'Dockerfile and/or Kubernetes manifests',
      'Resource/probe configuration',
      'Security context settings',
      'Scan/lint results',
      'Brief explanation of the deployment strategy chosen',
    ],
    knowledgeReference:
      'Docker multi-stage builds, OCI image spec, Kubernetes Deployments/Services/Ingress, Helm, kubeval/kubeconform, hadolint, Trivy/Grype scanning, HPA, resource requests/limits, rolling/blue-green/canary deploys',
    howItWorks: [
      'Analyze the runtime and current deployment target before designing the image.',
      'Design a multi-stage build separating build-time and run-time dependencies.',
      'Implement manifests with least-privilege defaults and pinned image versions.',
      'Validate by building, scanning for vulnerabilities, and linting manifests.',
      'Tune resource requests/limits and health checks, then verify a safe rollout.',
    ],
    referenceFiles: {
      'references/dockerfile-best-practices.md': `# Dockerfile Best Practices

## Multi-Stage Builds

Separate the stage that compiles/builds the app from the stage that runs it, and copy only the build output into the final image:

\`\`\`dockerfile
FROM node:20-alpine AS build
...
RUN npm run build

FROM node:20-alpine
COPY --from=build /app/dist ./dist
\`\`\`

This keeps compilers, dev dependencies, and source maps out of the shipped image, cutting both size and attack surface.

## Layer Caching

Order instructions from least to most frequently changing: copy dependency manifests (\`package.json\`/\`requirements.txt\`) and install dependencies before copying the rest of the source. That way, a source-only change doesn't invalidate the (usually slow) dependency-install layer.

## Minimal Base Images

Prefer \`-alpine\` or \`-slim\` variants, or a distroless image, over the full default base — fewer packages means a smaller attack surface and fewer things needing patches. Weigh this against alpine's musl libc occasionally causing subtle compatibility issues with native dependencies.

## .dockerignore

Add a \`.dockerignore\` excluding \`.git\`, \`node_modules\`, and local env files — without it, the entire build context (including secrets accidentally left in a local \`.env\`) is sent to the Docker daemon and can end up copied into a layer.
`,
      'references/kubernetes-workloads.md': `# Kubernetes Workloads

## Deployments vs. StatefulSets

Use a \`Deployment\` for stateless, interchangeable replicas (a typical API server). Use a \`StatefulSet\` only when pods need a stable identity and ordered, persistent storage (a database, a message broker) — reaching for a Deployment for a genuinely stateful workload is a common source of data-consistency bugs.

## Services

A \`ClusterIP\` Service gives stable internal DNS to a set of pods selected by label; a pod's IP changes on every restart, so nothing should hardcode a pod IP. Use \`LoadBalancer\` or an \`Ingress\` for external traffic rather than exposing a \`NodePort\` directly in production.

## ConfigMaps & Secrets

Put non-sensitive configuration in a \`ConfigMap\` and sensitive values in a \`Secret\` — both can be mounted as environment variables or files, but only \`Secret\` values are (base64-encoded, and with RBAC/encryption-at-rest configured) treated as sensitive by the cluster's tooling.

## Labels & Selectors

Keep label selectors on Services and Deployments precise and consistent (\`app: api\`, \`tier: backend\`) — an overly broad selector can cause a Service to route traffic to pods from an unrelated Deployment that happens to share a label.
`,
      'references/health-resource-management.md': `# Health & Resource Management

## Readiness vs. Liveness Probes

A **readiness** probe controls whether a pod receives traffic — a pod that's up but not yet ready (still loading a cache, waiting on a DB connection) should fail readiness so it's removed from the Service's endpoints, not restarted. A **liveness** probe controls whether Kubernetes restarts the container — reserve it for detecting a genuinely stuck/deadlocked process, since a liveness probe that's too aggressive causes restart loops under normal load spikes.

## Resource Requests & Limits

\`requests\` is what the scheduler guarantees the pod when placing it; \`limits\` is the hard ceiling. Set both — no requests means the scheduler can over-pack a node, and no limits means one runaway pod can starve its neighbors of CPU/memory.

## Horizontal Pod Autoscaling (HPA)

Scale on a metric that actually reflects load (CPU, custom request-latency/queue-depth metrics) rather than always fixing replica count manually. Set sensible min/max bounds so a metric spike can't scale to an unbounded (and expensive) replica count.

## Startup Time

If a service has a slow cold start (JVM warm-up, large in-memory cache load), use a \`startupProbe\` with a longer allowance before liveness checks begin, instead of setting liveness's \`initialDelaySeconds\` so high it delays detecting a genuinely stuck pod later on.
`,
      'references/container-security.md': `# Container Security

## Non-Root by Default

\`\`\`dockerfile
RUN addgroup -S app && adduser -S app -G app
USER app
\`\`\`

Running as root inside the container means a container-escape vulnerability hands the attacker root on the host. Create and switch to an unprivileged user in the Dockerfile, and reinforce it with \`runAsNonRoot: true\` in the pod's \`securityContext\` so Kubernetes refuses to run the pod otherwise.

## Image Scanning

Scan every image for known-vulnerable packages (Trivy, Grype, or a registry's built-in scanner) as part of the CI pipeline, and block the deploy on critical/high findings rather than only reviewing scan results after the fact.

## Read-Only Root Filesystem

\`\`\`yaml
securityContext:
  readOnlyRootFilesystem: true
\`\`\`

Mount an explicit \`emptyDir\` volume for any directory the app genuinely needs to write to (a cache dir, \`/tmp\`) rather than leaving the whole filesystem writable by default.

## Secrets Never in the Image

A secret baked into an image layer is recoverable by anyone who can pull the image, even if a later layer "removes" the file — layers are immutable and cumulative. Always inject secrets at runtime via environment variables or mounted Secret volumes.
`,
      'references/cicd-containers.md': `# CI/CD for Containers

## Build & Push Pipeline

Build the image once per commit, tag it with the commit SHA (not just \`latest\`), push it to the registry, then deploy that exact tag — this makes every deployed version traceable back to the exact source commit that produced it.

## Rollout Strategies

- **Rolling update** (\`maxUnavailable: 0\`, \`maxSurge: 1\`): default choice for most services; zero downtime, gradual replacement.
- **Blue-green**: run the new version fully alongside the old, then switch traffic at once — useful when a rolling update's mixed-version window is itself risky (e.g. an incompatible schema change).
- **Canary**: route a small percentage of traffic to the new version first, then ramp up — useful for catching a regression before it affects all users.

## Automated Rollback

Wire a deploy's success criteria to actual health signals (error rate, latency) post-rollout, and automate rollback to the previous known-good image tag on failure, rather than relying on someone noticing a dashboard.

## Environment Parity

Build the same image for staging and production and promote it forward rather than rebuilding per environment — rebuilding risks a subtly different image (different dependency resolution, different base image patch level) reaching production than the one actually tested in staging.
`,
    },
    files: [
      'skills/docker-kubernetes-pro/SKILL.md',
      'skills/docker-kubernetes-pro/references/dockerfile-best-practices.md',
      'skills/docker-kubernetes-pro/references/kubernetes-workloads.md',
      'skills/docker-kubernetes-pro/references/health-resource-management.md',
      'skills/docker-kubernetes-pro/references/container-security.md',
      'skills/docker-kubernetes-pro/references/cicd-containers.md',
    ],
  },
  {
    slug: 'code-review',
    name: 'Code Review and Quality',
    author: 'Cognivexa',
    category: 'Code & Dev',
    stars: 2260,
    forks: 274,
    addedDate: '2026-08-19',
    icon: '🔍',
    description:
      'Multi-dimensional code review with quality gates covering correctness, readability, architecture, security, and performance. Use before merging any change, after completing a feature, or when evaluating code produced by another agent or model.',
    argumentHint: '[pr-or-diff]',
    tags: ['code-review', 'quality-gates', 'five-axis'],
    intro:
      'Every change gets reviewed before merge — no exceptions. Review covers five axes: correctness, readability, architecture, security, and performance.',
    howItWorks: [
      'Understand the context: what the change is trying to accomplish and what spec it implements.',
      'Review the tests first — they reveal intent and coverage before you read the implementation.',
      'Walk the implementation across all five axes: correctness, readability, architecture, security, performance.',
      'Categorize every finding by severity (Critical, Required, Nit, Optional, FYI) so the author knows what blocks merge.',
      'Verify the verification story — what was actually tested, built, and run before approval.',
    ],
    files: ['skills/code-review/SKILL.md'],
    bodyMarkdown: `# Code Review and Quality

## Overview

Multi-dimensional code review with quality gates. Every change gets reviewed before merge — no exceptions. Review covers five axes: correctness, readability, architecture, security, and performance.

**The approval standard:** Approve a change when it definitely improves overall code health, even if it isn't perfect. Perfect code doesn't exist — the goal is continuous improvement. Don't block a change because it isn't exactly how you would have written it. If it improves the codebase and follows the project's conventions, approve it.

## When to Use

- Before merging any PR or change
- After completing a feature implementation
- When another agent or model produced code you need to evaluate
- When refactoring existing code
- After any bug fix (review both the fix and the regression test)

## The Five-Axis Review

Every review evaluates code across these dimensions:

### 1. Correctness

Does the code do what it claims to do?

- Does it match the spec or task requirements?
- Are edge cases handled (null, empty, boundary values)?
- Are error paths handled (not just the happy path)?
- Does it pass all tests? Are the tests actually testing the right things?
- Are there off-by-one errors, race conditions, or state inconsistencies?

### 2. Readability & Simplicity

Can another engineer (or agent) understand this code without the author explaining it?

- Are names descriptive and consistent with project conventions? (No \`temp\`, \`data\`, \`result\` without context)
- Is the control flow straightforward (avoid nested ternaries, deep callbacks)?
- Is the code organized logically (related code grouped, clear module boundaries)?
- Are there any "clever" tricks that should be simplified?
- **Could this be done in fewer lines?** (1000 lines where 100 suffice is a failure)
- **Are abstractions earning their complexity?** (Don't generalize until the third use case)
- Would comments help clarify non-obvious intent? (But don't comment obvious code.)
- Are there dead code artifacts: no-op variables (\`_unused\`), backwards-compat shims, or \`// removed\` comments?
- **Is a new conditional bolted onto an unrelated flow?** That's a design smell, not a nit — push the logic into its own helper, state, or policy instead of tangling an existing path.
- **Do repeated conditionals on the same shape appear?** They signal a missing model or dispatcher. A "temporary" branch is usually permanent debt.

### 3. Architecture

Does the change fit the system's design?

- Does it follow existing patterns or introduce a new one? If new, is it justified?
- Does it maintain clean module boundaries?
- Is there code duplication that should be shared?
- Are dependencies flowing in the right direction (no circular dependencies)?
- Is the abstraction level appropriate (not over-engineered, not too coupled)?
- **Does this refactor reduce complexity or just relocate it?** Count the concepts a reader must hold to follow the change. If a "cleaner" version leaves that count unchanged, it isn't cleaner — prefer the restructuring that makes whole branches, modes, or layers disappear over one that re-centralizes the same logic. Prefer deleting an abstraction to polishing it.
- **Is feature-specific logic leaking into a shared or general-purpose module?** Keep logic in its owning layer, reuse the existing canonical helper instead of a near-duplicate, and don't normalize architectural drift.
- **Are type boundaries explicit?** Question gratuitous \`any\`/\`unknown\`/optional/casts and silent fallbacks that paper over an unclear invariant — making the boundary explicit often makes the surrounding control flow simpler.

### 4. Security

For detailed security guidance, see \`security-and-hardening\`. Does the change introduce vulnerabilities?

- Is user input validated and sanitized?
- Are secrets kept out of code, logs, and version control?
- Is authentication/authorization checked where needed?
- Are SQL queries parameterized (no string concatenation)?
- Are outputs encoded to prevent XSS?
- Are dependencies from trusted sources with no known vulnerabilities?
- Is data from external sources (APIs, logs, user content, config files) treated as untrusted?
- Are external data flows validated at system boundaries before use in logic or rendering?

### 5. Performance

For detailed profiling and optimization, see \`performance-optimization\`. Does the change introduce performance problems?

- Any N+1 query patterns?
- Any unbounded loops or unconstrained data fetching?
- Any synchronous operations that should be async?
- Any unnecessary re-renders in UI components?
- Any missing pagination on list endpoints?
- Any large objects created in hot paths?

## Structural Remedies

When you flag a structural problem, propose the move — not just the problem. A review that only says "this is complex" leaves the author guessing. Reach for a named restructuring:

- **Replace a chain of conditionals** with a typed model or an explicit dispatcher.
- **Collapse duplicate branches** into a single clearer flow.
- **Separate orchestration from business logic** so each reads on its own.
- **Move feature-specific logic** out of a shared module into the package that owns the concept.
- **Reuse the canonical helper** instead of a bespoke near-duplicate.
- **Make a type boundary explicit** so downstream branching disappears.
- **Delete a pass-through wrapper** that adds indirection without clarifying the API.
- **Extract a helper, or split a large file** into focused modules.

Prefer the remedy that removes moving pieces over one that spreads the same complexity around.

## Change Sizing

Small, focused changes are easier to review, faster to merge, and safer to deploy. Target these sizes:

\`\`\`
~100 lines changed   → Good. Reviewable in one sitting.
~300 lines changed   → Acceptable if it's a single logical change.
~1000 lines changed  → Too large. Split it.
\`\`\`

**Watch file size, not just diff size.** A small diff can still push a file past a healthy boundary — around 1000 *total* lines in a single file (distinct from the ~1000 *changed*-lines threshold above) is a common inspection signal, not a hard cap. When a change materially grows an already-large file, ask whether to extract helpers, subcomponents, or modules *first*, before piling more on. Decompose, then add.

**What counts as "one change":** A single self-contained modification that addresses one thing, includes related tests, and keeps the system functional after submission. One part of a feature — not the whole feature.

**Splitting strategies when a change is too large:**

| Strategy | How | When |
|----------|-----|------|
| **Stack** | Submit a small change, start the next one based on it | Sequential dependencies |
| **By file group** | Separate changes for groups needing different reviewers | Cross-cutting concerns |
| **Horizontal** | Create shared code/stubs first, then consumers | Layered architecture |
| **Vertical** | Break into smaller full-stack slices of the feature | Feature work |

**When large changes are acceptable:** Complete file deletions and automated refactoring where the reviewer only needs to verify intent, not every line.

**Separate refactoring from feature work.** A change that refactors existing code and adds new behavior is two changes — submit them separately. Small cleanups (variable renaming) can be included at reviewer discretion.

## Change Descriptions

Every change needs a description that stands alone in version control history.

**First line:** Short, imperative, standalone. "Delete the FizzBuzz RPC" not "Deleting the FizzBuzz RPC." Must be informative enough that someone searching history can understand the change without reading the diff.

**Body:** What is changing and why. Include context, decisions, and reasoning not visible in the code itself. Link to bug numbers, benchmark results, or design docs where relevant. Acknowledge approach shortcomings when they exist.

**Anti-patterns:** "Fix bug," "Fix build," "Add patch," "Moving code from A to B," "Phase 1," "Add convenience functions."

## Review Process

### Step 1: Understand the Context

Before looking at code, understand the intent:

\`\`\`
- What is this change trying to accomplish?
- What spec or task does it implement?
- What is the expected behavior change?
\`\`\`

### Step 2: Review the Tests First

Tests reveal intent and coverage:

\`\`\`
- Do tests exist for the change?
- Do they test behavior (not implementation details)?
- Are edge cases covered?
- Do tests have descriptive names?
- Would the tests catch a regression if the code changed?
\`\`\`

### Step 3: Review the Implementation

Walk through the code with the five axes in mind:

\`\`\`
For each file changed:
1. Correctness: Does this code do what the test says it should?
2. Readability: Can I understand this without help?
3. Architecture: Does this fit the system?
4. Security: Any vulnerabilities?
5. Performance: Any bottlenecks?
\`\`\`

### Step 4: Categorize Findings

Label every comment with its severity so the author knows what's required vs optional:

| Prefix | Meaning | Author Action |
|--------|---------|---------------|
| *(no prefix)* | Required change | Must address before merge |
| **Critical:** | Blocks merge | Security vulnerability, data loss, broken functionality |
| **Nit:** | Minor, optional | Author may ignore — formatting, style preferences |
| **Optional:** / **Consider:** | Suggestion | Worth considering but not required |
| **FYI** | Informational only | No action needed — context for future reference |

This prevents authors from treating all feedback as mandatory and wasting time on optional suggestions.

**Lead with what matters.** Order findings by leverage: correctness and security first, then structural regressions and missed simplifications, then everything else. Don't bury a real issue under cosmetic nits — a few high-conviction comments beat a long list. If you have one structural problem and ten nits, the structural problem *is* the review.

### Step 5: Verify the Verification

Check the author's verification story:

\`\`\`
- What tests were run?
- Did the build pass?
- Was the change tested manually?
- Are there screenshots for UI changes?
- Is there a before/after comparison?
\`\`\`

## Multi-Model Review Pattern

Use different models for different review perspectives:

\`\`\`
Model A writes the code
    │
    ▼
Model B reviews for correctness and architecture
    │
    ▼
Model A addresses the feedback
    │
    ▼
Human makes the final call
\`\`\`

This catches issues that a single model might miss — different models have different blind spots.

**Example prompt for a review agent:**
\`\`\`
Review this code change for correctness, security, and adherence to
our project conventions. The spec says [X]. The change should [Y].
Flag any issues as Critical, Required, Optional, or Nit.
\`\`\`

## Dead Code Hygiene

After any refactoring or implementation change, check for orphaned code:

1. Identify code that is now unreachable or unused
2. List it explicitly
3. **Ask before deleting:** "Should I remove these now-unused elements: [list]?"

Don't leave dead code lying around — it confuses future readers and agents. But don't silently delete things you're not sure about. When in doubt, ask.

\`\`\`
DEAD CODE IDENTIFIED:
- formatLegacyDate() in src/utils/date.ts — replaced by formatDate()
- OldTaskCard component in src/components/ — replaced by TaskCard
- LEGACY_API_URL constant in src/config.ts — no remaining references
→ Safe to remove these?
\`\`\`

## Review Speed

Slow reviews block entire teams. The cost of context-switching to review is less than the waiting cost imposed on others.

- **Respond within one business day** — this is the maximum, not the target
- **Ideal cadence:** Respond shortly after a review request arrives, unless deep in focused coding. A typical change should complete multiple review rounds in a single day
- **Prioritize fast individual responses** over quick final approval. Quick feedback reduces frustration even if multiple rounds are needed
- **Large changes:** Ask the author to split them rather than reviewing one massive changeset

## Handling Disagreements

When resolving review disputes, apply this hierarchy:

1. **Technical facts and data** override opinions and preferences
2. **Style guides** are the absolute authority on style matters
3. **Software design** must be evaluated on engineering principles, not personal preference
4. **Codebase consistency** is acceptable if it doesn't degrade overall health

**Don't accept "I'll clean it up later."** Experience shows deferred cleanup rarely happens. Require cleanup before submission unless it's a genuine emergency. If surrounding issues can't be addressed in this change, require filing a bug with self-assignment.

## Honesty in Review

When reviewing code — whether written by you, another agent, or a human:

- **Don't rubber-stamp.** "LGTM" without evidence of review helps no one.
- **Don't soften real issues.** "This might be a minor concern" when it's a bug that will hit production is dishonest.
- **Quantify problems when possible.** "This N+1 query will add ~50ms per item in the list" is better than "this could be slow."
- **Push back on approaches with clear problems.** Sycophancy is a failure mode in reviews. If the implementation has issues, say so directly and propose alternatives.
- **Accept override gracefully.** If the author has full context and disagrees, defer to their judgment. Comment on code, not people — reframe personal critiques to focus on the code itself.

## Dependency Discipline

Part of code review is dependency review:

**Before adding any dependency:**
1. Does the existing stack solve this? (Often it does.)
2. How large is the dependency? (Check bundle impact.)
3. Is it actively maintained? (Check last commit, open issues.)
4. Does it have known vulnerabilities? (\`npm audit\`)
5. What's the license? (Must be compatible with the project.)

**Rule:** Prefer standard library and existing utilities over new dependencies. Every dependency is a liability.

**Upgrading an existing dependency** is a code change like any other, and the riskiest upgrades are the ones merged in bulk with a message like "bump deps." Review them with the same discipline:

1. **Read the changelog, not just the version number.** Semver is a promise the maintainer may not have kept — a "patch" can carry a behavioral change. For a major bump, read the migration notes and find what breaks.
2. **One dependency per change.** Upgrade and merge them individually (or in small related groups). When a bulk bump breaks the build, you've lost which package did it; a single-package change makes the cause obvious and the revert clean.
3. **Let the tests decide.** The upgrade is verified by a green suite before *and* after, not by "it installed." If coverage around the dependency's behavior is thin, that gap is the real finding — add a test first.
4. **Mind the transitive graph.** Most installed packages are ones nobody chose directly. Review the lockfile diff, not just \`package.json\`; a single direct bump can pull in dozens of indirect changes.
5. **Keep the lockfile honest.** Commit it, review its diff, and never hand-edit it. The lockfile is the thing that actually pins what ships.

For triaging \`npm audit\` findings and supply-chain risk (typosquatting, compromised maintainers), follow the \`security-and-hardening\` skill — this section covers the upgrade *workflow*, that one covers the security verdict.

## The Review Checklist

\`\`\`markdown
## Review: [PR/Change title]

### Context
- [ ] I understand what this change does and why

### Correctness
- [ ] Change matches spec/task requirements
- [ ] Edge cases handled
- [ ] Error paths handled
- [ ] Tests cover the change adequately

### Readability
- [ ] Names are clear and consistent
- [ ] Logic is straightforward
- [ ] No unnecessary complexity

### Architecture
- [ ] Follows existing patterns
- [ ] No unnecessary coupling or dependencies
- [ ] Appropriate abstraction level
- [ ] Refactors reduce complexity rather than relocate it
- [ ] No feature logic in shared modules; file stays within a healthy size

### Security
- [ ] No secrets in code
- [ ] Input validated at boundaries
- [ ] No injection vulnerabilities
- [ ] Auth checks in place
- [ ] External data sources treated as untrusted

### Performance
- [ ] No N+1 patterns
- [ ] No unbounded operations
- [ ] Pagination on list endpoints

### Verification
- [ ] Tests pass
- [ ] Build succeeds
- [ ] Manual verification done (if applicable)

### Verdict
- [ ] **Approve** — Ready to merge
- [ ] **Request changes** — Issues must be addressed
\`\`\`
## See Also

- For detailed security review guidance, see \`../../references/security-checklist.md\`
- For performance review checks, see \`../../references/performance-checklist.md\`

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "It works, that's good enough" | Working code that's unreadable, insecure, or architecturally wrong creates debt that compounds. |
| "I wrote it, so I know it's correct" | Authors are blind to their own assumptions. Every change benefits from another set of eyes. |
| "We'll clean it up later" | Later never comes. The review is the quality gate — use it. Require cleanup before merge, not after. |
| "AI-generated code is probably fine" | AI code needs more scrutiny, not less. It's confident and plausible, even when wrong. |
| "The tests pass, so it's good" | Tests are necessary but not sufficient. They don't catch architecture problems, security issues, or readability concerns. |
| "The refactor makes it cleaner" | Relocating complexity isn't reducing it. If the reader still holds the same number of concepts, the structure didn't improve — look for the version where branches disappear. |
| "It's only a small addition to this file" | Small diffs still push files past a healthy size and bolt branches onto unrelated flows. Judge the resulting structure, not the diff size. |
| "It's just a version bump" | A bump is a behavior change you didn't write. Read the changelog; semver doesn't guarantee no breakage. |
| "I'll upgrade everything in one PR to save time" | A bulk bump that breaks the build hides which package did it. One dependency per change keeps the cause and the revert clean. |

## Red Flags

- PRs merged without any review
- Review that only checks if tests pass (ignoring other axes)
- "LGTM" without evidence of actual review
- Security-sensitive changes without security-focused review
- Large PRs that are "too big to review properly" (split them)
- No regression tests with bug fix PRs
- Review comments without severity labels — makes it unclear what's required vs optional
- Accepting "I'll fix it later" — it never happens
- A refactor that moves code around without reducing the number of concepts a reader must hold
- A change that grows an already-large file instead of decomposing it
- New conditionals scattered into unrelated code paths (a missing abstraction)
- A bespoke helper that duplicates an existing canonical one, or feature logic placed in a shared module
- A bulk "bump dependencies" PR with no changelog review and no per-package isolation
- A lockfile change that's hand-edited, uncommitted, or merged without reviewing its diff

## Verification

After review is complete:

- [ ] All Critical issues are resolved
- [ ] All Required (no-prefix) changes are resolved or explicitly deferred with justification
- [ ] Tests pass
- [ ] Build succeeds
- [ ] The verification story is documented (what changed, how it was verified)
- [ ] Dependency upgrades were reviewed against their changelog, isolated per package, and verified by a green suite with the lockfile diff reviewed

**Presumptive blockers:** surface and propose the simpler design for each of these; escalate to Required only when the change actively makes structure worse: a refactor that relocates complexity instead of reducing it; a change that pushes a file past the size boundary with no decomposition; feature logic added to a shared module; a near-duplicate of an existing canonical helper; a silent fallback that hides an unclear invariant.`,
  },
]

export function getSkill(slug) {
  return SKILLS.find((s) => s.slug === slug)
}
