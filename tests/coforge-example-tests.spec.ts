import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Navigate to the Coforge homepage before each test
  await page.goto('https://www.coforge.com/');
  // Assert that the page has the correct title
  await expect(page).toHaveTitle(/Coforge/);
});

test('Navbar links', async ({ page }) => {
 // Click on the Investors link in the navbar
  await page.getByRole('link', { name: 'Investors' }).click();
  // Assert Cookies Policy link is visible on the Investors page
  await expect(page.getByText('Cookies Policy')).toBeVisible();
  // Click on Deny all button in the cookie consent banner
  await page.getByRole('button', { name: 'Deny all' }).click();
  // Assert that the cookie consent banner is no longer visible
  await expect(page.getByRole('button', { name: 'Deny all' })).not.toBeVisible();
  // Assert that the Investors page has the correct heading
  await expect(page.getByRole('heading', { name: 'Investor Relations' })).toBeVisible();
});

test('Blog links', async ({ page }) => {
  // Click on 'All Insights' button to access the blog page
  await page.getByRole('link', { name: 'All Insights' }).click();
  // Assert that the blog page has the correct heading
  await expect(page.getByRole('heading', { name: 'Blog' })).toBeVisible();
});