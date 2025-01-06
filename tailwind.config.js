import {plugins} from "./postcss.config.cjs";

export default {
  content: [
      './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui'],
        pretendard: ['Pretendard', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}

