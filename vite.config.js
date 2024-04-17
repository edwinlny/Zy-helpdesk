import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // vite.config.js
  server: {
    // Proxy API requests to your backend
    proxy: {
      '/tickets': 'http://localhost:4000', // Example proxy configuration
    },
    // Rewrite all requests to index.html
    // This enables proper handling of client-side routing
    rewrite: {
      '^/.*': '/index.html',
    },
  },
  plugins: [react()],
  optimizeDeps: {
    entries: [],
  },
});
