/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'khmer': ['"Kantumruy Pro"', '"Noto Sans Khmer"', 'sans-serif'],
        'english': ['"Chewy"', 'system-ui', 'cursive'],
        'sans': ['"Kantumruy Pro"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}