import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/users': {
        target: 'http://user-service:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/users/, '')
      },
      '/api/products': {
        target: 'http://product-service:5002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/products/, '')
      },
      '/api/orders': {
        target: 'http://order-service:5003',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/orders/, '')
      }
    }
  }
})
