import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [['html', { open: 'never' }]], // HTML report banega
  use: {
    screenshot: 'only-on-failure',        // Sirf fail par screenshot
    video: 'retain-on-failure'            // Sirf fail par video
  },
});
