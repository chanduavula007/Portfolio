/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#00D4AA',
        'primary-dark': '#00A878',
        gold:      '#F0C040',
        dark:      '#060B14',
        surface:   '#0C1420',
        card:      '#0F1C2E',
        border:    'rgba(0,212,170,0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      keyframes: {
        float: { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-12px)' } },
        fadeUp: { from:{ opacity:'0', transform:'translateY(30px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
      },
      animation: {
        float:    'float 3s ease-in-out infinite',
        'fade-up':'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};
