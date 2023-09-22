import { test, expect } from '@playwright/test';

test('test without login', async ({ page }) => {
  await page.goto('/dashboard');

  // Expect to be redirected to Login page
  await expect(page).toHaveTitle(/Sign in/);
});

test('test with login', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Expect to be redirected to Dashboard page
  await expect(page.getByRole('heading', { name: 'Welcome Test' })).toBeVisible();
});