import {plugins} from "./postcss.config.cjs";

export default {
  content: [
      './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '19200px',
    },
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui'],
        pretendard: ['Pretendard', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}

