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
      keyframes: {
        'float-robot': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'float-robot-3s': 'float-robot 3s ease-in-out infinite',
        'float-robot-5s': 'float-robot 5s ease-in-out infinite',
      },
    },
  },
  plugins: [('@tailwindcss/line-clamp')],
}

