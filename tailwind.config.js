/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'baskervville': ['Baskervville', 'serif'],
        'libre-caslon': ['Libre Caslon Text', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
