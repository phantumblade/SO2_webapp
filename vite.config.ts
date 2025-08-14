import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SO2_webapp/',        // 👈 necessario per GitHub Pages (project page)
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
})
