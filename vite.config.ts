import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // TODO: REMOVE WHEN SETTING CUSTOM DOMAIN
  base: './',
  plugins: [vue()],
})
