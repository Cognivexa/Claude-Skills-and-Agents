export const MARKETPLACE_REPO = 'Cognivexa/claude-skills-and-agents'
export const MARKETPLACE_NAME = 'claude-skills-and-agents'

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
