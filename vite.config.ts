import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the OS Lessons App with dark mode support.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});