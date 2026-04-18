import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // use '/' for Vercel, and '/Turify/' for GitHub Pages
  base: process.env.VERCEL ? "/" : "/Turify/",
})

