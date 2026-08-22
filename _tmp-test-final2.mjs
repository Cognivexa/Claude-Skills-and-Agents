import { chromium } from 'playwright'
const browser = await chromium.launch()
const context = await browser.newContext()
await context.grantPermissions(['clipboard-read', 'clipboard-write'])
const page = await context.newPage()
const errors = []
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })

await page.goto('http://localhost:5173/skills/full-stack-developer', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('button.install-picker-btn', { timeout: 10000 })
await page.click('button.install-picker-btn')
await page.getByRole('button', { name: 'Claude Code (Terminal)' }).click()
await page.waitForTimeout(500)
const copiedState = await page.locator('.copy-btn').first().innerText()
const clipboardText = await page.evaluate(() => navigator.clipboard.readText())
console.log('AUTO_COPY_STATE:', copiedState)
console.log('CLIPBOARD_CONTENT:', clipboardText)

// Switch to raw mode to check Try Asking section presence
await page.getByRole('button', { name: 'Raw' }).click()
const rawText = await page.locator('.raw-view').innerText()
console.log('RAW_HAS_TRY_ASKING:', rawText.includes('Try Asking'))
console.log('RAW_HAS_STAYING_CURRENT:', rawText.includes('Staying Current'))

console.log('CONSOLE_ERRORS:', JSON.stringify(errors))
await browser.close()
