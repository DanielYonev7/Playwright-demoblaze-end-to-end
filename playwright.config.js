// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({

  timeout: 30000, // 30 seconds default timeout per test
  use: {
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  retries: 1, // Retry failed tests once
  reporter: [['list']],
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }]}
);
//     {
//       name: 'firefox',
//       use: { browserName: 'firefox' },
//     },
//     {
//       name: 'webkit',
//       use: { browserName: 'webkit' },
//     },
//   ],
// })