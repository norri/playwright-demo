import { test } from '@playwright/test';

test('test @ci', async ({ page }) => {
  await page.goto('/');
  
  await page.getByRole('link', { name: 'Themes→ Explore a galaxy of community-built starter themes.' }).click();
  await page.getByRole('heading', { name: 'Jumpstart your next project with a theme' }).click();
  await page.getByRole('heading', { name: 'Nebulix' }).click();
});
