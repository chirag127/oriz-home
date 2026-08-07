import { expect, test } from '@playwright/test'

const BASE = process.env.TEST_BASE_URL || 'http://localhost:4322'

test('home page loads without CRITICAL console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })

  const response = await page.goto(BASE)
  expect(response?.ok()).toBe(true)
  await expect(page.locator('body')).toBeVisible()
  // Ignore benign resource 404s / third-party noise; fail only on real app
  // errors — Clerk origin rejection, uncaught exceptions, module-load failures.
  const critical = errors.filter((e) =>
    /Production Keys are only allowed|HTTP Origin|Uncaught|Failed to fetch dynamically imported module/i.test(e),
  )
  expect(critical, critical.join('\n')).toEqual([])
})

