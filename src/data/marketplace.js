export const MARKETPLACE_REPO = 'Cognivexa/claude-skills-and-agents'
export const MARKETPLACE_NAME = 'claude-skills-and-agents'

// Case-sensitive GitHub path used by the first-party `npx github:<repo> install ...`
// CLI (bin/cli.mjs) — distinct from MARKETPLACE_REPO, which is the plugin-marketplace
// name and is not case-sensitive the same way.
export const GITHUB_REPO = 'Cognivexa/Claude-Skills-and-Agents'

// These agents/skills are plain Markdown instruction files. Claude Code
// installs them natively as plugins; the other tools below don't share
// Claude Code's plugin format, but each supports its own custom
// instructions/rules mechanism that this Markdown content can be adapted to.
export const OTHER_COMPATIBLE_TOOLS = [
  'Codex',
  'Gemini CLI',
  'Cursor',
  'Windsurf',
  'Cline',
  'Aider',
  'Continue',
  'Roo Code',
  'Zed',
  'Amp',
  'GitHub Copilot',
]
