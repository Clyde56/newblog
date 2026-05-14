/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: { 50: '#eef2ff', 500: '#667eea', 600: '#5a6fd6', 700: '#764ba2' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
