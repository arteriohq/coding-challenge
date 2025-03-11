import { test, expect } from "@playwright/test"

test("render", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/ARTERIO/i)
})
