import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    open: '/portfolio/'
  },
  define: {
    'import.meta.env.VITE_BACKEND_BASE_URL': JSON.stringify(process.env.VITE_BACKEND_BASE_URL || 'https://portfolio-xe40.onrender.com')
  },

})
