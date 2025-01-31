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
        target: 'https://new.aixstudio.kr', //TODO: 추후 알맞는 API 서버로 수정
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
})
