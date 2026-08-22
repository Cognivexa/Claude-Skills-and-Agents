import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })
page.on('pageerror', (err) => errors.push('pageerror: ' + err.message))

// 1. database-architect skill - should show "Optional connection" mentioning postgres-mcp-connector
await page.goto('http://localhost:5173/skills/database-architect', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('.connection-scope', { timeout: 10000 })
const dbScopeText = await page.locator('.connection-scope').innerText()
console.log('DATABASE_ARCHITECT_SKILL_SCOPE:', JSON.stringify(dbScopeText))
await page.screenshot({ path: 'verify-connscope-db.png' })

// 2. aws-cloud-architect agent - should show "Optional connection" mentioning aws-documentation-mcp-connector? (check integrations text)
await page.goto('http://localhost:5173/agents/aws-cloud-architect', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('.connection-scope', { timeout: 10000 })
const awsScopeText = await page.locator('.connection-scope').innerText()
console.log('AWS_AGENT_SCOPE:', JSON.stringify(awsScopeText))

// 3. A totally unrelated skill (e.g. systematic-debugging) - should show "No connection required"
await page.goto('http://localhost:5173/skills/systematic-debugging', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('.connection-scope', { timeout: 10000 })
const debugScopeText = await page.locator('.connection-scope').innerText()
console.log('DEBUG_SKILL_SCOPE:', JSON.stringify(debugScopeText))
await page.screenshot({ path: 'verify-connscope-none.png' })

console.log('CONSOLE_ERRORS:', JSON.stringify(errors))
await browser.close()
