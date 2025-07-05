import { test, expect, chromium } from '@playwright/test';

test('TC-001: Submit Request Demo form successfully', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 1: Open the website
  await page.goto('https://recruter.ai');

  // Step 2: Click "Request Demo" button
  await page.click('text=Request Demo');

  // Step 3: Wait for the form to load
  await page.waitForSelector('input[placeholder="Enter your full name"]');

  // Step 4: Fill the form
  await page.fill('input[placeholder="Enter your full name"]', 'Vaibhav Gautam');
  await page.fill('input[placeholder="Enter your email"]', 'vaibhav@example.com');
  await page.fill('input[placeholder="Enter your phone number"]', '9876543210');
  await page.fill('input[placeholder="Enter your website"]', 'https://vaibhavsite.com');
  await page.selectOption('select', { label: 'Google' }); // Or choose another if available
  await page.fill('textarea[placeholder="Enter your message"]', 'This is a test automation demo.');

  // Step 5: Submit the form
  await page.click('text=Submit Request');

  // Optional: Wait for confirmation or URL change (depends on what happens after submit)
  await page.waitForTimeout(2000); // give 2s to respond
  
  // browser page pause
 await page.pause();
});
