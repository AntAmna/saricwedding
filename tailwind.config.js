/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ebGaramond: ['Eb Garamond', 'serif'],
      },
      colors: {
        'viber-purple': '#7360f2',
      },
    },
  },
  plugins: [],
}
