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
      '2xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        nanumSquareRound: ['NanumSquareRound', 'ui-sans-serif', 'system-ui'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}

