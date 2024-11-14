import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test:{
    globals: true,
    environment: 'happy-dom',
    css: true
  },
})