import { test } from '@playwright/test';


test('test with login', async ({ page }) => {
  await page.route('*/**/api/auth/login', async route => {
    const headers = {
      "Set-Cookie": "session=123"
    };
    const json = { redirected: '/dashboard' };
    await route.fulfill({ json, headers });
  });

  await page.goto('/login');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

  // TODO fix using session cookie
  // Expect to be redirected to Dashboard page
  // await expect(page.getByRole('heading', { name: 'Welcome Test' })).toBeVisible();
});