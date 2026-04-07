import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/baranuruncan/',
  build: {
    minify: false,
    cssMinify: false,
  },
})
