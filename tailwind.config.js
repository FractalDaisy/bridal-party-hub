/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        powder: {
          50: '#f2f8fc',
          100: '#e3f0f9',
          200: '#c8e2f4',
          300: '#a3ceec',
          400: '#75b3de',
          500: '#5199cc',
          600: '#3a7cb1',
          700: '#306490',
          800: '#2a5376',
          900: '#264663',
        },
        celestial: {
          50: '#fbfaf4',
          100: '#f5f0db',
          200: '#ebdcb2',
          300: '#dfc382',
          400: '#cca450',
          500: '#b78c3a',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        whimsical: ['"Great Vibes"', 'cursive']
      }
    },
  },
  plugins: [],
}
