/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cream: '#F5F0E8',
        'off-white': '#FAF8F5',
        charcoal: '#0D0D0D',
        stone: '#1A1A1A',
        muted: '#6B6B6B',
        accent: '#C9A96E',
        'accent-light': '#E8D5B0',
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.4em',
      },
    },
  },
  plugins: [],
}
