import { test, expect } from '@playwright/test';

test('test without login', async ({ page }) => {
  await page.goto('/dashboard');

  await expect(page).toHaveTitle(/Sign in/);
});

test('test with login', async ({ page }) => {
  await page.goto('/login');
  
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  
  await expect(page.getByRole('heading', { name: 'Welcome Test' })).toBeVisible();
});