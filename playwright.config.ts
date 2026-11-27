/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',

	testMatch: '**/*.spec.{ts,js}',

	use: {
		baseURL: 'http://127.0.0.1:4173',
		...devices['Desktop Chrome']
	},

	webServer: {
		command: 'npm run build && npm run preview -- --host 0.0.0.0',
		url: 'http://127.0.0.1:4173',
		reuseExistingServer: !process.env.CI,
		timeout: 120000
	}
});