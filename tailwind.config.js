/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Menlo', 'Monaco', '"Courier New"', 'monospace'],
        sans: ['Menlo', 'Monaco', '"Courier New"', 'monospace'],
      },
      colors: {
        term: {
          bg: '#0a0b0d',
          panel: '#111318',
          border: '#24272e',
          text: '#e7e9ec',
          muted: '#8b929c',
          green: '#4ade80',
          amber: '#fbbf24',
          cyan: '#22d3ee',
        },
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
