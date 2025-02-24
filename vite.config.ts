import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    proxy:{
      "/api": {
        target: 'https://newmng.aixstudio.kr/elementary_api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      "/api-ai": {
        target: 'https://new.aixstudio.kr/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
