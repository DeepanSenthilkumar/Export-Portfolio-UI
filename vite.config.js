import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Frontend-only prototype: React + Vite chosen for fastest dev/build performance.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
  build: {
    target: 'es2019',
    sourcemap: false,
  },
});