import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })
page.on('pageerror', (err) => errors.push('pageerror: ' + err.message))

// 1. Connectors browse — should show 23 now, with new category filter list matching agents
await page.goto('http://localhost:5173/connectors', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('.card', { timeout: 10000 })
const cardCount = await page.locator('.card').count()
const categories = await page.locator('.cat-row span:first-child').allInnerTexts()
console.log('CONNECTORS_BROWSE:', JSON.stringify({ cardCount, categories }))
await page.screenshot({ path: 'final-connectors-browse.png' })

// 2. Figma connector detail (new, http, OAuth)
await page.goto('http://localhost:5173/connectors/figma-mcp-connector', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('.install-block', { timeout: 10000 })
await page.screenshot({ path: 'final-figma-detail.png', fullPage: true })

// 3. Google Calendar connector detail (special custom-connector flow)
await page.goto('http://localhost:5173/connectors/google-calendar-mcp-connector', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('.install-block', { timeout: 10000 })
const gcalHeading = await page.locator('.install-heading').first().innerText()
await page.screenshot({ path: 'final-gcal-detail.png', fullPage: true })
console.log('GCAL_HEADING:', gcalHeading)

// 4. Install button one-click auto-copy on skill page
await page.goto('http://localhost:5173/skills/full-stack-developer', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('button.install-picker-btn', { timeout: 10000 })
await page.click('button.install-picker-btn')
await page.getByRole('button', { name: 'Claude Code (Terminal)' }).click()
await page.waitForTimeout(300)
const copiedState = await page.locator('.copy-btn').first().innerText()
console.log('AUTO_COPY_STATE:', copiedState)
const tryAskingVisible = await page.locator('text=Try Asking').count()
await page.screenshot({ path: 'final-skill-autocopy.png' })
console.log('TRY_ASKING_SECTION_PRESENT_IN_RAW:', tryAskingVisible)

console.log('CONSOLE_ERRORS:', JSON.stringify(errors))
await browser.close()
