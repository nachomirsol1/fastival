import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	optimizeDeps: {
		exclude: ['node:fs/promises'],
	},
	build: {
		commonjsOptions: {
			exclude: ['node:fs/promises'],
		},
	},
});
