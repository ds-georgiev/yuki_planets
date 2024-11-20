/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Adjust paths to match your project structure
  theme: {
    extend: {
      maxWidth: {
        1280: '1280px',
      },
      fontFamily: {
        starjedi: ['Starjedi', 'sans-serif'],
        starjhol: ['Starjhol', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
