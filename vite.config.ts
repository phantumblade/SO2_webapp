import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nota GitHub Pages:
// Per un project site su https://<utente>.github.io/<repo>/
// imposta `base` a "/<repo>/". Il repo corrente è "SO2-website".
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Usa il nome esatto del repository GitHub per Pages
  base: mode === 'production' ? '/SO2_webapp/' : '/',
  server: {
    host: true,
    port: 5173
  },
  preview: {
    host: true,
    port: 4173
  },
  // Lasciamo l'autodetect di PostCSS (postcss.config.js)
  // e indirizziamo l'output direttamente in `docs` per GitHub Pages.
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
}))
