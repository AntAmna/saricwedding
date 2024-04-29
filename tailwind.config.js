/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfairDisplay: ['Playfair Display', 'sans-serif'],
        sacramento: ['Sacramento', 'serif'],
      },
      colors: {
        'viber-purple': '#7360f2',
      }
    },
  },
  plugins: [],
}
