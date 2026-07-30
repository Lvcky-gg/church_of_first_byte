import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Relative base so the built sanctuary runs from any path — a gh-pages
// subdirectory, a file:// URL, or a root domain. Carry up the bones.
export default defineConfig({
  base: './',
  plugins: [vue()],
})
