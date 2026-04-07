import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mayfly-System-React-Website/',
  build: {
    minify: false,
    cssMinify: false,
  },
})
