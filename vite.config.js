import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use VITE_BASE=/repo-name/ when deploying to GitHub Pages. Netlify/Vercel use "/".
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    minify: 'esbuild',   // minifies + tree-shakes JS
    cssMinify: true,     // minifies CSS
    sourcemap: false,
    assetsInlineLimit: 0, // keep images as separate files so they can be lazy-loaded
    chunkSizeWarningLimit: 300,
    rollupOptions: {
      output: {
        // Split big vendor libraries into their own long-lived, cacheable chunks
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react'
        },
      },
    },
  },
})
