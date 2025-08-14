import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use a relative base so the app works on GitHub Pages and in local previews
  base: './',
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
})
