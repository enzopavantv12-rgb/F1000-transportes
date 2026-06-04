import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://f1000transportes.com',
      dynamicRoutes: ['/', '/motorista-parceiro'],
      changefreq: 'monthly',
      priority: { '/': 1.0, '/motorista-parceiro': 0.8 },
    }),
  ],
  build: {
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'framer':       ['framer-motion'],
          'react-vendor': ['react', 'react-dom'],
          'router':       ['react-router-dom'],
        },
      },
    },
  },
})
