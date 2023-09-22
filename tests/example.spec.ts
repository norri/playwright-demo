import { test, expect } from '@playwright/test';

test('has title @ci', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Welcome to Astro/);
  await expect(page.getByText('To get started')).toBeVisible();
});

test('get documentation link @ci', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Documentation' }).click();
  await expect(page.getByRole('heading', { name: 'Getting Started' })).toBeVisible();
});
