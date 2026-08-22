import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()) })

await page.goto('http://localhost:5173/skills/full-stack-developer', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('.panel-title', { timeout: 10000 })
await page.screenshot({ path: 'final-tryasking-skill.png', fullPage: false })

await page.goto('http://localhost:5173/agents/aws-cloud-architect', { waitUntil: 'load', timeout: 30000 })
await page.waitForSelector('.panel-title', { timeout: 10000 })
await page.screenshot({ path: 'final-tryasking-agent.png', fullPage: false })

console.log('ERRORS:', JSON.stringify(errors))
await browser.close()
