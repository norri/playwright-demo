import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Welcome to Astro/);

  // Expect subtitle to be visible.
  await expect(page.getByText('To get started')).toBeVisible();
});

test('get documentation link', async ({ page }) => {
  await page.goto('/');

  // Click the get Documentation link.
  await page.getByRole('link', { name: 'Documentation' }).click();

  // Expects page to have a heading with the name of Getting Started.
  await expect(page.getByRole('heading', { name: 'Getting Started' })).toBeVisible();
});
