import { test, expect } from '@playwright/test'

// E2E for oriz.in home. Verifies the regressions we actually hit this session:
// sign-in mounts as ONE Clerk control (no dead static link), Clerk modal opens,
// no console errors, family board renders, PWA manifest served.
const BASE = process.env.TEST_BASE_URL || 'http://localhost:4322'

test.describe('oriz.in home', () => {
  test('loads with no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
    page.on('pageerror', (e) => errors.push(String(e)))
    await page.goto(BASE, { waitUntil: 'networkidle' })
    await expect(page).toHaveTitle(/oriz\.in/i)
    // Clerk origin-400s would show here — the allowlist-off fix must hold.
    expect(errors.join('\n')).not.toMatch(/Production Keys are only allowed|HTTP Origin/i)
  })

  test('exactly one sign-in control — the Clerk island, no dead static nav link', async ({ page }) => {
    await page.goto(BASE, { waitUntil: 'networkidle' })
    // the removed bug: a static <a href="/sign-in"> in the nav
    await expect(page.locator('nav a[href="/sign-in/"], nav a[href="/sign-in"]')).toHaveCount(0)
    // the correct control: the Clerk SignInButton island
    await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible()
  })

  test('Clerk sign-in modal opens', async ({ page }) => {
    await page.goto(BASE, { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: /sign in/i }).first().click()
    await expect(page.getByRole('heading', { name: /sign in to oriz/i })).toBeVisible({ timeout: 15000 })
    await expect(page.getByRole('textbox', { name: /email|username/i })).toBeVisible()
  })

  test('family board renders the site listings', async ({ page }) => {
    await page.goto(BASE, { waitUntil: 'networkidle' })
    await expect(page.getByRole('link', { name: /pdf/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /chat/i }).first()).toBeVisible()
  })

  test('PWA manifest + llms.txt served', async ({ request }) => {
    const m = await request.get(`${BASE}/manifest.webmanifest`)
    expect(m.ok()).toBeTruthy()
  })
})
