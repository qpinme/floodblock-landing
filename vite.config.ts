import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // This base path is important for GitHub Pages to load assets correctly
  base: mode === 'production' ? '/floodblock-landing/' : '/',
  build: {
    outDir: 'dist', // Default output directory
    emptyOutDir: true, // Clears dist before build
  },
  server: {
    port: 3000, // Local dev port
    open: true, // Opens browser on dev
  }
}))
